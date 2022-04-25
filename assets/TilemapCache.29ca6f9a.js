import{S as b}from"./TileInfo.677c5422.js";import{q as L,aP as q,_ as z,aQ as N,aR as C,u,X as j,aS as E,l as U,aT as S,aU as x,Y as J,a2 as I,aV as k,C as d,E as w,aW as B,G as F,aX as M,aY as R,aZ as Y}from"./index.4a406848.js";import{o as G}from"./byteSizeEstimations.651aa0cf.js";var K=Object.defineProperty,Q=Object.defineProperties,V=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,T=(e,t,i)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,v=(e,t)=>{for(var i in t||(t={}))X.call(t,i)&&T(e,i,t[i]);if(A)for(var i of A(t))W.call(t,i)&&T(e,i,t[i]);return e},g=(e,t)=>Q(e,V(t));const le={type:b,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:Z}}}}};function Z(e,t,i,a){if(!e)return null;const{minScale:l,maxScale:s,minLOD:o,maxLOD:n}=t;if(o!=null&&n!=null)return a&&a.ignoreMinMaxLOD?b.fromJSON(e):b.fromJSON(g(v({},e),{lods:e.lods.filter(({level:h})=>h!=null&&h>=o&&h<=n)}));if(l!==0&&s!==0){const h=m=>Math.round(1e4*m)/1e4,r=l?h(l):1/0,c=s?h(s):-1/0;return b.fromJSON(g(v({},e),{lods:e.lods.filter(m=>{const f=h(m.scale);return f<=r&&f>=c})}))}return b.fromJSON(e)}class _{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(t,i){if(this._allAvailability!=="unknown")return this._allAvailability;const a=(t-this.location.top)*this.location.width+(i-this.location.left),l=a%8,s=a>>3,o=this._tileAvailabilityBitSet;return s<0||s>o.length?"unknown":o[s]&1<<l?"available":"unavailable"}_updateFromData(t){const i=this.location.width,a=this.location.height;let l=!0,s=!0;const o=Math.ceil(i*a/8),n=new Uint8Array(o);let h=0;for(let r=0;r<t.length;r++){const c=r%8;t[r]?(s=!1,n[h]|=1<<c):l=!1,c===7&&++h}s?this._allAvailability="unavailable":l?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(t,i){const a=t.service.request||z,{row:l,col:s,width:o,height:n}=t,h={query:{f:"json"}};return i=i?v(v({},h),i):h,a(H(t),i).then(r=>r.data).catch(r=>{if(r&&r.details&&r.details.httpStatus===422)return{location:{top:l,left:s,width:o,height:n},valid:!0,data:E(o*n,0)};throw r}).then(r=>{if(r.location&&(r.location.top!==l||r.location.left!==s||r.location.width!==o||r.location.height!==n))throw new u("tilemap:location-mismatch","Tilemap response for different location than requested",{response:r,definition:{top:l,left:s,width:o,height:n}});return _.fromJSON(r)})}static fromJSON(t){_._validateJSON(t);const i=new _;return i.location=Object.freeze(U(t.location)),i._updateFromData(t.data),Object.freeze(i)}static _validateJSON(t){if(!t||!t.location)throw new u("tilemap:missing-location","Location missing from tilemap response");if(t.valid===!1)throw new u("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new u("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new u("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new u("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function P(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function H(e){let t;if(e.service.type==="vector-tile")t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const a=e.service.tileServers;t=`${a&&a.length?a[e.row%a.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}var y;const ee=L.getLogger("esri.layers.support.TilemapCache");let p=y=class extends q(M){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*G.MEGABYTES,this.request=z,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new N(this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],()=>this._initializeTilemapDefinition()),C(()=>{var e,t;return(e=this.layer)==null||(t=e.tileInfo)==null?void 0:t.lods},e=>this._initializeAvailableLevels(e),R)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(ee.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,a){if(!this._availableLevels[e])return Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,l);if(s)return Promise.resolve(s);const o=a&&a.signal;return a=g(v({},a),{signal:null}),new Promise((n,h)=>{j(o,()=>h(Y()));const r=P(l);let c=this._pendingTilemapRequests[r];if(!c){c=_.fromDefinition(l,a).then(f=>(this._tilemapCache.put(r,f,f.byteSize),f));const m=()=>delete this._pendingTilemapRequests[r];this._pendingTilemapRequests[r]=c,c.then(m,m)}c.then(n,h)})}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch(l=>l).then(l=>{if(l instanceof _){const s=l.getAvailability(t,i);return s==="unavailable"?Promise.reject(new u("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):s}if(S(l))throw l;return"unknown"}):Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,a,l){a.level=e,a.row=t,a.col=i;const s=this.layer.tileInfo;s.updateTileInfo(a);const o=this.fetchAvailability(e,t,i,l).catch(n=>{if(S(n))throw n;if(s.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw n});return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,l,o),o}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,l,s){if(!this._prefetchingEnabled)return;const o=`prefetch-${e}`;if(this.handles.has(o))return;const n=new AbortController;s.then(()=>n.abort(),()=>n.abort());let h=!1;const r={remove(){h||(h=!0,n.abort())}};if(this.handles.add(r,o),await x(10,n.signal).catch(()=>{}),h||(h=!0,this.handles.remove(o)),J(n))return;const c={id:e,level:t,row:i,col:a},m=g(v({},l),{signal:n.signal}),f=this.layer.tileInfo;for(let D=0;y._prefetches.length<y._maxPrefetch&&f.upsampleTile(c);++D){const $=this.fetchAvailability(c.level,c.row,c.col,m);y._prefetches.push($);const O=()=>{y._prefetches.removeUnordered($)};$.then(O,O)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:I(g(v(v({},t.query),a),{token:i!=null?i:(e=t.query)==null?void 0:e.token})),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const l=P(a);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(t=>this._availableLevels[t.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};p._maxPrefetch=4,p._prefetches=new k({initialSize:y._maxPrefetch}),d([w({constructOnly:!0,type:Number})],p.prototype,"levels",void 0),d([B("levels")],p.prototype,"castLevels",null),d([w({readOnly:!0,type:Number})],p.prototype,"size",null),d([w({constructOnly:!0,type:Number})],p.prototype,"cacheByteSize",void 0),d([w({constructOnly:!0})],p.prototype,"layer",void 0),d([w({constructOnly:!0})],p.prototype,"request",void 0),p=y=d([F("esri.layers.support.TilemapCache")],p);export{Z as n,le as r,p as z};

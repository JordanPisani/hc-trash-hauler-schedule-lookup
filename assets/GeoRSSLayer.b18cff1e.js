import{eC as d,eF as c,aF as h,aG as f,eE as m,aH as v,aM as S,bI as g,r as $,aJ as _,_ as b,bY as C,a3 as P,C as s,E as i,ap as w,M as G,eX as O,ff as j,aL as E,G as F,bL as n,fg as x,fh as R,fi as M,fj as k}from"./index.4a406848.js";var L=Object.defineProperty,y=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))I.call(t,r)&&u(e,r,t[r]);if(y)for(var r of y(t))T.call(t,r)&&u(e,r,t[r]);return e};const V=["atom","xml"],A={base:n,key:"type",typeMap:{"simple-line":x},errorContext:"symbol"},J={base:n,key:"type",typeMap:{"picture-marker":R,"simple-marker":M},errorContext:"symbol"},N={base:n,key:"type",typeMap:{"simple-fill":k},errorContext:"symbol"};let o=class extends d(c(h(f(m(v(S)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return typeof e=="string"?D({url:e},t):e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach(r=>{var a;const l=r.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&(a=l.outline)!=null&&a.style.includes("esriSFS")&&(l.outline.style="esriSLSSolid")}),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?g(this.url,V)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=$(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(_).then(()=>this._fetchService(t)).then(r=>{this.read(r,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const r=this.spatialReference,{data:a}=await b(P.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:C(r)?void 0:(t=r.wkid)!=null?t:JSON.stringify(r)},signal:e});return a}_hasGeometry(e){var t,r;return(t=(r=this.featureCollections)==null?void 0:r.some(a=>{var l,p;return((l=a.featureSet)==null?void 0:l.geometryType)===e&&((p=a.featureSet.features)==null?void 0:p.length)>0}))!=null&&t}};s([i()],o.prototype,"description",void 0),s([i()],o.prototype,"featureCollections",void 0),s([w("service","featureCollections",["featureCollection.layers"])],o.prototype,"readFeatureCollections",null),s([i({type:G,json:{name:"lookAtExtent"}})],o.prototype,"fullExtent",void 0),s([i(O)],o.prototype,"id",void 0),s([i(j)],o.prototype,"legendEnabled",void 0),s([i({types:A,json:{write:!0}})],o.prototype,"lineSymbol",void 0),s([i({type:["show","hide"]})],o.prototype,"listMode",void 0),s([i({types:J,json:{write:!0}})],o.prototype,"pointSymbol",void 0),s([i({types:N,json:{write:!0}})],o.prototype,"polygonSymbol",void 0),s([i({type:["GeoRSS"]})],o.prototype,"operationalLayerType",void 0),s([i(E)],o.prototype,"url",void 0),s([i({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],o.prototype,"title",null),s([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],o.prototype,"type",void 0),o=s([F("esri.layers.GeoRSSLayer")],o);const q=o;export{q as default};

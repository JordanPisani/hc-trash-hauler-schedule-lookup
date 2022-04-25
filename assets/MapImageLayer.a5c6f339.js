import{aP as L,aX as D,r as _,C as a,E as o,eB as N,G as I,eC as J,eD as M,eE as T,aE as j,aF as F,aG as R,aH as V,eF as q,eG as U,eH as A,aM as C,aJ as G,eI as x,eJ as v,eK as k,u as O,_ as S,aT as H,M as K,e9 as W,eL as z,ap as B,ai as X,a_ as Q,aL as Y}from"./index.4a406848.js";import{n as Z}from"./loadAll.70f9c8bc.js";import{n as ee,S as re,y as te,e as P,W as se}from"./SublayersOwner.5af36134.js";import{n as $,l as ae}from"./floorFilterUtils.f4814e00.js";import"./CollectionFlattener.a6a62514.js";import"./Version.832c53ba.js";var ie=Object.defineProperty,oe=Object.defineProperties,le=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,E=(e,r,t)=>r in e?ie(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))ne.call(r,t)&&E(e,t,r[t]);if(w)for(var t of w(r))ye.call(r,t)&&E(e,t,r[t]);return e},g=(e,r)=>oe(e,le(r));const pe={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends L(D){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(r=>{const t=$(this.floors,r);return r.toExportImageJSON(t)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&ee(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",r=>this.notifyChange(pe[r.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(r=>r.id).join(","):"show:-1":null}get layerDefs(){var e;const r=!((e=this.floors)==null||!e.length),t=this.visibleSublayers.filter(s=>s.definitionExpression!=null||r&&s.floorInfo!=null);return t.length?JSON.stringify(t.reduce((s,i)=>{const l=$(this.floors,i),p=_(l)?ae(l,i):i.definitionExpression;return s[i.id]=p,s},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,t=i=>{const l=this.scale,p=l===0,h=i.minScale===0||l<=i.minScale,d=i.maxScale===0||l>=i.maxScale;i.visible&&(p||h&&d)&&(i.sublayers?i.sublayers.forEach(t):e.unshift(i))};r&&r.forEach(t);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some((i,l)=>e[l]!==i)?e:s}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r=g(u({},r),{layers:this.layers,layerDefs:this.layerDefs}),r}};a([o({readOnly:!0})],c.prototype,"dynamicLayers",null),a([o()],c.prototype,"floors",void 0),a([o({readOnly:!0})],c.prototype,"hasDynamicLayers",null),a([o()],c.prototype,"layer",null),a([o({readOnly:!0})],c.prototype,"layers",null),a([o({readOnly:!0})],c.prototype,"layerDefs",null),a([o({type:Number})],c.prototype,"scale",void 0),a([o(N)],c.prototype,"timeExtent",void 0),a([o({readOnly:!0})],c.prototype,"version",null),a([o({readOnly:!0})],c.prototype,"visibleSublayers",null),c=a([I("esri.layers.mixins.ExportImageParameters")],c);let n=class extends J(M(T(re(te(j(F(R(V(q(U(A(L(C))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?u({url:e},r):e}load(e){const r=_(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(G).then(()=>this._fetchService(r))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten(({sublayers:y})=>y&&y.toArray().reverse()).toArray();let l=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const y=x(s.origin);if(y===v.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;l=P(i,m,v.SERVICE)}else if(y>v.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");l=P(i,m.sublayers,x(m.origin))}}const p=[],h=u({writeSublayerStructure:l},s);let d=l;i.forEach(y=>{const m=y.write({},h);p.push(m),d=d||y.originOf("visible")==="user"}),p.some(y=>Object.keys(y).length>1)&&(r.layers=p),d&&(r.visibleLayers=i.filter(y=>y.visible).map(y=>y.id))}createExportImageParameters(e,r,t,s){const i=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const l=new c({layer:this,floors:s==null?void 0:s.floors,scale:k({extent:e,width:r})*i}),p=l.toJSON();l.destroy();const h=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},d=e&&e.spatialReference,y=d.wkid||JSON.stringify(d.toJSON());p.dpi*=i;const m={};if(s!=null&&s.timeExtent){const{start:f,end:b}=s.timeExtent.toJSON();m.time=f&&b&&f===b?""+f:`${f==null?"null":f},${b==null?"null":b}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(m.time="null,null");return u(u(u({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+t},p),h),m)}async fetchImage(e,r,t,s){var i;const l={responseType:"image",signal:(i=s==null?void 0:s.signal)!=null?i:null,query:g(u(u(g(u(u({},this.parsedUrl.query),this.createExportImageParameters(e,r,t,s)),{f:"image"}),this.refreshParameters),this.customParameters),{token:this.apiKey})},p=this.parsedUrl.path+"/export";return l.query.dynamicLayers!=null&&!this.capabilities.exportMap.supportsDynamicLayers?Promise.reject(new O("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query})):S(p,l).then(h=>h.data).catch(h=>{throw H(h)?h:new O("mapimagelayer:image-fetch-error",`Unable to load image: ${p}`,{error:h})})}async fetchRecomputedExtents(e={}){const r=g(u({},e),{query:g(u({returnUpdates:!0,f:"json"},this.customParameters),{token:this.apiKey})}),{data:t}=await S(this.url,r),{extent:s,fullExtent:i,timeExtent:l}=t,p=s||i;return{fullExtent:p&&K.fromJSON(p),timeExtent:l&&W.fromJSON({start:l[0],end:l[1]})}}loadAll(){return Z(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return z(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:t}=await S(this.parsedUrl.path,{query:g(u(u({f:"json"},this.parsedUrl.query),this.customParameters),{token:this.apiKey}),signal:e});t&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}};a([o({type:Boolean})],n.prototype,"datesInUnknownTimezone",void 0),a([o()],n.prototype,"dpi",void 0),a([o()],n.prototype,"gdbVersion",void 0),a([o()],n.prototype,"imageFormat",void 0),a([B("imageFormat",["supportedImageFormatTypes"])],n.prototype,"readImageFormat",null),a([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],n.prototype,"imageMaxHeight",void 0),a([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],n.prototype,"imageMaxWidth",void 0),a([o()],n.prototype,"imageTransparency",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],n.prototype,"isReference",void 0),a([o({json:{read:!1,write:!1}})],n.prototype,"labelsVisible",void 0),a([o({type:["ArcGISMapServiceLayer"]})],n.prototype,"operationalLayerType",void 0),a([o({json:{read:!1,write:!1}})],n.prototype,"popupEnabled",void 0),a([o()],n.prototype,"sourceJSON",void 0),a([o({json:{write:{ignoreOrigin:!0}}})],n.prototype,"sublayers",void 0),a([X("sublayers",{layers:{type:[se]},visibleLayers:{type:[Q]}})],n.prototype,"writeSublayers",null),a([o({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),a([o({json:{read:!1},readOnly:!0,value:"map-image"})],n.prototype,"type",void 0),a([o(Y)],n.prototype,"url",void 0),n=a([I("esri.layers.MapImageLayer")],n);const fe=n;export{fe as default};

import{C as R,G as j,d$ as A,r as D,e3 as P}from"./index.4a406848.js";import{o as N}from"./enums2.51e7cb08.js";import{p as G,l as d}from"./tileUtils.89375a62.js";import"./TileKey.ef7dd21e.js";var L=Object.defineProperty,V=Object.defineProperties,W=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,I=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,H=(t,e)=>{for(var r in e||(e={}))q.call(e,r)&&I(t,r,e[r]);if(S)for(var r of S(e))z.call(e,r)&&I(t,r,e[r]);return t},Y=(t,e)=>V(t,W(e));(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d"),r=512;return t.height=r,t.width=1,s=>{e.clearRect(0,0,1,t.height);const a=e.createLinearGradient(0,0,0,t.height);for(const{ratio:o,color:n}of s)a.addColorStop(Math.max(o,.001),`rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`);return e.fillStyle=a,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function B(t,e,r,s){const{blurRadius:a,fieldOffset:o,field:n}=e,m=new Float64Array(r*s),y=J(a),c=Math.round(3*a);let h,u=Number.NEGATIVE_INFINITY;const p=Q(n,o),_=new Set;for(const T of t){const f=T.getCursor();for(;f.next();){const g=f.getObjectId();if(_.has(g))continue;_.add(g);const i=f.readLegacyPointGeometry(),w=128;if(i.x<-w||i.x>=r+w||i.y<-w||i.y>s+w)continue;const F=+p(f),b=Math.round(i.x)-c,v=Math.round(i.y)-c,E=Math.max(0,b),K=Math.max(0,v),k=Math.min(s,Math.round(i.y)+c),$=Math.min(r,Math.round(i.x)+c);for(let M=K;M<k;M++){const C=y[M-v];for(let O=E;O<$;O++){const U=y[O-b];h=m[M*r+O]+=C*U*F,h>u&&(u=h)}}}}return{matrix:m.buffer,max:u}}function J(t){const e=Math.round(3*t),r=2*t*t,s=new Float64Array(2*e+1);for(let a=0;a<=s.length;a++)s[a]=Math.exp(-((a-e)**2)/r)/Math.sqrt(2*Math.PI)*(t/2);return s}function Q(t,e){return t!=null?typeof e=="string"?r=>-1*+r.readAttribute(t):r=>+r.readAttribute(t)+e:r=>1}class l{constructor(e,r){this.offset=e,this.extent=r}}function X(t){const e=t.key,r=new Map,s=256,a=N,o=t.tileInfoView.tileInfo.isWrappable;return r.set(d(e,-1,-1,o).id,new l([-a,-a],[a-s,a-s,a,a])),r.set(d(e,0,-1,o).id,new l([0,-a],[0,a-s,a,a])),r.set(d(e,1,-1,o).id,new l([a,-a],[0,a-s,s,a])),r.set(d(e,-1,0,o).id,new l([-a,0],[a-s,0,a,a])),r.set(d(e,1,0,o).id,new l([a,0],[0,0,s,a])),r.set(d(e,-1,1,o).id,new l([-a,a],[a-s,0,a,s])),r.set(d(e,0,1,o).id,new l([0,a],[0,0,a,s])),r.set(d(e,1,1,o).id,new l([a,a],[0,0,s,s])),r}let x=class extends G{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(t,e){const r=e.schema.processors[0];r.type==="heatmap"&&A(this._schema,r)&&(t.mesh=!0,this._schema=r)}onTileUpdate(t){for(const e of t.removed)this._tileKeyToFeatureSets.delete(e.key.id)}onTileClear(t){const e={clear:!0};return this._tileKeyToFeatureSets.delete(t.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:e})}async onTileMessage(t,e,r){this._tileKeyToFeatureSets.has(t.key.id)||this._tileKeyToFeatureSets.set(t.key.id,new Map);const s=this._tileKeyToFeatureSets.get(t.key.id);if(D(e.addOrUpdate)&&e.addOrUpdate.hasFeatures&&s.set(e.addOrUpdate.instance,e),e.end){const a=[],o=X(t);this._tileKeyToFeatureSets.forEach((c,h)=>{if(h===t.key.id)c.forEach(u=>P(u.addOrUpdate,p=>a.push(p)));else if(o.has(h)){const u=o.get(h),[p,_]=u.offset;c.forEach(T=>P(T.addOrUpdate,f=>{const g=f.transform(p,_,1,1);a.push(g)}))}});const n=B(a,this._schema.mesh,512,512),m={tileKey:t.key.id,intensityInfo:n},y=[n.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",m,Y(H({},r),{transferList:y}))}}onTileError(t,e,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:t.id,error:e},r)}};x=R([j("esri.views.2d.layers.features.processors.HeatmapProcessor")],x);const ae=x;export{ae as default};

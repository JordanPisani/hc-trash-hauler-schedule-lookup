import{ad as p,b1 as c,bS as o,r as g,bT as _,e as f,u,bO as d,aT as w,q as E}from"./index.4a406848.js";import{t as q,n as F}from"./featureConversionUtils.047420f1.js";import{m as S}from"./FeatureStore.9502e84e.js";import{g as T,V as b,f as x}from"./QueryEngine.abc1a2d7.js";import{O as $,L as I}from"./geojson.0bbf2ea5.js";import{d as j}from"./sourceUtils.86b0b4e8.js";import{K as C}from"./wfsUtils.abfb4fe4.js";import"./PooledRBush.94ba80f8.js";import"./quickselect.b4c2f48f.js";import"./normalizeUtils.0579d35f.js";import"./WhereClause.ca90f34c.js";import"./projection.6e7904a8.js";import"./ClassBreaksDefinition.204a6b19.js";import"./OptimizedGeometry.ff0ef7e2.js";import"./OptimizedFeatureSet.2574e09f.js";import"./aaBoundingRect.d1698f96.js";import"./ItemCache.5de3bc98.js";import"./json.67c3770f.js";import"./QueryEngineCapabilities.9e441dc1.js";import"./utils.6c0b404b.js";import"./xmlUtils.5c7e57e0.js";class Y{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await C(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await $(s),p(e);const a=I(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!c(this._queryEngine.spatialReference,o))for(const r of a)g(r.geometry)&&(r.geometry=q(T(F(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};j(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:h,objectIdField:y,customParameters:l}=e;this._featureType=h,this._customParameters=l,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new _(r),await this._checkProjection(n),p(t),this._queryEngine=new b({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:i,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(f(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=d(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),w(s)||E.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await x(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{Y as default};

import{q as m,dC as u,cv as c,u as p,r as _}from"./index.4a406848.js";import{u as y}from"./aaBoundingRect.d1698f96.js";import{Z as f,a as w,n as I}from"./QueryEngine.abc1a2d7.js";import{u as b}from"./Pipeline.6b9058de.js";import"./normalizeUtils.0579d35f.js";import"./WhereClause.ca90f34c.js";import"./projection.6e7904a8.js";import"./featureConversionUtils.047420f1.js";import"./ClassBreaksDefinition.204a6b19.js";import"./TileInfo.677c5422.js";import"./quickselect.b4c2f48f.js";import"./ogcFeatureUtils.e72054f9.js";import"./pbf.b0fae2c2.js";import"./enums2.51e7cb08.js";import"./enums.0a9daf41.js";import"./Texture.991b0293.js";import"./context-util.6810b4cd.js";import"./TileKey.ef7dd21e.js";import"./ItemCache.5de3bc98.js";import"./json.67c3770f.js";import"./QueryEngineCapabilities.9e441dc1.js";import"./utils.6c0b404b.js";import"./OptimizedGeometry.ff0ef7e2.js";import"./query.58797437.js";import"./pbfQueryUtils.c60287e4.js";import"./OptimizedFeatureSet.2574e09f.js";import"./geojson.0bbf2ea5.js";import"./clientSideDefaults.35b6f9f9.js";const d=m.getLogger("esri.views.2d.layers.features.support.whereUtils"),g={getAttribute:(r,t)=>r.field(t)};async function T(r,t){const e=await import("./WhereClause.ca90f34c.js");try{const i=e.WhereClause.create(r,t);if(!i.isStandardized){const s=new p("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);d.error(s)}return s=>{const n=s.readArcadeFeature();return i.testFeature(n,g)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),s=>!0}}const v=m.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),a=1,x=2;class Y{constructor(t){this._geometryBounds=y(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach((t,e)=>{this._idToVisibility.set(e,0)})}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,a)}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach((n,o)=>{const l=!!(this._idToVisibility.get(o)&a),h=s.has(o);!l&&h?e.push(o):l&&!h&&i.push(o),this._idToVisibility.set(o,h?a|x:0)}),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:n}=this;return u.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:n})}async update(t,e){this._hash=JSON.stringify(t);const i=await f(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await T(t.where,this._serviceInfo.fieldsIndex),this.where=t.where}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await w(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i}_setTimeFilter(t){if(this.timeExtent=this._timeOperator=null,t&&t.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=t.timeExtent,this._timeOperator=I(this._serviceInfo.timeInfo,t.timeExtent,b);else{const e=new p("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",t.timeExtent);v.error(e)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const e=t.readHydratedGeometry();return!!e&&this._spatialQueryOperator(e)}_filterByTime(t){return!_(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach((e,i)=>{e&a||(this._idToVisibility.set(i,a),t.push(i))}),t}}export{Y as default};

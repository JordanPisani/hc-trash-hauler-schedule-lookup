import{C as s,E as o,G as E,eG as k,eH as A,fl as N,eC as z,fk as J,eD as U,eE as V,aF as W,aG as Z,eF as H,aH as K,aM as X,fm as O,eQ as Y,dC as R,fn as ee,f5 as te,fo as se,y as re,M as ie,em as D,eS as oe,fq as ae,fp as ne,ff as le,eY as pe,eT as ue,eU as de,eV as ce,fs as fe,h as g,ey as ye,aL as he,ak as me,ar as ge,r as w,t as ve,g1 as Se,u as C,f6 as $e}from"./index.2f57b5df.js";import{N as xe,v as T,x as we,k as be,T as Fe,S as Ie,I as Oe,F as j,j as Re}from"./ogcFeatureUtils.540718fd.js";import"./featureConversionUtils.da22f310.js";import"./OptimizedFeatureSet.2574e09f.js";import"./geojson.e07e18fd.js";import"./OptimizedGeometry.02e7bd71.js";import"./clientSideDefaults.90fb55d8.js";import"./QueryEngineCapabilities.9e441dc1.js";let h=class extends me{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:a,supportedCrs:r},layer:{apiKey:n,capabilities:p,customParameters:l}}=this;return{capabilities:p,collection:e,layerDefinition:t,queryParameters:{apiKey:n,customParameters:l},spatialReference:a,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(a=>ge.fromJSON(a))}queryFeaturesJSON(e,t={}){const a=this.getFeatureDefinition();return this.load(t).then(()=>xe(a,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var a;const r=new RegExp(`^${t}$`,"i");return(a=e.conformsTo.some(n=>r.test(n)))!=null&&a}_getCapabilities(e,t){var a,r,n,p,l,u,c;const d=w(t)?(a=t.components)==null?void 0:a.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:(r=(n=d==null||(p=d.limit)==null||(l=p.schema)==null?void 0:l.maximum)!=null?n:d==null||(u=d.limitFeatures)==null||(c=u.schema)==null?void 0:c.maximum)!=null?r:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const a=(t=e.extent)==null?void 0:t.spatial;if(!a)return null;const r=a.bbox[0],n=r.length===4,p=r[0],l=r[1],u=n?void 0:r[2];return{xmin:p,ymin:l,xmax:n?r[2]:r[3],ymax:n?r[3]:r[4],zmin:u,zmax:n?void 0:r[5],spatialReference:g.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const a=(t=e.storageCrs)!=null?t:j,r=T(a);return ve(r)?g.WGS84:new g({wkid:r})}_getSupportedSpatialReferences(e,t){var a;const r="#/crs",n=(a=e.crs)!=null?a:[j],p=n.includes(r)?n.filter(u=>u!==r).concat(t.crs):n,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return p.filter(u=>!l.test(u))}async _loadOGCServices(e,t){const a=w(t)?t.signal:null,{apiKey:r,collectionId:n,customParameters:p,fields:l,geometryType:u,hasZ:c,objectIdField:d,timeInfo:b,url:P}=e,_={fields:l==null?void 0:l.map(y=>y.toJSON()),geometryType:Se.toJSON(u),hasZ:c,objectIdField:d,timeInfo:b==null?void 0:b.toJSON()},m={apiKey:r,customParameters:p,signal:a},v=await we(P,m),[F,I]=await Promise.all([be(v,m),Fe(v,m)]);if(!this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new C("ogc-feature-layer:no-geojson-support","Server does not support geojson");const f=I.collections.find(y=>y.id===n);if(!f)throw new C("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const G=this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Ie(v,m):null,S=await Oe(f,_,m),q=this._getCapabilities(S.hasZ,G),B=this._getExtent(f),M=this._getStorageSpatialReference(f).toJSON(),L=this._getSupportedSpatialReferences(f,I),Q=new RegExp(`^${Re}`,"i"),$={};for(const y of L){const x=T(y);w(x)&&($[x]||($[x]=y.replace(Q,"")))}S.extent=B,this.featureDefinition={capabilities:q,collection:f,layerDefinition:S,queryParameters:{},spatialReference:M,supportedCrs:$}}};s([o()],h.prototype,"featureDefinition",void 0),s([o({constructOnly:!0})],h.prototype,"layer",void 0),s([o()],h.prototype,"type",void 0),h=s([E("esri.layers.graphics.sources.OGCFeatureSource")],h);const De=h,Ce=$e();let i=class extends k(A(N(z(J(U(V(W(Z(H(K(X))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new De({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Y(this,e)}createQuery(){return new R}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let r,n=!1;const p=t==null||(a=t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(p==null?void 0:p[this.typeIdField]);return l!=null&&this.types&&(n=this.types.some(u=>{var c,d;return u.id==l&&(r=(c=u.domains)==null?void 0:c[e],((d=r)==null?void 0:d.type)==="inherited"&&(r=this._getLayerDomain(e)),!0)})),n||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(R.from(e)||this.createQuery(),t)).then(a=>{var r;return a==null||(r=a.features)==null||r.forEach(n=>{n.layer=n.sourceLayer=this}),a})}serviceSupportsSpatialReference(e){var t,a;return(t=(a=this.source)==null?void 0:a.serviceSupportsSpatialReference(e))!=null&&t}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),O(this.renderer,this.fieldsIndex),ee(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};s([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"capabilities",void 0),s([o({type:String,json:{write:!0}})],i.prototype,"collectionId",void 0),s([o({type:String})],i.prototype,"copyright",void 0),s([o({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),s([o({type:String})],i.prototype,"definitionExpression",void 0),s([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],i.prototype,"description",void 0),s([o({type:String})],i.prototype,"displayField",void 0),s([o(te)],i.prototype,"elevationInfo",void 0),s([o(se)],i.prototype,"featureReduction",void 0),s([o({type:[re],json:{origins:{service:{name:"layerDefinition.fields"}}}})],i.prototype,"fields",void 0),s([o(Ce.fieldsIndex)],i.prototype,"fieldsIndex",void 0),s([o({readOnly:!0,type:ie,json:{origins:{service:{name:"layerDefinition.extent"}}}})],i.prototype,"fullExtent",void 0),s([o({type:D.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:D.read}}}}})],i.prototype,"geometryType",void 0),s([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],i.prototype,"hasZ",void 0),s([o({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),s([o({type:[oe],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ae},write:!0}}}})],i.prototype,"labelingInfo",void 0),s([o(ne)],i.prototype,"labelsVisible",void 0),s([o(le)],i.prototype,"legendEnabled",void 0),s([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],i.prototype,"objectIdField",void 0),s([o({type:["OGCFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),s([o(pe)],i.prototype,"popupEnabled",void 0),s([o({type:ue,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),s([o({types:de,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:ce,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],i.prototype,"renderer",null),s([o(fe)],i.prototype,"screenSizePerspectiveEnabled",void 0),s([o({readOnly:!0})],i.prototype,"source",void 0),s([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],i.prototype,"spatialReference",void 0),s([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],i.prototype,"title",void 0),s([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([o({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),s([o({type:[ye]})],i.prototype,"types",void 0),s([o(he)],i.prototype,"url",void 0),i=s([E("esri.layers.OGCFeatureLayer")],i);const Me=i;export{Me as default};
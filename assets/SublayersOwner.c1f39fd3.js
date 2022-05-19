import{q as X,aP as ie,aH as se,eM as ae,ak as le,u as E,eJ as u,_ as Y,bT as oe,eN as ne,bC as ue,eO as N,bh as ye,aa as U,a2 as pe,eP as P,eQ as de,dC as J,l as _,r as q,C as a,E as n,ap as g,y as ce,eR as fe,M as Z,a_ as $,eS as he,ai as w,eT as be,eU as ge,eV as me,ep as W,eW as Q,aW as Se,ey as ve,G as k,eX as Ie,eY as we,h as Ee,V as Oe,ad as Le,eI as V,eZ as xe}from"./index.2f57b5df.js";import{r as _e}from"./Version.d38313b4.js";import{p as De}from"./CollectionFlattener.bdeed31d.js";import{l as Pe}from"./floorFilterUtils.f4814e00.js";var Te=Object.defineProperty,Fe=Object.defineProperties,Ve=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?Te(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,T=(e,r)=>{for(var t in r||(r={}))$e.call(r,t)&&K(e,t,r[t]);if(G)for(var t of G(r))Ce.call(r,t)&&K(e,t,r[t]);return e},R=(e,r)=>Fe(e,Ve(r));const Je=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(t,i){var s,l;const y=i.capabilities&&i.capabilities.split(",").map(te=>te.toLowerCase().trim());if(!y)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const c=this.type,m=y.includes("query"),b=y.includes("map"),d=!!i.exportTilesAllowed,O=y.includes("tilemap"),I=c!=="tile"&&!!i.supportsDynamicLayers,L=c!=="tile"&&(!i.tileInfo||I),p=c!=="tile"&&(!i.tileInfo||I),h=c!=="tile",S=i.cimVersion&&_e.parse(i.cimVersion),x=(s=S==null?void 0:S.since(1,4))!=null&&s,re=(l=S==null?void 0:S.since(2,0))!=null&&l;return{operations:{supportsQuery:m,supportsExportMap:b,supportsExportTiles:d,supportsTileMap:O},exportMap:b?{supportsArcadeExpressionForLabeling:x,supportsSublayersChanges:h,supportsDynamicLayers:I,supportsSublayerVisibility:L,supportsSublayerDefinitionExpression:p,supportsCIMSymbols:re}:null,exportTiles:d?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(t,i){return await this.fetchAllLayersAndTables(i),this._allLayersAndTablesMap.get(t)}async fetchAllLayersAndTables(t){await this.load(t),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Y(Oe(this.url).path+"/layers",{responseType:"json",query:R(T({f:"json"},this.customParameters),{token:this.apiKey})}).then(s=>{this._allLayersAndTablesMap=new Map;for(const l of s.data.layers)this._allLayersAndTablesMap.set(l.id,l);return{result:s.data}},s=>({error:s})));const i=await this._allLayersAndTablesPromise;if(Le(t),"result"in i)return i.result;throw i.error}};return a([n({readOnly:!0})],r.prototype,"capabilities",void 0),a([g("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),a([n({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),a([n({type:Z})],r.prototype,"fullExtent",void 0),a([n(Ie)],r.prototype,"id",void 0),a([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),a([n(we)],r.prototype,"popupEnabled",void 0),a([n({type:Ee})],r.prototype,"spatialReference",void 0),a([n({readOnly:!0})],r.prototype,"version",void 0),a([g("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=a([k("esri.layers.mixins.ArcGISMapService")],r),r};var F;function C(e){return e&&e.type==="esriSMS"}function M(e,r,t){var i;const s=this.originIdOf(r)>=V(t.origin);return{ignoreOrigin:!0,allowNull:s,enabled:!!t&&((i=t.layer)==null?void 0:i.type)==="map-image"&&(t.writeSublayerStructure||s)}}function H(e,r,t){var i;return{enabled:!!t&&((i=t.layer)==null?void 0:i.type)==="tile"&&this._isOverridden(r)}}function f(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function D(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=V(t.origin))}}const j=X.getLogger("esri.layers.support.Sublayer");let Me=0;const v=new Set;v.add("layer"),v.add("parent"),v.add("loaded"),v.add("loadStatus"),v.add("loadError"),v.add("loadWarnings");let o=F=class extends ie(se(ae(le))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var r;if(!this.layer&&!this.url)throw new E("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let t=null;if(!this.layer||this.originIdOf("url")>u.SERVICE||((r=this.source)==null?void 0:r.type)==="data-layer")t=(await Y(this.url,T({responseType:"json",query:{f:"json"}},e))).data;else{var i;let s=this.id;((i=this.source)==null?void 0:i.type)==="map-layer"&&(s=this.source.mapLayerId),t=await this.layer.fetchSublayerInfo(s,e)}t&&(this.sourceJSON=t,this.read({layerDefinition:t},{origin:"service"}))})()),this}readCapabilities(e,r){const t=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map(i=>i.trim()):[];return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:t.indexOf("query")!==-1}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new oe(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields){for(const t of r.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){const e=this._get("id");return e==null?Me++:e}set id(e){this._get("id")!==e&&(this.get("layer.capabilities.exportMap.supportsDynamicLayers")!==!1?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map(s=>s.write({},i))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(r=>r.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields){for(const t of r.fields)if(t.type==="esriFieldTypeOID")return t.name}}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const t=r.layerDefinition;return 1-.01*(t.transparency!=null?t.transparency:t.drawingInfo.transparency)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=ne(this.parent.id):r.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e){for(const r of e.getSymbols())if(ue(r)){j.warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new N({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return ye(U.ofType(F),e)}writeSublayers(e,r,t){this.get("sublayers.length")&&(r[t]=this.sublayers.map(i=>i.id).toArray().reverse())}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const i=r.fields.find(s=>s.name.toLowerCase()===t);i&&(t=i.name)}return null}get url(){var e,r;const t=(e=(r=this.layer)==null?void 0:r.parsedUrl)!=null?e:this._lastParsedUrl,i=this.source;if(!t)return null;if(this._lastParsedUrl=t,(i==null?void 0:i.type)==="map-layer")return`${t.path}/${i.mapLayerId}`;const s={layer:JSON.stringify({source:this.source})};return`${t.path}/dynamicLayer?${pe(s)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=P(this),r=new F;return P(r).store=e.clone(v),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return de(this,e)}createQuery(){return new J({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,r;if(this.hasOwnProperty("sublayers"))return null;const t=(e=this.layer)==null?void 0:e.parsedUrl,i=new(await import("./index.2f57b5df.js").then(function(s){return s.h6}).then(function(s){return s.hn})).default({url:t.path});return t&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source),this.layer.refreshInterval!=null&&(i.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=_(this.floorInfo)),this.originIdOf("labelingInfo")>u.SERVICE&&(i.labelingInfo=_(this.labelingInfo)),this.originIdOf("labelsVisible")>u.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>u.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>u.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>u.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>u.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>u.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>u.DEFAULTS&&(i.popupTemplate=_(this.popupTemplate)),this.originIdOf("renderer")>u.SERVICE&&(i.renderer=_(this.renderer)),((r=this.source)==null?void 0:r.type)==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>u.DEFAULTS&&(i.title=this.title),this.layer.type==="map-image"&&this.layer.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=this.layer.customParameters),this.layer.type==="tile"&&this.layer.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=this.layer.customParameters),i}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(i==null)return null;let s=null;return t.some(l=>{const{id:y}=l;return y!=null&&(y.toString()===i.toString()&&(s=l),!!s)}),s}getFieldDomain(e,r){const t=r&&r.feature,i=this.getFeatureType(t);if(i){const s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),r){var t,i,s,l;if(await this.load(),!this.get("capabilities.operations.supportsQuery"))throw new E("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:y},{default:c}]=await Promise.all([import("./query.60810d22.js").then(function(d){return d.q}),import("./index.2f57b5df.js").then(function(d){return d.h6}).then(function(d){return d.hm})]),m=await y(this.url,J.from(e),(t=(i=this.layer)==null?void 0:i.spatialReference)!=null?t:null,R(T({},r),{query:R(T({},(s=this.layer)==null?void 0:s.customParameters),{token:(l=this.layer)==null?void 0:l.apiKey})})),b=c.fromJSON(m.data);if(b!=null&&b.features)for(const d of b.features)d.sourceLayer=this;return b}toExportImageJSON(e){var r;const t={id:this.id,source:((r=this.source)==null?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};if(this.definitionExpression){const l=q(e)?Pe(e,this):this.definitionExpression;t.definitionExpression=l}else q(e)&&(t.definitionExpression=e);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((l,y)=>(l[y]=this.originIdOf(y),l),{});if(Object.keys(i).some(l=>i[l]>u.SERVICE)){const l=t.drawingInfo={};i.renderer>u.SERVICE&&(l.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>u.SERVICE&&(l.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>u.SERVICE&&(l.labelingInfo=this.labelingInfo?this.labelingInfo.map(y=>y.write({},{origin:"service",layer:this.layer})):null,l.showLabels=!0),i.opacity>u.SERVICE&&(l.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(l.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,r=>{r.color||r.style!=="esriSMSX"&&r.style!=="esriSMSCross"||(r.outline&&r.outline.color?r.color=r.outline.color:r.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,r){if(e){const t="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const i of t)C(i.symbol)&&r(i.symbol);"symbol"in e&&C(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&C(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const t=this.layer,i=this._get(e);let s,l;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",l="supportsModification"}const y=P(this).getDefaultOrigin();if(y!=="service"){if(s&&this.get(`layer.capabilities.exportMap.${s}`)===!1)return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(l&&this.get(`capabilities.exportMap.${l}`)===!1)return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${l}'`)}e!=="source"||this.loadStatus==="not-loaded"?(this._set(e,r),y!=="service"&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach(t=>{t.parent=null,t.layer=null}),this.handles.removeAll()),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this.handles.add([e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),e.on("before-changes",t=>{const i=this.get("layer.capabilities.exportMap.supportsSublayersChanges");i==null||i||(j.error(new E("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(e,r){j.error(new E("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};o.test={isMapImageLayerOverridePolicy:e=>e===f||e===M,isTileImageLayerOverridePolicy:e=>e===H},a([n({readOnly:!0})],o.prototype,"capabilities",void 0),a([g("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:M}}})],o.prototype,"definitionExpression",null),a([n({type:[ce],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([n({readOnly:!0})],o.prototype,"fieldsIndex",null),a([n({type:fe,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:M},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([n({type:Z,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([n({type:String})],o.prototype,"globalIdField",void 0),a([g("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([n({type:$,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([n({value:null,type:[he],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:f}}})],o.prototype,"labelingInfo",null),a([w("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:f}}})],o.prototype,"labelsVisible",null),a([n({value:null})],o.prototype,"layer",null),a([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:D}}})],o.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([n({type:Number,value:0,json:{write:{overridePolicy:f}}})],o.prototype,"minScale",null),a([g("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([n({type:Number,value:0,json:{write:{overridePolicy:f}}})],o.prototype,"maxScale",null),a([g("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([n({type:String})],o.prototype,"objectIdField",void 0),a([g("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:f}}})],o.prototype,"opacity",null),a([g("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([w("opacity")],o.prototype,"writeOpacity",null),a([n({json:{type:$,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:f}}})],o.prototype,"parent",void 0),a([w("parent")],o.prototype,"writeParent",null),a([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:D,writer(e,r,t){r[t]=!e}}}})],o.prototype,"popupEnabled",void 0),a([n({type:be,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:D}}})],o.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),a([n({types:ge,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:f},origins:{"web-scene":{types:me,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:f}}}}})],o.prototype,"renderer",null),a([n({types:{key:"type",base:null,typeMap:{"data-layer":W,"map-layer":N}},cast(e){if(e){if("mapLayerId"in e)return Q(N,e);if("dataSource"in e)return Q(W,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:f}}})],o.prototype,"source",null),a([n()],o.prototype,"sourceJSON",void 0),a([n({value:null,json:{type:[$],write:{target:"subLayerIds",allowNull:!0,overridePolicy:f}}})],o.prototype,"sublayers",null),a([Se("sublayers")],o.prototype,"castSublayers",null),a([w("sublayers")],o.prototype,"writeSublayers",null),a([n({type:String,json:{name:"name",write:{overridePolicy:D}}})],o.prototype,"title",void 0),a([n({type:String})],o.prototype,"typeIdField",void 0),a([g("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([n({type:[ve],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([n({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:H}}})],o.prototype,"url",null),a([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:f}}})],o.prototype,"visible",null),a([w("visible")],o.prototype,"writeVisible",null),o=F=a([k("esri.layers.support.Sublayer")],o);const B=o;function qe(e,r,t){return r.flatten(({sublayers:s})=>s).length!==e.length?!0:!!e.some(s=>s.originIdOf("minScale")>t||s.originIdOf("maxScale")>t||s.originIdOf("renderer")>t||s.originIdOf("labelingInfo")>t||s.originIdOf("opacity")>t||s.originIdOf("labelsVisible")>t||s.originIdOf("source")>t)||!z(e,r)}function We(e,r,t){return!!e.some(i=>{const s=i.source;return!(!s||s.type==="map-layer"&&s.mapLayerId===i.id&&(!s.gdbVersion||s.gdbVersion===t.gdbVersion))||i.originIdOf("renderer")>u.SERVICE||i.originIdOf("labelingInfo")>u.SERVICE||i.originIdOf("opacity")>u.SERVICE||i.originIdOf("labelsVisible")>u.SERVICE})||!z(e,r)}function z(e,r){if(!e||!e.length)return!0;const t=r.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).map(l=>l.id).toArray();if(e.length>t.length)return!1;let i=0;const s=t.length;for(const{id:l}of e){for(;i<s&&t[i]!==l;)i++;if(i>=s)return!1}return!0}function je(e){return!!e&&e.some(r=>r.minScale!=null||r.layerDefinition&&r.layerDefinition.minScale!=null)}const Ae=X.getLogger("esri.layers.TileLayer");function Ne(e,r){const t=[],i={};return e&&e.forEach(s=>{const l=new B;if(l.read(s,r),i[l.id]=l,s.parentLayerId!=null&&s.parentLayerId!==-1){const y=i[s.parentLayerId];y.sublayers||(y.sublayers=[]),y.sublayers.unshift(l)}else t.unshift(l)}),t}const A=U.ofType(B);function ee(e,r){e&&e.forEach(t=>{r(t),t.sublayers&&t.sublayers.length&&ee(t.sublayers,r)})}const Qe=e=>{let r=class extends e{constructor(...t){super(...t),this.allSublayers=new De({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[u.SERVICE]:{},[u.PORTAL_ITEM]:{},[u.WEB_SCENE]:{},[u.WEB_MAP]:{}},this.handles.add(this.watch("sublayers",(i,s)=>this._handleSublayersChange(i,s),!0))}readSublayers(t,i){if(!i||!t)return;const{sublayersSourceJSON:s}=this,l=V(i.origin);if(l<u.SERVICE||(s[l]={context:i,visibleLayers:t.visibleLayers||s[l].visibleLayers,layers:t.layers||s[l].layers},l>u.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:y,origin:c}=this.createSublayersForOrigin("web-document"),m=P(this);m.setDefaultOrigin(c),this._set("sublayers",new A(y)),m.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){const i=V(t==="web-document"?"web-map":t);let s=u.SERVICE,l=this.sublayersSourceJSON[u.SERVICE].layers,y=this.sublayersSourceJSON[u.SERVICE].context,c=null;const m=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(p=>p<=i);for(const p of m){const h=this.sublayersSourceJSON[p];je(h.layers)&&(s=p,l=h.layers,y=h.context,h.visibleLayers&&(c={visibleLayers:h.visibleLayers,context:h.context}))}const b=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(p=>p>s&&p<=i);let d=null;for(const p of b){const{layers:h,visibleLayers:S,context:x}=this.sublayersSourceJSON[p];h&&(d={layers:h,context:x}),S&&(c={visibleLayers:S,context:x})}const O=Ne(l,y),I=new Map,L=new Set;if(d)for(const p of d.layers)I.set(p.id,p);if(c)for(const p of c.visibleLayers)L.add(p);return ee(O,p=>{d&&p.read(I.get(p.id),d.context),c&&p.read({defaultVisibility:L.has(p.id)},c.context)}),{origin:xe(s),sublayers:new A({items:O})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.handles.remove("sublayers-owner")),t&&(t.forEach(s=>{s.parent=this,s.layer=this}),this.handles.add([t.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),t.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.handles.add(t.on("before-changes",s=>{Ae.error(new E("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([n({readOnly:!0})],r.prototype,"allSublayers",void 0),a([n({readOnly:!0,type:U.ofType(B)})],r.prototype,"serviceSublayers",void 0),a([n({value:null,type:A,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),a([n({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=a([k("esri.layers.mixins.SublayersOwner")],r),r};export{Qe as S,B as W,qe as e,We as n,Je as y};
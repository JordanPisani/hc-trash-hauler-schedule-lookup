import{p as l,M as R,m as I,j as b,v as F,g as B,c as z,d as L,L as D,H as K}from"./index.4a406848.js";import{x as s,U as g,H as P,c as j,E as p,V as y,n as N,B as m,G as O,D as x,J as c,Q as H,R as h,T as v,W as Z,i as E,X as Q,$ as X,a0 as Y,a1 as _,a2 as S}from"./arcadeUtils.955c14cc.js";import{S as nn,g as tn,A as en,w as rn,x as un,p as on,O as an,d as sn,h as fn,j as cn,k as ln,R as gn,E as hn,l as dn,y as wn,W as J,K as T,F as M,M as k,m as mn,P as V,U as W,G as An,V as pn,b as yn,I as En,q as G,J as U,v as In}from"./geometryEngineAsync.26bd6d13.js";import"./featureConversionUtils.047420f1.js";import"./number.0021b4cc.js";import"./OptimizedGeometry.ff0ef7e2.js";import"./OptimizedFeatureSet.2574e09f.js";function q(t){return B.indexOf("4.")===0?F.fromExtent(t):new F({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function A(t){if(g(t,2,2),!(t[0]instanceof l&&t[1]instanceof l)){if(!(t[0]instanceof l&&t[1]===null)){if(!(t[1]instanceof l&&t[0]===null)){if(t[0]!==null||t[1]!==null)throw new Error("Illegal Argument")}}}}function C(t,r){if(t.type!=="polygon"&&t.type!=="polyline"&&t.type!=="extent")return D(0);let u=1;(t.spatialReference.vcsWkid||t.spatialReference.latestVcsWkid)&&(u=_(t.spatialReference)/K(t.spatialReference));let o=0;if(t.type==="polyline")for(const n of t.paths)for(let e=1;e<n.length;e++)o+=S(n[e],n[e-1],u);else if(t.type==="polygon")for(const n of t.rings){for(let e=1;e<n.length;e++)o+=S(n[e],n[e-1],u);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(o+=S(n[0],n[n.length-1],u))}else t.type==="extent"&&(o+=2*S([t.xmin,t.ymin,0],[t.xmax,t.ymin,0],u),o+=2*S([t.xmin,t.ymin,0],[t.xmin,t.ymax,0],u),o*=2,o+=4*Math.abs(c(t.zmax,0)*u-c(t.zmin,0)*u));const a=new I({hasZ:!1,hasM:!1,spatialReference:t.spatialReference,paths:[[0,0],[0,o]]});return M(a,r)}function Mn(t){t.mode==="async"&&(t.functions.disjoint=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]===null||n[1]===null||nn(n[0],n[1])})},t.functions.intersects=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&tn(n[0],n[1])})},t.functions.touches=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&en(n[0],n[1])})},t.functions.crosses=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&rn(n[0],n[1])})},t.functions.within=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&un(n[0],n[1])})},t.functions.contains=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&on(n[0],n[1])})},t.functions.overlaps=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&an(n[0],n[1])})},t.functions.equals=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return g(n,2,2),n[0]===n[1]||(n[0]instanceof l&&n[1]instanceof l?sn(n[0],n[1]):!(!P(n[0])||!P(n[1]))&&n[0].getTime()===n[1].getTime())})},t.functions.relate=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,3,3),n[0]instanceof l&&n[1]instanceof l)return fn(n[0],n[1],j(n[2]));if(n[0]instanceof l&&n[1]===null||n[1]instanceof l&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new Error("Illegal Argument")})},t.functions.intersection=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]===null||n[1]===null?null:cn(n[0],n[1])})},t.functions.union=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){const e=[];if((n=s(n)).length===0)throw new Error("Function called with wrong number of Parameters");if(n.length===1)if(p(n[0])){const i=s(n[0]);for(let f=0;f<i.length;f++)if(i[f]!==null){if(!(i[f]instanceof l))throw new Error("Illegal Argument");e.push(i[f])}}else{if(!y(n[0])){if(n[0]instanceof l)return N(m(n[0]),r.spatialReference);if(n[0]===null)return null;throw new Error("Illegal Argument")}{const i=s(n[0].toArray());for(let f=0;f<i.length;f++)if(i[f]!==null){if(!(i[f]instanceof l))throw new Error("Illegal Argument");e.push(i[f])}}}else for(let i=0;i<n.length;i++)if(n[i]!==null){if(!(n[i]instanceof l))throw new Error("Illegal Argument");e.push(n[i])}return e.length===0?null:ln(e)})},t.functions.difference=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]===null?m(n[0]):n[0]===null?null:gn(n[0],n[1])})},t.functions.symmetricdifference=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){return A(n=s(n)),n[0]===null&&n[1]===null?null:n[0]===null?m(n[1]):n[1]===null?m(n[0]):hn(n[0],n[1])})},t.functions.clip=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,2,2),!(n[1]instanceof R)&&n[1]!==null)throw new Error("Illegal Argument");if(n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[1]===null?null:dn(n[0],n[1])})},t.functions.cut=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,2,2),!(n[1]instanceof I)&&n[1]!==null)throw new Error("Illegal Argument");if(n[0]===null)return[];if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[1]===null?[m(n[0])]:wn(n[0],n[1])})},t.functions.area=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(O(n[0]))return n[0].sumArea(x(c(n[1],-1)),!1,r.abortSignal).then(e=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(p(n[0])||y(n[0])){const e=H(n[0],r.spatialReference);return e===null?0:J(e,x(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return J(n[0],x(c(n[1],-1)))})},t.functions.areageodetic=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(O(n[0]))return n[0].sumArea(x(c(n[1],-1)),!0,r.abortSignal).then(e=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(p(n[0])||y(n[0])){const e=H(n[0],r.spatialReference);return e===null?0:T(e,x(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return T(n[0],x(c(n[1],-1)))})},t.functions.length=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(O(n[0]))return n[0].sumLength(h(c(n[1],-1)),!1,r.abortSignal).then(e=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(p(n[0])||y(n[0])){const e=v(n[0],r.spatialReference);return e===null?0:M(e,h(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return M(n[0],h(c(n[1],-1)))})},t.functions.length3d=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(p(n[0])||y(n[0])){const e=v(n[0],r.spatialReference);return e===null?0:e.hasZ===!0?C(e,h(c(n[1],-1))):M(e,h(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[0].hasZ===!0?C(n[0],h(c(n[1],-1))):M(n[0],h(c(n[1],-1)))})},t.functions.lengthgeodetic=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(O(n[0]))return n[0].sumLength(h(c(n[1],-1)),!0,r.abortSignal).then(e=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(p(n[0])||y(n[0])){const e=v(n[0],r.spatialReference);return e===null?0:k(e,h(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return k(n[0],h(c(n[1],-1)))})},t.functions.distance=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){n=s(n),g(n,2,3);let e=n[0];(p(n[0])||y(n[0]))&&(e=Z(n[0],r.spatialReference));let i=n[1];if((p(n[1])||y(n[1]))&&(i=Z(n[1],r.spatialReference)),!(e instanceof l))throw new Error("Illegal Argument");if(!(i instanceof l))throw new Error("Illegal Argument");return mn(e,i,h(c(n[2],-1)))})},t.functions.distancegeodetic=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){n=s(n),g(n,2,3);const e=n[0],i=n[1];if(!(e instanceof b))throw new Error("Illegal Argument");if(!(i instanceof b))throw new Error("Illegal Argument");const f=new I({paths:[],spatialReference:e.spatialReference});return f.addPath([e,i]),k(f,h(c(n[2],-1)))})},t.functions.densify=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return n[0]instanceof F||n[0]instanceof I?V(n[0],e,h(c(n[2],-1))):n[0]instanceof R?V(q(n[0]),e,h(c(n[2],-1))):n[0]})},t.functions.densifygeodetic=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return n[0]instanceof F||n[0]instanceof I?W(n[0],e,h(c(n[2],-1))):n[0]instanceof R?W(q(n[0]),e,h(c(n[2],-1))):n[0]})},t.functions.generalize=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,2,4),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");return An(n[0],e,Q(c(n[2],!0)),h(c(n[3],-1)))})},t.functions.buffer=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");return e===0?m(n[0]):pn(n[0],e,h(c(n[2],-1)))})},t.functions.buffergeodetic=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");return e===0?m(n[0]):yn(n[0],e,h(c(n[2],-1)))})},t.functions.offset=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,2,6),n[0]===null)return null;if(!(n[0]instanceof F||n[0]instanceof I))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");const i=E(c(n[4],10));if(isNaN(i))throw new Error("Illegal Argument");const f=E(c(n[5],0));if(isNaN(f))throw new Error("Illegal Argument");return En(n[0],e,h(c(n[2],-1)),j(c(n[3],"round")).toLowerCase(),i,f)})},t.functions.rotate=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){n=s(n),g(n,2,3);let e=n[0];if(e===null)return null;if(!(e instanceof l))throw new Error("Illegal Argument");e instanceof R&&(e=F.fromExtent(e));const i=E(n[1]);if(isNaN(i))throw new Error("Illegal Argument");const f=c(n[2],null);if(f===null)return G(e,i);if(f instanceof b)return G(e,i,f);throw new Error("Illegal Argument")})},t.functions.centroid=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,1,1),n[0]===null)return null;let e=n[0];if((p(n[0])||y(n[0]))&&(e=Z(n[0],r.spatialReference)),e===null)return null;if(!(e instanceof l))throw new Error("Illegal Argument");return e instanceof b?N(m(n[0]),r.spatialReference):e instanceof F?e.centroid:e instanceof I?X(e):e instanceof z?Y(e):e instanceof R?e.center:null})},t.functions.multiparttosinglepart=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){n=s(n),g(n,1,1);const e=[];if(n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[0]instanceof b?[N(m(n[0]),r.spatialReference)]:n[0]instanceof R?[N(m(n[0]),r.spatialReference)]:U(n[0]).then(i=>{if(i instanceof F){const f=[],w=[];for(let d=0;d<i.rings.length;d++)if(i.isClockwise(i.rings[d])){const $=L({rings:[i.rings[d]],hasZ:i.hasZ===!0,hazM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});f.push($)}else w.push({ring:i.rings[d],pt:i.getPoint(d,0)});for(let d=0;d<w.length;d++)for(let $=0;$<f.length;$++)if(f[$].contains(w[d].pt)){f[$].addRing(w[d].ring);break}return f}if(i instanceof I){const f=[];for(let w=0;w<i.paths.length;w++){const d=L({paths:[i.paths[w]],hasZ:i.hasZ===!0,hazM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});f.push(d)}return f}if(n[0]instanceof z){const f=N(m(n[0]),r.spatialReference);for(let w=0;w<f.points.length;w++)e.push(f.getPoint(w));return e}return null})})},t.functions.issimple=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,1,1),n[0]===null)return!0;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return In(n[0])})},t.functions.simplify=function(r,u){return t.standardFunctionAsync(r,u,function(o,a,n){if(n=s(n),g(n,1,1),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return U(n[0])})})}export{Mn as registerFunctions};

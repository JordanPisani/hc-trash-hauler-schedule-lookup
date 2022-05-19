import{q as d,gu as g,gv as y,gw as m,gx as b,dL as v,gy as x,u as $,gz as h}from"./index.2f57b5df.js";const w=d.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},F={getAttribute:(t,r)=>t.field(r)};async function E(t,r,e){if(!t||!t.symbol)return f;const l=t.where,n=g(t),o=l?await import("./WhereClause.cca3c984.js"):null;let i;if(n.type==="arcade"){const a=await y(n.expression,e,r);i={type:"arcade",evaluate(u){try{const s=a.evaluate({$feature:"attributes"in u?a.repurposeFeature(u):u});if(s!=null)return s.toString()}catch{w.error(new $("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:u,expression:n}))}return null},needsHydrationToEvaluate:()=>h(n.expression)==null}}else i={type:"simple",evaluate:a=>n.expression.replace(/{[^}]*}/g,u=>{const s=u.slice(1,-1),c=r.get(s);if(!c)return u;let p=null;return"attributes"in a?a&&a.attributes&&(p=a.attributes[c.name]):p=a.field(c.name),p==null?"":L(p,c)})};if(l){let a;try{a=o.WhereClause.create(l,r)}catch{return f}const u=i.evaluate;i.evaluate=s=>{const c="attributes"in s?void 0:F;return a.testFeature(s,c)?u(s):null}}return i}function L(t,r){if(t==null)return"";const e=r.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const n=t;for(const o of e.codedValues)if(o.code===n)return o.name}else if(e.type==="range"){const n=+t,o="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(o<=n&&n<=i)return e.name}}let l=t;return r.type==="date"||r.type==="esriFieldTypeDate"?l=m(l,b("short-date")):v(r)&&(l=x(+l)),l||""}export{E as createLabelFunction,L as formatField};
import{c_ as I}from"./index.4a406848.js";function z(a,n,o){var r;const e=a.byteLength/(4*n),g=new Uint32Array(a,0,e*n);let h=new Uint32Array(e);const y=(r=o==null?void 0:o.minReduction)!=null?r:0,c=(o==null?void 0:o.originalIndices)||null,p=c?c.length:0,i=(o==null?void 0:o.componentOffsets)||null;let U=0;if(i)for(let t=0;t<i.length-1;t++){const f=i[t+1]-i[t];f>U&&(U=f)}else U=e;const w=Math.floor(1.1*U)+1;(s==null||s.length<2*w)&&(s=new Uint32Array(I(2*w)));for(let t=0;t<2*w;t++)s[t]=0;let u=0;const A=!!i&&!!c,m=A?p:e,b=A?new Uint32Array(p):null,M=1.96;let $=y!==0?Math.ceil(4*M*M/(y*y)*y*(1-y)):m,v=1,j=i?i[1]:m;for(let t=0;t<m;t++){if(t===$){const l=1-u/t;if(l+M*Math.sqrt(l*(1-l)/t)<y)return null;$*=2}if(t===j){for(let l=0;l<2*w;l++)s[l]=0;if(c)for(let l=i[v-1];l<i[v];l++)b[l]=h[c[l]];j=i[++v]}const f=A?c[t]:t,C=f*n,q=R(g,C,n);let d=q%w,k=u;for(;s[2*d+1]!==0;){if(s[2*d]===q){const l=s[2*d+1]-1;if(L(g,C,l*n,n)){k=h[l];break}}d++,d>=w&&(d-=w)}k===u&&(s[2*d]=q,s[2*d+1]=f+1,u++),h[f]=k}if(y!==0&&1-u/e<y)return null;if(A){for(let t=i[v-1];t<b.length;t++)b[t]=h[c[t]];h=b}const x=new Uint32Array(n*u);u=0;for(let t=0;t<m;t++)h[t]===u&&(O(g,(A?c[t]:t)*n,x,u*n,n),u++);if(c&&!A){const t=new Uint32Array(p);for(let f=0;f<t.length;f++)t[f]=h[c[f]];h=t}return{buffer:x.buffer,indices:h,uniqueCount:u}}function L(a,n,o,r){for(let e=0;e<r;e++)if(a[n+e]!==a[o+e])return!1;return!0}function O(a,n,o,r,e){for(let g=0;g<e;g++)o[r+g]=a[n+g]}function R(a,n,o){let r=0;for(let e=0;e<o;e++)r=a[n+e]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let s=null;export{z as n};

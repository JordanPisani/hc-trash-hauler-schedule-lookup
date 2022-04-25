import{i as ci,al as fi}from"./index.4a406848.js";import{o as mi,U as di,e as lt,n as it}from"./enums2.51e7cb08.js";import{t as Q,s as ft}from"./Geometry.c655e876.js";class cs{constructor(e=0,u=0,h=0,l=0){this.x=e,this.y=u,this.width=h,this.height=l}get isEmpty(){return this.width<=0||this.height<=0}union(e){this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.width=Math.max(this.width,e.width),this.height=Math.max(this.height,e.height)}}const gi=128e3;let Qt=null,hi=null;async function fs(){return Qt||(Qt=pi()),Qt}async function pi(){hi=await(ci("esri-csp-restrictions")?await import("./libtess-asm.aabd24e3.js").then(e=>e.l):await import("./libtess.c3e6f5c9.js").then(e=>e.l)).load({locateFile:()=>fi("esri/core/libs/libtess/libtess.wasm")})}function ms(n,e){const u=Math.max(n.length,gi);return hi.triangulate(n,e,u)}function li(n,e){return n.x===e.x&&n.y===e.y}function Ti(n){if(!n)return;const e=n.length;if(e<=1)return;let u=0;for(let h=1;h<e;h++)li(n[h],n[u])||++u===h||(n[u]=n[h]);n.length=u+1}function J(n,e){return n.x=e.y,n.y=-e.x,n}function Y(n,e){return n.x=-e.y,n.y=e.x,n}function Kt(n,e){return n.x=e.x,n.y=e.y,n}function Zt(n,e){return n.x=-e.x,n.y=-e.y,n}function Gt(n){return Math.sqrt(n.x*n.x+n.y*n.y)}function Ai(n,e){return n.x*e.y-n.y*e.x}function ti(n,e){return n.x*e.x+n.y*e.y}function Tt(n,e,u,h){return n.x=e.x*u+e.y*h,n.y=e.x*h-e.y*u,n}class ds{constructor(e,u,h){this.writeVertex=e,this.writeTriangle=u,this.canUseThinTessellation=h,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}tessellate(e,u){Ti(e),this.canUseThinTessellation&&u.halfWidth<di&&!u.offset?this._tessellateThin(e,u):this._tessellate(e,u)}_tessellateThin(e,u){if(e.length<2)return;const h=u.wrapDistance||65535;let l=u.initialDistance||0,a=!1,x=e[0].x,E=e[0].y;const F=e.length;for(let f=1;f<F;++f){a&&(a=!1,l=0);let B=e[f].x,v=e[f].y,A=B-x,_=v-E,m=Math.sqrt(A*A+_*_);if(A/=m,_/=m,l+m>h){a=!0;const y=(h-l)/m;m=h-l,B=(1-y)*x+y*B,v=(1-y)*E+y*v,--f}const g=this.writeVertex(x,E,0,0,A,_,_,-A,0,-1,l),L=this.writeVertex(x,E,0,0,A,_,-_,A,0,1,l);l+=m;const w=this.writeVertex(B,v,0,0,A,_,_,-A,0,-1,l),c=this.writeVertex(B,v,0,0,A,_,-_,A,0,1,l);this.writeTriangle(g,L,w),this.writeTriangle(L,w,c),x=B,E=v}}_tessellate(e,u){const h=e[0],l=e[e.length-1],a=li(h,l),x=a?3:2;if(e.length<x)return;const E=u.pixelCoordRatio,F=u.capType!=null?u.capType:lt.BUTT,f=u.joinType!=null?u.joinType:it.MITER,B=u.miterLimit!=null?Math.min(u.miterLimit,4):2,v=u.roundLimit!=null?Math.min(u.roundLimit,1.05):1.05,A=u.halfWidth!=null?u.halfWidth:2,_=!!u.textured;let m,g,L=null,w=null;const c=this.prevNormal,y=this.nextNormal;let mt=-1,ot=-1;const b=this.joinNormal;let S,V;const bt=this.textureNormalLeft,Ut=this.textureNormalRight,P=this.textureNormal;let M=-1,D=-1;const qt=u.wrapDistance||65535;let C=u.initialDistance||0;const Fi=this.writeVertex,Ei=this.writeTriangle,$=function(Z,Dt,Et,j,tt,ut){const nt=Fi(m,g,S,V,Et,j,Z,Dt,tt,ut,C);return M>=0&&D>=0&&nt>=0&&Ei(M,D,nt),M=D,D=nt,nt};a&&(L=e[e.length-2],y.x=l.x-L.x,y.y=l.y-L.y,ot=Gt(y),y.x/=ot,y.y/=ot);let dt=!1;for(let Z=0;Z<e.length;++Z){if(dt&&(dt=!1,C=0),L&&(c.x=-y.x,c.y=-y.y,mt=ot,C+mt>qt&&(dt=!0)),dt){const R=(qt-C)/mt;mt=qt-C,L={x:(1-R)*L.x+R*e[Z].x,y:(1-R)*L.y+R*e[Z].y},--Z}else L=e[Z];m=L.x,g=L.y;const Dt=Z<=0&&!dt,Et=Z===e.length-1;if(Dt||(C+=mt),w=Et?a?e[1]:null:e[Z+1],w?(y.x=w.x-m,y.y=w.y-g,ot=Gt(y),y.x/=ot,y.y/=ot):(y.x=void 0,y.y=void 0),!a){if(Dt){Y(b,y),S=b.x,V=b.y,F===lt.SQUARE&&($(-y.y-y.x,y.x-y.y,y.x,y.y,0,-1),$(y.y-y.x,-y.x-y.y,y.x,y.y,0,1)),F===lt.ROUND&&($(-y.y-y.x,y.x-y.y,y.x,y.y,-1,-1),$(y.y-y.x,-y.x-y.y,y.x,y.y,-1,1)),F!==lt.ROUND&&F!==lt.BUTT||($(-y.y,y.x,y.x,y.y,0,-1),$(y.y,-y.x,y.x,y.y,0,1));continue}if(Et){J(b,c),S=b.x,V=b.y,F!==lt.ROUND&&F!==lt.BUTT||($(c.y,-c.x,-c.x,-c.y,0,-1),$(-c.y,c.x,-c.x,-c.y,0,1)),F===lt.SQUARE&&($(c.y-c.x,-c.x-c.y,-c.x,-c.y,0,-1),$(-c.y-c.x,c.x-c.y,-c.x,-c.y,0,1)),F===lt.ROUND&&($(c.y-c.x,-c.x-c.y,-c.x,-c.y,1,-1),$(-c.y-c.x,c.x-c.y,-c.x,-c.y,1,1));continue}}let j,tt,ut=-Ai(c,y);if(Math.abs(ut)<.01)ti(c,y)>0?(b.x=c.x,b.y=c.y,ut=1,j=Number.MAX_VALUE,tt=!0):(Y(b,y),ut=1,j=1,tt=!1);else{b.x=(c.x+y.x)/ut,b.y=(c.y+y.y)/ut,j=Gt(b);const R=(j-1)*A*E;tt=j>4||R>mt&&R>ot}S=b.x,V=b.y;let nt=f;switch(f){case it.BEVEL:j<1.05&&(nt=it.MITER);break;case it.ROUND:j<v&&(nt=it.MITER);break;case it.MITER:j>B&&(nt=it.BEVEL)}switch(nt){case it.MITER:if($(b.x,b.y,-c.x,-c.y,0,-1),$(-b.x,-b.y,-c.x,-c.y,0,1),Et)break;if(_){const R=dt?0:C;M=this.writeVertex(m,g,S,V,y.x,y.y,b.x,b.y,0,-1,R),D=this.writeVertex(m,g,S,V,y.x,y.y,-b.x,-b.y,0,1,R)}break;case it.BEVEL:{const R=ut<0;let k,z,xt,G;if(R){const N=M;M=D,D=N,k=bt,z=Ut}else k=Ut,z=bt;if(tt)xt=R?Y(this.innerPrev,c):J(this.innerPrev,c),G=R?J(this.innerNext,y):Y(this.innerNext,y);else{const N=R?Zt(this.inner,b):Kt(this.inner,b);xt=N,G=N}const H=R?J(this.bevelStart,c):Y(this.bevelStart,c);$(xt.x,xt.y,-c.x,-c.y,k.x,k.y);const Ct=$(H.x,H.y,-c.x,-c.y,z.x,z.y);if(Et)break;const rt=R?Y(this.bevelEnd,y):J(this.bevelEnd,y);if(tt){const N=this.writeVertex(m,g,S,V,-c.x,-c.y,0,0,0,0,C);M=this.writeVertex(m,g,S,V,y.x,y.y,G.x,G.y,k.x,k.y,C),D=this.writeVertex(m,g,S,V,y.x,y.y,rt.x,rt.y,z.x,z.y,C),this.writeTriangle(Ct,N,D)}else{if(_){const N=this.bevelMiddle;N.x=(H.x+rt.x)/2,N.y=(H.y+rt.y)/2,Tt(P,N,-c.x,-c.y),$(N.x,N.y,-c.x,-c.y,P.x,P.y),Tt(P,N,y.x,y.y),M=this.writeVertex(m,g,S,V,y.x,y.y,N.x,N.y,P.x,P.y,C),D=this.writeVertex(m,g,S,V,y.x,y.y,G.x,G.y,k.x,k.y,C)}else{const N=M;M=D,D=N}$(rt.x,rt.y,y.x,y.y,z.x,z.y)}if(R){const N=M;M=D,D=N}break}case it.ROUND:{const R=ut<0;let k,z;if(R){const q=M;M=D,D=q,k=bt,z=Ut}else k=Ut,z=bt;const xt=R?Zt(this.inner,b):Kt(this.inner,b);let G,H;tt?(G=R?Y(this.innerPrev,c):J(this.innerPrev,c),H=R?J(this.innerNext,y):Y(this.innerNext,y)):(G=xt,H=xt);const Ct=R?J(this.roundStart,c):Y(this.roundStart,c),rt=R?Y(this.roundEnd,y):J(this.roundEnd,y),N=$(G.x,G.y,-c.x,-c.y,k.x,k.y),Nt=$(Ct.x,Ct.y,-c.x,-c.y,z.x,z.y);if(Et)break;const yt=this.writeVertex(m,g,S,V,-c.x,-c.y,0,0,0,0,C);tt||this.writeTriangle(M,D,yt);const ht=Zt(this.outer,xt),ct=this.writeVertex(m,g,S,V,y.x,y.y,rt.x,rt.y,z.x,z.y,C);let gt,pt;const St=j>2;if(St){let q;j!==Number.MAX_VALUE?(ht.x/=j,ht.y/=j,q=ti(c,ht),q=(j*(q*q-1)+1)/q):q=-1,gt=R?J(this.startBreak,c):Y(this.startBreak,c),gt.x+=c.x*q,gt.y+=c.y*q,pt=R?Y(this.endBreak,y):J(this.endBreak,y),pt.x+=y.x*q,pt.y+=y.y*q}Tt(P,ht,-c.x,-c.y);const Vt=this.writeVertex(m,g,S,V,-c.x,-c.y,ht.x,ht.y,P.x,P.y,C);Tt(P,ht,y.x,y.y);const Xt=_?this.writeVertex(m,g,S,V,y.x,y.y,ht.x,ht.y,P.x,P.y,C):Vt,Yt=yt,Mt=_?this.writeVertex(m,g,S,V,y.x,y.y,0,0,0,0,C):yt;let Bt=-1,Lt=-1;if(St&&(Tt(P,gt,-c.x,-c.y),Bt=this.writeVertex(m,g,S,V,-c.x,-c.y,gt.x,gt.y,P.x,P.y,C),Tt(P,pt,y.x,y.y),Lt=this.writeVertex(m,g,S,V,y.x,y.y,pt.x,pt.y,P.x,P.y,C)),_?St?(this.writeTriangle(Yt,Nt,Bt),this.writeTriangle(Yt,Bt,Vt),this.writeTriangle(Mt,Xt,Lt),this.writeTriangle(Mt,Lt,ct)):(this.writeTriangle(Yt,Nt,Vt),this.writeTriangle(Mt,Xt,ct)):St?(this.writeTriangle(yt,Nt,Bt),this.writeTriangle(yt,Bt,Lt),this.writeTriangle(yt,Lt,ct)):(this.writeTriangle(yt,Nt,Vt),this.writeTriangle(yt,Xt,ct)),tt?(M=this.writeVertex(m,g,S,V,y.x,y.y,H.x,H.y,k.x,k.y,C),D=ct):(M=_?this.writeVertex(m,g,S,V,y.x,y.y,H.x,H.y,k.x,k.y,C):N,this.writeTriangle(M,Mt,ct),D=ct),R){const q=M;M=D,D=q}break}}}}}const $t=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["\xAB","\xBB"],["\xBB","\xAB"],["\u2039","\u203A"],["\u203A","\u2039"],["\u207D","\u207E"],["\u207E","\u207D"],["\u208D","\u208E"],["\u208E","\u208D"],["\u2264","\u2265"],["\u2265","\u2264"],["\u2329","\u232A"],["\u232A","\u2329"],["\uFE59","\uFE5A"],["\uFE5A","\uFE59"],["\uFE5B","\uFE5C"],["\uFE5C","\uFE5B"],["\uFE5D","\uFE5E"],["\uFE5E","\uFE5D"],["\uFE64","\uFE65"],["\uFE65","\uFE64"]],_t=["\u0622","\u0623","\u0625","\u0627"],_i=["\uFEF5","\uFEF7","\uFEF9","\uFEFB"],Bi=["\uFEF6","\uFEF8","\uFEFA","\uFEFC"],Ot=["\u0627","\u0628","\u062A","\u062B","\u062C","\u062D","\u062E","\u062F","\u0630","\u0631","\u0632","\u0633","\u0634","\u0635","\u0636","\u0637","\u0638","\u0639","\u063A","\u0641","\u0642","\u0643","\u0644","\u0645","\u0646","\u0647","\u0648","\u064A","\u0625","\u0623","\u0622","\u0629","\u0649","\u0644","\u0645","\u0646","\u0647","\u0648","\u064A","\u0625","\u0623","\u0622","\u0629","\u0649","\u06CC","\u0626","\u0624"],Li=["\uFE8D","\uFE8F","\uFE95","\uFE99","\uFE9D","\uFEA1","\uFEA5","\uFEA9","\uFEAB","\uFEAD","\uFEAF","\uFEB1","\uFEB5","\uFEB9","\uFEBD","\uFEC1","\uFEC5","\uFEC9","\uFECD","\uFED1","\uFED5","\uFED9","\uFEDD","\uFEE1","\uFEE5","\uFEE9","\uFEED","\uFEF1","\uFE87","\uFE83","\uFE81","\uFE93","\uFEEF","\uFBFC","\uFE89","\uFE85","\uFE70","\uFE72","\uFE74","\uFE76","\uFE78","\uFE7A","\uFE7C","\uFE7E","\uFE80","\uFE89","\uFE85"],wi=["\uFE8E","\uFE90","\uFE96","\uFE9A","\uFE9E","\uFEA2","\uFEA6","\uFEAA","\uFEAC","\uFEAE","\uFEB0","\uFEB2","\uFEB6","\uFEBA","\uFEBE","\uFEC2","\uFEC6","\uFECA","\uFECE","\uFED2","\uFED6","\uFEDA","\uFEDE","\uFEE2","\uFEE6","\uFEEA","\uFEEE","\uFEF2","\uFE88","\uFE84","\uFE82","\uFE94","\uFEF0","\uFBFD","\uFE8A","\uFE86","\uFE70","\uFE72","\uFE74","\uFE76","\uFE78","\uFE7A","\uFE7C","\uFE7E","\uFE80","\uFE8A","\uFE86"],vi=["\uFE8E","\uFE92","\uFE98","\uFE9C","\uFEA0","\uFEA4","\uFEA8","\uFEAA","\uFEAC","\uFEAE","\uFEB0","\uFEB4","\uFEB8","\uFEBC","\uFEC0","\uFEC4","\uFEC8","\uFECC","\uFED0","\uFED4","\uFED8","\uFEDC","\uFEE0","\uFEE4","\uFEE8","\uFEEC","\uFEEE","\uFEF4","\uFE88","\uFE84","\uFE82","\uFE94","\uFEF0","\uFBFF","\uFE8C","\uFE86","\uFE71","\uFE72","\uFE74","\uFE77","\uFE79","\uFE7B","\uFE7D","\uFE7F","\uFE80","\uFE8C","\uFE86"],Ri=["\uFE8D","\uFE91","\uFE97","\uFE9B","\uFE9F","\uFEA3","\uFEA7","\uFEA9","\uFEAB","\uFEAD","\uFEAF","\uFEB3","\uFEB7","\uFEBB","\uFEBF","\uFEC3","\uFEC7","\uFECB","\uFECF","\uFED3","\uFED7","\uFEDB","\uFEDF","\uFEE3","\uFEE7","\uFEEB","\uFEED","\uFEF3","\uFE87","\uFE83","\uFE81","\uFE93","\uFEEF","\uFBFE","\uFE8B","\uFE85","\uFE70","\uFE72","\uFE74","\uFE76","\uFE78","\uFE7A","\uFE7C","\uFE7E","\uFE80","\uFE8B","\uFE85"],ii=["\u0621","\u0622","\u0623","\u0624","\u0625","\u0627","\u0629","\u062F","\u0630","\u0631","\u0632","\u0648","\u0649"],bi=["\u064B","\u064B","\u064C","\u061F","\u064D","\u061F","\u064E","\u064E","\u064F","\u064F","\u0650","\u0650","\u0651","\u0651","\u0652","\u0652","\u0621","\u0622","\u0622","\u0623","\u0623","\u0624","\u0624","\u0625","\u0625","\u0626","\u0626","\u0626","\u0626","\u0627","\u0627","\u0628","\u0628","\u0628","\u0628","\u0629","\u0629","\u062A","\u062A","\u062A","\u062A","\u062B","\u062B","\u062B","\u062B","\u062C","\u062C","\u062C","\u062C","\u062D","\u062D","\u062D","\u062D","\u062E","\u062E","\u062E","\u062E","\u062F","\u062F","\u0630","\u0630","\u0631","\u0631","\u0632","\u0632","\u0633","\u0633","\u0633","\u0633","\u0634","\u0634","\u0634","\u0634","\u0635","\u0635","\u0635","\u0635","\u0636","\u0636","\u0636","\u0636","\u0637","\u0637","\u0637","\u0637","\u0638","\u0638","\u0638","\u0638","\u0639","\u0639","\u0639","\u0639","\u063A","\u063A","\u063A","\u063A","\u0641","\u0641","\u0641","\u0641","\u0642","\u0642","\u0642","\u0642","\u0643","\u0643","\u0643","\u0643","\u0644","\u0644","\u0644","\u0644","\u0645","\u0645","\u0645","\u0645","\u0646","\u0646","\u0646","\u0646","\u0647","\u0647","\u0647","\u0647","\u0648","\u0648","\u0649","\u0649","\u064A","\u064A","\u064A","\u064A","\uFEF5","\uFEF6","\uFEF7","\uFEF8","\uFEF9","\uFEFA","\uFEFB","\uFEFC","\u061F","\u061F","\u061F"],si=["\u0621","\u0641"],Ui=["\u063A","\u064A"],Di=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],Ci=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],s=0,o=1,p=2,U=3,t=4,et=5,kt=6,i=7,O=8,W=9,K=10,T=11,r=12,Ni=13,Si=14,Vi=15,Mi=16,$i=17,d=18,Pi=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],st=100,Ii=[st+0,s,s,s,s,st+1,st+2,st+3,o,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,st+4,t,t,t,s,t,s,t,s,t,t,t,s,s,t,t,s,s,s,s,s,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,s,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,s,t,t,s,s,t,t,s,s,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,s,s,st+5,i,i,st+6,st+7],ki=[[d,d,d,d,d,d,d,d,d,kt,et,kt,O,et,d,d,d,d,d,d,d,d,d,d,d,d,d,d,et,et,et,kt,O,t,t,T,T,T,t,t,t,t,t,K,W,K,W,W,p,p,p,p,p,p,p,p,p,p,W,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,d,d,d,d,d,d,et,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,W,t,T,T,T,T,t,t,t,t,s,t,t,d,t,t,T,T,p,p,t,s,t,t,t,p,s,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s,s],[s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,s,t,t,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,o,r,o,r,r,o,r,r,o,r,t,t,t,t,t,t,t,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,t,t,t,t,o,o,o,o,o,t,t,t,t,t,t,t,t,t,t,t],[U,U,U,U,t,t,t,t,i,T,T,i,W,i,t,t,r,r,r,r,r,r,r,r,r,r,r,i,t,t,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,U,U,U,U,U,U,U,U,U,U,T,U,U,i,i,i,r,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,r,r,r,r,r,r,U,t,r,r,r,r,r,r,i,i,r,r,t,r,r,r,r,i,i,p,p,p,p,p,p,p,p,p,p,i,i,i,i,i,i],[i,i,i,i,i,i,i,i,i,i,i,i,i,i,t,i,i,r,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,r,r,r,r,r,r,r,r,r,r,i,t,t,t,t,t,t,t,t,t,t,t,t,t,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,r,r,r,r,r,r,r,r,o,o,t,t,t,t,o,t,t,t,t,t],[O,O,O,O,O,O,O,O,O,O,O,d,d,d,s,o,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,O,et,Ni,Si,Vi,Mi,$i,W,T,T,T,T,T,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,W,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,O,d,d,d,d,d,t,t,t,t,t,d,d,d,d,d,d,p,s,t,t,p,p,p,p,p,p,K,K,t,t,t,s,p,p,p,p,p,p,p,p,p,p,K,K,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],[s,s,s,s,s,s,s,t,t,t,t,t,t,t,t,t,t,t,t,s,s,s,s,s,t,t,t,t,t,o,r,o,o,o,o,o,o,o,o,o,o,K,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,t,o,t,o,o,t,o,o,t,o,o,o,o,o,o,o,o,o,o,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i],[r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,r,r,r,r,r,r,r,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,W,t,W,t,t,W,t,t,t,t,t,t,t,t,t,T,t,t,K,K,t,t,t,t,t,T,T,t,t,t,t,t,i,i,i,i,i,t,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,t,t,d],[t,t,t,T,T,T,t,t,t,t,t,K,W,K,W,W,p,p,p,p,p,p,p,p,p,p,W,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,s,s,s,s,s,s,t,t,s,s,s,s,s,s,t,t,s,s,s,s,s,s,t,t,s,s,s,t,t,t,T,T,t,t,t,T,T,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t]];class gs{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(e,u,h){if(this.sourceToTarget=[],this.targetToSource=[],!e)return"";if(es(this.sourceToTarget,this.targetToSource,e.length),!this.checkParameters(u,h))return e;u=this.inputFormat,h=this.outputFormat;let l=e;const a=ns,x=ni(u.charAt(1)),E=ni(h.charAt(1)),F=(u.charAt(0)==="I"?"L":u.charAt(0))+x,f=(h.charAt(0)==="I"?"L":h.charAt(0))+E,B=u.charAt(2)+h.charAt(2);a.defInFormat=F,a.defOutFormat=f,a.defSwap=B;const v=wt(e,F,f,B,a);let A=!1;return h.charAt(1)==="R"?A=!0:h.charAt(1)!=="C"&&h.charAt(1)!=="D"||(A=this.checkContextual(v)==="rtl"),this.sourceToTarget=X,this.targetToSource=us(this.sourceToTarget),zt=this.targetToSource,l=u.charAt(3)===h.charAt(3)?v:h.charAt(3)==="S"?ji(A,v,!0):qi(v,A,!0),this.sourceToTarget=X,this.targetToSource=zt,this.levels=Wt,l}_inputFormatSetter(e){if(!ri.test(e))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=e}_outputFormatSetter(e){if(!ri.test(e))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=e}checkParameters(e,u){return e?this._inputFormatSetter(e):e=this.inputFormat,u?this._outputFormatSetter(u):u=this.outputFormat,e!==u}checkContextual(e){let u=jt(e);if(u!=="ltr"&&u!=="rtl"){try{u=document.dir.toLowerCase()}catch{}u!=="ltr"&&u!=="rtl"&&(u="ltr")}return u}hasBidiChar(e){return ls.test(e)}}function wt(n,e,u,h,l){const a=Oi(n,{inFormat:e,outFormat:u,swap:h},l);if(a.inFormat===a.outFormat)return n;e=a.inFormat,u=a.outFormat,h=a.swap;const x=e.substring(0,1),E=e.substring(1,4),F=u.substring(0,1),f=u.substring(1,4);if(l.inFormat=e,l.outFormat=u,l.swap=h,x==="L"&&u==="VLTR"){if(E==="LTR")return l.dir=At,Ft(n,l);if(E==="RTL")return l.dir=vt,Ft(n,l)}if(x==="V"&&F==="V")return l.dir=E==="RTL"?vt:At,Ht(n,l);if(x==="L"&&u==="VRTL")return E==="LTR"?(l.dir=At,n=Ft(n,l)):(l.dir=vt,n=Ft(n,l)),Ht(n);if(e==="VLTR"&&u==="LLTR")return l.dir=At,Ft(n,l);if(x==="V"&&F==="L"&&E!==f)return n=Ht(n),E==="RTL"?wt(n,"LLTR","VLTR",h,l):wt(n,"LRTL","VRTL",h,l);if(e==="VRTL"&&u==="LRTL")return wt(n,"LRTL","VRTL",h,l);if(x==="L"&&F==="L"){const B=l.swap;return l.swap=B.substr(0,1)+"N",E==="RTL"?(l.dir=vt,n=Ft(n,l),l.swap="N"+B.substr(1,2),l.dir=At,n=Ft(n,l)):(l.dir=At,n=Ft(n,l),l.swap="N"+B.substr(1,2),n=wt(n,"VLTR","LRTL",l.swap,l)),n}return n}function Oi(n,e,u){if(e.inFormat===void 0&&(e.inFormat=u.defInFormat),e.outFormat===void 0&&(e.outFormat=u.defOutFormat),e.swap===void 0&&(e.swap=u.defSwap),e.inFormat===e.outFormat)return e;const h=e.inFormat.substring(0,1),l=e.outFormat.substring(0,1);let a,x=e.inFormat.substring(1,4),E=e.outFormat.substring(1,4);return x.charAt(0)==="C"&&(a=jt(n),x=a==="ltr"||a==="rtl"?a.toUpperCase():e.inFormat.charAt(2)==="L"?"LTR":"RTL",e.inFormat=h+x),E.charAt(0)==="C"&&(a=jt(n),a==="rtl"?E="RTL":a==="ltr"?(a=Wi(n),E=a.toUpperCase()):E=e.outFormat.charAt(2)==="L"?"LTR":"RTL",e.outFormat=l+E),e}function ji(n,e,u){if(e.length===0)return"";n===void 0&&(n=!0),u===void 0&&(u=!0);const h=(e=String(e)).split("");let l=0,a=1,x=h.length;n||(l=h.length-1,a=-1,x=1);const E=zi(h,l,a,x,u);let F="";for(let f=0;f<h.length;f++)u&&Zi(E,E.length,f)>-1?(xi(zt,f,!n,-1),X.splice(f,1)):F+=h[f];return F}function zi(n,e,u,h,l){let a=0;const x=[];let E=0;for(let F=e;F*u<h;F+=u)if(oi(n[F])||Rt(n[F])){if(n[F]==="\u0644"&&Gi(n,F+u,u,h)){n[F]=ss(n[F+u],a===0?_i:Bi),F+=u,is(n,F,u,h),l&&(x[E]=F,E++),a=0;continue}const f=n[F];a===1?n[F]=ei(n,F+u,u,h)?ts(n[F]):Jt(n[F],wi):ei(n,F+u,u,h)===!0?n[F]=Jt(n[F],Ri):n[F]=Jt(n[F],Li),Rt(f)||(a=1),Ki(f)===!0&&(a=0)}else a=0;return x}function jt(n){const e=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(n);return e?e[0]<="z"?"ltr":"rtl":""}function Wi(n){const e=n.split("");return e.reverse(),jt(e.join(""))}function qi(n,e,u){if(n.length===0)return"";u===void 0&&(u=!0),e===void 0&&(e=!0);let h="";const l=(n=String(n)).split("");for(let a=0;a<n.length;a++){let x=!1;if(l[a]>="\uFE70"&&l[a]<"\uFEFF"){const E=n.charCodeAt(a);l[a]>="\uFEF5"&&l[a]<="\uFEFC"?(e?(a>0&&u&&l[a-1]===" "?h=h.substring(0,h.length-1)+"\u0644":(h+="\u0644",x=!0),h+=_t[(E-65269)/2]):(h+=_t[(E-65269)/2],h+="\u0644",a+1<n.length&&u&&l[a+1]===" "?a++:x=!0),x&&(xi(zt,a,!0,1),X.splice(a,0,X[a]))):h+=bi[E-65136]}else h+=l[a]}return h}function Ft(n,e){const u=n.split(""),h=[];return ai(u,h,e),Yi(u,h,e),ui(2,u,h,e),ui(1,u,h,e),Wt=h,u.join("")}function ai(n,e,u){const h=n.length,l=u.dir?Ci:Di;let a=0,x=-1;const E=[],F=[];u.hiLevel=u.dir,u.lastArabic=!1,u.hasUbatAl=!1,u.hasUbatB=!1,u.hasUbatS=!1;for(let f=0;f<h;f++)E[f]=Qi(n[f]);for(let f=0;f<h;f++){const B=a,v=Hi(n,E,F,f,u);F[f]=v,a=l[B][v];const A=240&a;a&=15;const _=l[a][rs];if(e[f]=_,A>0)if(A===16){for(let m=x;m<f;m++)e[m]=1;x=-1}else x=-1;if(l[a][hs])x===-1&&(x=f);else if(x>-1){for(let m=x;m<f;m++)e[m]=_;x=-1}E[f]===et&&(e[f]=0),u.hiLevel|=_}u.hasUbatS&&Xi(E,e,h,u)}function Xi(n,e,u,h){for(let l=0;l<u;l++)if(n[l]===kt){e[l]=h.dir;for(let a=l-1;a>=0&&n[a]===O;a--)e[a]=h.dir}}function Yi(n,e,u){if(u.hiLevel!==0&&u.swap.substr(0,1)!==u.swap.substr(1,2))for(let h=0;h<n.length;h++)e[h]===1&&(n[h]=Ji(n[h]))}function Qi(n){const e=n.charCodeAt(0),u=Ii[e>>8];return u<st?u:ki[u-st][255&e]}function Ht(n,e){const u=n.split("");if(e){const h=[];ai(u,h,e),Wt=h}return u.reverse(),X.reverse(),u.join("")}function Zi(n,e,u){for(let h=0;h<e;h++)if(n[h]===u)return h;return-1}function oi(n){for(let e=0;e<si.length;e++)if(n>=si[e]&&n<=Ui[e])return!0;return!1}function ei(n,e,u,h){for(;e*u<h&&Rt(n[e]);)e+=u;return!!(e*u<h&&oi(n[e]))}function Gi(n,e,u,h){for(;e*u<h&&Rt(n[e]);)e+=u;let l=" ";if(!(e*u<h))return!1;l=n[e];for(let a=0;a<_t.length;a++)if(_t[a]===l)return!0;return!1}function ui(n,e,u,h){if(h.hiLevel<n)return;if(n===1&&h.dir===vt&&!h.hasUbatB)return e.reverse(),void X.reverse();const l=e.length;let a,x,E,F,f,B=0;for(;B<l;){if(u[B]>=n){for(a=B+1;a<l&&u[a]>=n;)a++;for(x=B,E=a-1;x<E;x++,E--)F=e[x],e[x]=e[E],e[E]=F,f=X[x],X[x]=X[E],X[E]=f;B=a}B++}}function Hi(n,e,u,h,l){const a=e[h];return{UBAT_L:()=>(l.lastArabic=!1,s),UBAT_R:()=>(l.lastArabic=!1,o),UBAT_ON:()=>t,UBAT_AN:()=>U,UBAT_EN:()=>l.lastArabic?U:p,UBAT_AL:()=>(l.lastArabic=!0,l.hasUbatAl=!0,o),UBAT_WS:()=>t,UBAT_CS:()=>{let x,E;return h<1||h+1>=e.length||(x=u[h-1])!==p&&x!==U||(E=e[h+1])!==p&&E!==U?t:(l.lastArabic&&(E=U),E===x?E:t)},UBAT_ES:()=>(h>0?u[h-1]:et)===p&&h+1<e.length&&e[h+1]===p?p:t,UBAT_ET:()=>{if(h>0&&u[h-1]===p)return p;if(l.lastArabic)return t;let x=h+1;const E=e.length;for(;x<E&&e[x]===T;)x++;return x<E&&e[x]===p?p:t},UBAT_NSM:()=>{if(l.inFormat==="VLTR"){const x=e.length;let E=h+1;for(;E<x&&e[E]===r;)E++;if(E<x){const F=n[h].charCodeAt[0],f=F>=1425&&F<=2303||F===64286,B=e[E];if(f&&(B===o||B===i))return o}}return h<1||e[h-1]===et?t:u[h-1]},UBAT_B:()=>(l.lastArabic=!0,l.hasUbatB=!0,l.dir),UBAT_S:()=>(l.hasUbatS=!0,t),UBAT_LRE:()=>(l.lastArabic=!1,t),UBAT_RLE:()=>(l.lastArabic=!1,t),UBAT_LRO:()=>(l.lastArabic=!1,t),UBAT_RLO:()=>(l.lastArabic=!1,t),UBAT_PDF:()=>(l.lastArabic=!1,t),UBAT_BN:()=>t}[Pi[a]]()}function Ji(n){let e,u=0,h=$t.length-1;for(;u<=h;)if(e=Math.floor((u+h)/2),n<$t[e][0])h=e-1;else{if(!(n>$t[e][0]))return $t[e][1];u=e+1}return n}function Ki(n){for(let e=0;e<ii.length;e++)if(ii[e]===n)return!0;return!1}function ts(n){for(let e=0;e<Ot.length;e++)if(n===Ot[e])return vi[e];return n}function Jt(n,e){for(let u=0;u<Ot.length;u++)if(n===Ot[u])return e[u];return n}function Rt(n){return n>="\u064B"&&n<="\u0655"}function ni(n){return n==="L"?"LTR":n==="R"?"RTL":n==="C"?"CLR":n==="D"?"CRL":""}function is(n,e,u,h){for(;e*u<h&&Rt(n[e]);)e+=u;return e*u<h&&(n[e]=" ",!0)}function ss(n,e){for(let u=0;u<_t.length;u++)if(n===_t[u])return e[u];return n}function es(n,e,u){X=[],Wt=[];for(let h=0;h<u;h++)n[h]=h,e[h]=h,X[h]=h}function us(n){const e=new Array(n.length);for(let u=0;u<n.length;u++)e[n[u]]=u;return e}function xi(n,e,u,h){for(let l=0;l<n.length;l++)(n[l]>e||!u&&n[l]===e)&&(n[l]+=h)}let X=[],zt=[],Wt=[];const ns={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},rs=5,hs=6,At=0,vt=1,ri=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,ls=/[\u0591-\u06ff\ufb1d-\ufefc]/,as=Math.PI,os=128/as,xs=256/360;function yi(n,e){return(n%=e)>=0?n:n+e}function ps(n){return yi(n*os,256)}function Ts(n){return yi(n*xs,256)}function Pt(n,e,u){return n>=e&&n<=u||n>=u&&n<=e}class It{constructor(e,u,h){this.ratio=e,this.x=u,this.y=h}}class As{constructor(e,u,h,l=8,a=8){this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=l,this.pixelMargin=a,this.tileSize=mi*l,this.dz=e,this.yPos=u,this.xPos=h}setPixelMargin(e){e!==this.pixelMargin&&(this.pixelMargin=e,this.setExtent(this._extent))}setExtent(e){this._extent=e,this.finalRatio=this.tileSize/e*(1<<this.dz);let u=this.pixelRatio*this.pixelMargin;u/=this.finalRatio;const h=e>>this.dz;u>h&&(u=h),this.margin=u,this.xmin=h*this.xPos-u,this.ymin=h*this.yPos-u,this.xmax=this.xmin+h+2*u,this.ymax=this.ymin+h+2*u}reset(e){this.type=e,this.lines=[],this.starts=[],this.line=null,this.start=0}moveTo(e,u){this._pushLine(),this._prevIsIn=this._isIn(e,u),this._moveTo(e,u,this._prevIsIn),this._prevPt=new Q(e,u),this._firstPt=new Q(e,u),this._dist=0}lineTo(e,u){const h=this._isIn(e,u),l=new Q(e,u),a=Q.distance(this._prevPt,l);let x,E,F,f,B,v,A,_;if(h)this._prevIsIn?this._lineTo(e,u,!0):(x=this._prevPt,E=l,F=this._intersect(E,x),this.start=this._dist+a*(1-this._r),this._lineTo(F.x,F.y,!0),this._lineTo(E.x,E.y,!0));else if(this._prevIsIn)E=this._prevPt,x=l,F=this._intersect(E,x),this._lineTo(F.x,F.y,!0),this._lineTo(x.x,x.y,!1);else{const m=this._prevPt,g=l;if(m.x<=this.xmin&&g.x<=this.xmin||m.x>=this.xmax&&g.x>=this.xmax||m.y<=this.ymin&&g.y<=this.ymin||m.y>=this.ymax&&g.y>=this.ymax)this._lineTo(g.x,g.y,!1);else{const L=[];if((m.x<this.xmin&&g.x>this.xmin||m.x>this.xmin&&g.x<this.xmin)&&(f=(this.xmin-m.x)/(g.x-m.x),_=m.y+f*(g.y-m.y),_<=this.ymin?v=!1:_>=this.ymax?v=!0:L.push(new It(f,this.xmin,_))),(m.x<this.xmax&&g.x>this.xmax||m.x>this.xmax&&g.x<this.xmax)&&(f=(this.xmax-m.x)/(g.x-m.x),_=m.y+f*(g.y-m.y),_<=this.ymin?v=!1:_>=this.ymax?v=!0:L.push(new It(f,this.xmax,_))),(m.y<this.ymin&&g.y>this.ymin||m.y>this.ymin&&g.y<this.ymin)&&(f=(this.ymin-m.y)/(g.y-m.y),A=m.x+f*(g.x-m.x),A<=this.xmin?B=!1:A>=this.xmax?B=!0:L.push(new It(f,A,this.ymin))),(m.y<this.ymax&&g.y>this.ymax||m.y>this.ymax&&g.y<this.ymax)&&(f=(this.ymax-m.y)/(g.y-m.y),A=m.x+f*(g.x-m.x),A<=this.xmin?B=!1:A>=this.xmax?B=!0:L.push(new It(f,A,this.ymax))),L.length===0)B?v?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):v?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(L.length>1&&L[0].ratio>L[1].ratio)this.start=this._dist+a*L[1].ratio,this._lineTo(L[1].x,L[1].y,!0),this._lineTo(L[0].x,L[0].y,!0);else{this.start=this._dist+a*L[0].ratio;for(let w=0;w<L.length;w++)this._lineTo(L[w].x,L[w].y,!0)}this._lineTo(g.x,g.y,!1)}}this._dist+=a,this._prevIsIn=h,this._prevPt=l}close(){if(this.line.length>2){const e=this._firstPt,u=this._prevPt;e.x===u.x&&e.y===u.y||this.lineTo(e.x,e.y);const h=this.line;let l=h.length;for(;l>=4&&(h[0].x===h[1].x&&h[0].x===h[l-2].x||h[0].y===h[1].y&&h[0].y===h[l-2].y);)h.pop(),h[0].x=h[l-2].x,h[0].y=h[l-2].y,--l}}result(e=!0){return this._pushLine(),this.lines.length===0?null:(this.type===ft.Polygon&&e&&at.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}resultWithStarts(){if(this.type!==ft.LineString)throw new Error("Only valid for lines");this._pushLine();const e=this.lines,u=e.length;if(u===0)return null;const h=[];for(let l=0;l<u;l++)h.push({line:e[l],start:this.starts[l]||0});return h}_isIn(e,u){return e>=this.xmin&&e<=this.xmax&&u>=this.ymin&&u<=this.ymax}_intersect(e,u){let h,l,a;if(u.x>=this.xmin&&u.x<=this.xmax)l=u.y<=this.ymin?this.ymin:this.ymax,a=(l-e.y)/(u.y-e.y),h=e.x+a*(u.x-e.x);else if(u.y>=this.ymin&&u.y<=this.ymax)h=u.x<=this.xmin?this.xmin:this.xmax,a=(h-e.x)/(u.x-e.x),l=e.y+a*(u.y-e.y);else{l=u.y<=this.ymin?this.ymin:this.ymax,h=u.x<=this.xmin?this.xmin:this.xmax;const x=(h-e.x)/(u.x-e.x),E=(l-e.y)/(u.y-e.y);x<E?(a=x,l=e.y+x*(u.y-e.y)):(a=E,h=e.x+E*(u.x-e.x))}return this._r=a,new Q(h,l)}_pushLine(){this.line&&(this.type===ft.Point?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===ft.LineString?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===ft.Polygon&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}_moveTo(e,u,h){this.type!==ft.Polygon?h&&(e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),u=Math.round((u-(this.ymin+this.margin))*this.finalRatio),this.line.push(new Q(e,u))):(h||(e<this.xmin&&(e=this.xmin),e>this.xmax&&(e=this.xmax),u<this.ymin&&(u=this.ymin),u>this.ymax&&(u=this.ymax)),e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),u=Math.round((u-(this.ymin+this.margin))*this.finalRatio),this.line.push(new Q(e,u)),this._is_h=!1,this._is_v=!1)}_lineTo(e,u,h){let l,a;if(this.type!==ft.Polygon)if(h){if(e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),u=Math.round((u-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(l=this.line[this.line.length-1],l.equals(e,u)))return;this.line.push(new Q(e,u))}else this.line&&this.line.length>0&&this._pushLine();else if(h||(e<this.xmin&&(e=this.xmin),e>this.xmax&&(e=this.xmax),u<this.ymin&&(u=this.ymin),u>this.ymax&&(u=this.ymax)),e=Math.round((e-(this.xmin+this.margin))*this.finalRatio),u=Math.round((u-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){l=this.line[this.line.length-1];const x=l.x===e,E=l.y===u;if(x&&E)return;this._is_h&&x||this._is_v&&E?(l.x=e,l.y=u,a=this.line[this.line.length-2],a.x===e&&a.y===u?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(a=this.line[this.line.length-2],this._is_h=a.x===e,this._is_v=a.y===u)):(this._is_h=a.x===e,this._is_v=a.y===u)):(this.line.push(new Q(e,u)),this._is_h=x,this._is_v=E)}else this.line.push(new Q(e,u))}}class _s{setExtent(e){this._ratio=e===4096?1:4096/e}get validateTessellation(){return this._ratio<1}reset(e){this.lines=[],this.line=null}moveTo(e,u){this.line&&this.lines.push(this.line),this.line=[];const h=this._ratio;this.line.push(new Q(e*h,u*h))}lineTo(e,u){const h=this._ratio;this.line.push(new Q(e*h,u*h))}close(){const e=this.line;e&&!e[0].isEqual(e[e.length-1])&&e.push(e[0])}result(){return this.line&&this.lines.push(this.line),this.lines.length===0?null:this.lines}}var I;(function(n){n[n.sideLeft=0]="sideLeft",n[n.sideRight=1]="sideRight",n[n.sideTop=2]="sideTop",n[n.sideBottom=3]="sideBottom"})(I||(I={}));class at{static simplify(e,u,h){if(!h)return;const l=-u,a=e+u,x=-u,E=e+u,F=[],f=[],B=h.length;for(let A=0;A<B;++A){const _=h[A];if(!_||_.length<2)continue;let m,g=_[0];const L=_.length;for(let w=1;w<L;++w)m=_[w],g.x===m.x&&(g.x<=l&&(g.y>m.y?(F.push(A),F.push(w),F.push(I.sideLeft),F.push(-1)):(f.push(A),f.push(w),f.push(I.sideLeft),f.push(-1))),g.x>=a&&(g.y<m.y?(F.push(A),F.push(w),F.push(I.sideRight),F.push(-1)):(f.push(A),f.push(w),f.push(I.sideRight),f.push(-1)))),g.y===m.y&&(g.y<=x&&(g.x<m.x?(F.push(A),F.push(w),F.push(I.sideTop),F.push(-1)):(f.push(A),f.push(w),f.push(I.sideTop),f.push(-1))),g.y>=E&&(g.x>m.x?(F.push(A),F.push(w),F.push(I.sideBottom),F.push(-1)):(f.push(A),f.push(w),f.push(I.sideBottom),f.push(-1)))),g=m}if(F.length===0||f.length===0)return;at.fillParent(h,f,F),at.fillParent(h,F,f);const v=[];at.calcDeltas(v,f,F),at.calcDeltas(v,F,f),at.addDeltas(v,h)}static fillParent(e,u,h){const l=h.length,a=u.length;for(let x=0;x<a;x+=4){const E=u[x],F=u[x+1],f=u[x+2],B=e[E][F-1],v=e[E][F];let A=8092,_=-1;for(let m=0;m<l;m+=4){if(h[m+2]!==f)continue;const g=h[m],L=h[m+1],w=e[g][L-1],c=e[g][L];switch(f){case I.sideLeft:case I.sideRight:if(Pt(B.y,w.y,c.y)&&Pt(v.y,w.y,c.y)){const y=Math.abs(c.y-w.y);y<A&&(A=y,_=m)}break;case I.sideTop:case I.sideBottom:if(Pt(B.x,w.x,c.x)&&Pt(v.x,w.x,c.x)){const y=Math.abs(c.x-w.x);y<A&&(A=y,_=m)}}}u[x+3]=_}}static calcDeltas(e,u,h){const l=u.length;for(let a=0;a<l;a+=4){const x=[],E=at.calcDelta(a,u,h,x);e.push(u[a]),e.push(u[a+1]),e.push(u[a+2]),e.push(E)}}static calcDelta(e,u,h,l){const a=u[e+3];if(a===-1)return 0;const x=l.length;return x>1&&l[x-2]===a?0:(l.push(a),at.calcDelta(a,h,u,l)+1)}static addDeltas(e,u){const h=e.length;let l=0;for(let a=0;a<h;a+=4){const x=e[a+3];x>l&&(l=x)}for(let a=0;a<h;a+=4){const x=u[e[a]],E=e[a+1],F=l-e[a+3];switch(e[a+2]){case I.sideLeft:x[E-1].x-=F,x[E].x-=F,E===1&&(x[x.length-1].x-=F),E===x.length-1&&(x[0].x-=F);break;case I.sideRight:x[E-1].x+=F,x[E].x+=F,E===1&&(x[x.length-1].x+=F),E===x.length-1&&(x[0].x+=F);break;case I.sideTop:x[E-1].y-=F,x[E].y-=F,E===1&&(x[x.length-1].y-=F),E===x.length-1&&(x[0].y-=F);break;case I.sideBottom:x[E-1].y+=F,x[E].y+=F,E===1&&(x[x.length-1].y+=F),E===x.length-1&&(x[0].y+=F)}}}}export{gs as C,Ts as M,fs as a,ds as d,ps as h,_s as l,As as n,ms as r,cs as t};

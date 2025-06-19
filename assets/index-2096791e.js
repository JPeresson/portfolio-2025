var l_=Object.defineProperty;var c_=(s,e,t)=>e in s?l_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Fh=(s,e,t)=>(c_(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();class fs{constructor(e,t){this.r=e,this.pos=t}display(){noFill(),circle(this.pos.x,this.pos.y,this.r)}}let $i=[],Pr=240,Ca=Pr/2,wr,Sr,nc,u_=600,ic,kh,zh,Uh,Bh;const h_=s=>{function e(){nc.parent("fin")}class t{constructor(i){this.path=i,this.rayon=i.r,this.size=s.random(1,3),this.rand=s.random(.25,.85),this.hue=Math.floor(s.random(140,150)),this.diff=i.r/4+5,this.dist=s.createVector(s.random(i.pos.x-this.diff,i.pos.x+this.diff),s.random(i.pos.y-this.diff,i.pos.y+this.diff)),this.rep=50,this.starter=s.random(-this.rep,this.rep),this.form=s.random(1,1.25),this.pos=s.createVector(this.dist.x,this.dist.y),this.acc=s.createVector(),this.vel=s.createVector(),this.force=s.createVector(),this.project=s.createVector()}update(){let i=25,r=s.map(s.mouseX,i,s.width-i,-1,1),o=this.rayon/2,a=s.createVector(s.map(s.cos(this.starter),-1,1,-o,o),s.map(s.sin(this.starter),-1,1,-o,o));this.starter+=.016*r,this.pos=a.copy().add(this.vel),this.pos.add(this.dist),this.vel.add(this.acc),this.vel.limit(100),this.acc.mult(0)}applyForce(){let i=p5.Vector.sub(this.path.pos,this.pos);i.normalize(),i.mult(s.random(this.form)),this.acc.add(i)}link(i){for(let r of i){let o=dist(this.pos.x,this.pos.y,r.pos.x,r.pos.y);o<15&&(s.stroke(245),s.strokeWeight(map(o,0,150,.4,0)),s.line(this.pos.x,this.pos.y,r.pos.x,r.pos.y))}}display(){s.noStroke(),s.fill(s.color(`hsla(${this.hue}, 24%, 50%, ${this.rand})`)),s.circle(this.pos.x,this.pos.y,this.size)}projection(){s.fill("red"),this.project=this.path.pos.copy();let i=p5.Vector.sub(this.pos,this.project);i.normalize(),i.mult(this.path.r/2),this.project.add(i),s.fill("red")}}s.setup=()=>{nc=s.createCanvas(u_,700),e(),wr=s.width/2,Sr=s.height/2,ic=new fs(Pr,s.createVector(wr,Sr)),kh=new fs(Pr,s.createVector(wr,Sr-Ca)),zh=new fs(Pr,s.createVector(wr+Ca,Sr)),Uh=new fs(Pr,s.createVector(wr,Sr+Ca)),Bh=new fs(Pr,s.createVector(wr-Ca,Sr)),nc.push,$i.push(new t(ic));for(let i=0;i<150;i++)$i.push(new t(ic)),$i.push(new t(kh)),$i.push(new t(Uh)),$i.push(new t(Bh)),$i.push(new t(zh));let n=new fs(Pr*2,s.createVector(wr,Sr));for(let i=0;i<200;i++)$i.push(new t(n))},s.draw=()=>{s.background(250,246,237,0),s.background("#e2e2e2"),$i.forEach(n=>{n.display(),n.applyForce(),n.update()})},s.windowResized=()=>{e()}};new p5(h_,"one");/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ju="149",ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},f_=0,Vh=1,d_=2,Tp=1,Cp=2,Oo=3,Xi=0,Vn=1,Bi=2,pr=0,Gs=1,Gh=2,Hh=3,Wh=4,p_=5,Is=100,m_=101,g_=102,Xh=103,jh=104,__=200,x_=201,v_=202,y_=203,Ep=204,Ap=205,b_=206,M_=207,w_=208,S_=209,T_=210,C_=0,E_=1,A_=2,iu=3,L_=4,P_=5,R_=6,D_=7,Lp=0,I_=1,O_=2,Hi=0,N_=1,F_=2,k_=3,z_=4,U_=5,Pp=300,Js=301,Qs=302,ru=303,su=304,Vl=306,eo=1e3,Jn=1001,Tl=1002,Ot=1003,ou=1004,fl=1005,wn=1006,Rp=1007,Qr=1008,es=1009,B_=1010,V_=1011,Dp=1012,G_=1013,zr=1014,ar=1015,sa=1016,H_=1017,W_=1018,Hs=1020,X_=1021,Qn=1023,j_=1024,q_=1025,Wr=1026,to=1027,Y_=1028,K_=1029,$_=1030,Z_=1031,J_=1033,rc=33776,sc=33777,oc=33778,ac=33779,qh=35840,Yh=35841,Kh=35842,$h=35843,Q_=36196,Zh=37492,Jh=37496,Qh=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,of=37814,af=37815,lf=37816,cf=37817,uf=37818,hf=37819,ff=37820,df=37821,lc=36492,e0=36283,pf=36284,mf=36285,gf=36286,oa=2300,no=2301,cc=2302,_f=2400,xf=2401,vf=2402,t0=2500,n0=0,Ip=1,au=2,ts=3e3,dt=3001,i0=3200,r0=3201,Op=0,s0=1,di="srgb",aa="srgb-linear",uc=7680,o0=519,lu=35044,yf="300 es",cu=1035;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bf=1234567;const Wo=Math.PI/180,la=180/Math.PI;function ci(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function nn(s,e,t){return Math.max(e,Math.min(t,s))}function qu(s,e){return(s%e+e)%e}function a0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function l0(s,e,t){return s!==e?(t-s)/(e-s):0}function Xo(s,e,t){return(1-t)*s+t*e}function c0(s,e,t,n){return Xo(s,e,1-Math.exp(-t*n))}function u0(s,e=1){return e-Math.abs(qu(s,e*2)-e)}function h0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function f0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function d0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function p0(s,e){return s+Math.random()*(e-s)}function m0(s){return s*(.5-Math.random())}function g0(s){s!==void 0&&(bf=s);let e=bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _0(s){return s*Wo}function x0(s){return s*la}function uu(s){return(s&s-1)===0&&s!==0}function Np(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function v0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var y0=Object.freeze({__proto__:null,DEG2RAD:Wo,RAD2DEG:la,ceilPowerOfTwo:Np,clamp:nn,damp:c0,degToRad:_0,denormalize:Vi,euclideanModulo:qu,floorPowerOfTwo:Cl,generateUUID:ci,inverseLerp:l0,isPowerOfTwo:uu,lerp:Xo,mapLinear:a0,normalize:xt,pingpong:u0,radToDeg:x0,randFloat:p0,randFloatSpread:m0,randInt:d0,seededRandom:g0,setQuaternionFromProperEuler:v0,smootherstep:f0,smoothstep:h0});class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(){Un.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],p=i[0],m=i[3],_=i[6],M=i[1],y=i[4],v=i[7],x=i[2],T=i[5],E=i[8];return r[0]=o*p+a*M+l*x,r[3]=o*m+a*y+l*T,r[6]=o*_+a*v+l*E,r[1]=c*p+u*M+h*x,r[4]=c*m+u*y+h*T,r[7]=c*_+u*v+h*E,r[2]=f*p+d*M+g*x,r[5]=f*m+d*y+g*T,r[8]=f*_+d*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hc.makeScale(e,t)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new Un;function Fp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ca(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function dl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const fc={[di]:{[aa]:Xr},[aa]:{[di]:dl}},an={legacyMode:!0,get workingColorSpace(){return aa},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(fc[e]&&fc[e][t]!==void 0){const n=fc[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={r:0,g:0,b:0},si={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function dc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Aa(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class ${constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=an.workingColorSpace){return this.r=e,this.g=t,this.b=n,an.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=an.workingColorSpace){if(e=qu(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dc(o,r,e+1/3),this.g=dc(o,r,e),this.b=dc(o,r,e-1/3)}return an.toWorkingColorSpace(this,i),this}setStyle(e,t=di){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,an.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,an.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,an.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,an.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=di){const n=kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=dl(e.r),this.g=dl(e.g),this.b=dl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return an.fromWorkingColorSpace(Aa(this,kt),e),nn(kt.r*255,0,255)<<16^nn(kt.g*255,0,255)<<8^nn(kt.b*255,0,255)<<0}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=an.workingColorSpace){an.fromWorkingColorSpace(Aa(this,kt),t);const n=kt.r,i=kt.g,r=kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=an.workingColorSpace){return an.fromWorkingColorSpace(Aa(this,kt),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=di){return an.fromWorkingColorSpace(Aa(this,kt),e),e!==di?`color(${e} ${kt.r} ${kt.g} ${kt.b})`:`rgb(${kt.r*255|0},${kt.g*255|0},${kt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(si),si.h+=e,si.s+=t,si.l+=n,this.setHSL(si.h,si.s,si.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Ea);const n=Xo(si.h,Ea.h,t),i=Xo(si.s,Ea.s,t),r=Xo(si.l,Ea.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}$.NAMES=kp;let ms;class zp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=ca("canvas")),ms.width=e.width,ms.height=e.height;const n=ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Xr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xr(t[n]/255)*255):t[n]=Xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Up{constructor(e=null){this.isSource=!0,this.uuid=ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(pc(i[o].image)):r.push(pc(i[o]))}else r=pc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b0=0;class Yt extends cs{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Jn,i=Jn,r=wn,o=Qr,a=Qn,l=es,c=Yt.DEFAULT_ANISOTROPY,u=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=ci(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Un,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Pp;Yt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,x=(_+1)/2,T=(u+f)/4,E=(h+p)/4,b=(g+m)/4;return y>v&&y>x?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=E/n):v>x?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=b/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=E/r,i=b/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-p)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xr extends cs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Up(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bp extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M0 extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==g){let m=1-a;const _=l*f+c*d+u*g+h*p,M=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const x=Math.sqrt(y),T=Math.atan2(x,_*M);m=Math.sin(m*T)/x,a=Math.sin(a*T)/x}const v=a*M;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+p*v,m===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new F,Mf=new Ti;class po{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Tr.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Tr)}else n.boundingBox===null&&n.computeBoundingBox(),gc.copy(n.boundingBox),gc.applyMatrix4(e.matrixWorld),this.union(gc);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tr),Tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),La.subVectors(this.max,yo),gs.subVectors(e.a,yo),_s.subVectors(e.b,yo),xs.subVectors(e.c,yo),Zi.subVectors(_s,gs),Ji.subVectors(xs,_s),Cr.subVectors(gs,xs);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Cr.z,Cr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Cr.z,0,-Cr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Cr.y,Cr.x,0];return!_c(t,gs,_s,xs,La)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,gs,_s,xs,La))?!1:(Pa.crossVectors(Zi,Ji),t=[Pa.x,Pa.y,Pa.z],_c(t,gs,_s,xs,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Tr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new F,new F,new F,new F,new F,new F,new F,new F],Tr=new F,gc=new po,gs=new F,_s=new F,xs=new F,Zi=new F,Ji=new F,Cr=new F,yo=new F,La=new F,Pa=new F,Er=new F;function _c(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Er.fromArray(s,r);const a=i.x*Math.abs(Er.x)+i.y*Math.abs(Er.y)+i.z*Math.abs(Er.z),l=e.dot(Er),c=t.dot(Er),u=n.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const w0=new po,bo=new F,xc=new F;class mo{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(xc)),this.expandByPoint(bo.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new F,vc=new F,Ra=new F,Qi=new F,yc=new F,Da=new F,bc=new F;class Yu{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.direction).multiplyScalar(t).add(this.origin),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vc.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(vc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ra),a=Qi.dot(this.direction),l=-Qi.dot(Ra),c=Qi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ra).multiplyScalar(f).add(vc),d}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,i,r){yc.subVectors(t,e),Da.subVectors(n,e),bc.crossVectors(yc,Da);let o=this.direction.dot(bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(Da.crossVectors(Qi,Da));if(l<0)return null;const c=a*this.direction.dot(yc.cross(Qi));if(c<0||l+c>o)return null;const u=-a*Qi.dot(bc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,T0)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),er.crossVectors(n,Rn),er.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),er.crossVectors(n,Rn)),er.normalize(),Ia.crossVectors(Rn,er),i[0]=er.x,i[4]=Ia.x,i[8]=Rn.x,i[1]=er.y,i[5]=Ia.y,i[9]=Rn.y,i[2]=er.z,i[6]=Ia.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],M=n[3],y=n[7],v=n[11],x=n[15],T=i[0],E=i[4],b=i[8],S=i[12],R=i[1],H=i[5],k=i[9],O=i[13],I=i[2],G=i[6],J=i[10],Y=i[14],q=i[3],re=i[7],P=i[11],fe=i[15];return r[0]=o*T+a*R+l*I+c*q,r[4]=o*E+a*H+l*G+c*re,r[8]=o*b+a*k+l*J+c*P,r[12]=o*S+a*O+l*Y+c*fe,r[1]=u*T+h*R+f*I+d*q,r[5]=u*E+h*H+f*G+d*re,r[9]=u*b+h*k+f*J+d*P,r[13]=u*S+h*O+f*Y+d*fe,r[2]=g*T+p*R+m*I+_*q,r[6]=g*E+p*H+m*G+_*re,r[10]=g*b+p*k+m*J+_*P,r[14]=g*S+p*O+m*Y+_*fe,r[3]=M*T+y*R+v*I+x*q,r[7]=M*E+y*H+v*G+x*re,r[11]=M*b+y*k+v*J+x*P,r[15]=M*S+y*O+v*Y+x*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+p*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],M=h*m*c-p*f*c+p*l*d-a*m*d-h*l*_+a*f*_,y=g*f*c-u*m*c-g*l*d+o*m*d+u*l*_-o*f*_,v=u*p*c-g*h*c+g*a*d-o*p*d-u*a*_+o*h*_,x=g*h*l-u*p*l-g*a*f+o*p*f+u*a*m-o*h*m,T=t*M+n*y+i*v+r*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=M*E,e[1]=(p*f*r-h*m*r-p*i*d+n*m*d+h*i*_-n*f*_)*E,e[2]=(a*m*r-p*l*r+p*i*c-n*m*c-a*i*_+n*l*_)*E,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=y*E,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*_+t*f*_)*E,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*_-t*l*_)*E,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=v*E,e[9]=(g*h*r-u*p*r-g*n*d+t*p*d+u*n*_-t*h*_)*E,e[10]=(o*p*r-g*a*r+g*n*c-t*p*c-o*n*_+t*a*_)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=x*E,e[13]=(u*p*i-g*h*i+g*n*f-t*p*f-u*n*m+t*h*m)*E,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,p=o*u,m=o*h,_=a*h,M=l*c,y=l*u,v=l*h,x=n.x,T=n.y,E=n.z;return i[0]=(1-(p+_))*x,i[1]=(d+v)*x,i[2]=(g-y)*x,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+_))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(g+y)*E,i[9]=(m-M)*E,i[10]=(1-(f+p))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=vs.set(i[0],i[1],i[2]).length();const o=vs.set(i[4],i[5],i[6]).length(),a=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],oi.copy(this);const c=1/r,u=1/o,h=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,t.setFromRotationMatrix(oi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,f=(n+i)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new F,oi=new st,S0=new F(0,0,0),T0=new F(1,1,1),er=new F,Ia=new F,Rn=new F,wf=new st,Sf=new Ti;class Gl{constructor(e=0,t=0,n=0,i=Gl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gl.DEFAULT_ORDER="XYZ";class Vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C0=0;const Tf=new F,ys=new Ti,Ri=new st,Oa=new F,Mo=new F,E0=new F,A0=new Ti,Cf=new F(1,0,0),Ef=new F(0,1,0),Af=new F(0,0,1),L0={type:"added"},Lf={type:"removed"};class Tt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new F,t=new Gl,n=new Ti,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new Un}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Cf,e)}rotateY(e){return this.rotateOnAxis(Ef,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cf,e)}translateY(e){return this.translateOnAxis(Ef,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Mo,Oa,this.up):Ri.lookAt(Oa,Mo,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(Ri),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(L0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Lf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,A0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new F(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new F,Di=new F,Mc=new F,Ii=new F,bs=new F,Ms=new F,Pf=new F,wc=new F,Sc=new F,Tc=new F;class zi{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ai.subVectors(e,t),i.cross(ai);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ai.subVectors(i,t),Di.subVectors(n,t),Mc.subVectors(e,t);const o=ai.dot(ai),a=ai.dot(Di),l=ai.dot(Mc),c=Di.dot(Di),u=Di.dot(Mc),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii),Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ii),l.set(0,0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l}static isFrontFacing(e,t,n,i){return ai.subVectors(n,t),Di.subVectors(e,t),ai.cross(Di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ai.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return zi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;bs.subVectors(i,n),Ms.subVectors(r,n),wc.subVectors(e,n);const l=bs.dot(wc),c=Ms.dot(wc);if(l<=0&&c<=0)return t.copy(n);Sc.subVectors(e,i);const u=bs.dot(Sc),h=Ms.dot(Sc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(bs,o);Tc.subVectors(e,r);const d=bs.dot(Tc),g=Ms.dot(Tc);if(g>=0&&d<=g)return t.copy(r);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ms,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Pf.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Pf,a);const _=1/(m+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(bs,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let P0=0;class Mi extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Gs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ep,this.blendDst=Ap,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=iu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uc,this.stencilZFail=uc,this.stencilZPass=uc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lr extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new F,Na=new We;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Gp extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hp extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ui extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let R0=0;const jn=new st,Cc=new Tt,ws=new F,Dn=new po,wo=new po,Gt=new F;class ri extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?Hp:Gp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Un().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Dn.min,wo.min),Dn.expandByPoint(Gt),Gt.addVectors(Dn.max,wo.max),Dn.expandByPoint(Gt)):(Dn.expandByPoint(wo.min),Dn.expandByPoint(wo.max))}Dn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Gt.add(ws)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new F,u[R]=new F;const h=new F,f=new F,d=new F,g=new We,p=new We,m=new We,_=new F,M=new F;function y(R,H,k){h.fromArray(i,R*3),f.fromArray(i,H*3),d.fromArray(i,k*3),g.fromArray(o,R*2),p.fromArray(o,H*2),m.fromArray(o,k*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const O=1/(p.x*m.y-m.x*p.y);isFinite(O)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(O),M.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(O),c[R].add(_),c[H].add(_),c[k].add(_),u[R].add(M),u[H].add(M),u[k].add(M))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,H=v.length;R<H;++R){const k=v[R],O=k.start,I=k.count;for(let G=O,J=O+I;G<J;G+=3)y(n[G+0],n[G+1],n[G+2])}const x=new F,T=new F,E=new F,b=new F;function S(R){E.fromArray(r,R*3),b.copy(E);const H=c[R];x.copy(H),x.sub(E.multiplyScalar(E.dot(H))).normalize(),T.crossVectors(b,H);const O=T.dot(u[R])<0?-1:1;l[R*4]=x.x,l[R*4+1]=x.y,l[R*4+2]=x.z,l[R*4+3]=O}for(let R=0,H=v.length;R<H;++R){const k=v[R],O=k.start,I=k.count;for(let G=O,J=O+I;G<J;G+=3)S(n[G+0]),S(n[G+1]),S(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new Kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rf=new st,Ss=new Yu,Ec=new mo,So=new F,To=new F,Co=new F,Ac=new F,Fa=new F,ka=new We,za=new We,Ua=new We,Lc=new F,Ba=new F;class Sn extends Tt{constructor(e=new ri,t=new lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ac.fromBufferAttribute(h,e),o?Fa.addScaledVector(Ac,u):Fa.addScaledVector(Ac.sub(t),u))}t.add(Fa)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(r),e.ray.intersectsSphere(Ec)===!1)||(Rf.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Rf),n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=i[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,v=M;y<v;y+=3){const x=a.getX(y),T=a.getX(y+1),E=a.getX(y+2);o=Va(this,m,e,Ss,c,u,x,T,E),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);o=Va(this,i,e,Ss,c,u,_,M,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=i[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,v=M;y<v;y+=3){const x=y,T=y+1,E=y+2;o=Va(this,m,e,Ss,c,u,x,T,E),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=p,M=p+1,y=p+2;o=Va(this,i,e,Ss,c,u,_,M,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function D0(s,e,t,n,i,r,o,a){let l;if(e.side===Vn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Xi,a),l===null)return null;Ba.copy(a),Ba.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:s}}function Va(s,e,t,n,i,r,o,a,l){s.getVertexPosition(o,So),s.getVertexPosition(a,To),s.getVertexPosition(l,Co);const c=D0(s,e,t,n,So,To,Co,Lc);if(c){i&&(ka.fromBufferAttribute(i,o),za.fromBufferAttribute(i,a),Ua.fromBufferAttribute(i,l),c.uv=zi.getUV(Lc,So,To,Co,ka,za,Ua,new We)),r&&(ka.fromBufferAttribute(r,o),za.fromBufferAttribute(r,a),Ua.fromBufferAttribute(r,l),c.uv2=zi.getUV(Lc,So,To,Co,ka,za,Ua,new We));const u={a:o,b:a,c:l,normal:new F,materialIndex:0};zi.getNormal(So,To,Co,u.normal),c.face=u}return c}class ba extends ri{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(h,2));function g(p,m,_,M,y,v,x,T,E,b,S){const R=v/E,H=x/b,k=v/2,O=x/2,I=T/2,G=E+1,J=b+1;let Y=0,q=0;const re=new F;for(let P=0;P<J;P++){const fe=P*H-O;for(let W=0;W<G;W++){const ne=W*R-k;re[p]=ne*M,re[m]=fe*y,re[_]=I,c.push(re.x,re.y,re.z),re[p]=0,re[m]=0,re[_]=T>0?1:-1,u.push(re.x,re.y,re.z),h.push(W/E),h.push(1-P/b),Y+=1}}for(let P=0;P<b;P++)for(let fe=0;fe<E;fe++){const W=f+fe+G*P,ne=f+fe+G*(P+1),le=f+(fe+1)+G*(P+1),ue=f+(fe+1)+G*P;l.push(W,ne,ue),l.push(ne,le,ue),q+=6}a.addGroup(d,q,S),d+=q,f+=Y}}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function hn(s){const e={};for(let t=0;t<s.length;t++){const n=io(s[t]);for(const i in n)e[i]=n[i]}return e}function I0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wp(s){return s.getRenderTarget()===null&&s.outputEncoding===dt?di:aa}const Xp={clone:io,merge:hn};var O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=N0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=I0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let jp=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class _n extends jp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,Cs=1;class F0 extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new _n(Ts,Cs,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new _n(Ts,Cs,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new _n(Ts,Cs,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new _n(Ts,Cs,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new _n(Ts,Cs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new _n(Ts,Cs,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Hi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class qp extends Yt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k0 extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ba(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:pr});r.uniforms.tEquirect.value=t;const o=new Sn(i,r),a=t.minFilter;return t.minFilter===Qr&&(t.minFilter=wn),new F0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Pc=new F,z0=new F,U0=new Un;class Rr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pc.subVectors(n,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||U0.getNormalMatrix(e),i=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new mo,Ga=new F;class Ku{constructor(e=new Rr,t=new Rr,n=new Rr,i=new Rr,r=new Rr,o=new Rr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],M=n[14],y=n[15];return t[0].setComponents(a-i,h-l,p-f,y-m).normalize(),t[1].setComponents(a+i,h+l,p+f,y+m).normalize(),t[2].setComponents(a+r,h+c,p+d,y+_).normalize(),t[3].setComponents(a-r,h-c,p-d,y-_).normalize(),t[4].setComponents(a-o,h-u,p-g,y-M).normalize(),t[5].setComponents(a+o,h+u,p+g,y+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ga.x=i.normal.x>0?e.max.x:e.min.x,Ga.y=i.normal.y>0?e.max.y:e.min.y,Ga.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function B0(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Hl extends ri{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const M=_*f-o;for(let y=0;y<c;y++){const v=y*h-r;g.push(v,-M,0),p.push(0,0,1),m.push(y/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){const y=M+c*_,v=M+c*(_+1),x=M+1+c*(_+1),T=M+1+c*_;d.push(y,v,T),d.push(v,x,T)}this.setIndex(d),this.setAttribute("position",new ui(g,3)),this.setAttribute("normal",new ui(p,3)),this.setAttribute("uv",new ui(m,2))}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}var V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,W0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0="vec3 transformed = vec3( position );",Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,$0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ax=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",px=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Px=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Fx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Bx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,tv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Dv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Iv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ov=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Nv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Fv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ry=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$e={alphamap_fragment:V0,alphamap_pars_fragment:G0,alphatest_fragment:H0,alphatest_pars_fragment:W0,aomap_fragment:X0,aomap_pars_fragment:j0,begin_vertex:q0,beginnormal_vertex:Y0,bsdfs:K0,iridescence_fragment:$0,bumpmap_pars_fragment:Z0,clipping_planes_fragment:J0,clipping_planes_pars_fragment:Q0,clipping_planes_pars_vertex:ex,clipping_planes_vertex:tx,color_fragment:nx,color_pars_fragment:ix,color_pars_vertex:rx,color_vertex:sx,common:ox,cube_uv_reflection_fragment:ax,defaultnormal_vertex:lx,displacementmap_pars_vertex:cx,displacementmap_vertex:ux,emissivemap_fragment:hx,emissivemap_pars_fragment:fx,encodings_fragment:dx,encodings_pars_fragment:px,envmap_fragment:mx,envmap_common_pars_fragment:gx,envmap_pars_fragment:_x,envmap_pars_vertex:xx,envmap_physical_pars_fragment:Px,envmap_vertex:vx,fog_vertex:yx,fog_pars_vertex:bx,fog_fragment:Mx,fog_pars_fragment:wx,gradientmap_pars_fragment:Sx,lightmap_fragment:Tx,lightmap_pars_fragment:Cx,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:Ax,lights_pars_begin:Lx,lights_toon_fragment:Rx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Ix,lights_phong_pars_fragment:Ox,lights_physical_fragment:Nx,lights_physical_pars_fragment:Fx,lights_fragment_begin:kx,lights_fragment_maps:zx,lights_fragment_end:Ux,logdepthbuf_fragment:Bx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Hx,map_fragment:Wx,map_pars_fragment:Xx,map_particle_fragment:jx,map_particle_pars_fragment:qx,metalnessmap_fragment:Yx,metalnessmap_pars_fragment:Kx,morphcolor_vertex:$x,morphnormal_vertex:Zx,morphtarget_pars_vertex:Jx,morphtarget_vertex:Qx,normal_fragment_begin:ev,normal_fragment_maps:tv,normal_pars_fragment:nv,normal_pars_vertex:iv,normal_vertex:rv,normalmap_pars_fragment:sv,clearcoat_normal_fragment_begin:ov,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:lv,iridescence_pars_fragment:cv,output_fragment:uv,packing:hv,premultiplied_alpha_fragment:fv,project_vertex:dv,dithering_fragment:pv,dithering_pars_fragment:mv,roughnessmap_fragment:gv,roughnessmap_pars_fragment:_v,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:vv,shadowmap_vertex:yv,shadowmask_pars_fragment:bv,skinbase_vertex:Mv,skinning_pars_vertex:wv,skinning_vertex:Sv,skinnormal_vertex:Tv,specularmap_fragment:Cv,specularmap_pars_fragment:Ev,tonemapping_fragment:Av,tonemapping_pars_fragment:Lv,transmission_fragment:Pv,transmission_pars_fragment:Rv,uv_pars_fragment:Dv,uv_pars_vertex:Iv,uv_vertex:Ov,uv2_pars_fragment:Nv,uv2_pars_vertex:Fv,uv2_vertex:kv,worldpos_vertex:zv,background_vert:Uv,background_frag:Bv,backgroundCube_vert:Vv,backgroundCube_frag:Gv,cube_vert:Hv,cube_frag:Wv,depth_vert:Xv,depth_frag:jv,distanceRGBA_vert:qv,distanceRGBA_frag:Yv,equirect_vert:Kv,equirect_frag:$v,linedashed_vert:Zv,linedashed_frag:Jv,meshbasic_vert:Qv,meshbasic_frag:ey,meshlambert_vert:ty,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:ry,meshnormal_vert:sy,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:ly,meshphysical_vert:cy,meshphysical_frag:uy,meshtoon_vert:hy,meshtoon_frag:fy,points_vert:dy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:_y,sprite_frag:xy},xe={common:{diffuse:{value:new $(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Un},uv2Transform:{value:new Un},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Un}},sprite:{diffuse:{value:new $(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Un}}},gi={basic:{uniforms:hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $(0)},specular:{value:new $(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:hn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new $(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:hn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new $(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:hn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:hn([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:hn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:hn([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:hn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:hn([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Un},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:hn([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:hn([xe.lights,xe.fog,{color:{value:new $(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};gi.physical={uniforms:hn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new We(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $(1,1,1)},specularColorMap:{value:null}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ha={r:0,b:0,g:0};function vy(s,e,t,n,i,r,o){const a=new $(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,_){let M=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const v=s.xr,x=v.getSession&&v.getSession();x&&x.environmentBlendMode==="additive"&&(y=null),y===null?p(a,l):y&&y.isColor&&(p(y,1),M=!0),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Vl)?(u===void 0&&(u=new Sn(new ba(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:io(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==dt,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Sn(new Hl(2,2),new gn({name:"BackgroundMaterial",uniforms:io(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(Ha,Wp(s)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function yy(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(I,G,J,Y,q){let re=!1;if(o){const P=p(Y,J,G);c!==P&&(c=P,d(c.object)),re=_(I,Y,J,q),re&&M(I,Y,J,q)}else{const P=G.wireframe===!0;(c.geometry!==Y.id||c.program!==J.id||c.wireframe!==P)&&(c.geometry=Y.id,c.program=J.id,c.wireframe=P,re=!0)}q!==null&&t.update(q,34963),(re||u)&&(u=!1,b(I,G,J,Y),q!==null&&s.bindBuffer(34963,t.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function p(I,G,J){const Y=J.wireframe===!0;let q=a[I.id];q===void 0&&(q={},a[I.id]=q);let re=q[G.id];re===void 0&&(re={},q[G.id]=re);let P=re[Y];return P===void 0&&(P=m(f()),re[Y]=P),P}function m(I){const G=[],J=[],Y=[];for(let q=0;q<i;q++)G[q]=0,J[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:Y,object:I,attributes:{},index:null}}function _(I,G,J,Y){const q=c.attributes,re=G.attributes;let P=0;const fe=J.getAttributes();for(const W in fe)if(fe[W].location>=0){const le=q[W];let ue=re[W];if(ue===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),le===void 0||le.attribute!==ue||ue&&le.data!==ue.data)return!0;P++}return c.attributesNum!==P||c.index!==Y}function M(I,G,J,Y){const q={},re=G.attributes;let P=0;const fe=J.getAttributes();for(const W in fe)if(fe[W].location>=0){let le=re[W];le===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(le=I.instanceColor));const ue={};ue.attribute=le,le&&le.data&&(ue.data=le.data),q[W]=ue,P++}c.attributes=q,c.attributesNum=P,c.index=Y}function y(){const I=c.newAttributes;for(let G=0,J=I.length;G<J;G++)I[G]=0}function v(I){x(I,0)}function x(I,G){const J=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;J[I]=1,Y[I]===0&&(s.enableVertexAttribArray(I),Y[I]=1),q[I]!==G&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),q[I]=G)}function T(){const I=c.newAttributes,G=c.enabledAttributes;for(let J=0,Y=G.length;J<Y;J++)G[J]!==I[J]&&(s.disableVertexAttribArray(J),G[J]=0)}function E(I,G,J,Y,q,re){n.isWebGL2===!0&&(J===5124||J===5125)?s.vertexAttribIPointer(I,G,J,q,re):s.vertexAttribPointer(I,G,J,Y,q,re)}function b(I,G,J,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const q=Y.attributes,re=J.getAttributes(),P=G.defaultAttributeValues;for(const fe in re){const W=re[fe];if(W.location>=0){let ne=q[fe];if(ne===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){const le=ne.normalized,ue=ne.itemSize,X=t.get(ne);if(X===void 0)continue;const Ae=X.buffer,Me=X.type,be=X.bytesPerElement;if(ne.isInterleavedBufferAttribute){const ge=ne.data,ke=ge.stride,De=ne.offset;if(ge.isInstancedInterleavedBuffer){for(let pe=0;pe<W.locationSize;pe++)x(W.location+pe,ge.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let pe=0;pe<W.locationSize;pe++)v(W.location+pe);s.bindBuffer(34962,Ae);for(let pe=0;pe<W.locationSize;pe++)E(W.location+pe,ue/W.locationSize,Me,le,ke*be,(De+ue/W.locationSize*pe)*be)}else{if(ne.isInstancedBufferAttribute){for(let ge=0;ge<W.locationSize;ge++)x(W.location+ge,ne.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ge=0;ge<W.locationSize;ge++)v(W.location+ge);s.bindBuffer(34962,Ae);for(let ge=0;ge<W.locationSize;ge++)E(W.location+ge,ue/W.locationSize,Me,le,ue*be,ue/W.locationSize*ge*be)}}else if(P!==void 0){const le=P[fe];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(W.location,le);break;case 3:s.vertexAttrib3fv(W.location,le);break;case 4:s.vertexAttrib4fv(W.location,le);break;default:s.vertexAttrib1fv(W.location,le)}}}}T()}function S(){k();for(const I in a){const G=a[I];for(const J in G){const Y=G[J];for(const q in Y)g(Y[q].object),delete Y[q];delete G[J]}delete a[I]}}function R(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const J in G){const Y=G[J];for(const q in Y)g(Y[q].object),delete Y[q];delete G[J]}delete a[I.id]}function H(I){for(const G in a){const J=a[G];if(J[I.id]===void 0)continue;const Y=J[I.id];for(const q in Y)g(Y[q].object),delete Y[q];delete J[I.id]}}function k(){O(),u=!0,c!==l&&(c=l,d(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:v,disableUnusedAttributes:T}}function by(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function My(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),d=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),m=s.getParameter(36347),_=s.getParameter(36348),M=s.getParameter(36349),y=f>0,v=o||e.has("OES_texture_float"),x=y&&v,T=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:x,maxSamples:T}}function wy(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Rr,a=new Un,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,y=M*4;let v=_.clippingState||null;l.value=v,v=u(g,f,y,d);for(let x=0;x!==y;++x)v[x]=t[x];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let y=0,v=d;y!==p;++y,v+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Sy(s){let e=new WeakMap;function t(o,a){return a===ru?o.mapping=Js:a===su&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ru||a===su)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new k0(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ma extends jp{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fs=4,Df=[.125,.215,.35,.446,.526,.582],kr=20,Rc=new Ma,If=new $;let Dc=null;const Dr=(1+Math.sqrt(5))/2,As=1/Dr,Of=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Dr,As),new F(0,Dr,-As),new F(As,0,Dr),new F(-As,0,Dr),new F(Dr,As,0),new F(-Dr,As,0)];class Nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Dc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc),e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:sa,format:Qn,encoding:ts,depthBuffer:!1},i=Ff(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ty(r)),this._blurMaterial=Cy(r,e,t)}return i}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,Rc)}_sceneToCubeUV(e,t,n,i){const a=new _n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(If),u.toneMapping=Hi,u.autoClear=!1;const d=new lr({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),g=new Sn(new ba,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(If),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):M===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;Wa(i,M*y,_>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Js||e.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Wa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Rc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Of[(i-1)%Of.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Sn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*kr-1),p=r/g,m=isFinite(r)?1+Math.floor(u*p):kr;m>kr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);const _=[];let M=0;for(let E=0;E<kr;++E){const b=E/p,S=Math.exp(-b*b/2);_.push(S),E===0?M+=S:E<m&&(M+=2*S)}for(let E=0;E<_.length;E++)_[E]=_[E]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[i],x=3*v*(i>y-Fs?i-y+Fs:0),T=4*(this._cubeSize-v);Wa(t,x,T,3*v,2*v),l.setRenderTarget(t),l.render(h,Rc)}}function Ty(s){const e=[],t=[],n=[];let i=s;const r=s-Fs+1+Df.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Fs?l=Df[o-s+Fs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,_=1,M=new Float32Array(p*g*d),y=new Float32Array(m*g*d),v=new Float32Array(_*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,b=T>2?0:-1,S=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];M.set(S,p*g*T),y.set(f,m*g*T);const R=[T,T,T,T,T,T];v.set(R,_*g*T)}const x=new ri;x.setAttribute("position",new Kt(M,p)),x.setAttribute("uv",new Kt(y,m)),x.setAttribute("faceIndex",new Kt(v,_)),e.push(x),i>Fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ff(s,e,t){const n=new xr(s,e,t);return n.texture.mapping=Vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Cy(s,e,t){const n=new Float32Array(kr),i=new F(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function kf(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function zf(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ey(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ru||l===su,u=l===Js||l===Qs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Nf(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Nf(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ay(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ly(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const M=d.array;p=d.version;for(let y=0,v=M.length;y<v;y+=3){const x=M[y+0],T=M[y+1],E=M[y+2];f.push(x,T,T,E,E,x)}}else{const M=g.array;p=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const x=y+0,T=y+1,E=y+2;f.push(x,T,T,E,E,x)}}const m=new(Fp(f)?Hp:Gp)(f,1);m.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Py(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Ry(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dy(s,e){return s[0]-e[0]}function Iy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Oy(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let J=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",J)};var g=J;_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let R=0;v===!0&&(R=1),x===!0&&(R=2),T===!0&&(R=3);let H=u.attributes.position.count*R,k=1;H>e.maxTextureSize&&(k=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const O=new Float32Array(H*k*4*m),I=new Bp(O,H,k,m);I.type=ar,I.needsUpdate=!0;const G=R*4;for(let Y=0;Y<m;Y++){const q=E[Y],re=b[Y],P=S[Y],fe=H*k*4*Y;for(let W=0;W<q.count;W++){const ne=W*G;v===!0&&(o.fromBufferAttribute(q,W),O[fe+ne+0]=o.x,O[fe+ne+1]=o.y,O[fe+ne+2]=o.z,O[fe+ne+3]=0),x===!0&&(o.fromBufferAttribute(re,W),O[fe+ne+4]=o.x,O[fe+ne+5]=o.y,O[fe+ne+6]=o.z,O[fe+ne+7]=0),T===!0&&(o.fromBufferAttribute(P,W),O[fe+ne+8]=o.x,O[fe+ne+9]=o.y,O[fe+ne+10]=o.z,O[fe+ne+11]=P.itemSize===4?o.w:1)}}_={count:m,texture:I,size:new We(H,k)},r.set(u,_),u.addEventListener("dispose",J)}let M=0;for(let v=0;v<d.length;v++)M+=d[v];const y=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",d),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let x=0;x<p;x++)m[x]=[x,0];n[u.id]=m}for(let x=0;x<p;x++){const T=m[x];T[0]=x,T[1]=d[x]}m.sort(Iy);for(let x=0;x<8;x++)x<p&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Dy);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const T=a[x],E=T[0],b=T[1];E!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+x)!==_[E]&&u.setAttribute("morphTarget"+x,_[E]),M&&u.getAttribute("morphNormal"+x)!==M[E]&&u.setAttribute("morphNormal"+x,M[E]),i[x]=b,y+=b):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),M&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Ny(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Kp=new Yt,$p=new Bp,Zp=new M0,Jp=new qp,Uf=[],Bf=[],Vf=new Float32Array(16),Gf=new Float32Array(9),Hf=new Float32Array(4);function go(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Uf[i];if(r===void 0&&(r=new Float32Array(i),Uf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wl(s,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Fy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ky(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),Vt(t,e)}}function zy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),Vt(t,e)}}function Uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),Vt(t,e)}}function By(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,n))return;Hf.set(n),s.uniformMatrix2fv(this.addr,!1,Hf),Vt(t,n)}}function Vy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,n))return;Gf.set(n),s.uniformMatrix3fv(this.addr,!1,Gf),Vt(t,n)}}function Gy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,n))return;Vf.set(n),s.uniformMatrix4fv(this.addr,!1,Vf),Vt(t,n)}}function Hy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),Vt(t,e)}}function Xy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),Vt(t,e)}}function jy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),Vt(t,e)}}function qy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Yy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),Vt(t,e)}}function Ky(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),Vt(t,e)}}function $y(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),Vt(t,e)}}function Zy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Kp,i)}function Jy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zp,i)}function Qy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jp,i)}function eb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$p,i)}function tb(s){switch(s){case 5126:return Fy;case 35664:return ky;case 35665:return zy;case 35666:return Uy;case 35674:return By;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Hy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return jy;case 5125:return qy;case 36294:return Yy;case 36295:return Ky;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return eb}}function nb(s,e){s.uniform1fv(this.addr,e)}function ib(s,e){const t=go(e,this.size,2);s.uniform2fv(this.addr,t)}function rb(s,e){const t=go(e,this.size,3);s.uniform3fv(this.addr,t)}function sb(s,e){const t=go(e,this.size,4);s.uniform4fv(this.addr,t)}function ob(s,e){const t=go(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ab(s,e){const t=go(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function lb(s,e){const t=go(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function cb(s,e){s.uniform1iv(this.addr,e)}function ub(s,e){s.uniform2iv(this.addr,e)}function hb(s,e){s.uniform3iv(this.addr,e)}function fb(s,e){s.uniform4iv(this.addr,e)}function db(s,e){s.uniform1uiv(this.addr,e)}function pb(s,e){s.uniform2uiv(this.addr,e)}function mb(s,e){s.uniform3uiv(this.addr,e)}function gb(s,e){s.uniform4uiv(this.addr,e)}function _b(s,e,t){const n=this.cache,i=e.length,r=Wl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Kp,r[o])}function xb(s,e,t){const n=this.cache,i=e.length,r=Wl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zp,r[o])}function vb(s,e,t){const n=this.cache,i=e.length,r=Wl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jp,r[o])}function yb(s,e,t){const n=this.cache,i=e.length,r=Wl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$p,r[o])}function bb(s){switch(s){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return hb;case 35669:case 35673:return fb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return yb}}class Mb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tb(t.type)}}class wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=bb(t.type)}}class Sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Wf(s,e){s.seq.push(e),s.map[e.id]=e}function Tb(s,e,t){const n=s.name,i=n.length;for(Ic.lastIndex=0;;){const r=Ic.exec(n),o=Ic.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wf(t,c===void 0?new Mb(a,s,e):new wb(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Sb(a),Wf(t,h)),t=h}}}class pl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Tb(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Cb=0;function Eb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ab(s){switch(s){case ts:return["Linear","( value )"];case dt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function jf(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Eb(s.getShaderSource(e),o)}else return i}function Lb(s,e){const t=Ab(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Pb(s,e){let t;switch(e){case N_:t="Linear";break;case F_:t="Reinhard";break;case k_:t="OptimizedCineon";break;case z_:t="ACESFilmic";break;case U_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(No).join(`
`)}function Db(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ib(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function No(s){return s!==""}function qf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(s){return s.replace(Ob,Nb)}function Nb(s,e){const t=$e[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return hu(t)}const Fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(s){return s.replace(Fb,kb)}function kb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $f(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oo&&(e="SHADOWMAP_TYPE_VSM"),e}function Ub(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function Vb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lp:e="ENVMAP_BLENDING_MULTIPLY";break;case I_:e="ENVMAP_BLENDING_MIX";break;case O_:e="ENVMAP_BLENDING_ADD";break}return e}function Gb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hb(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zb(t),c=Ub(t),u=Bb(t),h=Vb(t),f=Gb(t),d=t.isWebGL2?"":Rb(t),g=Db(r),p=i.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(No).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(No).join(`
`),_.length>0&&(_+=`
`)):(m=[$f(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),_=[d,$f(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Hi?Pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.encodings_pars_fragment,Lb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),o=hu(o),o=qf(o,t),o=Yf(o,t),a=hu(a),a=qf(a,t),a=Yf(a,t),o=Kf(o),a=Kf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=M+m+o,v=M+_+a,x=Xf(i,35633,y),T=Xf(i,35632,v);if(i.attachShader(p,x),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(x).trim(),H=i.getShaderInfoLog(T).trim();let k=!0,O=!0;if(i.getProgramParameter(p,35714)===!1){k=!1;const I=jf(i,x,"vertex"),G=jf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+I+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||H==="")&&(O=!1);O&&(this.diagnostics={runnable:k,programLog:S,vertexShader:{log:R,prefix:m},fragmentShader:{log:H,prefix:_}})}i.deleteShader(x),i.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new pl(i,p)),E};let b;return this.getAttributes=function(){return b===void 0&&(b=Ib(i,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=T,this}let Wb=0;class Xb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jb(e),t.set(e,n)),n}}class jb{constructor(e){this.id=Wb++,this.code=e,this.usedTimes=0}}function qb(s,e,t,n,i,r,o){const a=new Vp,l=new Xb,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,S,R,H,k){const O=H.fog,I=k.geometry,G=b.isMeshStandardMaterial?H.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),Y=J&&J.mapping===Vl?J.image.height:null,q=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const re=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,P=re!==void 0?re.length:0;let fe=0;I.morphAttributes.position!==void 0&&(fe=1),I.morphAttributes.normal!==void 0&&(fe=2),I.morphAttributes.color!==void 0&&(fe=3);let W,ne,le,ue;if(q){const ke=gi[q];W=ke.vertexShader,ne=ke.fragmentShader}else W=b.vertexShader,ne=b.fragmentShader,l.update(b),le=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);const X=s.getRenderTarget(),Ae=b.alphaTest>0,Me=b.clearcoat>0,be=b.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:b.type,vertexShader:W,fragmentShader:ne,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?s.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:ts,map:!!b.map,matcap:!!b.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Y,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===s0,tangentSpaceNormalMap:b.normalMapType===Op,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===dt,clearcoat:Me,clearcoatMap:Me&&!!b.clearcoatMap,clearcoatRoughnessMap:Me&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Me&&!!b.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!b.iridescenceMap,iridescenceThicknessMap:be&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Gs,alphaMap:!!b.alphaMap,alphaTest:Ae,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!I.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!O,useFog:b.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:b.toneMapped?s.toneMapping:Hi,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bi,flipSided:b.side===Vn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(_(S,b),M(S,b),S.push(s.outputEncoding)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputEncoding),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.combine),b.push(S.vertexUvs),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.physicallyCorrectLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),b.push(a.mask)}function y(b){const S=g[b.type];let R;if(S){const H=gi[S];R=Xp.clone(H.uniforms)}else R=b.uniforms;return R}function v(b,S){let R;for(let H=0,k=c.length;H<k;H++){const O=c[H];if(O.cacheKey===S){R=O,++R.usedTimes;break}}return R===void 0&&(R=new Hb(s,S,b,r),c.push(R)),R}function x(b){if(--b.usedTimes===0){const S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function T(b){l.remove(b)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:x,releaseShaderCache:T,programs:c,dispose:E}}function Yb(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Kb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,p,m){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},s[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function a(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Kb),n.length>1&&n.sort(f||Zf),i.length>1&&i.sort(f||Zf)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function $b(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Jf,s.set(n,[o])):i>=r.length?(o=new Jf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Zb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new $};break;case"SpotLight":t={position:new F,direction:new F,color:new $,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $,groundColor:new $};break;case"RectAreaLight":t={color:new $,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function Jb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Qb=0;function eM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tM(s,e){const t=new Zb,n=Jb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,o=new st,a=new st;function l(u,h){let f=0,d=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,m=0,_=0,M=0,y=0,v=0,x=0,T=0,E=0,b=0;u.sort(eM);const S=h!==!0?Math.PI:1;for(let H=0,k=u.length;H<k;H++){const O=u[H],I=O.color,G=O.intensity,J=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=I.r*G*S,d+=I.g*G*S,g+=I.b*G*S;else if(O.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(O.sh.coefficients[q],G);else if(O.isDirectionalLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const re=O.shadow,P=n.get(O);P.shadowBias=re.bias,P.shadowNormalBias=re.normalBias,P.shadowRadius=re.radius,P.shadowMapSize=re.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=O.shadow.matrix,v++}i.directional[p]=q,p++}else if(O.isSpotLight){const q=t.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(I).multiplyScalar(G*S),q.distance=J,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,i.spot[_]=q;const re=O.shadow;if(O.map&&(i.spotLightMap[E]=O.map,E++,re.updateMatrices(O),O.castShadow&&b++),i.spotLightMatrix[_]=re.matrix,O.castShadow){const P=n.get(O);P.shadowBias=re.bias,P.shadowNormalBias=re.normalBias,P.shadowRadius=re.radius,P.shadowMapSize=re.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=Y,T++}_++}else if(O.isRectAreaLight){const q=t.get(O);q.color.copy(I).multiplyScalar(G),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),i.rectArea[M]=q,M++}else if(O.isPointLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*S),q.distance=O.distance,q.decay=O.decay,O.castShadow){const re=O.shadow,P=n.get(O);P.shadowBias=re.bias,P.shadowNormalBias=re.normalBias,P.shadowRadius=re.radius,P.shadowMapSize=re.mapSize,P.shadowCameraNear=re.camera.near,P.shadowCameraFar=re.camera.far,i.pointShadow[m]=P,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=O.shadow.matrix,x++}i.point[m]=q,m++}else if(O.isHemisphereLight){const q=t.get(O);q.skyColor.copy(O.color).multiplyScalar(G*S),q.groundColor.copy(O.groundColor).multiplyScalar(G*S),i.hemi[y]=q,y++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==M||R.hemiLength!==y||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==T||R.numSpotMaps!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=T+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=M,R.hemiLength=y,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=T,R.numSpotMaps=E,i.version=Qb++)}function c(u,h){let f=0,d=0,g=0,p=0,m=0;const _=h.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const v=u[M];if(v.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),f++}else if(v.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Qf(s,e){const t=new tM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function nM(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Qf(s,e),t.set(r,[l])):o>=a.length?(l=new Qf(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class iM extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rM extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aM(s,e,t){let n=new Ku;const i=new We,r=new We,o=new yt,a=new iM({depthPacking:r0}),l=new rM,c={},u=t.maxTextureSize,h={[Xi]:Vn,[Vn]:Xi,[Bi]:Bi},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:sM,fragmentShader:oM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ri;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Sn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tp,this.render=function(v,x,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const E=s.getRenderTarget(),b=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),R=s.state;R.setBlending(pr),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let H=0,k=v.length;H<k;H++){const O=v[H],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const G=I.getFrameExtents();if(i.multiply(G),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/G.x),i.x=r.x*G.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/G.y),i.y=r.y*G.y,I.mapSize.y=r.y)),I.map===null){const Y=this.type!==Oo?{minFilter:Ot,magFilter:Ot}:{};I.map=new xr(i.x,i.y,Y),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const J=I.getViewportCount();for(let Y=0;Y<J;Y++){const q=I.getViewport(Y);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),R.viewport(o),I.updateMatrices(O,Y),n=I.getFrustum(),y(x,T,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Oo&&_(I,T),I.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(E,b,S)};function _(v,x){const T=e.update(p);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new xr(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(x,null,T,f,p,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(x,null,T,d,p,null)}function M(v,x,T,E,b,S){let R=null;const H=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(H!==void 0)R=H;else if(R=T.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const k=R.uuid,O=x.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let G=I[O];G===void 0&&(G=R.clone(),I[O]=G),R=G}return R.visible=x.visible,R.wireframe=x.wireframe,S===Oo?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:h[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=E,R.farDistance=b),R}function y(v,x,T,E,b){if(v.visible===!1)return;if(v.layers.test(x.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&b===Oo)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const H=e.update(v),k=v.material;if(Array.isArray(k)){const O=H.groups;for(let I=0,G=O.length;I<G;I++){const J=O[I],Y=k[J.materialIndex];if(Y&&Y.visible){const q=M(v,Y,E,T.near,T.far,b);s.renderBufferDirect(T,null,H,q,v,J)}}}else if(k.visible){const O=M(v,k,E,T.near,T.far,b);s.renderBufferDirect(T,null,H,O,v,null)}}const R=v.children;for(let H=0,k=R.length;H<k;H++)y(R[H],x,T,E,b)}}function lM(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const Q=new yt;let oe=null;const he=new yt(0,0,0,0);return{setMask:function(me){oe!==me&&!D&&(s.colorMask(me,me,me,me),oe=me)},setLocked:function(me){D=me},setClear:function(me,Xe,ut,it,Ft){Ft===!0&&(me*=it,Xe*=it,ut*=it),Q.set(me,Xe,ut,it),he.equals(Q)===!1&&(s.clearColor(me,Xe,ut,it),he.copy(Q))},reset:function(){D=!1,oe=null,he.set(-1,0,0,0)}}}function r(){let D=!1,Q=null,oe=null,he=null;return{setTest:function(me){me?Ae(2929):Me(2929)},setMask:function(me){Q!==me&&!D&&(s.depthMask(me),Q=me)},setFunc:function(me){if(oe!==me){switch(me){case C_:s.depthFunc(512);break;case E_:s.depthFunc(519);break;case A_:s.depthFunc(513);break;case iu:s.depthFunc(515);break;case L_:s.depthFunc(514);break;case P_:s.depthFunc(518);break;case R_:s.depthFunc(516);break;case D_:s.depthFunc(517);break;default:s.depthFunc(515)}oe=me}},setLocked:function(me){D=me},setClear:function(me){he!==me&&(s.clearDepth(me),he=me)},reset:function(){D=!1,Q=null,oe=null,he=null}}}function o(){let D=!1,Q=null,oe=null,he=null,me=null,Xe=null,ut=null,it=null,Ft=null;return{setTest:function(Ce){D||(Ce?Ae(2960):Me(2960))},setMask:function(Ce){Q!==Ce&&!D&&(s.stencilMask(Ce),Q=Ce)},setFunc:function(Ce,Pe,je){(oe!==Ce||he!==Pe||me!==je)&&(s.stencilFunc(Ce,Pe,je),oe=Ce,he=Pe,me=je)},setOp:function(Ce,Pe,je){(Xe!==Ce||ut!==Pe||it!==je)&&(s.stencilOp(Ce,Pe,je),Xe=Ce,ut=Pe,it=je)},setLocked:function(Ce){D=Ce},setClear:function(Ce){Ft!==Ce&&(s.clearStencil(Ce),Ft=Ce)},reset:function(){D=!1,Q=null,oe=null,he=null,me=null,Xe=null,ut=null,it=null,Ft=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,_=!1,M=null,y=null,v=null,x=null,T=null,E=null,b=null,S=!1,R=null,H=null,k=null,O=null,I=null;const G=s.getParameter(35661);let J=!1,Y=0;const q=s.getParameter(7938);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=Y>=2);let re=null,P={};const fe=s.getParameter(3088),W=s.getParameter(2978),ne=new yt().fromArray(fe),le=new yt().fromArray(W);function ue(D,Q,oe){const he=new Uint8Array(4),me=s.createTexture();s.bindTexture(D,me),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let Xe=0;Xe<oe;Xe++)s.texImage2D(Q+Xe,0,6408,1,1,0,6408,5121,he);return me}const X={};X[3553]=ue(3553,3553,1),X[34067]=ue(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(iu),ot(!1),j(Vh),Ae(2884),qe(pr);function Ae(D){f[D]!==!0&&(s.enable(D),f[D]=!0)}function Me(D){f[D]!==!1&&(s.disable(D),f[D]=!1)}function be(D,Q){return d[D]!==Q?(s.bindFramebuffer(D,Q),d[D]=Q,n&&(D===36009&&(d[36160]=Q),D===36160&&(d[36009]=Q)),!0):!1}function ge(D,Q){let oe=p,he=!1;if(D)if(oe=g.get(Q),oe===void 0&&(oe=[],g.set(Q,oe)),D.isWebGLMultipleRenderTargets){const me=D.texture;if(oe.length!==me.length||oe[0]!==36064){for(let Xe=0,ut=me.length;Xe<ut;Xe++)oe[Xe]=36064+Xe;oe.length=me.length,he=!0}}else oe[0]!==36064&&(oe[0]=36064,he=!0);else oe[0]!==1029&&(oe[0]=1029,he=!0);he&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function ke(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const De={[Is]:32774,[m_]:32778,[g_]:32779};if(n)De[Xh]=32775,De[jh]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(De[Xh]=D.MIN_EXT,De[jh]=D.MAX_EXT)}const pe={[__]:0,[x_]:1,[v_]:768,[Ep]:770,[T_]:776,[w_]:774,[b_]:772,[y_]:769,[Ap]:771,[S_]:775,[M_]:773};function qe(D,Q,oe,he,me,Xe,ut,it){if(D===pr){_===!0&&(Me(3042),_=!1);return}if(_===!1&&(Ae(3042),_=!0),D!==p_){if(D!==M||it!==S){if((y!==Is||T!==Is)&&(s.blendEquation(32774),y=Is,T=Is),it)switch(D){case Gs:s.blendFuncSeparate(1,771,1,771);break;case Gh:s.blendFunc(1,1);break;case Hh:s.blendFuncSeparate(0,769,0,1);break;case Wh:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gs:s.blendFuncSeparate(770,771,1,771);break;case Gh:s.blendFunc(770,1);break;case Hh:s.blendFuncSeparate(0,769,0,1);break;case Wh:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,x=null,E=null,b=null,M=D,S=it}return}me=me||Q,Xe=Xe||oe,ut=ut||he,(Q!==y||me!==T)&&(s.blendEquationSeparate(De[Q],De[me]),y=Q,T=me),(oe!==v||he!==x||Xe!==E||ut!==b)&&(s.blendFuncSeparate(pe[oe],pe[he],pe[Xe],pe[ut]),v=oe,x=he,E=Xe,b=ut),M=D,S=!1}function lt(D,Q){D.side===Bi?Me(2884):Ae(2884);let oe=D.side===Vn;Q&&(oe=!oe),ot(oe),D.blending===Gs&&D.transparent===!1?qe(pr):qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const he=D.stencilWrite;c.setTest(he),he&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ae(32926):Me(32926)}function ot(D){R!==D&&(D?s.frontFace(2304):s.frontFace(2305),R=D)}function j(D){D!==f_?(Ae(2884),D!==H&&(D===Vh?s.cullFace(1029):D===d_?s.cullFace(1028):s.cullFace(1032))):Me(2884),H=D}function Je(D){D!==k&&(J&&s.lineWidth(D),k=D)}function ie(D,Q,oe){D?(Ae(32823),(O!==Q||I!==oe)&&(s.polygonOffset(Q,oe),O=Q,I=oe)):Me(32823)}function B(D){D?Ae(3089):Me(3089)}function ae(D){D===void 0&&(D=33984+G-1),re!==D&&(s.activeTexture(D),re=D)}function C(D,Q,oe){oe===void 0&&(re===null?oe=33984+G-1:oe=re);let he=P[oe];he===void 0&&(he={type:void 0,texture:void 0},P[oe]=he),(he.type!==D||he.texture!==Q)&&(re!==oe&&(s.activeTexture(oe),re=oe),s.bindTexture(D,Q||X[D]),he.type=D,he.texture=Q)}function w(){const D=P[re];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function N(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){ne.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function Te(D){le.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),le.copy(D))}function Be(D,Q){let oe=h.get(Q);oe===void 0&&(oe=new WeakMap,h.set(Q,oe));let he=oe.get(D);he===void 0&&(he=s.getUniformBlockIndex(Q,D.name),oe.set(D,he))}function ze(D,Q){const he=h.get(Q).get(D);u.get(Q)!==he&&(s.uniformBlockBinding(Q,he,D.__bindingPointIndex),u.set(Q,he))}function Ke(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},re=null,P={},d={},g=new WeakMap,p=[],m=null,_=!1,M=null,y=null,v=null,x=null,T=null,E=null,b=null,S=!1,R=null,H=null,k=null,O=null,I=null,ne.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ae,disable:Me,bindFramebuffer:be,drawBuffers:ge,useProgram:ke,setBlending:qe,setMaterial:lt,setFlipSided:ot,setCullFace:j,setLineWidth:Je,setPolygonOffset:ie,setScissorTest:B,activeTexture:ae,bindTexture:C,unbindTexture:w,compressedTexImage2D:V,compressedTexImage3D:te,texImage2D:ee,texImage3D:_e,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:N,texStorage3D:de,texSubImage2D:ce,texSubImage3D:se,compressedTexSubImage2D:we,compressedTexSubImage3D:L,scissor:Se,viewport:Te,reset:Ke}}function cM(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,w){return _?new OffscreenCanvas(C,w):ca("canvas")}function y(C,w,V,te){let ce=1;if((C.width>te||C.height>te)&&(ce=te/Math.max(C.width,C.height)),ce<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=w?Cl:Math.floor,we=se(ce*C.width),L=se(ce*C.height);p===void 0&&(p=M(we,L));const N=V?M(we,L):p;return N.width=we,N.height=L,N.getContext("2d").drawImage(C,0,0,we,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+we+"x"+L+")."),N}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return uu(C.width)&&uu(C.height)}function x(C){return a?!1:C.wrapS!==Jn||C.wrapT!==Jn||C.minFilter!==Ot&&C.minFilter!==wn}function T(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ot&&C.minFilter!==wn}function E(C){s.generateMipmap(C)}function b(C,w,V,te,ce=!1){if(a===!1)return w;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=w;return w===6403&&(V===5126&&(se=33326),V===5131&&(se=33325),V===5121&&(se=33321)),w===33319&&(V===5126&&(se=33328),V===5131&&(se=33327),V===5121&&(se=33323)),w===6408&&(V===5126&&(se=34836),V===5131&&(se=34842),V===5121&&(se=te===dt&&ce===!1?35907:32856),V===32819&&(se=32854),V===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function S(C,w,V){return T(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Ot&&C.minFilter!==wn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){return C===Ot||C===ou||C===fl?9728:9729}function H(C){const w=C.target;w.removeEventListener("dispose",H),O(w),w.isVideoTexture&&g.delete(w)}function k(C){const w=C.target;w.removeEventListener("dispose",k),G(w)}function O(C){const w=n.get(C);if(w.__webglInit===void 0)return;const V=C.source,te=m.get(V);if(te){const ce=te[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&I(C),Object.keys(te).length===0&&m.delete(V)}n.remove(C)}function I(C){const w=n.get(C);s.deleteTexture(w.__webglTexture);const V=C.source,te=m.get(V);delete te[w.__cacheKey],o.memory.textures--}function G(C){const w=C.texture,V=n.get(C),te=n.get(w);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)s.deleteFramebuffer(V.__webglFramebuffer[ce]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[ce]);else{if(s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ce=0;ce<V.__webglColorRenderbuffer.length;ce++)V.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[ce]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ce=0,se=w.length;ce<se;ce++){const we=n.get(w[ce]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(w[ce])}n.remove(w),n.remove(C)}let J=0;function Y(){J=0}function q(){const C=J;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),J+=1,C}function re(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function P(C,w){const V=n.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(V,C,w);return}}t.bindTexture(3553,V.__webglTexture,33984+w)}function fe(C,w){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Me(V,C,w);return}t.bindTexture(35866,V.__webglTexture,33984+w)}function W(C,w){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Me(V,C,w);return}t.bindTexture(32879,V.__webglTexture,33984+w)}function ne(C,w){const V=n.get(C);if(C.version>0&&V.__version!==C.version){be(V,C,w);return}t.bindTexture(34067,V.__webglTexture,33984+w)}const le={[eo]:10497,[Jn]:33071,[Tl]:33648},ue={[Ot]:9728,[ou]:9984,[fl]:9986,[wn]:9729,[Rp]:9985,[Qr]:9987};function X(C,w,V){if(V?(s.texParameteri(C,10242,le[w.wrapS]),s.texParameteri(C,10243,le[w.wrapT]),(C===32879||C===35866)&&s.texParameteri(C,32882,le[w.wrapR]),s.texParameteri(C,10240,ue[w.magFilter]),s.texParameteri(C,10241,ue[w.minFilter])):(s.texParameteri(C,10242,33071),s.texParameteri(C,10243,33071),(C===32879||C===35866)&&s.texParameteri(C,32882,33071),(w.wrapS!==Jn||w.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,10240,R(w.magFilter)),s.texParameteri(C,10241,R(w.minFilter)),w.minFilter!==Ot&&w.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ot||w.minFilter!==fl&&w.minFilter!==Qr||w.type===ar&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===sa&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ae(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",H));const te=w.source;let ce=m.get(te);ce===void 0&&(ce={},m.set(te,ce));const se=re(w);if(se!==C.__cacheKey){ce[se]===void 0&&(ce[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ce[se].usedTimes++;const we=ce[C.__cacheKey];we!==void 0&&(ce[C.__cacheKey].usedTimes--,we.usedTimes===0&&I(w)),C.__cacheKey=se,C.__webglTexture=ce[se].texture}return V}function Me(C,w,V){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const ce=Ae(C,w),se=w.source;t.bindTexture(te,C.__webglTexture,33984+V);const we=n.get(se);if(se.version!==we.__version||ce===!0){t.activeTexture(33984+V),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const L=x(w)&&v(w.image)===!1;let N=y(w.image,L,!1,u);N=ae(w,N);const de=v(N)||a,ee=r.convert(w.format,w.encoding);let _e=r.convert(w.type),Se=b(w.internalFormat,ee,_e,w.encoding,w.isVideoTexture);X(te,w,de);let Te;const Be=w.mipmaps,ze=a&&w.isVideoTexture!==!0,Ke=we.__version===void 0||ce===!0,D=S(w,N,de);if(w.isDepthTexture)Se=6402,a?w.type===ar?Se=36012:w.type===zr?Se=33190:w.type===Hs?Se=35056:Se=33189:w.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Wr&&Se===6402&&w.type!==Dp&&w.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=zr,_e=r.convert(w.type)),w.format===to&&Se===6402&&(Se=34041,w.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Hs,_e=r.convert(w.type))),Ke&&(ze?t.texStorage2D(3553,1,Se,N.width,N.height):t.texImage2D(3553,0,Se,N.width,N.height,0,ee,_e,null));else if(w.isDataTexture)if(Be.length>0&&de){ze&&Ke&&t.texStorage2D(3553,D,Se,Be[0].width,Be[0].height);for(let Q=0,oe=Be.length;Q<oe;Q++)Te=Be[Q],ze?t.texSubImage2D(3553,Q,0,0,Te.width,Te.height,ee,_e,Te.data):t.texImage2D(3553,Q,Se,Te.width,Te.height,0,ee,_e,Te.data);w.generateMipmaps=!1}else ze?(Ke&&t.texStorage2D(3553,D,Se,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,ee,_e,N.data)):t.texImage2D(3553,0,Se,N.width,N.height,0,ee,_e,N.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&Ke&&t.texStorage3D(35866,D,Se,Be[0].width,Be[0].height,N.depth);for(let Q=0,oe=Be.length;Q<oe;Q++)Te=Be[Q],w.format!==Qn?ee!==null?ze?t.compressedTexSubImage3D(35866,Q,0,0,0,Te.width,Te.height,N.depth,ee,Te.data,0,0):t.compressedTexImage3D(35866,Q,Se,Te.width,Te.height,N.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,Q,0,0,0,Te.width,Te.height,N.depth,ee,_e,Te.data):t.texImage3D(35866,Q,Se,Te.width,Te.height,N.depth,0,ee,_e,Te.data)}else{ze&&Ke&&t.texStorage2D(3553,D,Se,Be[0].width,Be[0].height);for(let Q=0,oe=Be.length;Q<oe;Q++)Te=Be[Q],w.format!==Qn?ee!==null?ze?t.compressedTexSubImage2D(3553,Q,0,0,Te.width,Te.height,ee,Te.data):t.compressedTexImage2D(3553,Q,Se,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,Q,0,0,Te.width,Te.height,ee,_e,Te.data):t.texImage2D(3553,Q,Se,Te.width,Te.height,0,ee,_e,Te.data)}else if(w.isDataArrayTexture)ze?(Ke&&t.texStorage3D(35866,D,Se,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,ee,_e,N.data)):t.texImage3D(35866,0,Se,N.width,N.height,N.depth,0,ee,_e,N.data);else if(w.isData3DTexture)ze?(Ke&&t.texStorage3D(32879,D,Se,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,ee,_e,N.data)):t.texImage3D(32879,0,Se,N.width,N.height,N.depth,0,ee,_e,N.data);else if(w.isFramebufferTexture){if(Ke)if(ze)t.texStorage2D(3553,D,Se,N.width,N.height);else{let Q=N.width,oe=N.height;for(let he=0;he<D;he++)t.texImage2D(3553,he,Se,Q,oe,0,ee,_e,null),Q>>=1,oe>>=1}}else if(Be.length>0&&de){ze&&Ke&&t.texStorage2D(3553,D,Se,Be[0].width,Be[0].height);for(let Q=0,oe=Be.length;Q<oe;Q++)Te=Be[Q],ze?t.texSubImage2D(3553,Q,0,0,ee,_e,Te):t.texImage2D(3553,Q,Se,ee,_e,Te);w.generateMipmaps=!1}else ze?(Ke&&t.texStorage2D(3553,D,Se,N.width,N.height),t.texSubImage2D(3553,0,0,0,ee,_e,N)):t.texImage2D(3553,0,Se,ee,_e,N);T(w,de)&&E(te),we.__version=se.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function be(C,w,V){if(w.image.length!==6)return;const te=Ae(C,w),ce=w.source;t.bindTexture(34067,C.__webglTexture,33984+V);const se=n.get(ce);if(ce.version!==se.__version||te===!0){t.activeTexture(33984+V),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,N=[];for(let Q=0;Q<6;Q++)!we&&!L?N[Q]=y(w.image[Q],!1,!0,c):N[Q]=L?w.image[Q].image:w.image[Q],N[Q]=ae(w,N[Q]);const de=N[0],ee=v(de)||a,_e=r.convert(w.format,w.encoding),Se=r.convert(w.type),Te=b(w.internalFormat,_e,Se,w.encoding),Be=a&&w.isVideoTexture!==!0,ze=se.__version===void 0||te===!0;let Ke=S(w,de,ee);X(34067,w,ee);let D;if(we){Be&&ze&&t.texStorage2D(34067,Ke,Te,de.width,de.height);for(let Q=0;Q<6;Q++){D=N[Q].mipmaps;for(let oe=0;oe<D.length;oe++){const he=D[oe];w.format!==Qn?_e!==null?Be?t.compressedTexSubImage2D(34069+Q,oe,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(34069+Q,oe,Te,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+Q,oe,0,0,he.width,he.height,_e,Se,he.data):t.texImage2D(34069+Q,oe,Te,he.width,he.height,0,_e,Se,he.data)}}}else{D=w.mipmaps,Be&&ze&&(D.length>0&&Ke++,t.texStorage2D(34067,Ke,Te,N[0].width,N[0].height));for(let Q=0;Q<6;Q++)if(L){Be?t.texSubImage2D(34069+Q,0,0,0,N[Q].width,N[Q].height,_e,Se,N[Q].data):t.texImage2D(34069+Q,0,Te,N[Q].width,N[Q].height,0,_e,Se,N[Q].data);for(let oe=0;oe<D.length;oe++){const me=D[oe].image[Q].image;Be?t.texSubImage2D(34069+Q,oe+1,0,0,me.width,me.height,_e,Se,me.data):t.texImage2D(34069+Q,oe+1,Te,me.width,me.height,0,_e,Se,me.data)}}else{Be?t.texSubImage2D(34069+Q,0,0,0,_e,Se,N[Q]):t.texImage2D(34069+Q,0,Te,_e,Se,N[Q]);for(let oe=0;oe<D.length;oe++){const he=D[oe];Be?t.texSubImage2D(34069+Q,oe+1,0,0,_e,Se,he.image[Q]):t.texImage2D(34069+Q,oe+1,Te,_e,Se,he.image[Q])}}}T(w,ee)&&E(34067),se.__version=ce.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ge(C,w,V,te,ce){const se=r.convert(V.format,V.encoding),we=r.convert(V.type),L=b(V.internalFormat,se,we,V.encoding);n.get(w).__hasExternalTextures||(ce===32879||ce===35866?t.texImage3D(ce,0,L,w.width,w.height,w.depth,0,se,we,null):t.texImage2D(ce,0,L,w.width,w.height,0,se,we,null)),t.bindFramebuffer(36160,C),ie(w)?f.framebufferTexture2DMultisampleEXT(36160,te,ce,n.get(V).__webglTexture,0,Je(w)):(ce===3553||ce>=34069&&ce<=34074)&&s.framebufferTexture2D(36160,te,ce,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(C,w,V){if(s.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(V||ie(w)){const ce=w.depthTexture;ce&&ce.isDepthTexture&&(ce.type===ar?te=36012:ce.type===zr&&(te=33190));const se=Je(w);ie(w)?f.renderbufferStorageMultisampleEXT(36161,se,te,w.width,w.height):s.renderbufferStorageMultisample(36161,se,te,w.width,w.height)}else s.renderbufferStorage(36161,te,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const te=Je(w);V&&ie(w)===!1?s.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):ie(w)?f.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,C)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ce=0;ce<te.length;ce++){const se=te[ce],we=r.convert(se.format,se.encoding),L=r.convert(se.type),N=b(se.internalFormat,we,L,se.encoding),de=Je(w);V&&ie(w)===!1?s.renderbufferStorageMultisample(36161,de,N,w.width,w.height):ie(w)?f.renderbufferStorageMultisampleEXT(36161,de,N,w.width,w.height):s.renderbufferStorage(36161,N,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function De(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),P(w.depthTexture,0);const te=n.get(w.depthTexture).__webglTexture,ce=Je(w);if(w.depthTexture.format===Wr)ie(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ce):s.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===to)ie(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ce):s.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function pe(C){const w=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");De(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=s.createRenderbuffer(),ke(w.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),ke(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function qe(C,w,V){const te=n.get(C);w!==void 0&&ge(te.__webglFramebuffer,C,C.texture,36064,3553),V!==void 0&&pe(C)}function lt(C){const w=C.texture,V=n.get(C),te=n.get(w);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=w.version,o.memory.textures++);const ce=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,we=v(C)||a;if(ce){V.__webglFramebuffer=[];for(let L=0;L<6;L++)V.__webglFramebuffer[L]=s.createFramebuffer()}else{if(V.__webglFramebuffer=s.createFramebuffer(),se)if(i.drawBuffers){const L=C.texture;for(let N=0,de=L.length;N<de;N++){const ee=n.get(L[N]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ie(C)===!1){const L=se?w:[w];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let N=0;N<L.length;N++){const de=L[N];V.__webglColorRenderbuffer[N]=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer[N]);const ee=r.convert(de.format,de.encoding),_e=r.convert(de.type),Se=b(de.internalFormat,ee,_e,de.encoding,C.isXRRenderTarget===!0),Te=Je(C);s.renderbufferStorageMultisample(36161,Te,Se,C.width,C.height),s.framebufferRenderbuffer(36160,36064+N,36161,V.__webglColorRenderbuffer[N])}s.bindRenderbuffer(36161,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ce){t.bindTexture(34067,te.__webglTexture),X(34067,w,we);for(let L=0;L<6;L++)ge(V.__webglFramebuffer[L],C,w,36064,34069+L);T(w,we)&&E(34067),t.unbindTexture()}else if(se){const L=C.texture;for(let N=0,de=L.length;N<de;N++){const ee=L[N],_e=n.get(ee);t.bindTexture(3553,_e.__webglTexture),X(3553,ee,we),ge(V.__webglFramebuffer,C,ee,36064+N,3553),T(ee,we)&&E(3553)}t.unbindTexture()}else{let L=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?L=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,te.__webglTexture),X(L,w,we),ge(V.__webglFramebuffer,C,w,36064,L),T(w,we)&&E(L),t.unbindTexture()}C.depthBuffer&&pe(C)}function ot(C){const w=v(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ce=V.length;te<ce;te++){const se=V[te];if(T(se,w)){const we=C.isWebGLCubeRenderTarget?34067:3553,L=n.get(se).__webglTexture;t.bindTexture(we,L),E(we),t.unbindTexture()}}}function j(C){if(a&&C.samples>0&&ie(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,te=C.height;let ce=16384;const se=[],we=C.stencilBuffer?33306:36096,L=n.get(C),N=C.isWebGLMultipleRenderTargets===!0;if(N)for(let de=0;de<w.length;de++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let de=0;de<w.length;de++){se.push(36064+de),C.depthBuffer&&se.push(we);const ee=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ee===!1&&(C.depthBuffer&&(ce|=256),C.stencilBuffer&&(ce|=1024)),N&&s.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[de]),ee===!0&&(s.invalidateFramebuffer(36008,[we]),s.invalidateFramebuffer(36009,[we])),N){const _e=n.get(w[de]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,_e,0)}s.blitFramebuffer(0,0,V,te,0,0,V,te,ce,9728),d&&s.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),N)for(let de=0;de<w.length;de++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,L.__webglColorRenderbuffer[de]);const ee=n.get(w[de]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,ee,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Je(C){return Math.min(h,C.samples)}function ie(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function B(C){const w=o.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function ae(C,w){const V=C.encoding,te=C.format,ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===cu||V!==ts&&(V===dt?a===!1?e.has("EXT_sRGB")===!0&&te===Qn?(C.format=cu,C.minFilter=wn,C.generateMipmaps=!1):w=zp.sRGBToLinear(w):(te!==Qn||ce!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),w}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=P,this.setTexture2DArray=fe,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=qe,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ie}function uM(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===es)return 5121;if(r===H_)return 32819;if(r===W_)return 32820;if(r===B_)return 5120;if(r===V_)return 5122;if(r===Dp)return 5123;if(r===G_)return 5124;if(r===zr)return 5125;if(r===ar)return 5126;if(r===sa)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===X_)return 6406;if(r===Qn)return 6408;if(r===j_)return 6409;if(r===q_)return 6410;if(r===Wr)return 6402;if(r===to)return 34041;if(r===cu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Y_)return 6403;if(r===K_)return 36244;if(r===$_)return 33319;if(r===Z_)return 33320;if(r===J_)return 36249;if(r===rc||r===sc||r===oc||r===ac)if(o===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qh||r===Yh||r===Kh||r===$h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===qh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Q_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zh||r===Jh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zh)return o===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Jh)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qh||r===ef||r===tf||r===nf||r===rf||r===sf||r===of||r===af||r===lf||r===cf||r===uf||r===hf||r===ff||r===df)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Qh)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ef)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tf)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nf)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rf)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sf)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===of)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===af)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lf)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cf)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uf)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hf)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ff)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===df)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===lc)return o===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===e0||r===pf||r===mf||r===gf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hs?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class hM extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ur extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dM extends Yt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Wr,u!==Wr&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wr&&(n=zr),n===void 0&&u===to&&(n=Hs),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1}}class pM extends cs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const p=t.getContextAttributes();let m=null,_=null;const M=[],y=[],v=new Set,x=new Map,T=new _n;T.layers.enable(1),T.viewport=new yt;const E=new _n;E.layers.enable(2),E.viewport=new yt;const b=[T,E],S=new hM;S.layers.enable(1),S.layers.enable(2);let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=M[W];return ne===void 0&&(ne=new Oc,M[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=M[W];return ne===void 0&&(ne=new Oc,M[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=M[W];return ne===void 0&&(ne=new Oc,M[W]=ne),ne.getHandSpace()};function k(W){const ne=y.indexOf(W.inputSource);if(ne===-1)return;const le=M[ne];le!==void 0&&le.dispatchEvent({type:W.type,data:W.inputSource})}function O(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",I);for(let W=0;W<M.length;W++){const ne=y[W];ne!==null&&(y[W]=null,M[W].disconnect(ne))}R=null,H=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,_=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",O),i.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),_=new xr(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:es,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ne=null,le=null,ue=null;p.depth&&(ue=p.stencil?35056:33190,ne=p.stencil?to:Wr,le=p.stencil?Hs:zr);const X={colorFormat:32856,depthFormat:ue,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(X),i.updateRenderState({layers:[f]}),_=new xr(f.textureWidth,f.textureHeight,{format:Qn,type:es,depthTexture:new dM(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Ae=e.properties.get(_);Ae.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(W){for(let ne=0;ne<W.removed.length;ne++){const le=W.removed[ne],ue=y.indexOf(le);ue>=0&&(y[ue]=null,M[ue].disconnect(le))}for(let ne=0;ne<W.added.length;ne++){const le=W.added[ne];let ue=y.indexOf(le);if(ue===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=y.length){y.push(le),ue=Ae;break}else if(y[Ae]===null){y[Ae]=le,ue=Ae;break}if(ue===-1)break}const X=M[ue];X&&X.connect(le)}}const G=new F,J=new F;function Y(W,ne,le){G.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(le.matrixWorld);const ue=G.distanceTo(J),X=ne.projectionMatrix.elements,Ae=le.projectionMatrix.elements,Me=X[14]/(X[10]-1),be=X[14]/(X[10]+1),ge=(X[9]+1)/X[5],ke=(X[9]-1)/X[5],De=(X[8]-1)/X[0],pe=(Ae[8]+1)/Ae[0],qe=Me*De,lt=Me*pe,ot=ue/(-De+pe),j=ot*-De;ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(j),W.translateZ(ot),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Je=Me+ot,ie=be+ot,B=qe-j,ae=lt+(ue-j),C=ge*be/ie*Je,w=ke*be/ie*Je;W.projectionMatrix.makePerspective(B,ae,C,w,Je,ie)}function q(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;S.near=E.near=T.near=W.near,S.far=E.far=T.far=W.far,(R!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,H=S.far);const ne=W.parent,le=S.cameras;q(S,ne);for(let X=0;X<le.length;X++)q(le[X],ne);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),W.matrix.copy(S.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const ue=W.children;for(let X=0,Ae=ue.length;X<Ae;X++)ue[X].updateMatrixWorld(!0);le.length===2?Y(S,T,E):S.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.getPlanes=function(){return v};let re=null;function P(W,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ue=!1;le.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let X=0;X<le.length;X++){const Ae=le[X];let Me=null;if(d!==null)Me=d.getViewport(Ae);else{const ge=h.getViewSubImage(f,Ae);Me=ge.viewport,X===0&&(e.setRenderTargetTextures(_,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(_))}let be=b[X];be===void 0&&(be=new _n,be.layers.enable(X),be.viewport=new yt,b[X]=be),be.matrix.fromArray(Ae.transform.matrix),be.projectionMatrix.fromArray(Ae.projectionMatrix),be.viewport.set(Me.x,Me.y,Me.width,Me.height),X===0&&S.matrix.copy(be.matrix),ue===!0&&S.cameras.push(be)}}for(let le=0;le<M.length;le++){const ue=y[le],X=M[le];ue!==null&&X!==void 0&&X.update(ue,ne,c||o)}if(re&&re(W,ne),ne.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ne.detectedPlanes});let le=null;for(const ue of v)ne.detectedPlanes.has(ue)||(le===null&&(le=[]),le.push(ue));if(le!==null)for(const ue of le)v.delete(ue),x.delete(ue),n.dispatchEvent({type:"planeremoved",data:ue});for(const ue of ne.detectedPlanes)if(!v.has(ue))v.add(ue),x.set(ue,ne.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ue});else{const X=x.get(ue);ue.lastChangedTime>X&&(x.set(ue,ue.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ue}))}}g=null}const fe=new Yp;fe.setAnimationLoop(P),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}}function mM(s,e){function t(p,m){m.color.getRGB(p.fogColor.value,Wp(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,_,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Vn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Vn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.iridescenceMap?M=m.iridescenceMap:m.iridescenceThicknessMap?M=m.iridescenceThicknessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Vn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function gM(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function c(M,y){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const x=y.program;n.updateUBOMapping(M,x);const T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function u(M){const y=h();M.__bindingPointIndex=y;const v=s.createBuffer(),x=M.__size,T=M.usage;return s.bindBuffer(35345,v),s.bufferData(35345,x,T),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=i[M.id],v=M.uniforms,x=M.__cache;s.bindBuffer(35345,y);for(let T=0,E=v.length;T<E;T++){const b=v[T];if(d(b,T,x)===!0){const S=b.__offset,R=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let k=0;k<R.length;k++){const O=R[k],I=p(O);typeof O=="number"?(b.__data[0]=O,s.bufferSubData(35345,S+H,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=O.elements[0],b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=O.elements[0],b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=O.elements[0]):(O.toArray(b.__data,H),H+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,S,b.__data)}}s.bindBuffer(35345,null)}function d(M,y,v){const x=M.value;if(v[y]===void 0){if(typeof x=="number")v[y]=x;else{const T=Array.isArray(x)?x:[x],E=[];for(let b=0;b<T.length;b++)E.push(T[b].clone());v[y]=E}return!0}else if(typeof x=="number"){if(v[y]!==x)return v[y]=x,!0}else{const T=Array.isArray(v[y])?v[y]:[v[y]],E=Array.isArray(x)?x:[x];for(let b=0;b<T.length;b++){const S=T[b];if(S.equals(E[b])===!1)return S.copy(E[b]),!0}}return!1}function g(M){const y=M.uniforms;let v=0;const x=16;let T=0;for(let E=0,b=y.length;E<b;E++){const S=y[E],R={boundary:0,storage:0},H=Array.isArray(S.value)?S.value:[S.value];for(let k=0,O=H.length;k<O;k++){const I=H[k],G=p(I);R.boundary+=G.boundary,R.storage+=G.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,E>0){T=v%x;const k=x-T;T!==0&&k-R.boundary<0&&(v+=x-T,S.__offset=v)}v+=R.storage}return T=v%x,T>0&&(v+=x-T),M.__size=v,M.__cache={},this}function p(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}function _M(){const s=ca("canvas");return s.style.display="block",s}function Qp(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:_M(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ts,this.physicallyCorrectLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const p=this;let m=!1,_=0,M=0,y=null,v=-1,x=null;const T=new yt,E=new yt;let b=null,S=e.width,R=e.height,H=1,k=null,O=null;const I=new yt(0,0,S,R),G=new yt(0,0,S,R);let J=!1;const Y=new Ku;let q=!1,re=!1,P=null;const fe=new st,W=new We,ne=new F,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return y===null?H:1}let X=t;function Ae(A,z){for(let K=0;K<A.length;K++){const U=A[K],Z=e.getContext(U,z);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ju}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Be,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),X=Ae(z,A),X===null)throw Ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,be,ge,ke,De,pe,qe,lt,ot,j,Je,ie,B,ae,C,w,V,te,ce,se,we,L,N,de;function ee(){Me=new Ay(X),be=new My(X,Me,s),Me.init(be),L=new uM(X,Me,be),ge=new lM(X,Me,be),ke=new Ry,De=new Yb,pe=new cM(X,Me,ge,De,be,L,ke),qe=new Sy(p),lt=new Ey(p),ot=new B0(X,be),N=new yy(X,Me,ot,be),j=new Ly(X,ot,ke,N),Je=new Ny(X,j,ot,ke),ce=new Oy(X,be,pe),w=new wy(De),ie=new qb(p,qe,lt,Me,be,N,w),B=new mM(p,De),ae=new $b,C=new nM(Me,be),te=new vy(p,qe,lt,ge,Je,u,o),V=new aM(p,Je,be),de=new gM(X,ke,be,ge),se=new by(X,Me,ke,be),we=new Py(X,Me,ke,be),ke.programs=ie.programs,p.capabilities=be,p.extensions=Me,p.properties=De,p.renderLists=ae,p.shadowMap=V,p.state=ge,p.info=ke}ee();const _e=new pM(p,X);this.xr=_e,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(S,R,!1))},this.getSize=function(A){return A.set(S,R)},this.setSize=function(A,z,K){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=A,R=z,e.width=Math.floor(A*H),e.height=Math.floor(z*H),K!==!1&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(S*H,R*H).floor()},this.setDrawingBufferSize=function(A,z,K){S=A,R=z,H=K,e.width=Math.floor(A*K),e.height=Math.floor(z*K),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,z,K,U){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,z,K,U),ge.viewport(T.copy(I).multiplyScalar(H).floor())},this.getScissor=function(A){return A.copy(G)},this.setScissor=function(A,z,K,U){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,z,K,U),ge.scissor(E.copy(G).multiplyScalar(H).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(A){ge.setScissorTest(J=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,z=!0,K=!0){let U=0;A&&(U|=16384),z&&(U|=256),K&&(U|=1024),X.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Be,!1),ae.dispose(),C.dispose(),De.dispose(),qe.dispose(),lt.dispose(),Je.dispose(),N.dispose(),de.dispose(),ie.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",he),_e.removeEventListener("sessionend",me),P&&(P.dispose(),P=null),Xe.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const A=ke.autoReset,z=V.enabled,K=V.autoUpdate,U=V.needsUpdate,Z=V.type;ee(),ke.autoReset=A,V.enabled=z,V.autoUpdate=K,V.needsUpdate=U,V.type=Z}function Be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){const z=A.target;z.removeEventListener("dispose",ze),Ke(z)}function Ke(A){D(A),De.remove(A)}function D(A){const z=De.get(A).programs;z!==void 0&&(z.forEach(function(K){ie.releaseProgram(K)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,K,U,Z,ye){z===null&&(z=le);const Ee=Z.isMesh&&Z.matrixWorld.determinant()<0,Fe=Ve(A,z,K,U,Z);ge.setMaterial(U,Ee);let Re=K.index,Ue=1;U.wireframe===!0&&(Re=j.getWireframeAttribute(K),Ue=2);const He=K.drawRange,Ne=K.attributes.position;let Qe=He.start*Ue,ht=(He.start+He.count)*Ue;ye!==null&&(Qe=Math.max(Qe,ye.start*Ue),ht=Math.min(ht,(ye.start+ye.count)*Ue)),Re!==null?(Qe=Math.max(Qe,0),ht=Math.min(ht,Re.count)):Ne!=null&&(Qe=Math.max(Qe,0),ht=Math.min(ht,Ne.count));const jt=ht-Qe;if(jt<0||jt===1/0)return;N.setup(Z,U,Fe,K,Re);let Xn,rt=se;if(Re!==null&&(Xn=ot.get(Re),rt=we,rt.setIndex(Xn)),Z.isMesh)U.wireframe===!0?(ge.setLineWidth(U.wireframeLinewidth*ue()),rt.setMode(1)):rt.setMode(4);else if(Z.isLine){let Oe=U.linewidth;Oe===void 0&&(Oe=1),ge.setLineWidth(Oe*ue()),Z.isLineSegments?rt.setMode(1):Z.isLineLoop?rt.setMode(2):rt.setMode(3)}else Z.isPoints?rt.setMode(0):Z.isSprite&&rt.setMode(4);if(Z.isInstancedMesh)rt.renderInstances(Qe,jt,Z.count);else if(K.isInstancedBufferGeometry){const Oe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,bn=Math.min(K.instanceCount,Oe);rt.renderInstances(Qe,jt,bn)}else rt.render(Qe,jt)},this.compile=function(A,z){function K(U,Z,ye){U.transparent===!0&&U.side===Bi&&U.forceSinglePass===!1?(U.side=Vn,U.needsUpdate=!0,je(U,Z,ye),U.side=Xi,U.needsUpdate=!0,je(U,Z,ye),U.side=Bi):je(U,Z,ye)}f=C.get(A),f.init(),g.push(f),A.traverseVisible(function(U){U.isLight&&U.layers.test(z.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(p.physicallyCorrectLights),A.traverse(function(U){const Z=U.material;if(Z)if(Array.isArray(Z))for(let ye=0;ye<Z.length;ye++){const Ee=Z[ye];K(Ee,A,U)}else K(Z,A,U)}),g.pop(),f=null};let Q=null;function oe(A){Q&&Q(A)}function he(){Xe.stop()}function me(){Xe.start()}const Xe=new Yp;Xe.setAnimationLoop(oe),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(A){Q=A,_e.setAnimationLoop(A),A===null?Xe.stop():Xe.start()},_e.addEventListener("sessionstart",he),_e.addEventListener("sessionend",me),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(z),z=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,z,y),f=C.get(A,g.length),f.init(),g.push(f),fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(fe),re=this.localClippingEnabled,q=w.init(this.clippingPlanes,re),h=ae.get(A,d.length),h.init(),d.push(h),ut(A,z,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(k,O),q===!0&&w.beginShadows();const K=f.state.shadowsArray;if(V.render(K,A,z),q===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,A),f.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const U=z.cameras;for(let Z=0,ye=U.length;Z<ye;Z++){const Ee=U[Z];it(h,A,Ee,Ee.viewport)}}else it(h,A,z);y!==null&&(pe.updateMultisampleRenderTarget(y),pe.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(p,A,z),N.resetDefaultState(),v=-1,x=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function ut(A,z,K,U){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){U&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const Ee=Je.update(A),Fe=A.material;Fe.visible&&h.push(A,Ee,Fe,K,ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==ke.render.frame&&(A.skeleton.update(),A.skeleton.frame=ke.render.frame),!A.frustumCulled||Y.intersectsObject(A))){U&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const Ee=Je.update(A),Fe=A.material;if(Array.isArray(Fe)){const Re=Ee.groups;for(let Ue=0,He=Re.length;Ue<He;Ue++){const Ne=Re[Ue],Qe=Fe[Ne.materialIndex];Qe&&Qe.visible&&h.push(A,Ee,Qe,K,ne.z,Ne)}}else Fe.visible&&h.push(A,Ee,Fe,K,ne.z,null)}}const ye=A.children;for(let Ee=0,Fe=ye.length;Ee<Fe;Ee++)ut(ye[Ee],z,K,U)}function it(A,z,K,U){const Z=A.opaque,ye=A.transmissive,Ee=A.transparent;f.setupLightsView(K),q===!0&&w.setGlobalState(p.clippingPlanes,K),ye.length>0&&Ft(Z,z,K),U&&ge.viewport(T.copy(U)),Z.length>0&&Ce(Z,z,K),ye.length>0&&Ce(ye,z,K),Ee.length>0&&Ce(Ee,z,K),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ft(A,z,K){const U=be.isWebGL2;P===null&&(P=new xr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?sa:es,minFilter:Qr,samples:U&&r===!0?4:0})),p.getDrawingBufferSize(W),U?P.setSize(W.x,W.y):P.setSize(Cl(W.x),Cl(W.y));const Z=p.getRenderTarget();p.setRenderTarget(P),p.clear();const ye=p.toneMapping;p.toneMapping=Hi,Ce(A,z,K),p.toneMapping=ye,pe.updateMultisampleRenderTarget(P),pe.updateRenderTargetMipmap(P),p.setRenderTarget(Z)}function Ce(A,z,K){const U=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,ye=A.length;Z<ye;Z++){const Ee=A[Z],Fe=Ee.object,Re=Ee.geometry,Ue=U===null?Ee.material:U,He=Ee.group;Fe.layers.test(K.layers)&&Pe(Fe,z,K,Re,Ue,He)}}function Pe(A,z,K,U,Z,ye){A.onBeforeRender(p,z,K,U,Z,ye),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(p,z,K,U,A,ye),Z.transparent===!0&&Z.side===Bi&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,p.renderBufferDirect(K,z,U,Z,A,ye),Z.side=Xi,Z.needsUpdate=!0,p.renderBufferDirect(K,z,U,Z,A,ye),Z.side=Bi):p.renderBufferDirect(K,z,U,Z,A,ye),A.onAfterRender(p,z,K,U,Z,ye)}function je(A,z,K){z.isScene!==!0&&(z=le);const U=De.get(A),Z=f.state.lights,ye=f.state.shadowsArray,Ee=Z.state.version,Fe=ie.getParameters(A,Z.state,ye,z,K),Re=ie.getProgramCacheKey(Fe);let Ue=U.programs;U.environment=A.isMeshStandardMaterial?z.environment:null,U.fog=z.fog,U.envMap=(A.isMeshStandardMaterial?lt:qe).get(A.envMap||U.environment),Ue===void 0&&(A.addEventListener("dispose",ze),Ue=new Map,U.programs=Ue);let He=Ue.get(Re);if(He!==void 0){if(U.currentProgram===He&&U.lightsStateVersion===Ee)return ve(A,Fe),He}else Fe.uniforms=ie.getUniforms(A),A.onBuild(K,Fe,p),A.onBeforeCompile(Fe,p),He=ie.acquireProgram(Fe,Re),Ue.set(Re,He),U.uniforms=Fe.uniforms;const Ne=U.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=w.uniform),ve(A,Fe),U.needsLights=Ge(A),U.lightsStateVersion=Ee,U.needsLights&&(Ne.ambientLightColor.value=Z.state.ambient,Ne.lightProbe.value=Z.state.probe,Ne.directionalLights.value=Z.state.directional,Ne.directionalLightShadows.value=Z.state.directionalShadow,Ne.spotLights.value=Z.state.spot,Ne.spotLightShadows.value=Z.state.spotShadow,Ne.rectAreaLights.value=Z.state.rectArea,Ne.ltc_1.value=Z.state.rectAreaLTC1,Ne.ltc_2.value=Z.state.rectAreaLTC2,Ne.pointLights.value=Z.state.point,Ne.pointLightShadows.value=Z.state.pointShadow,Ne.hemisphereLights.value=Z.state.hemi,Ne.directionalShadowMap.value=Z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ne.spotShadowMap.value=Z.state.spotShadowMap,Ne.spotLightMatrix.value=Z.state.spotLightMatrix,Ne.spotLightMap.value=Z.state.spotLightMap,Ne.pointShadowMap.value=Z.state.pointShadowMap,Ne.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Qe=He.getUniforms(),ht=pl.seqWithValue(Qe.seq,Ne);return U.currentProgram=He,U.uniformsList=ht,He}function ve(A,z){const K=De.get(A);K.outputEncoding=z.outputEncoding,K.instancing=z.instancing,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Ve(A,z,K,U,Z){z.isScene!==!0&&(z=le),pe.resetTextureUnits();const ye=z.fog,Ee=U.isMeshStandardMaterial?z.environment:null,Fe=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ts,Re=(U.isMeshStandardMaterial?lt:qe).get(U.envMap||Ee),Ue=U.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,He=!!U.normalMap&&!!K.attributes.tangent,Ne=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,ht=!!K.morphAttributes.color,jt=U.toneMapped?p.toneMapping:Hi,Xn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,rt=Xn!==void 0?Xn.length:0,Oe=De.get(U),bn=f.state.lights;if(q===!0&&(re===!0||A!==x)){const Pn=A===x&&U.id===v;w.setState(U,A,Pn)}let Ct=!1;U.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==bn.state.version||Oe.outputEncoding!==Fe||Z.isInstancedMesh&&Oe.instancing===!1||!Z.isInstancedMesh&&Oe.instancing===!0||Z.isSkinnedMesh&&Oe.skinning===!1||!Z.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Re||U.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==w.numPlanes||Oe.numIntersection!==w.numIntersection)||Oe.vertexAlphas!==Ue||Oe.vertexTangents!==He||Oe.morphTargets!==Ne||Oe.morphNormals!==Qe||Oe.morphColors!==ht||Oe.toneMapping!==jt||be.isWebGL2===!0&&Oe.morphTargetsCount!==rt)&&(Ct=!0):(Ct=!0,Oe.__version=U.version);let fi=Oe.currentProgram;Ct===!0&&(fi=je(U,z,Z));let Ki=!1,Zt=!1,Ai=!1;const Pt=fi.getUniforms(),Jt=Oe.uniforms;if(ge.useProgram(fi.program)&&(Ki=!0,Zt=!0,Ai=!0),U.id!==v&&(v=U.id,Zt=!0),Ki||x!==A){if(Pt.setValue(X,"projectionMatrix",A.projectionMatrix),be.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,Zt=!0,Ai=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Pn=Pt.map.cameraPosition;Pn!==void 0&&Pn.setValue(X,ne.setFromMatrixPosition(A.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Z.isSkinnedMesh)&&Pt.setValue(X,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){Pt.setOptional(X,Z,"bindMatrix"),Pt.setOptional(X,Z,"bindMatrixInverse");const Pn=Z.skeleton;Pn&&(be.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),Pt.setValue(X,"boneTexture",Pn.boneTexture,pe),Pt.setValue(X,"boneTextureSize",Pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ec=K.morphAttributes;if((ec.position!==void 0||ec.normal!==void 0||ec.color!==void 0&&be.isWebGL2===!0)&&ce.update(Z,K,U,fi),(Zt||Oe.receiveShadow!==Z.receiveShadow)&&(Oe.receiveShadow=Z.receiveShadow,Pt.setValue(X,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Jt.envMap.value=Re,Jt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Zt&&(Pt.setValue(X,"toneMappingExposure",p.toneMappingExposure),Oe.needsLights&&Ie(Jt,Ai),ye&&U.fog===!0&&B.refreshFogUniforms(Jt,ye),B.refreshMaterialUniforms(Jt,U,H,R,P),pl.upload(X,Oe.uniformsList,Jt,pe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(pl.upload(X,Oe.uniformsList,Jt,pe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Pt.setValue(X,"center",Z.center),Pt.setValue(X,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(X,"normalMatrix",Z.normalMatrix),Pt.setValue(X,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Pn=U.uniformsGroups;for(let tc=0,a_=Pn.length;tc<a_;tc++)if(be.isWebGL2){const Nh=Pn[tc];de.update(Nh,fi),de.bind(Nh,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Ie(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Ge(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,z,K){De.get(A.texture).__webglTexture=z,De.get(A.depthTexture).__webglTexture=K;const U=De.get(A);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=K===void 0,U.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const K=De.get(A);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,K=0){y=A,_=z,M=K;let U=!0,Z=null,ye=!1,Ee=!1;if(A){const Re=De.get(A);Re.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),U=!1):Re.__webglFramebuffer===void 0?pe.setupRenderTarget(A):Re.__hasExternalTextures&&pe.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);const Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ee=!0);const He=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=He[z],ye=!0):be.isWebGL2&&A.samples>0&&pe.useMultisampledRTT(A)===!1?Z=De.get(A).__webglMultisampledFramebuffer:Z=He,T.copy(A.viewport),E.copy(A.scissor),b=A.scissorTest}else T.copy(I).multiplyScalar(H).floor(),E.copy(G).multiplyScalar(H).floor(),b=J;if(ge.bindFramebuffer(36160,Z)&&be.drawBuffers&&U&&ge.drawBuffers(A,Z),ge.viewport(T),ge.scissor(E),ge.setScissorTest(b),ye){const Re=De.get(A.texture);X.framebufferTexture2D(36160,36064,34069+z,Re.__webglTexture,K)}else if(Ee){const Re=De.get(A.texture),Ue=z||0;X.framebufferTextureLayer(36160,36064,Re.__webglTexture,K||0,Ue)}v=-1},this.readRenderTargetPixels=function(A,z,K,U,Z,ye,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Fe=Fe[Ee]),Fe){ge.bindFramebuffer(36160,Fe);try{const Re=A.texture,Ue=Re.format,He=Re.type;if(Ue!==Qn&&L.convert(Ue)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=He===sa&&(Me.has("EXT_color_buffer_half_float")||be.isWebGL2&&Me.has("EXT_color_buffer_float"));if(He!==es&&L.convert(He)!==X.getParameter(35738)&&!(He===ar&&(be.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-U&&K>=0&&K<=A.height-Z&&X.readPixels(z,K,U,Z,L.convert(Ue),L.convert(He),ye)}finally{const Re=y!==null?De.get(y).__webglFramebuffer:null;ge.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(A,z,K=0){const U=Math.pow(2,-K),Z=Math.floor(z.image.width*U),ye=Math.floor(z.image.height*U);pe.setTexture2D(z,0),X.copyTexSubImage2D(3553,K,0,0,A.x,A.y,Z,ye),ge.unbindTexture()},this.copyTextureToTexture=function(A,z,K,U=0){const Z=z.image.width,ye=z.image.height,Ee=L.convert(K.format),Fe=L.convert(K.type);pe.setTexture2D(K,0),X.pixelStorei(37440,K.flipY),X.pixelStorei(37441,K.premultiplyAlpha),X.pixelStorei(3317,K.unpackAlignment),z.isDataTexture?X.texSubImage2D(3553,U,A.x,A.y,Z,ye,Ee,Fe,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(3553,U,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Ee,z.mipmaps[0].data):X.texSubImage2D(3553,U,A.x,A.y,Ee,Fe,z.image),U===0&&K.generateMipmaps&&X.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(A,z,K,U,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Fe=A.max.z-A.min.z+1,Re=L.convert(U.format),Ue=L.convert(U.type);let He;if(U.isData3DTexture)pe.setTexture3D(U,0),He=32879;else if(U.isDataArrayTexture)pe.setTexture2DArray(U,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,U.flipY),X.pixelStorei(37441,U.premultiplyAlpha),X.pixelStorei(3317,U.unpackAlignment);const Ne=X.getParameter(3314),Qe=X.getParameter(32878),ht=X.getParameter(3316),jt=X.getParameter(3315),Xn=X.getParameter(32877),rt=K.isCompressedTexture?K.mipmaps[0]:K.image;X.pixelStorei(3314,rt.width),X.pixelStorei(32878,rt.height),X.pixelStorei(3316,A.min.x),X.pixelStorei(3315,A.min.y),X.pixelStorei(32877,A.min.z),K.isDataTexture||K.isData3DTexture?X.texSubImage3D(He,Z,z.x,z.y,z.z,ye,Ee,Fe,Re,Ue,rt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(He,Z,z.x,z.y,z.z,ye,Ee,Fe,Re,rt.data)):X.texSubImage3D(He,Z,z.x,z.y,z.z,ye,Ee,Fe,Re,Ue,rt),X.pixelStorei(3314,Ne),X.pixelStorei(32878,Qe),X.pixelStorei(3316,ht),X.pixelStorei(3315,jt),X.pixelStorei(32877,Xn),Z===0&&U.generateMipmaps&&X.generateMipmap(He),ge.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){_=0,M=0,y=null,ge.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class xM extends Qp{}xM.prototype.isWebGL1Renderer=!0;class vM extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class yM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lu,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new F;class Zu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ed=new F,td=new yt,nd=new yt,bM=new F,id=new st;class MM extends Sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new st,this.bindMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;td.fromBufferAttribute(i.attributes.skinIndex,e),nd.fromBufferAttribute(i.attributes.skinWeight,e),ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=nd.getComponent(r);if(o!==0){const a=td.getComponent(r);id.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bM.copy(ed).applyMatrix4(id),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class em extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wM extends Yt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ot,u=Ot,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=new st,SM=new st;class Ju{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:SM;rd.multiplyMatrices(a,t[r]),rd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ju(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Np(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wM(t,e,e,Qn,ar);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new em),this.bones.push(o),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class sd extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const od=new st,ad=new st,Xa=[],TM=new st,Eo=new Sn;class CM extends Sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sd(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,TM)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,od),ad.multiplyMatrices(n,od),Eo.matrixWorld=ad,Eo.raycast(e,Xa);for(let o=0,a=Xa.length;o<a;o++){const l=Xa[o];l.instanceId=r,l.object=this,t.push(l)}Xa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class tm extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ld=new F,cd=new F,ud=new st,Nc=new Yu,ja=new mo;class Qu extends Tt{constructor(e=new ri,t=new tm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ld.fromBufferAttribute(t,i-1),cd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ld.distanceTo(cd);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;ud.copy(i).invert(),Nc.copy(e.ray).applyMatrix4(ud);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,h=new F,f=new F,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let y=_,v=M-1;y<v;y+=d){const x=g.getX(y),T=g.getX(y+1);if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,T),Nc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let y=_,v=M-1;y<v;y+=d){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Nc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const hd=new F,fd=new F;class EM extends Qu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hd.fromBufferAttribute(t,i),fd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hd.distanceTo(fd);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class AM extends Qu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nm extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dd=new st,fu=new Yu,qa=new mo,Ya=new F;class LM extends Tt{constructor(e=new ri,t=new nm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(i),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;dd.copy(i).invert(),fu.copy(e.ray).applyMatrix4(dd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,p=d;g<p;g++){const m=c.getX(g);Ya.fromBufferAttribute(h,m),pd(Ya,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,p=d;g<p;g++)Ya.fromBufferAttribute(h,g),pd(Ya,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pd(s,e,t,n,i,r,o){const a=fu.distanceSqToPoint(s);if(a<t){const l=new F;fu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class eh extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Op,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class us extends eh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function tr(s,e,t){return im(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Ka(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function im(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function PM(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function md(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function rm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class wa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class RM extends wa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_f,endingEnd:_f}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case xf:r=e,a=2*t-n;break;case vf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xf:o=e,l=2*n-t;break;case vf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-f*m+2*f*p-f*g,M=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*p+.5*g,v=d*m-d*p;for(let x=0;x!==a;++x)r[x]=_*o[u+x]+M*o[c+x]+y*o[l+x]+v*o[h+x];return r}}class DM extends wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class IM extends wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new IM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new DM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new RM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oa:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=tr(n,r,o),this.values=tr(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&im(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=tr(this.times),t=tr(this.values),n=this.getValueSize(),i=this.getInterpolation()===cc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=tr(e,0,o),this.values=tr(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=tr(this.times,0),t=tr(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=no;class _o extends Ei{}_o.prototype.ValueTypeName="bool";_o.prototype.ValueBufferType=Array;_o.prototype.DefaultInterpolation=oa;_o.prototype.InterpolantFactoryMethodLinear=void 0;_o.prototype.InterpolantFactoryMethodSmooth=void 0;class sm extends Ei{}sm.prototype.ValueTypeName="color";class ua extends Ei{}ua.prototype.ValueTypeName="number";class OM extends wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ti.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ns extends Ei{InterpolantFactoryMethodLinear(e){return new OM(this.times,this.values,this.getValueSize(),e)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.DefaultInterpolation=no;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends Ei{}xo.prototype.ValueTypeName="string";xo.prototype.ValueBufferType=Array;xo.prototype.DefaultInterpolation=oa;xo.prototype.InterpolantFactoryMethodLinear=void 0;xo.prototype.InterpolantFactoryMethodSmooth=void 0;class ha extends Ei{}ha.prototype.ValueTypeName="vector";class NM{constructor(e,t=-1,n,i=t0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kM(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=PM(l);l=md(l,1,u),c=md(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ua(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,p){if(d.length!==0){const m=[],_=[];rm(d,m,_,g),m.length!==0&&p.push(new h(f,m,_))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],_=[];for(let M=0;M!==f[g].morphTargets.length;++M){const y=f[g];m.push(y.time),_.push(y.morphTarget===p?1:0)}i.push(new ua(".morphTargetInfluence["+p+"]",m,_))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(ha,d+".position",f,"pos",i),n(ns,d+".quaternion",f,"rot",i),n(ha,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function FM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ua;case"vector":case"vector2":case"vector3":case"vector4":return ha;case"color":return sm;case"quaternion":return ns;case"bool":case"boolean":return _o;case"string":return xo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function kM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=FM(s.type);if(s.times===void 0){const t=[],n=[];rm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ro={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class zM{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const UM=new zM;class vo{constructor(e){this.manager=e!==void 0?e:UM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Oi={};class BM extends Error{constructor(e,t){super(e),this.response=t}}class El extends vo{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ro.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:i});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Oi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){M();function M(){h.read().then(({done:y,value:v})=>{if(y)_.close();else{p+=v.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let T=0,E=u.length;T<E;T++){const b=u[T];b.onProgress&&b.onProgress(x)}_.enqueue(v),M()}})}}});return new Response(m)}else throw new BM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ro.add(e,c);const u=Oi[e];delete Oi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Oi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class VM extends vo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ro.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ca("img");function l(){u(),ro.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class om extends vo{constructor(e){super(e)}load(e,t,n,i){const r=new Yt,o=new VM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Xl extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fc=new st,gd=new F,_d=new F;class th{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ku,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),_d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_d),t.updateMatrixWorld(),Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GM extends th{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=la*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class HM extends Xl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new GM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xd=new st,Ao=new F,kc=new F;class WM extends th{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ao),kc.copy(n.position),kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kc),n.updateMatrixWorld(),i.makeTranslation(-Ao.x,-Ao.y,-Ao.z),xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd)}}class XM extends Xl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new WM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jM extends th{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class am extends Xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new jM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qM extends Xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class du{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class YM extends vo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ro.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ro.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class lm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vd(){return(typeof performance>"u"?Date:performance).now()}const nh="\\[\\]\\.:\\/",KM=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",$M="[^"+nh.replace("\\.","")+"]",ZM=/((?:WC+[\/:])*)/.source.replace("WC",ih),JM=/(WCOD+)?/.source.replace("WCOD",$M),QM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),ew=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),tw=new RegExp("^"+ZM+JM+QM+ew+"$"),nw=["material","materials","bones","map"];class iw{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(KM,"")}static parseTrackName(e){const t=tw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);nw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=iw;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);const bd={type:"change"},zc={type:"start"},Md={type:"end"};class rw extends cs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ae),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(bd),n.update(),r=i.NONE},this.update=function(){const L=new F,N=new Ti().setFromUnitVectors(e.up,new F(0,1,0)),de=N.clone().invert(),ee=new F,_e=new Ti,Se=2*Math.PI;return function(){const Be=n.object.position;L.copy(Be).sub(n.target),L.applyQuaternion(N),a.setFromVector3(L),n.autoRotate&&r===i.NONE&&S(E()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ze=n.minAzimuthAngle,Ke=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(Ke)&&(ze<-Math.PI?ze+=Se:ze>Math.PI&&(ze-=Se),Ke<-Math.PI?Ke+=Se:Ke>Math.PI&&(Ke-=Se),ze<=Ke?a.theta=Math.max(ze,Math.min(Ke,a.theta)):a.theta=a.theta>(ze+Ke)/2?Math.max(ze,a.theta):Math.min(Ke,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(de),Be.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ee.distanceToSquared(n.object.position)>o||8*(1-_e.dot(n.object.quaternion))>o?(n.dispatchEvent(bd),ee.copy(n.object.position),_e.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",qe),n.domElement.removeEventListener("pointercancel",j),n.domElement.removeEventListener("wheel",B),n.domElement.removeEventListener("pointermove",lt),n.domElement.removeEventListener("pointerup",ot),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ae)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new yd,l=new yd;let c=1;const u=new F;let h=!1;const f=new We,d=new We,g=new We,p=new We,m=new We,_=new We,M=new We,y=new We,v=new We,x=[],T={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function S(L){l.theta-=L}function R(L){l.phi-=L}const H=function(){const L=new F;return function(de,ee){L.setFromMatrixColumn(ee,0),L.multiplyScalar(-de),u.add(L)}}(),k=function(){const L=new F;return function(de,ee){n.screenSpacePanning===!0?L.setFromMatrixColumn(ee,1):(L.setFromMatrixColumn(ee,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(de),u.add(L)}}(),O=function(){const L=new F;return function(de,ee){const _e=n.domElement;if(n.object.isPerspectiveCamera){const Se=n.object.position;L.copy(Se).sub(n.target);let Te=L.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),H(2*de*Te/_e.clientHeight,n.object.matrix),k(2*ee*Te/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(de*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),k(ee*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(L){f.set(L.clientX,L.clientY)}function Y(L){M.set(L.clientX,L.clientY)}function q(L){p.set(L.clientX,L.clientY)}function re(L){d.set(L.clientX,L.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const N=n.domElement;S(2*Math.PI*g.x/N.clientHeight),R(2*Math.PI*g.y/N.clientHeight),f.copy(d),n.update()}function P(L){y.set(L.clientX,L.clientY),v.subVectors(y,M),v.y>0?I(b()):v.y<0&&G(b()),M.copy(y),n.update()}function fe(L){m.set(L.clientX,L.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),O(_.x,_.y),p.copy(m),n.update()}function W(L){L.deltaY<0?G(b()):L.deltaY>0&&I(b()),n.update()}function ne(L){let N=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),N=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),N=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),N=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),N=!0;break}N&&(L.preventDefault(),n.update())}function le(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),N=.5*(x[0].pageY+x[1].pageY);f.set(L,N)}}function ue(){if(x.length===1)p.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),N=.5*(x[0].pageY+x[1].pageY);p.set(L,N)}}function X(){const L=x[0].pageX-x[1].pageX,N=x[0].pageY-x[1].pageY,de=Math.sqrt(L*L+N*N);M.set(0,de)}function Ae(){n.enableZoom&&X(),n.enablePan&&ue()}function Me(){n.enableZoom&&X(),n.enableRotate&&le()}function be(L){if(x.length==1)d.set(L.pageX,L.pageY);else{const de=we(L),ee=.5*(L.pageX+de.x),_e=.5*(L.pageY+de.y);d.set(ee,_e)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const N=n.domElement;S(2*Math.PI*g.x/N.clientHeight),R(2*Math.PI*g.y/N.clientHeight),f.copy(d)}function ge(L){if(x.length===1)m.set(L.pageX,L.pageY);else{const N=we(L),de=.5*(L.pageX+N.x),ee=.5*(L.pageY+N.y);m.set(de,ee)}_.subVectors(m,p).multiplyScalar(n.panSpeed),O(_.x,_.y),p.copy(m)}function ke(L){const N=we(L),de=L.pageX-N.x,ee=L.pageY-N.y,_e=Math.sqrt(de*de+ee*ee);y.set(0,_e),v.set(0,Math.pow(y.y/M.y,n.zoomSpeed)),I(v.y),M.copy(y)}function De(L){n.enableZoom&&ke(L),n.enablePan&&ge(L)}function pe(L){n.enableZoom&&ke(L),n.enableRotate&&be(L)}function qe(L){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",lt),n.domElement.addEventListener("pointerup",ot)),te(L),L.pointerType==="touch"?C(L):Je(L))}function lt(L){n.enabled!==!1&&(L.pointerType==="touch"?w(L):ie(L))}function ot(L){ce(L),x.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",lt),n.domElement.removeEventListener("pointerup",ot)),n.dispatchEvent(Md),r=i.NONE}function j(L){ce(L)}function Je(L){let N;switch(L.button){case 0:N=n.mouseButtons.LEFT;break;case 1:N=n.mouseButtons.MIDDLE;break;case 2:N=n.mouseButtons.RIGHT;break;default:N=-1}switch(N){case ds.DOLLY:if(n.enableZoom===!1)return;Y(L),r=i.DOLLY;break;case ds.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;q(L),r=i.PAN}else{if(n.enableRotate===!1)return;J(L),r=i.ROTATE}break;case ds.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;J(L),r=i.ROTATE}else{if(n.enablePan===!1)return;q(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(zc)}function ie(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;re(L);break;case i.DOLLY:if(n.enableZoom===!1)return;P(L);break;case i.PAN:if(n.enablePan===!1)return;fe(L);break}}function B(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(zc),W(L),n.dispatchEvent(Md))}function ae(L){n.enabled===!1||n.enablePan===!1||ne(L)}function C(L){switch(se(L),x.length){case 1:switch(n.touches.ONE){case ps.ROTATE:if(n.enableRotate===!1)return;le(),r=i.TOUCH_ROTATE;break;case ps.PAN:if(n.enablePan===!1)return;ue(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ps.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),r=i.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(zc)}function w(L){switch(se(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ge(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(L),n.update();break;default:r=i.NONE}}function V(L){n.enabled!==!1&&L.preventDefault()}function te(L){x.push(L)}function ce(L){delete T[L.pointerId];for(let N=0;N<x.length;N++)if(x[N].pointerId==L.pointerId){x.splice(N,1);return}}function se(L){let N=T[L.pointerId];N===void 0&&(N=new We,T[L.pointerId]=N),N.set(L.pageX,L.pageY)}function we(L){const N=L.pointerId===x[0].pointerId?x[1]:x[0];return T[N.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",qe),n.domElement.addEventListener("pointercancel",j),n.domElement.addEventListener("wheel",B,{passive:!1}),this.update()}}class sw{constructor(){this.experience=new wi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.createPerspectiveCamera(),this.createOrthographicCamera(),this.setOrbitControls()}createPerspectiveCamera(){this.perspectiveCamera=new _n(35,this.sizes.aspect,.1,1e3),this.scene.add(this.perspectiveCamera),this.perspectiveCamera.position.z=4.24}createOrthographicCamera(){this.orthographicCamera=new Ma(-this.sizes.aspect*this.sizes.frustrum/2,this.sizes.aspect*this.sizes.frustrum/2,this.sizes.frustrum/2,-this.sizes.frustrum/2,-100,100),this.scene.add(this.orthographicCamera)}setOrbitControls(){this.controls=new rw(this.perspectiveCamera,this.canvas),this.controls.enableDamping=!0,this.controls.enableZoom=!0}resize(){this.perspectiveCamera.aspect=this.sizes.aspect,this.perspectiveCamera.updateProjectionMatrix(),this.orthographicCamera.left=-this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.right=this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.top=this.sizes.frustrum/2,this.orthographicCamera.bottom=-this.sizes.frustrum/2,this.orthographicCamera.updateProjectionMatrix()}update(){this.controls.update()}}class jl{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ow=new Ma(-1,1,1,-1,0,1),rh=new ri;rh.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3));rh.setAttribute("uv",new ui([0,2,0,0,2,0],2));class aw{constructor(e){this._mesh=new Sn(rh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ow)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lw extends jl{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}class cw extends jl{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xp.clone(e.uniforms),this.material=new gn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new aw(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const uw={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class wd extends jl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class hw extends jl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fw{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new We);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new xr(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cw(uw),this.clock=new lm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wd!==void 0&&(o instanceof wd?n=!0:o instanceof hw&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new We);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new F,new $(15658734),new $(328965),new $(16777215);const dw={uniforms:{uDirLightPos:{value:new F},uDirLightColor:{value:new $(15658734)},uAmbientLightColor:{value:new $(328965)},uBaseColor:{value:new $(15658734)},uLineColor1:{value:new $(8421504)},uLineColor2:{value:new $(0)},uLineColor3:{value:new $(0)},uLineColor4:{value:new $(0)},uLineColor5:{value:new $(0)}},vertexShader:`

		varying vec3 vNormal;

		void main() {

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			vNormal = normalize( normalMatrix * normal );

		}`,fragmentShader:`

		uniform vec3 uBaseColor;
		uniform vec3 uLineColor1;
		uniform vec3 uLineColor2;
		uniform vec3 uLineColor3;
		uniform vec3 uLineColor4;
		uniform vec3 uLineColor5;

		uniform vec3 uDirLightPos;
		uniform vec3 uDirLightColor;

		uniform vec3 uAmbientLightColor;

		varying vec3 vNormal;

		void main() {

			float camera = max( dot( normalize( vNormal ), vec3( 0.0, 0.0, 1.0 ) ), 100.000);
			float light = max( dot( normalize( vNormal ), uDirLightPos ),0.0);

	


	
			if ( (length(uAmbientLightColor + uDirLightColor * light)) > 0.0 && (length(uAmbientLightColor + uDirLightColor * light)) < 1.13) { //1.00
				
				gl_FragColor = vec4( uLineColor5, 1.0 ); //1.

			} 

			if ( (length(uAmbientLightColor + uDirLightColor * light)) > 1.13 && (length(uAmbientLightColor + uDirLightColor * light)) < 1.67) { //1.00
				
				gl_FragColor = vec4( uLineColor4, 1.0 ); //1.

			} 


			if ( (length(uAmbientLightColor + uDirLightColor * light)) > 1.67 && (length(uAmbientLightColor + uDirLightColor * light)) < 2.41 ) { //1.00

				gl_FragColor = vec4( uLineColor3, 1.0);

			} 

			if ( (length(uAmbientLightColor + uDirLightColor * light)) > 2.41 && (length(uAmbientLightColor + uDirLightColor * light)) < 2.52) { //0.50

				gl_FragColor = vec4( uLineColor2, 1.0 );

			} 

			if ( (length(uAmbientLightColor + uDirLightColor * light)) > 2.52 && (length(uAmbientLightColor + uDirLightColor * light)) < 2.90 ) { //0.50

				gl_FragColor = vec4( uLineColor1, 1.0 );

			} 

/*			else ( (length(uAmbientLightColor + uDirLightColor * light)) > 10.0 && (length(uAmbientLightColor + uDirLightColor * light)) < 25.0 ) { //0.50

				gl_FragColor = vec4( uBaseColor, 1.0 );

			}*/

		}`};new F,new $(15658734),new $(328965),new $(16777215),new $(0),new $(0),new $(0),new $(0);new F,new $(15658734),new $(328965),new $(16777215),new $(0);const pw={uniforms:{uDirLightPos:{value:new F},uDirLightColor:{value:new $(15658734)},uAmbientLightColor:{value:new $(328965)},uBaseColor:{value:new $(15658734)},uLineColor1:{value:new $(8421504)},uLineColor2:{value:new $(0)},uLineColor3:{value:new $(0)},uLineColor4:{value:new $(0)},uLineColor5:{value:new $(0)}},vertexShader:`

		varying vec3 vNormal;

		void main() {

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			vNormal = normalize( normalMatrix * normal );

		}`,fragmentShader:`

		uniform vec3 uBaseColor;
		uniform vec3 uLineColor1;
		uniform vec3 uLineColor2;
		uniform vec3 uLineColor3;
		uniform vec3 uLineColor4;
		uniform vec3 uLineColor5;

		uniform vec3 uDirLightPos;
		uniform vec3 uDirLightColor;

		uniform vec3 uAmbientLightColor;

		varying vec3 vNormal;

		void main() {

			float camera = max( dot( normalize( vNormal ), vec3( 0.0, 0.0, 1.0 ) ), 100.000);
			float light = max( dot( normalize( vNormal ), uDirLightPos ),0.0);

	
			if ( (length(uAmbientLightColor + uDirLightColor * light)) < 2.90 ) { //0.50

				gl_FragColor = vec4( uLineColor1, 1.0 );

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 2.52) { //0.50

				gl_FragColor = vec4( uLineColor2, 1.0 );

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 2.41 ) { //1.00

				gl_FragColor = vec4( uLineColor3, 1.0);

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 1.67) { //1.00
				
				gl_FragColor = vec4( uLineColor4, 1.0 ); //1.

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 1.13) { //1.00
				
				gl_FragColor = vec4( uLineColor5, 1.0 ); //1.

			} 



		}`},mw={uniforms:{uDirLightPos:{value:new F},uDirLightColor:{value:new $(15658734)},uAmbientLightColor:{value:new $(328965)},uBaseColor:{value:new $(15658734)},uLineColor1:{value:new $(8421504)},uLineColor2:{value:new $(0)},uLineColor3:{value:new $(0)},uLineColor4:{value:new $(0)},uLineColor5:{value:new $(0)}},vertexShader:`

		varying vec3 vNormal;

		void main() {

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			vNormal = normalize( normalMatrix * normal );

		}`,fragmentShader:`

		uniform vec3 uBaseColor;
		uniform vec3 uLineColor1;
		uniform vec3 uLineColor2;
		uniform vec3 uLineColor3;
		uniform vec3 uLineColor4;
		uniform vec3 uLineColor5;

		uniform vec3 uDirLightPos;
		uniform vec3 uDirLightColor;

		uniform vec3 uAmbientLightColor;

		varying vec3 vNormal;

		void main() {

			float camera = max( dot( normalize( vNormal ), vec3( 0.0, 0.0, 1.0 ) ), 100.000);
			float light = max( dot( normalize( vNormal ), uDirLightPos ),0.0);

	
			if ( (length(uAmbientLightColor + uDirLightColor * light)) < 2.53 ) { //0.50

				gl_FragColor = vec4( uLineColor1, 1.0 );

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 2.51) { //0.50

				gl_FragColor = vec4( uLineColor2, 1.0 );

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 2.41 ) { //1.00

				gl_FragColor = vec4( uLineColor3, 1.0);

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 1.87) { //1.00
				
				gl_FragColor = vec4( uLineColor4, 1.0 ); //1.

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 1.37) { //1.00
				
				gl_FragColor = vec4( uLineColor5, 1.0 ); //1.

			} 



		}`},gw={uniforms:{uDirLightPos:{value:new F},uDirLightColor:{value:new $(15658734)},uAmbientLightColor:{value:new $(328965)},uBaseColor:{value:new $(15658734)},uLineColor1:{value:new $(8421504)},uLineColor2:{value:new $(0)},uLineColor3:{value:new $(0)},uLineColor4:{value:new $(0)},uLineColor5:{value:new $(0)}},vertexShader:`

		varying vec3 vNormal;

		void main() {

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			vNormal = normalize( normalMatrix * normal );

		}`,fragmentShader:`

		uniform vec3 uBaseColor;
		uniform vec3 uLineColor1;
		uniform vec3 uLineColor2;
		uniform vec3 uLineColor3;
		uniform vec3 uLineColor4;
		uniform vec3 uLineColor5;

		uniform vec3 uDirLightPos;
		uniform vec3 uDirLightColor;

		uniform vec3 uAmbientLightColor;

		varying vec3 vNormal;

		void main() {

			float camera = max( dot( normalize( vNormal ), vec3( 0.0, 0.0, 1.0 ) ), 100.000);
			float light = max( dot( normalize( vNormal ), uDirLightPos ),0.0);

	
			 if ( (length(uAmbientLightColor + uDirLightColor * light)) < 2.70) { //0.50

				gl_FragColor = vec4( uLineColor2, 1.0 );

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 1.95 ) { //1.00

				gl_FragColor = vec4( uLineColor3, 1.0);
			}



		}`},_w={uniforms:{uDirLightPos:{value:new F},uDirLightColor:{value:new $(15658734)},uAmbientLightColor:{value:new $(328965)},uBaseColor:{value:new $(15658734)},uLineColor1:{value:new $(8421504)},uLineColor2:{value:new $(0)},uLineColor3:{value:new $(0)},uLineColor4:{value:new $(0)},uLineColor5:{value:new $(0)}},vertexShader:`

		varying vec3 vNormal;

		void main() {

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			vNormal = normalize( normalMatrix * normal );

		}`,fragmentShader:`

		uniform vec3 uBaseColor;
		uniform vec3 uLineColor1;
		uniform vec3 uLineColor2;
		uniform vec3 uLineColor3;
		uniform vec3 uLineColor4;
		uniform vec3 uLineColor5;

		uniform vec3 uDirLightPos;
		uniform vec3 uDirLightColor;

		uniform vec3 uAmbientLightColor;

		varying vec3 vNormal;

		void main() {

			float camera = max( dot( normalize( vNormal ), vec3( 0.0, 0.0, 1.0 ) ), 100.000);
			float light = max( dot( normalize( vNormal ), uDirLightPos ),0.0);

	
			 if ( (length(uAmbientLightColor + uDirLightColor * light)) < 2.70) { //0.50

				gl_FragColor = vec4( uLineColor2, 1.0 );

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 1.78 ) { //1.00

				gl_FragColor = vec4( uLineColor3, 1.0);
			}



		}`},xw={uniforms:{uDirLightPos:{value:new F},uDirLightColor:{value:new $(15658734)},uAmbientLightColor:{value:new $(328965)},uBaseColor:{value:new $(15658734)},uLineColor1:{value:new $(8421504)},uLineColor2:{value:new $(0)},uLineColor3:{value:new $(0)},uLineColor4:{value:new $(0)},uLineColor5:{value:new $(0)}},vertexShader:`

		varying vec3 vNormal;

		void main() {

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			vNormal = normalize( normalMatrix * normal );

		}`,fragmentShader:`

		uniform vec3 uBaseColor;
		uniform vec3 uLineColor1;
		uniform vec3 uLineColor2;
		uniform vec3 uLineColor3;
		uniform vec3 uLineColor4;
		uniform vec3 uLineColor5;

		uniform vec3 uDirLightPos;
		uniform vec3 uDirLightColor;

		uniform vec3 uAmbientLightColor;

		varying vec3 vNormal;

		void main() {

			float camera = max( dot( normalize( vNormal ), vec3( 0.0, 0.0, 1.0 ) ), 100.000);
			float light = max( dot( normalize( vNormal ), uDirLightPos ),0.0);

			 if ( (length(uAmbientLightColor + uDirLightColor * light)) < 3.42) { //0.50

				gl_FragColor = vec4( uLineColor1, 1.0 );

			}  if ( (length(uAmbientLightColor + uDirLightColor * light)) < 2.48) { //0.50

				gl_FragColor = vec4( uLineColor2, 1.0 );

			} if ( (length(uAmbientLightColor + uDirLightColor * light)) < 1.71 ) { //1.00

				gl_FragColor = vec4( uLineColor3, 1.0);
			}



		}`};new F,new $(15658734),new $(328965),new $(15658734),new $(8421504),new $(0),new $(0),new $(0),new $(0),new $(8421504),new $(0),new $(8421504),new $(0);class vw{constructor(){this.experience=new wi,this.scene=this.experience.scene,this.resources=this.experience.resources,this.couronne=this.resources.items.couronne,this.actualCouronne=this.couronne.scene,this.couronneChildren={},this.nombreDenfant,this.gradientMap,this.sizes=this.experience.sizes,this.setModel()}setModel(){this.scene.add(this.actualCouronne),this.actualCouronne.scale.set(1.3,1.3,1.3),this.actualCouronne.position.x=-.35,this.actualCouronne.position.y=-.3,this.actualCouronne.children.forEach(e=>{this.couronneChildren[e.name.toLowerCase()]=e,this.nombreDenfant=this.couronneChildren.length}),this.setMaterial()}setMaterial(){console.log(this.couronneChildren),this.couronneColor(),this.jColor(),this.starColor(),this.pincesColor(),this.pColor(),this.pouffeColor()}couronneColor(){this.couronne=this.couronneChildren.couronne.children[0].material=new gn(dw),this.couronne.uniforms.uDirLightPos.value=new F(0,.13,.97),this.couronne.uniforms.uAmbientLightColor.value=new $(16744448),this.couronne.uniforms.uLineColor1.value=new $(15196618),this.couronne.uniforms.uLineColor2.value=new $(14997935),this.couronne.uniforms.uLineColor3.value=new $(15387223),this.couronne.uniforms.uLineColor4.value=new $(13989213),this.couronne.uniforms.uLineColor5.value=new $(9045253),this.pansements=this.couronneChildren.pansements.children[0].material=new gn(pw),this.pansements.uniforms.uDirLightPos.value=new F(0,.13,.97),this.pansements.uniforms.uAmbientLightColor.value=new $(16744448),this.pansements.uniforms.uLineColor1.value=new $(15196618),this.pansements.uniforms.uLineColor2.value=new $(14997935),this.pansements.uniforms.uLineColor3.value=new $(15387223),this.pansements.uniforms.uLineColor4.value=new $(13989213),this.pansements.uniforms.uLineColor5.value=new $(9045253)}jColor(){this.j=this.couronneChildren.lej.children[0].material=new gn(mw),this.j.uniforms.uDirLightPos.value=new F(0,.13,.97),this.j.uniforms.uAmbientLightColor.value=new $(16744448),this.j.uniforms.uLineColor1.value=new $(15068661),this.j.uniforms.uLineColor2.value=new $(14018294),this.j.uniforms.uLineColor3.value=new $(10339308),this.j.uniforms.uLineColor4.value=new $(3491202),this.j.uniforms.uLineColor5.value=new $(9045253)}starColor(){this.star=this.couronneChildren.etoiles.material=new gn(gw),this.star.uniforms.uDirLightPos.value=new F(0,.13,.97),this.star.uniforms.uAmbientLightColor.value=new $(16744448),this.star.uniforms.uLineColor2.value=new $(10040125),this.star.uniforms.uLineColor3.value=new $(9045253)}pincesColor(){this.pinces=this.couronneChildren.pinces.material=new gn(_w),this.pinces.uniforms.uDirLightPos.value=new F(0,.13,.97),this.pinces.uniforms.uAmbientLightColor.value=new $(16744448),this.pinces.uniforms.uLineColor2.value=new $(9045253),this.pinces.uniforms.uLineColor3.value=new $(2493711)}pColor(){this.p=this.couronneChildren.lep.material=new gn(xw),this.p.uniforms.uDirLightPos.value=new F(0,.13,.97),this.p.uniforms.uAmbientLightColor.value=new $(16744448),this.p.uniforms.uLineColor1.value=new $(10040125),this.p.uniforms.uLineColor2.value=new $(9045253),this.p.uniforms.uLineColor3.value=new $(2493711)}resize(){}update(){}}class yw{constructor(){this.experience=new wi,this.scene=this.experience.scene,this.resources=this.experience.resources,this.texture=this.resources.items.fondBleu,this.setSunlight(),this.setBackground()}setSunlight(){this.sunLight=new am("#ffffff",3),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.far=20,this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(1.5,7,3),this.scene.add(this.sunLight),this.ambientLight=new qM("#ffffff",1),this.scene.add(this.ambientLight)}setBackground(){this.geometry=new Hl(12,7.8,36,22),this.material=new lr({map:this.texture}),this.plane=new Sn(this.geometry,this.material),this.plane.position.z=-2.75,this.scene.add(this.plane),this.clock=new lm}update(){for(this.t=this.clock.getElapsedTime(),this.positionAttribute=this.plane.geometry.getAttribute("position"),this.vertex=new F,this.i=0;this.i<this.positionAttribute.count;this.i++)this.vertex.fromBufferAttribute(this.positionAttribute,this.i),this.wave1=.2*Math.sin(this.vertex.x*1+this.t*.1),this.wave2=.2*Math.sin(this.vertex.x*.5+this.t*.25),this.wave3=.4*Math.sin(this.vertex.y*2+this.t*.5),this.wave4=.1*Math.sin(this.vertex.y*.45+this.t*.1),this.waves=this.wave1+ +this.wave3+this.wave4,this.positionAttribute.setXYZ(this.i,this.vertex.x,this.vertex.y,this.waves);this.plane.geometry.attributes.position.needsUpdate=!0}}class bw{constructor(){this.experience=new wi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.renderer=this.experience.renderer,this.resources=this.experience.resources,this.resources.on("ready",()=>{this.couronne=new vw,this.environnement=new yw})}resize(){}update(){this.room&&this.room.update(),this.environnement&&this.environnement.update()}}class Mw{constructor(){this.experience=new wi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setRenderer()}setRenderer(){this.renderer=new Qp({canvas:this.canvas,antialias:!0}),this.renderer.physicallyCorrectLights=!0,this.renderer.toneMappingExposure=1.75,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Cp,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio),this.composerCreate()}composerCreate(){this.composer=new fw(this.renderer),this.renderPass=new lw(this.scene,this.camera.perspectiveCamera),this.composer.addPass(this.renderPass),this.shaderEffect(),this.outLineEffect()}outLineEffect(){}shaderEffect(){}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}update(){this.renderer.render(this.scene,this.camera.perspectiveCamera),typeof this.composer<"u"&&(this.renderer.render(this.scene,this.camera.perspectiveCamera),this.composer.render())}}var so={},ww={get exports(){return so},set exports(s){so=s}},Ws=typeof Reflect=="object"?Reflect:null,Sd=Ws&&typeof Ws.apply=="function"?Ws.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},ml;Ws&&typeof Ws.ownKeys=="function"?ml=Ws.ownKeys:Object.getOwnPropertySymbols?ml=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:ml=function(e){return Object.getOwnPropertyNames(e)};function Sw(s){console&&console.warn&&console.warn(s)}var cm=Number.isNaN||function(e){return e!==e};function gt(){gt.init.call(this)}ww.exports=gt;so.once=Aw;gt.EventEmitter=gt;gt.prototype._events=void 0;gt.prototype._eventsCount=0;gt.prototype._maxListeners=void 0;var Td=10;function ql(s){if(typeof s!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof s)}Object.defineProperty(gt,"defaultMaxListeners",{enumerable:!0,get:function(){return Td},set:function(s){if(typeof s!="number"||s<0||cm(s))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+s+".");Td=s}});gt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};gt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||cm(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function um(s){return s._maxListeners===void 0?gt.defaultMaxListeners:s._maxListeners}gt.prototype.getMaxListeners=function(){return um(this)};gt.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",r=this._events;if(r!==void 0)i=i&&r.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=r[e];if(l===void 0)return!1;if(typeof l=="function")Sd(l,this,t);else for(var c=l.length,u=mm(l,c),n=0;n<c;++n)Sd(u[n],this,t);return!0};function hm(s,e,t,n){var i,r,o;if(ql(t),r=s._events,r===void 0?(r=s._events=Object.create(null),s._eventsCount=0):(r.newListener!==void 0&&(s.emit("newListener",e,t.listener?t.listener:t),r=s._events),o=r[e]),o===void 0)o=r[e]=t,++s._eventsCount;else if(typeof o=="function"?o=r[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=um(s),i>0&&o.length>i&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=s,a.type=e,a.count=o.length,Sw(a)}return s}gt.prototype.addListener=function(e,t){return hm(this,e,t,!1)};gt.prototype.on=gt.prototype.addListener;gt.prototype.prependListener=function(e,t){return hm(this,e,t,!0)};function Tw(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function fm(s,e,t){var n={fired:!1,wrapFn:void 0,target:s,type:e,listener:t},i=Tw.bind(n);return i.listener=t,n.wrapFn=i,i}gt.prototype.once=function(e,t){return ql(t),this.on(e,fm(this,e,t)),this};gt.prototype.prependOnceListener=function(e,t){return ql(t),this.prependListener(e,fm(this,e,t)),this};gt.prototype.removeListener=function(e,t){var n,i,r,o,a;if(ql(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,r=o;break}if(r<0)return this;r===0?n.shift():Cw(n,r),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};gt.prototype.off=gt.prototype.removeListener;gt.prototype.removeAllListeners=function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var r=Object.keys(n),o;for(i=0;i<r.length;++i)o=r[i],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this};function dm(s,e,t){var n=s._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?Ew(i):mm(i,i.length)}gt.prototype.listeners=function(e){return dm(this,e,!0)};gt.prototype.rawListeners=function(e){return dm(this,e,!1)};gt.listenerCount=function(s,e){return typeof s.listenerCount=="function"?s.listenerCount(e):pm.call(s,e)};gt.prototype.listenerCount=pm;function pm(s){var e=this._events;if(e!==void 0){var t=e[s];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}gt.prototype.eventNames=function(){return this._eventsCount>0?ml(this._events):[]};function mm(s,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=s[n];return t}function Cw(s,e){for(;e+1<s.length;e++)s[e]=s[e+1];s.pop()}function Ew(s){for(var e=new Array(s.length),t=0;t<e.length;++t)e[t]=s[t].listener||s[t];return e}function Aw(s,e){return new Promise(function(t,n){function i(o){s.removeListener(e,r),n(o)}function r(){typeof s.removeListener=="function"&&s.removeListener("error",i),t([].slice.call(arguments))}gm(s,e,r,{once:!0}),e!=="error"&&Lw(s,i,{once:!0})})}function Lw(s,e,t){typeof s.on=="function"&&gm(s,"error",e,t)}function gm(s,e,t,n){if(typeof s.on=="function")n.once?s.once(e,t):s.on(e,t);else if(typeof s.addEventListener=="function")s.addEventListener(e,function i(r){n.once&&s.removeEventListener(e,i),t(r)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof s)}class Pw extends so.EventEmitter{constructor(){super(),this.width=window.innerWidth/6,this.height="400",this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth/6,this.height="400",this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.emit("resize")})}}class Rw extends so.EventEmitter{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.update()}update(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.emit("update"),window.requestAnimationFrame(()=>this.update())}}const Uc=new WeakMap;class Dw extends vo{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new El(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.decodeDracoFile(o,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Uc.has(e)){const l=Uc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Uc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new ri;e.index&&t.setIndex(new Kt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize;t.setAttribute(r,new Kt(o,a))}return t}_loadLibrary(e,t){const n=new El(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Iw.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Iw(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder,d=new h.DecoderBuffer;d.Init(new Int8Array(l),l.byteLength);try{const g=t(h,f,d,c),p=g.attributes.map(m=>m.array.buffer);g.index&&p.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},p)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{h.destroy(d),h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeBufferToMesh(l,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeBufferToPointCloud(l,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const p={index:null,attributes:[]};for(const m in u){const _=self[h[m]];let M,y;if(c.useUniqueIDs)y=u[m],M=a.GetAttributeByUniqueId(f,y);else{if(y=a.GetAttributeId(f,o[u[m]]),y===-1)continue;M=a.GetAttribute(f,y)}p.attributes.push(i(o,a,f,m,_,M))}return g===o.TRIANGULAR_MESH&&(p.index=n(o,a,f)),o.destroy(f),p}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,p=g*u.BYTES_PER_ELEMENT,m=r(o,u),_=o._malloc(p);a.GetAttributeDataArrayForAllPoints(l,h,m,p,_);const M=new u(o.HEAPF32.buffer,_,g).slice();return o._free(_),{name:c,array:M,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Cd(s,e){if(e===n0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===au||e===Ip){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===au)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Ow extends vo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Uw(t)}),this.register(function(t){return new jw(t)}),this.register(function(t){return new qw(t)}),this.register(function(t){return new Vw(t)}),this.register(function(t){return new Gw(t)}),this.register(function(t){return new Hw(t)}),this.register(function(t){return new Ww(t)}),this.register(function(t){return new zw(t)}),this.register(function(t){return new Xw(t)}),this.register(function(t){return new Bw(t)}),this.register(function(t){return new Fw(t)}),this.register(function(t){return new Yw(t)}),this.register(function(t){return new Kw(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=du.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new El(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_m){try{o[ct.KHR_BINARY_GLTF]=new $w(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new cS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:o[h]=new kw;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[h]=new Zw(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[h]=new Jw;break;case ct.KHR_MESH_QUANTIZATION:o[h]=new Qw;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Nw(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fw{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new $(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new am(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new XM(u),c.distance=h;break;case"spot":c=new HM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,sr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class kw{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return lr}extendParams(e,t,n){const i=[];e.color=new $(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}}class zw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Uw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:us}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(a,a)}return Promise.all(r)}}class Bw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:us}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Vw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:us}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new $(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,dt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Gw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:us}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Hw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:us}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $(a[0],a[1],a[2]),Promise.all(r)}}class Ww{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:us}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Xw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:us}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,dt)),Promise.all(r)}}class jw{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class qw{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Yw{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class Kw{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Kn.TRIANGLES&&c.mode!==Kn.TRIANGLE_STRIP&&c.mode!==Kn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const p=new st,m=new F,_=new Ti,M=new F(1,1,1),y=new CM(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,p.compose(m,_,M));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Tt.prototype.copy.call(y,g),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const _m="glTF",Lo=12,Ed={JSON:1313821514,BIN:5130562};class $w{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Lo,r=new DataView(e,Lo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ed.JSON){const c=new Uint8Array(e,Lo+o,a);this.content=n.decode(c)}else if(l===Ed.BIN){const c=Lo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Zw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=pu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=pu[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Xs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],p=l[d];p!==void 0&&(g.normalized=p)}h(f)},a,c)})})}}class Jw{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Qw{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class xm extends wa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,p=g-c,m=-2*d+3*f,_=d-f,M=1-m,y=_-f+h;for(let v=0;v!==a;v++){const x=o[p+v+a],T=o[p+v+l]*u,E=o[g+v+a],b=o[g+v]*u;r[v]=M*x+y*T+m*E+_*b}return r}}const eS=new Ti;class tS extends xm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return eS.fromArray(r).normalize().toArray(r),r}}const Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ad={9728:Ot,9729:wn,9984:ou,9985:Rp,9986:fl,9987:Qr},Ld={33071:Jn,33648:Tl,10497:eo},Bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nS={CUBICSPLINE:void 0,LINEAR:no,STEP:oa},Vc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new eh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),s.DefaultMaterial}function Po(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function sr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function sS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oS(s){const e=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Pd(e.attributes):t=s.indices+":"+Pd(s.attributes)+":"+s.mode,t}function Pd(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function mu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const lS=new st;class cS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nw,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new om(this.options.manager):this.textureLoader=new YM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new El(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Po(r,a,i),sr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(du.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Bc[i.type],a=Xs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Kt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Bc[i.type],c=Xs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(d&&d!==h){const _=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let y=t.cache.get(M);y||(p=new c(a,_*d,i.count*d/u),y=new yM(p,d/u),t.cache.add(M,y)),m=new Zu(y,l,f%d/u,g)}else a===null?p=new c(i.count*l):p=new c(a,f,i.count*l),m=new Kt(p,l,g);if(i.sparse!==void 0){const _=Bc.SCALAR,M=Xs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,x=new M(o[1],y,i.sparse.count*_),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized));for(let E=0,b=x.length;E<b;E++){const S=x[E];if(m.setX(S,T[E*l]),l>=2&&m.setY(S,T[E*l+1]),l>=3&&m.setZ(S,T[E*l+2]),l>=4&&m.setW(S,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ad[f.magFilter]||wn,u.minFilter=Ad[f.minFilter]||Qr,u.wrapS=Ld[f.wrapS]||eo,u.wrapT=Ld[f.wrapT]||eo,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(p){const m=new Yt(p);m.needsUpdate=!0,f(m)}),t.load(du.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||aS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nm,Mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new tm,Mi.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return eh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const h=i[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new $(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,dt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bi);const u=r.alphaMode||Vc.OPAQUE;if(u===Vc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Vc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==lr&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==lr&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==lr&&(a.emissive=new $().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==lr&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),sr(h,r),t.associations.set(h,{materials:e}),r.extensions&&Po(i,h,r),h})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Rd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=oS(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Rd(new ri,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?iS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const p=u[d],m=o[d];let _;const M=c[d];if(m.mode===Kn.TRIANGLES||m.mode===Kn.TRIANGLE_STRIP||m.mode===Kn.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new MM(p,M):new Sn(p,M),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===Kn.TRIANGLE_STRIP?_.geometry=Cd(_.geometry,Ip):m.mode===Kn.TRIANGLE_FAN&&(_.geometry=Cd(_.geometry,au));else if(m.mode===Kn.LINES)_=new EM(p,M);else if(m.mode===Kn.LINE_STRIP)_=new Qu(p,M);else if(m.mode===Kn.LINE_LOOP)_=new AM(p,M);else if(m.mode===Kn.POINTS)_=new LM(p,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&sS(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),sr(_,r),m.extensions&&Po(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new Ur;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _n(y0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ma(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),sr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new st;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ju(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node,p=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",m)),a.push(f),l.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],p=[];for(let _=0,M=u.length;_<M;_++){const y=u[_],v=h[_],x=f[_],T=d[_],E=g[_];if(y===void 0)continue;y.updateMatrix();let b;switch(nr[E.path]){case nr.weights:b=ua;break;case nr.rotation:b=ns;break;case nr.position:case nr.scale:default:b=ha;break}const S=y.name?y.name:y.uuid,R=T.interpolation!==void 0?nS[T.interpolation]:no,H=[];nr[E.path]===nr.weights?y.traverse(function(O){O.morphTargetInfluences&&H.push(O.name?O.name:O.uuid)}):H.push(S);let k=x.array;if(x.normalized){const O=mu(k.constructor),I=new Float32Array(k.length);for(let G=0,J=k.length;G<J;G++)I[G]=k[G]*O;k=I}for(let O=0,I=H.length;O<I;O++){const G=new b(H[O]+"."+nr[E.path],v.array,k,R);T.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(Y){const q=this instanceof ns?tS:xm;return new q(this.times,this.values,this.getValueSize()/3,Y)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(G)}}const m=n.name?n.name:"animation_"+e;return new NM(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(f){return i._getNodeRef(i.cameraCache,r.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){a.push(f)});const c=[],u=r.children||[];for(let f=0,d=u.length;f<d;f++)c.push(i.getDependency("node",u[f]));const h=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([Promise.all(a),Promise.all(c),h])}().then(function(a){const l=a[0],c=a[1],u=a[2];let h;if(r.isBone===!0?h=new em:l.length>1?h=new Ur:l.length===1?h=l[0]:h=new Tt,h!==l[0])for(let f=0,d=l.length;f<d;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=o),sr(h,r),r.extensions&&Po(n,h,r),r.matrix!==void 0){const f=new st;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,lS)});for(let f=0,d=c.length;f<d;f++)h.add(c[f]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ur;n.name&&(r.name=i.createUniqueName(n.name)),sr(r,n),n.extensions&&Po(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Mi||f instanceof Yt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}}function uS(s,e,t){const n=e.attributes,i=new po;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=mu(Xs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new F,l=new F;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const p=mu(Xs[f.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new mo;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Rd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=pu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return sr(s,e),uS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?rS(s,e.targets,t):s})}class hS extends so.EventEmitter{constructor(e){super(),this.experience=new wi,this.renderer=this.experience.renderer,this.assets=e,this.items={},this.queue=this.assets.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.textureLoader=new om,this.loaders.gltfLoader=new Ow,this.loaders.dracoLoader=new Dw,this.loaders.dracoLoader.setDecoderPath("./draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader),console.log(this.loaders)}startLoading(){for(const e of this.assets)e.type==="glbModel"?this.loaders.gltfLoader.load(e.path,t=>{this.singleAssetLoaded(e,t)}):e.type==="texture"&&(this.text={},this.text[e.name]=this.loaders.textureLoader.load(e.path),this.text[e.name].magFilter=Ot,this.text[e.name].minFilter=Ot,this.singleAssetLoaded(e,this.text[e.name]))}singleAssetLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.queue&&this.emit("ready")}}const fS=[{name:"couronne",type:"glbModel",path:" ./Models/CouronneJP.glb"},{name:"gradientCouronne",type:"texture",path:" ./Texture/gradientCouronne.png"},{name:"fondBleu",type:"texture",path:" ./Texture/fondBleu.png"},{name:"pomme",type:"texture",path:" ./Texture/pomme.png"}],ra=class{constructor(e){if(ra.instance)return ra.instance;ra.instance=this,this.canvas=e,this.sizes=new Pw,this.scene=new vM,this.time=new Rw,this.camera=new sw,this.renderer=new Mw,this.resources=new hS(fS),this.world=new bw,this.sizes.on("resize",()=>{this.resize()}),this.time.on("update",()=>{this.update()})}resize(){this.camera.resize(),this.world.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update()}};let wi=ra;Fh(wi,"instance");new wi(document.querySelector(".experience-canvas"));alert("Sooooooo....here we goooooo!!!!");function Fi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function vm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oo={duration:.5,overwrite:!1,delay:0},sh,$t,Mt,ei=1e8,vt=1/ei,gu=Math.PI*2,dS=gu/4,pS=0,ym=Math.sqrt,mS=Math.cos,gS=Math.sin,Xt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},oh=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},ah=function(){return typeof window<"u"},$a=function(e){return Et(e)||Xt(e)},bm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,_u=/(?:-?\.?\d|\.)+/gi,Mm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wm=/[+-]=-?[.\d]+/,Sm=/[^,'"\[\]\s]+/gi,_S=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,pi,xu,lh,Hn={},Al={},Tm,Cm=function(e){return(Al=ao(e,Hn))&&Ln},ch=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},fa=function(e,t){return!t&&console.warn(e)},Em=function(e,t){return e&&(Hn[e]=t)&&Al&&(Al[e]=t)||Hn},da=function(){return 0},xS={suppressEvents:!0,isStart:!0,kill:!1},gl={suppressEvents:!0,kill:!1},vS={suppressEvents:!0},uh={},mr=[],vu={},Am,Nn={},Hc={},Dd=30,_l=[],hh="",fh=function(e){var t=e[0],n,i;if(Ci(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=_l.length;i--&&!_l[i].targetTest(t););n=_l[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Jm(e[i],n)))||e.splice(i,1);return e},jr=function(e){return e._gsap||fh(ti(e))[0]._gsap},Lm=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():oh(n)&&e.getAttribute&&e.getAttribute(t)||n},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},js=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},yS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ll=function(){var e=mr.length,t=mr.slice(0),n,i;for(vu={},mr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},dh=function(e){return!!(e._initted||e._startAt||e.add)},Pm=function(e,t,n,i){mr.length&&!$t&&Ll(),e.render(t,n,i||!!($t&&t<0&&dh(e))),mr.length&&!$t&&Ll()},Rm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Sm).length<2?t:Xt(e)?e.trim():e},Dm=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ao=function(e,t){for(var n in t)e[n]=t[n];return e},Id=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ci(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Pl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},jo=function(e){var t=e.parent||wt,n=e.keyframes?bS(on(e.keyframes)):Wn;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},MS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Im=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Yl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yu=function(e,t,n,i){return e._startAt&&($t?e._startAt.revert(gl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},SS=function s(e){return!e||e._ts&&s(e.parent)},Od=function(e){return e._repeat?lo(e._tTime,e=e.duration()+e._rDelay)*e:0},lo=function(e,t){var n=Math.floor(e=Nt(e/t));return e&&n===e?n-1:n},Rl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kl=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},$l=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kl(e),n._dirty||qr(n,e)),e},Om=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Rl(e.rawTime(),t),(!t._dur||Sa(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},xi=function(e,t,n,i){return t.parent&&vr(t),t._start=Nt((ji(n)?n:n||e!==wt?qn(e,n,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Im(e,t,"_first","_last",e._sort?"_start":0),bu(t)||(e._recent=t),i||Om(e,t),e._ts<0&&$l(e,e._tTime),e},Nm=function(e,t){return(Hn.ScrollTrigger||ch("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},Fm=function(e,t,n,i,r){if(mh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!$t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Am!==kn.frame)return mr.push(e),e._lazy=[r,i],1},TS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},bu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},CS=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&TS(e)&&!(!e._initted&&bu(e))||(e._ts<0||e._dp._ts<0)&&!bu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Sa(0,e._tDur,t),u=lo(l,a),e._yoyo&&u&1&&(o=1-o),u!==lo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||$t||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&Fm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&yu(e,t,n,!0),e._onUpdate&&!n&&Bn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&vr(e,1),!n&&!$t&&(Bn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ES=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},co=function(e,t,n,i){var r=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Nt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&$l(e,e._tTime=e._tDur*a),e.parent&&Kl(e),n||qr(e.parent,e),e},Nd=function(e){return e instanceof vn?qr(e):co(e,e._dur)},AS={_start:0,endTime:da,totalDuration:da},qn=function s(e,t,n){var i=e.labels,r=e._recent||AS,o=e.duration()>=ei?r.endTime(!1):e._dur,a,l,c;return Xt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},qo=function(e,t,n){var i=ji(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new It(t[0],o,t[r+1])},Mr=function(e,t){return e||e===0?t(e):t},Sa=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!Xt(e)||!(t=_S.exec(e))?"":t[1]},LS=function(e,t,n){return Mr(n,function(i){return Sa(e,t,i)})},Mu=[].slice,km=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==pi},PS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Xt(i)&&!t||km(i,1)?(r=n).push.apply(r,ti(i)):n.push(i)})||n},ti=function(e,t,n){return Mt&&!t&&Mt.selector?Mt.selector(e):Xt(e)&&!n&&(xu||!uo())?Mu.call((t||lh).querySelectorAll(e),0):on(e)?PS(e,n):km(e)?Mu.call(e,0):e?[e]:[]},wu=function(e){return e=ti(e)[0]||fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ti(t,n.querySelectorAll?n:n===e?fa("Invalid scope")||lh.createElement("div"):e)}},zm=function(e){return e.sort(function(){return .5-Math.random()})},Um=function(e){if(Et(e))return e;var t=Ci(e)?e:{each:e},n=Yr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Xt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var p=(g||t).length,m=o[p],_,M,y,v,x,T,E,b,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ei])[1],!S){for(E=-ei;E<(E=g[S++].getBoundingClientRect().left)&&S<p;);S<p&&S--}for(m=o[p]=[],_=l?Math.min(S,p)*u-.5:i%S,M=S===ei?0:l?p*h/S-.5:i/S|0,E=0,b=ei,T=0;T<p;T++)y=T%S-_,v=M-(T/S|0),m[T]=x=c?Math.abs(c==="y"?v:y):ym(y*y+v*v),x>E&&(E=x),x<b&&(b=x);i==="random"&&zm(m),m.max=E-b,m.min=b,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(S>p?p-1:c?c==="y"?p/S:S:Math.max(S,p/S))||0)*(i==="edges"?-1:1),m.b=p<0?r-p:r,m.u=rn(t.amount||t.each)||0,n=n&&p<0?Km(n):n}return p=(m[f]-m.min)/m.max||0,Nt(m.b+(n?n(p):p)*m.v)+m.u}},Su=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Nt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ji(n)?0:rn(n))}},Bm=function(e,t){var n=on(e),i,r;return!n&&Ci(e)&&(i=n=e.radius||ei,e.values?(e=ti(e.values),(r=!ji(e[0]))&&(i*=i)):e=Su(e.increment)),Mr(t,n?Et(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=ei,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||ji(o)?u:u+rn(o)}:Su(e))},Vm=function(e,t,n,i){return Mr(on(e)?!t:n===!0?!!(n=0):!i,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},RS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},DS=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},IS=function(e,t,n){return Hm(e,t,0,1,n)},Gm=function(e,t,n){return Mr(n,function(i){return e[~~t(i)]})},OS=function s(e,t,n){var i=t-e;return on(e)?Gm(e,s(0,e.length),t):Mr(n,function(r){return(i+(r-e)%i)%i+e})},NS=function s(e,t,n){var i=t-e,r=i*2;return on(e)?Gm(e,s(0,e.length-1),t):Mr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},pa=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Sm:_u),n+=e.substr(t,i-t)+Vm(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Hm=function(e,t,n,i,r){var o=t-e,a=i-n;return Mr(r,function(l){return n+((l-e)/o*a||0)})},FS=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=Xt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var p=Math.min(f,~~g);return u[p](g-p)},n=t}else i||(e=ao(on(e)?[]:{},e));if(!u){for(l in t)ph.call(a,e,l,"get",t[l]);r=function(g){return xh(g,a)||(o?e.p:e)}}}return Mr(n,r)},Fd=function(e,t,n){var i=e.labels,r=ei,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Bn=function(e,t,n){var i=e.vars,r=i[t],o=Mt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&mr.length&&Ll(),a&&(Mt=a),u=l?r.apply(c,l):r.call(c),Mt=o,u},Fo=function(e){return vr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$t),e.progress()<1&&Bn(e,"onInterrupt"),e},zs,Wm=[],Xm=function(e){if(e)if(e=!e.name&&e.default||e,ah()||e.headless){var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:da,render:xh,add:ph,kill:JS,modifier:ZS,rawVars:0},o={targetTest:0,get:0,getSetter:_h,aliases:{},register:0};if(uo(),e!==i){if(Nn[t])return;Wn(i,Wn(Pl(e,r),o)),ao(i.prototype,ao(r,Pl(e,o))),Nn[i.prop=t]=i,e.targetTest&&(_l.push(i),uh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Em(t,i),e.register&&e.register(Ln,i,En)}else Wm.push(e)},_t=255,ko={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Wc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},jm=function(e,t,n){var i=e?ji(e)?[e>>16,e>>8&_t,e&_t]:0:ko.black,r,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ko[e])i=ko[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_t,i&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(_u),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Wc(l+1/3,r,o),i[1]=Wc(l,r,o),i[2]=Wc(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Mm),n&&i.length<4&&(i[3]=1),i}else i=e.match(_u)||ko.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/_t,o=i[1]/_t,a=i[2]/_t,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},qm=function(e){var t=[],n=[],i=-1;return e.split(gr).forEach(function(r){var o=r.match(ks)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},kd=function(e,t,n){var i="",r=(e+i).match(gr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=jm(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=qm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(gr,"1").split(ks),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(gr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},gr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ko)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),kS=/hsl[a]?\(/,Ym=function(e){var t=e.join(" "),n;if(gr.lastIndex=0,gr.test(t))return n=kS.test(t),e[1]=kd(e[1],n),e[0]=kd(e[0],n,qm(e[1])),!0},ma,kn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,g=function p(m){var _=s()-i,M=m===!0,y,v,x,T;if((_>e||_<0)&&(n+=_-t),i+=_,x=i-n,y=x-o,(y>0||M)&&(T=++h.frame,f=x-h.time*1e3,h.time=x=x/1e3,o+=y+(y>=r?4:r-y),v=1),M||(l=c(p)),v)for(d=0;d<a.length;d++)a[d](x,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Tm&&(!xu&&ah()&&(pi=xu=window,lh=pi.document||{},Hn.gsap=Ln,(pi.gsapVersions||(pi.gsapVersions=[])).push(Ln.version),Cm(Al||pi.GreenSockGlobals||!pi.gsap&&pi||{}),Wm.forEach(Xm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ma=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ma=0,c=da},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,_,M){var y=_?function(v,x,T,E){m(v,x,T,E),h.remove(y)}:m;return h.remove(m),a[M?"unshift":"push"](y),uo(),y},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},h}(),uo=function(){return!ma&&kn.wake()},at={},zS=/^[\d.\-M][\d.\-,\s]/,US=/["']/g,BS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(US,"").trim():+c,i=l.substr(a+1).trim();return t},VS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},GS=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[BS(t[1])]:VS(e).split(",").map(Rm)):at._CE&&zS.test(e)?at._CE("",e):n},Km=function(e){return function(t){return 1-e(1-t)}},$m=function s(e,t){for(var n=e._first,i;n;)n instanceof vn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Yr=function(e,t){return e&&(Et(e)?e:at[e]||GS(e))||t},hs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Cn(e,function(a){at[a]=Hn[a]=r,at[o=a.toLowerCase()]=n;for(var l in r)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=r[l]}),r},Zm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/gu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*gS((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Zm(a);return r=gu/r,l.config=function(c,u){return s(e,c,u)},l},jc=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Zm(n);return i.config=function(r){return s(e,r)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;hs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;hs("Elastic",Xc("in"),Xc("out"),Xc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};hs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);hs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});hs("Circ",function(s){return-(ym(1-s*s)-1)});hs("Sine",function(s){return s===1?1:-mS(s*dS)+1});hs("Back",jc("in"),jc("out"),jc());at.SteppedEase=at.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-vt;return function(a){return((i*Sa(0,o,a)|0)+r)*n}}};oo.ease=at["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return hh+=s+","+s+"Params,"});var Jm=function(e,t){this.id=pS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Lm,this.set=t?t.getSetter:_h},ga=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,co(this,+t.duration,1,1),this.data=t.data,Mt&&(this._ctx=Mt,Mt.data.push(this)),ma||kn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,co(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(uo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for($l(this,n),!r._dp||r.parent||Om(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Od(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Od(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?lo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts,this.totalTime(Sa(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Kl(this),wS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=vS);var i=$t;return $t=n,dh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$t=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qn(this,n),Tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i)),this._dur||(this._zTime=-vt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-vt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Et(n)?n:Dm,a=function(){var c=i.then;i.then=null,Et(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Fo(this)},s}();Wn(ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var vn=function(s){vm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Tn(n.sortChildren),wt&&xi(n.parent||wt,Fi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Nm(Fi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return qo(0,arguments,this),this},t.from=function(i,r,o){return qo(1,arguments,this),this},t.fromTo=function(i,r,o,a){return qo(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,jo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new It(i,r,qn(this,o),1),this},t.call=function(i,r,o){return xi(this,It.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new It(i,o,qn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,jo(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,jo(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Nt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,p,m,_,M,y,v,x,T,E;if(this!==wt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,y=this._ts,_=!y,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Nt(u%m),u===l?(p=this._repeat,f=c):(x=Nt(u/m),p=~~x,p&&p===x&&(f=c,p--),f>c&&(f=c)),x=lo(this._tTime,m),!a&&this._tTime&&x!==p&&this._tTime-x*m-this._dur<=0&&(x=p),T&&p&1&&(f=c-f,E=1),p!==x&&!this._lock){var b=T&&x&1,S=b===(T&&p&1);if(p<x&&(b=!b),a=b?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Nt(p*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;$m(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=ES(this,Nt(a),Nt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!r&&!x&&(Bn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-vt);break}}d=g}else{d=this._last;for(var R=i<0?i:f;d;){if(g=d._prev,(d._act||R<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,r,o||$t&&dh(d)),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=R?-vt:vt);break}}d=g}}if(M&&!r&&(this.pause(),M.render(f>=a?0:-vt)._zTime=f>=a?1:-1,this._ts))return this._start=v,Kl(this),this.render(i,r,o);this._onUpdate&&!r&&Bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Bn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ji(r)||(r=qn(this,r,i)),!(i instanceof ga)){if(on(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Xt(i))return this.addLabel(i,r);if(Et(i))i=It.delayedCall(0,i);else return this}return this!==i?xi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof It?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Xt(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(i.parent===this&&Yl(this,i),i===this._recent&&(this._recent=this._last),qr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=qn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=It.delayedCall(0,r||da,o);return a.data="isPause",this._hasPause=1,xi(this,a,qn(this,i))},t.removePause=function(i){var r=this._first;for(i=qn(this,i);r;)r._start===i&&r.data==="isPause"&&vr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)cr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=ti(i),l=this._first,c=ji(r),u;l;)l instanceof It?yS(l._targets,a)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=qn(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=It.to(o,Wn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||vt,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&co(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Wn({startAt:{time:qn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Fd(this,qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Fd(this,qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return qr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=ei,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;co(o,o===wt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(wt._ts&&(Pm(wt,Rl(i,wt)),Am=kn.frame),kn.frame>=Dd){Dd+=Gn.autoSleep||120;var r=wt._first;if((!r||!r._ts)&&Gn.autoSleep&&kn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||kn.sleep()}}},e}(ga);Wn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var HS=function(e,t,n,i,r,o,a){var l=new En(this._pt,e,t,0,1,rg,null,r),c=0,u=0,h,f,d,g,p,m,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=pa(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(Gc)||[];h=Gc.exec(i);)g=h[0],p=i.substring(c,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?js(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Gc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(wm.test(i)||_)&&(l.e=0),this._pt=l,l},ph=function(e,t,n,i,r,o,a,l,c,u){Et(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:Et(h)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Et(h)?c?YS:ng:gh,g;if(Xt(i)&&(~i.indexOf("random(")&&(i=pa(i)),i.charAt(1)==="="&&(g=js(f,i)+(rn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Tu)return!isNaN(f*i)&&i!==""?(g=new En(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?$S:ig,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&ch(t,i),HS.call(this,e,t,f,i,d,l||Gn.stringFilter,c))},WS=function(e,t,n,i,r){if(Et(e)&&(e=Yo(e,r,t,n,i)),!Ci(e)||e.style&&e.nodeType||on(e)||bm(e))return Xt(e)?Yo(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Yo(e[a],r,t,n,i);return o},Qm=function(e,t,n,i,r,o){var a,l,c,u;if(Nn[e]&&(a=new Nn[e]).init(r,a.rawVars?t[e]:WS(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new En(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==zs))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},cr,Tu,mh=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,p=e._startAt,m=e._targets,_=e.parent,M=_&&_.data==="nested"?_.vars.targets:m,y=e._overwrite==="auto"&&!sh,v=e.timeline,x,T,E,b,S,R,H,k,O,I,G,J,Y;if(v&&(!f||!r)&&(r="none"),e._ease=Yr(r,oo.ease),e._yEase=h?Km(Yr(h===!0?r:h,oo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(k=m[0]?jr(m[0]).harness:0,J=k&&i[k.prop],x=Pl(i,uh),p&&(p._zTime<0&&p.progress(1),t<0&&u&&a&&!d?p.render(-1,!0):p.revert(u&&g?gl:xS),p._lazy=0),o){if(vr(e._startAt=It.set(m,Wn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t||!a&&!d)&&e._startAt.revert(gl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!p){if(t&&(a=!1),E=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Tn(l),immediateRender:a,stagger:0,parent:_},x),J&&(E[k.prop]=J),vr(e._startAt=It.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t?e._startAt.revert(gl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Tn(l)||l&&!g,T=0;T<m.length;T++){if(S=m[T],H=S._gsap||fh(m)[T]._gsap,e._ptLookup[T]=I={},vu[H.id]&&mr.length&&Ll(),G=M===m?T:M.indexOf(S),k&&(O=new k).init(S,J||x,e,G,M)!==!1&&(e._pt=b=new En(e._pt,S,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(q){I[q]=b}),O.priority&&(R=1)),!k||J)for(E in x)Nn[E]&&(O=Qm(E,x,e,G,S,M))?O.priority&&(R=1):I[E]=b=ph.call(e,S,E,"get",x[E],G,M,0,i.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),y&&e._pt&&(cr=e,wt.killTweensOf(S,I,e.globalTime(t)),Y=!e.parent,cr=0),e._pt&&l&&(vu[H.id]=1)}R&&sg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&v.render(ei,!0,!0)},XS=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Tu=1,e.vars[t]="+=0",mh(e,a),Tu=0,l?fa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=At(n)+rn(h.e)),h.b&&(h.b=u.s+rn(h.b))},jS=function(e,t){var n=e[0]?jr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=ao({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},qS=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(on(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Yo=function(e,t,n,i,r){return Et(e)?e.call(t,n,i,r):Xt(e)&&~e.indexOf("random(")?pa(e):e},eg=hh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tg={};Cn(eg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return tg[s]=1});var It=function(s){vm(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:jo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,M=i.parent||wt,y=(on(n)||bm(n)?ji(n[0]):"length"in i)?[n]:ti(n),v,x,T,E,b,S,R,H;if(a._targets=y.length?fh(y):fa("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||$a(c)||$a(u)){if(i=a.vars,v=a.timeline=new vn({data:"nested",defaults:p||{},targets:M&&M.data==="nested"?M.vars.targets:y}),v.kill(),v.parent=v._dp=Fi(a),v._start=0,f||$a(c)||$a(u)){if(E=y.length,R=f&&Um(f),Ci(f))for(b in f)~eg.indexOf(b)&&(H||(H={}),H[b]=f[b]);for(x=0;x<E;x++)T=Pl(i,tg),T.stagger=0,_&&(T.yoyoEase=_),H&&ao(T,H),S=y[x],T.duration=+Yo(c,Fi(a),x,S,y),T.delay=(+Yo(u,Fi(a),x,S,y)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),v.to(S,T,R?R(x,S,y):0),v._ease=at.none;v.duration()?c=u=0:a.timeline=0}else if(g){jo(Wn(v.vars.defaults,{ease:"none"})),v._ease=Yr(g.ease||i.ease||"none");var k=0,O,I,G;if(on(g))g.forEach(function(J){return v.to(y,J,">")}),v.duration();else{T={};for(b in g)b==="ease"||b==="easeEach"||qS(b,g[b],T,g.easeEach);for(b in T)for(O=T[b].sort(function(J,Y){return J.t-Y.t}),k=0,x=0;x<O.length;x++)I=O[x],G={ease:I.e,duration:(I.t-(x?O[x-1].t:0))/100*c},G[b]=I.v,v.to(y,G,k),k+=G.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!sh&&(cr=Fi(a),wt.killTweensOf(y),cr=0),xi(M,Fi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Nt(M._time)&&Tn(h)&&SS(Fi(a))&&M.data!=="nested")&&(a._tTime=-vt,a.render(Math.max(0,-u)||0)),m&&Nm(Fi(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-vt&&!u?l:i<vt?0:i,f,d,g,p,m,_,M,y,v;if(!c)CS(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,r,o);if(f=Nt(h%p),h===l?(g=this._repeat,f=c):(m=Nt(h/p),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=c-f),m=lo(this._tTime,p),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(y&&this._yEase&&$m(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&f!==p&&this._initted&&(this._lock=o=1,this.render(Nt(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Fm(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&h&&!r&&!m&&(Bn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&yu(this,i,r,o),Bn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Bn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&yu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&vr(this,1),!r&&!(u&&!a)&&(h||a||_)&&(Bn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){ma||kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||mh(this,c),u=this._ease(c/this._dur),XS(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):($l(this,0),this.parent||Im(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Fo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$t),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,cr&&cr.vars.overwrite!==!0)._first||Fo(this),this.parent&&o!==this.timeline.totalDuration()&&co(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ti(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,p,m,_;if((!r||r==="all")&&MS(a,l))return r==="all"&&(this._pt=0),Fo(this);for(h=this._op=this._op||[],r!=="all"&&(Xt(r)&&(p={},Cn(r,function(M){return p[M]=1}),r=p),r=jS(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],r==="all"?(h[_]=r,g=f,d={}):(d=h[_]=h[_]||{},g=r);for(p in g)m=f&&f[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&Yl(this,m,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&u&&Fo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return qo(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return qo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return wt.killTweensOf(i,r,o)},e}(ga);Wn(It.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(s){It[s]=function(){var e=new vn,t=Mu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var gh=function(e,t,n){return e[t]=n},ng=function(e,t,n){return e[t](n)},YS=function(e,t,n,i){return e[t](i.fp,n)},KS=function(e,t,n){return e.setAttribute(t,n)},_h=function(e,t){return Et(e[t])?ng:oh(e[t])&&e.setAttribute?KS:gh},ig=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$S=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},xh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ZS=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},JS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Yl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},QS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},sg=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},En=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||ig,this.d=l||this,this.set=c||gh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=QS,this.m=n,this.mt=r,this.tween=i},s}();Cn(hh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return uh[s]=1});Hn.TweenMax=Hn.TweenLite=It;Hn.TimelineLite=Hn.TimelineMax=vn;wt=new vn({sortChildren:!1,defaults:oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=Ym;var Kr=[],xl={},e1=[],zd=0,t1=0,qc=function(e){return(xl[e]||e1).map(function(t){return t()})},Cu=function(){var e=Date.now(),t=[];e-zd>2&&(qc("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=pi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),qc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zd=e,qc("matchMedia"))},og=function(){function s(t,n){this.selector=n&&wu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=t1++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Et(n)&&(r=i,i=n,n=Et);var o=this,a=function(){var c=Mt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=wu(r)),Mt=o,h=i.apply(o,arguments),Et(h)&&o._r.push(h),Mt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Et?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Mt;Mt=null,n(this),Mt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof It&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof It)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Kr.length;o--;)Kr[o].id===this.id&&Kr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),n1=function(){function s(t){this.contexts=[],this.scope=t,Mt&&Mt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Ci(n)||(n={matches:n});var o=new og(0,r||this.scope),a=o.conditions={},l,c,u;Mt&&!o.selector&&(o.selector=Mt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=pi.matchMedia(n[c]),l&&(Kr.indexOf(o)<0&&Kr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Cu):l.addEventListener("change",Cu)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Dl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xm(i)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Xt(e)&&(e=ti(e)[0]);var r=jr(e||{}).get,o=n?Dm:Rm;return n==="native"&&(n=""),e&&(t?o((Nn[t]&&Nn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Nn[a]&&Nn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ti(e),e.length>1){var i=e.map(function(u){return Ln.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Nn[t],a=jr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;zs._pt=0,h.init(e,n?u+n:u,zs,0,[e]),h.render(1,h),zs._pt&&xh(1,zs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Ln.to(e,Wn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,oo.ease)),Id(oo,e||{})},config:function(e){return Id(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Hn[a]&&fa(t+" effect requires "+a+" plugin.")}),Hc[t]=function(a,l,c){return n(ti(a),Wn(l||{},r),c)},o&&(vn.prototype[t]=function(a,l,c){return this.add(Hc[t](a,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):at},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),i,r;for(n.smoothChildTiming=Tn(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,i=wt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof It&&i.vars.onComplete===i._targets[0]))&&xi(n,i,i._start-i._delay),i=r;return xi(wt,n,0),n},context:function(e,t){return e?new og(e,t):Mt},matchMedia:function(e){return new n1(e)},matchMediaRefresh:function(){return Kr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Cu()},addEventListener:function(e,t){var n=xl[e]||(xl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:OS,wrapYoyo:NS,distribute:Um,random:Vm,snap:Bm,normalize:IS,getUnit:rn,clamp:LS,splitColor:jm,toArray:ti,selector:wu,mapRange:Hm,pipe:RS,unitize:DS,interpolate:FS,shuffle:zm},install:Cm,effects:Hc,ticker:kn,updateRoot:vn.updateRoot,plugins:Nn,globalTimeline:wt,core:{PropTween:En,globals:Em,Tween:It,Timeline:vn,Animation:ga,getCache:jr,_removeLinkedListItem:Yl,reverting:function(){return $t},context:function(e){return e&&Mt&&(Mt.data.push(e),e._ctx=Mt),Mt},suppressOverwrites:function(e){return sh=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Dl[s]=It[s]});kn.add(vn.updateRoot);zs=Dl.to({},{duration:0});var i1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},r1=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=i1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Yc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Xt(r)&&(l={},Cn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}r1(a,r)}}}},Ln=Dl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)$t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Yc("roundProps",Su),Yc("modifiers"),Yc("snap",Bm))||Dl;It.version=vn.version=Ln.version="3.13.0";Tm=1;ah()&&uo();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ud,ur,qs,vh,Br,Bd,yh,s1=function(){return typeof window<"u"},qi={},Ir=180/Math.PI,Ys=Math.PI/180,Ls=Math.atan2,Vd=1e8,bh=/([A-Z])/g,o1=/(left|right|width|margin|padding|x)/i,a1=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Eu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},l1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},c1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},u1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ag=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},h1=function(e,t,n){return e.style[t]=n},f1=function(e,t,n){return e.style.setProperty(t,n)},d1=function(e,t,n){return e._gsap[t]=n},p1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},m1=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},g1=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},St="transform",An=St+"Origin",_1=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in qi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ki(i,a)}):this.tfm[e]=o.x?o[e]:ki(i,e),e===An&&(this.tfm.zOrigin=o.zOrigin);else return vi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(St)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=St}(r||t)&&this.props.push(e,t,r[e])},cg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},x1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(bh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=yh(),(!r||!r.isStart)&&!n[St]&&(cg(n),i.zOrigin&&n[An]&&(n[An]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ug=function(e,t){var n={target:e,props:[],revert:x1,save:_1};return e._gsap||Ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},hg,Au=function(e,t){var n=ur.createElementNS?ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ur.createElement(e);return n&&n.style?n:ur.createElement(e)},ni=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(bh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ho(t)||t,1)||""},Gd="O,Moz,ms,Ms,Webkit".split(","),ho=function(e,t,n){var i=t||Br,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Gd[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Gd[o]:"")+e},Lu=function(){s1()&&window.document&&(Ud=window,ur=Ud.document,qs=ur.documentElement,Br=Au("div")||{style:{}},Au("div"),St=ho(St),An=St+"Origin",Br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hg=!!ho("perspective"),yh=Ln.core.reverting,vh=1)},Hd=function(e){var t=e.ownerSVGElement,n=Au("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),qs.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),qs.removeChild(n),r},Wd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fg=function(e){var t,n;try{t=e.getBBox()}catch{t=Hd(e),n=1}return t&&(t.width||t.height)||n||(t=Hd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Wd(e,["x","cx","x1"])||0,y:+Wd(e,["y","cy","y1"])||0,width:0,height:0}:t},dg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fg(e))},is=function(e,t){if(t){var n=e.style,i;t in qi&&t!==An&&(t=St),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(bh,"-$1").toLowerCase())):n.removeAttribute(t)}},hr=function(e,t,n,i,r,o){var a=new En(e._pt,t,n,0,1,o?lg:ag);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Xd={deg:1,rad:1,turn:1},v1={grid:1,flex:1},yr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Br.style,l=o1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,p,m,_;if(i===o||!r||Xd[i]||Xd[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),_=e.getCTM&&dg(e),(d||o==="%")&&(qi[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[u],At(d?r/g*h:r/100*g);if(a[l?"width":"height"]=h+(f?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===ur||!p.appendChild)&&(p=ur.body),m=p._gsap,m&&d&&m.width&&l&&m.time===kn.time&&!m.uncache)return At(r/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:is(e,t)}else(d||o==="%")&&!v1[ni(p,"display")]&&(a.position=ni(e,"position")),p===e&&(a.position="static"),p.appendChild(Br),g=Br[u],p.removeChild(Br),a.position="absolute";return l&&d&&(m=jr(p),m.time=kn.time,m.width=p[u]),At(f?g*r/h:g&&r?h/g*r:0)},ki=function(e,t,n,i){var r;return vh||Lu(),t in vi&&t!=="transform"&&(t=vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(r=xa(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ol(ni(e,An))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Il[t]&&Il[t](e,t,n)||ni(e,t)||Lm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?yr(e,t,r,n)+n:r},y1=function(e,t,n,i){if(!n||n==="none"){var r=ho(t,e,1),o=r&&ni(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=ni(e,"borderTopColor"))}var a=new En(this._pt,e.style,t,0,1,rg),l=0,c=0,u,h,f,d,g,p,m,_,M,y,v,x;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ni(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[t],e.style[t]=i,i=ni(e,t)||i,p?e.style[t]=p:is(e,t)),u=[n,i],Ym(u),n=u[0],i=u[1],f=n.match(ks)||[],x=i.match(ks)||[],x.length){for(;h=ks.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(p=f[c++]||"")&&(d=parseFloat(p)||0,v=p.substr((d+"").length),m.charAt(1)==="="&&(m=js(d,m)+v),_=parseFloat(m),y=m.substr((_+"").length),l=ks.lastIndex-y.length,y||(y=y||Gn.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(d=yr(e,t,p,y)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:_-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?lg:ag;return wm.test(i)&&(a.e=0),this._pt=a,a},jd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},b1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=jd[n]||n,t[1]=jd[i]||i,t.join(" ")},M1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],qi[a]&&(l=1,a=a==="transformOrigin"?An:St),is(n,a);l&&(is(n,St),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",xa(n,1),o.uncache=1,cg(i)))}},Il={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new En(e._pt,t,n,0,0,M1);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},_a=[1,0,0,1,0,0],pg={},mg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qd=function(e){var t=ni(e,St);return mg(t)?_a:t.substr(7).match(Mm).map(At)},Mh=function(e,t){var n=e._gsap||jr(e),i=e.style,r=qd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?_a:r):(r===_a&&!e.offsetParent&&e!==qs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,qs.appendChild(e)),r=qd(e),l?i.display=l:is(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):qs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Pu=function(e,t,n,i,r,o){var a=e._gsap,l=r||Mh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],p=l[2],m=l[3],_=l[4],M=l[5],y=t.split(" "),v=parseFloat(y[0])||0,x=parseFloat(y[1])||0,T,E,b,S;n?l!==_a&&(E=d*m-g*p)&&(b=v*(m/E)+x*(-p/E)+(p*M-m*_)/E,S=v*(-g/E)+x*(d/E)-(d*M-g*_)/E,v=b,x=S):(T=fg(e),v=T.x+(~y[0].indexOf("%")?v/100*T.width:v),x=T.y+(~(y[1]||y[0]).indexOf("%")?x/100*T.height:x)),i||i!==!1&&a.smooth?(_=v-c,M=x-u,a.xOffset=h+(_*d+M*p)-_,a.yOffset=f+(_*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=x,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[An]="0px 0px",o&&(hr(o,a,"xOrigin",c,v),hr(o,a,"yOrigin",u,x),hr(o,a,"xOffset",h,a.xOffset),hr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+x)},xa=function(e,t){var n=e._gsap||new Jm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ni(e,An)||"0",u,h,f,d,g,p,m,_,M,y,v,x,T,E,b,S,R,H,k,O,I,G,J,Y,q,re,P,fe,W,ne,le,ue;return u=h=f=p=m=_=M=y=v=0,d=g=1,n.svg=!!(e.getCTM&&dg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[St]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[St]!=="none"?l[St]:"")),i.scale=i.rotate=i.translate="none"),E=Mh(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Pu(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),x=n.xOrigin||0,T=n.yOrigin||0,E!==_a&&(H=E[0],k=E[1],O=E[2],I=E[3],u=G=E[4],h=J=E[5],E.length===6?(d=Math.sqrt(H*H+k*k),g=Math.sqrt(I*I+O*O),p=H||k?Ls(k,H)*Ir:0,M=O||I?Ls(O,I)*Ir+p:0,M&&(g*=Math.abs(Math.cos(M*Ys))),n.svg&&(u-=x-(x*H+T*O),h-=T-(x*k+T*I))):(ue=E[6],ne=E[7],P=E[8],fe=E[9],W=E[10],le=E[11],u=E[12],h=E[13],f=E[14],b=Ls(ue,W),m=b*Ir,b&&(S=Math.cos(-b),R=Math.sin(-b),Y=G*S+P*R,q=J*S+fe*R,re=ue*S+W*R,P=G*-R+P*S,fe=J*-R+fe*S,W=ue*-R+W*S,le=ne*-R+le*S,G=Y,J=q,ue=re),b=Ls(-O,W),_=b*Ir,b&&(S=Math.cos(-b),R=Math.sin(-b),Y=H*S-P*R,q=k*S-fe*R,re=O*S-W*R,le=I*R+le*S,H=Y,k=q,O=re),b=Ls(k,H),p=b*Ir,b&&(S=Math.cos(b),R=Math.sin(b),Y=H*S+k*R,q=G*S+J*R,k=k*S-H*R,J=J*S-G*R,H=Y,G=q),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),d=At(Math.sqrt(H*H+k*k+O*O)),g=At(Math.sqrt(J*J+ue*ue)),b=Ls(G,J),M=Math.abs(b)>2e-4?b*Ir:0,v=le?1/(le<0?-le:le):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!mg(ni(e,St)),Y&&e.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(d*=-1,M+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=At(d),n.scaleY=At(g),n.rotation=At(p)+a,n.rotationX=At(m)+a,n.rotationY=At(_)+a,n.skewX=M+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[An]=Ol(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?S1:hg?gg:w1,n.uncache=0,n},Ol=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kc=function(e,t,n){var i=rn(t);return At(parseFloat(t)+parseFloat(yr(e,"x",n+"px",i)))+i},w1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gg(e,t)},Ar="0deg",Ro="0px",Lr=") ",gg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,M=n.target,y=n.zOrigin,v="",x=_==="auto"&&e&&e!==1||_===!0;if(y&&(h!==Ar||u!==Ar)){var T=parseFloat(u)*Ys,E=Math.sin(T),b=Math.cos(T),S;T=parseFloat(h)*Ys,S=Math.cos(T),o=Kc(M,o,E*S*-y),a=Kc(M,a,-Math.sin(T)*-y),l=Kc(M,l,b*S*-y+y)}m!==Ro&&(v+="perspective("+m+Lr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(x||o!==Ro||a!==Ro||l!==Ro)&&(v+=l!==Ro||x?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Lr),c!==Ar&&(v+="rotate("+c+Lr),u!==Ar&&(v+="rotateY("+u+Lr),h!==Ar&&(v+="rotateX("+h+Lr),(f!==Ar||d!==Ar)&&(v+="skew("+f+", "+d+Lr),(g!==1||p!==1)&&(v+="scale("+g+", "+p+Lr),M.style[St]=v||"translate(0, 0)"},S1=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,M=n.forceCSS,y=parseFloat(o),v=parseFloat(a),x,T,E,b,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ys,c*=Ys,x=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(u*=Ys,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,b*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),x*=S,T*=S)),x=At(x),T=At(T),E=At(E),b=At(b)):(x=h,b=f,T=E=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=yr(d,"x",o,"px"),v=yr(d,"y",a,"px")),(g||p||m||_)&&(y=At(y+g-(g*x+p*E)+m),v=At(v+p-(g*T+p*b)+_)),(i||r)&&(S=d.getBBox(),y=At(y+i/100*S.width),v=At(v+r/100*S.height)),S="matrix("+x+","+T+","+E+","+b+","+y+","+v+")",d.setAttribute("transform",S),M&&(d.style[St]=S)},T1=function(e,t,n,i,r){var o=360,a=Xt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ir:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Vd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Vd)%o-~~(c/o)*o)),e._pt=f=new En(e._pt,t,n,i,c,l1),f.e=u,f.u="deg",e._props.push(n),f},Yd=function(e,t){for(var n in t)e[n]=t[n];return e},C1=function(e,t,n){var i=Yd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[St]=t,a=xa(n,1),is(n,St),n.setAttribute("transform",c)):(c=getComputedStyle(n)[St],o[St]=t,a=xa(n,1),o[St]=c);for(l in qi)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=rn(c),g=rn(u),h=d!==g?yr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new En(e._pt,a,l,h,f-h,Eu),e._pt.u=g||0,e._props.push(l));Yd(a,i)};Cn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Il[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return ki(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,p){return d[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,h)}});var _g={name:"css",register:Lu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,p,m,_,M,y,v,x,T,E,b;vh||Lu(),this.styles=this.styles||ug(e),b=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Nn[p]&&Qm(p,t,n,i,e,r)))){if(d=typeof u,g=Il[p],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=pa(u)),g)g(this,e,p,u,n)&&(E=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",gr.lastIndex=0,gr.test(c)||(m=rn(c),_=rn(u)),_?m!==_&&(c=yr(e,p,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,p),o.push(p),b.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,r):l[p],Xt(c)&&~c.indexOf("random(")&&(c=pa(c)),rn(c+"")||c==="auto"||(c+=Gn.units[p]||rn(ki(e,p))||""),(c+"").charAt(1)==="="&&(c=ki(e,p))):c=ki(e,p),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),p in vi&&(p==="autoAlpha"&&(f===1&&ki(e,"visibility")==="hidden"&&h&&(f=0),b.push("visibility",0,a.visibility),hr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=vi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in qi,y){if(this.styles.save(p),d==="string"&&u.substring(0,6)==="var(--"&&(u=ni(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(x=e._gsap,x.renderTransform&&!t.parseTransform||xa(e,t.parseTransform),T=t.smoothOrigin!==!1&&x.smooth,v=this._pt=new En(this._pt,a,St,0,1,x.renderTransform,x,0,-1),v.dep=1),p==="scale")this._pt=new En(this._pt,x,"scaleY",x.scaleY,(M?js(x.scaleY,M+h):h)-x.scaleY||0,Eu),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){b.push(An,0,a[An]),u=b1(u),x.svg?Pu(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&hr(this,x,"zOrigin",x.zOrigin,_),hr(this,a,p,Ol(c),Ol(u)));continue}else if(p==="svgOrigin"){Pu(e,u,1,T,0,this);continue}else if(p in pg){T1(this,x,p,f,M?js(f,M+u):u);continue}else if(p==="smoothOrigin"){hr(this,x,"smooth",x.smooth,u);continue}else if(p==="force3D"){x[p]=u;continue}else if(p==="transform"){C1(this,u,e);continue}}else p in a||(p=ho(p)||p);if(y||(h||h===0)&&(f||f===0)&&!a1.test(u)&&p in a)m=(c+"").substr((f+"").length),h||(h=0),_=rn(u)||(p in Gn.units?Gn.units[p]:m),m!==_&&(f=yr(e,p,c,_)),this._pt=new En(this._pt,y?x:a,p,f,(M?js(f,M+h):h)-f,!y&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?u1:Eu),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=c1);else if(p in a)y1.call(this,e,p,c,M?M+u:u);else if(p in e)this.add(e,p,c||e[p],M?M+u:u,i,r);else if(p!=="parseTransform"){ch(p,u);continue}y||(p in a?b.push(p,0,a[p]):typeof e[p]=="function"?b.push(p,2,e[p]()):b.push(p,1,c||e[p])),o.push(p)}}E&&sg(this)},render:function(e,t){if(t.tween._time||!yh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ki,aliases:vi,getSetter:function(e,t,n){var i=vi[t];return i&&i.indexOf(",")<0&&(t=i),t in qi&&t!==An&&(e._gsap.x||ki(e,"x"))?n&&Bd===n?t==="scale"?p1:d1:(Bd=n||{})&&(t==="scale"?m1:g1):e.style&&!oh(e.style[t])?h1:~t.indexOf("-")?f1:_h(e,t)},core:{_removeProperty:is,_getMatrix:Mh}};Ln.utils.checkPrefix=ho;Ln.core.getStyleSaver=ug;(function(s,e,t,n){var i=Cn(s+","+e+","+t,function(r){qi[r]=1});Cn(e,function(r){Gn.units[r]="deg",pg[r]=1}),vi[i[13]]=s+","+e,Cn(n,function(r){var o=r.split(":");vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Gn.units[s]="px"});Ln.registerPlugin(_g);var Yi=Ln.registerPlugin(_g)||Ln;Yi.core.Tween;function Kd(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function E1(s,e,t){return e&&Kd(s.prototype,e),t&&Kd(s,t),s}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qt,vl,zn,fr,dr,Ks,xg,Or,Ko,vg,Gi,li,yg,bg=function(){return qt||typeof window<"u"&&(qt=window.gsap)&&qt.registerPlugin&&qt},Mg=1,Us=[],tt=[],Si=[],$o=Date.now,Ru=function(e,t){return t},A1=function(){var e=Ko.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,Si),tt=n,Si=i,Ru=function(o,a){return t[o](a)}},_r=function(e,t){return~Si.indexOf(e)&&Si[Si.indexOf(e)+1][t]},Zo=function(e){return!!~vg.indexOf(e)},un=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Za="scrollLeft",Ja="scrollTop",Du=function(){return Gi&&Gi.isPressed||tt.cache++},Nl=function(e,t){var n=function i(r){if(r||r===0){Mg&&(zn.history.scrollRestoration="manual");var o=Gi&&Gi.isPressed;r=i.v=Math.round(r)||(Gi&&Gi.iOS?1:0),e(r),i.cacheID=tt.cache,o&&Ru("ss",r)}else(t||tt.cache!==i.cacheID||Ru("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},yn={s:Za,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Nl(function(s){return arguments.length?zn.scrollTo(s,Ut.sc()):zn.pageXOffset||fr[Za]||dr[Za]||Ks[Za]||0})},Ut={s:Ja,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:Nl(function(s){return arguments.length?zn.scrollTo(yn.sc(),s):zn.pageYOffset||fr[Ja]||dr[Ja]||Ks[Ja]||0})},Mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||qt.utils.toArray)(e)[0]||(typeof e=="string"&&qt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},L1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},br=function(e,t){var n=t.s,i=t.sc;Zo(e)&&(e=fr.scrollingElement||dr);var r=tt.indexOf(e),o=i===Ut.sc?1:2;!~r&&(r=tt.push(e)-1),tt[r+o]||un(e,"scroll",Du);var a=tt[r+o],l=a||(tt[r+o]=Nl(_r(e,n),!0)||(Zo(e)?i:Nl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=qt.getProperty(e,"scrollBehavior")==="smooth"),l},Iu=function(e,t,n){var i=e,r=e,o=$o(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,p){var m=$o();p||m-o>l?(r=i,i=g,a=o,o=m):n?i+=g:i=r+(g-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(g){var p=a,m=r,_=$o();return(g||g===0)&&g!==i&&u(g),o===a||_-a>c?0:(i+(n?m:-m))/((n?_:o)-p)*1e3};return{update:u,reset:h,getVelocity:f}},Do=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},$d=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},wg=function(){Ko=qt.core.globals().ScrollTrigger,Ko&&Ko.core&&A1()},Sg=function(e){return qt=e||bg(),!vl&&qt&&typeof document<"u"&&document.body&&(zn=window,fr=document,dr=fr.documentElement,Ks=fr.body,vg=[zn,fr,dr,Ks],qt.utils.clamp,yg=qt.core.context||function(){},Or="onpointerenter"in Ks?"pointer":"mouse",xg=Lt.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=Lt.eventTypes=("ontouchstart"in dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Mg=0},500),wg(),vl=1),vl};yn.op=Ut;tt.cache=0;var Lt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){vl||Sg(qt)||console.warn("Please gsap.registerPlugin(Observer)"),Ko||wg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,p=n.event,m=n.onDragStart,_=n.onDragEnd,M=n.onDrag,y=n.onPress,v=n.onRelease,x=n.onRight,T=n.onLeft,E=n.onUp,b=n.onDown,S=n.onChangeX,R=n.onChangeY,H=n.onChange,k=n.onToggleX,O=n.onToggleY,I=n.onHover,G=n.onHoverEnd,J=n.onMove,Y=n.ignoreCheck,q=n.isNormalizer,re=n.onGestureStart,P=n.onGestureEnd,fe=n.onWheel,W=n.onEnable,ne=n.onDisable,le=n.onClick,ue=n.scrollSpeed,X=n.capture,Ae=n.allowClicks,Me=n.lockAxis,be=n.onLockAxis;this.target=a=Mn(a)||dr,this.vars=n,d&&(d=qt.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,ue=ue||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(zn.getComputedStyle(Ks).lineHeight)||22);var ge,ke,De,pe,qe,lt,ot,j=this,Je=0,ie=0,B=n.passive||!u&&n.passive!==!1,ae=br(a,yn),C=br(a,Ut),w=ae(),V=C(),te=~o.indexOf("touch")&&!~o.indexOf("pointer")&&li[0]==="pointerdown",ce=Zo(a),se=a.ownerDocument||fr,we=[0,0,0],L=[0,0,0],N=0,de=function(){return N=$o()},ee=function(Pe,je){return(j.event=Pe)&&d&&L1(Pe.target,d)||je&&te&&Pe.pointerType!=="touch"||Y&&Y(Pe,je)},_e=function(){j._vx.reset(),j._vy.reset(),ke.pause(),h&&h(j)},Se=function(){var Pe=j.deltaX=$d(we),je=j.deltaY=$d(L),ve=Math.abs(Pe)>=i,Ve=Math.abs(je)>=i;H&&(ve||Ve)&&H(j,Pe,je,we,L),ve&&(x&&j.deltaX>0&&x(j),T&&j.deltaX<0&&T(j),S&&S(j),k&&j.deltaX<0!=Je<0&&k(j),Je=j.deltaX,we[0]=we[1]=we[2]=0),Ve&&(b&&j.deltaY>0&&b(j),E&&j.deltaY<0&&E(j),R&&R(j),O&&j.deltaY<0!=ie<0&&O(j),ie=j.deltaY,L[0]=L[1]=L[2]=0),(pe||De)&&(J&&J(j),De&&(m&&De===1&&m(j),M&&M(j),De=0),pe=!1),lt&&!(lt=!1)&&be&&be(j),qe&&(fe(j),qe=!1),ge=0},Te=function(Pe,je,ve){we[ve]+=Pe,L[ve]+=je,j._vx.update(Pe),j._vy.update(je),c?ge||(ge=requestAnimationFrame(Se)):Se()},Be=function(Pe,je){Me&&!ot&&(j.axis=ot=Math.abs(Pe)>Math.abs(je)?"x":"y",lt=!0),ot!=="y"&&(we[2]+=Pe,j._vx.update(Pe,!0)),ot!=="x"&&(L[2]+=je,j._vy.update(je,!0)),c?ge||(ge=requestAnimationFrame(Se)):Se()},ze=function(Pe){if(!ee(Pe,1)){Pe=Do(Pe,u);var je=Pe.clientX,ve=Pe.clientY,Ve=je-j.x,Ie=ve-j.y,Ge=j.isDragging;j.x=je,j.y=ve,(Ge||(Ve||Ie)&&(Math.abs(j.startX-je)>=r||Math.abs(j.startY-ve)>=r))&&(De=Ge?2:1,Ge||(j.isDragging=!0),Be(Ve,Ie))}},Ke=j.onPress=function(Ce){ee(Ce,1)||Ce&&Ce.button||(j.axis=ot=null,ke.pause(),j.isPressed=!0,Ce=Do(Ce),Je=ie=0,j.startX=j.x=Ce.clientX,j.startY=j.y=Ce.clientY,j._vx.reset(),j._vy.reset(),un(q?a:se,li[1],ze,B,!0),j.deltaX=j.deltaY=0,y&&y(j))},D=j.onRelease=function(Ce){if(!ee(Ce,1)){cn(q?a:se,li[1],ze,!0);var Pe=!isNaN(j.y-j.startY),je=j.isDragging,ve=je&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),Ve=Do(Ce);!ve&&Pe&&(j._vx.reset(),j._vy.reset(),u&&Ae&&qt.delayedCall(.08,function(){if($o()-N>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(se.createEvent){var Ie=se.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,zn,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(Ie)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,h&&je&&!q&&ke.restart(!0),De&&Se(),_&&je&&_(j),v&&v(j,ve)}},Q=function(Pe){return Pe.touches&&Pe.touches.length>1&&(j.isGesturing=!0)&&re(Pe,j.isDragging)},oe=function(){return(j.isGesturing=!1)||P(j)},he=function(Pe){if(!ee(Pe)){var je=ae(),ve=C();Te((je-w)*ue,(ve-V)*ue,1),w=je,V=ve,h&&ke.restart(!0)}},me=function(Pe){if(!ee(Pe)){Pe=Do(Pe,u),fe&&(qe=!0);var je=(Pe.deltaMode===1?l:Pe.deltaMode===2?zn.innerHeight:1)*g;Te(Pe.deltaX*je,Pe.deltaY*je,0),h&&!q&&ke.restart(!0)}},Xe=function(Pe){if(!ee(Pe)){var je=Pe.clientX,ve=Pe.clientY,Ve=je-j.x,Ie=ve-j.y;j.x=je,j.y=ve,pe=!0,h&&ke.restart(!0),(Ve||Ie)&&Be(Ve,Ie)}},ut=function(Pe){j.event=Pe,I(j)},it=function(Pe){j.event=Pe,G(j)},Ft=function(Pe){return ee(Pe)||Do(Pe,u)&&le(j)};ke=j._dc=qt.delayedCall(f||.25,_e).pause(),j.deltaX=j.deltaY=0,j._vx=Iu(0,50,!0),j._vy=Iu(0,50,!0),j.scrollX=ae,j.scrollY=C,j.isDragging=j.isGesturing=j.isPressed=!1,yg(this),j.enable=function(Ce){return j.isEnabled||(un(ce?se:a,"scroll",Du),o.indexOf("scroll")>=0&&un(ce?se:a,"scroll",he,B,X),o.indexOf("wheel")>=0&&un(a,"wheel",me,B,X),(o.indexOf("touch")>=0&&xg||o.indexOf("pointer")>=0)&&(un(a,li[0],Ke,B,X),un(se,li[2],D),un(se,li[3],D),Ae&&un(a,"click",de,!0,!0),le&&un(a,"click",Ft),re&&un(se,"gesturestart",Q),P&&un(se,"gestureend",oe),I&&un(a,Or+"enter",ut),G&&un(a,Or+"leave",it),J&&un(a,Or+"move",Xe)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=pe=De=!1,j._vx.reset(),j._vy.reset(),w=ae(),V=C(),Ce&&Ce.type&&Ke(Ce),W&&W(j)),j},j.disable=function(){j.isEnabled&&(Us.filter(function(Ce){return Ce!==j&&Zo(Ce.target)}).length||cn(ce?se:a,"scroll",Du),j.isPressed&&(j._vx.reset(),j._vy.reset(),cn(q?a:se,li[1],ze,!0)),cn(ce?se:a,"scroll",he,X),cn(a,"wheel",me,X),cn(a,li[0],Ke,X),cn(se,li[2],D),cn(se,li[3],D),cn(a,"click",de,!0),cn(a,"click",Ft),cn(se,"gesturestart",Q),cn(se,"gestureend",oe),cn(a,Or+"enter",ut),cn(a,Or+"leave",it),cn(a,Or+"move",Xe),j.isEnabled=j.isPressed=j.isDragging=!1,ne&&ne(j))},j.kill=j.revert=function(){j.disable();var Ce=Us.indexOf(j);Ce>=0&&Us.splice(Ce,1),Gi===j&&(Gi=0)},Us.push(j),q&&Zo(a)&&(Gi=j),j.enable(p)},E1(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Lt.version="3.13.0";Lt.create=function(s){return new Lt(s)};Lt.register=Sg;Lt.getAll=function(){return Us.slice()};Lt.getById=function(s){return Us.filter(function(e){return e.vars.id===s})[0]};bg()&&qt.registerPlugin(Lt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Le,Os,et,bt,Fn,pt,wh,Fl,va,Jo,zo,Qa,en,Zl,Ou,pn,Zd,Jd,Ns,Tg,$c,Cg,dn,Nu,Eg,Ag,rr,Fu,Sh,$s,Th,kl,ku,Zc,el=1,tn=Date.now,Jc=tn(),ii=0,Uo=0,Qd=function(e,t,n){var i=On(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},ep=function(e,t){return t&&(!On(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},P1=function s(){return Uo&&requestAnimationFrame(s)},tp=function(){return Zl=1},np=function(){return Zl=0},mi=function(e){return e},Bo=function(e){return Math.round(e*1e5)/1e5||0},Lg=function(){return typeof window<"u"},Pg=function(){return Le||Lg()&&(Le=window.gsap)&&Le.registerPlugin&&Le},rs=function(e){return!!~wh.indexOf(e)},Rg=function(e){return(e==="Height"?Th:et["inner"+e])||Fn["client"+e]||pt["client"+e]},Dg=function(e){return _r(e,"getBoundingClientRect")||(rs(e)?function(){return Sl.width=et.innerWidth,Sl.height=Th,Sl}:function(){return Ui(e)})},R1=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=_r(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Rg(r):e["client"+r])||0}},D1=function(e,t){return!t||~Si.indexOf(e)?Dg(e):function(){return Sl}},yi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=_r(e,n))?o()-Dg(e)()[r]:rs(e)?(Fn[n]||pt[n])-Rg(i):e[n]-e["offset"+i])},tl=function(e,t){for(var n=0;n<Ns.length;n+=3)(!t||~t.indexOf(Ns[n+1]))&&e(Ns[n],Ns[n+1],Ns[n+2])},On=function(e){return typeof e=="string"},sn=function(e){return typeof e=="function"},Vo=function(e){return typeof e=="number"},Nr=function(e){return typeof e=="object"},Io=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Qc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ps=Math.abs,Ig="left",Og="top",Ch="right",Eh="bottom",$r="width",Zr="height",Qo="Right",ea="Left",ta="Top",na="Bottom",Dt="padding",$n="margin",fo="Width",Ah="Height",zt="px",Zn=function(e){return et.getComputedStyle(e)},I1=function(e){var t=Zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ip=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ui=function(e,t){var n=t&&Zn(e)[Ou]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},zl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ng=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},O1=function(e){return function(t){return Le.utils.snap(Ng(e),t)}},Lh=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},N1=function(e){return function(t,n){return Lh(Ng(e))(t,n.direction)}},nl=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Wt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Ht=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},il=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},rp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rl={toggleActions:"play",anticipatePin:0},Ul={top:0,left:0,center:.5,bottom:1,right:1},yl=function(e,t){if(On(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ul?Ul[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sl=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=bt.createElement("div"),p=rs(n)||_r(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=p?pt:n,M=e.indexOf("start")!==-1,y=M?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(v+=(i===Ut?Ch:Eh)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],bl(g,0,i,M),g},bl=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+fo]=1,r["border"+a+fo]=0,r[n.p]=t+"px",Le.set(e,r)},Ze=[],zu={},ya,sp=function(){return tn()-ii>34&&(ya||(ya=requestAnimationFrame(Wi)))},Rs=function(){(!dn||!dn.isPressed||dn.startX>pt.clientWidth)&&(tt.cache++,dn?ya||(ya=requestAnimationFrame(Wi)):Wi(),ii||os("scrollStart"),ii=tn())},eu=function(){Ag=et.innerWidth,Eg=et.innerHeight},Go=function(e){tt.cache++,(e===!0||!en&&!Cg&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Nu||Ag!==et.innerWidth||Math.abs(et.innerHeight-Eg)>et.innerHeight*.25))&&Fl.restart(!0)},ss={},F1=[],Fg=function s(){return Ht(nt,"scrollEnd",s)||Vr(!0)},os=function(e){return ss[e]&&ss[e].map(function(t){return t()})||F1},In=[],kg=function(e){for(var t=0;t<In.length;t+=5)(!e||In[t+4]&&In[t+4].query===e)&&(In[t].style.cssText=In[t+1],In[t].getBBox&&In[t].setAttribute("transform",In[t+2]||""),In[t+3].uncache=1)},Ph=function(e,t){var n;for(pn=0;pn<Ze.length;pn++)n=Ze[pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));kl=!0,t&&kg(t),t||os("revert")},zg=function(e,t){tt.cache++,(t||!mn)&&tt.forEach(function(n){return sn(n)&&n.cacheID++&&(n.rec=0)}),On(e)&&(et.history.scrollRestoration=Sh=e)},mn,Jr=0,op,k1=function(){if(op!==Jr){var e=op=Jr;requestAnimationFrame(function(){return e===Jr&&Vr(!0)})}},Ug=function(){pt.appendChild($s),Th=!dn&&$s.offsetHeight||et.innerHeight,pt.removeChild($s)},ap=function(e){return va(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Vr=function(e,t){if(Fn=bt.documentElement,pt=bt.body,wh=[et,bt,Fn,pt],ii&&!e&&!kl){Wt(nt,"scrollEnd",Fg);return}Ug(),mn=nt.isRefreshing=!0,tt.forEach(function(i){return sn(i)&&++i.cacheID&&(i.rec=i())});var n=os("refreshInit");Tg&&nt.sort(),t||Ph(),tt.forEach(function(i){sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ze.slice(0).forEach(function(i){return i.refresh()}),kl=!1,Ze.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),ku=1,ap(!0),Ze.forEach(function(i){var r=yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),ap(!1),ku=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),zg(Sh,1),Fl.pause(),Jr++,mn=2,Wi(2),Ze.forEach(function(i){return sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),mn=nt.isRefreshing=!1,os("refresh")},Uu=0,Ml=1,ia,Wi=function(e){if(e===2||!mn&&!kl){nt.isUpdating=!0,ia&&ia.update(0);var t=Ze.length,n=tn(),i=n-Jc>=50,r=t&&Ze[0].scroll();if(Ml=Uu>r?-1:1,mn||(Uu=r),i&&(ii&&!Zl&&n-ii>200&&(ii=0,os("scrollEnd")),zo=Jc,Jc=n),Ml<0){for(pn=t;pn-- >0;)Ze[pn]&&Ze[pn].update(0,i);Ml=1}else for(pn=0;pn<t;pn++)Ze[pn]&&Ze[pn].update(0,i);nt.isUpdating=!1}ya=0},Bu=[Ig,Og,Eh,Ch,$n+na,$n+Qo,$n+ta,$n+ea,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],wl=Bu.concat([$r,Zr,"boxSizing","max"+fo,"max"+Ah,"position",$n,Dt,Dt+ta,Dt+Qo,Dt+na,Dt+ea]),z1=function(e,t,n){Zs(n);var i=e._gsap;if(i.spacerIsNative)Zs(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},tu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Bu.length,o=t.style,a=e.style,l;r--;)l=Bu[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Eh]=a[Ch]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[$r]=zl(e,yn)+zt,o[Zr]=zl(e,Ut)+zt,o[Dt]=a[$n]=a[Og]=a[Ig]="0",Zs(i),a[$r]=a["max"+fo]=n[$r],a[Zr]=a["max"+Ah]=n[Zr],a[Dt]=n[Dt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},U1=/([A-Z])/g,Zs=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(U1,"-$1").toLowerCase())}},ol=function(e){for(var t=wl.length,n=e.style,i=[],r=0;r<t;r++)i.push(wl[r],n[wl[r]]);return i.t=e,i},B1=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Sl={left:0,top:0},lp=function(e,t,n,i,r,o,a,l,c,u,h,f,d,g){sn(e)&&(e=e(l)),On(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?yl("0"+e.substr(3),n):0));var p=d?d.time():0,m,_,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Vo(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&bl(a,n,i,!0);else{sn(t)&&(t=t(l));var y=(e||"0").split(" "),v,x,T,E;M=Mn(t,l)||pt,v=Ui(M)||{},(!v||!v.left&&!v.top)&&Zn(M).display==="none"&&(E=M.style.display,M.style.display="block",v=Ui(M),E?M.style.display=E:M.style.removeProperty("display")),x=yl(y[0],v[i.d]),T=yl(y[1]||"0",n),e=v[i.p]-c[i.p]-u+x+r-T,a&&bl(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var b=e+n,S=o._isStart;m="scroll"+i.d2,bl(o,b,i,S&&b>20||!S&&(h?Math.max(pt[m],Fn[m]):o.parentNode[m])<=b+1),h&&(c=Ui(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+zt))}return d&&M&&(m=Ui(M),d.seek(f),_=Ui(M),d._caScrollDist=m[i.p]-_[i.p],e=e/d._caScrollDist*f),d&&d.seek(p),d?e:Math.round(e)},V1=/(webkit|moz|length|cssText|inset)/i,cp=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===pt){e._stOrig=r.cssText,a=Zn(e);for(o in a)!+o&&!V1.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},Bg=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},al=function(e,t,n){var i={};i[t.p]="+="+n,Le.set(e,i)},up=function(e,t){var n=br(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var p=Bg(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return p(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){tt.cache++,o.tween&&Wi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Le.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Wt(e,"wheel",n.wheelHandler),nt.isTouch&&Wt(e,"touchmove",n.wheelHandler),r},nt=function(){function s(t,n){Os||s.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Fu(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Uo){this.update=this.refresh=this.kill=mi;return}n=ip(On(n)||Vo(n)||n.nodeType?{trigger:n}:n,rl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,M=r.onSnapComplete,y=r.once,v=r.snap,x=r.pinReparent,T=r.pinSpacer,E=r.containerAnimation,b=r.fastScrollEnd,S=r.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:Ut,H=!h&&h!==0,k=Mn(n.scroller||et),O=Le.core.getCache(k),I=rs(k),G=("pinType"in n?n.pinType:_r(k,"pinType")||I&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=H&&n.toggleActions.split(" "),q="markers"in n?n.markers:rl.markers,re=I?0:parseFloat(Zn(k)["border"+R.p2+fo])||0,P=this,fe=n.onRefreshInit&&function(){return n.onRefreshInit(P)},W=R1(k,I,R),ne=D1(k,I),le=0,ue=0,X=0,Ae=br(k,R),Me,be,ge,ke,De,pe,qe,lt,ot,j,Je,ie,B,ae,C,w,V,te,ce,se,we,L,N,de,ee,_e,Se,Te,Be,ze,Ke,D,Q,oe,he,me,Xe,ut,it;if(P._startClamp=P._endClamp=!1,P._dir=R,m*=45,P.scroller=k,P.scroll=E?E.time.bind(E):Ae,ke=Ae(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Tg=1,n.refreshPriority===-9999&&(ia=P)),O.tweenScroll=O.tweenScroll||{top:up(k,Ut),left:up(k,yn)},P.tweenTo=Me=O.tweenScroll[R.p],P.scrubDuration=function(ve){Q=Vo(ve)&&ve,Q?D?D.duration(ve):D=Le.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return _&&_(P)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),ze=0,l||(l=i.vars.id)),v&&((!Nr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in pt.style&&Le.set(I?[pt,Fn]:k,{scrollBehavior:"auto"}),tt.forEach(function(ve){return sn(ve)&&ve.target===(I?bt.scrollingElement||Fn:k)&&(ve.smooth=!1)}),ge=sn(v.snapTo)?v.snapTo:v.snapTo==="labels"?O1(i):v.snapTo==="labelsDirectional"?N1(i):v.directional!==!1?function(ve,Ve){return Lh(v.snapTo)(ve,tn()-ue<500?0:Ve.direction)}:Le.utils.snap(v.snapTo),oe=v.duration||{min:.1,max:2},oe=Nr(oe)?Jo(oe.min,oe.max):Jo(oe,oe),he=Le.delayedCall(v.delay||Q/2||.1,function(){var ve=Ae(),Ve=tn()-ue<500,Ie=Me.tween;if((Ve||Math.abs(P.getVelocity())<10)&&!Ie&&!Zl&&le!==ve){var Ge=(ve-pe)/ae,A=i&&!H?i.totalProgress():Ge,z=Ve?0:(A-Ke)/(tn()-zo)*1e3||0,K=Le.utils.clamp(-Ge,1-Ge,Ps(z/2)*z/.185),U=Ge+(v.inertia===!1?0:K),Z,ye,Ee=v,Fe=Ee.onStart,Re=Ee.onInterrupt,Ue=Ee.onComplete;if(Z=ge(U,P),Vo(Z)||(Z=U),ye=Math.max(0,Math.round(pe+Z*ae)),ve<=qe&&ve>=pe&&ye!==ve){if(Ie&&!Ie._initted&&Ie.data<=Ps(ye-ve))return;v.inertia===!1&&(K=Z-Ge),Me(ye,{duration:oe(Ps(Math.max(Ps(U-A),Ps(Z-A))*.185/z/.05||0)),ease:v.ease||"power3",data:Ps(ye-ve),onInterrupt:function(){return he.restart(!0)&&Re&&Re(P)},onComplete:function(){P.update(),le=Ae(),i&&!H&&(D?D.resetTo("totalProgress",Z,i._tTime/i._tDur):i.progress(Z)),ze=Ke=i&&!H?i.totalProgress():P.progress,M&&M(P),Ue&&Ue(P)}},ve,K*ae,ye-ve-K*ae),Fe&&Fe(P,Me.tween)}}else P.isActive&&le!==ve&&he.restart(!0)}).pause()),l&&(zu[l]=P),f=P.trigger=Mn(f||d!==!0&&d),it=f&&f._gsap&&f._gsap.stRevert,it&&(it=it(P)),d=d===!0?f:Mn(d),On(a)&&(a={targets:f,className:a}),d&&(g===!1||g===$n||(g=!g&&d.parentNode&&d.parentNode.style&&Zn(d.parentNode).display==="flex"?!1:Dt),P.pin=d,be=Le.core.getCache(d),be.spacer?C=be.pinState:(T&&(T=Mn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),be.spacerIsNative=!!T,T&&(be.spacerState=ol(T))),be.spacer=te=T||bt.createElement("div"),te.classList.add("pin-spacer"),l&&te.classList.add("pin-spacer-"+l),be.pinState=C=ol(d)),n.force3D!==!1&&Le.set(d,{force3D:!0}),P.spacer=te=be.spacer,Be=Zn(d),de=Be[g+R.os2],se=Le.getProperty(d),we=Le.quickSetter(d,R.a,zt),tu(d,te,Be),V=ol(d)),q){ie=Nr(q)?ip(q,rp):rp,j=sl("scroller-start",l,k,R,ie,0),Je=sl("scroller-end",l,k,R,ie,0,j),ce=j["offset"+R.op.d2];var Ft=Mn(_r(k,"content")||k);lt=this.markerStart=sl("start",l,Ft,R,ie,ce,0,E),ot=this.markerEnd=sl("end",l,Ft,R,ie,ce,0,E),E&&(ut=Le.quickSetter([lt,ot],R.a,zt)),!G&&!(Si.length&&_r(k,"fixedMarkers")===!0)&&(I1(I?pt:k),Le.set([j,Je],{force3D:!0}),_e=Le.quickSetter(j,R.a,zt),Te=Le.quickSetter(Je,R.a,zt))}if(E){var Ce=E.vars.onUpdate,Pe=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),Ce&&Ce.apply(E,Pe||[])})}if(P.previous=function(){return Ze[Ze.indexOf(P)-1]},P.next=function(){return Ze[Ze.indexOf(P)+1]},P.revert=function(ve,Ve){if(!Ve)return P.kill(!0);var Ie=ve!==!1||!P.enabled,Ge=en;Ie!==P.isReverted&&(Ie&&(me=Math.max(Ae(),P.scroll.rec||0),X=P.progress,Xe=i&&i.progress()),lt&&[lt,ot,j,Je].forEach(function(A){return A.style.display=Ie?"none":"block"}),Ie&&(en=P,P.update(Ie)),d&&(!x||!P.isActive)&&(Ie?z1(d,te,C):tu(d,te,Zn(d),ee)),Ie||P.update(Ie),en=Ge,P.isReverted=Ie)},P.refresh=function(ve,Ve,Ie,Ge){if(!((en||!P.enabled)&&!Ve)){if(d&&ve&&ii){Wt(s,"scrollEnd",Fg);return}!mn&&fe&&fe(P),en=P,Me.tween&&!Ie&&(Me.tween.kill(),Me.tween=0),D&&D.pause(),p&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Jt){return Jt.vars.immediateRender&&Jt.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var A=W(),z=ne(),K=E?E.duration():yi(k,R),U=ae<=.01||!ae,Z=0,ye=Ge||0,Ee=Nr(Ie)?Ie.end:n.end,Fe=n.endTrigger||f,Re=Nr(Ie)?Ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Ue=P.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,P),He=f&&Math.max(0,Ze.indexOf(P))||0,Ne=He,Qe,ht,jt,Xn,rt,Oe,bn,Ct,fi,Ki,Zt,Ai,Pt;for(q&&Nr(Ie)&&(Ai=Le.getProperty(j,R.p),Pt=Le.getProperty(Je,R.p));Ne-- >0;)Oe=Ze[Ne],Oe.end||Oe.refresh(0,1)||(en=P),bn=Oe.pin,bn&&(bn===f||bn===d||bn===Ue)&&!Oe.isReverted&&(Ki||(Ki=[]),Ki.unshift(Oe),Oe.revert(!0,!0)),Oe!==Ze[Ne]&&(He--,Ne--);for(sn(Re)&&(Re=Re(P)),Re=Qd(Re,"start",P),pe=lp(Re,f,A,R,Ae(),lt,j,P,z,re,G,K,E,P._startClamp&&"_startClamp")||(d?-.001:0),sn(Ee)&&(Ee=Ee(P)),On(Ee)&&!Ee.indexOf("+=")&&(~Ee.indexOf(" ")?Ee=(On(Re)?Re.split(" ")[0]:"")+Ee:(Z=yl(Ee.substr(2),A),Ee=On(Re)?Re:(E?Le.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,pe):pe)+Z,Fe=f)),Ee=Qd(Ee,"end",P),qe=Math.max(pe,lp(Ee||(Fe?"100% 0":K),Fe,A,R,Ae()+Z,ot,Je,P,z,re,G,K,E,P._endClamp&&"_endClamp"))||-.001,Z=0,Ne=He;Ne--;)Oe=Ze[Ne],bn=Oe.pin,bn&&Oe.start-Oe._pinPush<=pe&&!E&&Oe.end>0&&(Qe=Oe.end-(P._startClamp?Math.max(0,Oe.start):Oe.start),(bn===f&&Oe.start-Oe._pinPush<pe||bn===Ue)&&isNaN(Re)&&(Z+=Qe*(1-Oe.progress)),bn===d&&(ye+=Qe));if(pe+=Z,qe+=Z,P._startClamp&&(P._startClamp+=Z),P._endClamp&&!mn&&(P._endClamp=qe||-.001,qe=Math.min(qe,yi(k,R))),ae=qe-pe||(pe-=.01)&&.001,U&&(X=Le.utils.clamp(0,1,Le.utils.normalize(pe,qe,me))),P._pinPush=ye,lt&&Z&&(Qe={},Qe[R.a]="+="+Z,Ue&&(Qe[R.p]="-="+Ae()),Le.set([lt,ot],Qe)),d&&!(ku&&P.end>=yi(k,R)))Qe=Zn(d),Xn=R===Ut,jt=Ae(),L=parseFloat(se(R.a))+ye,!K&&qe>1&&(Zt=(I?bt.scrollingElement||Fn:k).style,Zt={style:Zt,value:Zt["overflow"+R.a.toUpperCase()]},I&&Zn(pt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(Zt.style["overflow"+R.a.toUpperCase()]="scroll")),tu(d,te,Qe),V=ol(d),ht=Ui(d,!0),Ct=G&&br(k,Xn?yn:Ut)(),g?(ee=[g+R.os2,ae+ye+zt],ee.t=te,Ne=g===Dt?zl(d,R)+ae+ye:0,Ne&&(ee.push(R.d,Ne+zt),te.style.flexBasis!=="auto"&&(te.style.flexBasis=Ne+zt)),Zs(ee),Ue&&Ze.forEach(function(Jt){Jt.pin===Ue&&Jt.vars.pinSpacing!==!1&&(Jt._subPinOffset=!0)}),G&&Ae(me)):(Ne=zl(d,R),Ne&&te.style.flexBasis!=="auto"&&(te.style.flexBasis=Ne+zt)),G&&(rt={top:ht.top+(Xn?jt-pe:Ct)+zt,left:ht.left+(Xn?Ct:jt-pe)+zt,boxSizing:"border-box",position:"fixed"},rt[$r]=rt["max"+fo]=Math.ceil(ht.width)+zt,rt[Zr]=rt["max"+Ah]=Math.ceil(ht.height)+zt,rt[$n]=rt[$n+ta]=rt[$n+Qo]=rt[$n+na]=rt[$n+ea]="0",rt[Dt]=Qe[Dt],rt[Dt+ta]=Qe[Dt+ta],rt[Dt+Qo]=Qe[Dt+Qo],rt[Dt+na]=Qe[Dt+na],rt[Dt+ea]=Qe[Dt+ea],w=B1(C,rt,x),mn&&Ae(0)),i?(fi=i._initted,$c(1),i.render(i.duration(),!0,!0),N=se(R.a)-L+ae+ye,Se=Math.abs(ae-N)>1,G&&Se&&w.splice(w.length-2,2),i.render(0,!0,!0),fi||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),$c(0)):N=ae,Zt&&(Zt.value?Zt.style["overflow"+R.a.toUpperCase()]=Zt.value:Zt.style.removeProperty("overflow-"+R.a));else if(f&&Ae()&&!E)for(ht=f.parentNode;ht&&ht!==pt;)ht._pinOffset&&(pe-=ht._pinOffset,qe-=ht._pinOffset),ht=ht.parentNode;Ki&&Ki.forEach(function(Jt){return Jt.revert(!1,!0)}),P.start=pe,P.end=qe,ke=De=mn?me:Ae(),!E&&!mn&&(ke<me&&Ae(me),P.scroll.rec=0),P.revert(!1,!0),ue=tn(),he&&(le=-1,he.restart(!0)),en=0,i&&H&&(i._initted||Xe)&&i.progress()!==Xe&&i.progress(Xe||0,!0).render(i.time(),!0,!0),(U||X!==P.progress||E||p||i&&!i._initted)&&(i&&!H&&(i._initted||X||i.vars.immediateRender!==!1)&&i.totalProgress(E&&pe<-.001&&!X?Le.utils.normalize(pe,qe,0):X,!0),P.progress=U||(ke-pe)/ae===X?0:X),d&&g&&(te._pinOffset=Math.round(P.progress*N)),D&&D.invalidate(),isNaN(Ai)||(Ai-=Le.getProperty(j,R.p),Pt-=Le.getProperty(Je,R.p),al(j,R,Ai),al(lt,R,Ai-(Ge||0)),al(Je,R,Pt),al(ot,R,Pt-(Ge||0))),U&&!mn&&P.update(),u&&!mn&&!B&&(B=!0,u(P),B=!1)}},P.getVelocity=function(){return(Ae()-De)/(tn()-zo)*1e3||0},P.endAnimation=function(){Io(P.callbackAnimation),i&&(D?D.progress(1):i.paused()?H||Io(i,P.direction<0,1):Io(i,i.reversed()))},P.labelToScroll=function(ve){return i&&i.labels&&(pe||P.refresh()||pe)+i.labels[ve]/i.duration()*ae||0},P.getTrailing=function(ve){var Ve=Ze.indexOf(P),Ie=P.direction>0?Ze.slice(0,Ve).reverse():Ze.slice(Ve+1);return(On(ve)?Ie.filter(function(Ge){return Ge.vars.preventOverlaps===ve}):Ie).filter(function(Ge){return P.direction>0?Ge.end<=pe:Ge.start>=qe})},P.update=function(ve,Ve,Ie){if(!(E&&!Ie&&!ve)){var Ge=mn===!0?me:P.scroll(),A=ve?0:(Ge-pe)/ae,z=A<0?0:A>1?1:A||0,K=P.progress,U,Z,ye,Ee,Fe,Re,Ue,He;if(Ve&&(De=ke,ke=E?Ae():Ge,v&&(Ke=ze,ze=i&&!H?i.totalProgress():z)),m&&d&&!en&&!el&&ii&&(!z&&pe<Ge+(Ge-De)/(tn()-zo)*m?z=1e-4:z===1&&qe>Ge+(Ge-De)/(tn()-zo)*m&&(z=.9999)),z!==K&&P.enabled){if(U=P.isActive=!!z&&z<1,Z=!!K&&K<1,Re=U!==Z,Fe=Re||!!z!=!!K,P.direction=z>K?1:-1,P.progress=z,Fe&&!en&&(ye=z&&!K?0:z===1?1:K===1?2:3,H&&(Ee=!Re&&Y[ye+1]!=="none"&&Y[ye+1]||Y[ye],He=i&&(Ee==="complete"||Ee==="reset"||Ee in i))),S&&(Re||He)&&(He||h||!i)&&(sn(S)?S(P):P.getTrailing(S).forEach(function(jt){return jt.endAnimation()})),H||(D&&!en&&!el?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",z,i._tTime/i._tDur):(D.vars.totalProgress=z,D.invalidate().restart())):i&&i.totalProgress(z,!!(en&&(ue||ve)))),d){if(ve&&g&&(te.style[g+R.os2]=de),!G)we(Bo(L+N*z));else if(Fe){if(Ue=!ve&&z>K&&qe+1>Ge&&Ge+1>=yi(k,R),x)if(!ve&&(U||Ue)){var Ne=Ui(d,!0),Qe=Ge-pe;cp(d,pt,Ne.top+(R===Ut?Qe:0)+zt,Ne.left+(R===Ut?0:Qe)+zt)}else cp(d,te);Zs(U||Ue?w:V),Se&&z<1&&U||we(L+(z===1&&!Ue?N:0))}}v&&!Me.tween&&!en&&!el&&he.restart(!0),a&&(Re||y&&z&&(z<1||!Zc))&&va(a.targets).forEach(function(jt){return jt.classList[U||y?"add":"remove"](a.className)}),o&&!H&&!ve&&o(P),Fe&&!en?(H&&(He&&(Ee==="complete"?i.pause().totalProgress(1):Ee==="reset"?i.restart(!0).pause():Ee==="restart"?i.restart(!0):i[Ee]()),o&&o(P)),(Re||!Zc)&&(c&&Re&&Qc(P,c),J[ye]&&Qc(P,J[ye]),y&&(z===1?P.kill(!1,1):J[ye]=0),Re||(ye=z===1?1:3,J[ye]&&Qc(P,J[ye]))),b&&!U&&Math.abs(P.getVelocity())>(Vo(b)?b:2500)&&(Io(P.callbackAnimation),D?D.progress(1):Io(i,Ee==="reverse"?1:!z,1))):H&&o&&!en&&o(P)}if(Te){var ht=E?Ge/E.duration()*(E._caScrollDist||0):Ge;_e(ht+(j._isFlipped?1:0)),Te(ht)}ut&&ut(-Ge/E.duration()*(E._caScrollDist||0))}},P.enable=function(ve,Ve){P.enabled||(P.enabled=!0,Wt(k,"resize",Go),I||Wt(k,"scroll",Rs),fe&&Wt(s,"refreshInit",fe),ve!==!1&&(P.progress=X=0,ke=De=le=Ae()),Ve!==!1&&P.refresh())},P.getTween=function(ve){return ve&&Me?Me.tween:D},P.setPositions=function(ve,Ve,Ie,Ge){if(E){var A=E.scrollTrigger,z=E.duration(),K=A.end-A.start;ve=A.start+K*ve/z,Ve=A.start+K*Ve/z}P.refresh(!1,!1,{start:ep(ve,Ie&&!!P._startClamp),end:ep(Ve,Ie&&!!P._endClamp)},Ge),P.update()},P.adjustPinSpacing=function(ve){if(ee&&ve){var Ve=ee.indexOf(R.d)+1;ee[Ve]=parseFloat(ee[Ve])+ve+zt,ee[1]=parseFloat(ee[1])+ve+zt,Zs(ee)}},P.disable=function(ve,Ve){if(P.enabled&&(ve!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Ve||D&&D.pause(),me=0,be&&(be.uncache=1),fe&&Ht(s,"refreshInit",fe),he&&(he.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!I)){for(var Ie=Ze.length;Ie--;)if(Ze[Ie].scroller===k&&Ze[Ie]!==P)return;Ht(k,"resize",Go),I||Ht(k,"scroll",Rs)}},P.kill=function(ve,Ve){P.disable(ve,Ve),D&&!Ve&&D.kill(),l&&delete zu[l];var Ie=Ze.indexOf(P);Ie>=0&&Ze.splice(Ie,1),Ie===pn&&Ml>0&&pn--,Ie=0,Ze.forEach(function(Ge){return Ge.scroller===P.scroller&&(Ie=1)}),Ie||mn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),Ve||i.kill()),lt&&[lt,ot,j,Je].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),ia===P&&(ia=0),d&&(be&&(be.uncache=1),Ie=0,Ze.forEach(function(Ge){return Ge.pin===d&&Ie++}),Ie||(be.spacer=0)),n.onKill&&n.onKill(P)},Ze.push(P),P.enable(!1,!1),it&&it(P),i&&i.add&&!ae){var je=P.update;P.update=function(){P.update=je,tt.cache++,pe||qe||P.refresh()},Le.delayedCall(.01,P.update),ae=.01,pe=qe=0}else P.refresh();d&&k1()},s.register=function(n){return Os||(Le=n||Pg(),Lg()&&window.document&&s.enable(),Os=Uo),Os},s.defaults=function(n){if(n)for(var i in n)rl[i]=n[i];return rl},s.disable=function(n,i){Uo=0,Ze.forEach(function(o){return o[i?"kill":"disable"](n)}),Ht(et,"wheel",Rs),Ht(bt,"scroll",Rs),clearInterval(Qa),Ht(bt,"touchcancel",mi),Ht(pt,"touchstart",mi),nl(Ht,bt,"pointerdown,touchstart,mousedown",tp),nl(Ht,bt,"pointerup,touchend,mouseup",np),Fl.kill(),tl(Ht);for(var r=0;r<tt.length;r+=3)il(Ht,tt[r],tt[r+1]),il(Ht,tt[r],tt[r+2])},s.enable=function(){if(et=window,bt=document,Fn=bt.documentElement,pt=bt.body,Le&&(va=Le.utils.toArray,Jo=Le.utils.clamp,Fu=Le.core.context||mi,$c=Le.core.suppressOverwrites||mi,Sh=et.history.scrollRestoration||"auto",Uu=et.pageYOffset||0,Le.core.globals("ScrollTrigger",s),pt)){Uo=1,$s=document.createElement("div"),$s.style.height="100vh",$s.style.position="absolute",Ug(),P1(),Lt.register(Le),s.isTouch=Lt.isTouch,rr=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Nu=Lt.isTouch===1,Wt(et,"wheel",Rs),wh=[et,bt,Fn,pt],Le.matchMedia?(s.matchMedia=function(c){var u=Le.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Le.addEventListener("matchMediaInit",function(){return Ph()}),Le.addEventListener("matchMediaRevert",function(){return kg()}),Le.addEventListener("matchMedia",function(){Vr(0,1),os("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return eu(),eu})):console.warn("Requires GSAP 3.11.0 or later"),eu(),Wt(bt,"scroll",Rs);var n=pt.hasAttribute("style"),i=pt.style,r=i.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ui(pt),Ut.m=Math.round(a.top+Ut.sc())||0,yn.m=Math.round(a.left+yn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),Qa=setInterval(sp,250),Le.delayedCall(.5,function(){return el=0}),Wt(bt,"touchcancel",mi),Wt(pt,"touchstart",mi),nl(Wt,bt,"pointerdown,touchstart,mousedown",tp),nl(Wt,bt,"pointerup,touchend,mouseup",np),Ou=Le.utils.checkPrefix("transform"),wl.push(Ou),Os=tn(),Fl=Le.delayedCall(.2,Vr).pause(),Ns=[bt,"visibilitychange",function(){var c=et.innerWidth,u=et.innerHeight;bt.hidden?(Zd=c,Jd=u):(Zd!==c||Jd!==u)&&Go()},bt,"DOMContentLoaded",Vr,et,"load",Vr,et,"resize",Go],tl(Wt),Ze.forEach(function(c){return c.enable(0,1)}),l=0;l<tt.length;l+=3)il(Ht,tt[l],tt[l+1]),il(Ht,tt[l],tt[l+2])}},s.config=function(n){"limitCallbacks"in n&&(Zc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Qa)||(Qa=i)&&setInterval(sp,i),"ignoreMobileResize"in n&&(Nu=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tl(Ht)||tl(Wt,n.autoRefreshEvents||"none"),Cg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Mn(n),o=tt.indexOf(r),a=rs(r);~o&&tt.splice(o,a?6:2),i&&(a?Si.unshift(et,i,pt,i,Fn,i):Si.unshift(r,i))},s.clearMatchMedia=function(n){Ze.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(On(n)?Mn(n):n).getBoundingClientRect(),a=o[r?$r:Zr]*i||0;return r?o.right-a>0&&o.left+a<et.innerWidth:o.bottom-a>0&&o.top+a<et.innerHeight},s.positionInViewport=function(n,i,r){On(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[r?$r:Zr],l=i==null?a/2:i in Ul?Ul[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/et.innerWidth:(o.top+l)/et.innerHeight},s.killAll=function(n){if(Ze.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(r){return r()})}},s}();nt.version="3.13.0";nt.saveStyles=function(s){return s?va(s).forEach(function(e){if(e&&e.style){var t=In.indexOf(e);t>=0&&In.splice(t,5),In.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Fu())}}):In};nt.revert=function(s,e){return Ph(!s,e)};nt.create=function(s,e){return new nt(s,e)};nt.refresh=function(s){return s?Go(!0):(Os||nt.register())&&Vr(!0)};nt.update=function(s){return++tt.cache&&Wi(s===!0?2:0)};nt.clearScrollMemory=zg;nt.maxScroll=function(s,e){return yi(s,e?yn:Ut)};nt.getScrollFunc=function(s,e){return br(Mn(s),e?yn:Ut)};nt.getById=function(s){return zu[s]};nt.getAll=function(){return Ze.filter(function(s){return s.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!ii};nt.snapDirectional=Lh;nt.addEventListener=function(s,e){var t=ss[s]||(ss[s]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(s,e){var t=ss[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Le.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&sn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return sn(r)&&(r=r(),Wt(nt,"refresh",function(){return r=e.batchMax()})),va(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(nt.create(c))}),t};var hp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},nu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===Fn&&s(pt,t)},ll={auto:1,scroll:1},G1=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Le.core.getCache(r),a=tn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==pt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(ll[(l=Zn(r)).overflowY]||ll[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!rs(r)&&(ll[(l=Zn(r)).overflowY]||ll[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Vg=function(e,t,n,i){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&G1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Wt(bt,Lt.eventTypes[0],dp,!1,!0)},onDisable:function(){return Ht(bt,Lt.eventTypes[0],dp,!0)}})},H1=/(input|label|select|textarea)/i,fp,dp=function(e){var t=H1.test(e.target.tagName);(t||fp)&&(e._gsapAllow=!0,fp=t)},W1=function(e){Nr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=Mn(e.target)||Fn,u=Le.core.globals().ScrollSmoother,h=u&&u.get(),f=rr&&(e.content&&Mn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=br(c,Ut),g=br(c,yn),p=1,m=(Lt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,_=0,M=sn(i)?function(){return i(a)}:function(){return i||2.8},y,v,x=Vg(c,e.type,!0,r),T=function(){return v=!1},E=mi,b=mi,S=function(){l=yi(c,Ut),b=Jo(rr?1:0,l),n&&(E=Jo(0,yi(c,yn))),y=Jr},R=function(){f._gsap.y=Bo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},H=function(){if(v){requestAnimationFrame(T);var q=Bo(a.deltaY/2),re=b(d.v-q);if(f&&re!==d.v+d.offset){d.offset=re-d.v;var P=Bo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=tt.cache,Wi()}return!0}d.offset&&R(),v=!0},k,O,I,G,J=function(){S(),k.isActive()&&k.vars.scrollY>l&&(d()>l?k.progress(1)&&d(l):k.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return rr&&Y.type==="touchmove"&&H()||p>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=p;p=Bo((et.visualViewport&&et.visualViewport.scale||1)/m),k.pause(),Y!==p&&nu(c,p>1.01?!0:n?!1:"x"),O=g(),I=d(),S(),y=Jr},e.onRelease=e.onGestureStart=function(Y,q){if(d.offset&&R(),!q)G.restart(!0);else{tt.cache++;var re=M(),P,fe;n&&(P=g(),fe=P+re*.05*-Y.velocityX/.227,re*=hp(g,P,fe,yi(c,yn)),k.vars.scrollX=E(fe)),P=d(),fe=P+re*.05*-Y.velocityY/.227,re*=hp(d,P,fe,yi(c,Ut)),k.vars.scrollY=b(fe),k.invalidate().duration(re).play(.01),(rr&&k.vars.scrollY>=l||P>=l-1)&&Le.to({},{onUpdate:J,duration:re})}o&&o(Y)},e.onWheel=function(){k._ts&&k.pause(),tn()-_>1e3&&(y=0,_=tn())},e.onChange=function(Y,q,re,P,fe){if(Jr!==y&&S(),q&&n&&g(E(P[2]===q?O+(Y.startX-Y.x):g()+q-P[1])),re){d.offset&&R();var W=fe[2]===re,ne=W?I+Y.startY-Y.y:d()+re-fe[1],le=b(ne);W&&ne!==le&&(I+=le-ne),d(le)}(re||q)&&Wi()},e.onEnable=function(){nu(c,n?!1:"x"),nt.addEventListener("refresh",J),Wt(et,"resize",J),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),x.enable()},e.onDisable=function(){nu(c,!0),Ht(et,"resize",J),nt.removeEventListener("refresh",J),x.kill()},e.lockAxis=e.lockAxis!==!1,a=new Lt(e),a.iOS=rr,rr&&!d()&&d(1),rr&&Le.ticker.add(mi),G=a._dc,k=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bg(d,d(),function(){return k.pause()})},onUpdate:Wi,onComplete:G.vars.onComplete}),a};nt.sort=function(s){if(sn(s))return Ze.sort(s);var e=et.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+et.innerHeight}),Ze.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(s){return new Lt(s)};nt.normalizeScroll=function(s){if(typeof s>"u")return dn;if(s===!0&&dn)return dn.enable();if(s===!1){dn&&dn.kill(),dn=s;return}var e=s instanceof Lt?s:W1(s);return dn&&dn.target===e.target&&dn.kill(),rs(e.target)&&(dn=e),e};nt.core={_getVelocityProp:Iu,_inputObserver:Vg,_scrollers:tt,_proxies:Si,bridge:{ss:function(){ii||os("scrollStart"),ii=tn()},ref:function(){return en}}};Pg()&&Le.registerPlugin(nt);function pp(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function X1(s,e,t){return e&&pp(s.prototype,e),t&&pp(s,t),s}/*!
 * ScrollSmoother 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ft,cl,fn,or,Ho,Ni,Fr,mp,Ye,_i,ul,gp,_p,xp,vp,Gg=function(){return typeof window<"u"},Hg=function(){return ft||Gg()&&(ft=window.gsap)&&ft.registerPlugin&&ft},j1=function(e){return Math.round(e*1e5)/1e5||0},ir=function(e){return Ye.maxScroll(e||fn)},q1=function(e,t){var n=e.parentNode||Ho,i=e.getBoundingClientRect(),r=n.getBoundingClientRect(),o=r.top-i.top,a=r.bottom-i.bottom,l=(Math.abs(o)>Math.abs(a)?o:a)/(1-t),c=-l*t,u,h;return l>0&&(u=r.height/(fn.innerHeight+r.height),h=u===.5?r.height*2:Math.min(r.height,Math.abs(-l*u/(2*u-1)))*2*(t||1),c+=t?-h*t:-h/2,l+=h),{change:l,offset:c}},Y1=function(e){var t=or.querySelector(".ScrollSmoother-wrapper");return t||(t=or.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},as=function(){function s(e){var t=this;cl||s.register(ft)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},_i&&_i.kill(),_i=this,xp(this);var n=e,i=n.smoothTouch,r=n.onUpdate,o=n.onStop,a=n.smooth,l=n.onFocusIn,c=n.normalizeScroll,u=n.wholePixels,h,f,d,g,p,m,_,M,y,v,x,T,E,b,S=this,R=e.effectsPrefix||"",H=Ye.getScrollFunc(fn),k=Ye.isTouch===1?i===!0?.8:parseFloat(i)||0:a===0||a===!1?0:parseFloat(a)||.8,O=k&&+e.speed||1,I=0,G=0,J=1,Y=gp(0),q=function(){return Y.update(-I)},re={y:0},P=function(){return h.style.overflow="visible"},fe,W=function(B){B.update();var ae=B.getTween();ae&&(ae.pause(),ae._time=ae._dur,ae._tTime=ae._tDur),fe=!1,B.animation.progress(B.progress,!0)},ne=function(B,ae){(B!==I&&!v||ae)&&(u&&(B=Math.round(B)),k&&(h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+B+", 0, 1)",h._gsap.y=B+"px"),G=B-I,I=B,Ye.isUpdating||s.isRefreshing||Ye.update())},le=function(B){return arguments.length?(B<0&&(B=0),re.y=-B,fe=!0,v?I=-B:ne(-B),Ye.isRefreshing?g.update():H(B/O),this):-I},ue=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!Ye.isRefreshing){var ie=ir(f)*O;ie<-I&&le(ie),vp.restart(!0)}}),X,Ae=function(B){f.scrollTop=0,!(B.target.contains&&B.target.contains(f)||l&&l(t,B)===!1)&&(Ye.isInViewport(B.target)||B.target===X||t.scrollTo(B.target,!1,"center center"),X=B.target)},Me=function(B,ae){if(B<ae.start)return B;var C=isNaN(ae.ratio)?1:ae.ratio,w=ae.end-ae.start,V=B-ae.start,te=ae.offset||0,ce=ae.pins||[],se=ce.offset||0,we=ae._startClamp&&ae.start<=0||ae.pins&&ae.pins.offset?0:ae._endClamp&&ae.end===ir()?1:.5;return ce.forEach(function(L){w-=L.distance,L.nativeStart<=B&&(V-=L.distance)}),se&&(V*=(w-se/C)/w),B+(V-te*we)/C-V},be=function ie(B,ae,C){C||(B.pins.length=B.pins.offset=0);var w=B.pins,V=B.markers,te,ce,se,we,L,N,de,ee;for(de=0;de<ae.length;de++)if(ee=ae[de],B.trigger&&ee.trigger&&B!==ee&&(ee.trigger===B.trigger||ee.pinnedContainer===B.trigger||B.trigger.contains(ee.trigger))&&(L=ee._startNative||ee._startClamp||ee.start,N=ee._endNative||ee._endClamp||ee.end,se=Me(L,B),we=ee.pin&&N>0?se+(N-L):Me(N,B),ee.setPositions(se,we,!0,(ee._startClamp?Math.max(0,se):se)-L),ee.markerStart&&V.push(ft.quickSetter([ee.markerStart,ee.markerEnd],"y","px")),ee.pin&&ee.end>0&&!C)){if(te=ee.end-ee.start,ce=B._startClamp&&ee.start<0,ce){if(B.start>0){B.setPositions(0,B.end+(B._startNative-B.start),!0),ie(B,ae);return}te+=ee.start,w.offset=-ee.start}w.push({start:ee.start,nativeStart:L,end:ee.end,distance:te,trig:ee}),B.setPositions(B.start,B.end+(ce?-ee.start:te),!0)}},ge=function(B,ae){p.forEach(function(C){return be(C,B,ae)})},ke=function(){Ho=or.documentElement,Ni=or.body,P(),requestAnimationFrame(P),p&&(Ye.getAll().forEach(function(B){B._startNative=B.start,B._endNative=B.end}),p.forEach(function(B){var ae=B._startClamp||B.start,C=B.autoSpeed?Math.min(ir(),B.end):ae+Math.abs((B.end-ae)/B.ratio),w=C-B.end;if(ae-=w/2,C-=w/2,ae>C){var V=ae;ae=C,C=V}B._startClamp&&ae<0?(C=B.ratio<0?ir():B.end/B.ratio,w=C-B.end,ae=0):(B.ratio<0||B._endClamp&&C>=ir())&&(C=ir(),ae=B.ratio<0||B.ratio>1?0:C-(C-B.start)/B.ratio,w=(C-ae)*B.ratio-(B.end-B.start)),B.offset=w||1e-4,B.pins.length=B.pins.offset=0,B.setPositions(ae,C,!0)}),ge(Ye.sort())),Y.reset()},De=function(){return Ye.addEventListener("refresh",ke)},pe=function(){return p&&p.forEach(function(B){return B.vars.onRefresh(B)})},qe=function(){return p&&p.forEach(function(B){return B.vars.onRefreshInit(B)}),pe},lt=function(B,ae,C,w){return function(){var V=typeof ae=="function"?ae(C,w):ae;V||V===0||(V=w.getAttribute("data-"+R+B)||(B==="speed"?1:0)),w.setAttribute("data-"+R+B,V);var te=(V+"").substr(0,6)==="clamp(";return{clamp:te,value:te?V.substr(6,V.length-7):V}}},ot=function(B,ae,C,w,V){V=(typeof V=="function"?V(w,B):V)||0;var te=lt("speed",ae,w,B),ce=lt("lag",C,w,B),se=ft.getProperty(B,"y"),we=B._gsap,L,N,de,ee,_e,Se,Te=[],Be=function(){ae=te(),C=parseFloat(ce().value),L=parseFloat(ae.value)||1,de=ae.value==="auto",_e=de||N&&N._startClamp&&N.start<=0||Te.offset?0:N&&N._endClamp&&N.end===ir()?1:.5,ee&&ee.kill(),ee=C&&ft.to(B,{ease:ul,overwrite:!1,y:"+=0",duration:C}),N&&(N.ratio=L,N.autoSpeed=de)},ze=function(){we.y=se+"px",we.renderTransform(1),Be()},Ke=[],D=0,Q=function(he){if(de){ze();var me=q1(B,mp(0,1,-he.start/(he.end-he.start)));D=me.change,Se=me.offset}else Se=Te.offset||0,D=(he.end-he.start-Se)*(1-L);Te.forEach(function(Xe){return D-=Xe.distance*(1-L)}),he.offset=D||.001,he.vars.onUpdate(he),ee&&ee.progress(1)};return Be(),(L!==1||de||ee)&&(N=Ye.create({trigger:de?B.parentNode:B,start:function(){return ae.clamp?"clamp(top bottom+="+V+")":"top bottom+="+V},end:function(){return ae.value<0?"max":ae.clamp?"clamp(bottom top-="+V+")":"bottom top-="+V},scroller:f,scrub:!0,refreshPriority:-999,onRefreshInit:ze,onRefresh:Q,onKill:function(he){var me=p.indexOf(he);me>=0&&p.splice(me,1),ze()},onUpdate:function(he){var me=se+D*(he.progress-_e),Xe=Te.length,ut=0,it,Ft,Ce;if(he.offset){if(Xe){for(Ft=-I,Ce=he.end;Xe--;){if(it=Te[Xe],it.trig.isActive||Ft>=it.start&&Ft<=it.end){ee&&(it.trig.progress+=it.trig.direction<0?.001:-.001,it.trig.update(0,0,1),ee.resetTo("y",parseFloat(we.y),-G,!0),J&&ee.progress(1));return}Ft>it.end&&(ut+=it.distance),Ce-=it.distance}me=se+ut+D*((ft.utils.clamp(he.start,he.end,Ft)-he.start-ut)/(Ce-he.start)-_e)}Ke.length&&!de&&Ke.forEach(function(Pe){return Pe(me-ut)}),me=j1(me+Se),ee?(ee.resetTo("y",me,-G,!0),J&&ee.progress(1)):(we.y=me+"px",we.renderTransform(1))}}}),Q(N),ft.core.getCache(N.trigger).stRevert=qe,N.startY=se,N.pins=Te,N.markers=Ke,N.ratio=L,N.autoSpeed=de,B.style.willChange="transform"),N};De(),Ye.addEventListener("killAll",De),ft.delayedCall(.5,function(){return J=0}),this.scrollTop=le,this.scrollTo=function(ie,B,ae){var C=ft.utils.clamp(0,ir(),isNaN(ie)?t.offset(ie,ae,!!B&&!v):+ie);B?v?ft.to(t,{duration:k,scrollTop:C,overwrite:"auto",ease:ul}):H(C):le(C)},this.offset=function(ie,B,ae){ie=Fr(ie)[0];var C=ie.style.cssText,w=Ye.create({trigger:ie,start:B||"top top"}),V;return p&&(J?Ye.refresh():ge([w],!0)),V=w.start/(ae?O:1),w.kill(!1),ie.style.cssText=C,ft.core.getCache(ie).uncache=1,V};function j(){return d=h.clientHeight,h.style.overflow="visible",Ni.style.height=fn.innerHeight+(d-fn.innerHeight)/O+"px",d-fn.innerHeight}this.content=function(ie){if(arguments.length){var B=Fr(ie||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||Ni.children[0];return B!==h&&(h=B,y=h.getAttribute("style")||"",ue&&ue.observe(h),ft.set(h,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),k||ft.set(h,{clearProps:"transform"})),this}return h},this.wrapper=function(ie){return arguments.length?(f=Fr(ie||"#smooth-wrapper")[0]||Y1(h),M=f.getAttribute("style")||"",j(),ft.set(f,k?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):f},this.effects=function(ie,B){var ae;if(p||(p=[]),!ie)return p.slice(0);ie=Fr(ie),ie.forEach(function(L){for(var N=p.length;N--;)p[N].trigger===L&&p[N].kill()}),B=B||{};var C=B,w=C.speed,V=C.lag,te=C.effectsPadding,ce=[],se,we;for(se=0;se<ie.length;se++)we=ot(ie[se],w,V,se,te),we&&ce.push(we);return(ae=p).push.apply(ae,ce),B.refresh!==!1&&Ye.refresh(),ce},this.sections=function(ie,B){var ae;if(m||(m=[]),!ie)return m.slice(0);var C=Fr(ie).map(function(w){return Ye.create({trigger:w,start:"top 120%",end:"bottom -20%",onToggle:function(te){w.style.opacity=te.isActive?"1":"0",w.style.pointerEvents=te.isActive?"all":"none"}})});return B&&B.add?(ae=m).push.apply(ae,C):m=C.slice(0),C},this.content(e.content),this.wrapper(e.wrapper),this.render=function(ie){return ne(ie||ie===0?ie:I)},this.getVelocity=function(){return Y.getVelocity(-I)},Ye.scrollerProxy(f,{scrollTop:le,scrollHeight:function(){return j()&&Ni.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!k,content:h,getBoundingClientRect:function(){return{top:0,left:0,width:fn.innerWidth,height:fn.innerHeight}}}),Ye.defaults({scroller:f});var Je=Ye.getAll().filter(function(ie){return ie.scroller===fn||ie.scroller===f});Je.forEach(function(ie){return ie.revert(!0,!0)}),g=Ye.create({animation:ft.fromTo(re,{y:function(){return b=0,0}},{y:function(){return b=1,-j()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(b){var B=fe;B&&(W(g),re.y=I),ne(re.y,B),q(),r&&!v&&r(S)}}}),onRefreshInit:function(B){if(!s.isRefreshing){if(s.isRefreshing=!0,p){var ae=Ye.getAll().filter(function(w){return!!w.pin});p.forEach(function(w){w.vars.pinnedContainer||ae.forEach(function(V){if(V.pin.contains(w.trigger)){var te=w.vars;te.pinnedContainer=V.pin,w.vars=null,w.init(te,w.animation)}})})}var C=B.getTween();E=C&&C._end>C._dp._time,T=I,re.y=0,k&&(Ye.isTouch===1&&(f.style.position="absolute"),f.scrollTop=0,Ye.isTouch===1&&(f.style.position="fixed"))}},onRefresh:function(B){B.animation.invalidate(),B.setPositions(B.start,j()/O),E||W(B),re.y=-H()*O,ne(re.y),J||(E&&(fe=!1),B.animation.progress(ft.utils.clamp(0,1,T/O/-B.end))),E&&(B.progress-=.001,B.update()),s.isRefreshing=!1},id:"ScrollSmoother",scroller:fn,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return j()/O},onScrubComplete:function(){Y.reset(),o&&o(t)},scrub:k||!0}),this.smooth=function(ie){return arguments.length&&(k=ie||0,O=k&&+e.speed||1,g.scrubDuration(ie)),g.getTween()?g.getTween().duration():0},g.getTween()&&(g.getTween().vars.ease=e.ease||ul),this.scrollTrigger=g,e.effects&&this.effects(e.effects===!0?"[data-"+R+"speed], [data-"+R+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),Je.forEach(function(ie){ie.vars.scroller=f,ie.revert(!1,!0),ie.init(ie.vars,ie.animation)}),this.paused=function(ie,B){return arguments.length?(!!v!==ie&&(ie?(g.getTween()&&g.getTween().pause(),H(-I/O),Y.reset(),x=Ye.normalizeScroll(),x&&x.disable(),v=Ye.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return le(-I)}}),v.nested=_p(Ho,"wheel,touch,scroll",!0,B!==!1)):(v.nested.kill(),v.kill(),v=0,x&&x.enable(),g.progress=(-I/O-g.start)/(g.end-g.start),W(g))),this):!!v},this.kill=this.revert=function(){t.paused(!1),W(g),g.kill();for(var ie=(p||[]).concat(m||[]),B=ie.length;B--;)ie[B].kill();Ye.scrollerProxy(f),Ye.removeEventListener("killAll",De),Ye.removeEventListener("refresh",ke),f.style.cssText=M,h.style.cssText=y;var ae=Ye.defaults({});ae&&ae.scroller===f&&Ye.defaults({scroller:fn}),t.normalizer&&Ye.normalizeScroll(!1),clearInterval(_),_i=null,ue&&ue.disconnect(),Ni.style.removeProperty("height"),fn.removeEventListener("focusin",Ae)},this.refresh=function(ie,B){return g.refresh(ie,B)},c&&(this.normalizer=Ye.normalizeScroll(c===!0?{debounce:!0,content:!k&&h}:c)),Ye.config(e),"scrollBehavior"in fn.getComputedStyle(Ni)&&ft.set([Ni,Ho],{scrollBehavior:"auto"}),fn.addEventListener("focusin",Ae),_=setInterval(q,250),or.readyState==="loading"||requestAnimationFrame(function(){return Ye.refresh()})}return s.register=function(t){return cl||(ft=t||Hg(),Gg()&&window.document&&(fn=window,or=document,Ho=or.documentElement,Ni=or.body),ft&&(Fr=ft.utils.toArray,mp=ft.utils.clamp,ul=ft.parseEase("expo"),xp=ft.core.context||function(){},Ye=ft.core.globals().ScrollTrigger,ft.core.globals("ScrollSmoother",s),Ni&&Ye&&(vp=ft.delayedCall(.2,function(){return Ye.isRefreshing||_i&&_i.refresh()}).pause(),gp=Ye.core._getVelocityProp,_p=Ye.core._inputObserver,s.refresh=Ye.refresh,cl=1))),cl},X1(s,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),s}();as.version="3.13.0";as.create=function(s){return _i&&s&&_i.content()===Fr(s.content)[0]?_i:new as(s)};as.get=function(){return _i};Hg()&&ft.registerPlugin(as);(function(){function s(){for(var n=arguments.length,i=0;i<n;i++){var r=i<0||arguments.length<=i?void 0:arguments[i];r.nodeType===1||r.nodeType===11?this.appendChild(r):this.appendChild(document.createTextNode(String(r)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var n=this.parentNode,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];var a=r.length;if(n)for(a||n.removeChild(this);a--;){var l=r[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=s,DocumentFragment.prototype.append=s),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function K1(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function yp(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function bp(s,e,t){return e&&yp(s.prototype,e),t&&yp(s,t),s}function $1(s,e,t){return e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function Mp(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function wp(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Mp(Object(t),!0).forEach(function(n){$1(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):Mp(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}function Wg(s,e){return J1(s)||eT(s,e)||Xg(s,e)||nT()}function xn(s){return Z1(s)||Q1(s)||Xg(s)||tT()}function Z1(s){if(Array.isArray(s))return Vu(s)}function J1(s){if(Array.isArray(s))return s}function Q1(s){if(typeof Symbol<"u"&&Symbol.iterator in Object(s))return Array.from(s)}function eT(s,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(s)))){var t=[],n=!0,i=!1,r=void 0;try{for(var o=s[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(l){i=!0,r=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw r}}return t}}function Xg(s,e){if(s){if(typeof s=="string")return Vu(s,e);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Vu(s,e)}}function Vu(s,e){(e==null||e>s.length)&&(e=s.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=s[t];return n}function tT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gr(s,e){return Object.getOwnPropertyNames(Object(s)).reduce(function(t,n){var i=Object.getOwnPropertyDescriptor(Object(s),n),r=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(t,n,r||i)},{})}function Ta(s){return typeof s=="string"}function Rh(s){return Array.isArray(s)}function hl(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Gr(s),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(Ta(t)||Rh(t)?String(t):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(s.position)),e}function Dh(s){var e=Ta(s)||Rh(s)?String(s):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Jl(s){return s!==null&&typeof s=="object"}function iT(s){return Jl(s)&&/^(1|3|11)$/.test(s.nodeType)}function rT(s){return typeof s=="number"&&s>-1&&s%1===0}function sT(s){return Jl(s)&&rT(s.length)}function ls(s){return Rh(s)?s:s==null?[]:sT(s)?Array.prototype.slice.call(s):[s]}function Sp(s){var e=s;return Ta(s)&&(/^(#[a-z]\w+)$/.test(s.trim())?e=document.getElementById(s.trim().slice(1)):e=document.querySelectorAll(s)),ls(e).reduce(function(t,n){return[].concat(xn(t),xn(ls(n).filter(iT)))},[])}var oT=Object.entries,Bl="_splittype",hi={},aT=0;function bi(s,e,t){if(!Jl(s))return console.warn("[data.set] owner is not an object"),null;var n=s[Bl]||(s[Bl]=++aT),i=hi[n]||(hi[n]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(hi[n]=wp(wp({},i),e)):e!==void 0&&(i[e]=t),t}function Hr(s,e){var t=Jl(s)?s[Bl]:null,n=t&&hi[t]||{};return e===void 0?n:n[e]}function jg(s){var e=s&&s[Bl];e&&(delete s[e],delete hi[e])}function lT(){Object.keys(hi).forEach(function(s){delete hi[s]})}function cT(){oT(hi).forEach(function(s){var e=Wg(s,2),t=e[0],n=e[1],i=n.isRoot,r=n.isSplit;(!i||!r)&&(hi[t]=null,delete hi[t])})}function uT(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=s?String(s):"";return t.trim().replace(/\s+/g," ").split(e)}var Ih="\\ud800-\\udfff",qg="\\u0300-\\u036f\\ufe20-\\ufe23",Yg="\\u20d0-\\u20f0",Kg="\\ufe0e\\ufe0f",hT="[".concat(Ih,"]"),Gu="[".concat(qg).concat(Yg,"]"),Hu="\\ud83c[\\udffb-\\udfff]",fT="(?:".concat(Gu,"|").concat(Hu,")"),$g="[^".concat(Ih,"]"),Zg="(?:\\ud83c[\\udde6-\\uddff]){2}",Jg="[\\ud800-\\udbff][\\udc00-\\udfff]",Qg="\\u200d",e_="".concat(fT,"?"),t_="[".concat(Kg,"]?"),dT="(?:"+Qg+"(?:"+[$g,Zg,Jg].join("|")+")"+t_+e_+")*",pT=t_+e_+dT,mT="(?:".concat(["".concat($g).concat(Gu,"?"),Gu,Zg,Jg,hT].join("|"),`
)`),gT=RegExp("".concat(Hu,"(?=").concat(Hu,")|").concat(mT).concat(pT),"g"),_T=[Qg,Ih,qg,Yg,Kg],xT=RegExp("[".concat(_T.join(""),"]"));function vT(s){return s.split("")}function n_(s){return xT.test(s)}function yT(s){return s.match(gT)||[]}function bT(s){return n_(s)?yT(s):vT(s)}function MT(s){return s==null?"":String(s)}function wT(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return s=MT(s),s&&Ta(s)&&!e&&n_(s)?bT(s):s.split(e)}function Wu(s,e){var t=document.createElement(s);return e&&Object.keys(e).forEach(function(n){var i=e[n],r=Ta(i)?i.trim():i;r===null||r===""||(n==="children"?t.append.apply(t,xn(ls(r))):t.setAttribute(n,r))}),t}var Oh={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function ST(s,e){e=Gr(Oh,e);var t=Dh(e.types),n=e.tagName,i=s.nodeValue,r=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(i)&&r.append(" "),o=uT(i).reduce(function(l,c,u,h){var f,d;return t.chars&&(d=wT(c).map(function(g){var p=Wu(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:g});return bi(p,"isChar",!0),a=[].concat(xn(a),[p]),p})),t.words||t.lines?(f=Wu(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?d:c}),bi(f,{isWord:!0,isWordStart:!0,isWordEnd:!0}),r.appendChild(f)):d.forEach(function(g){r.appendChild(g)}),u<h.length-1&&r.append(" "),t.words?l.concat(f):l},[]),/\s$/.test(i)&&r.append(" "),s.replaceWith(r),{words:o,chars:a}}function i_(s,e){var t=s.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(t))return n;if(t===3&&/\S/.test(s.nodeValue))return ST(s,e);var i=ls(s.childNodes);if(i.length&&(bi(s,"isSplit",!0),!Hr(s).isRoot)){s.style.display="inline-block",s.style.position="relative";var r=s.nextSibling,o=s.previousSibling,a=s.textContent||"",l=r?r.textContent:" ",c=o?o.textContent:" ";bi(s,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(c)})}return i.reduce(function(u,h){var f=i_(h,e),d=f.words,g=f.chars;return{words:[].concat(xn(u.words),xn(d)),chars:[].concat(xn(u.chars),xn(g))}},n)}function TT(s,e,t,n){if(!t.absolute)return{top:e?s.offsetTop:null};var i=s.offsetParent,r=Wg(n,2),o=r[0],a=r[1],l=0,c=0;if(i&&i!==document.body){var u=i.getBoundingClientRect();l=u.x+o,c=u.y+a}var h=s.getBoundingClientRect(),f=h.width,d=h.height,g=h.x,p=h.y,m=p+a-c,_=g+o-l;return{width:f,height:d,top:m,left:_}}function r_(s){Hr(s).isWord?(jg(s),s.replaceWith.apply(s,xn(s.childNodes))):ls(s.children).forEach(function(e){return r_(e)})}var CT=function(){return document.createDocumentFragment()};function ET(s,e,t){var n=Dh(e.types),i=e.tagName,r=s.getElementsByTagName("*"),o=[],a=[],l=null,c,u,h,f=[],d=s.parentElement,g=s.nextElementSibling,p=CT(),m=window.getComputedStyle(s),_=m.textAlign,M=parseFloat(m.fontSize),y=M*.2;return e.absolute&&(h={left:s.offsetLeft,top:s.offsetTop,width:s.offsetWidth},u=s.offsetWidth,c=s.offsetHeight,bi(s,{cssWidth:s.style.width,cssHeight:s.style.height})),ls(r).forEach(function(v){var x=v.parentElement===s,T=TT(v,x,e,t),E=T.width,b=T.height,S=T.top,R=T.left;/^br$/i.test(v.nodeName)||(n.lines&&x&&((l===null||S-l>=y)&&(l=S,o.push(a=[])),a.push(v)),e.absolute&&bi(v,{top:S,left:R,width:E,height:b}))}),d&&d.removeChild(s),n.lines&&(f=o.map(function(v){var x=Wu(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(_,"; width: 100%;")});bi(x,"isLine",!0);var T={height:0,top:1e4};return p.appendChild(x),v.forEach(function(E,b,S){var R=Hr(E),H=R.isWordEnd,k=R.top,O=R.height,I=S[b+1];T.height=Math.max(T.height,O),T.top=Math.min(T.top,k),x.appendChild(E),H&&Hr(I).isWordStart&&x.append(" ")}),e.absolute&&bi(x,{height:T.height,top:T.top}),x}),n.words||r_(p),s.replaceChildren(p)),e.absolute&&(s.style.width="".concat(s.style.width||u,"px"),s.style.height="".concat(c,"px"),ls(r).forEach(function(v){var x=Hr(v),T=x.isLine,E=x.top,b=x.left,S=x.width,R=x.height,H=Hr(v.parentElement),k=!T&&H.isLine;v.style.top="".concat(k?E-H.top:E,"px"),v.style.left=T?"".concat(h.left,"px"):"".concat(b-(k?h.left:0),"px"),v.style.height="".concat(R,"px"),v.style.width=T?"".concat(h.width,"px"):"".concat(S,"px"),v.style.position="absolute"})),d&&(g?d.insertBefore(s,g):d.appendChild(s)),f}var Ds=Gr(Oh,{}),AT=function(){bp(s,null,[{key:"clearData",value:function(){lT()}},{key:"setDefaults",value:function(t){return Ds=Gr(Ds,hl(t)),Oh}},{key:"revert",value:function(t){Sp(t).forEach(function(n){var i=Hr(n),r=i.isSplit,o=i.html,a=i.cssWidth,l=i.cssHeight;r&&(n.innerHTML=o,n.style.width=a||"",n.style.height=l||"",jg(n))})}},{key:"create",value:function(t,n){return new s(t,n)}},{key:"data",get:function(){return hi}},{key:"defaults",get:function(){return Ds},set:function(t){Ds=Gr(Ds,hl(t))}}]);function s(e,t){K1(this,s),this.isSplit=!1,this.settings=Gr(Ds,hl(t)),this.elements=Sp(e),this.split()}return bp(s,[{key:"split",value:function(t){var n=this;this.revert(),this.elements.forEach(function(o){bi(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=Gr(this.settings,hl(t)));var r=Dh(this.settings.types);r.none||(this.elements.forEach(function(o){bi(o,"isRoot",!0);var a=i_(o,n.settings),l=a.words,c=a.chars;n.words=[].concat(xn(n.words),xn(l)),n.chars=[].concat(xn(n.chars),xn(c))}),this.elements.forEach(function(o){if(r.lines||n.settings.absolute){var a=ET(o,n.settings,i);n.lines=[].concat(xn(n.lines),xn(a))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),cT())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),s.revert(this.elements)}}]),s}();Yi.registerPlugin(nt,as);let LT=as.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:2.4,effects:!0});nt.create({trigger:".trigger",pin:".pin",start:"bottom center",end:"+=368"});let s_;document.querySelectorAll(".sous-titre");s_=document.querySelectorAll(".sous-titre-wrapper");s_.forEach(s=>{let e=s.querySelector(".sous-titre");e.innerHTML.trim().split("").forEach(function(o){});const i=AT.create(e,{types:"chars"}).chars;let r=Yi.timeline({paused:"true",scrollTrigger:{trigger:s,start:"top 92%",toggleActions:"restart none none reverse"}});Yi.set(i,{y:24,opacity:0}),r.to(i,{y:0,stagger:{each:.05,from:"left"},duration:.2,ease:"sine.out"},0).to(i,{opacity:1,stagger:{each:.05,from:"left"},duration:.4,ease:"expoScale(0.5,7,none)"},0)});document.querySelector("#other-drawin");document.querySelector("#croquis");let Ql=[],o_=[];o_=document.querySelectorAll(".projets");document.querySelectorAll(".arrow-left");document.querySelectorAll(".arrow-right");console.log(Ql);Ql.forEach((s,e)=>{s.addEventListener("click",t=>{const n=document.getElementById(`projet-${e}`);document.getElementById(`projet-${e+1}`),n.classList.remove("display-none"),n.querySelector(".croix").addEventListener("click",()=>{n.classList.add("display-none")})}),s.querySelector(".arrow-left")});Yi.utils.toArray("nav a").forEach(function(s,e){s.addEventListener("click",t=>{var n=t.target.getAttribute("href");console.log(n),LT.scrollTo(n,!0,"top 80px"),t.preventDefault()})});Ql=document.querySelectorAll(".projet");let Yn=[];for(let s=0;s<o_.length;s++)Yn.push(document.querySelector(`#projet-${s}`));let Xu=document.querySelector("#fond-projet");Yi.set(Yn,{opacity:0,display:"none"});Yi.set(Xu,{opacity:0,display:"none"});Ql.forEach((s,e)=>{let t=`#projet-${e}`;s.addEventListener("click",n=>{Bs(Xu),Bs(t)}),document.querySelector(t).querySelector(".croix").addEventListener("click",()=>{Vs(t),Vs(Xu)})});function Bs(s){Yi.timeline().to(s,{display:"block",duration:0},0).to(s,{autoAlpha:1,opacity:1,duration:1.2,ease:"easeIn"},0)}function Vs(s){Yi.timeline().to(s,{opacity:0,autoAlpha:0,duration:1.2,ease:" easeOut"},0).to(s,{display:"none",duration:.01},0)}Yn.forEach((s,e)=>{console.log(s);let t=s.querySelector(".arrow-left"),n=s.querySelector(".arrow-right");t.addEventListener("click",()=>{e>0?(Vs(Yn[e]),Bs(Yn[e-1])):(Bs(Yn[3]),Vs(Yn[e]))}),n.addEventListener("click",()=>{e<Yn.length-2?(Vs(Yn[e]),Bs(Yn[e+1])):(Vs(Yn[e]),Bs(Yn[0]))})});

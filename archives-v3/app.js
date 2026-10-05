(()=>{var vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},su=0,Ec=1,ru=2;var Tc=1,xa=2,zn=3,Kn=0,an=1,We=2,Qn=0,Fi=1,Zi=2,wc=3,Ac=4,ou=5,fi=100,au=101,lu=102,cu=103,hu=104,uu=200,du=201,fu=202,pu=203,Go=204,Wo=205,mu=206,gu=207,_u=208,xu=209,yu=210,vu=211,Mu=212,Su=213,bu=214,ya=0,va=1,Ma=2,Oi=3,Sa=4,ba=5,Ea=6,Ta=7,Rc=0,Eu=1,Tu=2,ti=0,wu=1,Au=2,Ru=3,wa=4,Cu=5,Pu=6,Iu=7;var Cc=300,Ji=301,$i=302,Aa=303,Ra=304,no=306,ws=1e3,di=1001,Xo=1002,vn=1003,Du=1004;var io=1005;var Cn=1006,Ca=1007;var Si=1008;var Dn=1009,Pc=1010,Ic=1011,Ys=1012,Pa=1013,bi=1014,kn=1015,Zs=1016,Ia=1017,Da=1018,Js=1020,Dc=35902,Lc=35899,Uc=1021,Nc=1022,Sn=1023,As=1026,$s=1027,Fc=1028,La=1029,Oc=1030,Ua=1031;var Na=1033,so=33776,ro=33777,oo=33778,ao=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Ha=37492,Va=37496,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Za=37813,Ja=37814,$a=37815,Ka=37816,ja=37817,Qa=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,ol=36283,al=36284,ll=36285,cl=36286;var br=2300,qo=2301,Ho=2302,dc=2400,fc=2401,pc=2402;var Lu=3200,Uu=3201;var Bc=0,Nu=1,ei="",Oe="srgb",Bi="srgb-linear",Er="linear",me="srgb";var Ui=7680;var mc=519,Fu=512,Ou=513,Bu=514,zc=515,zu=516,ku=517,Hu=518,Vu=519,gc=35044;var kc="300 es",Rn=2e3,Tr=2001;var On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ch=1234567,yr=Math.PI/180,zi=180/Math.PI;function Ki(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Hc(i,t){return(i%t+t)%t}function kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Hd(i,t,e){return i!==t?(e-i)/(t-i):0}function vr(i,t,e){return(1-e)*i+e*t}function Vd(i,t,e,n){return vr(i,t,1-Math.exp(-e*n))}function Gd(i,t=1){return t-Math.abs(Hc(i,t*2)-t)}function Wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Yd(i,t){return i+Math.random()*(t-i)}function Zd(i){return i*(.5-Math.random())}function Jd(i){i!==void 0&&(Ch=i);let t=Ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $d(i){return i*yr}function Kd(i){return i*zi}function jd(i){return(i&i-1)===0&&i!==0}function Qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ef(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),p=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vc={DEG2RAD:yr,RAD2DEG:zi,generateUUID:Ki,clamp:jt,euclideanModulo:Hc,mapLinear:kd,inverseLerp:Hd,lerp:vr,damp:Vd,pingpong:Gd,smoothstep:Wd,smootherstep:Xd,randInt:qd,randFloat:Yd,randFloatSpread:Zd,seededRandom:Jd,degToRad:$d,radToDeg:Kd,isPowerOfTwo:jd,ceilPowerOfTwo:Qd,floorPowerOfTwo:tf,setQuaternionFromProperEuler:ef,normalize:rn,denormalize:Es},ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==p||c!==d||h!==g){let m=1-a,f=l*p+c*d+h*g+u*y,w=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){let P=Math.sqrt(E),A=Math.atan2(P,f*w);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}let v=a*w;if(l=l*m+p*v,c=c*m+d*v,h=h*m+g*v,u=u*m+y*v,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*p,t[e+1]=l*g+h*p+c*u-a*d,t[e+2]=c*g+h*d+a*p-l*u,t[e+3]=h*g-a*u-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),p=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zl.copy(this).projectOnVector(t),this.sub(zl)}reflect(t){return this.sub(zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new R,Ph=new Mn,Kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],y=s[0],m=s[3],f=s[6],w=s[1],E=s[4],v=s[7],P=s[2],A=s[5],N=s[8];return r[0]=o*y+a*w+l*P,r[3]=o*m+a*E+l*A,r[6]=o*f+a*v+l*N,r[1]=c*y+h*w+u*P,r[4]=c*m+h*E+u*A,r[7]=c*f+h*v+u*N,r[2]=p*y+d*w+g*P,r[5]=p*m+d*E+g*A,r[8]=p*f+d*v+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,p=a*l-h*r,d=c*r-o*l,g=e*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=p*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kl.makeScale(t,e)),this}rotate(t){return this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kl=new Kt;function Gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){let i=Rs("canvas");return i.style.display="block",i}var Ih={};function Cs(i){i in Ih||(Ih[i]=!0,console.warn(i))}function Wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Dh=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){let i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bi]:{primaries:t,whitePoint:n,transfer:Er,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var le=nf();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,Yo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{us===void 0&&(us=Rs("canvas")),us.width=t.width,us.height=t.height;let s=us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sf=0,Ps=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hl(s[o].image)):r.push(Hl(s[o]))}else r=Hl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rf=0,Vl=new R,on=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,s=di,r=Cn,o=Si,a=Sn,l=Dn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Ki(),this.name="",this.source=new Ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Cc;on.DEFAULT_ANISOTROPY=1;var pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(d+1)/2,P=(f+1)/2,A=(h+p)/4,N=(u+y)/4,O=(g+m)/4;return E>v&&E>P?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=N/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=O/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=N/r,s=O/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-y)/w,this.z=(p-h)/w,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends On{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new on(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ps(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),yo.subVectors(this.max,dr),ds.subVectors(t.a,dr),fs.subVectors(t.b,dr),ps.subVectors(t.c,dr),ri.subVectors(fs,ds),oi.subVectors(ps,fs),Pi.subVectors(ds,ps);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Pi.y,Pi.x,0];return!Gl(e,ds,fs,ps,yo)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,ds,fs,ps,yo))?!1:(vo.crossVectors(ri,oi),e=[vo.x,vo.y,vo.z],Gl(e,ds,fs,ps,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xn=[new R,new R,new R,new R,new R,new R,new R,new R],Tn=new R,xo=new pi,ds=new R,fs=new R,ps=new R,ri=new R,oi=new R,Pi=new R,dr=new R,yo=new R,vo=new R,Ii=new R;function Gl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var of=new pi,fr=new R,Wl=new R,ki=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):of.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(Wl)),this.expandByPoint(fr.copy(t.center).sub(Wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qn=new R,Xl=new R,Mo=new R,ai=new R,ql=new R,So=new R,Yl=new R,Hi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xl.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Mo),a=ai.dot(this.direction),l=-ai.dot(Mo),c=ai.lengthSq(),h=Math.abs(1-o*o),u,p,d,g;if(h>0)if(u=o*l-a,p=o*a-l,g=r*h,u>=0)if(p>=-g)if(p<=g){let y=1/h;u*=y,p*=y,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xl).addScaledVector(Mo,p),d}intersectSphere(t,e){qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){ql.subVectors(e,t),So.subVectors(n,t),Yl.crossVectors(ql,So);let o=this.direction.dot(Yl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);let l=a*this.direction.dot(So.crossVectors(ai,So));if(l<0)return null;let c=a*this.direction.dot(ql.cross(ai));if(c<0||l+c>o)return null;let h=-a*ai.dot(Yl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,p,d,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,p,d,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,p,d,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=p-y*c,e[9]=-a*l,e[2]=y-p*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,d=l*u,g=c*h,y=c*u;e[0]=p+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,d=l*u,g=c*h,y=c*u;e[0]=p-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=p*c+y,e[1]=l*u,e[5]=y*c+p,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-p*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=p-y*u}else if(t.order==="XZY"){let p=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(af,t,lf)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),li.crossVectors(n,dn),li.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),li.crossVectors(n,dn)),li.normalize(),bo.crossVectors(dn,li),s[0]=li.x,s[4]=bo.x,s[8]=dn.x,s[1]=li.y,s[5]=bo.y,s[9]=dn.y,s[2]=li.z,s[6]=bo.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],y=n[6],m=n[10],f=n[14],w=n[3],E=n[7],v=n[11],P=n[15],A=s[0],N=s[4],O=s[8],b=s[12],S=s[1],U=s[5],H=s[9],q=s[13],V=s[2],Z=s[6],$=s[10],lt=s[14],G=s[3],ut=s[7],Rt=s[11],ft=s[15];return r[0]=o*A+a*S+l*V+c*G,r[4]=o*N+a*U+l*Z+c*ut,r[8]=o*O+a*H+l*$+c*Rt,r[12]=o*b+a*q+l*lt+c*ft,r[1]=h*A+u*S+p*V+d*G,r[5]=h*N+u*U+p*Z+d*ut,r[9]=h*O+u*H+p*$+d*Rt,r[13]=h*b+u*q+p*lt+d*ft,r[2]=g*A+y*S+m*V+f*G,r[6]=g*N+y*U+m*Z+f*ut,r[10]=g*O+y*H+m*$+f*Rt,r[14]=g*b+y*q+m*lt+f*ft,r[3]=w*A+E*S+v*V+P*G,r[7]=w*N+E*U+v*Z+P*ut,r[11]=w*O+E*H+v*$+P*Rt,r[15]=w*b+E*q+v*lt+P*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],d=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*p+n*c*p+s*a*d-n*l*d)+y*(+e*l*d-e*c*p+r*o*p-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*p+s*o*u-n*o*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],d=t[11],g=t[12],y=t[13],m=t[14],f=t[15],w=u*m*c-y*p*c+y*l*d-a*m*d-u*l*f+a*p*f,E=g*p*c-h*m*c-g*l*d+o*m*d+h*l*f-o*p*f,v=h*y*c-g*u*c+g*a*d-o*y*d-h*a*f+o*u*f,P=g*u*l-h*y*l-g*a*p+o*y*p+h*a*m-o*u*m,A=e*w+n*E+s*v+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/A;return t[0]=w*N,t[1]=(y*p*r-u*m*r-y*s*d+n*m*d+u*s*f-n*p*f)*N,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*f+n*l*f)*N,t[3]=(u*l*r-a*p*r-u*s*c+n*p*c+a*s*d-n*l*d)*N,t[4]=E*N,t[5]=(h*m*r-g*p*r+g*s*d-e*m*d-h*s*f+e*p*f)*N,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*N,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*d+e*l*d)*N,t[8]=v*N,t[9]=(g*u*r-h*y*r-g*n*d+e*y*d+h*n*f-e*u*f)*N,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*N,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*N,t[12]=P*N,t[13]=(h*y*s-g*u*s+g*n*p-e*y*p-h*n*m+e*u*m)*N,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*N,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*p+e*a*p)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,p=r*c,d=r*h,g=r*u,y=o*h,m=o*u,f=a*u,w=l*c,E=l*h,v=l*u,P=n.x,A=n.y,N=n.z;return s[0]=(1-(y+f))*P,s[1]=(d+v)*P,s[2]=(g-E)*P,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(p+f))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+E)*N,s[9]=(m-w)*N,s[10]=(1-(p+y))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);let c=1/r,h=1/o,u=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Rn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Rn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Tr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),p=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Rn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Tr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new R,wn=new Ee,af=new R(0,0,0),lf=new R(1,1,1),li=new R,bo=new R,dn=new R,Uh=new Ee,Nh=new Mn,Pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cf=0,Fh=new R,gs=new Mn,Yn=new Ee,Eo=new R,pr=new R,hf=new R,uf=new Mn,Oh=new R(1,0,0),Bh=new R(0,1,0),zh=new R(0,0,1),kh={type:"added"},df={type:"removed"},_s={type:"childadded",child:null},Zl={type:"childremoved",child:null},Be=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Pn,n=new Mn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Kt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Eo.copy(t):Eo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(pr,Eo,this.up):Yn.lookAt(Eo,pr,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Yn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(df),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Be.DEFAULT_UP=new R(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new R,Zn=new R,Jl=new R,Jn=new R,xs=new R,ys=new R,Hh=new R,$l=new R,Kl=new R,jl=new R,Ql=new pe,tc=new pe,ec=new pe,ui=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Zn.subVectors(n,e),Jl.subVectors(t,e);let o=An.dot(An),a=An.dot(Zn),l=An.dot(Jl),c=Zn.dot(Zn),h=Zn.dot(Jl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ql.setScalar(0),tc.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,n),ec.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ql,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Zn.subVectors(t,e),An.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),An.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,n),ys.subVectors(r,n),$l.subVectors(t,n);let l=xs.dot($l),c=ys.dot($l);if(l<=0&&c<=0)return e.copy(n);Kl.subVectors(t,s);let h=xs.dot(Kl),u=ys.dot(Kl);if(h>=0&&u<=h)return e.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(xs,o);jl.subVectors(t,r);let d=xs.dot(jl),g=ys.dot(jl);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ys,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Hh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Hh,a);let f=1/(m+y+p);return o=y*f,a=p*f,e.copy(n).addScaledVector(xs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},To={h:0,s:0,l:0};function nc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Hc(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=nc(o,r,t+1/3),this.g=nc(o,r,t),this.b=nc(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=Xu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return le.workingToColorSpace(je.copy(this),t),Math.round(jt(je.r*255,0,255))*65536+Math.round(jt(je.g*255,0,255))*256+Math.round(jt(je.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Oe){le.workingToColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(To);let n=vr(ci.h,To.h,e),s=vr(ci.s,To.s,e),r=vr(ci.l,To.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new ie;ie.NAMES=Xu;var ff=0,jn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Fi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},tn=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new R,wo=new ct,pf=0,pn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}};var Rr=class extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},mf=0,yn=new Ee,ic=new Be,vs=new R,fn=new pi,mr=new pi,Ve=new R,we=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(fn.min,mr.min),fn.expandByPoint(Ve),Ve.addVectors(fn.max,mr.max),fn.expandByPoint(Ve)):(fn.expandByPoint(mr.min),fn.expandByPoint(mr.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(t,c),Ve.add(vs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new R,l[O]=new R;let c=new R,h=new R,u=new R,p=new ct,d=new ct,g=new ct,y=new R,m=new R;function f(O,b,S){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),p.fromBufferAttribute(r,O),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(p),g.sub(p);let U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(U),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(U),a[O].add(y),a[b].add(y),a[S].add(y),l[O].add(m),l[b].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,b=w.length;O<b;++O){let S=w[O],U=S.start,H=S.count;for(let q=U,V=U+H;q<V;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let E=new R,v=new R,P=new R,A=new R;function N(O){P.fromBufferAttribute(s,O),A.copy(P);let b=a[O];E.copy(b),E.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(A,b);let U=v.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,U)}for(let O=0,b=w.length;O<b;++O){let S=w[O],U=S.start,H=S.count;for(let q=U,V=U+H;q<V;q+=3)N(t.getX(q+0)),N(t.getX(q+1)),N(t.getX(q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let p=0,d=t.count;p<d;p+=3){let g=t.getX(p+0),y=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),d=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let f=0;f<h;f++)p[g++]=c[d++]}return new pn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],d=t(p,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vh=new Ee,Di=new Hi,Ao=new ki,Gh=new R,Ro=new R,Co=new R,Po=new R,sc=new R,Io=new R,Wh=new R,Do=new R,ln=class extends Be{constructor(t=new we,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(sc.fromBufferAttribute(u,t),o?Io.addScaledVector(sc,h):Io.addScaledVector(sc.sub(e),h))}e.add(Io)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(Ao.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Ao,Gh)===null||Di.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Vh.copy(r).invert(),Di.copy(t.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){let m=p[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,P=E;v<P;v+=3){let A=a.getX(v),N=a.getX(v+1),O=a.getX(v+2);s=Lo(this,f,t,n,c,h,u,A,N,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,f=y;m<f;m+=3){let w=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);s=Lo(this,o,t,n,c,h,u,w,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){let m=p[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,P=E;v<P;v+=3){let A=v,N=v+1,O=v+2;s=Lo(this,f,t,n,c,h,u,A,N,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,f=y;m<f;m+=3){let w=m,E=m+1,v=m+2;s=Lo(this,o,t,n,c,h,u,w,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function gf(i,t,e,n,s,r,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Kn,a),l===null)return null;Do.copy(a),Do.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:i}}function Lo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ro),i.getVertexPosition(l,Co),i.getVertexPosition(c,Po);let h=gf(i,t,e,n,Ro,Co,Po,Wh);if(h){let u=new R;ui.getBarycoord(Wh,Ro,Co,Po,u),s&&(h.uv=ui.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=ui.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new R,materialIndex:0};ui.getNormal(Ro,Co,Po,p.normal),h.face=p,h.barycoord=u}return h}var mi=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(y,m,f,w,E,v,P,A,N,O,b){let S=v/N,U=P/O,H=v/2,q=P/2,V=A/2,Z=N+1,$=O+1,lt=0,G=0,ut=new R;for(let Rt=0;Rt<$;Rt++){let ft=Rt*U-q;for(let Yt=0;Yt<Z;Yt++){let te=Yt*S-H;ut[y]=te*w,ut[m]=ft*E,ut[f]=V,c.push(ut.x,ut.y,ut.z),ut[y]=0,ut[m]=0,ut[f]=A>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Yt/N),u.push(1-Rt/O),lt+=1}}for(let Rt=0;Rt<O;Rt++)for(let ft=0;ft<N;ft++){let Yt=p+ft+Z*Rt,te=p+ft+Z*(Rt+1),he=p+(ft+1)+Z*(Rt+1),ee=p+(ft+1)+Z*Rt;l.push(Yt,te,ee),l.push(te,he,ee),G+=6}a.addGroup(d,G,b),d+=G,p+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=ji(i[e]);for(let s in n)t[s]=n[s]}return t}function _f(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var qu={clone:ji,merge:en},xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=_f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pr=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new R,Xh=new ct,qh=new ct,Ge=class extends Pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Xh,qh),e.subVectors(qh,Xh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ms=-90,Ss=1,$o=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(Ms,Ss,t,e);s.layers=this.layers,this.add(s);let r=new Ge(Ms,Ss,t,e);r.layers=this.layers,this.add(r);let o=new Ge(Ms,Ss,t,e);o.layers=this.layers,this.add(o);let a=new Ge(Ms,Ss,t,e);a.layers=this.layers,this.add(a);let l=new Ge(Ms,Ss,t,e);l.layers=this.layers,this.add(l);let c=new Ge(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ir=class extends on{constructor(t=[],e=Ji,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ko=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mi(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Qn});r.uniforms.tEquirect.value=e;let o=new ln(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Cn),new $o(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ye=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},vf={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Dr=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var rc=new R,Mf=new R,Sf=new Kt,Qe=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=rc.subVectors(n,e).cross(Mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(rc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sf.getNormalMatrix(t),s=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new ki,bf=new ct(.5,.5),Uo=new R,Ds=class{constructor(t=new Qe,e=new Qe,n=new Qe,s=new Qe,r=new Qe,o=new Qe){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],d=r[7],g=r[8],y=r[9],m=r[10],f=r[11],w=r[12],E=r[13],v=r[14],P=r[15];if(s[0].setComponents(c-o,d-h,f-g,P-w).normalize(),s[1].setComponents(c+o,d+h,f+g,P+w).normalize(),s[2].setComponents(c+a,d+u,f+y,P+E).normalize(),s[3].setComponents(c-a,d-u,f-y,P-E).normalize(),n)s[4].setComponents(l,p,m,v).normalize(),s[5].setComponents(c-l,d-p,f-m,P-v).normalize();else if(s[4].setComponents(c-l,d-p,f-m,P-v).normalize(),e===Rn)s[5].setComponents(c+l,d+p,f+m,P+v).normalize();else if(e===Tr)s[5].setComponents(l,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);let e=bf.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gi=class extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jo=new R,Qo=new R,Yh=new Ee,gr=new Hi,No=new ki,oc=new R,Zh=new R,Ls=class extends Be{constructor(t=new we,e=new gi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)jo.fromBufferAttribute(e,s-1),Qo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=jo.distanceTo(Qo);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Yh.copy(s).invert(),gr.copy(t.ray).applyMatrix4(Yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){let f=h.getX(y),w=h.getX(y+1),E=Fo(this,t,gr,l,f,w,y);E&&e.push(E)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(d),f=Fo(this,t,gr,l,y,m,g-1);f&&e.push(f)}}else{let d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){let f=Fo(this,t,gr,l,y,y+1,y);f&&e.push(f)}if(this.isLineLoop){let y=Fo(this,t,gr,l,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(jo.fromBufferAttribute(a,s),Qo.fromBufferAttribute(a,r),e.distanceSqToSegment(jo,Qo,oc,Zh)>n)return;oc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oc);if(!(c<t.near||c>t.far))return{distance:c,point:Zh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Jh=new R,$h=new R,ta=class extends Ls{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Jh.fromBufferAttribute(e,s),$h.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jh.distanceTo($h);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Us=class extends on{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Lr=class extends on{constructor(t,e,n=bi,s,r,o,a=vn,l=vn,c,h=As,u=1){if(h!==As&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:u};super(p,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ur=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vi=class i extends we{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,p=e,d=2*u+p,g=n*2+r,y=s+1,m=new R,f=new R;for(let w=0;w<=g;w++){let E=0,v=0,P=0,A=0;if(w<=n){let b=w/n,S=b*Math.PI/2;v=-h-t*Math.cos(S),P=t*Math.sin(S),A=-t*Math.cos(S),E=b*u}else if(w<=n+r){let b=(w-n)/r;v=-h+b*e,P=t,A=0,E=u+b*p}else{let b=(w-n-r)/n,S=b*Math.PI/2;v=h+t*Math.sin(S),P=t*Math.cos(S),A=t*Math.sin(S),E=u+p+b*u}let N=Math.max(0,Math.min(1,E/d)),O=0;w===0?O=.5/s:w===g&&(O=-.5/s);for(let b=0;b<=s;b++){let S=b/s,U=S*Math.PI*2,H=Math.sin(U),q=Math.cos(U);f.x=-P*q,f.y=v,f.z=P*H,a.push(f.x,f.y,f.z),m.set(-P*q,A,P*H),m.normalize(),l.push(m.x,m.y,m.z),c.push(S+O,N)}if(w>0){let b=(w-1)*y;for(let S=0;S<s;S++){let U=b+S,H=b+S+1,q=w*y+S,V=w*y+S+1;o.push(U,H,q),o.push(H,V,q)}}}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ns=class i extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fs=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],d=[],g=0,y=[],m=n/2,f=0;w(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(d,2));function w(){let v=new R,P=new R,A=0,N=(e-t)/n;for(let O=0;O<=r;O++){let b=[],S=O/r,U=S*(e-t)+t;for(let H=0;H<=s;H++){let q=H/s,V=q*l+a,Z=Math.sin(V),$=Math.cos(V);P.x=U*Z,P.y=-S*n+m,P.z=U*$,u.push(P.x,P.y,P.z),v.set(Z,N,$).normalize(),p.push(v.x,v.y,v.z),d.push(q,1-S),b.push(g++)}y.push(b)}for(let O=0;O<s;O++)for(let b=0;b<r;b++){let S=y[b][O],U=y[b+1][O],H=y[b+1][O+1],q=y[b][O+1];(t>0||b!==0)&&(h.push(S,U,q),A+=3),(e>0||b!==r-1)&&(h.push(U,H,q),A+=3)}c.addGroup(f,A,0),f+=A}function E(v){let P=g,A=new ct,N=new R,O=0,b=v===!0?t:e,S=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*S,0),p.push(0,S,0),d.push(.5,.5),g++;let U=g;for(let H=0;H<=s;H++){let V=H/s*l+a,Z=Math.cos(V),$=Math.sin(V);N.x=b*$,N.y=m*S,N.z=b*Z,u.push(N.x,N.y,N.z),p.push(0,S,0),A.x=Z*.5+.5,A.y=$*.5*S+.5,d.push(A.x,A.y),g++}for(let H=0;H<s;H++){let q=P+H,V=U+H;v===!0?h.push(V,V+1,q):h.push(V+1,V,q),O+=3}c.addGroup(f,O,v===!0?1:2),f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Os=class i extends Fs{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new Ee;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Bs=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ea=class extends Bs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,d*=h,s(o,a,p,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Oo=new R,ac=new Xc,lc=new Xc,cc=new Xc,Gi=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Oo.subVectors(s[0],s[1]).add(s[0]),c=Oo);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Oo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Oo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ac.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,y,m),lc.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,y,m),cc.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),lc.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),cc.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(ac.calc(l),lc.calc(l),cc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Ef(i,t){let e=1-i;return e*e*t}function Tf(i,t){return 2*(1-i)*i*t}function wf(i,t){return i*i*t}function Mr(i,t,e,n){return Ef(i,t)+Tf(i,e)+wf(i,n)}function Af(i,t){let e=1-i;return e*e*e*t}function Rf(i,t){let e=1-i;return 3*e*e*i*t}function Cf(i,t){return 3*(1-i)*i*i*t}function Pf(i,t){return i*i*i*t}function Sr(i,t,e,n,s){return Af(i,t)+Rf(i,e)+Cf(i,n)+Pf(i,s)}var Nr=class extends mn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},na=class extends mn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y),Sr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends mn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends mn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends mn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends mn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y),Mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Kh(a,l.x,c.x,h.x,u.x),Kh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},sa=Object.freeze({__proto__:null,ArcCurve:ea,CatmullRomCurve3:Gi,CubicBezierCurve:Nr,CubicBezierCurve3:na,EllipseCurve:Bs,LineCurve:Fr,LineCurve3:ia,QuadraticBezierCurve:Or,QuadraticBezierCurve3:Br,SplineCurve:zr}),ra=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new sa[s.type]().fromJSON(s))}return this}},kr=class extends ra{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Or(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Nr(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Bs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zs=class extends kr{constructor(t){super(t),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new kr().fromJSON(s))}return this}};function If(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Yu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ff(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let p=e;p<s;p+=e){let d=i[p],g=i[p+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Hr(r,o,e,a,l,c,0),o}function Yu(i,t,e,n,s){let r;if(s===Yf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=jh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=jh(o/n|0,i[o],i[o+1],r);return r&&ks(r,r.next)&&(Gr(r),r=r.next),r}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ks(e,e.next)||Te(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Lf(i,n,s,r):Df(i)){t.push(l.i,i.i,c.i),Gr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Uf(Wi(i),t),Hr(i,t,e,n,s,r,2)):o===2&&Nf(i,t,e,n,s,r):Hr(Wi(i),t,e,n,s,r,1);break}}}function Df(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),p=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&xr(s,a,r,l,o,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,p=o.y,d=Math.min(a,l,c),g=Math.min(h,u,p),y=Math.max(a,l,c),m=Math.max(h,u,p),f=_c(d,g,t,e,n),w=_c(y,m,t,e,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=f&&v&&v.z<=w;){if(E.x>=d&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&xr(a,h,l,u,c,p,E.x,E.y)&&Te(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&xr(a,h,l,u,c,p,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=f;){if(E.x>=d&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&xr(a,h,l,u,c,p,E.x,E.y)&&Te(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=w;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&xr(a,h,l,u,c,p,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Uf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ks(n,s)&&Ju(n,e,e.next,s)&&Vr(n,s)&&Vr(s,n)&&(t.push(n.i,e.i,s.i),Gr(e),Gr(e.next),e=i=s),e=e.next}while(e!==i);return Wi(e)}function Nf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wf(o,a)){let l=$u(o,a);o=Wi(o,o.next),l=Wi(l,l.next),Hr(o,t,e,n,s,r,0),Hr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ff(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Yu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Gf(c))}s.sort(Of);for(let r=0;r<s.length;r++)e=Bf(s[r],e);return e}function Of(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Bf(i,t){let e=zf(i,t);if(!e)return t;let n=$u(e,i);return Wi(n,n.next),Wi(e,e.next)}function zf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ks(i,e))return e;do{if(ks(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Zu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Vr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&kf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function kf(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Hf(i,t,e,n){let s=i;do s.z===0&&(s.z=_c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vf(s)}function Vf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function _c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function xr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Zu(i,t,e,n,s,r,o,a)}function Wf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xf(i,t)&&(Vr(i,t)&&Vr(t,i)&&qf(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||ks(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ks(i,t){return i.x===t.x&&i.y===t.y}function Ju(i,t,e,n){let s=zo(Te(i,t,e)),r=zo(Te(i,t,n)),o=zo(Te(e,n,i)),a=zo(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&Bo(i,e,t)||r===0&&Bo(i,n,t)||o===0&&Bo(e,i,n)||a===0&&Bo(e,t,n))}function Bo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zo(i){return i>0?1:i<0?-1:0}function Xf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ju(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function qf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $u(i,t){let e=xc(i.i,i.x,i.y),n=xc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jh(i,t,e,n){let s=xc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var yc=class{static triangulate(t,e,n=2){return If(t,e,n)}},Ni=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Qh(t),tu(n,t);let o=t.length;e.forEach(Qh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,tu(n,e[l]);let a=yc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Qh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Wr=class i extends we{constructor(t=new zs([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Zf,E,v=!1,P,A,N,O;f&&(E=f.getSpacedPoints(h),v=!0,p=!1,P=f.computeFrenetFrames(h,!1),A=new R,N=new R,O=new R),p||(m=0,d=0,g=0,y=0);let b=a.extractPoints(c),S=b.shape,U=b.holes;if(!Ni.isClockWise(S)){S=S.reverse();for(let at=0,st=U.length;at<st;at++){let nt=U[at];Ni.isClockWise(nt)&&(U[at]=nt.reverse())}}function q(at){let nt=10000000000000001e-36,et=at[0];for(let yt=1;yt<=at.length;yt++){let Y=yt%at.length,xt=at[Y],Zt=xt.x-et.x,Gt=xt.y-et.y,T=Zt*Zt+Gt*Gt,_=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(et.x),Math.abs(et.y)),z=nt*_*_;if(T<=z){at.splice(Y,1),yt--;continue}et=xt}}q(S),U.forEach(q);let V=U.length,Z=S;for(let at=0;at<V;at++){let st=U[at];S=S.concat(st)}function $(at,st,nt){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(st,nt)}let lt=S.length;function G(at,st,nt){let et,yt,Y,xt=at.x-st.x,Zt=at.y-st.y,Gt=nt.x-at.x,T=nt.y-at.y,_=xt*xt+Zt*Zt,z=xt*T-Zt*Gt;if(Math.abs(z)>Number.EPSILON){let J=Math.sqrt(_),ot=Math.sqrt(Gt*Gt+T*T),K=st.x-Zt/J,Ft=st.y+xt/J,gt=nt.x-T/ot,Nt=nt.y+Gt/ot,Et=((gt-K)*T-(Nt-Ft)*Gt)/(xt*T-Zt*Gt);et=K+xt*Et-at.x,yt=Ft+Zt*Et-at.y;let mt=et*et+yt*yt;if(mt<=2)return new ct(et,yt);Y=Math.sqrt(mt/2)}else{let J=!1;xt>Number.EPSILON?Gt>Number.EPSILON&&(J=!0):xt<-Number.EPSILON?Gt<-Number.EPSILON&&(J=!0):Math.sign(Zt)===Math.sign(T)&&(J=!0),J?(et=-Zt,yt=xt,Y=Math.sqrt(_)):(et=xt,yt=Zt,Y=Math.sqrt(_/2))}return new ct(et/Y,yt/Y)}let ut=[];for(let at=0,st=Z.length,nt=st-1,et=at+1;at<st;at++,nt++,et++)nt===st&&(nt=0),et===st&&(et=0),ut[at]=G(Z[at],Z[nt],Z[et]);let Rt=[],ft,Yt=ut.concat();for(let at=0,st=V;at<st;at++){let nt=U[at];ft=[];for(let et=0,yt=nt.length,Y=yt-1,xt=et+1;et<yt;et++,Y++,xt++)Y===yt&&(Y=0),xt===yt&&(xt=0),ft[et]=G(nt[et],nt[Y],nt[xt]);Rt.push(ft),Yt=Yt.concat(ft)}let te;if(m===0)te=Ni.triangulateShape(Z,U);else{let at=[],st=[];for(let nt=0;nt<m;nt++){let et=nt/m,yt=d*Math.cos(et*Math.PI/2),Y=g*Math.sin(et*Math.PI/2)+y;for(let xt=0,Zt=Z.length;xt<Zt;xt++){let Gt=$(Z[xt],ut[xt],Y);_t(Gt.x,Gt.y,-yt),et===0&&at.push(Gt)}for(let xt=0,Zt=V;xt<Zt;xt++){let Gt=U[xt];ft=Rt[xt];let T=[];for(let _=0,z=Gt.length;_<z;_++){let J=$(Gt[_],ft[_],Y);_t(J.x,J.y,-yt),et===0&&T.push(J)}et===0&&st.push(T)}}te=Ni.triangulateShape(at,st)}let he=te.length,ee=g+y;for(let at=0;at<lt;at++){let st=p?$(S[at],Yt[at],ee):S[at];v?(N.copy(P.normals[0]).multiplyScalar(st.x),A.copy(P.binormals[0]).multiplyScalar(st.y),O.copy(E[0]).add(N).add(A),_t(O.x,O.y,O.z)):_t(st.x,st.y,0)}for(let at=1;at<=h;at++)for(let st=0;st<lt;st++){let nt=p?$(S[st],Yt[st],ee):S[st];v?(N.copy(P.normals[at]).multiplyScalar(nt.x),A.copy(P.binormals[at]).multiplyScalar(nt.y),O.copy(E[at]).add(N).add(A),_t(O.x,O.y,O.z)):_t(nt.x,nt.y,u/h*at)}for(let at=m-1;at>=0;at--){let st=at/m,nt=d*Math.cos(st*Math.PI/2),et=g*Math.sin(st*Math.PI/2)+y;for(let yt=0,Y=Z.length;yt<Y;yt++){let xt=$(Z[yt],ut[yt],et);_t(xt.x,xt.y,u+nt)}for(let yt=0,Y=U.length;yt<Y;yt++){let xt=U[yt];ft=Rt[yt];for(let Zt=0,Gt=xt.length;Zt<Gt;Zt++){let T=$(xt[Zt],ft[Zt],et);v?_t(T.x,T.y+E[h-1].y,E[h-1].x+nt):_t(T.x,T.y,u+nt)}}}tt(),ht();function tt(){let at=s.length/3;if(p){let st=0,nt=lt*st;for(let et=0;et<he;et++){let yt=te[et];Q(yt[2]+nt,yt[1]+nt,yt[0]+nt)}st=h+m*2,nt=lt*st;for(let et=0;et<he;et++){let yt=te[et];Q(yt[0]+nt,yt[1]+nt,yt[2]+nt)}}else{for(let st=0;st<he;st++){let nt=te[st];Q(nt[2],nt[1],nt[0])}for(let st=0;st<he;st++){let nt=te[st];Q(nt[0]+lt*h,nt[1]+lt*h,nt[2]+lt*h)}}n.addGroup(at,s.length/3-at,0)}function ht(){let at=s.length/3,st=0;Lt(Z,st),st+=Z.length;for(let nt=0,et=U.length;nt<et;nt++){let yt=U[nt];Lt(yt,st),st+=yt.length}n.addGroup(at,s.length/3-at,1)}function Lt(at,st){let nt=at.length;for(;--nt>=0;){let et=nt,yt=nt-1;yt<0&&(yt=at.length-1);for(let Y=0,xt=h+m*2;Y<xt;Y++){let Zt=lt*Y,Gt=lt*(Y+1),T=st+et+Zt,_=st+yt+Zt,z=st+yt+Gt,J=st+et+Gt;Jt(T,_,z,J)}}}function _t(at,st,nt){l.push(at),l.push(st),l.push(nt)}function Q(at,st,nt){ce(at),ce(st),ce(nt);let et=s.length/3,yt=w.generateTopUV(n,s,et-3,et-2,et-1);C(yt[0]),C(yt[1]),C(yt[2])}function Jt(at,st,nt,et){ce(at),ce(st),ce(et),ce(st),ce(nt),ce(et);let yt=s.length/3,Y=w.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);C(Y[0]),C(Y[1]),C(Y[3]),C(Y[1]),C(Y[2]),C(Y[3])}function ce(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function C(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sa[s.type]().fromJSON(s)),new i(n,t.options)}},Zf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],p=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(p,1-g),new ct(y,1-f)]:[new ct(a,1-l),new ct(h,1-u),new ct(d,1-g),new ct(m,1-f)]}};function Jf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xr=class i extends we{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=jt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,p=new ct,d=new R,g=new R,y=new R,m=0,f=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,d.x=f*1,d.y=-m,d.z=f*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(g)}for(let w=0;w<=e;w++){let E=n+w*h*s,v=Math.sin(E),P=Math.cos(E);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*v,u.y=t[A].y,u.z=t[A].x*P,o.push(u.x,u.y,u.z),p.x=w/e,p.y=A/(t.length-1),a.push(p.x,p.y);let N=l[3*A+0]*v,O=l[3*A+1],b=l[3*A+0]*P;c.push(N,O,b)}}for(let w=0;w<e;w++)for(let E=0;E<t.length-1;E++){let v=E+w*t.length,P=v,A=v+t.length,N=v+t.length+1,O=v+1;r.push(P,A,O),r.push(N,O,A)}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var gn=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,p=e/l,d=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let w=f*p-o;for(let E=0;E<c;E++){let v=E*u-r;g.push(v,-w,0),y.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let E=w+c*f,v=w+c*(f+1),P=w+1+c*(f+1),A=w+1+c*f;d.push(E,v,A),d.push(v,P,A)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qr=class i extends we{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,p=(e-t)/s,d=new R,g=new ct;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let f=r+m/n*o;d.x=u*Math.cos(f),d.y=u*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=p}for(let y=0;y<s;y++){let m=y*(n+1);for(let f=0;f<n;f++){let w=f+m,E=w,v=w+n+1,P=w+n+2,A=w+1;a.push(E,v,A),a.push(v,P,A)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var _i=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,p=new R,d=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let w=[],E=f/n,v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let A=P/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),y.push(p.x,p.y,p.z),m.push(A+v,1-E),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){let E=h[f][w+1],v=h[f][w],P=h[f+1][w],A=h[f+1][w+1];(f!==0||o>0)&&d.push(E,v,A),(f!==n-1||l<Math.PI)&&d.push(v,P,A)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Hs=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,p=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let y=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let y=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(y,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Vs=class i extends we{constructor(t=new Br(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new ct,h=new R,u=[],p=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(d,2));function y(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),w(),f()}function m(E){h=t.getPointAt(E/e,h);let v=o.normals[E],P=o.binormals[E];for(let A=0;A<=s;A++){let N=A/s*Math.PI*2,O=Math.sin(N),b=-Math.cos(N);l.x=b*v.x+O*P.x,l.y=b*v.y+O*P.y,l.z=b*v.z+O*P.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let E=1;E<=e;E++)for(let v=1;v<=s;v++){let P=(s+1)*(E-1)+(v-1),A=(s+1)*E+(v-1),N=(s+1)*E+v,O=(s+1)*(E-1)+v;g.push(P,A,O),g.push(A,N,O)}}function w(){for(let E=0;E<=e;E++)for(let v=0;v<=s;v++)c.x=E/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new sa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Yr=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var oa=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},aa=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Zr=class extends gi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function ko(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $f(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},la=class extends Xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fc:r=t,a=2*e-n;break;case pc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fc:o=t,l=2*n-e;break;case pc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-p*m+2*p*y-p*g,w=(1+p)*m+(-1.5-2*p)*y+(-.5+p)*g+1,E=(-1-d)*m+(1.5+d)*y+.5*g,v=d*m-d*y;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+w*o[c+P]+E*o[l+P]+v*o[u+P];return r}},ca=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*h;return r}},ha=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ko(e,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ko(t.times,Array),values:ko(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new la(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&$f(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,p=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[p+g]||y!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let d=0;d!==n;++d)e[p+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=qo;var xi=class extends _n{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=br;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};ua.prototype.ValueTypeName="color";var da=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};da.prototype.ValueTypeName="number";var fa=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Jr=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends _n{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=br;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="vector";var Vo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ma=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ku=new ma,Gs=class{constructor(t){this.manager=t!==void 0?t:Ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Gs.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=new WeakMap,ga=class extends Gs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Vo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=bs.get(o);u===void 0&&(u=[],bs.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=Rs("img");function l(){h(),e&&e(this);let u=bs.get(this)||[];for(let p=0;p<u.length;p++){let d=u[p];d.onLoad&&d.onLoad(this)}bs.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Vo.remove(`image:${t}`);let p=bs.get(this)||[];for(let d=0;d<p.length;d++){let g=p[d];g.onError&&g.onError(u)}bs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Vo.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Ws=class extends Gs{constructor(t){super(t)}load(t,e,n,s){let r=new on,o=new ga(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},qi=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},$r=class extends qi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},hc=new Ee,eu=new R,nu=new R,Kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(eu),nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nu),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},vc=class extends Kr{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=zi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},jr=class extends qi{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},iu=new Ee,_r=new R,uc=new R,Mc=class extends Kr{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(t.matrixWorld),n.position.copy(_r),uc.copy(n.position),uc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(uc),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu,n.coordinateSystem,n.reversedDepth)}},Qr=class extends qi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Yi=class extends Pr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sc=class extends Kr{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends qi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var _a=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var qc="\\[\\]\\.:\\/",Kf=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",jf="[^"+qc.replace("\\.","")+"]",Qf=/((?:WC+[\/:])*)/.source.replace("WC",Yc),tp=/(WCOD+)?/.source.replace("WCOD",jf),ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),ip=new RegExp("^"+Qf+tp+ep+np+"$"),sp=["material","materials","bones","map"],bc=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kf,"")}static parseTrackName(t){let e=ip.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=bc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);var qs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var to=class extends ta{constructor(t=10,e=10,n=4473924,s=8947848){n=new ie(n),s=new ie(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let p=0,d=0,g=-a;p<=e;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let y=p===r?n:s;y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3}let h=new we;h.setAttribute("position",new $t(l,3)),h.setAttribute("color",new $t(c,3));let u=new gi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var eo=class extends On{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Zc(i,t,e,n){let s=rp(n);switch(e){case Uc:return i*t;case Fc:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case Ua:return i*t*2/s.components*s.byteLength;case Nc:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rp(i){switch(i){case Dn:case Pc:return{byteLength:1,components:1};case Ys:case Ic:case Zs:return{byteLength:2,components:1};case Ia:case Da:return{byteLength:2,components:4};case bi:case Pa:case kn:return{byteLength:4,components:1};case Dc:case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Md(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ap(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){let g=u[p],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++p,u[p]=y)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ng=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,gg=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wg=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Pg=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:_p,begin_vertex:xp,beginnormal_vertex:yp,bsdfs:vp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:wp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Ip,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:tm,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:Zp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:$p,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:jp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:_m,metalnessmap_fragment:xm,metalnessmap_pars_fragment:ym,morphinstance_vertex:vm,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:bm,morphtarget_vertex:Em,normal_fragment_begin:Tm,normal_fragment_maps:wm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:Bm,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Zm,skinning_vertex:Jm,skinnormal_vertex:$m,specularmap_fragment:Km,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:tg,transmission_fragment:eg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:sg,uv_vertex:rg,worldpos_vertex:og,background_vert:ag,background_frag:lg,backgroundCube_vert:cg,backgroundCube_frag:hg,cube_vert:ug,cube_frag:dg,depth_vert:fg,depth_frag:pg,distanceRGBA_vert:mg,distanceRGBA_frag:gg,equirect_vert:_g,equirect_frag:xg,linedashed_vert:yg,linedashed_frag:vg,meshbasic_vert:Mg,meshbasic_frag:Sg,meshlambert_vert:bg,meshlambert_frag:Eg,meshmatcap_vert:Tg,meshmatcap_frag:wg,meshnormal_vert:Ag,meshnormal_frag:Rg,meshphong_vert:Cg,meshphong_frag:Pg,meshphysical_vert:Ig,meshphysical_frag:Dg,meshtoon_vert:Lg,meshtoon_frag:Ug,points_vert:Ng,points_frag:Fg,shadow_vert:Og,shadow_frag:Bg,sprite_vert:zg,sprite_frag:kg},bt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Hn={basic:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:en([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:en([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:en([bt.points,bt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:en([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:en([bt.common,bt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:en([bt.sprite,bt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:en([bt.common,bt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:en([bt.lights,bt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Hn.physical={uniforms:en([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var hl={r:0,b:0,g:0},Qi=new Pn,Hg=new Ee;function Vg(i,t,e,n,s,r,o){let a=new ie(0),l=r===!0?0:1,c,h,u=null,p=0,d=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function y(E){let v=!1,P=g(E);P===null?f(a,l):P&&P.isColor&&(f(P,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,v){let P=g(v);P&&(P.isCubeTexture||P.mapping===no)?(h===void 0&&(h=new ln(new mi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:ji(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qi.copy(v.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(Qi)),h.material.toneMapped=le.getTransfer(P.colorSpace)!==me,(u!==P||p!==P.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,p=P.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new ln(new gn(2,2),new In({name:"BackgroundMaterial",uniforms:ji(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=le.getTransfer(P.colorSpace)!==me,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||p!==P.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=P,p=P.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,v){E.getRGB(hl,Wc(i)),n.buffers.color.setClear(hl.r,hl.g,hl.b,v,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:y,addToRenderList:m,dispose:w}}function Gg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(S,U,H,q,V){let Z=!1,$=u(q,H,U);r!==$&&(r=$,c(r.object)),Z=d(S,q,H,V),Z&&g(S,q,H,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(S,U,H,q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,U,H){let q=H.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let Z=V[U.id];Z===void 0&&(Z={},V[U.id]=Z);let $=Z[q];return $===void 0&&($=p(l()),Z[q]=$),$}function p(S){let U=[],H=[],q=[];for(let V=0;V<e;V++)U[V]=0,H[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:q,object:S,attributes:{},index:null}}function d(S,U,H,q){let V=r.attributes,Z=U.attributes,$=0,lt=H.getAttributes();for(let G in lt)if(lt[G].location>=0){let Rt=V[G],ft=Z[G];if(ft===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor)),Rt===void 0||Rt.attribute!==ft||ft&&Rt.data!==ft.data)return!0;$++}return r.attributesNum!==$||r.index!==q}function g(S,U,H,q){let V={},Z=U.attributes,$=0,lt=H.getAttributes();for(let G in lt)if(lt[G].location>=0){let Rt=Z[G];Rt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Rt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Rt=S.instanceColor));let ft={};ft.attribute=Rt,Rt&&Rt.data&&(ft.data=Rt.data),V[G]=ft,$++}r.attributes=V,r.attributesNum=$,r.index=q}function y(){let S=r.newAttributes;for(let U=0,H=S.length;U<H;U++)S[U]=0}function m(S){f(S,0)}function f(S,U){let H=r.newAttributes,q=r.enabledAttributes,V=r.attributeDivisors;H[S]=1,q[S]===0&&(i.enableVertexAttribArray(S),q[S]=1),V[S]!==U&&(i.vertexAttribDivisor(S,U),V[S]=U)}function w(){let S=r.newAttributes,U=r.enabledAttributes;for(let H=0,q=U.length;H<q;H++)U[H]!==S[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function E(S,U,H,q,V,Z,$){$===!0?i.vertexAttribIPointer(S,U,H,V,Z):i.vertexAttribPointer(S,U,H,q,V,Z)}function v(S,U,H,q){y();let V=q.attributes,Z=H.getAttributes(),$=U.defaultAttributeValues;for(let lt in Z){let G=Z[lt];if(G.location>=0){let ut=V[lt];if(ut===void 0&&(lt==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),lt==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ut!==void 0){let Rt=ut.normalized,ft=ut.itemSize,Yt=t.get(ut);if(Yt===void 0)continue;let te=Yt.buffer,he=Yt.type,ee=Yt.bytesPerElement,tt=he===i.INT||he===i.UNSIGNED_INT||ut.gpuType===Pa;if(ut.isInterleavedBufferAttribute){let ht=ut.data,Lt=ht.stride,_t=ut.offset;if(ht.isInstancedInterleavedBuffer){for(let Q=0;Q<G.locationSize;Q++)f(G.location+Q,ht.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Q=0;Q<G.locationSize;Q++)E(G.location+Q,ft/G.locationSize,he,Rt,Lt*ee,(_t+ft/G.locationSize*Q)*ee,tt)}else{if(ut.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)f(G.location+ht,ut.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ht=0;ht<G.locationSize;ht++)m(G.location+ht);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ht=0;ht<G.locationSize;ht++)E(G.location+ht,ft/G.locationSize,he,Rt,ft*ee,ft/G.locationSize*ht*ee,tt)}}else if($!==void 0){let Rt=$[lt];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv(G.location,Rt);break;case 3:i.vertexAttrib3fv(G.location,Rt);break;case 4:i.vertexAttrib4fv(G.location,Rt);break;default:i.vertexAttrib1fv(G.location,Rt)}}}}w()}function P(){O();for(let S in n){let U=n[S];for(let H in U){let q=U[H];for(let V in q)h(q[V].object),delete q[V];delete U[H]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let U=n[S.id];for(let H in U){let q=U[H];for(let V in q)h(q[V].object),delete q[V];delete U[H]}delete n[S.id]}function N(S){for(let U in n){let H=n[U];if(H[S.id]===void 0)continue;let q=H[S.id];for(let V in q)h(q[V].object),delete q[V];delete H[S.id]}}function O(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function Wg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,p){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*p[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Sn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let O=N===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Dn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==kn&&!O)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:P,maxSamples:A}}function qg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Qe,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,d){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,E=w*4,v=f.clippingState||null;l.value=v,v=h(g,p,E,d);for(let P=0;P!==E;++P)v[P]=e[P];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,d,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=d+y*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=d;E!==y;++E,v+=4)o.copy(u[E]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Yg(i){let t=new WeakMap;function e(o,a){return a===Aa?o.mapping=Ji:a===Ra&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Aa||a===Ra)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ko(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var js=4,ju=[.125,.215,.35,.446,.526,.582],ns=20,Jc=new Yi,Qu=new ie,$c=null,Kc=0,jc=0,Qc=!1,es=(1+Math.sqrt(5))/2,Ks=1/es,td=[new R(-es,Ks,0),new R(es,Ks,0),new R(-Ks,0,es),new R(Ks,0,es),new R(0,es,-Ks),new R(0,es,Ks),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Zg=new R,fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Zg}=r;$c=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($c,Kc,jc),this._renderer.xr.enabled=Qc,t.scissorTest=!1,ul(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$c=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Zs,format:Sn,colorSpace:Bi,depthBuffer:!1},s=ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(r)),this._blurMaterial=$g(r,t,e)}return s}_compileMaterial(t){let e=new ln(this._lodPlanes[0],t);this._renderer.compile(e,Jc)}_sceneToCubeUV(t,e,n,s,r){let l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Qu),u.toneMapping=ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let y=new tn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new ln(new mi,y),f=!1,w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,f=!0):(y.color.copy(Qu),f=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let P=this._cubeSize;ul(s,v*P,E>2?P:0,P,P),u.setRenderTarget(s),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ji||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ul(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Jc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=td[(s-r-1)%td.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ln(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ns-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let f=[],w=0;for(let N=0;N<ns;++N){let O=N/y,b=Math.exp(-O*O/2);f.push(b),N===0?w+=b:N<m&&(w+=2*b)}for(let N=0;N<f.length;N++)f[N]=f[N]/w;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:E}=this;p.dTheta.value=g,p.mipInt.value=E-n;let v=this._sizeLods[s],P=3*v*(s>E-js?s-E+js:0),A=4*(this._cubeSize-v);ul(e,P,A,3*v,2*v),l.setRenderTarget(e),l.render(u,Jc)}};function Jg(i){let t=[],e=[],n=[],s=i,r=i-js+1+ju.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-js?l=ju[o-i+js-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,m=2,f=1,w=new Float32Array(y*g*d),E=new Float32Array(m*g*d),v=new Float32Array(f*g*d);for(let A=0;A<d;A++){let N=A%3*2/3-1,O=A>2?0:-1,b=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];w.set(b,y*g*A),E.set(p,m*g*A);let S=[A,A,A,A,A,A];v.set(S,f*g*A)}let P=new we;P.setAttribute("position",new pn(w,y)),P.setAttribute("uv",new pn(E,m)),P.setAttribute("faceIndex",new pn(v,f)),t.push(P),s>js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ed(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ul(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $g(i,t,e){let n=new Float32Array(ns),s=new R(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function nd(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function id(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function Kg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Aa||l===Ra,h=l===Ji||l===$i;if(c||h){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new fl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new fl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qg(i,t,e,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];let d=r.get(p);d&&(t.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let d in p)t.update(p[d],i.ARRAY_BUFFER)}function c(u){let p=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let w=d.array;y=d.version;for(let E=0,v=w.length;E<v;E+=3){let P=w[E+0],A=w[E+1],N=w[E+2];p.push(P,A,A,N,N,P)}}else if(g!==void 0){let w=g.array;y=g.version;for(let E=0,v=w.length/3-1;E<v;E+=3){let P=E+0,A=E+1,N=E+2;p.push(P,A,A,N,N,P)}}else return;let m=new(Gc(p)?Cr:Rr)(p,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let p=r.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function t0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*o,g),e.update(d,n,g))}function h(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];e.update(m,n,1)}function u(p,d,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,y,0,g);let f=0;for(let w=0;w<g;w++)f+=d[w]*y[w];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function e0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function n0(i,t,e){let n=new WeakMap,s=new pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let b=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let v=a.attributes.position.count*E,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*P*4*u),N=new wr(A,v,P,u);N.type=kn,N.needsUpdate=!0;let O=E*4;for(let S=0;S<u;S++){let U=m[S],H=f[S],q=w[S],V=v*P*4*S;for(let Z=0;Z<U.count;Z++){let $=Z*O;d===!0&&(s.fromBufferAttribute(U,Z),A[V+$+0]=s.x,A[V+$+1]=s.y,A[V+$+2]=s.z,A[V+$+3]=0),g===!0&&(s.fromBufferAttribute(H,Z),A[V+$+4]=s.x,A[V+$+5]=s.y,A[V+$+6]=s.z,A[V+$+7]=0),y===!0&&(s.fromBufferAttribute(q,Z),A[V+$+8]=s.x,A[V+$+9]=s.y,A[V+$+10]=s.z,A[V+$+11]=q.itemSize===4?s.w:1)}}p={count:u,texture:N,size:new ct(v,P)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function i0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Sd=new on,sd=new Lr(1,1),bd=new wr,Ed=new Jo,Td=new Ir,rd=[],od=[],ad=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=rd[s];if(r===void 0&&(r=new Float32Array(s),rd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ml(i,t){let e=od[t];e===void 0&&(e=new Int32Array(t),od[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function l0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;cd.set(n),i.uniformMatrix2fv(this.addr,!1,cd),ke(e,n)}}function c0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;ld.set(n),i.uniformMatrix3fv(this.addr,!1,ld),ke(e,n)}}function h0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;ad.set(n),i.uniformMatrix4fv(this.addr,!1,ad),ke(e,n)}}function u0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function m0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sd.compareFunction=zc,r=sd):r=Sd,e.setTexture2D(t||r,s)}function v0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ed,s)}function M0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Td,s)}function S0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bd,s)}function b0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}function E0(i,t){i.uniform1fv(this.addr,t)}function T0(i,t){let e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function w0(i,t){let e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function A0(i,t){let e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function R0(i,t){let e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C0(i,t){let e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P0(i,t){let e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I0(i,t){i.uniform1iv(this.addr,t)}function D0(i,t){i.uniform2iv(this.addr,t)}function L0(i,t){i.uniform3iv(this.addr,t)}function U0(i,t){i.uniform4iv(this.addr,t)}function N0(i,t){i.uniform1uiv(this.addr,t)}function F0(i,t){i.uniform2uiv(this.addr,t)}function O0(i,t){i.uniform3uiv(this.addr,t)}function B0(i,t){i.uniform4uiv(this.addr,t)}function z0(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sd,r[o])}function k0(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ed,r[o])}function H0(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Td,r[o])}function V0(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bd,r[o])}function G0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return w0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return I0;case 35667:case 35671:return D0;case 35668:case 35672:return L0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return V0}}var eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b0(e.type)}},nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G0(e.type)}},ih=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},th=/(\w+)(\])?(\[|\.)?/g;function hd(i,t){i.seq.push(t),i.map[t.id]=t}function W0(i,t,e){let n=i.name,s=n.length;for(th.lastIndex=0;;){let r=th.exec(n),o=th.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hd(e,c===void 0?new eh(a,i,t):new nh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ih(a),hd(e,u)),e=u}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);W0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ud(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var X0=37297,q0=0;function Y0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var dd=new Kt;function Z0(i){le._getMatrix(dd,le.workingColorSpace,i);let t=`mat3( ${dd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Er:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Y0(i.getShaderSource(t),a)}else return r}function J0(i,t){let e=Z0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $0(i,t){let e;switch(t){case wu:e="Linear";break;case Au:e="Reinhard";break;case Ru:e="Cineon";break;case wa:e="ACESFilmic";break;case Pu:e="AgX";break;case Iu:e="Neutral";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dl=new R;function K0(){le.getLuminanceCoefficients(dl);let i=dl.x.toFixed(4),t=dl.y.toFixed(4),e=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function Q0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function t_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function lo(i){return i!==""}function pd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function md(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(e_,i_)}var n_=new Map;function i_(i,t){let e=Qt[t];if(e===void 0){let n=n_.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sh(e)}var s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(i){return i.replace(s_,r_)}function r_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function a_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case $i:t="ENVMAP_TYPE_CUBE";break;case no:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function c_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Eu:t="ENVMAP_BLENDING_MIX";break;case Tu:t="ENVMAP_BLENDING_ADD";break}return t}function h_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function u_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=o_(e),c=a_(e),h=l_(e),u=c_(e),p=h_(e),d=j0(e),g=Q0(r),y=s.createProgram(),m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lo).join(`
`),f.length>0&&(f+=`
`)):(m=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),f=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ti?$0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,J0("linearToOutputTexel",e.outputColorSpace),K0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lo).join(`
`)),o=sh(o),o=pd(o,e),o=md(o,e),a=sh(a),a=pd(a,e),a=md(a,e),o=gd(o),a=gd(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=w+m+o,v=w+f+a,P=ud(s,s.VERTEX_SHADER,E),A=ud(s,s.FRAGMENT_SHADER,v);s.attachShader(y,P),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(U){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(y)||"",q=s.getShaderInfoLog(P)||"",V=s.getShaderInfoLog(A)||"",Z=H.trim(),$=q.trim(),lt=V.trim(),G=!0,ut=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,P,A);else{let Rt=fd(s,P,"vertex"),ft=fd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+Rt+`
`+ft)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):($===""||lt==="")&&(ut=!1);ut&&(U.diagnostics={runnable:G,programLog:Z,vertexShader:{log:$,prefix:m},fragmentShader:{log:lt,prefix:f}})}s.deleteShader(P),s.deleteShader(A),O=new Qs(s,y),b=t_(s,y)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,X0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=A,this}var d_=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oh(t),e.set(t,n)),n}},oh=class{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}};function f_(i,t,e,n,s,r,o){let a=new Ar,l=new rh,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,U,H,q){let V=H.fog,Z=q.geometry,$=b.isMeshStandardMaterial?H.environment:null,lt=(b.isMeshStandardMaterial?e:t).get(b.envMap||$),G=lt&&lt.mapping===no?lt.image.height:null,ut=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let Rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ft=Rt!==void 0?Rt.length:0,Yt=0;Z.morphAttributes.position!==void 0&&(Yt=1),Z.morphAttributes.normal!==void 0&&(Yt=2),Z.morphAttributes.color!==void 0&&(Yt=3);let te,he,ee,tt;if(ut){let re=Hn[ut];te=re.vertexShader,he=re.fragmentShader}else te=b.vertexShader,he=b.fragmentShader,l.update(b),ee=l.getVertexShaderID(b),tt=l.getFragmentShaderID(b);let ht=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),_t=q.isInstancedMesh===!0,Q=q.isBatchedMesh===!0,Jt=!!b.map,ce=!!b.matcap,C=!!lt,at=!!b.aoMap,st=!!b.lightMap,nt=!!b.bumpMap,et=!!b.normalMap,yt=!!b.displacementMap,Y=!!b.emissiveMap,xt=!!b.metalnessMap,Zt=!!b.roughnessMap,Gt=b.anisotropy>0,T=b.clearcoat>0,_=b.dispersion>0,z=b.iridescence>0,J=b.sheen>0,ot=b.transmission>0,K=Gt&&!!b.anisotropyMap,Ft=T&&!!b.clearcoatMap,gt=T&&!!b.clearcoatNormalMap,Nt=T&&!!b.clearcoatRoughnessMap,Et=z&&!!b.iridescenceMap,mt=z&&!!b.iridescenceThicknessMap,Tt=J&&!!b.sheenColorMap,qt=J&&!!b.sheenRoughnessMap,Ot=!!b.specularMap,Mt=!!b.specularColorMap,Bt=!!b.specularIntensityMap,F=ot&&!!b.transmissionMap,it=ot&&!!b.thicknessMap,vt=!!b.gradientMap,It=!!b.alphaMap,dt=b.alphaTest>0,rt=!!b.alphaHash,Ut=!!b.extensions,Ht=ti;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let se={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:he,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Q,batchingColor:Q&&q._colorsTexture!==null,instancing:_t,instancingColor:_t&&q.instanceColor!==null,instancingMorph:_t&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Bi,alphaToCoverage:!!b.alphaToCoverage,map:Jt,matcap:ce,envMap:C,envMapMode:C&&lt.mapping,envMapCubeUVHeight:G,aoMap:at,lightMap:st,bumpMap:nt,normalMap:et,displacementMap:p&&yt,emissiveMap:Y,normalMapObjectSpace:et&&b.normalMapType===Nu,normalMapTangentSpace:et&&b.normalMapType===Bc,metalnessMap:xt,roughnessMap:Zt,anisotropy:Gt,anisotropyMap:K,clearcoat:T,clearcoatMap:Ft,clearcoatNormalMap:gt,clearcoatRoughnessMap:Nt,dispersion:_,iridescence:z,iridescenceMap:Et,iridescenceThicknessMap:mt,sheen:J,sheenColorMap:Tt,sheenRoughnessMap:qt,specularMap:Ot,specularColorMap:Mt,specularIntensityMap:Bt,transmission:ot,transmissionMap:F,thicknessMap:it,gradientMap:vt,opaque:b.transparent===!1&&b.blending===Fi&&b.alphaToCoverage===!1,alphaMap:It,alphaTest:dt,alphaHash:rt,combine:b.combine,mapUv:Jt&&y(b.map.channel),aoMapUv:at&&y(b.aoMap.channel),lightMapUv:st&&y(b.lightMap.channel),bumpMapUv:nt&&y(b.bumpMap.channel),normalMapUv:et&&y(b.normalMap.channel),displacementMapUv:yt&&y(b.displacementMap.channel),emissiveMapUv:Y&&y(b.emissiveMap.channel),metalnessMapUv:xt&&y(b.metalnessMap.channel),roughnessMapUv:Zt&&y(b.roughnessMap.channel),anisotropyMapUv:K&&y(b.anisotropyMap.channel),clearcoatMapUv:Ft&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:qt&&y(b.sheenRoughnessMap.channel),specularMapUv:Ot&&y(b.specularMap.channel),specularColorMapUv:Mt&&y(b.specularColorMap.channel),specularIntensityMapUv:Bt&&y(b.specularIntensityMap.channel),transmissionMapUv:F&&y(b.transmissionMap.channel),thicknessMapUv:it&&y(b.thicknessMap.channel),alphaMapUv:It&&y(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(et||Gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Z.attributes.uv&&(Jt||It),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Lt,skinning:q.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Jt&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===me,decodeVideoTextureEmissive:Y&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===We,flipSided:b.side===an,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function f(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)S.push(U),S.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(w(S,b),E(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function E(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let S=g[b.type],U;if(S){let H=Hn[S];U=qu.clone(H.uniforms)}else U=b.uniforms;return U}function P(b,S){let U;for(let H=0,q=h.length;H<q;H++){let V=h[H];if(V.cacheKey===S){U=V,++U.usedTimes;break}}return U===void 0&&(U=new u_(i,S,b,r),h.push(U)),U}function A(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function N(b){l.remove(b)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:P,releaseProgram:A,releaseShaderCache:N,programs:h,dispose:O}}function p_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function m_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,d,g,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,p,d,g,y,m){let f=o(u,p,d,g,y,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function l(u,p,d,g,y,m){let f=o(u,p,d,g,y,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||m_),n.length>1&&n.sort(p||xd),s.length>1&&s.sort(p||xd)}function h(){for(let u=t,p=i.length;u<p;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function g_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new yd,i.set(n,[o])):s>=r.length?(o=new yd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function __(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ie};break;case"SpotLight":e={position:new R,direction:new R,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function x_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var y_=0;function v_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M_(i){let t=new __,e=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Ee,o=new Ee;function a(c){let h=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,y=0,m=0,f=0,w=0,E=0,v=0,P=0,A=0,N=0;c.sort(v_);for(let b=0,S=c.length;b<S;b++){let U=c[b],H=U.color,q=U.intensity,V=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=H.r*q,u+=H.g*q,p+=H.b*q;else if(U.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(U.sh.coefficients[$],q);N++}else if(U.isDirectionalLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let lt=U.shadow,G=e.get(U);G.shadowIntensity=lt.intensity,G.shadowBias=lt.bias,G.shadowNormalBias=lt.normalBias,G.shadowRadius=lt.radius,G.shadowMapSize=lt.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=U.shadow.matrix,w++}n.directional[d]=$,d++}else if(U.isSpotLight){let $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(H).multiplyScalar(q),$.distance=V,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,n.spot[y]=$;let lt=U.shadow;if(U.map&&(n.spotLightMap[P]=U.map,P++,lt.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[y]=lt.matrix,U.castShadow){let G=e.get(U);G.shadowIntensity=lt.intensity,G.shadowBias=lt.bias,G.shadowNormalBias=lt.normalBias,G.shadowRadius=lt.radius,G.shadowMapSize=lt.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=Z,v++}y++}else if(U.isRectAreaLight){let $=t.get(U);$.color.copy(H).multiplyScalar(q),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=$,m++}else if(U.isPointLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let lt=U.shadow,G=e.get(U);G.shadowIntensity=lt.intensity,G.shadowBias=lt.bias,G.shadowNormalBias=lt.normalBias,G.shadowRadius=lt.radius,G.shadowMapSize=lt.mapSize,G.shadowCameraNear=lt.camera.near,G.shadowCameraFar=lt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=U.shadow.matrix,E++}n.point[g]=$,g++}else if(U.isHemisphereLight){let $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(q),$.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[f]=$,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let O=n.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==f||O.numDirectionalShadows!==w||O.numPointShadows!==E||O.numSpotShadows!==v||O.numSpotMaps!==P||O.numLightProbes!==N)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=N,O.directionalLength=d,O.pointLength=g,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=f,O.numDirectionalShadows=w,O.numPointShadows=E,O.numSpotShadows=v,O.numSpotMaps=P,O.numLightProbes=N,n.version=y_++)}function l(c,h){let u=0,p=0,d=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let E=c[f];if(E.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(E.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function vd(i){let t=new M_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function S_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new vd(i),t.set(s,[a])):r>=o.length?(a=new vd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`;function T_(i,t,e){let n=new Ds,s=new ct,r=new ct,o=new pe,a=new oa({depthPacking:Uu}),l=new aa,c={},h=e.maxTextureSize,u={[Kn]:an,[an]:Kn,[We]:We},p=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:b_,fragmentShader:E_}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ln(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let f=this.type;this.render=function(A,N,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Qn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let q=f!==zn&&this.type===zn,V=f===zn&&this.type!==zn;for(let Z=0,$=A.length;Z<$;Z++){let lt=A[Z],G=lt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ut=G.getFrameExtents();if(s.multiply(ut),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,G.mapSize.y=r.y)),G.map===null||q===!0||V===!0){let ft=this.type!==zn?{minFilter:vn,magFilter:vn}:{};G.map!==null&&G.map.dispose(),G.map=new Bn(s.x,s.y,ft),G.map.texture.name=lt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let Rt=G.getViewportCount();for(let ft=0;ft<Rt;ft++){let Yt=G.getViewport(ft);o.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),H.viewport(o),G.updateMatrices(lt,ft),n=G.getFrustum(),v(N,O,G.camera,lt,this.type)}G.isPointLightShadow!==!0&&this.type===zn&&w(G,O),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,U)};function w(A,N){let O=t.update(y);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(N,null,O,p,y,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(N,null,O,d,y,null)}function E(A,N,O,b){let S=null,U=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)S=U;else if(S=O.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let H=S.uuid,q=N.uuid,V=c[H];V===void 0&&(V={},c[H]=V);let Z=V[q];Z===void 0&&(Z=S.clone(),V[q]=Z,N.addEventListener("dispose",P)),S=Z}if(S.visible=N.visible,S.wireframe=N.wireframe,b===zn?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:u[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=i.properties.get(S);H.light=O}return S}function v(A,N,O,b,S){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let q=t.update(A),V=A.material;if(Array.isArray(V)){let Z=q.groups;for(let $=0,lt=Z.length;$<lt;$++){let G=Z[$],ut=V[G.materialIndex];if(ut&&ut.visible){let Rt=E(A,ut,b,S);A.onBeforeShadow(i,A,N,O,q,Rt,G),i.renderBufferDirect(O,null,q,Rt,A,G),A.onAfterShadow(i,A,N,O,q,Rt,G)}}}else if(V.visible){let Z=E(A,V,b,S);A.onBeforeShadow(i,A,N,O,q,Z,null),i.renderBufferDirect(O,null,q,Z,A,null),A.onAfterShadow(i,A,N,O,q,Z,null)}}let H=A.children;for(let q=0,V=H.length;q<V;q++)v(H[q],N,O,b,S)}function P(A){A.target.removeEventListener("dispose",P);for(let O in c){let b=c[O],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var w_={[ya]:va,[Ma]:Ea,[Sa]:Ta,[Oi]:ba,[va]:ya,[Ea]:Ma,[Ta]:Sa,[ba]:Oi};function A_(i,t){function e(){let F=!1,it=new pe,vt=null,It=new pe(0,0,0,0);return{setMask:function(dt){vt!==dt&&!F&&(i.colorMask(dt,dt,dt,dt),vt=dt)},setLocked:function(dt){F=dt},setClear:function(dt,rt,Ut,Ht,se){se===!0&&(dt*=Ht,rt*=Ht,Ut*=Ht),it.set(dt,rt,Ut,Ht),It.equals(it)===!1&&(i.clearColor(dt,rt,Ut,Ht),It.copy(it))},reset:function(){F=!1,vt=null,It.set(-1,0,0,0)}}}function n(){let F=!1,it=!1,vt=null,It=null,dt=null;return{setReversed:function(rt){if(it!==rt){let Ut=t.get("EXT_clip_control");rt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),it=rt;let Ht=dt;dt=null,this.setClear(Ht)}},getReversed:function(){return it},setTest:function(rt){rt?ht(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(rt){vt!==rt&&!F&&(i.depthMask(rt),vt=rt)},setFunc:function(rt){if(it&&(rt=w_[rt]),It!==rt){switch(rt){case ya:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=rt}},setLocked:function(rt){F=rt},setClear:function(rt){dt!==rt&&(it&&(rt=1-rt),i.clearDepth(rt),dt=rt)},reset:function(){F=!1,vt=null,It=null,dt=null,it=!1}}}function s(){let F=!1,it=null,vt=null,It=null,dt=null,rt=null,Ut=null,Ht=null,se=null;return{setTest:function(re){F||(re?ht(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(re){it!==re&&!F&&(i.stencilMask(re),it=re)},setFunc:function(re,De,Ye){(vt!==re||It!==De||dt!==Ye)&&(i.stencilFunc(re,De,Ye),vt=re,It=De,dt=Ye)},setOp:function(re,De,Ye){(rt!==re||Ut!==De||Ht!==Ye)&&(i.stencilOp(re,De,Ye),rt=re,Ut=De,Ht=Ye)},setLocked:function(re){F=re},setClear:function(re){se!==re&&(i.clearStencil(re),se=re)},reset:function(){F=!1,it=null,vt=null,It=null,dt=null,rt=null,Ut=null,Ht=null,se=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,d=[],g=null,y=!1,m=null,f=null,w=null,E=null,v=null,P=null,A=null,N=new ie(0,0,0),O=0,b=!1,S=null,U=null,H=null,q=null,V=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,lt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=lt>=1):G.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=lt>=2);let ut=null,Rt={},ft=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),te=new pe().fromArray(ft),he=new pe().fromArray(Yt);function ee(F,it,vt,It){let dt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(F,rt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<vt;Ut++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(it+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return rt}let tt={};tt[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(Oi),nt(!1),et(Ec),ht(i.CULL_FACE),at(Qn);function ht(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Lt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function _t(F,it){return u[F]!==it?(i.bindFramebuffer(F,it),u[F]=it,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Q(F,it){let vt=d,It=!1;if(F){vt=p.get(it),vt===void 0&&(vt=[],p.set(it,vt));let dt=F.textures;if(vt.length!==dt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ut=dt.length;rt<Ut;rt++)vt[rt]=i.COLOR_ATTACHMENT0+rt;vt.length=dt.length,It=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,It=!0);It&&i.drawBuffers(vt)}function Jt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let ce={[fi]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};ce[cu]=i.MIN,ce[hu]=i.MAX;let C={[uu]:i.ZERO,[du]:i.ONE,[fu]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[yu]:i.SRC_ALPHA_SATURATE,[_u]:i.DST_COLOR,[mu]:i.DST_ALPHA,[pu]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[xu]:i.ONE_MINUS_DST_COLOR,[gu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[Mu]:i.ONE_MINUS_CONSTANT_COLOR,[Su]:i.CONSTANT_ALPHA,[bu]:i.ONE_MINUS_CONSTANT_ALPHA};function at(F,it,vt,It,dt,rt,Ut,Ht,se,re){if(F===Qn){y===!0&&(Lt(i.BLEND),y=!1);return}if(y===!1&&(ht(i.BLEND),y=!0),F!==ou){if(F!==m||re!==b){if((f!==fi||v!==fi)&&(i.blendEquation(i.FUNC_ADD),f=fi,v=fi),re)switch(F){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.ONE,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,E=null,P=null,A=null,N.set(0,0,0),O=0,m=F,b=re}return}dt=dt||it,rt=rt||vt,Ut=Ut||It,(it!==f||dt!==v)&&(i.blendEquationSeparate(ce[it],ce[dt]),f=it,v=dt),(vt!==w||It!==E||rt!==P||Ut!==A)&&(i.blendFuncSeparate(C[vt],C[It],C[rt],C[Ut]),w=vt,E=It,P=rt,A=Ut),(Ht.equals(N)===!1||se!==O)&&(i.blendColor(Ht.r,Ht.g,Ht.b,se),N.copy(Ht),O=se),m=F,b=!1}function st(F,it){F.side===We?Lt(i.CULL_FACE):ht(i.CULL_FACE);let vt=F.side===an;it&&(vt=!vt),nt(vt),F.blending===Fi&&F.transparent===!1?at(Qn):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let It=F.stencilWrite;a.setTest(It),It&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function et(F){F!==su?(ht(i.CULL_FACE),F!==U&&(F===Ec?i.cullFace(i.BACK):F===ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),U=F}function yt(F){F!==H&&($&&i.lineWidth(F),H=F)}function Y(F,it,vt){F?(ht(i.POLYGON_OFFSET_FILL),(q!==it||V!==vt)&&(i.polygonOffset(it,vt),q=it,V=vt)):Lt(i.POLYGON_OFFSET_FILL)}function xt(F){F?ht(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function Zt(F){F===void 0&&(F=i.TEXTURE0+Z-1),ut!==F&&(i.activeTexture(F),ut=F)}function Gt(F,it,vt){vt===void 0&&(ut===null?vt=i.TEXTURE0+Z-1:vt=ut);let It=Rt[vt];It===void 0&&(It={type:void 0,texture:void 0},Rt[vt]=It),(It.type!==F||It.texture!==it)&&(ut!==vt&&(i.activeTexture(vt),ut=vt),i.bindTexture(F,it||tt[F]),It.type=F,It.texture=it)}function T(){let F=Rt[ut];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(F){te.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),te.copy(F))}function qt(F){he.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),he.copy(F))}function Ot(F,it){let vt=c.get(it);vt===void 0&&(vt=new WeakMap,c.set(it,vt));let It=vt.get(F);It===void 0&&(It=i.getUniformBlockIndex(it,F.name),vt.set(F,It))}function Mt(F,it){let It=c.get(it).get(F);l.get(it)!==It&&(i.uniformBlockBinding(it,It,F.__bindingPointIndex),l.set(it,It))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,Rt={},u={},p=new WeakMap,d=[],g=null,y=!1,m=null,f=null,w=null,E=null,v=null,P=null,A=null,N=new ie(0,0,0),O=0,b=!1,S=null,U=null,H=null,q=null,V=null,te.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Lt,bindFramebuffer:_t,drawBuffers:Q,useProgram:Jt,setBlending:at,setMaterial:st,setFlipSided:nt,setCullFace:et,setLineWidth:yt,setPolygonOffset:Y,setScissorTest:xt,activeTexture:Zt,bindTexture:Gt,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:Et,texImage3D:mt,updateUBOMapping:Ot,uniformBlockBinding:Mt,texStorage2D:gt,texStorage3D:Nt,texSubImage2D:J,texSubImage3D:ot,compressedTexSubImage2D:K,compressedTexSubImage3D:Ft,scissor:Tt,viewport:qt,reset:Bt}}function R_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return d?new OffscreenCanvas(T,_):Rs("canvas")}function y(T,_,z){let J=1,ot=Gt(T);if((ot.width>z||ot.height>z)&&(J=z/Math.max(ot.width,ot.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let K=Math.floor(J*ot.width),Ft=Math.floor(J*ot.height);u===void 0&&(u=g(K,Ft));let gt=_?g(K,Ft):u;return gt.width=K,gt.height=Ft,gt.getContext("2d").drawImage(T,0,0,K,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+K+"x"+Ft+")."),gt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,_,z,J,ot=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=_;if(_===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),_===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let Ft=ot?Er:le.getTransfer(J);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=Ft===me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(T,_){let z;return T?_===null||_===bi||_===Js?z=i.DEPTH24_STENCIL8:_===kn?z=i.DEPTH32F_STENCIL8:_===Ys&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bi||_===Js?z=i.DEPTH_COMPONENT24:_===kn?z=i.DEPTH_COMPONENT32F:_===Ys&&(z=i.DEPTH_COMPONENT16),z}function P(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==vn&&T.minFilter!==Cn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){let _=T.target;_.removeEventListener("dispose",A),O(_),_.isVideoTexture&&h.delete(_)}function N(T){let _=T.target;_.removeEventListener("dispose",N),S(_)}function O(T){let _=n.get(T);if(_.__webglInit===void 0)return;let z=T.source,J=p.get(z);if(J){let ot=J[_.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&b(T),Object.keys(J).length===0&&p.delete(z)}n.remove(T)}function b(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let z=T.source,J=p.get(z);delete J[_.__cacheKey],o.memory.textures--}function S(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let ot=0;ot<_.__webglFramebuffer[J].length;ot++)i.deleteFramebuffer(_.__webglFramebuffer[J][ot]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=T.textures;for(let J=0,ot=z.length;J<ot;J++){let K=n.get(z[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[J])}n.remove(T)}let U=0;function H(){U=0}function q(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function V(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Z(T,_){let z=n.get(T);if(T.isVideoTexture&&xt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function $(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){tt(z,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function lt(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){tt(z,T,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function G(T,_){let z=n.get(T);if(T.version>0&&z.__version!==T.version){ht(z,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let ut={[ws]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},Rt={[vn]:i.NEAREST,[Du]:i.NEAREST_MIPMAP_NEAREST,[io]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},ft={[Fu]:i.NEVER,[Vu]:i.ALWAYS,[Ou]:i.LESS,[zc]:i.LEQUAL,[Bu]:i.EQUAL,[Hu]:i.GEQUAL,[zu]:i.GREATER,[ku]:i.NOTEQUAL};function Yt(T,_){if(_.type===kn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Cn||_.magFilter===Ca||_.magFilter===io||_.magFilter===Si||_.minFilter===Cn||_.minFilter===Ca||_.minFilter===io||_.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ut[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ut[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ut[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Rt[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Rt[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ft[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vn||_.minFilter!==io&&_.minFilter!==Si||_.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));let J=_.source,ot=p.get(J);ot===void 0&&(ot={},p.set(J,ot));let K=V(_);if(K!==T.__cacheKey){ot[K]===void 0&&(ot[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ot[K].usedTimes++;let Ft=ot[T.__cacheKey];Ft!==void 0&&(ot[T.__cacheKey].usedTimes--,Ft.usedTimes===0&&b(_)),T.__cacheKey=K,T.__webglTexture=ot[K].texture}return z}function he(T,_,z){return Math.floor(Math.floor(T/z)/_)}function ee(T,_,z,J){let K=T.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,J,_.data);else{K.sort((mt,Tt)=>mt.start-Tt.start);let Ft=0;for(let mt=1;mt<K.length;mt++){let Tt=K[Ft],qt=K[mt],Ot=Tt.start+Tt.count,Mt=he(qt.start,_.width,4),Bt=he(Tt.start,_.width,4);qt.start<=Ot+1&&Mt===Bt&&he(qt.start+qt.count-1,_.width,4)===Mt?Tt.count=Math.max(Tt.count,qt.start+qt.count-Tt.start):(++Ft,K[Ft]=qt)}K.length=Ft+1;let gt=i.getParameter(i.UNPACK_ROW_LENGTH),Nt=i.getParameter(i.UNPACK_SKIP_PIXELS),Et=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let mt=0,Tt=K.length;mt<Tt;mt++){let qt=K[mt],Ot=Math.floor(qt.start/4),Mt=Math.ceil(qt.count/4),Bt=Ot%_.width,F=Math.floor(Ot/_.width),it=Mt,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Bt,F,it,vt,z,J,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function tt(T,_,z){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let ot=te(T,_),K=_.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+z);let Ft=n.get(K);if(K.version!==Ft.__version||ot===!0){e.activeTexture(i.TEXTURE0+z);let gt=le.getPrimaries(le.workingColorSpace),Nt=_.colorSpace===ei?null:le.getPrimaries(_.colorSpace),Et=_.colorSpace===ei||gt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let mt=y(_.image,!1,s.maxTextureSize);mt=Zt(_,mt);let Tt=r.convert(_.format,_.colorSpace),qt=r.convert(_.type),Ot=E(_.internalFormat,Tt,qt,_.colorSpace,_.isVideoTexture);Yt(J,_);let Mt,Bt=_.mipmaps,F=_.isVideoTexture!==!0,it=Ft.__version===void 0||ot===!0,vt=K.dataReady,It=P(_,mt);if(_.isDepthTexture)Ot=v(_.format===$s,_.type),it&&(F?e.texStorage2D(i.TEXTURE_2D,1,Ot,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,mt.width,mt.height,0,Tt,qt,null));else if(_.isDataTexture)if(Bt.length>0){F&&it&&e.texStorage2D(i.TEXTURE_2D,It,Ot,Bt[0].width,Bt[0].height);for(let dt=0,rt=Bt.length;dt<rt;dt++)Mt=Bt[dt],F?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,Tt,qt,Mt.data):e.texImage2D(i.TEXTURE_2D,dt,Ot,Mt.width,Mt.height,0,Tt,qt,Mt.data);_.generateMipmaps=!1}else F?(it&&e.texStorage2D(i.TEXTURE_2D,It,Ot,mt.width,mt.height),vt&&ee(_,mt,Tt,qt)):e.texImage2D(i.TEXTURE_2D,0,Ot,mt.width,mt.height,0,Tt,qt,mt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){F&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ot,Bt[0].width,Bt[0].height,mt.depth);for(let dt=0,rt=Bt.length;dt<rt;dt++)if(Mt=Bt[dt],_.format!==Sn)if(Tt!==null)if(F){if(vt)if(_.layerUpdates.size>0){let Ut=Zc(Mt.width,Mt.height,_.format,_.type);for(let Ht of _.layerUpdates){let se=Mt.data.subarray(Ht*Ut/Mt.data.BYTES_PER_ELEMENT,(Ht+1)*Ut/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Ht,Mt.width,Mt.height,1,Tt,se)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,mt.depth,Tt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ot,Mt.width,Mt.height,mt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,mt.depth,Tt,qt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ot,Mt.width,Mt.height,mt.depth,0,Tt,qt,Mt.data)}else{F&&it&&e.texStorage2D(i.TEXTURE_2D,It,Ot,Bt[0].width,Bt[0].height);for(let dt=0,rt=Bt.length;dt<rt;dt++)Mt=Bt[dt],_.format!==Sn?Tt!==null?F?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,Tt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,Tt,qt,Mt.data):e.texImage2D(i.TEXTURE_2D,dt,Ot,Mt.width,Mt.height,0,Tt,qt,Mt.data)}else if(_.isDataArrayTexture)if(F){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ot,mt.width,mt.height,mt.depth),vt)if(_.layerUpdates.size>0){let dt=Zc(mt.width,mt.height,_.format,_.type);for(let rt of _.layerUpdates){let Ut=mt.data.subarray(rt*dt/mt.data.BYTES_PER_ELEMENT,(rt+1)*dt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,mt.width,mt.height,1,Tt,qt,Ut)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Tt,qt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,mt.width,mt.height,mt.depth,0,Tt,qt,mt.data);else if(_.isData3DTexture)F?(it&&e.texStorage3D(i.TEXTURE_3D,It,Ot,mt.width,mt.height,mt.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Tt,qt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,mt.width,mt.height,mt.depth,0,Tt,qt,mt.data);else if(_.isFramebufferTexture){if(it)if(F)e.texStorage2D(i.TEXTURE_2D,It,Ot,mt.width,mt.height);else{let dt=mt.width,rt=mt.height;for(let Ut=0;Ut<It;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Ot,dt,rt,0,Tt,qt,null),dt>>=1,rt>>=1}}else if(Bt.length>0){if(F&&it){let dt=Gt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,It,Ot,dt.width,dt.height)}for(let dt=0,rt=Bt.length;dt<rt;dt++)Mt=Bt[dt],F?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt,qt,Mt):e.texImage2D(i.TEXTURE_2D,dt,Ot,Tt,qt,Mt);_.generateMipmaps=!1}else if(F){if(it){let dt=Gt(mt);e.texStorage2D(i.TEXTURE_2D,It,Ot,dt.width,dt.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,qt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Tt,qt,mt);m(_)&&f(J),Ft.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ht(T,_,z){if(_.image.length!==6)return;let J=te(T,_),ot=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let K=n.get(ot);if(ot.version!==K.__version||J===!0){e.activeTexture(i.TEXTURE0+z);let Ft=le.getPrimaries(le.workingColorSpace),gt=_.colorSpace===ei?null:le.getPrimaries(_.colorSpace),Nt=_.colorSpace===ei||Ft===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let Et=_.isCompressedTexture||_.image[0].isCompressedTexture,mt=_.image[0]&&_.image[0].isDataTexture,Tt=[];for(let rt=0;rt<6;rt++)!Et&&!mt?Tt[rt]=y(_.image[rt],!0,s.maxCubemapSize):Tt[rt]=mt?_.image[rt].image:_.image[rt],Tt[rt]=Zt(_,Tt[rt]);let qt=Tt[0],Ot=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),Bt=E(_.internalFormat,Ot,Mt,_.colorSpace),F=_.isVideoTexture!==!0,it=K.__version===void 0||J===!0,vt=ot.dataReady,It=P(_,qt);Yt(i.TEXTURE_CUBE_MAP,_);let dt;if(Et){F&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Bt,qt.width,qt.height);for(let rt=0;rt<6;rt++){dt=Tt[rt].mipmaps;for(let Ut=0;Ut<dt.length;Ut++){let Ht=dt[Ut];_.format!==Sn?Ot!==null?F?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,Ht.width,Ht.height,Ot,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,Bt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,Ht.width,Ht.height,Ot,Mt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,Bt,Ht.width,Ht.height,0,Ot,Mt,Ht.data)}}}else{if(dt=_.mipmaps,F&&it){dt.length>0&&It++;let rt=Gt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Bt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(mt){F?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Tt[rt].width,Tt[rt].height,Ot,Mt,Tt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Bt,Tt[rt].width,Tt[rt].height,0,Ot,Mt,Tt[rt].data);for(let Ut=0;Ut<dt.length;Ut++){let se=dt[Ut].image[rt].image;F?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,se.width,se.height,Ot,Mt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,Bt,se.width,se.height,0,Ot,Mt,se.data)}}else{F?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,Mt,Tt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Bt,Ot,Mt,Tt[rt]);for(let Ut=0;Ut<dt.length;Ut++){let Ht=dt[Ut];F?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,Ot,Mt,Ht.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,Bt,Ot,Mt,Ht.image[rt])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),K.__version=ot.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Lt(T,_,z,J,ot,K){let Ft=r.convert(z.format,z.colorSpace),gt=r.convert(z.type),Nt=E(z.internalFormat,Ft,gt,z.colorSpace),Et=n.get(_),mt=n.get(z);if(mt.__renderTarget=_,!Et.__hasExternalTextures){let Tt=Math.max(1,_.width>>K),qt=Math.max(1,_.height>>K);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,K,Nt,Tt,qt,_.depth,0,Ft,gt,null):e.texImage2D(ot,K,Nt,Tt,qt,0,Ft,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Y(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ot,mt.__webglTexture,0,yt(_)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ot,mt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let J=_.depthTexture,ot=J&&J.isDepthTexture?J.type:null,K=v(_.stencilBuffer,ot),Ft=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=yt(_);Y(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,K,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,T)}else{let J=_.textures;for(let ot=0;ot<J.length;ot++){let K=J[ot],Ft=r.convert(K.format,K.colorSpace),gt=r.convert(K.type),Nt=E(K.internalFormat,Ft,gt,K.colorSpace),Et=yt(_);z&&Y(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Nt,_.width,_.height):Y(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,Nt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(_.depthTexture);J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);let ot=J.__webglTexture,K=yt(_);if(_.depthTexture.format===As)Y(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(_.depthTexture.format===$s)Y(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Jt(T){let _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let ot=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",ot)};J.addEventListener("dispose",ot),_.__depthDisposeCallback=ot}_.__boundDepthTexture=J}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let J=T.texture.mipmaps;J&&J.length>0?Q(_.__webglFramebuffer[0],T):Q(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),_t(_.__webglDepthbuffer[J],T,!1);else{let ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,K)}}else{let J=T.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),_t(_.__webglDepthbuffer,T,!1);else{let ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(T,_,z){let J=n.get(T);_!==void 0&&Lt(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Jt(T)}function C(T){let _=T.texture,z=n.get(T),J=n.get(_);T.addEventListener("dispose",N);let ot=T.textures,K=T.isWebGLCubeRenderTarget===!0,Ft=ot.length>1;if(Ft||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[gt]=[];for(let Nt=0;Nt<_.mipmaps.length;Nt++)z.__webglFramebuffer[gt][Nt]=i.createFramebuffer()}else z.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let gt=0;gt<_.mipmaps.length;gt++)z.__webglFramebuffer[gt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let gt=0,Nt=ot.length;gt<Nt;gt++){let Et=n.get(ot[gt]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Y(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let gt=0;gt<ot.length;gt++){let Nt=ot[gt];z.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[gt]);let Et=r.convert(Nt.format,Nt.colorSpace),mt=r.convert(Nt.type),Tt=E(Nt.internalFormat,Et,mt,Nt.colorSpace,T.isXRRenderTarget===!0),qt=yt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Tt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,z.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_);for(let gt=0;gt<6;gt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Nt=0;Nt<_.mipmaps.length;Nt++)Lt(z.__webglFramebuffer[gt][Nt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Nt);else Lt(z.__webglFramebuffer[gt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let gt=0,Nt=ot.length;gt<Nt;gt++){let Et=ot[gt],mt=n.get(Et),Tt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Tt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,mt.__webglTexture),Yt(Tt,Et),Lt(z.__webglFramebuffer,T,Et,i.COLOR_ATTACHMENT0+gt,Tt,0),m(Et)&&f(Tt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(gt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,J.__webglTexture),Yt(gt,_),_.mipmaps&&_.mipmaps.length>0)for(let Nt=0;Nt<_.mipmaps.length;Nt++)Lt(z.__webglFramebuffer[Nt],T,_,i.COLOR_ATTACHMENT0,gt,Nt);else Lt(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,gt,0);m(_)&&f(gt),e.unbindTexture()}T.depthBuffer&&Jt(T)}function at(T){let _=T.textures;for(let z=0,J=_.length;z<J;z++){let ot=_[z];if(m(ot)){let K=w(T),Ft=n.get(ot).__webglTexture;e.bindTexture(K,Ft),f(K),e.unbindTexture()}}}let st=[],nt=[];function et(T){if(T.samples>0){if(Y(T)===!1){let _=T.textures,z=T.width,J=T.height,ot=i.COLOR_BUFFER_BIT,K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(T),gt=_.length>1;if(gt)for(let Et=0;Et<_.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let Nt=T.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Et=0;Et<_.length;Et++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Et]);let mt=n.get(_[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,ot,i.NEAREST),l===!0&&(st.length=0,nt.length=0,st.push(i.COLOR_ATTACHMENT0+Et),T.depthBuffer&&T.resolveDepthBuffer===!1&&(st.push(K),nt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Et=0;Et<_.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Et]);let mt=n.get(_[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function yt(T){return Math.min(s.maxSamples,T.samples)}function Y(T){let _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xt(T){let _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Zt(T,_){let z=T.colorSpace,J=T.format,ot=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Bi&&z!==ei&&(le.getTransfer(z)===me?(J!==Sn||ot!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Gt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=lt,this.setTextureCube=G,this.rebindTextures=ce,this.setupRenderTarget=C,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Y}function C_(i,t){function e(n,s=ei){let r,o=le.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pc)return i.BYTE;if(n===Ic)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===Uc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===Sn)return i.RGBA;if(n===As)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ha||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Ha)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===il)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===al||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:P_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ln(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends On{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new ah,f={},w=e.getContextAttributes(),E=null,v=null,P=[],A=[],N=new ct,O=null,b=new Ge;b.viewport=new pe;let S=new Ge;S.viewport=new pe;let U=[b,S],H=new _a,q=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ht=P[tt];return ht===void 0&&(ht=new Is,P[tt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(tt){let ht=P[tt];return ht===void 0&&(ht=new Is,P[tt]=ht),ht.getGripSpace()},this.getHand=function(tt){let ht=P[tt];return ht===void 0&&(ht=new Is,P[tt]=ht),ht.getHandSpace()};function Z(tt){let ht=A.indexOf(tt.inputSource);if(ht===-1)return;let Lt=P[ht];Lt!==void 0&&(Lt.update(tt.inputSource,tt.frame,c||o),Lt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function $(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",lt);for(let tt=0;tt<P.length;tt++){let ht=A[tt];ht!==null&&(A[tt]=null,P[tt].disconnect(ht))}q=null,V=null,m.reset();for(let tt in f)delete f[tt];t.setRenderTarget(E),d=null,p=null,u=null,s=null,v=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",$),s.addEventListener("inputsourceschange",lt),w.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,_t=null,Q=null;w.depth&&(Q=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=w.stencil?$s:As,_t=w.stencil?Js:bi);let Jt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Jt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new Bn(p.textureWidth,p.textureHeight,{format:Sn,type:Dn,depthTexture:new Lr(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Lt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Bn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function lt(tt){for(let ht=0;ht<tt.removed.length;ht++){let Lt=tt.removed[ht],_t=A.indexOf(Lt);_t>=0&&(A[_t]=null,P[_t].disconnect(Lt))}for(let ht=0;ht<tt.added.length;ht++){let Lt=tt.added[ht],_t=A.indexOf(Lt);if(_t===-1){for(let Jt=0;Jt<P.length;Jt++)if(Jt>=A.length){A.push(Lt),_t=Jt;break}else if(A[Jt]===null){A[Jt]=Lt,_t=Jt;break}if(_t===-1)break}let Q=P[_t];Q&&Q.connect(Lt)}}let G=new R,ut=new R;function Rt(tt,ht,Lt){G.setFromMatrixPosition(ht.matrixWorld),ut.setFromMatrixPosition(Lt.matrixWorld);let _t=G.distanceTo(ut),Q=ht.projectionMatrix.elements,Jt=Lt.projectionMatrix.elements,ce=Q[14]/(Q[10]-1),C=Q[14]/(Q[10]+1),at=(Q[9]+1)/Q[5],st=(Q[9]-1)/Q[5],nt=(Q[8]-1)/Q[0],et=(Jt[8]+1)/Jt[0],yt=ce*nt,Y=ce*et,xt=_t/(-nt+et),Zt=xt*-nt;if(ht.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Zt),tt.translateZ(xt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Q[10]===-1)tt.projectionMatrix.copy(ht.projectionMatrix),tt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let Gt=ce+xt,T=C+xt,_=yt-Zt,z=Y+(_t-Zt),J=at*C/T*Gt,ot=st*C/T*Gt;tt.projectionMatrix.makePerspective(_,z,J,ot,Gt,T),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ft(tt,ht){ht===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ht.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ht=tt.near,Lt=tt.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(Lt=m.depthFar)),H.near=S.near=b.near=ht,H.far=S.far=b.far=Lt,(q!==H.near||V!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),q=H.near,V=H.far),H.layers.mask=tt.layers.mask|6,b.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;let _t=tt.parent,Q=H.cameras;ft(H,_t);for(let Jt=0;Jt<Q.length;Jt++)ft(Q[Jt],_t);Q.length===2?Rt(H,b,S):H.projectionMatrix.copy(b.projectionMatrix),Yt(tt,H,_t)};function Yt(tt,ht,Lt){Lt===null?tt.matrix.copy(ht.matrixWorld):(tt.matrix.copy(Lt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ht.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ht.projectionMatrix),tt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=zi*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(tt){l=tt,p!==null&&(p.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(tt){return f[tt]};let te=null;function he(tt,ht){if(h=ht.getViewerPose(c||o),g=ht,h!==null){let Lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let _t=!1;Lt.length!==H.cameras.length&&(H.cameras.length=0,_t=!0);for(let C=0;C<Lt.length;C++){let at=Lt[C],st=null;if(d!==null)st=d.getViewport(at);else{let et=u.getViewSubImage(p,at);st=et.viewport,C===0&&(t.setRenderTargetTextures(v,et.colorTexture,et.depthStencilTexture),t.setRenderTarget(v))}let nt=U[C];nt===void 0&&(nt=new Ge,nt.layers.enable(C),nt.viewport=new pe,U[C]=nt),nt.matrix.fromArray(at.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(at.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(st.x,st.y,st.width,st.height),C===0&&(H.matrix.copy(nt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),_t===!0&&H.cameras.push(nt)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let C=u.getDepthInformation(Lt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Q&&Q.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<Lt.length;C++){let at=Lt[C].camera;if(at){let st=f[at];st||(st=new Ur,f[at]=st);let nt=u.getCameraImage(at);st.sourceTexture=nt}}}}for(let Lt=0;Lt<P.length;Lt++){let _t=A[Lt],Q=P[Lt];_t!==null&&Q!==void 0&&Q.update(_t,ht,c||o)}te&&te(tt,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let ee=new Md;ee.setAnimationLoop(he),this.setAnimationLoop=function(tt){te=tt},this.dispose=function(){}}},ts=new Pn,D_=new Ee;function L_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Wc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=t.get(f),E=w.envMap,v=w.envMapRotation;E&&(m.envMap.value=E,ts.copy(v),ts.x*=-1,ts.y*=-1,ts.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(ts)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let v=E.program;n.uniformBlockBinding(w,v)}function c(w,E){let v=s[w.id];v===void 0&&(g(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",m));let P=E.program;n.updateUBOMapping(w,P);let A=t.render.frame;r[w.id]!==A&&(p(w),r[w.id]=A)}function h(w){let E=u();w.__bindingPointIndex=E;let v=i.createBuffer(),P=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let E=s[w.id],v=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,N=v.length;A<N;A++){let O=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,S=O.length;b<S;b++){let U=O[b];if(d(U,A,b,P)===!0){let H=U.__offset,q=Array.isArray(U.value)?U.value:[U.value],V=0;for(let Z=0;Z<q.length;Z++){let $=q[Z],lt=y($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,H+V,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,V),V+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,E,v,P){let A=w.value,N=E+"_"+v;if(P[N]===void 0)return typeof A=="number"||typeof A=="boolean"?P[N]=A:P[N]=A.clone(),!0;{let O=P[N];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return P[N]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(w){let E=w.uniforms,v=0,P=16;for(let N=0,O=E.length;N<O;N++){let b=Array.isArray(E[N])?E[N]:[E[N]];for(let S=0,U=b.length;S<U;S++){let H=b[S],q=Array.isArray(H.value)?H.value:[H.value];for(let V=0,Z=q.length;V<Z;V++){let $=q[V],lt=y($),G=v%P,ut=G%lt.boundary,Rt=G+ut;v+=ut,Rt!==0&&P-Rt<lt.storage&&(v+=P-Rt),H.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=lt.storage}}}let A=v%P;return A>0&&(v+=P-A),w.__size=v,w.__cache={},this}function y(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){let E=w.target;E.removeEventListener("dispose",m);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var pl=class{constructor(t={}){let{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,P=!1;this._outputColorSpace=Oe;let A=0,N=0,O=null,b=-1,S=null,U=new pe,H=new pe,q=null,V=new ie(0),Z=0,$=e.width,lt=e.height,G=1,ut=null,Rt=null,ft=new pe(0,0,$,lt),Yt=new pe(0,0,$,lt),te=!1,he=new Ds,ee=!1,tt=!1,ht=new Ee,Lt=new R,_t=new pe,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function ce(){return O===null?G:1}let C=n;function at(M,B){return e.getContext(M,B)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",dt,!1),C===null){let B="webgl2";if(C=at(B,M),C===null)throw at(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let st,nt,et,yt,Y,xt,Zt,Gt,T,_,z,J,ot,K,Ft,gt,Nt,Et,mt,Tt,qt,Ot,Mt,Bt;function F(){st=new jg(C),st.init(),Ot=new C_(C,st),nt=new Xg(C,st,t,Ot),et=new A_(C,st),nt.reversedDepthBuffer&&p&&et.buffers.depth.setReversed(!0),yt=new e0(C),Y=new p_,xt=new R_(C,st,et,Y,nt,Ot,yt),Zt=new Yg(v),Gt=new Kg(v),T=new ap(C),Mt=new Gg(C,T),_=new Qg(C,T,yt,Mt),z=new i0(C,_,T,yt),mt=new n0(C,nt,xt),gt=new qg(Y),J=new f_(v,Zt,Gt,st,nt,Mt,gt),ot=new L_(v,Y),K=new g_,Ft=new S_(st),Et=new Vg(v,Zt,Gt,et,z,d,l),Nt=new T_(v,z,nt),Bt=new U_(C,yt,nt,et),Tt=new Wg(C,st,yt),qt=new t0(C,st,yt),yt.programs=J.programs,v.capabilities=nt,v.extensions=st,v.properties=Y,v.renderLists=K,v.shadowMap=Nt,v.state=et,v.info=yt}F();let it=new lh(v,C);this.xr=it,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=st.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=st.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize($,lt,!1))},this.getSize=function(M){return M.set($,lt)},this.setSize=function(M,B,X=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,lt=B,e.width=Math.floor(M*G),e.height=Math.floor(B*G),X===!0&&(e.style.width=M+"px",e.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set($*G,lt*G).floor()},this.setDrawingBufferSize=function(M,B,X){$=M,lt=B,G=X,e.width=Math.floor(M*X),e.height=Math.floor(B*X),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(ft)},this.setViewport=function(M,B,X,W){M.isVector4?ft.set(M.x,M.y,M.z,M.w):ft.set(M,B,X,W),et.viewport(U.copy(ft).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Yt)},this.setScissor=function(M,B,X,W){M.isVector4?Yt.set(M.x,M.y,M.z,M.w):Yt.set(M,B,X,W),et.scissor(H.copy(Yt).multiplyScalar(G).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(M){et.setScissorTest(te=M)},this.setOpaqueSort=function(M){ut=M},this.setTransparentSort=function(M){Rt=M},this.getClearColor=function(M){return M.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,X=!0){let W=0;if(M){let k=!1;if(O!==null){let pt=O.texture.format;k=pt===Na||pt===Ua||pt===La}if(k){let pt=O.texture.type,wt=pt===Dn||pt===bi||pt===Ys||pt===Js||pt===Ia||pt===Da,Dt=Et.getClearColor(),Ct=Et.getClearAlpha(),Xt=Dt.r,Wt=Dt.g,zt=Dt.b;wt?(g[0]=Xt,g[1]=Wt,g[2]=zt,g[3]=Ct,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=Xt,y[1]=Wt,y[2]=zt,y[3]=Ct,C.clearBufferiv(C.COLOR,0,y))}else W|=C.COLOR_BUFFER_BIT}B&&(W|=C.DEPTH_BUFFER_BIT),X&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Et.dispose(),K.dispose(),Ft.dispose(),Y.dispose(),Zt.dispose(),Gt.dispose(),z.dispose(),Mt.dispose(),Bt.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ye),it.removeEventListener("sessionend",Ei),Fe.stop()};function vt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let M=yt.autoReset,B=Nt.enabled,X=Nt.autoUpdate,W=Nt.needsUpdate,k=Nt.type;F(),yt.autoReset=M,Nt.enabled=B,Nt.autoUpdate=X,Nt.needsUpdate=W,Nt.type=k}function dt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){let B=M.target;B.removeEventListener("dispose",rt),Ut(B)}function Ut(M){Ht(M),Y.remove(M)}function Ht(M){let B=Y.get(M).programs;B!==void 0&&(B.forEach(function(X){J.releaseProgram(X)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,X,W,k,pt){B===null&&(B=Q);let wt=k.isMesh&&k.matrixWorld.determinant()<0,Dt=rs(M,B,X,W,k);et.setMaterial(W,wt);let Ct=X.index,Xt=1;if(W.wireframe===!0){if(Ct=_.getWireframeAttribute(X),Ct===void 0)return;Xt=2}let Wt=X.drawRange,zt=X.attributes.position,ne=Wt.start*Xt,ue=(Wt.start+Wt.count)*Xt;pt!==null&&(ne=Math.max(ne,pt.start*Xt),ue=Math.min(ue,(pt.start+pt.count)*Xt)),Ct!==null?(ne=Math.max(ne,0),ue=Math.min(ue,Ct.count)):zt!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,zt.count));let Se=ue-ne;if(Se<0||Se===1/0)return;Mt.setup(k,W,Dt,X,Ct);let ge,de=Tt;if(Ct!==null&&(ge=T.get(Ct),de=qt,de.setIndex(ge)),k.isMesh)W.wireframe===!0?(et.setLineWidth(W.wireframeLinewidth*ce()),de.setMode(C.LINES)):de.setMode(C.TRIANGLES);else if(k.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),et.setLineWidth(Vt*ce()),k.isLineSegments?de.setMode(C.LINES):k.isLineLoop?de.setMode(C.LINE_LOOP):de.setMode(C.LINE_STRIP)}else k.isPoints?de.setMode(C.POINTS):k.isSprite&&de.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))de.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Vt=k._multiDrawStarts,ve=k._multiDrawCounts,oe=k._multiDrawCount,Ze=Ct?T.get(Ct).bytesPerElement:1,Gn=Y.get(W).currentProgram.getUniforms();for(let Xe=0;Xe<oe;Xe++)Gn.setValue(C,"_gl_DrawID",Xe),de.render(Vt[Xe]/Ze,ve[Xe])}else if(k.isInstancedMesh)de.renderInstances(ne,Se,k.count);else if(X.isInstancedBufferGeometry){let Vt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ve=Math.min(X.instanceCount,Vt);de.renderInstances(ne,Se,ve)}else de.render(ne,Se)};function se(M,B,X){M.transparent===!0&&M.side===We&&M.forceSinglePass===!1?(M.side=an,M.needsUpdate=!0,Ti(M,B,X),M.side=Kn,M.needsUpdate=!0,Ti(M,B,X),M.side=We):Ti(M,B,X)}this.compile=function(M,B,X=null){X===null&&(X=M),f=Ft.get(X),f.init(B),E.push(f),X.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),M!==X&&M.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();let W=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pt=k.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){let Dt=pt[wt];se(Dt,X,k),W.add(Dt)}else se(pt,X,k),W.add(pt)}),f=E.pop(),W},this.compileAsync=function(M,B,X=null){let W=this.compile(M,B,X);return new Promise(k=>{function pt(){if(W.forEach(function(wt){Y.get(wt).currentProgram.isReady()&&W.delete(wt)}),W.size===0){k(M);return}setTimeout(pt,10)}st.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let re=null;function De(M){re&&re(M)}function Ye(){Fe.stop()}function Ei(){Fe.start()}let Fe=new Md;Fe.setAnimationLoop(De),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(M){re=M,it.setAnimationLoop(M),M===null?Fe.stop():Fe.start()},it.addEventListener("sessionstart",Ye),it.addEventListener("sessionend",Ei),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(B),B=it.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,B,O),f=Ft.get(M,E.length),f.init(B),E.push(f),ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),he.setFromProjectionMatrix(ht,Rn,B.reversedDepth),tt=this.localClippingEnabled,ee=gt.init(this.clippingPlanes,tt),m=K.get(M,w.length),m.init(),w.push(m),it.enabled===!0&&it.isPresenting===!0){let pt=v.xr.getDepthSensingMesh();pt!==null&&is(pt,B,-1/0,v.sortObjects)}is(M,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ut,Rt),Jt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Jt&&Et.addToRenderList(m,M),this.info.render.frame++,ee===!0&&gt.beginShadows();let X=f.state.shadowsArray;Nt.render(X,M,B),ee===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,k=m.transmissive;if(f.setupLights(),B.isArrayCamera){let pt=B.cameras;if(k.length>0)for(let wt=0,Dt=pt.length;wt<Dt;wt++){let Ct=pt[wt];Ln(W,k,M,Ct)}Jt&&Et.render(M);for(let wt=0,Dt=pt.length;wt<Dt;wt++){let Ct=pt[wt];ss(m,M,Ct,Ct.viewport)}}else k.length>0&&Ln(W,k,M,B),Jt&&Et.render(M),ss(m,M,B);O!==null&&N===0&&(xt.updateMultisampleRenderTarget(O),xt.updateRenderTargetMipmap(O)),M.isScene===!0&&M.onAfterRender(v,M,B),Mt.resetDefaultState(),b=-1,S=null,E.pop(),E.length>0?(f=E[E.length-1],ee===!0&&gt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function is(M,B,X,W){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||he.intersectsSprite(M)){W&&_t.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);let wt=z.update(M),Dt=M.material;Dt.visible&&m.push(M,wt,Dt,X,_t.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||he.intersectsObject(M))){let wt=z.update(M),Dt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),_t.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),_t.copy(wt.boundingSphere.center)),_t.applyMatrix4(M.matrixWorld).applyMatrix4(ht)),Array.isArray(Dt)){let Ct=wt.groups;for(let Xt=0,Wt=Ct.length;Xt<Wt;Xt++){let zt=Ct[Xt],ne=Dt[zt.materialIndex];ne&&ne.visible&&m.push(M,wt,ne,X,_t.z,zt)}}else Dt.visible&&m.push(M,wt,Dt,X,_t.z,null)}}let pt=M.children;for(let wt=0,Dt=pt.length;wt<Dt;wt++)is(pt[wt],B,X,W)}function ss(M,B,X,W){let k=M.opaque,pt=M.transmissive,wt=M.transparent;f.setupLightsView(X),ee===!0&&gt.setGlobalState(v.clippingPlanes,X),W&&et.viewport(U.copy(W)),k.length>0&&Vn(k,B,X),pt.length>0&&Vn(pt,B,X),wt.length>0&&Vn(wt,B,X),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Ln(M,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Bn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Zs:Dn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let pt=f.state.transmissionRenderTarget[W.id],wt=W.viewport||U;pt.setSize(wt.z*v.transmissionResolutionScale,wt.w*v.transmissionResolutionScale);let Dt=v.getRenderTarget(),Ct=v.getActiveCubeFace(),Xt=v.getActiveMipmapLevel();v.setRenderTarget(pt),v.getClearColor(V),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&Et.render(X);let Wt=v.toneMapping;v.toneMapping=ti;let zt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ee===!0&&gt.setGlobalState(v.clippingPlanes,W),Vn(M,X,W),xt.updateMultisampleRenderTarget(pt),xt.updateRenderTargetMipmap(pt),st.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let ue=0,Se=B.length;ue<Se;ue++){let ge=B[ue],de=ge.object,Vt=ge.geometry,ve=ge.material,oe=ge.group;if(ve.side===We&&de.layers.test(W.layers)){let Ze=ve.side;ve.side=an,ve.needsUpdate=!0,er(de,X,W,Vt,ve,oe),ve.side=Ze,ve.needsUpdate=!0,ne=!0}}ne===!0&&(xt.updateMultisampleRenderTarget(pt),xt.updateRenderTargetMipmap(pt))}v.setRenderTarget(Dt,Ct,Xt),v.setClearColor(V,Z),zt!==void 0&&(W.viewport=zt),v.toneMapping=Wt}function Vn(M,B,X){let W=B.isScene===!0?B.overrideMaterial:null;for(let k=0,pt=M.length;k<pt;k++){let wt=M[k],Dt=wt.object,Ct=wt.geometry,Xt=wt.group,Wt=wt.material;Wt.allowOverride===!0&&W!==null&&(Wt=W),Dt.layers.test(X.layers)&&er(Dt,B,X,Ct,Wt,Xt)}}function er(M,B,X,W,k,pt){M.onBeforeRender(v,B,X,W,k,pt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(v,B,X,W,M,pt),k.transparent===!0&&k.side===We&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,v.renderBufferDirect(X,B,W,k,M,pt),k.side=Kn,k.needsUpdate=!0,v.renderBufferDirect(X,B,W,k,M,pt),k.side=We):v.renderBufferDirect(X,B,W,k,M,pt),M.onAfterRender(v,B,X,W,k,pt)}function Ti(M,B,X){B.isScene!==!0&&(B=Q);let W=Y.get(M),k=f.state.lights,pt=f.state.shadowsArray,wt=k.state.version,Dt=J.getParameters(M,k.state,pt,B,X),Ct=J.getProgramCacheKey(Dt),Xt=W.programs;W.environment=M.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(M.isMeshStandardMaterial?Gt:Zt).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Xt===void 0&&(M.addEventListener("dispose",rt),Xt=new Map,W.programs=Xt);let Wt=Xt.get(Ct);if(Wt!==void 0){if(W.currentProgram===Wt&&W.lightsStateVersion===wt)return nr(M,Dt),Wt}else Dt.uniforms=J.getUniforms(M),M.onBeforeCompile(Dt,v),Wt=J.acquireProgram(Dt,Ct),Xt.set(Ct,Wt),W.uniforms=Dt.uniforms;let zt=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(zt.clippingPlanes=gt.uniform),nr(M,Dt),W.needsLights=Re(M),W.lightsStateVersion=wt,W.needsLights&&(zt.ambientLightColor.value=k.state.ambient,zt.lightProbe.value=k.state.probe,zt.directionalLights.value=k.state.directional,zt.directionalLightShadows.value=k.state.directionalShadow,zt.spotLights.value=k.state.spot,zt.spotLightShadows.value=k.state.spotShadow,zt.rectAreaLights.value=k.state.rectArea,zt.ltc_1.value=k.state.rectAreaLTC1,zt.ltc_2.value=k.state.rectAreaLTC2,zt.pointLights.value=k.state.point,zt.pointLightShadows.value=k.state.pointShadow,zt.hemisphereLights.value=k.state.hemi,zt.directionalShadowMap.value=k.state.directionalShadowMap,zt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,zt.spotShadowMap.value=k.state.spotShadowMap,zt.spotLightMatrix.value=k.state.spotLightMatrix,zt.spotLightMap.value=k.state.spotLightMap,zt.pointShadowMap.value=k.state.pointShadowMap,zt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Wt,W.uniformsList=null,Wt}function wi(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=Qs.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function nr(M,B){let X=Y.get(M);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function rs(M,B,X,W,k){B.isScene!==!0&&(B=Q),xt.resetTextureUnits();let pt=B.fog,wt=W.isMeshStandardMaterial?B.environment:null,Dt=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Bi,Ct=(W.isMeshStandardMaterial?Gt:Zt).get(W.envMap||wt),Xt=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),zt=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,ue=!!X.morphAttributes.color,Se=ti;W.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Se=v.toneMapping);let ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=ge!==void 0?ge.length:0,Vt=Y.get(W),ve=f.state.lights;if(ee===!0&&(tt===!0||M!==S)){let Je=M===S&&W.id===b;gt.setState(W,M,Je)}let oe=!1;W.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ve.state.version||Vt.outputColorSpace!==Dt||k.isBatchedMesh&&Vt.batching===!1||!k.isBatchedMesh&&Vt.batching===!0||k.isBatchedMesh&&Vt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Vt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Vt.instancing===!1||!k.isInstancedMesh&&Vt.instancing===!0||k.isSkinnedMesh&&Vt.skinning===!1||!k.isSkinnedMesh&&Vt.skinning===!0||k.isInstancedMesh&&Vt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Vt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Vt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Vt.instancingMorph===!1&&k.morphTexture!==null||Vt.envMap!==Ct||W.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==gt.numPlanes||Vt.numIntersection!==gt.numIntersection)||Vt.vertexAlphas!==Xt||Vt.vertexTangents!==Wt||Vt.morphTargets!==zt||Vt.morphNormals!==ne||Vt.morphColors!==ue||Vt.toneMapping!==Se||Vt.morphTargetsCount!==de)&&(oe=!0):(oe=!0,Vt.__version=W.version);let Ze=Vt.currentProgram;oe===!0&&(Ze=Ti(W,B,k));let Gn=!1,Xe=!1,Ai=!1,xe=Ze.getUniforms(),Ae=Vt.uniforms;if(et.useProgram(Ze.program)&&(Gn=!0,Xe=!0,Ai=!0),W.id!==b&&(b=W.id,Xe=!0),Gn||S!==M){et.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xe.setValue(C,"projectionMatrix",M.projectionMatrix),xe.setValue(C,"viewMatrix",M.matrixWorldInverse);let qe=xe.map.cameraPosition;qe!==void 0&&qe.setValue(C,Lt.setFromMatrixPosition(M.matrixWorld)),nt.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Xe=!0,Ai=!0)}if(k.isSkinnedMesh){xe.setOptional(C,k,"bindMatrix"),xe.setOptional(C,k,"bindMatrixInverse");let Je=k.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),xe.setValue(C,"boneTexture",Je.boneTexture,xt))}k.isBatchedMesh&&(xe.setOptional(C,k,"batchingTexture"),xe.setValue(C,"batchingTexture",k._matricesTexture,xt),xe.setOptional(C,k,"batchingIdTexture"),xe.setValue(C,"batchingIdTexture",k._indirectTexture,xt),xe.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(C,"batchingColorTexture",k._colorsTexture,xt));let un=X.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&mt.update(k,X,Ze),(Xe||Vt.receiveShadow!==k.receiveShadow)&&(Vt.receiveShadow=k.receiveShadow,xe.setValue(C,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ae.envMap.value=Ct,Ae.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Ae.envMapIntensity.value=B.environmentIntensity),Xe&&(xe.setValue(C,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Un(Ae,Ai),pt&&W.fog===!0&&ot.refreshFogUniforms(Ae,pt),ot.refreshMaterialUniforms(Ae,W,G,lt,f.state.transmissionRenderTarget[M.id]),Qs.upload(C,wi(Vt),Ae,xt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qs.upload(C,wi(Vt),Ae,xt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(C,"center",k.center),xe.setValue(C,"modelViewMatrix",k.modelViewMatrix),xe.setValue(C,"normalMatrix",k.normalMatrix),xe.setValue(C,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Je=W.uniformsGroups;for(let qe=0,Nn=Je.length;qe<Nn;qe++){let nn=Je[qe];Bt.update(nn,Ze),Bt.bind(nn,Ze)}}return Ze}function Un(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Re(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,B,X){let W=Y.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=B,Y.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let X=Y.get(M);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};let co=C.createFramebuffer();this.setRenderTarget=function(M,B=0,X=0){O=M,A=B,N=X;let W=!0,k=null,pt=!1,wt=!1;if(M){let Ct=Y.get(M);if(Ct.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Ct.__webglFramebuffer===void 0)xt.setupRenderTarget(M);else if(Ct.__hasExternalTextures)xt.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let zt=M.depthTexture;if(Ct.__boundDepthTexture!==zt){if(zt!==null&&Y.has(zt)&&(M.width!==zt.image.width||M.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(M)}}let Xt=M.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(wt=!0);let Wt=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?k=Wt[B][X]:k=Wt[B],pt=!0):M.samples>0&&xt.useMultisampledRTT(M)===!1?k=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(Wt)?k=Wt[X]:k=Wt,U.copy(M.viewport),H.copy(M.scissor),q=M.scissorTest}else U.copy(ft).multiplyScalar(G).floor(),H.copy(Yt).multiplyScalar(G).floor(),q=te;if(X!==0&&(k=co),et.bindFramebuffer(C.FRAMEBUFFER,k)&&W&&et.drawBuffers(M,k),et.viewport(U),et.scissor(H),et.setScissorTest(q),pt){let Ct=Y.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,X)}else if(wt){let Ct=B;for(let Xt=0;Xt<M.textures.length;Xt++){let Wt=Y.get(M.textures[Xt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Xt,Wt.__webglTexture,X,Ct)}}else if(M!==null&&X!==0){let Ct=Y.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ct.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(M,B,X,W,k,pt,wt,Dt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){et.bindFramebuffer(C.FRAMEBUFFER,Ct);try{let Xt=M.textures[Dt],Wt=Xt.format,zt=Xt.type;if(!nt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-W&&X>=0&&X<=M.height-k&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Dt),C.readPixels(B,X,W,k,Ot.convert(Wt),Ot.convert(zt),pt))}finally{let Xt=O!==null?Y.get(O).__webglFramebuffer:null;et.bindFramebuffer(C.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(M,B,X,W,k,pt,wt,Dt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(B>=0&&B<=M.width-W&&X>=0&&X<=M.height-k){et.bindFramebuffer(C.FRAMEBUFFER,Ct);let Xt=M.textures[Dt],Wt=Xt.format,zt=Xt.type;if(!nt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ne),C.bufferData(C.PIXEL_PACK_BUFFER,pt.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Dt),C.readPixels(B,X,W,k,Ot.convert(Wt),Ot.convert(zt),0);let ue=O!==null?Y.get(O).__webglFramebuffer:null;et.bindFramebuffer(C.FRAMEBUFFER,ue);let Se=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Wu(C,Se,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ne),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,pt),C.deleteBuffer(ne),C.deleteSync(Se),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,X=0){let W=Math.pow(2,-X),k=Math.floor(M.image.width*W),pt=Math.floor(M.image.height*W),wt=B!==null?B.x:0,Dt=B!==null?B.y:0;xt.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,wt,Dt,k,pt),et.unbindTexture()};let os=C.createFramebuffer(),hn=C.createFramebuffer();this.copyTextureToTexture=function(M,B,X=null,W=null,k=0,pt=null){pt===null&&(k!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=k,k=0):pt=0);let wt,Dt,Ct,Xt,Wt,zt,ne,ue,Se,ge=M.isCompressedTexture?M.mipmaps[pt]:M.image;if(X!==null)wt=X.max.x-X.min.x,Dt=X.max.y-X.min.y,Ct=X.isBox3?X.max.z-X.min.z:1,Xt=X.min.x,Wt=X.min.y,zt=X.isBox3?X.min.z:0;else{let un=Math.pow(2,-k);wt=Math.floor(ge.width*un),Dt=Math.floor(ge.height*un),M.isDataArrayTexture?Ct=ge.depth:M.isData3DTexture?Ct=Math.floor(ge.depth*un):Ct=1,Xt=0,Wt=0,zt=0}W!==null?(ne=W.x,ue=W.y,Se=W.z):(ne=0,ue=0,Se=0);let de=Ot.convert(B.format),Vt=Ot.convert(B.type),ve;B.isData3DTexture?(xt.setTexture3D(B,0),ve=C.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(xt.setTexture2DArray(B,0),ve=C.TEXTURE_2D_ARRAY):(xt.setTexture2D(B,0),ve=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);let oe=C.getParameter(C.UNPACK_ROW_LENGTH),Ze=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Gn=C.getParameter(C.UNPACK_SKIP_PIXELS),Xe=C.getParameter(C.UNPACK_SKIP_ROWS),Ai=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ge.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zt);let xe=M.isDataArrayTexture||M.isData3DTexture,Ae=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let un=Y.get(M),Je=Y.get(B),qe=Y.get(un.__renderTarget),Nn=Y.get(Je.__renderTarget);et.bindFramebuffer(C.READ_FRAMEBUFFER,qe.__webglFramebuffer),et.bindFramebuffer(C.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let nn=0;nn<Ct;nn++)xe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,k,zt+nn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,pt,Se+nn)),C.blitFramebuffer(Xt,Wt,wt,Dt,ne,ue,wt,Dt,C.DEPTH_BUFFER_BIT,C.NEAREST);et.bindFramebuffer(C.READ_FRAMEBUFFER,null),et.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||Y.has(M)){let un=Y.get(M),Je=Y.get(B);et.bindFramebuffer(C.READ_FRAMEBUFFER,os),et.bindFramebuffer(C.DRAW_FRAMEBUFFER,hn);for(let qe=0;qe<Ct;qe++)xe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,un.__webglTexture,k,zt+qe):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,un.__webglTexture,k),Ae?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Je.__webglTexture,pt,Se+qe):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Je.__webglTexture,pt),k!==0?C.blitFramebuffer(Xt,Wt,wt,Dt,ne,ue,wt,Dt,C.COLOR_BUFFER_BIT,C.NEAREST):Ae?C.copyTexSubImage3D(ve,pt,ne,ue,Se+qe,Xt,Wt,wt,Dt):C.copyTexSubImage2D(ve,pt,ne,ue,Xt,Wt,wt,Dt);et.bindFramebuffer(C.READ_FRAMEBUFFER,null),et.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ae?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(ve,pt,ne,ue,Se,wt,Dt,Ct,de,Vt,ge.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(ve,pt,ne,ue,Se,wt,Dt,Ct,de,ge.data):C.texSubImage3D(ve,pt,ne,ue,Se,wt,Dt,Ct,de,Vt,ge):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,pt,ne,ue,wt,Dt,de,Vt,ge.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,pt,ne,ue,ge.width,ge.height,de,ge.data):C.texSubImage2D(C.TEXTURE_2D,pt,ne,ue,wt,Dt,de,Vt,ge);C.pixelStorei(C.UNPACK_ROW_LENGTH,oe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ze),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Gn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ai),pt===0&&B.generateMipmaps&&C.generateMipmap(ve),et.unbindTexture()},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&xt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?xt.setTextureCube(M,0):M.isData3DTexture?xt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?xt.setTexture2DArray(M,0):xt.setTexture2D(M,0),et.unbindTexture()},this.resetState=function(){A=0,N=0,O=null,et.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var wd={type:"change"},uh={type:"start"},Rd={type:"end"},gl=new Hi,Ad=new Qe,F_=Math.cos(70*Vc.DEG2RAD),He=new R,cn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hh=1e-6,_l=class extends eo{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Mn,this._lastTargetPosition=new R,this._quat=new Mn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qs,this._sphericalDelta=new qs,this._scale=1,this._panOffset=new R,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new R,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B_.bind(this),this._onPointerDown=O_.bind(this),this._onPointerUp=z_.bind(this),this._onContextMenu=q_.bind(this),this._onMouseWheel=V_.bind(this),this._onKeyDown=G_.bind(this),this._onTouchStart=W_.bind(this),this._onTouchMove=X_.bind(this),this._onMouseDown=k_.bind(this),this._onMouseMove=H_.bind(this),this._interceptControlDown=Y_.bind(this),this._interceptControlUp=Z_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wd),this.update(),this.state=_e.NONE}update(t=null){let e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=He.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gl.origin.copy(this.object.position),gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gl.direction))<F_?this.object.lookAt(this.target):(Ad.setFromNormalAndCoplanarPoint(this.object.up,this.target),gl.intersectPlane(Ad,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hh||this._lastTargetPosition.distanceToSquared(this.target)>hh?(this.dispatchEvent(wd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;He.copy(s).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function O_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function B_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function z_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rd),this.state=_e.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function k_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case vi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case vi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(uh)}function H_(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function V_(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rd))}function G_(i){this.enabled!==!1&&this._handleKeyDown(i)}function W_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(uh)}function X_(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function q_(i){this.enabled!==!1&&i.preventDefault()}function Y_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(){let i=x=>document.getElementById(x),t=i("viewport"),e=new pl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=xa,e.localClippingEnabled=!0,e.setClearColor(527890),e.outputColorSpace=Oe,e.toneMapping=wa,e.toneMappingExposure=1.05,t.prepend(e.domElement);let n=new Dr,s=new Ge(39,1,.03,100),r=s,o=new Yi(-10,10,10,-10,.1,100),a=new _l(s,e.domElement);a.enableDamping=!0,a.dampingFactor=.1,a.maxDistance=30,a.minDistance=1,a.maxPolarAngle=Math.PI*.49,a.target.set(.8,1.7,0),n.add(new $r(12505823,7030576,.22));let l=new Xs(14083310,.18);l.position.set(-4,10,-6),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:.1,far:30}),l.shadow.normalBias=.03,n.add(l);let c=new Xs(12629667,.15);c.position.set(6,8,5),n.add(c);let h=new ye;n.add(h);let u=new ye,p=new ye;h.add(u,p);let d=new ye,g=new ye,y=new ye,m=new ye,f=new ye;h.add(d,g,y,m,f);let w="axon",E=!0,v=!1,P=!0,A=!1,N=!0,O=5.85,b="memory",S=!1,U=!0,H=4.1,q=.00806334820662042,V=[[235,399],[358,280],[681,280],[864,403],[864,712],[698,921],[382,921],[235,758]].map(([x,L])=>new ct((x-549.5)*q,(L-600.5)*q)),Z=V[3].x,$=(V[3].y+V[4].y)/2,lt=$-1.085,G=$+1.085,ut=Z+2.66,Rt=x=>x.toFixed(2).replace(".",",");function ft(x,L={}){return new Yr({color:x,roughness:.8,...L})}let Yt=ft(7830652),te=ft(9803919),he=ft(14146006),ee=ft(6374706),tt=ft(8950931,{metalness:.45,roughness:.4}),ht=ft(3235440),Lt=ft(10735317,{transparent:!0,opacity:.32,roughness:.15,depthWrite:!1});function _t(x,L,D=d){let I=new ln(x,L);return I.castShadow=!0,I.receiveShadow=!0,D.add(I),I}function Q(x,L,D,I,j,At,kt,St=d){let Pt=_t(new mi(x,L,D),kt,St);return Pt.position.set(I,j,At),Pt}function Jt(x,L,D,I,j,At,kt,St){let Pt=_t(new Fs(x,L,D,24),kt,St);return Pt.position.set(I,j,At),Pt}function ce(x,L,D,I=.16){let j=new zs(x.map(St=>new ct(St.x,-St.y))),At=new Wr(j,{depth:I,bevelEnabled:!1});At.rotateX(-Math.PI/2);let kt=_t(At,D);return kt.position.y=L-I,kt}function C(){let x=document.createElement("canvas");x.width=x.height=1024;let L=x.getContext("2d");L.fillStyle="#765541",L.fillRect(0,0,1024,1024);let D=83,I=()=>(D=D*1664525+1013904223>>>0,D/4294967296);L.save(),L.translate(512,512),L.rotate(Math.PI/4),L.translate(-512,-512);let j=(kt,St,Pt,ae)=>{let sn=I();L.fillStyle=`rgb(${112+sn*34},${79+sn*27},${57+sn*20})`,L.fillRect(kt,St,Pt,ae),L.strokeStyle="#453527",L.lineWidth=1.4,L.strokeRect(kt+.5,St+.5,Pt-1,ae-1);for(let $e=0;$e<5;$e++){if(L.strokeStyle=`rgba(48,26,14,${.025+I()*.05})`,L.beginPath(),Pt>ae){let Ce=St+I()*ae;L.moveTo(kt,Ce),L.lineTo(kt+Pt,Ce+I()*3)}else{let Ce=kt+I()*Pt;L.moveTo(Ce,St),L.lineTo(Ce+I()*3,St+ae)}L.stroke()}};for(let kt=-20;kt<30;kt++)for(let St=-20;St<30;St++){let Pt=kt*128+St*32,ae=kt*128-St*32;j(Pt,ae,128,32),j(Pt+128,ae,32,128)}L.restore();let At=new Us(x);return At.colorSpace=Oe,At.wrapS=At.wrapT=ws,At.repeat.set(.23,.23),At.anisotropy=e.capabilities.getMaxAnisotropy(),At}let at=ft(11767938,{map:C(),roughness:.65}),st=at,nt=Yt,et=te,yt=V[5].y,Y=(x,L)=>new ct(x,L),xt=V[7].clone().lerp(V[6],.72),Zt=Y(.51,yt),Gt=[Zt,Y(.51,3.3),Y(.77,3.3),Y(.77,4),Y(.94,4),Y(.94,4.38),Y(1.75,4.38),Y(1.75,5.68),Y(.94,5.68),Y(.94,5.9),Y(.68,5.98),Y(.68,6.49),Y(-2.11,6.49),Y(-2.11,3.42),Y(xt.x,3.42),xt],T=ut-.7,_=G+.7,z=[Y(T,G),Y(ut,G),Y(ut,_),Y(T,_)],J=_t(new gn(200,200),ft(527890),n);J.rotation.x=-Math.PI/2,J.position.y=-.3,J.castShadow=!1;let ot=new to(26,52,12635602,14147811);ot.position.y=-.285,ot.material.transparent=!0,ot.material.opacity=.12,ot.visible=!1,n.add(ot);let K=[],Ft=new Qe(new R(0,-1,0),.75),gt=new Qe(new R(0,-1,0),1),Nt=new Qe(new R(0,-1,0),.2);function Et(x,L,D=null,I=H,j=!1){let At=L.x-x.x,kt=L.y-x.y,St=Math.hypot(At,kt),Pt=-Math.atan2(kt,At),ae=new ye;ae.position.set((x.x+L.x)/2,0,(x.y+L.y)/2),ae.rotation.y=Pt,d.add(ae);let sn=new R(kt,0,-At).normalize(),$e={group:ae,normal:sn,center:ae.position.clone(),hypothesis:j};K.push($e);let Ce=(j?nt:Yt).clone(),fe=(j?et:te).clone(),Nl=tt.clone(),Fl=ft(527891),go=ft(1054492),_o=.31,Pe=(Ie,Le,bn,En,Ue=_o,be=0,Rh=Ce)=>Q(Ie,Le,Ue,bn,En,be,Rh,ae),Ci=(Ie,Le,bn,En,Ue=Ce,be=_o)=>{Le-Ie>.001&&bn>En&&Pe(Le-Ie,bn-En,(Le+Ie)/2,(bn+En)/2,be,0,Ue)};if(D){let Ie=D.center||0,Le=Math.min(D.w,St-.12),bn=Ie-Le/2,En=Ie+Le/2,Ue=D.sill,be=D.top;if(Ci(-St/2,bn,I,0),Ci(En,St/2,I,0),Ci(bn,En,Ue,0),Ci(bn,En,I,be),D.type==="window"){Pe(Le,.07,Ie,Ue,.4,.03,fe),Pe(Le,.07,Ie,be,.15,.03,fe),Pe(.065,be-Ue,bn+.033,(Ue+be)/2,.15,.03,fe),Pe(.065,be-Ue,En-.033,(Ue+be)/2,.15,.03,fe),Pe(.07,be-Ue,Ie,(Ue+be)/2,.13,.03,fe),Pe(Le,be-Ue,Ie,(Ue+be)/2,.018,.015,Fl);let $_=Ue+(be-Ue)*.46;for(let Bl=1;Bl<=4;Bl++){let zd=Ue+Bl*(be-Ue)/5;Pe(Le,.045,Ie,zd,.12,.03,fe)}let Ol=Ue+.035;Pe(Le-.1,be-Ol,Ie,(be+Ol)/2,.03,.1,go),Pe(Le-.06,.065,Ie,be+.025,.08,.11,fe),Pe(Le-.08,.025,Ie,Ol,.045,.13,Nl),Pe(Le+.12,.07,Ie,Ue-.02,.53,0,fe)}else Pe(.055,be,bn,be/2,.4,0,fe),Pe(.055,be,En,be/2,.4,0,fe),Pe(Le,.055,Ie,be,.4,0,fe)}else Ci(-St/2,St/2,I,0);if(!D||D.sill>0)Pe(St,.12,0,.065,.34,0,fe);else{let Ie=D.w,Le=D.center||0;Ci(-St/2,Le-Ie/2,.12,0,fe,.34),Ci(Le+Ie/2,St/2,.12,0,fe,.34)}return Pe(St,.055,0,I-.02,.38,0,fe),Pe(St,.07,0,I-.14,.35,0,fe),St>1.1&&!j&&(Pe(St,.018,0,3.62,.022,.18,fe),Pe(.022,1.2,-St/2+.15,3.02,.025,.18,fe)),!j&&St>1.6&&(!D||D.type!=="window")&&Pe(Math.min(1.25,St-.35),.2,0,3.1,.07,.21,fe),ae}function mt(x){let L=new Set([at,st,Yt,te,nt,et,ee,tt,ht,Lt]);for(let D of[...x.children])x.remove(D),D.traverse(I=>{I.geometry?.dispose(),I.material&&!L.has(I.material)&&I.material.dispose()})}function Tt(x,L,D=u,I=!0,j=.035){let At=x.map(Pt=>new R(Pt.x,j,Pt.y));At.push(At[0].clone());let kt=new we().setFromPoints(At),St=new Ls(kt,I?new Zr({color:L,dashSize:.11,gapSize:.075}):new gi({color:L}));return St.computeLineDistances(),D.add(St),St}function qt(){mt(d),mt(u),mt(p),K.length=0,ce(V,0,at),ce([Y(Z,lt),Y(ut,lt),Y(ut,G),Y(Z,G)],0,at),ce(V.map(D=>D.clone().multiplyScalar(1.035)),-.16,ft(13884123),.1),Q(2.88,.1,2.37,Z+1.33,-.21,$,ft(13884123));for(let D=0;D<V.length;D++){if(D===3||b==="memory"&&(D===5||D===6))continue;let I=null;D===1&&(I={type:"window",w:2.24,sill:.65,top:3.93}),D===7&&(I={type:"window",w:2.3,sill:.65,top:3.93}),D===5&&(I={type:"door",w:1,sill:0,top:2.35}),Et(V[D],V[(D+1)%8],I)}if(Et(V[3],Y(Z,lt)),Et(Y(Z,G),V[4]),Et(Y(Z,lt),Y(ut,lt),{type:"window",w:1.06,sill:.65,top:3.78},4),Et(Y(ut,lt),Y(ut,G),null,4),b==="plan")Et(Y(ut,G),Y(Z,G),null,4);else{Et(Y(T,G),Y(Z,G),null,4);let D=Et(Y(ut,G),Y(T,G),{type:"door",w:.68,sill:0,top:2.35},4,!0);Et(V[5],Zt),Et(xt,V[7]),ce([...Gt,V[6]],0,st),ce(z,0,st);for(let I=0;I<Gt.length-1;I++)Et(Gt[I],Gt[I+1],I===11?{type:"door",w:1.15,sill:0,top:2.35}:null,3.2,!0);Et(z[1],z[2],null,3.2,!0),Et(z[3],z[0],null,3.2,!0),Tt([Y(1.97,3.88),Y(3.09,3.88),Y(3.09,6.51),Y(1.97,6.51)],10266538,p,!0,.02)}Tt([Y(-2.38,-1.38),Y(-1.53,-1.38),Y(-1.53,1.4),Y(-2.38,1.4)],11506009,p,!0,.025);let x=Q(.4,.55,2.17,Z,3.74,$,Yt.clone()),L=new ye;d.add(L),L.attach(x),K.push({group:L,normal:new R(1,0,0),center:new R(Z,0,$)})}qt();function Ot(){for(;g.children.length;){let j=g.children.pop();j.geometry?.dispose(),j.material?.dispose()}let x=new ct(-.18,0),L=24,D=20;for(let j=0;j<8;j++){let At=V[j],kt=V[(j+1)%8],St=[],Pt=[];for(let $e=0;$e<=L;$e++){let Ce=$e/L;for(let fe=0;fe<=D;fe++){let Nl=fe/D,Fl=At.clone().lerp(kt,Nl),go=x.clone().lerp(Fl,Ce),_o=H+(O-H)*Math.sqrt(Math.max(0,1-Ce*Ce));St.push(go.x,_o,go.y)}}for(let $e=0;$e<L;$e++)for(let Ce=0;Ce<D;Ce++){let fe=$e*(D+1)+Ce;Pt.push(fe,fe+1,fe+D+1,fe+1,fe+D+2,fe+D+1)}let ae=new we;ae.setAttribute("position",new $t(St,3)),ae.setIndex(Pt),ae.computeVertexNormals();let sn=_t(ae,ft(15657694,{side:We}),g);sn.castShadow=!1}let I=Q(2.67,.13,2.18,Z+1.33,4.06,$,ft(15132380),g);I.castShadow=!1}Ot(),g.visible=!1,p.visible=!1,u.visible=!1;let Mt=new ye;n.add(Mt);let Bt=ft(1187879,{roughness:.48}),F=ft(528662),it=ft(12163939,{metalness:.72,roughness:.28}),vt=ft(14798762),It=ft(1647402),dt=ft(6673884,{emissive:4896452,emissiveIntensity:.8}),rt=ft(15255443,{emissive:16436099,emissiveIntensity:1.2}),Ut=matchMedia("(prefers-reduced-motion: reduce)"),Ht="tour",se="exhibition",re="letters",De=!1,Ye=0,Ei=-1,Fe=!0,is=!0,ss=0,Ln=0,Vn="1960",er=0,Ti=0,wi="",nr="",rs=0,Un=new Set,Re=(x,L,D=0,I=Mt)=>{let j=new ye;return j.position.set(x,0,L),j.rotation.y=D,I.add(j),j};function co(x,L,D,I){return _t(new Vs(new Gi(x.map(j=>new R(...j))),32,L,8,!1),D,I)}function os(x,L,D,I,j,At,kt){let St=_t(new Hs(x,L,12,64),At,kt);return St.position.set(D,I,j),St}function hn(x,L,D,I,j,At=5,kt=Mt){let St=new Qr(I,j*.12,At,2);return St.position.set(x,L,D),kt.add(St),St}function M(x,L,D){let I=document.createElement("canvas");I.width=x,I.height=L,D(I.getContext("2d"),x,L);let j=new Us(I);return j.colorSpace=Oe,j.anisotropy=e.capabilities.getMaxAnisotropy(),j}function B(x,L,D,I,j,At,kt,St=0){let Pt=new ye;Pt.position.set(D,I,j),Pt.rotation.x=St,kt.add(Pt),Q(x+.05,L+.05,.065,0,0,0,F,Pt);let ae=_t(new gn(x,L),new tn({map:At,toneMapped:!1}),Pt);return ae.position.z=.035,ae.castShadow=!1,Pt}function X(x,L=[],D="#dacaab"){return M(768,1024,(I,j,At)=>{I.fillStyle="#10212b",I.fillRect(0,0,j,At),I.strokeStyle="#577180",I.strokeRect(35,35,j-70,At-70),I.fillStyle="#62cedb",I.font="20px sans-serif",I.fillText("\u041E\u0416\u0418\u0412\u0428\u0418\u0415 \u0410\u0420\u0425\u0418\u0412\u042B",65,95),I.fillStyle=D,I.font="54px Georgia",x.forEach((kt,St)=>I.fillText(kt,65,205+St*64)),I.font="25px sans-serif",L.forEach((kt,St)=>I.fillText(kt,65,440+St*53)),I.strokeStyle="#62cedb",I.beginPath(),I.arc(390,760,100,0,7),I.stroke(),I.beginPath(),I.moveTo(390,620),I.lineTo(390,900),I.moveTo(250,760),I.lineTo(530,760),I.stroke()})}let W=Re(-.24,-2.28);Q(2.48,2.78,.1,0,1.77,0,Bt,W),Q(2.52,.045,.16,0,3.17,0,it,W),Q(2.52,.035,.17,0,.38,0,it,W);for(let x of[-1.14,1.14])Q(.035,3.13,.07,x,1.58,-.13,F,W),Q(.34,.05,.54,x,.025,.03,F,W);let k=Array.from({length:9},(x,L)=>M(256,384,(D,I,j)=>{D.fillStyle=["#d4c5a7","#dcd3b9","#cbbba0","#ede0bb"][L%4],D.fillRect(0,0,I,j),D.strokeStyle="#4c4437",D.lineWidth=1.3;let At=31+L,kt=()=>(At=At*16807%2147483647,At/2147483647);for(let St=0;St<17;St++){D.beginPath();for(let Pt=0;Pt<25;Pt++){let ae=20+Pt*8.5,sn=45+St*17+Math.sin(Pt*2.1+L+St)*3+kt()*3;Pt?D.lineTo(ae,sn):D.moveTo(ae,sn)}D.stroke()}L%3===0&&(D.strokeStyle="#725342",D.lineWidth=3,D.beginPath(),D.arc(188,332,29,0,7),D.stroke(),D.font="13px serif",D.fillStyle="#725342",D.fillText("\u0410\u0420\u0425\u0418\u0412",164,337)),L%3===1&&(D.strokeStyle="#94795b",D.lineWidth=2,D.strokeRect(24,250,206,100),D.beginPath(),D.moveTo(26,342),D.lineTo(104,270),D.lineTo(170,315),D.lineTo(218,272),D.stroke())})),pt=[];for(let x=0;x<8;x++)for(let L=0;L<9;L++){let D=.215+L%3*.015,I=.285+x%2*.015,j=_t(new gn(D,I),ft(16777215,{map:k[(x*3+L)%9],roughness:.96,emissive:16762490,emissiveIntensity:.04}),W);j.position.set(-1.09+L*.273,.63+x*.327,.064+L%3*.002),j.rotation.z=Math.sin(x*11+L*3)*.035,pt.push(j)}let wt=[13,38,59,23],Dt=_t(new gn(.26,.34),new tn({color:16766872,transparent:!0,opacity:.26,depthWrite:!1,blending:Zi}),W);Dt.position.z=.076,Dt.castShadow=!1,hn(0,3.2,.9,16764297,18,4,W);let Ct=Re(-.24,-.82);Q(.08,.88,.1,0,.46,0,Bt,Ct),Q(.55,.055,.45,0,.03,.03,F,Ct);let Xt=X(["\u041F\u0438\u0441\u044C\u043C\u0430","\u0438\u0437 \u0410\u0440\u043A\u0442\u0438\u043A\u0438"],["\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442","\u0423\u0441\u043B\u044B\u0448\u044C\u0442\u0435 \u0435\u0433\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u044E"]);B(.55,.36,0,1.02,0,Xt,Ct,-.65);let Wt=Re(-.24,4.95);for(let x of[-1.64,1.22])Q(.035,3.2,.035,x,1.6,0,Bt,Wt),Q(.32,.045,.44,x,.025,0,F,Wt);Q(2.9,.06,.06,-.21,3.16,0,Bt,Wt);let zt=Re(0,0,0,Wt);zt.position.y=3.04,Q(.35,.14,.28,0,0,0,It,zt);let ne=Jt(.07,.075,.09,0,0,-.17,it,zt);ne.rotation.x=Math.PI/2;let ue=Jt(.058,.058,.012,0,0,-.22,dt,zt);ue.rotation.x=Math.PI/2;for(let x=0;x<8;x++)Q(.21,.005,.014,0,.078,-.08+x*.021,F,zt);let Se=new R(-.24,3.04,4.73),ge=[[-1.47,.42,-2.21],[.99,.42,-2.21],[.99,3.13,-2.21],[-1.47,3.13,-2.21]],de=[];for(let x=0;x<4;x++)de.push(...Se.toArray(),...ge[x],...ge[(x+1)%4]);let Vt=new we;Vt.setAttribute("position",new $t(de,3)),Vt.computeVertexNormals();let ve=_t(Vt,new tn({color:15455398,transparent:!0,opacity:.018,side:We,depthWrite:!1,blending:Zi}),Mt);ve.castShadow=!1;let oe=[];function Ze(x,L,D,I){let j=Re(x,L,D);Q(1.08,.22,.54,0,.11,0,Bt,j),Q(1.08,.075,.54,0,2.52,0,Bt,j);for(let Pt of[-.51,.51])for(let ae of[-.23,.23])Q(.018,2.3,.018,Pt,1.38,ae,it,j);let At=ft(11065309,{transparent:!0,opacity:.095,metalness:.25,roughness:.08,depthWrite:!1,side:We});Q(1,2.21,.012,0,1.38,.247,At,j);for(let Pt of[-.5,.5])Q(.012,2.21,.47,Pt,1.38,0,At,j);Q(.97,.018,.026,0,2.465,.17,rt,j),hn(0,2.2,.05,16765335,9,2.7,j),hn(0,.4,.42,5883349,1.7,1.6,j);let kt=M(512,1024,(Pt,ae,sn)=>{Pt.strokeStyle="#6fdbdf",Pt.fillStyle="#8aebed",Pt.lineWidth=2,Pt.strokeRect(20,24,ae-40,sn-48),Pt.font="22px sans-serif",Pt.fillText(I==="coat"?"\u0421\u041E\u0413\u0420\u0415\u0412\u0410\u042F \u041F\u041E\u041B\u042F\u0420\u041D\u0418\u041A\u0410":"\u0427\u0422\u041E\u0411\u042B \u041D\u0410\u0419\u0422\u0418 \u041F\u0423\u0422\u042C",35,75);for(let $e=0;$e<3;$e++){let Ce=280+$e*180;Pt.beginPath(),Pt.moveTo(28,Ce),Pt.lineTo(105,Ce),Pt.lineTo(170,Ce-30),Pt.stroke(),Pt.beginPath(),Pt.arc(175,Ce-30,6,0,7),Pt.stroke()}Pt.font="18px sans-serif",Pt.fillText("\u041F\u041E\u0414\u041B\u0418\u041D\u041D\u0418\u041A + \u0426\u0418\u0424\u0420\u041E\u0412\u041E\u0419 \u0421\u041B\u041E\u0419",35,966)}),St=_t(new gn(.99,2.2),new tn({map:kt,transparent:!0,opacity:.48,depthWrite:!1,toneMapped:!1}),j);St.position.set(0,1.38,.263),St.castShadow=!1,oe.push({g:j,hud:St}),Q(.62,.035,.19,0,.83,.38,Bt,j);for(let Pt=0;Pt<3;Pt++)Q(.16,.021,.13,-.2+Pt*.2,.865,.39,ft([8549454,5590592,11182229][Pt]),j);return j}let Gn=Ze(-1.71,-1.69,.78,"coat"),Xe=ft(6644558,{roughness:.95}),Ai=ft(10522226),xe=ft(3287587),Ae=Re(0,0,0,Gn),un=_t(new Xr([new ct(.26,.85),new ct(.29,.9),new ct(.23,1.55),new ct(.33,1.93),new ct(.18,2.02)],40),Xe,Ae);Q(.022,1.02,.018,0,1.43,.26,it,Ae);for(let x=0;x<6;x++){let L=Jt(.016,.016,.012,.05,1.05+x*.15,.27,it,Ae);L.rotation.x=Math.PI/2}for(let x of[-1,1]){let L=_t(new Vi(.095,.66,6,16),Xe,Ae);L.position.set(x*.31,1.56,0),L.rotation.z=x*.2,Q(.19,.16,.045,x*.13,1.14,.25,Xe,Ae),Q(.17,.23,.26,x*.14,.58,.015,xe,Ae),Q(.17,.1,.32,x*.14,.49,.07,xe,Ae)}let Je=os(.17,.062,0,2.1,0,Ai,Ae),qe=_t(new _i(.14,24,12),F,Ae);qe.position.set(0,2.08,-.055),qe.scale.z=.5;let Nn=Ze(1.24,-1.69,-.59,"instrument");Q(.77,.075,.36,0,.72,0,ee,Nn);for(let x of[-.26,.26])Q(.025,.43,.025,x,.47,0,it,Nn);let nn=Re(.05,0,0,Nn);nn.position.y=1.25;let Cd=_t(new Hs(.31,.018,8,48,Math.PI*.65),it,nn);Cd.rotation.z=-Math.PI*.88;for(let x of[-1.1,-2.65])co([[0,.03,0],[Math.cos(x)*.3,Math.sin(x)*.3,0]],.012,it,nn);co([[0,.03,.015],[-.09,-.29,.015]],.018,it,nn);let Pd=Jt(.022,.027,.24,.08,.01,0,it,nn);Pd.rotation.z=Math.PI/2,Q(.07,.1,.035,-.05,.04,.03,vt,nn),os(.13,.018,-.24,.22,0,it,nn),Jt(.16,.18,.1,-.21,.84,.035,it,Nn);let dh=M(256,256,x=>{x.fillStyle="#12242a",x.fillRect(0,0,256,256),x.strokeStyle="#d4ba7d",x.lineWidth=3;for(let L=0;L<36;L++){let D=L*Math.PI/18;x.beginPath(),x.moveTo(128+90*Math.sin(D),128+90*Math.cos(D)),x.lineTo(128+105*Math.sin(D),128+105*Math.cos(D)),x.stroke()}x.fillStyle="#cbe1db",x.font="24px serif",x.fillText("N",120,47),x.beginPath(),x.moveTo(128,59),x.lineTo(143,160),x.lineTo(128,142),x.lineTo(114,160),x.fill()}),fh=_t(new Ns(.145,48),new tn({map:dh}),Nn);fh.rotation.x=-Math.PI/2,fh.position.set(-.21,.9,.035);let as=Re(0,0);as.name="corner-bridge";let ph=new Ws().load("assets/polar-sea.jpg");ph.colorSpace=Oe;let mh=[];for(let[x,L,D,I,j]of[[3.96,-1.24,0,.94,0],[4.79,-1.035,-Math.PI/4,.83,1],[5.025,-.87,-Math.PI/2,.8,2]]){let At=Re(x,L,D,as),kt=ph.clone();kt.repeat.set(1/3,1),kt.offset.x=j/3,B(I,.95,0,1.96,0,kt,At),Q(I+.09,.11,.13,0,2.5,-.03,Bt,At),Q(I+.09,.08,.13,0,1.42,-.03,Bt,At);for(let St of[-I/2-.025,I/2+.025])Q(.035,1.12,.1,St,1.96,.025,it,At);Q(I+.05,.016,.02,0,1.4,.06,dt,At),mh.push(At)}let xn=Re(3.87,-.82,-Math.PI/4,as);xn.name="angled-console",Q(1.26,.59,.43,0,.54,0,Bt,xn),Q(1.32,.085,.53,0,.88,0,Bt,xn);for(let x of[-.59,.59])Q(.03,.59,.4,x,.54,0,it,xn);let gh=M(512,384,()=>{}),_h=M(512,384,()=>{}),xh=M(512,384,()=>{}),ls=Re(0,0,0,xn);ls.position.set(0,1.035,-.055),ls.rotation.x=-.6,Q(1.3,.34,.065,0,0,0,F,ls),B(.38,.28,-.43,0,.055,gh,ls),B(.38,.28,0,0,.055,_h,ls),B(.38,.28,.43,0,.055,xh,ls);for(let x=0;x<9;x++){let L=-.55+x*.136,D=Jt(.02,.02,.05,L,.936,.22,x%4===0?it:It,xn);D.rotation.x=Math.PI/2,_t(new _i(.006,8,6),x%3===0?rt:dt,xn).position.set(L,.968,.252)}for(let x of[-.48,.48]){let L=B(.17,.1,x,.71,.228,dh,xn);L.rotation.x=-.14}let ho=new ye;xn.add(ho),ho.position.set(0,.94,.47),ho.rotation.x=-.28;let Ri=new ye;ho.add(Ri),os(.245,.025,0,0,0,ee,Ri),os(.242,.008,0,0,.026,it,Ri);for(let x=0;x<8;x++){let L=x*Math.PI/4,D=Q(.023,.46,.022,0,0,0,it,Ri);D.rotation.z=L;let I=_t(new Vi(.022,.086,6,12),ee,Ri);I.position.set(Math.sin(L)*.27,Math.cos(L)*.27,0),I.rotation.z=-L}let Id=Jt(.065,.065,.065,0,0,0,it,Ri);Id.rotation.x=Math.PI/2;for(let x of[-.58,.58]){let L=Q(.018,.15,.018,x,1,.29,it,xn);L.rotation.x=-.35,_t(new _i(.033,16,10),It,xn).position.set(x,1.08,.32)}hn(4.45,2.13,-.75,6736360,11,3,as),hn(3.23,1.3,.08,14861984,4,2.5,as),Q(1.34,.012,.02,0,.012,.74,dt,xn);let ir=new ye;n.add(ir),ir.visible=!1;let yh=[[3.18,-.04],[3.76,.27]],vh=[[2.17,-.69],[2.17,-.04],[2.17,.61],[1.48,-.74],[1.48,-.09],[.32,1.1],[.78,-.78],[.78,-.13],[.78,.52],[.13,-.2]],xl=[];function Mh(x,L,D=!1){let I=Re(x,L,0,ir),j=ft(D?14729611:7444390,{transparent:!0,opacity:.28,depthWrite:!1}),At=_t(new Vi(.16,.55,5,12),j,I);At.position.y=1.1;let kt=_t(new _i(.105,12,10),j,I);kt.position.y=1.65;for(let Pt of[-.095,.095])Q(.09,.61,.1,Pt,.36,0,j,I);let St=_t(new qr(.245,.26,40),new tn({color:D?14137730:7710388,transparent:!0,opacity:.7,side:We}),I);return St.rotation.x=-Math.PI/2,St.position.y=.025,I.traverse(Pt=>Pt.castShadow=!1),I}yh.forEach(x=>xl.push(Mh(...x,!0))),vh.forEach(x=>xl.push(Mh(...x)));function yl(x){Ti=x,ir.visible=x>0,xl.forEach((L,D)=>L.visible=D<2||D-2<x),document.querySelectorAll("[data-group-size]").forEach(L=>{let D=Number(L.dataset.groupSize)===x;L.classList.toggle("active",D),L.setAttribute("aria-pressed",String(D))}),i("group-status").textContent=x?`2 \u0443 \u043F\u0443\u043B\u044C\u0442\u0430 + ${x} \u0437\u0440\u0438\u0442\u0435\u043B\u0435\u0439 \u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u0437\u0430\u043B\u0435. \u042D\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0440\u0430\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438; \u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0442\u043E\u0447\u043D\u044F\u0435\u043C \u043F\u043E \u043E\u0431\u043C\u0435\u0440\u0443.`:"\u041C\u0435\u0441\u0442\u0430 \u0437\u0440\u0438\u0442\u0435\u043B\u0435\u0439 \u2014 \u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u0437\u0430\u043B\u0435, \u0441 \u0432\u0438\u0434\u043E\u043C \u043D\u0430 \u0440\u0443\u0431\u043A\u0443."}function vl(x=0){for(let[L,D]of[[gh,"RADAR"],[_h,"NAVIGATION"],[xh,"SYSTEMS"]]){let I=L.image.getContext("2d");I.fillStyle="#071a24",I.fillRect(0,0,512,384),I.strokeStyle="#234f5e",I.lineWidth=1;for(let j=0;j<9;j++)I.beginPath(),I.moveTo(j*64,0),I.lineTo(j*64,384),I.moveTo(0,j*48),I.lineTo(512,j*48),I.stroke();if(I.fillStyle="#a7e1e9",I.font="17px monospace",I.fillText(D,18,28),I.fillStyle="#69bdd0",I.font="12px monospace",I.fillText("POLAR RESEARCH / DEMO",18,365),D==="RADAR"){for(let At=34;At<150;At+=34)I.strokeStyle="#3e9ba1",I.beginPath(),I.arc(256,200,At,0,7),I.stroke();let j=x*.26+Ln*.2;I.fillStyle="#357b6b",I.beginPath(),I.moveTo(256,200),I.arc(256,200,140,j,j+.32),I.closePath(),I.fill();for(let At=0;At<9;At++)I.fillStyle="#c1f7b7",I.fillRect(130+At*53%251,100+At*37%188,4,4)}else if(D==="NAVIGATION")I.fillStyle="#3d6268",I.beginPath(),[[0,55],[160,64],[197,155],[147,226],[78,285],[0,322]].forEach(([j,At],kt)=>kt?I.lineTo(j,At):I.moveTo(j,At)),I.fill(),I.strokeStyle="#d8c993",I.lineWidth=3,I.beginPath(),I.moveTo(205,330),I.lineTo(243,250),I.lineTo(294+Ln*12,166),I.lineTo(372,86),I.stroke(),I.fillStyle="#88dfe8",I.beginPath(),I.moveTo(294,151),I.lineTo(283,175),I.lineTo(304,175),I.fill(),I.fillText("COURSE "+((31+Ln*20)%360+360).toFixed(0)+"\xB0",298,315);else{I.font="48px monospace",I.fillStyle="#d7d9c8",I.fillText("08.4",34,108),I.font="16px monospace",I.fillText("KNOTS",36,137),I.fillText("WIND  N / 12.6",36,207),I.fillText("DEPTH   082 m",36,240),I.fillText("ICE     4 / 10",36,273);for(let j=0;j<3;j++)I.fillStyle="#385e67",I.fillRect(330+j*45,80,25,218),I.fillStyle=["#9bcbb7","#d9b97c","#6cbbd6"][j],I.fillRect(330+j*45,100+j*34,25,198-j*34)}L.needsUpdate=!0}}vl();let Wn=Re(-1.55,1.54,2.37);Wn.name="expedition-touch-and-screen",Q(1.04,2.65,.09,0,1.36,-.18,Bt,Wn),Q(1.1,.025,.12,0,2.7,-.13,it,Wn);let Ml=M(768,1366,()=>{});B(.9,1.6,0,1.8,-.11,Ml,Wn),Q(.72,.91,.44,0,.455,.44,Bt,Wn),Q(.82,.045,.54,0,.03,.44,F,Wn);let Sl=X(["\u0421\u043E\u0431\u0435\u0440\u0438 \u0441\u0432\u043E\u044E","\u044D\u043A\u0441\u043F\u0435\u0434\u0438\u0446\u0438\u044E"],["1920-\u0435 / 1960-\u0435 / \u0441\u0435\u0433\u043E\u0434\u043D\u044F","\u0412\u044B\u0431\u043E\u0440 \u043E\u0436\u0438\u0432\u0430\u0435\u0442 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435"]);B(.7,.45,0,1.1,.47,Sl,Wn,-.6),hn(0,1.6,.45,9687773,3,2.6,Wn);let sr=new Image;sr.src="assets/diary.jpg",sr.onload=()=>rr();function bl(x,L,D,I,j,At,kt=12){let St="",Pt=0;for(let ae of L.split(/\s+/)){let sn=St?St+" "+ae:ae;if(x.measureText(sn).width>j&&St){if(x.fillText(St,D,I+Pt*At),St=ae,++Pt>=kt)return}else St=sn}Pt<kt&&x.fillText(St,D,I+Pt*At)}function rr(){let x=Ml.image.getContext("2d");x.fillStyle="#102532",x.fillRect(0,0,768,1366),x.strokeStyle="#7298a8",x.lineWidth=1;for(let I=0;I<7;I++)x.beginPath(),x.arc(384,760,120+I*90,0,7),x.stroke();x.fillStyle="#d9c7a3",x.font="25px sans-serif",x.fillText("\u0421\u041E\u0411\u0415\u0420\u0418 \u0421\u0412\u041E\u042E \u042D\u041A\u0421\u041F\u0415\u0414\u0418\u0426\u0418\u042E",48,72),x.font="68px Georgia",x.fillText(Vn==="today"?"\u0421\u0435\u0433\u043E\u0434\u043D\u044F":Vn+"-\u0435",48,177),x.font="24px sans-serif",x.fillStyle="#a5ccd5",x.fillText("\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u2192 \u0430\u0440\u0445\u0438\u0432\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F",48,240),sr.complete&&sr.naturalWidth&&(x.globalAlpha=.72,x.drawImage(sr,52,300,664,560),x.globalAlpha=1),x.fillStyle="#0a1824db",x.fillRect(38,740,692,580),x.font="32px Georgia",x.fillStyle="#eee0c4",x.fillText(Un.size?"\u0412\u0430\u0448 \u043D\u0430\u0431\u043E\u0440":"\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430",62,806);let L={coat:"\u0422\u0451\u043F\u043B\u0430\u044F \u043E\u0434\u0435\u0436\u0434\u0430",compass:"\u041A\u043E\u043C\u043F\u0430\u0441",radio:"\u0421\u0440\u0435\u0434\u0441\u0442\u0432\u043E \u0441\u0432\u044F\u0437\u0438",diary:"\u0414\u043D\u0435\u0432\u043D\u0438\u043A"};x.font="30px sans-serif",[...Un].forEach((I,j)=>x.fillText("\u2713 "+L[I],62,875+j*53)),x.font="21px sans-serif",x.fillStyle="#9ab9c5",Un.size||bl(x,"\u041A\u0430\u0436\u0434\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0432\u0435\u0449\u044C \u0438\u043B\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0438\u0437 \u043C\u0443\u0437\u0435\u0439\u043D\u043E\u0433\u043E \u0430\u0440\u0445\u0438\u0432\u0430.",62,1010,600,37,5),x.fillText("\u041F\u0440\u0438\u043C\u0435\u0440 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 / \u0432\u044B\u0431\u043E\u0440 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0441 \u043C\u0443\u0437\u0435\u0435\u043C",62,1290),Ml.needsUpdate=!0;let D=Sl.image.getContext("2d");D.fillStyle="#122633",D.fillRect(0,615,768,345),D.font="37px Georgia",D.fillStyle="#d9c7a3",D.fillText("\u0412 \u043D\u0430\u0431\u043E\u0440\u0435: "+Un.size+" / 4",65,730),D.font="28px sans-serif",D.fillText("\u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u044D\u043A\u0440\u0430\u043D",65,800),Sl.needsUpdate=!0}rr();let Fn=Re(1.78,1.43,-2.242);Fn.name="schmidt-touch-and-screen",Q(1.24,2.7,.09,0,1.36,-.17,Bt,Fn);for(let x of[-.61,.61])Q(.023,2.71,.1,x,1.36,-.1,it,Fn);let El=M(768,1366,()=>{});B(1.09,1.94,0,1.72,-.105,El,Fn),Q(.09,.9,.12,0,.45,.59,Bt,Fn),Q(.62,.045,.45,0,.028,.59,F,Fn);let Tl=X(["\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435","\u041E\u0442\u0442\u043E \u0428\u043C\u0438\u0434\u0442\u0430"],["\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441","\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0442\u0432\u0435\u0442\u0438\u0442 \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430"]);B(.67,.43,0,1.05,.6,Tl,Fn,-.62),hn(0,1.65,.4,6146524,3,2,Fn);let or=new Image;or.src="assets/schmidt-avatar.jpg",or.onload=()=>wl();function wl(){let x=El.image.getContext("2d");x.fillStyle="#0a1725",x.fillRect(0,0,768,1366),or.complete&&or.naturalWidth&&x.drawImage(or,0,0,768,1152);let L=x.createLinearGradient(0,560,0,1160);L.addColorStop(0,"#0a172500"),L.addColorStop(.5,"#0a1725eb"),L.addColorStop(1,"#0a1725"),x.fillStyle=L,x.fillRect(0,560,768,806),x.fillStyle="#d9c7a3",x.font="25px sans-serif",x.fillText("\u041E\u0416\u0418\u0412\u0428\u0418\u0415 \u0410\u0420\u0425\u0418\u0412\u042B / \u041F\u0415\u0420\u0421\u041E\u041D\u0410\u0416",42,67),x.font="54px Georgia",x.fillText("\u041E\u0442\u0442\u043E \u0428\u043C\u0438\u0434\u0442",44,800),x.font="24px sans-serif",x.fillStyle="#b5d1db",bl(x,wi||"\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0430 \u0442\u0430\u0447\u0435. \u041D\u0430 \u044D\u0442\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0430\u0440\u0445\u0438\u0432\u043D\u0430\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0430.",44,852,675,33,6),x.font="18px sans-serif",x.fillStyle="#749aa8",x.fillText("\u041A\u043E\u043D\u0446\u0435\u043F\u0442 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \xB7 \u043F\u0440\u0438\u043C\u0435\u0440 \u0434\u0438\u0430\u043B\u043E\u0433\u0430",44,112),El.needsUpdate=!0}wl();function Al(x){if(x=x.trim().slice(0,180),!x)return;nr=x;let L=x.toLowerCase();wi=/челюскин|спас|лагер|жили|выжив/.test(L)?"\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0446\u0438\u0435\u0439 \xAB\u0427\u0435\u043B\u044E\u0441\u043A\u0438\u043D\u0430\xBB \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u043B \u0428\u043C\u0438\u0434\u0442. \u041F\u043E\u0441\u043B\u0435 \u0433\u0438\u0431\u0435\u043B\u0438 \u0441\u0443\u0434\u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0443\u0441\u0442\u0440\u043E\u0438\u043B\u0438 \u043B\u0430\u0433\u0435\u0440\u044C \u043D\u0430 \u043B\u044C\u0434\u0443, \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u043B\u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F \u0438 \u0431\u044B\u043B\u0438 \u044D\u0432\u0430\u043A\u0443\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0441\u0430\u043C\u043E\u043B\u0451\u0442\u0430\u043C\u0438.":/полюс|станци|1937/.test(L)?"\u0412 1937 \u0433\u043E\u0434\u0443 \u0428\u043C\u0438\u0434\u0442 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043B \u044D\u043A\u0441\u043F\u0435\u0434\u0438\u0446\u0438\u044E \u043F\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u043F\u0435\u0440\u0432\u043E\u0439 \u0434\u0440\u0435\u0439\u0444\u0443\u044E\u0449\u0435\u0439 \u043D\u0430\u0443\u0447\u043D\u043E\u0439 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 \xAB\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u043B\u044E\u0441-1\xBB.":/сибиряк|путь|1932|маршрут/.test(L)?"\u0412 1932 \u0433\u043E\u0434\u0443 \u044D\u043A\u0441\u043F\u0435\u0434\u0438\u0446\u0438\u044F \u043D\u0430 \xAB\u0421\u0438\u0431\u0438\u0440\u044F\u043A\u043E\u0432\u0435\xBB \u043F\u043E\u0434 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C \u0428\u043C\u0438\u0434\u0442\u0430 \u0432\u043F\u0435\u0440\u0432\u044B\u0435 \u043F\u0440\u043E\u0448\u043B\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u043F\u0443\u0442\u044C \u0437\u0430 \u043E\u0434\u043D\u0443 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044E.":"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u0435\u0449\u0451 \u043D\u0443\u0436\u0435\u043D \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430 \u043C\u0443\u0437\u0435\u044F. \u0412 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0442\u0435\u043C\u044B: \xAB\u0427\u0435\u043B\u044E\u0441\u043A\u0438\u043D\xBB, \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u043F\u0443\u0442\u044C \u0438 \xAB\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u043B\u044E\u0441-1\xBB.",rs=1,wl(),i("question-status").textContent=wi;let D=Tl.image.getContext("2d");D.fillStyle="#122633",D.fillRect(0,610,768,350),D.font="31px Georgia",D.fillStyle="#ddccaa",bl(D,x,60,680,640,48,4),D.font="23px sans-serif",D.fillStyle="#8ebdcb",D.fillText("\u041E\u0442\u0432\u0435\u0442 \u2014 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435",60,914),Tl.needsUpdate=!0,innerWidth<700&&i("question-input").blur(),i("space").scrollIntoView({behavior:"instant",block:"start"}),requestAnimationFrame(()=>i("space").scrollIntoView({behavior:"instant",block:"start"})),Ht==="tour"&&!De&&i("pause").click()}let Rl=new Ws().load("assets/polar-atlas.jpg");Rl.colorSpace=Oe;let cs=Re(-2.32,-.18,Math.PI/2);cs.name="polar-atlas-window",B(2.2,3.19,0,2.28,0,Rl,cs);for(let x of[-1.12,1.12])Q(.018,3.22,.08,x,2.28,-.015,it,cs);Q(2.25,.02,.08,0,.67,-.015,it,cs),hn(.1,2.9,.65,7585491,4,3,cs);let ni=Re(-1.91,5.41,Math.PI/2);ni.name="entry-atlas",Q(1.48,2.72,.065,0,1.38,-.045,Bt,ni);for(let x of[-.75,.75])Q(.018,2.74,.08,x,1.38,0,it,ni);B(.59,.9,0,1.52,.015,X(["\u041E\u0436\u0438\u0432\u0448\u0438\u0435","\u0430\u0440\u0445\u0438\u0432\u044B"],["\u041F\u0438\u0441\u044C\u043C\u043E. \u041F\u0440\u0435\u0434\u043C\u0435\u0442. \u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435.","\u0421\u0432\u0435\u0442 \u0432\u0435\u0434\u0451\u0442 \u043A \u043F\u0438\u0441\u044C\u043C\u0430\u043C."]),ni);let Dd=M(1024,1024,(x,L,D)=>{x.fillStyle="#172b37",x.fillRect(0,0,L,D),x.strokeStyle="#557985",x.lineWidth=2;for(let I=90;I<650;I+=65)x.beginPath(),x.arc(512,512,I,0,7),x.stroke();for(let I=0;I<24;I++)x.beginPath(),x.moveTo(512,512),x.lineTo(512+750*Math.sin(I*Math.PI/12),512+750*Math.cos(I*Math.PI/12)),x.stroke();x.fillStyle="#bbac90",x.font="27px Georgia",x.fillText("\u041B\u0438\u0447\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043D\u0430 \u043A\u0440\u0430\u044E \u043A\u0430\u0440\u0442\u044B",180,95)});B(1.4,2.6,0,1.39,-.028,Dd,ni),Q(.65,.019,.02,0,.72,.032,dt,ni),B(.18,.18,0,.86,.04,M(256,256,x=>{x.fillStyle="#dacaab",x.fillRect(0,0,256,256),x.fillStyle="#10212b",x.font="bold 80px sans-serif",x.fillText("QR",64,140),x.font="18px sans-serif",x.fillText("\u0410\u0423\u0414\u0418\u041E\u0413\u0418\u0414",75,194)}),ni);let Sh=Re(.74,4.96,-Math.PI/2);B(.95,2.4,0,1.48,0,Rl,Sh),Q(1,.025,.08,0,.27,0,it,Sh);let ar=new ye;Mt.add(ar),ar.name="low-light-alley";for(let[x,L]of[[-1.68,6.05],[.26,6.02],[-1.66,5.04],[.5,5.04],[-1.65,4.1],[.35,4.1],[-1.52,3.13],[.13,3.13]]){let D=Re(x,L,0,ar);Q(.14,.07,.17,0,.04,0,Bt,D);let I=_t(new Ns(.045,20),new tn({color:10541279}),D);I.rotation.x=-Math.PI/2,I.position.y=.081;let j=new jr(8635093,4,3.3,.21,.75,1.3);j.position.set(0,.09,0),j.target.position.set(x<-.6?-.22:.17,1.9,-.3),D.add(j,j.target);let At=_t(new Os(.24,1.75,24,1,!0),new tn({color:8964567,transparent:!0,opacity:.025,side:We,depthWrite:!1,blending:Zi}),D);At.position.set(0,.96,-.08),At.rotation.z=x<-.6?.09:-.09,At.castShadow=!1,hn(0,.23,-.02,9554130,1,1.3,D)}for(let x of[-1.43,.1])Q(.018,.006,3.53,x,.009,4.44,ft(8102829,{emissive:9222593,emissiveIntensity:.28}),ar);let Cl=Re((T+ut)/2,_-.015);Q(.67,.008,.07,0,.012,0,ft(6981523,{emissive:5797505,emissiveIntensity:.2}),Cl);let Ld=M(512,256,x=>{x.fillStyle="#0b1b24",x.fillRect(0,0,512,256),x.fillStyle="#a6c7d1",x.font="32px sans-serif",x.fillText("\u0421\u041B\u0423\u0416\u0415\u0411\u041D\u042B\u0419 \u0412\u042B\u0425\u041E\u0414",36,107),x.font="67px sans-serif",x.fillText("\u2193",225,193)}),Pl=_t(new gn(.64,.32),new tn({map:Ld,side:We}),Cl);Pl.rotation.x=-Math.PI/2,Pl.position.set(0,.025,-.17),Pl.castShadow=!1;for(let[x,L]of[[-.3,1.4],[-.6,4.4]])hn(x,2.5,L,15252871,16,6);hn(0,3.6,-.2,9878221,15,7);let uo=new ye;n.add(uo);let bh=[[-.7,.045,6.22],[-.67,.045,4.5],[-.5,.045,.02],[-1.15,.045,-.92],[.68,.045,-.93],[1.95,.045,-.2],[3.23,.045,.17],[2,.045,.36],[.9,.045,.77],[-.32,.045,.35],[-.78,.045,1.05],[-.36,.045,2.7],[-.7,.045,6.22]],Il=new Gi(bh.map(x=>new R(...x)));_t(new Vs(Il,180,.016,6,!1),ft(14861968,{emissive:14861968,emissiveIntensity:.7}),uo).castShadow=!1;for(let x=1;x<11;x++){let L=x/12,D=Il.getPointAt(L),I=Il.getTangentAt(L),j=_t(new Os(.055,.16,3),rt,uo);j.rotation.x=Math.PI/2,j.rotation.z=Math.atan2(I.x,I.z),j.position.copy(D),j.position.y=.07}let fo=_t(new gn(.69,1.57),new tn({color:8297635,transparent:!0,opacity:.1,side:We,depthWrite:!1}),n);fo.rotation.x=-Math.PI/2,fo.position.set(ut-.35,.023,G-.08),fo.castShadow=!1;let lr={entry:{n:"01",title:"\u0421\u0432\u0435\u0442 \u0432\u0435\u0434\u0451\u0442 \u043A \u043F\u0438\u0441\u044C\u043C\u0430\u043C",copy:"\u041D\u0438\u0437\u043A\u0438\u0435 \u043B\u0443\u0447\u0438 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0442 \u0430\u043B\u043B\u0435\u044E \u043E\u0442 \u0432\u0445\u043E\u0434\u0430. \u041A\u0430\u0440\u0442\u0430 \u0438 \u0430\u0440\u0445\u0438\u0432\u043D\u044B\u0435 \u043E\u0431\u0440\u0430\u0437\u044B \u0437\u0430\u0434\u0430\u044E\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435, \u043F\u0438\u0441\u044C\u043C\u0430 \u0432\u0438\u0434\u043D\u044B \u043F\u043E \u043E\u0441\u0438 \u0437\u0430\u043B\u0430.",p:[-1.55,1.6,5.4],eye:[-.67,1.6,6.18],target:[-.25,1.58,-1.35],fov:66,inside:!0},letters:{n:"02",title:"\u041F\u0438\u0441\u044C\u043C\u0430 \u0438\u0437 \u0410\u0440\u043A\u0442\u0438\u043A\u0438",copy:"\u041F\u043B\u043E\u0442\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0432\u043E \u0432\u0441\u044E \u0448\u0438\u0440\u0438\u043D\u0443 \u043E\u043A\u043D\u0430. \u041D\u0438\u0437\u043A\u0438\u0439 \u0442\u0430\u0447 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u043F\u0438\u0441\u044C\u043C\u043E, \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0440 \u0432\u044B\u0434\u0435\u043B\u044F\u0435\u0442 \u0435\u0433\u043E \u0441\u0432\u0435\u0442\u043E\u043C.",p:[-.24,2.8,-2.14],eye:[-.38,1.72,.62],target:[-.24,1.65,-2.25],inside:!0},objects:{n:"03",title:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0438 \u0435\u0433\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u044F",copy:"\u0414\u0432\u0435 \u0432\u0438\u0442\u0440\u0438\u043D\u044B \u043E\u0431\u0440\u0430\u043C\u043B\u044F\u044E\u0442 \u043F\u0438\u0441\u044C\u043C\u0430. \u041D\u0430 \u043B\u0435\u0432\u043E\u043C \u0431\u043B\u044D\u043A\u0430\u0443\u0442\u0435 \u2014 \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u043B\u044F\u0440\u043D\u044B\u0439 \u0430\u0442\u043B\u0430\u0441; \u043F\u043E\u0434\u043B\u0438\u043D\u043D\u0438\u043A\u0438 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F.",p:[1.22,2.4,-1.6],eye:[.18,1.7,.47],target:[-.76,1.75,-1.8],fov:75,inside:!0},bridge:{n:"04",title:"\u041D\u0430 \u043C\u043E\u0441\u0442\u0438\u043A\u0435 \u043F\u043E\u043B\u044F\u0440\u043D\u043E\u0433\u043E \u0441\u0443\u0434\u043D\u0430",copy:"\u0422\u0440\u0438 \u043E\u043A\u043D\u0430 \u0440\u0443\u0431\u043A\u0438 \u043E\u0431\u043D\u0438\u043C\u0430\u044E\u0442 \u0443\u0433\u043E\u043B. \u0414\u0432\u043E\u0435 \u2014 \u0443 \u043F\u0443\u043B\u044C\u0442\u0430; \u0437\u0440\u0438\u0442\u0435\u043B\u0438 \u0441\u043C\u043E\u0442\u0440\u044F\u0442 \u0438\u0437 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u043B\u0430. \u0421\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0439 \u043F\u0440\u043E\u0445\u043E\u0434 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u043C.",p:[4.19,2,-.91],eye:[1.63,1.78,.29],target:[4.2,1.5,-.92],fov:65,inside:!0},question:{n:"05",title:"\u0412\u0441\u0442\u0440\u0435\u0447\u0430 \u0441 \u041E\u0442\u0442\u043E \u0428\u043C\u0438\u0434\u0442\u043E\u043C",copy:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0430 \u0442\u0430\u0447\u0435. \u041D\u0430 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u0440\u0445\u0438\u0432\u043D\u0430\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0430; \u043E\u0431\u0440\u0430\u0437 \u0428\u043C\u0438\u0434\u0442\u0430 \u2014 \u043A\u043E\u043D\u0446\u0435\u043F\u0442 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u0430\u0432\u0430\u0442\u0430\u0440\u0430.",p:[1.68,2.35,1.35],eye:[-.58,1.66,-.13],target:[1.73,1.6,1.42],fov:61,inside:!0},game:{n:"06",title:"\u0421\u043E\u0431\u0435\u0440\u0438 \u0441\u0432\u043E\u044E \u044D\u043A\u0441\u043F\u0435\u0434\u0438\u0446\u0438\u044E",copy:"\u0422\u0430\u0447 \u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432\u043C\u0435\u0441\u0442\u0435: \u0432\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u044D\u043F\u043E\u0445\u0443 \u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B, \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043E\u0442\u043A\u043B\u0438\u043A \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435.",p:[-1.4,2.25,1.4],eye:[.18,1.68,-.04],target:[-1.55,1.6,1.54],fov:63,inside:!0}},ii=[{name:"\u0410\u043B\u043B\u0435\u044F \u0441\u0432\u0435\u0442\u0430",eye:[-.67,1.6,6.18],end:[-.56,1.64,5.28],target:[-.24,1.55,-1.8],endTarget:[-.24,1.7,-2.24],station:"entry",inside:!0,duration:10,fov:64},{name:"\u0421\u0432\u0435\u0442 \u043D\u0430 \u043F\u0438\u0441\u044C\u043C\u0430\u0445",eye:[-.6,1.76,.48],end:[-.15,1.78,.37],target:[-.24,1.76,-2.28],station:"letters",inside:!0,duration:10,fov:63},{name:"\u041F\u043E\u043B\u044F\u0440\u043D\u044B\u0439 \u0430\u0442\u043B\u0430\u0441",eye:[.18,1.72,.47],end:[.2,1.73,.18],target:[-1.02,1.76,-1.63],station:"objects",inside:!0,duration:9,fov:73},{name:"\u041C\u043E\u0441\u0442\u0438\u043A \u0441\u0440\u0435\u0434\u0438 \u043B\u044C\u0434\u043E\u0432",eye:[1.63,1.78,.29],end:[1.98,1.79,.23],target:[4.2,1.5,-.92],station:"bridge",inside:!0,duration:10,fov:65},{name:"\u0412\u0441\u0442\u0440\u0435\u0447\u0430 \u0441 \u0428\u043C\u0438\u0434\u0442\u043E\u043C",eye:[-.58,1.66,-.13],end:[-.4,1.67,-.1],target:[1.73,1.6,1.42],station:"question",inside:!0,duration:9,fov:61},{name:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0434\u0438\u0446\u0438\u044E",eye:[.18,1.68,-.04],end:[.1,1.67,.22],target:[-1.55,1.6,1.54],station:"game",inside:!0,duration:9,fov:63},{name:"\u0412\u0435\u0441\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442",eye:[11.7,14.5,16.7],end:[10.6,14.3,17.2],target:[1,.3,1.9],station:null,inside:!1,duration:10,fov:39}],cr=document.createElement("span");cr.className="service-label",cr.textContent="\u0421\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0439 \u0432\u044B\u0445\u043E\u0434",i("labels").append(cr);let po=[],Ud=ii.reduce((x,L)=>x+L.duration,0);function Dl(x){i("space").classList.toggle("is-detail",x!=="entry");let L=lr[x];L&&(i("focus-number").textContent=L.n,i("focus-title").textContent=L.title,i("focus-copy").textContent=L.copy,i("demo").dataset.station=x,document.querySelectorAll("[data-demo-panel]").forEach(D=>D.hidden=D.dataset.demoPanel!==x),i("demo").hidden=!["letters","objects","bridge","game","question"].includes(x),document.querySelectorAll("[data-station]").forEach(D=>{let I=D.dataset.station===x;D.classList.toggle("active",I),D.setAttribute("aria-pressed",String(I))}))}function Nd(){if(po.forEach(x=>x.el.remove()),po.length=0,se!=="exhibition")for(let[x,L]of Object.entries(lr)){let D=document.createElement("button");D.className="pin",D.textContent=L.n,D.title=L.title,D.setAttribute("aria-label",L.n+" "+L.title),D.onclick=()=>hr(x),i("labels").append(D),po.push({el:D,p:new R(...L.p)})}}function Eh(){uo.visible=se==="routes",fo.visible=se==="routes"||Ht==="plan",document.querySelectorAll("[data-layer]").forEach(x=>{let L=x.dataset.layer===se;x.classList.toggle("active",L),x.setAttribute("aria-pressed",String(L))}),Nd()}function hs(){let x=t.clientWidth,L=t.clientHeight;if(!(!x||!L)){if(e.setSize(x,L),s.aspect=x/L,s.isOrthographicCamera){let D=innerWidth<700?15.7:12.5;s.left=-D*x/L/2,s.right=D*x/L/2,s.top=D/2,s.bottom=-D/2}s.clearViewOffset(),innerWidth>=900&&Ht==="free"&&!Fe&&s.setViewOffset(x,L,-x*.1,0,x,L),s.updateProjectionMatrix()}}function mo(x,L,D=56){s.position.fromArray(x),a.target.fromArray(L),s.fov=D,s.lookAt(a.target),s.updateProjectionMatrix()}function si(x,L=!1){Ht=x,x==="plan"&&i("space").classList.remove("is-detail"),s=x==="plan"?o:r,a.object=s,a.enabled=x!=="tour",a.enableRotate=x==="free",a.minDistance=.25,a.maxDistance=38,a.maxPolarAngle=Math.PI*.85,s.zoom=1,s.up.set(0,1,0),L||(i("demo").hidden=!0,Fe=!1,g.visible=!1,x==="free"&&mo([11.7,14.5,16.7],[1,.6,1.9],innerWidth<700?57:39),x==="plan"&&mo([1.7,22,2.001],[1.7,0,2]),x==="tour"&&(Ye=0,Ei=-1,De=!1,Th(0,0))),i("pause").hidden=x!=="tour",i("pause").textContent=De?"\u25B6":"\u2161",i("pause").setAttribute("aria-label",De?"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u0440\u043E\u043B\u0451\u0442":"\u041F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u043B\u0451\u0442"),document.querySelectorAll("[data-camera]").forEach(D=>{let I=D.dataset.camera===x;D.classList.toggle("active",I),D.setAttribute("aria-pressed",String(I))}),i("camera-hint").textContent=x==="tour"?"\u041C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B \xB7 8\u201310 \u0441\u0435\u043A\u0443\u043D\u0434":x==="plan"?"\u041C\u0430\u0441\u0448\u0442\u0430\u0431 \u0438 \u0441\u0434\u0432\u0438\u0433":"\u0422\u044F\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u0440\u0430\u0449\u0430\u0442\u044C \xB7 \u041A\u043E\u043B\u0435\u0441\u043E \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431",hs(),Eh(),a.update()}function Th(x,L){let D=ii[x],I=(1-Math.cos(L*Math.PI))/2;Fe=D.inside,g.visible=Fe,s.position.fromArray(D.eye).lerp(new R(...D.end),I),a.target.fromArray(D.target).lerp(new R(...D.endTarget||D.target),I),s.fov=D.fov+(innerWidth<700?16:0),s.lookAt(a.target),s.updateProjectionMatrix(),Ei!==x&&(Ei=x,i("shot-count").textContent=String(x+1).padStart(2,"0")+" / "+String(ii.length).padStart(2,"0"),i("shot-title").textContent=D.name,re=D.station,re?Dl(re):(i("space").classList.remove("is-detail"),i("focus-number").textContent="",i("focus-title").textContent="\u041E\u0434\u0438\u043D \u0432\u0445\u043E\u0434. \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0439.",i("focus-copy").textContent="\u041F\u0438\u0441\u044C\u043C\u0430, \u043F\u043E\u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0438 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u2014 \u0432 \u043E\u0434\u043D\u043E\u043C \u043A\u0430\u043C\u0435\u0440\u043D\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0412\u044B\u0445\u043E\u0434 \u0442\u0430\u043C \u0436\u0435, \u0433\u0434\u0435 \u0432\u0445\u043E\u0434.",i("demo").hidden=!0),hs())}function hr(x){re=x,si("free");let L=lr[x];Fe=!0,g.visible=!0,mo(L.eye,L.target,(L.fov||62)+(innerWidth<700?14:0)),Dl(x),hs(),i("shot-count").textContent=L.n,i("shot-title").textContent=L.title,a.update(),i("space").scrollIntoView({behavior:Ut.matches?"instant":"smooth"})}function Fd(){for(let x of K){let L=x.normal.dot(s.position.clone().sub(x.center))>0,D=Ht==="plan"?[Nt]:!Fe&&L?[x.hypothesis?gt:Ft]:[];x.group.traverse(I=>{I.material&&(I.material.clippingPlanes=D,I.material.clipShadows=!0)})}g.visible=Fe&&Ht!=="plan"}function Ll(x){ss=x,document.querySelectorAll("[data-letter]").forEach(L=>{let D=Number(L.dataset.letter)===x;L.classList.toggle("active",D),L.setAttribute("aria-pressed",String(D))}),i("demo-status").textContent=["\u041F\u0438\u0441\u044C\u043C\u043E \u0434\u043E\u043C\u043E\u0439 \xB7 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043E \u0441\u0432\u0435\u0442\u043E\u043C","\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0439 \xB7 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0430 \u0441\u0432\u0435\u0442\u043E\u043C","\u041F\u043E\u043B\u044F\u0440\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430 \xB7 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0430 \u0441\u0432\u0435\u0442\u043E\u043C","\u041A\u0430\u0440\u0442\u0430 \u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \xB7 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u044B \u0441\u0432\u0435\u0442\u043E\u043C"][x]}function Od(x,L){let D=wt[ss];for(let I=0;I<pt.length;I++){let j=I===D?.75:.008,At=pt[I].material;At.emissiveIntensity+=(j-At.emissiveIntensity)*Math.min(1,x*4)}Dt.position.x=pt[D].position.x,Dt.position.y=pt[D].position.y,Dt.material.opacity=.14+Math.sin(L*1.8)*.04}for(let[x,L]of Object.entries(lr)){let D=document.createElement("button");D.dataset.station=x,D.textContent=L.n+" "+L.title,D.onclick=()=>hr(x),i("stations").append(D)}document.querySelectorAll("[data-camera]").forEach(x=>x.onclick=()=>si(x.dataset.camera)),document.querySelectorAll("[data-layer]").forEach(x=>x.onclick=()=>{se=x.dataset.layer,Eh(),se==="routes"?(si("plan"),i("focus-number").textContent="01 \u2192 06 \u2192 01",i("focus-title").textContent="\u0412\u0445\u043E\u0434 \u0438 \u0432\u044B\u0445\u043E\u0434 \u2014 \u0432\u043C\u0435\u0441\u0442\u0435",i("focus-copy").textContent="\u041F\u0438\u0441\u044C\u043C\u0430 \u2192 \u0432\u0438\u0442\u0440\u0438\u043D\u044B \u2192 \u0440\u0443\u0431\u043A\u0430 \u2192 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u0441\u043E \u0428\u043C\u0438\u0434\u0442\u043E\u043C \u2192 \u0441\u0431\u043E\u0440 \u044D\u043A\u0441\u043F\u0435\u0434\u0438\u0446\u0438\u0438. \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0445\u043E\u0434 \u0441\u043F\u0440\u0430\u0432\u0430 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u043C."):se==="equipment"&&(si("free"),i("focus-number").textContent="01\u201406",i("focus-title").textContent="\u0428\u0435\u0441\u0442\u044C \u0442\u043E\u0447\u0435\u043A \u044D\u043A\u0441\u043F\u043E\u0437\u0438\u0446\u0438\u0438",i("focus-copy").textContent="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0432 \u043C\u043E\u0434\u0435\u043B\u0438 \u0438\u043B\u0438 \u0442\u043E\u0447\u043A\u0443 \u0432\u043D\u0438\u0437\u0443. \u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F \u2014 \u043D\u0438\u0436\u0435 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.")}),document.querySelectorAll("[data-focus]").forEach(x=>x.onclick=()=>hr(x.dataset.focus)),document.querySelectorAll("[data-letter]").forEach(x=>x.onclick=()=>Ll(Number(x.dataset.letter))),i("pause").onclick=()=>{De=!De,i("pause").textContent=De?"\u25B6":"\u2161",i("pause").setAttribute("aria-label",De?"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u0440\u043E\u043B\u0451\u0442":"\u041F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u043B\u0451\u0442")},document.querySelectorAll("[data-wheel]").forEach(x=>x.onclick=()=>{Ln+=Number(x.dataset.wheel)*.25,Ri.rotation.z=Ln,i("bridge-status").textContent="\u041A\u0443\u0440\u0441 "+(((31+Ln*20)%360+360)%360).toFixed(0)+"\xB0 \xB7 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",vl(Ye)}),i("hide-demo").onclick=()=>{i("demo").hidden=!0},i("glass-toggle").onclick=()=>{let x=oe[0].hud.material.opacity<.6;oe.forEach(L=>L.hud.material.opacity=x?.94:.35),i("glass-toggle").textContent=x?"\u0423\u0431\u0440\u0430\u0442\u044C \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0441\u043B\u043E\u0439":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0441\u043B\u043E\u0439",i("glass-toggle").setAttribute("aria-pressed",String(x))},document.querySelectorAll("[data-era]").forEach(x=>x.onclick=()=>{Vn=x.dataset.era,document.querySelectorAll("[data-era]").forEach(L=>{let D=L===x;L.classList.toggle("active",D),L.setAttribute("aria-pressed",String(D))}),i("game-status").textContent="\u042D\u043F\u043E\u0445\u0430: "+x.textContent+". \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435.",rr()}),document.querySelectorAll("[data-gear]").forEach(x=>x.onclick=()=>{let L=x.getAttribute("aria-pressed")!=="true";x.setAttribute("aria-pressed",String(L)),x.classList.toggle("active",L),L?Un.add(x.dataset.gear):Un.delete(x.dataset.gear),rr();let D=Un.size;i("game-status").textContent="\u0412 \u043D\u0430\u0431\u043E\u0440\u0435 "+D+" \u0438\u0437 4 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432. \u0412 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u043E\u0442\u043A\u0440\u043E\u0435\u0442 \u0430\u0440\u0445\u0438\u0432\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442."}),document.querySelectorAll("[data-question]").forEach(x=>x.onclick=()=>{i("question-input").value=x.textContent,Al(x.textContent)}),i("question-form").onsubmit=x=>{x.preventDefault(),Al(i("question-input").value)},document.querySelectorAll("[data-group-size]").forEach(x=>x.onclick=()=>{let L=Number(x.dataset.groupSize);yl(L),L>0?(si("plan"),s.zoom=innerWidth<700?1.12:1.45,mo([1.4,22,.001],[1.4,0,0]),Dl("bridge"),hs(),i("space").scrollIntoView({behavior:Ut.matches?"instant":"smooth"})):hr("bridge")}),yl(0),e.domElement.addEventListener("pointerdown",()=>{Ht==="tour"&&(si("free",!0),i("shot-count").textContent="",i("shot-title").textContent="\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u043E\u0431\u0437\u043E\u0440")}),new ResizeObserver(hs).observe(t),new IntersectionObserver(x=>{is=x[0].isIntersecting},{threshold:.01}).observe(t),window.self!==window.top&&(i("version-link").hidden=!0);function Ul(x,L,D){let I=!1;for(let j=0,At=D.length-1;j<D.length;At=j++){let kt=D[j],St=D[At];kt.y>L!=St.y>L&&x<(St.x-kt.x)*(L-kt.y)/(St.y-kt.y)+kt.x&&(I=!I)}return I}function Bd(x,L){return Ul(x,L,V)||Ul(x,L,Gt)||Ul(x,L,z)||x>=Z&&x<=ut&&L>=lt&&L<=G}let wh=performance.now(),ur=0;function Ah(x){requestAnimationFrame(Ah);let L=Math.min(.05,Math.max(0,(x-wh)/1e3));if(wh=x,!is||document.hidden)return;if(ur+=L,Ht==="tour"&&!De){Ye=(Ye+L)%Ud;let I=Ye,j=0;for(;I>=ii[j].duration;)I-=ii[j].duration,j++;Th(j,I/ii[j].duration),i("tour-progress").style.transform=`scaleX(${I/ii[j].duration})`}if(a.update(),Ht==="free"){let I=Fe;Fe=s.position.y<3.1&&Bd(s.position.x,s.position.z),I!==Fe&&hs()}rs=Math.max(0,rs-L*.4),Fn.children.filter(I=>I.isPointLight).forEach(I=>I.intensity=.36+rs*.3),Fd();let D=new R((T+ut)/2,.08,_-.1).project(s);cr.hidden=!(Ht==="plan"||se==="routes")||D.z>1||Math.abs(D.x)>1||Math.abs(D.y)>1,cr.style.transform=`translate(${(D.x+1)*t.clientWidth/2}px,${(1-D.y)*t.clientHeight/2}px) translate(-50%,-50%)`,Od(L,ur),ur-er>.16&&(vl(ur),er=ur),e.render(n,s);for(let I of po){let j=I.p.clone().project(s);I.el.hidden=j.z>1||j.z<-1||Math.abs(j.x)>1.04||Math.abs(j.y)>1.04,I.el.style.transform=`translate(${(j.x+1)*t.clientWidth/2}px,${(1-j.y)*t.clientHeight/2}px) translate(-50%,-50%)`}}si(Ut.matches?"free":"tour"),Ll(0),i("loading").hidden=!0,requestAnimationFrame(Ah),window.archiveExhibitionV3={scene:n,renderer:e,stations:lr,routePoints:bh,technicalBounds:{x:[ut-.7,ut],z:[G,G+.7]},projector:{distance:4.73- -2.21,imageWidth:2.46,throwRatio:(4.73+2.21)/2.46},stationGroups:{letters:W,touch:Ct,coatCase:Gn,instrumentCase:Nn,bridge:as,gameG:Wn,questionG:Fn,entryG:ni,mural:cs,entryLights:ar,exitMarker:Cl},operatorPositions:yh,observerPositions:vh,bridgeWindows:mh,groupPeople:ir,answerQuestion:Al,setGroupSize:yl,drawGameScreen:rr,shots:ii,wallGroups:K,envelope:{main:V,south:Gt,service:z,annex:[Y(Z,lt),Y(ut,lt),Y(ut,G),Y(Z,G)]},setMode:si,focus:hr,chooseLetter:Ll,get camera(){return s},get state(){return{mode:Ht,layer:se,selected:re,paused:De,currentShot:Ei,letterChoice:ss,wheelAngle:Ln,era:Vn,isInside:Fe,groupSize:Ti,avatarQuestion:nr,avatarAnswer:wi,gearSelected:[...Un]}}}}try{J_()}catch(i){console.error(i);let t=document.getElementById("loading");t.hidden=!1,t.textContent="3D \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u043E\u0441\u044C. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 WebGL. \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u044D\u043A\u0441\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043D\u0438\u0436\u0435."}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

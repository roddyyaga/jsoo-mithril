// Generated by js_of_ocaml 3.8.0
(function(a){"use strict";var
aE=" : flags Open_text and Open_binary are not compatible",aq="Sys_error",aD="Invalid_argument",ap=0xf0,aC=0x800,K="jsError",t=1024,aB="End_of_file",j=0x80,aA="Failure",an="Undefined_recursive_module",ao=" : flags Open_rdonly and Open_wronly are not compatible",am="([^/]*)",al=512,az="Stack_overflow",d="",J="^",aj=" : file already exists",ak=0xe0,q=0x3f,ai=0xdfff,ay="Not_found",ah="Assert_failure",m="/",I=128,av="Sys_blocked_io",aw="fd ",ax=0xdc00,ag="Out_of_memory",au="Match_failure",g=248,af="index out of bounds",as="Division_by_zero",at="static/",ar=252;function
a_(a){var
c=[0];while(a!==0){var
d=a[1];for(var
b=1;b<d.length;b++)c.push(d[b]);a=a[2]}return c}function
T(c,b,a){var
e=String.fromCharCode;if(b==0&&a<=4096&&a==c.length)return e.apply(null,c);var
f=d;for(;0<a;b+=t,a-=t)f+=e.apply(null,c.slice(b,b+Math.min(a,t)));return f}function
M(c){if(a.Uint8Array)var
d=new(a.Uint8Array)(c.l);else
var
d=new
Array(c.l);var
f=c.c,e=f.length,b=0;for(;b<e;b++)d[b]=f.charCodeAt(b);for(e=c.l;b<e;b++)d[b]=0;c.c=d;c.t=4;return d}function
x(d,e,b,f,c){if(c==0)return 0;if(f==0&&(c>=b.l||b.t==2&&c>=b.c.length)){b.c=d.t==4?T(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else
if(b.t==2&&f==b.c.length){b.c+=d.t==4?T(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else{if(b.t!=4)M(b);var
g=d.c,h=b.c;if(d.t==4)if(f<=e)for(var
a=0;a<c;a++)h[f+a]=g[e+a];else
for(var
a=c-1;a>=0;a--)h[f+a]=g[e+a];else{var
i=Math.min(c,g.length-e);for(var
a=0;a<i;a++)h[f+a]=g.charCodeAt(e+a);for(;a<c;a++)h[f+a]=0}}return 0}function
y(a){return a}function
L(a,b,c,d,e){x(y(a),b,c,d,e);return 0}function
z(c,a){if(c.fun)return z(c.fun,a);if(typeof
c!=="function")return c;var
b=c.length|0;if(b===0)return c.apply(null,a);var
e=a.length|0,d=b-e|0;if(d==0)return c.apply(null,a);else
if(d<0)return z(c.apply(null,a.slice(0,b)),a.slice(b));else
return function(){var
e=arguments.length==0?1:arguments.length,d=new
Array(a.length+e);for(var
b=0;b<a.length;b++)d[b]=a[b];for(var
b=0;b<arguments.length;b++)d[a.length+b]=arguments[b];return z(c,d)}}function
bu(b,a){if(b==0)return d;if(a.repeat)return a.repeat(b);var
e=d,c=0;for(;;){if(b&1)e+=a;b>>=1;if(b==0)return e;a+=a;c++;if(c==9)a.slice(0,1)}}function
aJ(a){if(a.t==2)a.c+=bu(a.l-a.c.length,"\0");else
a.c=T(a.c,0,a.c.length);a.t=0}function
aT(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>127)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
U(f){for(var
l=d,c=d,h,g,i,a,b=0,k=f.length;b<k;b++){g=f.charCodeAt(b);if(g<j){for(var
e=b+1;e<k&&(g=f.charCodeAt(e))<j;e++);if(e-b>al){c.substr(0,1);l+=c;c=d;l+=f.slice(b,e)}else
c+=f.slice(b,e);if(e==k)break;b=e}a=1;if(++b<k&&((i=f.charCodeAt(b))&-64)==I){h=i+(g<<6);if(g<ak){a=h-0x3080;if(a<j)a=1}else{a=2;if(++b<k&&((i=f.charCodeAt(b))&-64)==I){h=i+(h<<6);if(g<ap){a=h-0xe2080;if(a<aC||a>=0xd7ff&&a<0xe000)a=2}else{a=3;if(++b<k&&((i=f.charCodeAt(b))&-64)==I&&g<0xf5){a=i-0x3c82080+(h<<6);if(a<0x10000||a>0x10ffff)a=3}}}}}if(a<4){b-=a;c+="\ufffd"}else
if(a>0xffff)c+=String.fromCharCode(0xd7c0+(a>>10),ax+(a&0x3FF));else
c+=String.fromCharCode(a);if(c.length>t){c.substr(0,1);l+=c;c=d}}return l+c}function
n(c,a,b){this.t=c;this.c=a;this.l=b}n.prototype.toString=function(){switch(this.t){case
9:return this.c;default:aJ(this);case
0:if(aT(this.c)){this.t=9;return this.c}this.t=8;case
8:return this.c}};n.prototype.toUtf16=function(){var
a=this.toString();if(this.t==9)return a;return U(a)};n.prototype.slice=function(){var
a=this.t==4?this.c.slice():this.c;return new
n(this.t,a,this.l)};function
bs(b,a){throw[0,b,a]}function
aH(a){return new
n(0,a,a.length)}function
c(a){return aH(a)}function
R(b,a){bs(b,c(a))}var
e=[0];function
N(a){R(e.Invalid_argument,a)}function
p(a){if(a<0)N("Bytes.create");return new
n(a?2:9,d,a)}var
bq=0;function
A(){return bq++}function
bg(a){R(e.Failure,a)}function
P(a){return a.toUtf16()}if(a.process&&a.process.cwd)var
u=a.process.cwd().replace(/\\/g,m);else
var
u="/static";if(u.slice(-1)!==m)u+=m;function
bl(a){a=P(a);if(a.charCodeAt(0)!=47)a=u+a;var
e=a.split(m),b=[];for(var
c=0;c<e.length;c++)switch(e[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(d);break;default:b.push(e[c]);break}b.orig=a;return b}function
O(a){return a
instanceof
n}function
aL(a){return O(a)}function
bc(a){return new
n(4,a,a.length)}function
by(f){for(var
g=d,b=g,a,i,c=0,h=f.length;c<h;c++){a=f.charCodeAt(c);if(a<j){for(var
e=c+1;e<h&&(a=f.charCodeAt(e))<j;e++);if(e-c>al){b.substr(0,1);g+=b;b=d;g+=f.slice(c,e)}else
b+=f.slice(c,e);if(e==h)break;c=e}if(a<aC){b+=String.fromCharCode(0xc0|a>>6);b+=String.fromCharCode(j|a&q)}else
if(a<0xd800||a>=ai)b+=String.fromCharCode(ak|a>>12,j|a>>6&q,j|a&q);else
if(a>=0xdbff||c+1==h||(i=f.charCodeAt(c+1))<ax||i>ai)b+="\xef\xbf\xbd";else{c++;a=(a<<10)+i-0x35fdc00;b+=String.fromCharCode(ap|a>>18,j|a>>12&q,j|a>>6&q,j|a&q)}if(b.length>t){b.substr(0,1);g+=b;b=d}}return g+b}function
bd(a){var
b=9;if(!aT(a))b=8,a=by(a);return new
n(b,a,a.length)}function
S(a){return bd(a)}function
b(a){R(e.Sys_error,a)}function
B(a){if((a.t&6)!=0)aJ(a);return a.c}function
br(a){a=B(a);b(a+": No such file or directory")}function
aG(){N(af)}function
aI(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
bb(b,a){if(a>>>0>=b.l)aG();return aI(b,a)}function
aN(a){return a.l}function
aF(){}function
f(a){this.data=a}f.prototype=new
aF();f.prototype.truncate=function(a){var
b=this.data;this.data=p(a|0);x(b,0,this.data,0,a)};f.prototype.length=function(){return aN(this.data)};f.prototype.write=function(b,d,g,a){var
c=this.length();if(b+a>=c){var
e=p(b+a),f=this.data;this.data=e;x(f,0,this.data,0,c)}L(d,g,this.data,b,a);return 0};f.prototype.read=function(c,a,d,b){var
e=this.length();x(this.data,c,a,d,b);return 0};f.prototype.read_one=function(a){return bb(this.data,a)};f.prototype.close=function(){};f.prototype.constructor=f;function
h(b,a){this.content={};this.root=b;this.lookupFun=a}h.prototype.nm=function(a){return this.root+a};h.prototype.lookup=function(a){if(!this.content[a]&&this.lookupFun){var
b=this.lookupFun(c(this.root),c(a));if(b!==0)this.content[a]=new
f(y(b[1]))}};h.prototype.exists=function(a){if(a==d)return 1;var
c=a+m,e=new
RegExp(J+c);for(var
b
in
this.content)if(b.match(e))return 1;this.lookup(a);return this.content[a]?1:0};h.prototype.readdir=function(c){var
g=c==d?d:c+m,h=new
RegExp(J+g+am),e={},b=[];for(var
f
in
this.content){var
a=f.match(h);if(a&&!e[a[1]]){e[a[1]]=true;b.push(a[1])}}return b};h.prototype.is_dir=function(a){var
e=a==d?d:a+m,f=new
RegExp(J+e+am),g=[];for(var
c
in
this.content){var
b=c.match(f);if(b)return 1}return 0};h.prototype.unlink=function(a){var
b=this.content[a]?true:false;delete
this.content[a];return b};h.prototype.open=function(a,c){if(c.rdonly&&c.wronly)b(this.nm(a)+ao);if(c.text&&c.binary)b(this.nm(a)+aE);this.lookup(a);if(this.content[a]){if(this.is_dir(a))b(this.nm(a)+" : is a directory");if(c.create&&c.excl)b(this.nm(a)+aj);var
d=this.content[a];if(c.truncate)d.truncate();return d}else
if(c.create){this.content[a]=new
f(p(0));return this.content[a]}else
br(this.nm(a))};h.prototype.register=function(c,a){if(this.content[c])b(this.nm(c)+aj);if(O(a))this.content[c]=new
f(a);if(aL(a))this.content[c]=new
f(y(a));else
if(a
instanceof
Array)this.content[c]=new
f(bc(a));else
if(typeof
a==="string")this.content[c]=new
f(aH(a));else
if(a.toString){var
d=y(S(a.toString()));this.content[c]=new
f(d)}else
b(this.nm(c)+" : registering file with invalid content type")};h.prototype.constructor=h;function
Q(a){return aN(a)}function
bw(b,a){return aI(b,a)}function
ba(d){var
c=Q(d),b=new
Array(c),a=0;for(;a<c;a++)b[a]=bw(d,a);return b}function
a$(a){if(a.t!=4)M(a);return a.c}function
bf(a,c,b){b&=0xff;if(a.t!=4){if(c==a.c.length){a.c+=String.fromCharCode(b);if(c+1==a.l)a.t=0;return 0}M(a)}a.c[c]=b;return 0}function
be(b,a,c){if(a>>>0>=b.l)aG();return bf(b,a,c)}function
l(a){this.fs=require("fs");this.fd=a}l.prototype=new
aF();l.prototype.truncate=function(a){try{this.fs.ftruncateSync(this.fd,a|0)}catch(a){b(a.toString())}};l.prototype.length=function(){try{return this.fs.fstatSync(this.fd).size}catch(a){b(a.toString())}};l.prototype.write=function(h,d,e,g){var
c=ba(d);if(!(c
instanceof
a.Uint8Array))c=new(a.Uint8Array)(c);var
f=a.Buffer.from(c);try{this.fs.writeSync(this.fd,f,e,g,h)}catch(a){b(a.toString())}return 0};l.prototype.read=function(i,f,e,h){var
c=a$(f);if(!(c
instanceof
a.Uint8Array))c=new(a.Uint8Array)(c);var
g=a.Buffer.from(c);try{this.fs.readSync(this.fd,g,e,h,i)}catch(a){b(a.toString())}for(var
d=0;d<h;d++)be(f,e+d,g[e+d]);return 0};l.prototype.read_one=function(e){var
d=new(a.Uint8Array)(1),c=a.Buffer.from(d);try{this.fs.readSync(this.fd,c,0,1,e)}catch(a){b(a.toString())}return c[0]};l.prototype.close=function(){try{this.fs.closeSync(this.fd)}catch(a){b(a.toString())}};l.prototype.constructor=l;function
k(a){this.fs=require("fs");this.root=a}k.prototype.nm=function(a){return this.root+a};k.prototype.exists=function(a){try{return this.fs.existsSync(this.nm(a))?1:0}catch(a){b(a.toString())}};k.prototype.readdir=function(a){try{return this.fs.readdirSync(this.nm(a))}catch(a){b(a.toString())}};k.prototype.is_dir=function(a){try{return this.fs.statSync(this.nm(a)).isDirectory()?1:0}catch(a){b(a.toString())}};k.prototype.unlink=function(a){try{var
c=this.fs.existsSync(this.nm(a))?1:0;this.fs.unlinkSync(this.nm(a))}catch(a){b(a.toString())}return c};k.prototype.open=function(g,d){var
a=require("constants"),c=0;for(var
f
in
d)switch(f){case"rdonly":c|=a.O_RDONLY;break;case"wronly":c|=a.O_WRONLY;break;case"append":c|=a.O_WRONLY|a.O_APPEND;break;case"create":c|=a.O_CREAT;break;case"truncate":c|=a.O_TRUNC;break;case"excl":c|=a.O_EXCL;break;case"binary":c|=a.O_BINARY;break;case"text":c|=a.O_TEXT;break;case"nonblock":c|=a.O_NONBLOCK;break}try{var
e=this.fs.openSync(this.nm(g),c);return new
l(e)}catch(a){b(a.toString())}};k.prototype.rename=function(c,a){try{this.fs.renameSync(this.nm(c),this.nm(a))}catch(a){b(a.toString())}};k.prototype.constructor=k;var
r=u.match(/[^\/]*\//)[0];function
bA(){return typeof
a.process!=="undefined"&&typeof
a.process.versions!=="undefined"&&typeof
a.process.versions.node!=="undefined"&&a.process.platform!=="browser"}var
v=[];if(bA())v.push({path:r,device:new
k(r)});else
v.push({path:r,device:new
h(r)});v.push({path:r+at,device:new
h(r+at)});function
aU(b){var
f=bl(b),b=f.join(m),e=b+m,c;for(var
d=0;d<v.length;d++){var
a=v[d];if(e.search(a.path)==0&&(!c||c.path.length<a.path.length))c={path:a.path,device:a.device,rest:b.substring(a.path.length,b.length)}}return c}function
aK(b,a){var
b=typeof
b=="string"?c(b):b,a=typeof
a=="string"?c(a):a,d=aU(b);if(!d.device.register)bg("cannot register file");d.device.register(d.rest,a);return 0}function
bh(){var
c=a.caml_fs_tmp;if(c)for(var
b=0;b<c.length;b++)aK(c[b].name,c[b].content);a.caml_create_file=aK;a.caml_fs_tmp=[];return 0}function
bi(a){return a.slice(1)}function
bj(b,a){switch(a.length){case
1:return new
b();case
2:return new
b(a[1]);case
3:return new
b(a[1],a[2]);case
4:return new
b(a[1],a[2],a[3]);case
5:return new
b(a[1],a[2],a[3],a[4]);case
6:return new
b(a[1],a[2],a[3],a[4],a[5]);case
7:return new
b(a[1],a[2],a[3],a[4],a[5],a[6]);case
8:return new
b(a[1],a[2],a[3],a[4],a[5],a[6],a[7])}function
c(){return b.apply(this,bi(a))}c.prototype=b.prototype;return new
c()}function
bk(b){var
c={};for(var
a=1;a<b.length;a++){var
d=b[a];c[P(d[1])]=d[2]}return c}function
a9(){N(af)}function
aM(a,d){if(a<0)a9();var
a=a+1|0,b=new
Array(a);b[0]=0;for(var
c=1;c<a;c++)b[c]=d;return b}var
o=new
Array();function
bm(f){var
a=o[f];if(!a.opened)b("Cannot flush a closed channel");if(!a.buffer||a.buffer==d)return 0;if(a.fd&&e.fds[a.fd]&&e.fds[a.fd].output){var
c=e.fds[a.fd].output;switch(c.length){case
2:c(f,a.buffer);break;default:c(a.buffer)}}a.buffer=d;return 0}function
aS(e,f){var
a=o[e],d=c(f),b=Q(d);a.file.write(a.offset,d,0,b);a.offset+=b;return 0}function
bB(b){var
b=U(b),c=a;if(c.process&&c.process.stdout&&c.process.stdout.write)c.process.stderr.write(b);else{if(b.charCodeAt(b.length-1)==10)b=b.substr(0,b.length-1);var
d=c.console;d&&d.error&&d.error(b)}}function
bC(b){var
b=U(b),c=a;if(c.process&&c.process.stdout&&c.process.stdout.write)c.process.stdout.write(b);else{if(b.charCodeAt(b.length-1)==10)b=b.substr(0,b.length-1);var
d=c.console;d&&d.log&&d.log(b)}}function
C(c,f,d,a){if(e.fds===undefined)e.fds=new
Array();a=a?a:{};var
b={};b.file=d;b.offset=a.append?d.length():0;b.flags=a;b.output=f;e.fds[c]=b;if(!e.fd_last_idx||c>e.fd_last_idx)e.fd_last_idx=c;return c}function
bD(d,c,i){var
a={};while(c){switch(c[1]){case
0:a.rdonly=1;break;case
1:a.wronly=1;break;case
2:a.append=1;break;case
3:a.create=1;break;case
4:a.truncate=1;break;case
5:a.excl=1;break;case
6:a.binary=1;break;case
7:a.text=1;break;case
8:a.nonblock=1;break}c=c[2]}if(a.rdonly&&a.wronly)b(B(d)+ao);if(a.text&&a.binary)b(B(d)+aE);var
f=aU(d),g=f.device.open(f.rest,a),h=e.fd_last_idx?e.fd_last_idx:0;return C(h+1,aS,g,a)}C(0,aS,new
f(p(0)));C(1,bC,new
f(p(0)));C(2,bB,new
f(p(0)));function
bn(d){var
c=e.fds[d];if(c.flags.wronly)b(aw+d+" is writeonly");var
a={file:c.file,offset:c.offset,fd:d,opened:true,out:false,refill:null};o[a.fd]=a;return a.fd}function
aO(f){var
c=e.fds[f];if(c.flags.rdonly)b(aw+f+" is readonly");var
a={file:c.file,offset:c.offset,fd:f,opened:true,out:true,buffer:d};o[a.fd]=a;return a.fd}function
bo(){var
b=0;for(var
a=0;a<o.length;a++)if(o[a]&&o[a].opened&&o[a].out)b=[0,o[a].fd,b];return b}function
bp(a){if(a
instanceof
Array&&a[0]==a[0]>>>0)return a[0];else
if(O(a))return ar;else
if(aL(a))return ar;else
if(a
instanceof
Function||typeof
a=="function")return 247;else
if(a&&a.caml_custom)return 255;else
return 1000}function
i(c,d,b){if(b&&a.toplevelReloc)c=a.toplevelReloc(b);e[c+1]=d;if(b)e[b]=d}var
aQ={};function
bt(a,b){aQ[B(a)]=b;return 0}function
bv(a){return a}function
bx(){return[0,c("js_of_ocaml")]}function
aR(a){return a}function
aP(a){return aQ[a]}function
bz(b){if(b
instanceof
Array)return b;if(a.RangeError&&b
instanceof
a.RangeError&&b.message&&b.message.match(/maximum call stack/i))return aR(e.Stack_overflow);if(a.InternalError&&b
instanceof
a.InternalError&&b.message&&b.message.match(/too much recursion/i))return aR(e.Stack_overflow);if(b
instanceof
a.Error&&aP(K))return[0,aP(K),b];return[0,e.Failure,S(String(b))]}function
ae(a,b){return a.length==1?a(b):z(a,[b])}bh();var
W=[g,c(aq),-2],V=[g,c(aA),-3];i(11,[g,c(an),-12],an);i(10,[g,c(ah),-11],ah);i(9,[g,c(av),-10],av);i(8,[g,c(az),-9],az);i(7,[g,c(au),-8],au);i(6,[g,c(ay),-7],ay);i(5,[g,c(as),-6],as);i(4,[g,c(aB),-5],aB);i(3,[g,c(aD),-4],aD);i(2,V,aA);i(1,W,aq);i(0,[g,c(ag),-1],ag);A(0);var
a1=c("Jv.Error"),a8=c("No global Mithril object found -- are you sure you have correctly require MithrilJS?"),a5=c(" clicks");function
X(a,b){if(a){var
c=a[1];return[0,c,X(a[2],b)]}return b}bn(0);aO(1);aO(2);function
Y(b,a){return a?[0,ae(b,a[1])]:0}function
Z(a){return a?[0,a[1],0]:0}A(0);typeof
bx(0)==="number";A(0);var
aZ=null,a0=undefined;function
aa(a){var
b=a===aZ?1:0,c=b||(a===a0?1:0);return 1-c}var
w=globalThis,E=[0,[g,a1,A(0)],{}],aY=bp(E)===g?E:E[1];bt(c(K),aY);var
F=w.m,a3=w.document;if(aa(F)){var
G=[0,0],a4=function(a){var
d=a[1];if(40878107<=d){if(737456202<=d)return!!a[2];var
g=a[2],e=new(w.Array)(0),c=0,b=g;for(;;){if(b){var
f=b[2];e[c]=b[1];var
c=c+1|0,b=f;continue}return e}}return-703661335<=d?a[2]:P(a[2])},H=[0,[0,"onclick",function(a){G[1]=G[1]+1|0;return 0}]],ab=function(a){var
b=a[2];return[0,S(a[1]),b]},D=H.length-1;if(0===D)var
ac=[0];else{var
_=aM(D,ab(H[1])),$=D-1|0,aW=1;if(!($<1)){var
s=aW;for(;;){_[1+s]=ab(H[1+s]);var
aX=s+1|0;if($!==s){var
s=aX;continue}break}}var
ac=_}var
a2=bk(ac),a6={"view":function(t){var
l=c(d+G[1]),e=Q(l),f=p(e+7|0);L(l,0,f,0,e);L(a5,0,f,e,7);var
r=[0,[0,-976970511,bv(f)]],s=[0,a2],q=Z(Y(function(a){return a},s)),b=X(q,Z(Y(a4,r)));if(b){var
h=0,g=b,m=b[2],n=b[1];for(;;){if(g){var
h=h+1|0,g=g[2];continue}var
j=aM(h,n),i=1,a=m;for(;;){if(a){var
o=a[2];j[1+i]=a[1];var
i=i+1|0,a=o;continue}var
k=j;break}break}}else
var
k=[0];return bj(F,a_([0,[0,"button"],[0,k,0]]))}},ad=a3.body,a7=aa(ad)?ad:ae(function(a){throw a},new(w.Error)("Document body is null. Try to defer your script execution."));F.mount(a7,a6);var
aV=function(b){var
a=b;for(;;){if(a){var
c=a[2],d=a[1];try{bm(d)}catch(a){a=bz(a);if(a[1]!==W)throw a;var
e=a}var
a=c;continue}return 0}};aV(bo(0));return}throw[0,V,a8]}(function(){return this}()));

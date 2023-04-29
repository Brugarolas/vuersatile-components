var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Q(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var z={exports:{}};(function(M,K){(function(k,T){M.exports=T()})(q,function(){var k=1e3,T=6e4,N=36e5,F="millisecond",S="second",D="minute",w="hour",y="day",H="week",h="month",U="quarter",v="year",x="date",J="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},I=function(i,n,t){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(t)+i},V={s:I,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+I(r,2,"0")+":"+I(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,h),u=t-e<0,s=n.clone().add(r+(u?-1:1),h);return+(-(r+(t-e)/(u?e-s:s-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:h,y:v,w:H,d:y,D:x,h:w,m:D,s:S,ms:F,Q:U}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},b="en",m={};m[b]=P;var A=function(i){return i instanceof L},j=function i(n,t,r){var e;if(!n)return b;if(typeof n=="string"){var u=n.toLowerCase();m[u]&&(e=u),t&&(m[u]=t,e=u);var s=n.split("-");if(!e&&s.length>1)return i(s[0])}else{var a=n.name;m[a]=n,e=a}return!r&&e&&(b=e),e||!r&&b},d=function(i,n){if(A(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new L(t)},o=V;o.l=j,o.i=A,o.w=function(i,n){return d(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var L=function(){function i(t){this.$L=j(t.locale,null,!0),this.parse(t)}var n=i.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,u=r.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(E);if(s){var a=s[2]-1||0,l=(s[7]||"0").substring(0,3);return u?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,l)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,l)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(t,r){var e=d(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return d(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<d(t)},n.$g=function(t,r,e){return o.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,u=!!o.u(r)||r,s=o.p(t),a=function(O,_){var g=o.w(e.$u?Date.UTC(e.$y,_,O):new Date(e.$y,_,O),e);return u?g:g.endOf(y)},l=function(O,_){return o.w(e.toDate()[O].apply(e.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(_)),e)},c=this.$W,f=this.$M,p=this.$D,$="set"+(this.$u?"UTC":"");switch(s){case v:return u?a(1,0):a(31,11);case h:return u?a(1,f):a(0,f+1);case H:var Y=this.$locale().weekStart||0,C=(c<Y?c+7:c)-Y;return a(u?p-C:p+(6-C),f);case y:case x:return l($+"Hours",0);case w:return l($+"Minutes",1);case D:return l($+"Seconds",2);case S:return l($+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,u=o.p(t),s="set"+(this.$u?"UTC":""),a=(e={},e[y]=s+"Date",e[x]=s+"Date",e[h]=s+"Month",e[v]=s+"FullYear",e[w]=s+"Hours",e[D]=s+"Minutes",e[S]=s+"Seconds",e[F]=s+"Milliseconds",e)[u],l=u===y?this.$D+(r-this.$W):r;if(u===h||u===v){var c=this.clone().set(x,1);c.$d[a](l),c.init(),this.$d=c.set(x,Math.min(this.$D,c.daysInMonth())).$d}else a&&this.$d[a](l);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[o.p(t)]()},n.add=function(t,r){var e,u=this;t=Number(t);var s=o.p(r),a=function(f){var p=d(u);return o.w(p.date(p.date()+Math.round(f*t)),u)};if(s===h)return this.set(h,this.$M+t);if(s===v)return this.set(v,this.$y+t);if(s===y)return a(1);if(s===H)return a(7);var l=(e={},e[D]=T,e[w]=N,e[S]=k,e)[s]||1,c=this.$d.getTime()+t*l;return o.w(c,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||J;var u=t||"YYYY-MM-DDTHH:mm:ssZ",s=o.z(this),a=this.$H,l=this.$m,c=this.$M,f=e.weekdays,p=e.months,$=function(_,g,B,W){return _&&(_[g]||_(r,u))||B[g].slice(0,W)},Y=function(_){return o.s(a%12||12,_,"0")},C=e.meridiem||function(_,g,B){var W=_<12?"AM":"PM";return B?W.toLowerCase():W},O={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:o.s(c+1,2,"0"),MMM:$(e.monthsShort,c,p,3),MMMM:$(p,c),D:this.$D,DD:o.s(this.$D,2,"0"),d:String(this.$W),dd:$(e.weekdaysMin,this.$W,f,2),ddd:$(e.weekdaysShort,this.$W,f,3),dddd:f[this.$W],H:String(a),HH:o.s(a,2,"0"),h:Y(1),hh:Y(2),a:C(a,l,!0),A:C(a,l,!1),m:String(l),mm:o.s(l,2,"0"),s:String(this.$s),ss:o.s(this.$s,2,"0"),SSS:o.s(this.$ms,3,"0"),Z:s};return u.replace(G,function(_,g){return g||O[_]||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var u,s=o.p(r),a=d(t),l=(a.utcOffset()-this.utcOffset())*T,c=this-a,f=o.m(this,a);return f=(u={},u[v]=f/12,u[h]=f,u[U]=f/3,u[H]=(c-l)/6048e5,u[y]=(c-l)/864e5,u[w]=c/N,u[D]=c/T,u[S]=c/k,u)[s]||c,e?f:o.a(f)},n.daysInMonth=function(){return this.endOf(h).$D},n.$locale=function(){return m[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),u=j(t,r,!0);return u&&(e.$L=u),e},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),Z=L.prototype;return d.prototype=Z,[["$ms",F],["$s",S],["$m",D],["$H",w],["$W",y],["$M",h],["$y",v],["$D",x]].forEach(function(i){Z[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),d.extend=function(i,n){return i.$i||(i(n,L,d),i.$i=!0),d},d.locale=j,d.isDayjs=A,d.unix=function(i){return d(1e3*i)},d.en=m[b],d.Ls=m,d.p={},d})})(z);var R=z.exports;const X=Q(R);export{q as c,X as d,Q as g};

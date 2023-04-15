import{T as R}from"./chunks/Tooltip.728ebdd8.js";import{I}from"./chunks/Icon.e2ed9238.js";import{B as r,o as g,c as T,D as s,z as n,n as b,_ as v,x as a,a as c,U as e}from"./chunks/framework.1ccf76a1.js";import"./chunks/TooltipInfo.vue_vue_type_style_index_0_lang.4ed993c7.js";import{C as l}from"./chunks/Card.b69deb87.js";import"./chunks/Tooltip.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Icon.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";const i="green",d="white",_="black",D="gray",F="yellow",y="violet",u="blue",C="red",m="brown",h="darkblue",A="silver-grey",f="orange",x={VERDE:i,GREEN:i,WHITE:d,BLANCO:d,NEGRO:_,BLACK:_,GRIS:D,GRAY:D,AMARILLO:F,YELLOW:F,VIOLET:y,VIOLETA:y,AZUL:u,BLUE:u,ROJO:C,RED:C,MARRON:m,BROWN:m,AZULOSCURO:h,DARKBLUE:h,SILVER:A,PLATA:A,ORANGE:f,NARANJA:f},N={class:"tooltip-info"};function V(o,S,p,Y,K,L){const O=r("Icon"),E=r("Tooltip");return g(),T("div",N,[s(E,{text:p.text,position:p.position},{default:n(()=>[s(O,{class:b(["tooltip-info__icon",L.colorClass]),icon:"circle-info"},null,8,["class"])]),_:1},8,["text","position"])])}const q={name:"TooltipInfo",components:{Tooltip:R,Icon:I},props:{text:{required:!0,type:String},color:{type:String,default:null,validator:o=>!o||["green","blue","white","black","red","gray","yellow","violet","darkblue","brown","silver-grey","orange"].includes(o)},position:{type:String,default:"top",validator:o=>["top","right","bottom","left"].includes(o)}},computed:{colorSlug(){return this.color?this.color.replace(/\s+/g,"").toUpperCase():""},colorClass(){if(!this.color)return;const o=x[this.colorSlug];return o?`tooltip-info__icon--${o}`:void 0}}},t=v(q,[["render",V]]),k=a("h1",{id:"tooltipinfo",tabindex:"-1"},[c("TooltipInfo "),a("a",{class:"header-anchor",href:"#tooltipinfo","aria-label":'Permalink to "TooltipInfo"'},"​")],-1),P=a("p",null,[c("Component "),a("code",null,"TooltipInfo"),c(".")],-1),B=e("",4),w=e("",3),U=e("",3),G=e("",2),X=JSON.parse('{"title":"TooltipInfo","description":"","frontmatter":{},"headers":[],"relativePath":"components/info/tooltip-info.md","lastUpdated":1681522719000}'),W={name:"components/info/tooltip-info.md"},ss=Object.assign(W,{setup(o){return(S,p)=>(g(),T("div",null,[k,P,s(l,null,{default:n(()=>[s(t,{text:"This is some useless information"})]),_:1}),B,s(l,null,{default:n(()=>[s(t,{text:"This is some useless information"})]),_:1}),w,s(l,null,{default:n(()=>[s(t,{text:"This is some useless information",color:"green"})]),_:1}),U,s(l,null,{default:n(()=>[s(t,{text:"This is some useless information",position:"right"})]),_:1}),G]))}});export{X as __pageData,ss as default};

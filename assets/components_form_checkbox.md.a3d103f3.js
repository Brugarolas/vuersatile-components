import{C as l}from"./chunks/Checkbox.2ec982e8.js";import{F as p}from"./chunks/Form.3ebefab6.js";import{C as e}from"./chunks/Card.b69deb87.js";import{o as c,c as r,D as a,z as n,x as s,a as o,U as t}from"./chunks/framework.1ccf76a1.js";import"./chunks/CheckboxBase.039de1d8.js";import"./chunks/Button.184a1235.js";import"./chunks/TextareaBase.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/index.ec15b88a.js";import"./chunks/required-input.b3b5ce1e.js";import"./chunks/basic-input.d366dd0e.js";import"./chunks/Form.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";const i=s("h1",{id:"checkbox",tabindex:"-1"},[o("Checkbox "),s("a",{class:"header-anchor",href:"#checkbox","aria-label":'Permalink to "Checkbox"'},"​")],-1),D=s("p",null,[o("Component "),s("code",null,"Checkbox"),o(". Simple and elegant.")],-1),F=s("p",null,[o("Implements mixins "),s("a",{href:"/vuersatile-components/components/form/required-input-mixin.html"},[s("code",null,"RequiredInputMixin")]),o(" and "),s("a",{href:"/vuersatile-components/components/form/basic-input-mixin.html"},[s("code",null,"BasicInputMixin")]),o(".")],-1),d=t(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I accept all the terms and conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="mb-xs-8"></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><ul><li><code>initialValue</code>: Initial value of the component. Type <code>Boolean</code>, default value <code>false</code>.</li></ul>`,4),y=t(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I accept all the terms and conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">initialValue</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="mb-xs-8"></div><ul><li><code>initialValue</code>: Wether if the checkbox is required or not when it is inside a <a href="/vuersatile-components/components/form/form.html"><code>Form</code></a>. Type <code>Boolean</code>, default value <code>false</code>.</li></ul>`,3),m=t(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I accept all the terms and conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="mb-xs-8"></div>`,2),S=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/checkbox.md","lastUpdated":1680998659000}'),u={name:"components/form/checkbox.md"},P=Object.assign(u,{setup(_){return(h,C)=>(c(),r("div",null,[i,D,F,a(e,null,{default:n(()=>[a(l,{name:"conditions",label:"I accept all the terms and conditions"})]),_:1}),d,a(e,null,{default:n(()=>[a(l,{name:"conditions",label:"I accept all the terms and conditions",initialValue:""})]),_:1}),y,a(e,null,{default:n(()=>[a(p,null,{default:n(()=>[a(l,{name:"conditions",label:"I accept all the terms and conditions",required:""})]),_:1})]),_:1}),m]))}});export{S as __pageData,P as default};
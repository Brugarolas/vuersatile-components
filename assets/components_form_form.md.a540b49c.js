import{C as t}from"./chunks/Checkbox.2ec982e8.js";import{I as c}from"./chunks/InputText.cbf7e3ed.js";import{I as r}from"./chunks/InputPassword.5cc0a68f.js";import{F as l}from"./chunks/Form.3ebefab6.js";import{C as o}from"./chunks/Card.b69deb87.js";import{o as D,c as F,D as s,z as n,x as a,a as e,U as p}from"./chunks/framework.1ccf76a1.js";import"./chunks/CheckboxBase.039de1d8.js";import"./chunks/Button.184a1235.js";import"./chunks/TextareaBase.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/index.ec15b88a.js";import"./chunks/required-input.b3b5ce1e.js";import"./chunks/basic-input.d366dd0e.js";import"./chunks/InputBase.d9e7a2e8.js";import"./chunks/TransitionHeight.c16428d4.js";import"./chunks/validations-input.bd8dae9a.js";import"./chunks/Form.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";const y=a("h1",{id:"form",tabindex:"-1"},[e("Form "),a("a",{class:"header-anchor",href:"#form","aria-label":'Permalink to "Form"'},"​")],-1),i=a("p",null,[e("Component "),a("code",null,"Form"),e(" includes everything you need to start building forms without a hustle. It contains a submit button, auto self-validation in each input component which will link to the "),a("code",null,"Form"),e(" they are contained, and finally it builds a submit object with all the names and values of its fields as properties.")],-1),d={class:"row"},u={class:"col-6 mb-xs-4"},C={class:"col-6 mb-xs-4"},m=p(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">row</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-6 mb-xs-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">InputText</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E-mail</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Enter your e-mail...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">at</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">inputType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">:validations</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;not-empty&#39;, &#39;email&#39;]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-6 mb-xs-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">InputPassword</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Password</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Enter a secure password...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">:validations</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;not-empty&#39;, { name: &#39;min-length&#39;, params: [8] }]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="mb-xs-8"></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><ul><li><code>validate</code>: Wether to auto self-validate the <code>Form</code> or not. Type <code>Boolean</code>, default <code>true</code>.</li></ul><div class="mb-xs-8"></div><ul><li><code>submitText</code>: Custom text for submit button. Type <code>String</code>, default <code>null</code>.</li></ul>`,6),A=p(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">submitText</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I accept all the terms and conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="mb-xs-8"></div><ul><li><code>loading</code>: display submit button as loading and prevents clicking on it. Type <code>Boolean</code>, default <code>false</code>.</li></ul>`,3),_=p(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">loading</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">submitText</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Submitting</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I accept all the terms and conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="mb-xs-8"></div><ul><li><code>showSubmitButton</code>: show default submit button or you are going to implement your own submit button. Type <code>Boolean</code>, default <code>true</code>.</li></ul>`,3),h=p(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:showSubmitButton</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I accept all the terms and conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="mb-xs-8"></div><ul><li><code>autoValidateOnStart</code>: Validate on start and disable submit button if form is not valid, or don&#39;t validate. Type <code>Boolean</code>, default <code>true</code>.</li></ul>`,3),E=p(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:autoValidateOnStart</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I accept all the terms and conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="mb-xs-8"></div><ul><li><code>scrollOnFail</code>: scroll to the top of the <code>Form</code> if <code>autoValidateOnStart</code> is disabled or you are using your own submit button, you click submit button, and validation fails. Type <code>Boolean</code>, default <code>false</code>.</li></ul><div class="mb-xs-8"></div><ul><li><code>scrollToInvalidField</code> instead of scrolling to top of the <code>Form</code>, scroll to the first component its validation failed. Type <code>Boolean</code>, default <code>false</code>.</li></ul><div class="mb-xs-8"></div><ul><li><code>disableSubmitButton</code>: show submit button as disabled. Type <code>Boolean</code>, default <code>false</code>.</li></ul><div class="mb-xs-8"></div><ul><li><code>resetOnSubmit</code>: to reset or not all <code>Form</code> fields on submit. Type <code>Boolean</code>, default <code>false</code>.</li></ul>`,9),b={class:"row"},q={class:"col-6 mb-xs-4"},g={class:"col-6 mb-xs-4"},v={class:"row"},f={class:"col-12"},T=p(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">resetOnSubmit</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">row</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-6 mb-xs-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">InputText</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E-mail</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Enter your e-mail...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">at</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">inputType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">:validations</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;not-empty&#39;, &#39;email&#39;]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-6 mb-xs-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">InputPassword</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Password</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Enter a secure password...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">:validations</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;not-empty&#39;, { name: &#39;min-length&#39;, params: [8] }]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">row</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-12</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I accept all the terms and conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="mb-xs-8"></div><ul><li><code>skipUnmodifiedFields</code>: Skip fields that have not been modified when generating submit object. Type <code>Boolean</code>, default <code>false</code>.</li></ul>`,3),Q=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/form.md","lastUpdated":1680726319000}'),x={name:"components/form/form.md"},X=Object.assign(x,{setup(S){return(w,I)=>(D(),F("div",null,[y,i,s(o,null,{default:n(()=>[s(l,null,{default:n(()=>[a("div",d,[a("div",u,[s(c,{name:"email",label:"E-mail",placeholder:"Enter your e-mail...",icon:"at",inputType:"email",validations:["not-empty","email"]})]),a("div",C,[s(r,{name:"password",label:"Password",placeholder:"Enter a secure password...",validations:["not-empty",{name:"min-length",params:[8]}]})])])]),_:1})]),_:1}),m,s(o,null,{default:n(()=>[s(l,{submitText:"Submit"},{default:n(()=>[s(t,{name:"conditions",label:"I accept all the terms and conditions",required:""})]),_:1})]),_:1}),A,s(o,null,{default:n(()=>[s(l,{loading:"",submitText:"Submitting"},{default:n(()=>[s(t,{name:"conditions",label:"I accept all the terms and conditions",required:""})]),_:1})]),_:1}),_,s(o,null,{default:n(()=>[s(l,{showSubmitButton:!1},{default:n(()=>[s(t,{name:"conditions",label:"I accept all the terms and conditions",required:""})]),_:1})]),_:1}),h,s(o,null,{default:n(()=>[s(l,{autoValidateOnStart:!1},{default:n(()=>[s(t,{name:"conditions",label:"I accept all the terms and conditions",required:""})]),_:1})]),_:1}),E,s(o,null,{default:n(()=>[s(l,{resetOnSubmit:""},{default:n(()=>[a("div",b,[a("div",q,[s(c,{name:"email",label:"E-mail",placeholder:"Enter your e-mail...",icon:"at",inputType:"email",validations:["not-empty","email"]})]),a("div",g,[s(r,{name:"password",label:"Password",placeholder:"Enter a secure password...",validations:["not-empty",{name:"min-length",params:[8]}]})])]),a("div",v,[a("div",f,[s(t,{name:"conditions",label:"I accept all the terms and conditions",required:""})])])]),_:1})]),_:1}),T]))}});export{Q as __pageData,X as default};
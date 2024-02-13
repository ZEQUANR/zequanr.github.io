import{_ as p,r as o,o as c,c as i,d as a,w as t,e,a as n}from"./app-WYeiPlGe.js";const l={},u=n(`<p>在 JavaScript 中，this 关键字是一个动态上下文引用，其值取决于函数调用时的具体执行环境。理解 this 的指向对于编写高效且易于维护的 JavaScript 代码至关重要。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><h3 id="函数调用方式决定-this-指向" tabindex="-1"><a class="header-anchor" href="#函数调用方式决定-this-指向" aria-hidden="true">#</a> 函数调用方式决定 this 指向</h3><p>全局作用域或默认绑定： 在非严格模式下，如果 this 出现在全局作用域（不在任何函数内部），它通常指向全局对象（浏览器环境中是 window，Node.js 环境中是 global）。 函数调用： 当一个函数作为普通函数直接调用时，this 同样指向全局对象（严格模式下为 undefined）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在浏览器环境下输出 window 对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=n(`<br><p>方法调用： 当函数作为某个对象的方法被调用时，this 指向调用该方法的对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;John&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=n(`<br><h3 id="显式绑定" tabindex="-1"><a class="header-anchor" href="#显式绑定" aria-hidden="true">#</a> 显式绑定</h3><p>通过 call()、apply() 和 bind() 方法可以显式指定 this 的指向。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">greet</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;John&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k=n(`<br><h2 id="高级应用场景" tabindex="-1"><a class="header-anchor" href="#高级应用场景" aria-hidden="true">#</a> 高级应用场景</h2><h3 id="构造函数调用" tabindex="-1"><a class="header-anchor" href="#构造函数调用" aria-hidden="true">#</a> 构造函数调用</h3><p>使用 new 关键字调用函数时，会创建一个新的空对象，并将其 this 指向这个新对象，同时返回新对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> john <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>john<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;John&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h=n(`<br><h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h3><p>箭头函数没有自己的 this 值，它继承了父级作用域（词法作用域）的 this 值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">sayName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在严格模式下，此处的this指向全局对象（非严格模式下也是如此）</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 为了正确引用对象内的this，应使用普通函数</span>
person<span class="token punctuation">.</span><span class="token function-variable function">sayNameLexical</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;John&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=n(`<br><h2 id="事件处理函数中的-this" tabindex="-1"><a class="header-anchor" href="#事件处理函数中的-this" aria-hidden="true">#</a> 事件处理函数中的 this</h2><p>在 DOM 事件处理函数中，this 通常指向触发事件的元素对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myButton&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;myButton&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=n('<br><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><table><thead><tr><th><strong>调用方式</strong></th><th><strong>示例</strong></th><th><strong>函数中的 this 指向</strong></th></tr></thead><tbody><tr><td>直接调用</td><td>method()</td><td>全局对象 <br> 浏览器环境为 window 对象 <br> Node.js 环境为 global 对象</td></tr><tr><td>通过对象方法调用</td><td>obj.method()</td><td>前面的对象</td></tr><tr><td>通过call、apply、bind 调用</td><td>method.call({})</td><td>第一个参数</td></tr><tr><td>通过 new 构造函数调用</td><td>new method()</td><td>新创建的对象</td></tr><tr><td>箭头函数</td><td>() =&gt; {}</td><td>箭头函数中的 this 指向外层作用域的第一个 this</td></tr><tr><td>DOM 事件</td><td>addEventListener()</td><td>触发事件的元素对象</td></tr></tbody></table>',3);function b(g,f){const s=o("center");return c(),i("div",null,[u,a(s,null,{default:t(()=>[e("code - 1：在浏览器环境下输出 window 对象")]),_:1}),d,a(s,null,{default:t(()=>[e("code - 2：this 指向调用该方法的对象")]),_:1}),r,a(s,null,{default:t(()=>[e("code - 3：显式指定 this 的指向")]),_:1}),k,a(s,null,{default:t(()=>[e("code - 4：this 指向新对象")]),_:1}),h,a(s,null,{default:t(()=>[e("code - 5：箭头函数没有自己的 this 值")]),_:1}),v,a(s,null,{default:t(()=>[e("code - 6：事件处理函数中的 this")]),_:1}),m])}const _=p(l,[["render",b],["__file","index.html.vue"]]);export{_ as default};
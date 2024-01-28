import{_ as p,r as c,o,c as i,d as a,w as s,e as t,a as e,b as l}from"./app-KIhmIzTq.js";const u={},r=e(`<p>在 JavaScript 异步编程领域，async/await 是 ES2017 引入的关键特性，它为处理 Promise 提供了更简洁直观的语法糖。通过 async 函数和 await 表达式，开发者能够以接近同步代码的方式编写异步逻辑，极大地提升了代码可读性和开发效率。</p><h2 id="async-函数基础" tabindex="-1"><a class="header-anchor" href="#async-函数基础" aria-hidden="true">#</a> async 函数基础</h2><h3 id="async-函数定义" tabindex="-1"><a class="header-anchor" href="#async-函数定义" aria-hidden="true">#</a> async 函数定义</h3><p>async 关键字用于声明一个异步函数。当函数被标记为 async 时，它将返回一个 Promise 对象，无论函数内部是否明确使用 return 语句：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 异步操作</span>
<span class="token punctuation">}</span>

<span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用.then()方法处理结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=e(`<br><h3 id="await-表达式" tabindex="-1"><a class="header-anchor" href="#await-表达式" aria-hidden="true">#</a> await 表达式</h3><p>在 async 函数内部，可以使用 await 关键字来等待 Promise 的结果。await 后面跟着一个 Promise表达式，当遇到 await 时，会暂停 async 函数的执行，直到 Promise 解析完成，并返回其结果（或抛出错误）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.example.com/data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k=e(`<br><h2 id="async-await-的优势" tabindex="-1"><a class="header-anchor" href="#async-await-的优势" aria-hidden="true">#</a> async/await 的优势</h2><ul><li><strong>清晰的控制流</strong> async/await 允许我们将异步代码写成顺序执行的形式，避免了回调函数带来的“回调地狱”。</li><li><strong>易于理解和调试</strong> 由于其类似于同步代码的书写风格，async/await 使得异步逻辑更容易阅读和理解，同时也便于使用传统的 try/catch 进行错误处理。</li><li><strong>更好的错误处理</strong> 在 async 函数中，可以使用 try/catch 结构捕获和处理 Promise 链路中的错误，而无需在每个<code>.then()</code>中单独处理。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.example.com/data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Network response was not ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error fetching data:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=e(`<br><h2 id="async-await-的最佳实践" tabindex="-1"><a class="header-anchor" href="#async-await-的最佳实践" aria-hidden="true">#</a> async/await 的最佳实践</h2><ul><li><strong>避免无意义的 async</strong> 不应仅仅为了使用 await 而给函数添加 async 修饰符，只有涉及异步操作的部分才需要这样做。</li><li><strong>利用 try/catch 处理错误</strong> 对于可能抛出错误的 await 表达式，建议将其包裹在 try/catch 块中，以便更好地管理和报告错误。</li><li><strong>并行请求优化</strong> 虽然 async/await 让代码看起来像同步执行，但实际上是按事件循环机制异步运行的。对于多个独立的异步任务，可以通过<code>Promise.all()</code>等方法实现并发执行。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">processAllData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token function">fetchDataFromAPI1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">fetchDataFromAPI2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 处理数据...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=l("br",null,null,-1);function h(y,w){const n=c("center");return o(),i("div",null,[r,a(n,null,{default:s(()=>[t("code - 1：异步函数")]),_:1}),d,a(n,null,{default:s(()=>[t("code - 2：await 表达式")]),_:1}),k,a(n,null,{default:s(()=>[t("code - 3：一般业务中 fetchData 函数")]),_:1}),v,a(n,null,{default:s(()=>[t("code - 4：Promise.all()")]),_:1}),m])}const f=p(u,[["render",h],["__file","index.html.vue"]]);export{f as default};

import{_ as n,o as a,c as s,a as e}from"./app-4LUCmLh8.js";const i={},l=e(`<h2 id="语句" tabindex="-1"><a class="header-anchor" href="#语句" aria-hidden="true">#</a> 语句</h2><p>C 语言的代码是由一行行的语句所组成，语句就是程序执行的一个操作命令，C 语言规定，语句必须使用分号结尾，除非有明确规定可以不写分号。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>变量声明语句，声明整数变量 x，并且将值设为 1。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> x<span class="token punctuation">;</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>两个语句写在一行：</p><ol><li>变量声明，声明整数变量 x。</li><li>变量赋值，将声明的整数变量 x 赋值为 1。</li></ol><ul><li>所以，语句之间的换行符并不是必需的，只是为了方便阅读代码。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> x<span class="token punctuation">;</span>
x
<span class="token operator">=</span>
<span class="token number">1</span>
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个语句也可以写成多行，这时就要依靠分号判断语句在哪一行结束。</p><ul><li>不建议这样做，增加对代码的阅读负担</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>单个分号也是有效语句，称为“空语句”，虽然毫无作用。</p><h2 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式" aria-hidden="true">#</a> 表达式</h2><p>C 语言的各种计算，主要通过表达式完成，表达式是一个计算式，用来获取值。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用来获取 1 + 2 这个算术计算的结果的表达式。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">8</span><span class="token punctuation">;</span>
<span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>表达式加上分号，也可以成为语句。 表达式与语句的区别主要有：</p><ol><li>语句可以包含表达式，但是表达式本身不构成语句。</li><li>表达式都有返回值，语句不一定有，因为语句用来执行某个命令，很多时候不需要返回值，比如变量声明语句（int x = 1）就没有返回值。</li></ol><h2 id="语句块" tabindex="-1"><a class="header-anchor" href="#语句块" aria-hidden="true">#</a> 语句块</h2><p>C 语言允许多个语句使用一对大括号 <strong>{}</strong>，组成一个块，也称为复合语句，在语法上，语句块可以视为多个语句组成的一个复合语句。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token punctuation">{</span>
  <span class="token keyword">int</span> x<span class="token punctuation">;</span>
  x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用大括号包裹形成了一个语句块。</p><ul><li>大括号的结尾不需要添加分号。</li></ul><h2 id="空格" tabindex="-1"><a class="header-anchor" href="#空格" aria-hidden="true">#</a> 空格</h2><p>C 语言里面的空格，主要用来帮助编译器区分语法单位，如果语法单位不用空格就能区分，空格就不是必须的，只是为了增加代码的可读性。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">int</span> x<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>赋值号（=）前后有没有空格都可以，因为编译器这里不借助空格，就能区分语法单位。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span>    x <span class="token operator">=</span>     <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语法单位之间的多个空格，等同于单个空格。</p><ul><li>各个语法单位之间的多个空格，跟单个空格的效果是一样的。</li><li>空格还用来表示缩进，多层级的代码有没有缩进，其实对于编译器来说并没有差别，没有缩进的代码也是完全可以运行的，强调代码缩进，只是为了增强代码可读性，便于区分代码块。</li></ul><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>注释是对代码的说明，编译器会忽略注释，也就是说，注释对实际代码没有影响，C 语言中注释写法有两种。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* 注释 */</span>

<span class="token comment">/*
  这是一行注释
*/</span>

<span class="token keyword">int</span> x<span class="token punctuation">;</span> <span class="token comment">/* 注释 */</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将要注释的内容放在 /<em>...</em>/ 之间，内部可以分行。</p><ul><li>这种注释可以插在行内，用来对参数进行说明，跟在它后面的代码依然会有效执行。</li><li>一定不能忘记写结束符号 */，否则很容易导致错误。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 这是一行注释</span>

<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 这也是注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将注释放在双斜杠//后面，从双斜杠到行尾都属于注释，这种注释只能是单行，可以放在行首，也可以放在一行语句的结尾，这是 C99 标准新增的语法。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;// hello /* world */ &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不管是哪一种注释，都不能放在双引号里面，双引号里面的注释符号，会成为字符串的一部分，解释为普通符号，失去注释作用。</p>`,41),c=[l];function d(p,t){return a(),s("div",null,c)}const o=n(i,[["render",d],["__file","index.html.vue"]]);export{o as default};

import{_ as o,r as c,o as i,c as l,d as a,w as t,e as n,a as e,b as p}from"./app-a3Zgm-oK.js";const u="/assets/string-6ebnTi6j.svg",r={},d=e(`<h2 id="类型说明" tabindex="-1"><a class="header-anchor" href="#类型说明" aria-hidden="true">#</a> 类型说明</h2><p>在 Go 语言中所提供的字符串（string）是一种基础的数据类型，在编程开发中几乎随时都会使用，本篇文章将会介绍字符串（string）的知识，帮助你更好的理解它。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/builtin/builtin.go</span>

<span class="token comment">// string is the set of all strings of 8-bit bytes, conventionally but not</span>
<span class="token comment">// necessarily representing UTF-8-encoded text. A string may be empty, but</span>
<span class="token comment">// not nil. Values of string type are immutable.</span>
<span class="token keyword">type</span> <span class="token builtin">string</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k=e(`<br><ul><li>string 是所有 8 位字节字符串的集合，通常但不一定代表 UTF-8 编码的文本。</li><li>字符串可以为空（长度为 0 ），但不会是 nil。</li><li>字符串类型的值是不可变的</li></ul><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2><p>首先我们先来看一下 string 类型的数据结构，从 code - 1 中我们可以看到 string 的数据结构与之前讲的 slice 数据结构很相似，他们都有一个指向底层数组的指针用存储数据，和表示数组长度的字段 len，从这点中可以发现许多数据结构的存储方式都依赖于数组，与之不同的是 slice 多出一个表示容量的 cap 字段。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/runtime/string.go</span>

<span class="token keyword">type</span> stringStruct <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	str unsafe<span class="token punctuation">.</span>Pointer
	<span class="token builtin">len</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=e(`<br><h2 id="类型声明" tabindex="-1"><a class="header-anchor" href="#类型声明" aria-hidden="true">#</a> 类型声明</h2><p>如 code - 2 所示我们可以使用两种字面量方式在 Go 语言中声明字符串，即双引号和反引号：使用双引号声明的字符串和其他语言中的字符串没有太多的区别，它只能用于单行字符串的初始化，如果字符串内部出现双引号，需要使用 \\ 符号避免编译器的解析错误，而反引号声明的字符串可以摆脱单行的限制。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> str <span class="token builtin">string</span>

str <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
str <span class="token operator">=</span> <span class="token string">&quot;hello \\&quot;world&quot;</span>
str <span class="token operator">=</span> <span class="token string">\`hello
world\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=p("br",null,null,-1),b=p("p",null,[n("如图 1 所示，虽然字符串往往都被看做是一个整体，但是实际上字符串是一片连续的内存空间，我们也可以将它理解成一个由字符组成的数组。 "),p("img",{src:u,alt:"",loading:"lazy"})],-1),g=e(`<br><p>当使用反引号时，因为双引号不再负责标记字符串的开始和结束，我们可以在字符串内部直接使用双引号，在遇到需要手写 JSON 或者其他复杂数据格式的场景下非常方便。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> str <span class="token builtin">string</span>

str <span class="token operator">=</span> <span class="token string">\`{
    &quot;str&quot;: unsafe.Pointer(str),
    &quot;len&quot;: findnull(str)
}\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f=e(`<br><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><p>那么既然 Go 语言中对 string 类型有两种不同的声明方式即双引号和反引号，那么这也意味着 Go 语言编译器需要能够区分并且正确解析两种不同的字符串格式，在 code - 0 中我们不难发现 Go 语言在解析两种不同的字符串格式中所采用的解析函数 stdString() 与 rawString()。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/syntax/scanner.go</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>scanner<span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token operator">...</span>

	<span class="token keyword">switch</span> s<span class="token punctuation">.</span>ch <span class="token punctuation">{</span>

    <span class="token operator">...</span>
    
	<span class="token keyword">case</span> <span class="token char">&#39;&quot;&#39;</span><span class="token punctuation">:</span>
		s<span class="token punctuation">.</span><span class="token function">stdString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">case</span> <span class="token char">&#39;\`&#39;</span><span class="token punctuation">:</span>
		s<span class="token punctuation">.</span><span class="token function">rawString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token operator">...</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h=e(`<br><h3 id="stdstring" tabindex="-1"><a class="header-anchor" href="#stdstring" aria-hidden="true">#</a> stdString()</h3><p>stdString() 方法是它用来解析使用双引号声明的标准字符串，从 stdString() 方法中我们可以看到 Go 语言对标准字符串的解析逻辑，通过 nextch() 函数来获取最新的未解析的字符，以双引号表示开头和结尾，以反斜杠 \\ 来逃逸双引号，并且不允许出现隐式换行 \\n。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/syntax/scanner.go</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>scanner<span class="token punctuation">)</span> <span class="token function">stdString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ok <span class="token operator">:=</span> <span class="token boolean">true</span>
	s<span class="token punctuation">.</span><span class="token function">nextch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> s<span class="token punctuation">.</span>ch <span class="token operator">==</span> <span class="token char">&#39;&quot;&#39;</span> <span class="token punctuation">{</span>
			s<span class="token punctuation">.</span><span class="token function">nextch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> s<span class="token punctuation">.</span>ch <span class="token operator">==</span> <span class="token char">&#39;\\\\&#39;</span> <span class="token punctuation">{</span>
			s<span class="token punctuation">.</span><span class="token function">nextch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">escape</span><span class="token punctuation">(</span><span class="token char">&#39;&quot;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				ok <span class="token operator">=</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> s<span class="token punctuation">.</span>ch <span class="token operator">==</span> <span class="token char">&#39;\\n&#39;</span> <span class="token punctuation">{</span>
			s<span class="token punctuation">.</span><span class="token function">errorf</span><span class="token punctuation">(</span><span class="token string">&quot;newline in string&quot;</span><span class="token punctuation">)</span>
			ok <span class="token operator">=</span> <span class="token boolean">false</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> s<span class="token punctuation">.</span>ch <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			s<span class="token punctuation">.</span><span class="token function">errorAtf</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;string not terminated&quot;</span><span class="token punctuation">)</span>
			ok <span class="token operator">=</span> <span class="token boolean">false</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		s<span class="token punctuation">.</span><span class="token function">nextch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	s<span class="token punctuation">.</span><span class="token function">setLit</span><span class="token punctuation">(</span>StringLit<span class="token punctuation">,</span> ok<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),y=e(`<br><h3 id="rawstring" tabindex="-1"><a class="header-anchor" href="#rawstring" aria-hidden="true">#</a> rawString()</h3><p>rawString() 方法是它用来解析使用反引号声明的字符串，使用反引号声明的原始字符串的解析规则就非常简单了，rawString() 方法会将非反引号的所有字符都划分到当前字符串的范围中，所以我们可以使用它支持复杂的多行字符串。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/syntax/scanner.go</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>scanner<span class="token punctuation">)</span> <span class="token function">rawString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ok <span class="token operator">:=</span> <span class="token boolean">true</span>
	s<span class="token punctuation">.</span><span class="token function">nextch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> s<span class="token punctuation">.</span>ch <span class="token operator">==</span> <span class="token char">&#39;\`&#39;</span> <span class="token punctuation">{</span>
			s<span class="token punctuation">.</span><span class="token function">nextch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> s<span class="token punctuation">.</span>ch <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			s<span class="token punctuation">.</span><span class="token function">errorAtf</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;string not terminated&quot;</span><span class="token punctuation">)</span>
			ok <span class="token operator">=</span> <span class="token boolean">false</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		s<span class="token punctuation">.</span><span class="token function">nextch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// We leave CRs in the string since they are part of the</span>
	<span class="token comment">// literal (even though they are not part of the literal</span>
	<span class="token comment">// value).</span>

	s<span class="token punctuation">.</span><span class="token function">setLit</span><span class="token punctuation">(</span>StringLit<span class="token punctuation">,</span> ok<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),w=e(`<br><p>并通过 string(s.segment()) 将解析到的字节转换为字符串，同时通过 setLlit() 方法将扫描到的内容类型 (kind) 标记为 StringLit。 无论是标准字符串还是原始字符串都会被标记成 StringLit 并传递到语法分析阶段。在语法分析阶段，与字符串相关的表达式都会由 setLit() 方法处理：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/syntax/scanner.go</span>

<span class="token comment">// setLit sets the scanner state for a recognized _Literal token.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>scanner<span class="token punctuation">)</span> <span class="token function">setLit</span><span class="token punctuation">(</span>kind LitKind<span class="token punctuation">,</span> ok <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s<span class="token punctuation">.</span>nlsemi <span class="token operator">=</span> <span class="token boolean">true</span>
	s<span class="token punctuation">.</span>tok <span class="token operator">=</span> _Literal
	s<span class="token punctuation">.</span>lit <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">segment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	s<span class="token punctuation">.</span>bad <span class="token operator">=</span> <span class="token operator">!</span>ok
	s<span class="token punctuation">.</span>kind <span class="token operator">=</span> kind
<span class="token punctuation">}</span>

<span class="token comment">// src/cmd/compile/internal/syntax/source.go</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>source<span class="token punctuation">)</span> <span class="token function">segment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> s<span class="token punctuation">.</span>buf<span class="token punctuation">[</span>s<span class="token punctuation">.</span>b <span class="token punctuation">:</span> s<span class="token punctuation">.</span>r<span class="token operator">-</span>s<span class="token punctuation">.</span>chw<span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_=e(`<br><h2 id="拼接" tabindex="-1"><a class="header-anchor" href="#拼接" aria-hidden="true">#</a> 拼接</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/runtime/string.go</span>

<span class="token comment">// concatstrings implements a Go string concatenation x+y+z+...</span>
<span class="token comment">// The operands are passed in the slice a.</span>
<span class="token comment">// If buf != nil, the compiler has determined that the result does not</span>
<span class="token comment">// escape the calling function, so the string data can be stored in buf</span>
<span class="token comment">// if small enough.</span>
<span class="token keyword">func</span> <span class="token function">concatstrings</span><span class="token punctuation">(</span>buf <span class="token operator">*</span>tmpBuf<span class="token punctuation">,</span> a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	idx <span class="token operator">:=</span> <span class="token number">0</span>
	l <span class="token operator">:=</span> <span class="token number">0</span>
	count <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> x <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
		n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
		<span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> l<span class="token operator">+</span>n <span class="token operator">&lt;</span> l <span class="token punctuation">{</span>
			<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;string concatenation too long&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		l <span class="token operator">+=</span> n
		count<span class="token operator">++</span>
		idx <span class="token operator">=</span> i
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// If there is just one string and either it is not on the stack</span>
	<span class="token comment">// or our result does not escape the calling frame (buf != nil),</span>
	<span class="token comment">// then we can return that string directly.</span>
	<span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>buf <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">stringDataOnStack</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a<span class="token punctuation">[</span>idx<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	s<span class="token punctuation">,</span> b <span class="token operator">:=</span> <span class="token function">rawstringtmp</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> l<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> x <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
		<span class="token function">copy</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
		b <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> s
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=e(`<br><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2><h3 id="将字节片转换为字符串" tabindex="-1"><a class="header-anchor" href="#将字节片转换为字符串" aria-hidden="true">#</a> 将字节片转换为字符串</h3><p>Slicebytetostring() 方法是将字节片转换为字符串，它由编译器插入到生成的代码中，ptr 是指向片的第一个元素的指针，n 是 slice 的长度，buf 是结果的固定大小的缓冲区，那么我们就来看看该方法的具体过程吧，首先可以看到该方法先判断了两种情况，分别为字节数组长度为 0 或者 1 的时候，随后就是判断缓冲区的大小是否可以够用，如果不够就会为新字符串分配一片内存空间，stringStructOf() 方法会将传入的字符串指针转换成 stringStruct 的结构体指针，然后设置结构体持有的字符串指针 str 和长度 len，最后通过 memmove() 方法将原 []byte 中的字节全部复制到新的内存空间中。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// The constant is known to the compiler.</span>
<span class="token comment">// There is no fundamental theory behind this number.</span>
<span class="token keyword">const</span> tmpStringBufSize <span class="token operator">=</span> <span class="token number">32</span>

<span class="token keyword">type</span> tmpBuf <span class="token punctuation">[</span>tmpStringBufSize<span class="token punctuation">]</span><span class="token builtin">byte</span>

<span class="token comment">// slicebytetostring converts a byte slice to a string.</span>
<span class="token comment">// It is inserted by the compiler into generated code.</span>
<span class="token comment">// ptr is a pointer to the first element of the slice;</span>
<span class="token comment">// n is the length of the slice.</span>
<span class="token comment">// Buf is a fixed-size buffer for the result,</span>
<span class="token comment">// it is not nil if the result does not escape.</span>
<span class="token keyword">func</span> <span class="token function">slicebytetostring</span><span class="token punctuation">(</span>buf <span class="token operator">*</span>tmpBuf<span class="token punctuation">,</span> ptr <span class="token operator">*</span><span class="token builtin">byte</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// Turns out to be a relatively common case.</span>
		<span class="token comment">// Consider that you want to parse out data between parens in &quot;foo()bar&quot;,</span>
		<span class="token comment">// you find the indices and convert the subslice to string.</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
		<span class="token function">racereadrangepc</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token function">getcallerpc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			abi<span class="token punctuation">.</span><span class="token function">FuncPCABIInternal</span><span class="token punctuation">(</span>slicebytetostring<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> msanenabled <span class="token punctuation">{</span>
		<span class="token function">msanread</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> asanenabled <span class="token punctuation">{</span>
		<span class="token function">asanread</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		p <span class="token operator">:=</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>staticuint64s<span class="token punctuation">[</span><span class="token operator">*</span>ptr<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> goarch<span class="token punctuation">.</span>BigEndian <span class="token punctuation">{</span>
			p <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">stringStructOf</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span>str <span class="token operator">=</span> p
		<span class="token function">stringStructOf</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">=</span> <span class="token number">1</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> p unsafe<span class="token punctuation">.</span>Pointer
	<span class="token keyword">if</span> buf <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		p <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		p <span class="token operator">=</span> <span class="token function">mallocgc</span><span class="token punctuation">(</span><span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">stringStructOf</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span>str <span class="token operator">=</span> p
	<span class="token function">stringStructOf</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">=</span> n
	<span class="token function">memmove</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),S=e(`<br><h3 id="将字符串转换为字节片" tabindex="-1"><a class="header-anchor" href="#将字符串转换为字节片" aria-hidden="true">#</a> 将字符串转换为字节片</h3><p>stringtoslicebyte() 方法是将字符串转换为字节片，buf 是结果的固定大小的缓冲区，s 是要进行转换的字符串，该方法会根据是否传入缓冲区做出不同的处理，当传入缓冲区时，它会使用传入的缓冲区存储 []byte，当没有传入缓冲区时，运行时会调用 rawbyteslice() 方法创建新的字节切片并将字符串中的内容拷贝过去。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">stringtoslicebyte</span><span class="token punctuation">(</span>buf <span class="token operator">*</span>tmpBuf<span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	<span class="token keyword">if</span> buf <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token operator">*</span>buf <span class="token operator">=</span> tmpBuf<span class="token punctuation">{</span><span class="token punctuation">}</span>
		b <span class="token operator">=</span> buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		b <span class="token operator">=</span> <span class="token function">rawbyteslice</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	<span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),q=p("br",null,null,-1);function L(B,P){const s=c("center");return i(),l("div",null,[d,a(s,null,{default:t(()=>[n("code - 1 ：string 类型说明")]),_:1}),k,a(s,null,{default:t(()=>[n("code - 2 ：string 数据结构")]),_:1}),v,a(s,null,{default:t(()=>[n("code - 3 ：声明 string 变量并赋值")]),_:1}),m,b,a(s,null,{default:t(()=>[n("图 1：string 类型的内存布局")]),_:1}),g,a(s,null,{default:t(()=>[n("code - 4 ：使用 ` 赋值 string 类型")]),_:1}),f,a(s,null,{default:t(()=>[n("code - 5 ：语法解析")]),_:1}),h,a(s,null,{default:t(()=>[n("code - 6 ：stdString() 方法")]),_:1}),y,a(s,null,{default:t(()=>[n("code - 7 ：rawString() 方法")]),_:1}),w,a(s,null,{default:t(()=>[n("code - 8 ：setLit() 方法")]),_:1}),_,a(s,null,{default:t(()=>[n("code - 9 ：concatstrings ")]),_:1}),x,a(s,null,{default:t(()=>[n("code - 10 slicebytetostring ")]),_:1}),S,a(s,null,{default:t(()=>[n("code - 11 stringtoslicebyte ")]),_:1}),q])}const G=o(r,[["render",L],["__file","index.html.vue"]]);export{G as default};

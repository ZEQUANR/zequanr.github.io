import{_ as o,r as c,o as i,c as l,d as s,w as a,e as t,a as e,b as p}from"./app-oKetCDPw.js";const u="/assets/array-MKwvoSRQ.svg",r="/assets/declaration-2BDGpM1V.svg",k={},d=e(`<p>Go 语言中的数组可以简单理解为存储同一种数据类型且存储数量（长度）固定的序列，数组在规划内存的详细布局时很有用，它不仅是切片的构建块，Go 语言中许多基础的数据结构都是通过数组来实现数据的存储工作。</p><p>数组这个概念在许多语言中皆有存在，而 Go 语言是一门属于 C 语言家族的编程语言，但在 Go 语言和 C 语言中，数组的工作方式有很大的不同。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">show</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Address(Array) = %p --&gt; %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">compare</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;copyArray == compareArray  %t \\n&quot;</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span>
    <span class="token keyword">var</span> copyArray <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token keyword">var</span> compareArray <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    copyArray <span class="token operator">=</span> Array

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;copyArray --&gt; %d \\n&quot;</span><span class="token punctuation">,</span> copyArray<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Address(Array) = %p --&gt; %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Array<span class="token punctuation">,</span> Array<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Address(copyArray) = %p --&gt; %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>copyArray<span class="token punctuation">,</span> copyArray<span class="token punctuation">)</span>
    <span class="token function">show</span><span class="token punctuation">(</span>Array<span class="token punctuation">)</span>
    <span class="token function">compare</span><span class="token punctuation">(</span>copyArray<span class="token punctuation">,</span> compareArray<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// L22: copyArray --&gt; [0 1 2 3] </span>
<span class="token comment">// L23: Address(Array) = 0xc0000a0000 --&gt; [0 1 2 3]</span>
<span class="token comment">// L24: Address(copyArray) = 0xc0000a0020 --&gt; [0 1 2 3]</span>
<span class="token comment">// L25: Address(Array) = 0xc0000a00c0 --&gt; [0 1 2 3]</span>
<span class="token comment">// L26: copyArray == compareArray  false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=e(`<br><ul><li>数组是值，将一个数组分配给另一个数组会复制所有元素。</li><li>数组变量表示整个数组，如果将数组传递给函数，它将收到数组的副本，而不是指向它的指针。</li><li>数组的存储数量（长度）是其类型的一部分， [10]int 和 [20]int 类型是不同的，所以数组不能被随意调整大小。</li></ul><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2><p>首先我们先来看一下 Array 的数据结构，从 code - 1 中我们可以看到该类型包含两个字段，分别是元素类型 Elem 和数组的大小 Bound，这两个字段共同构成了数组类型。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/types/type.go</span>

<span class="token comment">// Array contains Type fields specific to array types.</span>
<span class="token keyword">type</span> Array <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Elem  <span class="token operator">*</span>Type <span class="token comment">// element type</span>
	Bound <span class="token builtin">int64</span> <span class="token comment">// number of elements; &lt;0 if unknown yet</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),m=p("br",null,null,-1),b=p("figure",null,[p("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),p("figcaption")],-1),y=e(`<br><h2 id="类型声明" tabindex="-1"><a class="header-anchor" href="#类型声明" aria-hidden="true">#</a> 类型声明</h2><p>如 code - 3 所示我们可以使用两种方式在 Go 语言中声明数组，即一种是直接在 [] 里指定数组大小，另一种是使用 [...] 后面添加你想要声明的数据类型，Go 语言会在编译期间通过源代码推导数组的大小。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> arr <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span>

arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),f=e(`<br><p>既然存在两种不同的声明方式，那么编译器所做出的处理也大不相同，那么我们就来看一下编译器在遇到不同情况时所做出的处理如 code - 4 所示，如果当前节点的操作类型是 OTARRAY 也就是我们使用的第一种声明方式，会向 tcArrayType 函数传入 ArrayType 类型的结构体 code - 6 指针来进行处理，如果当前节点的操作类型是 OCOMPLIT 也就是我们使用的第二种声明方，会向 tcCompLit 函数传入 CompLitExpr 类型的结构体 code - 8 指针来进行处理。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/typecheck/typecheck.go</span>

<span class="token comment">// typecheck1 should ONLY be called from typecheck.</span>
<span class="token keyword">func</span> <span class="token function">typecheck1</span><span class="token punctuation">(</span>n ir<span class="token punctuation">.</span>Node<span class="token punctuation">,</span> top <span class="token builtin">int</span><span class="token punctuation">)</span> ir<span class="token punctuation">.</span>Node <span class="token punctuation">{</span>
	<span class="token keyword">if</span> n<span class="token punctuation">,</span> ok <span class="token operator">:=</span> n<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>ir<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		<span class="token function">typecheckdef</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">switch</span> n<span class="token punctuation">.</span><span class="token function">Op</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		ir<span class="token punctuation">.</span><span class="token function">Dump</span><span class="token punctuation">(</span><span class="token string">&quot;typecheck&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
		base<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;typecheck %v&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">.</span><span class="token function">Op</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;unreachable&quot;</span><span class="token punctuation">)</span>

    <span class="token operator">...</span>

	<span class="token keyword">case</span> ir<span class="token punctuation">.</span>OTARRAY<span class="token punctuation">:</span>
		n <span class="token operator">:=</span> n<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>ir<span class="token punctuation">.</span>ArrayType<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token function">tcArrayType</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>

    <span class="token operator">...</span>

	<span class="token keyword">case</span> ir<span class="token punctuation">.</span>OCOMPLIT<span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token function">tcCompLit</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>ir<span class="token punctuation">.</span>CompLitExpr<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token operator">...</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=e(`<br><p>下面我们就来看看 tcArrayType() 方法 code - 5 首先具体细节我们暂时先不提及，来看看他的大体实现思路，当我们以已第一种声明方式进入到此函数时，该函数会对其进行错误判断，没有出现错误时就会调用 NewArray() 方法。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/typecheck/type.go</span>

<span class="token comment">// tcArrayType typechecks an OTARRAY node.</span>
<span class="token keyword">func</span> <span class="token function">tcArrayType</span><span class="token punctuation">(</span>n <span class="token operator">*</span>ir<span class="token punctuation">.</span>ArrayType<span class="token punctuation">)</span> ir<span class="token punctuation">.</span>Node <span class="token punctuation">{</span>
	n<span class="token punctuation">.</span>Elem <span class="token operator">=</span> <span class="token function">typecheckNtype</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>Elem<span class="token punctuation">)</span>
	<span class="token keyword">if</span> n<span class="token punctuation">.</span>Elem<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> n<span class="token punctuation">.</span>Len <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// [...]T</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>n<span class="token punctuation">.</span><span class="token function">Diag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			n<span class="token punctuation">.</span><span class="token function">SetDiag</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
			base<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;use of [...] array outside of array literal&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>
	n<span class="token punctuation">.</span>Len <span class="token operator">=</span> <span class="token function">indexlit</span><span class="token punctuation">(</span><span class="token function">Expr</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>Len<span class="token punctuation">)</span><span class="token punctuation">)</span>
	size <span class="token operator">:=</span> n<span class="token punctuation">.</span>Len
	<span class="token keyword">if</span> ir<span class="token punctuation">.</span><span class="token function">ConstType</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span> <span class="token operator">!=</span> constant<span class="token punctuation">.</span>Int <span class="token punctuation">{</span>
		<span class="token keyword">switch</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> size<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
			<span class="token comment">// Error already reported elsewhere.</span>
		<span class="token keyword">case</span> size<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> size<span class="token punctuation">.</span><span class="token function">Op</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> ir<span class="token punctuation">.</span>OLITERAL<span class="token punctuation">:</span>
			base<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;non-constant array bound %v&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			base<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid array bound %v&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>

	v <span class="token operator">:=</span> size<span class="token punctuation">.</span><span class="token function">Val</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> ir<span class="token punctuation">.</span><span class="token function">ConstOverflow</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> types<span class="token punctuation">.</span>Types<span class="token punctuation">[</span>types<span class="token punctuation">.</span>TINT<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		base<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;array bound is too large&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> constant<span class="token punctuation">.</span><span class="token function">Sign</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		base<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;array bound must be non-negative&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>

	bound<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> constant<span class="token punctuation">.</span><span class="token function">Int64Val</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	t <span class="token operator">:=</span> types<span class="token punctuation">.</span><span class="token function">NewArray</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>Elem<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> bound<span class="token punctuation">)</span>
	n<span class="token punctuation">.</span><span class="token function">SetOTYPE</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
	types<span class="token punctuation">.</span><span class="token function">CheckSize</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
	<span class="token keyword">return</span> n
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),A=e(`<br><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/ir/type.go</span>

<span class="token comment">// An ArrayType represents a [Len]Elem type syntax.</span>
<span class="token comment">// If Len is nil, the type is a [...]Elem in an array literal.</span>
<span class="token keyword">type</span> ArrayType <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	miniType
	Len  Node
	Elem Ntype
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=e(`<br><p>我们在来看看 tcCompLit() 方法 code - 7 当我们使用第二种声明方式时，编译器会在的 tcCompLit 方法中调用 typecheckarraylit 方法通过遍历元素的方式来计算数组中元素的数量。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/typecheck/expr.go</span>

<span class="token comment">// The result of tcCompLit MUST be assigned back to n, e.g.</span>
<span class="token comment">// 	n.Left = tcCompLit(n.Left)</span>
<span class="token keyword">func</span> <span class="token function">tcCompLit</span><span class="token punctuation">(</span>n <span class="token operator">*</span>ir<span class="token punctuation">.</span>CompLitExpr<span class="token punctuation">)</span> <span class="token punctuation">(</span>res ir<span class="token punctuation">.</span>Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token operator">...</span>
    
	<span class="token comment">// Need to handle [...]T arrays specially.</span>
	<span class="token keyword">if</span> array<span class="token punctuation">,</span> ok <span class="token operator">:=</span> n<span class="token punctuation">.</span>Ntype<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>ir<span class="token punctuation">.</span>ArrayType<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">.</span>Elem <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">.</span>Len <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		array<span class="token punctuation">.</span>Elem <span class="token operator">=</span> <span class="token function">typecheckNtype</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>Elem<span class="token punctuation">)</span>
		elemType <span class="token operator">:=</span> array<span class="token punctuation">.</span>Elem<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> elemType <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			n<span class="token punctuation">.</span><span class="token function">SetType</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span> n
		<span class="token punctuation">}</span>
		length <span class="token operator">:=</span> <span class="token function">typecheckarraylit</span><span class="token punctuation">(</span>elemType<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">.</span>List<span class="token punctuation">,</span> <span class="token string">&quot;array literal&quot;</span><span class="token punctuation">)</span>
		n<span class="token punctuation">.</span><span class="token function">SetOp</span><span class="token punctuation">(</span>ir<span class="token punctuation">.</span>OARRAYLIT<span class="token punctuation">)</span>
		n<span class="token punctuation">.</span><span class="token function">SetType</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token function">NewArray</span><span class="token punctuation">(</span>elemType<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">)</span>
		n<span class="token punctuation">.</span>Ntype <span class="token operator">=</span> <span class="token boolean">nil</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>

    <span class="token operator">...</span>

	<span class="token keyword">switch</span> t<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		base<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid composite literal type %v&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>
		n<span class="token punctuation">.</span><span class="token function">SetType</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>

	<span class="token keyword">case</span> types<span class="token punctuation">.</span>TARRAY<span class="token punctuation">:</span>
		<span class="token function">typecheckarraylit</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">NumElem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> n<span class="token punctuation">.</span>List<span class="token punctuation">,</span> <span class="token string">&quot;array literal&quot;</span><span class="token punctuation">)</span>
		n<span class="token punctuation">.</span><span class="token function">SetOp</span><span class="token punctuation">(</span>ir<span class="token punctuation">.</span>OARRAYLIT<span class="token punctuation">)</span>
		n<span class="token punctuation">.</span>Ntype <span class="token operator">=</span> <span class="token boolean">nil</span>

    <span class="token operator">...</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w=e(`<br><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/ir/expr.go</span>

<span class="token comment">// A CompLitExpr is a composite literal Type{Vals}.</span>
<span class="token comment">// Before type-checking, the type is Ntype.</span>
<span class="token keyword">type</span> CompLitExpr <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	miniExpr
	origNode
	Ntype    Ntype
	List     Nodes <span class="token comment">// initialized values</span>
	Prealloc <span class="token operator">*</span>Name
	Len      <span class="token builtin">int64</span> <span class="token comment">// backing array length for OSLICELIT</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),T=e(`<br><p>看到这里我们可以发现不管是第一种还是第二种声明方式在运行时是完全等价的到最后都会调用 NewArray 方法 code - ? 来创建包含数组大小的 Array 结构体 code - ? ，第二种声明方式也只是 Go 语言为我们提供的一种语法糖。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/cmd/compile/internal/types/type.go</span>

<span class="token comment">// NewArray returns a new fixed-length array Type.</span>
<span class="token keyword">func</span> <span class="token function">NewArray</span><span class="token punctuation">(</span>elem <span class="token operator">*</span>Type<span class="token punctuation">,</span> bound <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token operator">*</span>Type <span class="token punctuation">{</span>
	<span class="token keyword">if</span> bound <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		base<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;NewArray: invalid bound %v&quot;</span><span class="token punctuation">,</span> bound<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	t <span class="token operator">:=</span> <span class="token function">newType</span><span class="token punctuation">(</span>TARRAY<span class="token punctuation">)</span>
	t<span class="token punctuation">.</span>extra <span class="token operator">=</span> <span class="token operator">&amp;</span>Array<span class="token punctuation">{</span>Elem<span class="token punctuation">:</span> elem<span class="token punctuation">,</span> Bound<span class="token punctuation">:</span> bound<span class="token punctuation">}</span>
	t<span class="token punctuation">.</span><span class="token function">SetNotInHeap</span><span class="token punctuation">(</span>elem<span class="token punctuation">.</span><span class="token function">NotInHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> elem<span class="token punctuation">.</span><span class="token function">HasTParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">SetHasTParam</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> elem<span class="token punctuation">.</span><span class="token function">HasShape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">SetHasShape</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> t
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_=p("br",null,null,-1),x=p("figure",null,[p("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),p("figcaption")],-1),L=p("br",null,null,-1);function q(N,E){const n=c("center");return i(),l("div",null,[d,s(n,null,{default:a(()=>[t("code - 1 : Go 语言数组")]),_:1}),v,s(n,null,{default:a(()=>[t("code - 2 ：Array 数据结构")]),_:1}),m,b,s(n,null,{default:a(()=>[t("图 1 ：Array 数据结构")]),_:1}),y,s(n,null,{default:a(()=>[t("code - 3 ：Array 类型声明")]),_:1}),f,s(n,null,{default:a(()=>[t("code - 4 ：typecheck1() 方法")]),_:1}),g,s(n,null,{default:a(()=>[t("code - 5 ：tcArrayType() 方法")]),_:1}),A,s(n,null,{default:a(()=>[t("code - 6 ：ArrayType 结构体")]),_:1}),h,s(n,null,{default:a(()=>[t("code - 7 ：tcCompLit() 方法")]),_:1}),w,s(n,null,{default:a(()=>[t("code - 8 ：CompLitExpr 结构体")]),_:1}),T,s(n,null,{default:a(()=>[t("code - 9 ：NewArray() 方法")]),_:1}),_,x,s(n,null,{default:a(()=>[t("图 2 ：Array 声明过程")]),_:1}),L])}const O=o(k,[["render",q],["__file","index.html.vue"]]);export{O as default};

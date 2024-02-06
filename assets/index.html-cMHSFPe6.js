import{_ as l,r as p,o as i,c as r,b as s,e as n,d as a,w as t,a as c}from"./app-7QKrQFIj.js";const u={},d=s("p",null,"C 语言的执行开始于 main 方法，main 方法是所有 C 语言程序执行的入口，在程序的开头，通常会定义一个 main 方法，并且它会作为程序的起始点，也就是说所有的 C 语言程序都需要一个称之为 mian 的方法，程序执行是从 main 方法中的第一句开始执行，当 main 函数返回时程序也会随之结束。",-1),k={href:"https://en.cppreference.com/w/c/99",target:"_blank",rel:"noopener noreferrer"},v=c(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 程序执行的代码</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=c(`<br><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 程序执行的代码</span>
    <span class="token keyword">return</span> argc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g=c(`<br><blockquote><p>参数 argc 和 argv（也可以根据需要另外命名），代表了程序的命令行参数。</p></blockquote><blockquote><p>argc（全称为 argument count）的值为 0 或者为命令行中启动该程序的字符串的数量。程序本身的名称也算作该字符串，也要计算进去。</p></blockquote><blockquote><p>argv（全称为 arguments vector）是一个 char 指针数组，每个指针都独立的指向命令行中每个字符串：数组中元素的个数，比 argc 的值多 1；最后一个元素 argv[argc] 是空指针。如果 argc 大于 0，那么第一个字符串，argv[0]，就是程序本身的名称。如果运行环境不支持程序名称，那么 argv[0] 为空。如果 argc 大于 1，从字符串 argv[1] 到 argv[argc-1] 包含该程序命令行参数。</p></blockquote><p>除此之外，许多 C 的实现版本还支持其他、非标准语法的书写形式，有些编译器允许这种形式，但是还没有任何标准考虑接受它。所以编译器不必接受这种形式，并且很多编译器也不允许这么写。坚持使用标准的意义在于：当你把程序从一个编译器移到另一个编译器时，照样能正常运行。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>envp<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 程序执行的代码</span>
    <span class="token keyword">return</span> argc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),b=s("br",null,null,-1),_=s("blockquote",null,[s("p",null,"envp（全称为 environment pointer）在非标准的、有 3 个参数的 main（）函数版本中，是一个指针数组，每个指针都指向组成程序环境的一个字符串。通常，这个字符串的格式是“名称 = 值”。在标准 C 语言中，可以利用函数 getenv（）获取得这些环境变量。")],-1),h={href:"https://en.cppreference.com/w/c/language/main_function",target:"_blank",rel:"noopener noreferrer"},f=c(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w=s("br",null,null,-1),y=s("p",null,"总之，C 语言中的 main 函数是程序的入口函数，它为程序提供了一个起始点，在 main 函数中，我们可以定义各种变量、调用各种函数、执行各种操作，还可以编写各种算法和逻辑。通过正确地使用 main 函数，我们可以让程序完成各种复杂的任务。",-1);function x(C,q){const o=p("ExternalLinkIcon"),e=p("center");return i(),r("div",null,[d,s("p",null,[n("在最新的 "),s("a",k,[n("C99"),a(o)]),n(" 标准中 main 函数只有两种标准形式，值得注意的是标准 C 的返回值是一个整数，若 main 方法执行到末尾没有遇到返回语句，则直接默认执行了 return 0，而 0 值一般代表着成功的意思，如果对其他非 0 值感兴趣的话可以试着去搜索一下“Linux 或 Window 错误代码及其含义”这里就不做过多陈述。")]),v,a(e,null,{default:t(()=>[n("code - 1：无参数")]),_:1}),m,a(e,null,{default:t(()=>[n("code - 2：有参数")]),_:1}),g,a(e,null,{default:t(()=>[n("code - 3：有非标准语法的书写形式")]),_:1}),b,_,s("p",null,[n("C 的 main 方法也是一个普通的函数，我们也向 main 方法叫做 "),s("a",h,[n("main 函数"),a(o)]),n("，而 C 的设计原则是把函数作为程序的构成模块，main 函数称之为主函数，所有简单的程序都可以定义其他额外的函数。")]),f,a(e,null,{default:t(()=>[n("code - 4：Hello World")]),_:1}),w,y])}const V=l(u,[["render",x],["__file","index.html.vue"]]);export{V as default};
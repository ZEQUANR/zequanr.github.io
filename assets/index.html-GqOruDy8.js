import{_ as p,r as i,o,c as l,d as e,w as t,e as s,b as n,a as c}from"./app-7QKrQFIj.js";const u="/assets/Go-interface-channel-ovayXqKN.svg",d="/assets/Go-Channels-xn_EtRQB.svg",r="/assets/Go-Channel-test-one-and-two-qXsBe4pt.svg",k="/assets/Go-Channel-test-three-S1Um-u__.svg",v="/assets/Go-Channel-5-kjFU7rXP.svg",m="/assets/Go-Channel-10-YjbGBrwl.svg",b="/assets/Go-interface-channel-type-iihcBaMr.svg",h="/assets/Go-interface-5-hvGwgVsl.svg",g="/assets/Go-Channel-1-Cokiv2dP.svg",f={},y=n("p",null,"本周我们来看 Go 语言中的 channel，作为 Go 语言核心的数据结构，也是作为 goroutine 之间的通信方式，下面我们将通过一些测试代码来开始本周的 channel 的学习。",-1),_=n("h2",{id:"overview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),s(" Overview")],-1),w=n("p",null,"从 channel 关键字上来看大致意思为“管道”，如图 1 所示作为 Go 语言中 Goroutine 之间的通信方式。",-1),q=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),x=n("br",null,null,-1),P=n("h2",{id:"statement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#statement","aria-hidden":"true"},"#"),s(" Statement")],-1),C=n("p",null,"channel 共有两种形式，分别是 Unbuffered channels 与 Buffered channels，在此之前我们需要先知道，这两种形式是如何声明的。",-1),G=n("figure",null,[n("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),z=c(`<br><h3 id="unbuffered-channels" tabindex="-1"><a class="header-anchor" href="#unbuffered-channels" aria-hidden="true">#</a> Unbuffered channels</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),B=c(`<br><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 0 0</span>
<span class="token comment">// chan int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),T=c(`<br><h3 id="buffered-channels" tabindex="-1"><a class="header-anchor" href="#buffered-channels" aria-hidden="true">#</a> Buffered channels</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),S=c(`<br><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 0 2</span>
<span class="token comment">// chan int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),H=c(`<br><p>值得注意的是在 code - 5 中，我们发现 Go 语言中 channel 类型并不像 array 类型一样其容量也算在类型之中。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	buffered <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
	unbuffered <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> ch <span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token operator">=</span> buffered
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>

	ch <span class="token operator">=</span> unbuffered
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 0 4</span>
<span class="token comment">// chan int</span>
<span class="token comment">// 0 0</span>
<span class="token comment">// chan int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N=c(`<br><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>接下来，我们将采取测试代码的形式一步一步的分析 Go 语言中 Channel 的特性。</p><h3 id="communication" tabindex="-1"><a class="header-anchor" href="#communication" aria-hidden="true">#</a> Communication</h3><p>从当前的测试代码 code- 6 ~ 7 中我们可以发现，无缓存 channel 在发送消息后，会堵塞当前的线程，导致之后的程序无法运行。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	message <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>

	ch <span class="token operator">&lt;-</span> message

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
	
	v <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// fatal error: all goroutines are asleep - deadlock!</span>
<span class="token comment">//</span>
<span class="token comment">// goroutine 1 [chan send]:</span>
<span class="token comment">// main.main()</span>
<span class="token comment">// 	/app/example.go:12 +0x4a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),U=c(`<br><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	message <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
	
	ch <span class="token operator">&lt;-</span> message

	v <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// hello</span>
<span class="token comment">// fatal error: all goroutines are asleep - deadlock!</span>
<span class="token comment">//</span>
<span class="token comment">// goroutine 1 [chan send]:</span>
<span class="token comment">// main.main()</span>
<span class="token comment">// 	/app/example.go:12 +0x4a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),O=n("br",null,null,-1),V=n("figure",null,[n("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),E=c(`<br><p>从 code - 8 中我们可以确认，无缓存 channel 在发送消息后会堵塞当前线程直至该消息被接收后。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	message <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ch <span class="token operator">&lt;-</span> message
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	v <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),W=n("br",null,null,-1),X=n("figure",null,[n("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),j=c(`<br><p>从 code - 9 中我们可以确认，无缓存 channel 在接收消息前会堵塞当前线程直至收到该消息后。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	message <span class="token operator">:=</span> <span class="token string">&quot;World&quot;</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span>
		v <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	ch <span class="token operator">&lt;-</span> message
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;send&quot;</span><span class="token punctuation">)</span>
	
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Hello</span>
<span class="token comment">// send</span>
<span class="token comment">// World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),R=n("br",null,null,-1),F=n("figure",null,[n("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),K=c(`<br><p>那么我们通过刚刚的测试代码 code 6 ～ 9 中我们已经可以确定在 Unbuffered Channel 中接收者会阻塞直至接收到消息，发送者会阻塞直至接收者接收到消息。</p><p>从 code - 10 中我们可以确认在 buffered Channel 中，缓存没有被占满的情况下是不会对当前线程进行堵塞的。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	message <span class="token operator">:=</span> <span class="token string">&quot;Hello World&quot;</span>

	ch <span class="token operator">&lt;-</span> message

	v <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Hello World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),M=n("br",null,null,-1),Q=n("figure",null,[n("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),Y=c(`<br><p>从 code - 11 中我们可以确认在 buffered Channel 中，缓存被占满的情况下是会对当前线程进行堵塞的，那么接下来的结果可想而知了，在这里我们就不做过多描述了。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		ch <span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>

	v <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// fatal error: all goroutines are asleep - deadlock!</span>
<span class="token comment">//</span>
<span class="token comment">// goroutine 1 [chan send]:</span>
<span class="token comment">// main.main()</span>
<span class="token comment">// 	/app/example.go:12 +0x4a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),A=c(`<br><p>从 code - 12 中我们可以确认在 buffered Channel 中，发消息者与接收者的顺序为先发的先被接收。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		ch <span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		v <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),D=n("br",null,null,-1),I=n("figure",null,[n("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),J=c(`<br><p>从 code -13 中我们可以确认，channel 在发送接收完消息后是可以继续工作的，并且对当前定义所传递数据类型中可以知道 channel 可以传递任意类型。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		message <span class="token operator">:=</span> <span class="token string">&quot;first&quot;</span>
		ch <span class="token operator">&lt;-</span> message
		v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
		message <span class="token operator">:=</span> <span class="token string">&quot;second&quot;</span>
		ch <span class="token operator">&lt;-</span> message
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),L=n("br",null,null,-1),Z=n("figure",null,[n("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),$=n("br",null,null,-1),nn=n("p",null,"通过我们刚刚的测试代码相比我们已经对 channel 收发消息有了一定的了解，下面我们就来总结一下。",-1),sn=n("figure",null,[n("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),an=c(`<br><h3 id="channel-operate" tabindex="-1"><a class="header-anchor" href="#channel-operate" aria-hidden="true">#</a> Channel Operate</h3><p>在 Go 语言中 channel 默认是双向的，也就是既可以读也可以写，同时，我们还可以创建单向的 channel，单向 channel 也就是只能用于发送数据或者只能用于接收数据的 channel。</p><h4 id="send-only" tabindex="-1"><a class="header-anchor" href="#send-only" aria-hidden="true">#</a> send-only</h4><p>声明 send-only channel 如 code - 14 所示，只需要在 chan 关键字后面加上 &lt;- 符号便可，如 code - 8 所示现在的 channel 只能用于发送数据，而不能用于接收数据。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> chanName <span class="token keyword">chan</span><span class="token operator">&lt;-</span> chanType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),en=c(`<br><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span> ch 
<span class="token punctuation">}</span>

<span class="token comment">// # command-line-arguments</span>
<span class="token comment">// ./main.go:5:5: invalid operation: cannot receive from send-only channel ch (variable of type chan&lt;- string)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),tn=c(`<br><h4 id="receive-only" tabindex="-1"><a class="header-anchor" href="#receive-only" aria-hidden="true">#</a> receive-only</h4><p>声明 receive-only channel 如 code - 16 所示，只需要在 chan 关键字前面加上 &lt;- 符号便可，如 code - 10 所示现在的 channel 只能用于接收数据，而不能用于写数据。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> chanName <span class="token operator">&lt;-</span><span class="token keyword">chan</span> chanType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),cn=c(`<br><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	ch <span class="token operator">&lt;-</span> <span class="token string">&quot;Hello&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// # command-line-arguments</span>
<span class="token comment">// ./main.go:5:2: invalid operation: cannot send to receive-only channel ch (variable of type &lt;-chan string)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),pn=c(`<br><h4 id="both-way" tabindex="-1"><a class="header-anchor" href="#both-way" aria-hidden="true">#</a> both-way</h4><p>声明 both-way channel 如 code - 18 所示，我们不需要在 chan 关键字前面或后面加符号便可，也就是我们最开始测试时使用的类型。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> chanName <span class="token keyword">chan</span> chanType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),on=c(`<br><p>从 code - 11 中，我们可以确认 both-way channel 是可以任意转换成 receive-only channel 与 send-only channel 而反之则不可以。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> send <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">string</span> <span class="token operator">=</span> ch
	send <span class="token operator">&lt;-</span> <span class="token string">&quot;Hello&quot;</span>

	<span class="token keyword">var</span> recv <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span> <span class="token operator">=</span> ch
	<span class="token operator">&lt;-</span> recv

	d1 <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>send<span class="token punctuation">)</span>
	d2 <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>recv<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// # command-line-arguments</span>
<span class="token comment">// ./main.go:12:19: cannot convert send (variable of type chan&lt;- string) to type chan int</span>
<span class="token comment">// ./main.go:13:19: cannot convert recv (variable of type &lt;-chan string) to type chan int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),ln=c(`<br><p>所以只读或者只写 channel 的作用更像是规范双向 channel 在某个函数或进程中的使用，如 code - 20 所示使代码可读性更高，同时也提醒着使用者应该做什么。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">receive</span><span class="token punctuation">(</span>ch <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">send</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	message <span class="token operator">:=</span> <span class="token string">&quot;Hello&quot;</span>
	ch <span class="token operator">&lt;-</span> message
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">send</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token function">receive</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),un=c(`<br><h3 id="close" tabindex="-1"><a class="header-anchor" href="#close" aria-hidden="true">#</a> close</h3><p>如 code - 21 所示 receive-only channe 是不可以被 close 的。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	both <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	send <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	receive <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

	<span class="token function">close</span><span class="token punctuation">(</span>both<span class="token punctuation">)</span>
	<span class="token function">close</span><span class="token punctuation">(</span>send<span class="token punctuation">)</span>
	<span class="token function">close</span><span class="token punctuation">(</span>receive<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// # command-line-arguments</span>
<span class="token comment">// ./main.go:10:8: invalid operation: cannot close receive-only channel receive (variable of type &lt;-chan string)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),dn=c(`<br><p>如 code - 22 所示 channe 被 close 后是可以直接被读取的，读取是当前定义类型的初始值。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

	<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span> ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),rn=c(`<br><p>如 code - 23 所示 beffered channe 被 close 后也是可以读取值的，只不过 channel 中之前发送的数据会先被读取出来。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		ch <span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>

	<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		v <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
<span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),kn=c(`<br><p>如 code - 24 所示只读只写的 channe 被 close 后是不可以直接被读取的。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	send <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	receive <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

	<span class="token function">close</span><span class="token punctuation">(</span>send<span class="token punctuation">)</span>
	<span class="token function">close</span><span class="token punctuation">(</span>receive<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span> send<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span> receive<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// # command-line-arguments</span>
<span class="token comment">// ./main.go:12:8: invalid operation: cannot close receive-only channel receive (variable of type &lt;-chan int)</span>
<span class="token comment">// ./main.go:14:17: invalid operation: cannot receive from send-only channel send (variable of type chan&lt;- int)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),vn=n("br",null,null,-1),mn=n("h2",{id:"summarize",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#summarize","aria-hidden":"true"},"#"),s(" Summarize")],-1),bn=n("p",null,"通过本周对 channel 的学习，相比我们已经对 channel 有了一定的了解，下面我们就来总结一下我们的测试结果。",-1),hn=n("ol",null,[n("li",null,"channel 类型不会对容量做出限制。"),n("li",null,"channel 可以发送任意类型。"),n("li",null,"无缓存的 channel 在读取和写入时都会对我们当前的线程进行堵塞直到其他线程对其进行处理。"),n("li",null,"channel 类型可以被定义为只读只写，多数情况下是规范双向 channel 在某个函数或进程中的使用。"),n("li",null,"hannel 被 close 后依旧可以读值。")],-1);function gn(fn,yn){const a=i("center");return o(),l("div",null,[y,_,w,q,e(a,null,{default:t(()=>[s("图 1：Channel")]),_:1}),x,P,C,G,e(a,null,{default:t(()=>[s("图 2：Unbuffered channels and Buffered channels")]),_:1}),z,e(a,null,{default:t(()=>[s("code - 1：声明 Unbuffered Channel")]),_:1}),B,e(a,null,{default:t(()=>[s("code - 2：Unbuffered Channel Type")]),_:1}),T,e(a,null,{default:t(()=>[s("code - 3：声明 Buffered Channel")]),_:1}),S,e(a,null,{default:t(()=>[s("code - 4：Buffered Channel Type")]),_:1}),H,e(a,null,{default:t(()=>[s("code - 5：Channel Type")]),_:1}),N,e(a,null,{default:t(()=>[s("code - 6：测试用例 1")]),_:1}),U,e(a,null,{default:t(()=>[s("code - 7：测试用例 2")]),_:1}),O,V,e(a,null,{default:t(()=>[s("图 3：测试用例 1 ~ 2 演示")]),_:1}),E,e(a,null,{default:t(()=>[s("code - 8：测试用例 3")]),_:1}),W,X,e(a,null,{default:t(()=>[s("图 4：测试用例 3 演示")]),_:1}),j,e(a,null,{default:t(()=>[s("code - 9：测试用例 4")]),_:1}),R,F,e(a,null,{default:t(()=>[s("图 5：测试用例 4 演示")]),_:1}),K,e(a,null,{default:t(()=>[s("code - 10：测试用例 5")]),_:1}),M,Q,e(a,null,{default:t(()=>[s("图 6：测试用例 5 演示")]),_:1}),Y,e(a,null,{default:t(()=>[s("code - 11：测试用例 6")]),_:1}),A,e(a,null,{default:t(()=>[s("code - 12：测试用例 7")]),_:1}),D,I,e(a,null,{default:t(()=>[s("图 6：测试用例 7 演示")]),_:1}),J,e(a,null,{default:t(()=>[s("code - 13：测试用例 8")]),_:1}),L,Z,e(a,null,{default:t(()=>[s("图 7：测试用例 8 演示")]),_:1}),$,nn,sn,e(a,null,{default:t(()=>[s("图 8：Channel and Send && Receive")]),_:1}),an,e(a,null,{default:t(()=>[s("code - 14：send-only")]),_:1}),en,e(a,null,{default:t(()=>[s("code - 15：send-only Err")]),_:1}),tn,e(a,null,{default:t(()=>[s("code - 16：receive-only")]),_:1}),cn,e(a,null,{default:t(()=>[s("code - 17：receive-only Err")]),_:1}),pn,e(a,null,{default:t(()=>[s("code - 18：both-way")]),_:1}),on,e(a,null,{default:t(()=>[s("code - 19：type conversion")]),_:1}),ln,e(a,null,{default:t(()=>[s("code - 20：测试用例 9")]),_:1}),un,e(a,null,{default:t(()=>[s("code - 21：测试用例 10")]),_:1}),dn,e(a,null,{default:t(()=>[s("code - 22：测试用例 11")]),_:1}),rn,e(a,null,{default:t(()=>[s("code - 23：测试用例 12")]),_:1}),kn,e(a,null,{default:t(()=>[s("code - 24：测试用例 13")]),_:1}),vn,mn,bn,hn])}const wn=p(f,[["render",gn],["__file","index.html.vue"]]);export{wn as default};

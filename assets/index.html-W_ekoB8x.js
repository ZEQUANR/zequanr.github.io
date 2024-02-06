import{_ as o,r as c,o as l,c as i,d as a,w as t,e as p,b as n,a as e}from"./app-7QKrQFIj.js";const u="/assets/hanoi-s5D1dJIp.svg",d="/assets/one-xiQAaW-8.svg",r="/assets/two-yDdw60Fu.svg",k="/assets/h_two-bTH4vzlE.svg",v="/assets/ha_three-RXC08gnU.svg",m="/assets/seven-047fXP3r.svg",b="/assets/func-TdmD5oYN.svg",_="/assets/bar-simple-ivLS-6ka.png",g={},f=n("p",null,"汉诺塔是一个经典的益智游戏，源自于印度数学家毕达哥拉斯所提出的问题。该游戏通常由三个柱子和若干个圆盘组成，目标是将若干个圆盘从起始柱子移动到目标柱子（且保持圆盘的排列顺序不变），同时遵守以下规则：",-1),h=n("ol",null,[n("li",null,"每次只能移动一个圆盘。"),n("li",null,"大圆盘不能放在小圆盘上面。")],-1),y=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),w=e('<br><p>问题：如果将若干个圆盘从起始柱子 a 移动到目标柱子 c 上？（最少要移动多少次？） 提示：可将圆盘临时置于 b 塔，也可将从 a 塔移出的圆盘重新移回 a 塔，但都必须遵循上述两条规则。</p><p>解题思路</p><p>汉诺塔游戏看起来很简单，但是其中蕴含了很多算法思想，比如说，我们可以使用递归的方法来解决这个问题，具体过程我们可以将其抽象成 3 个步骤。</p><ol><li>将 n - 1 个圆盘从塔 a 移动到塔 b。</li><li>将第 n 个圆盘从塔 a 移动到塔 c。</li><li>将 n - 1 个圆盘从塔 b 移动到塔 c。</li></ol><p>也就是说想要解决 n 层的汉诺塔问题，就需要先解决 n - 1 层的汉诺塔问题......这样我们最终将一个大的问题分解成多个小的问题，具体过程如下：</p><p>要想将塔 a 的圆盘全部移动到塔 c 中，那么必然要将塔 a 中的最大的圆盘，率先落入到塔 c 中。</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',8),x=n("br",null,null,-1),z=n("p",null,"那么遵循上述的游戏规则，要想实施刚刚的操作那么就必将会出现下面这一情况。（使得我们将最大的圆盘从塔 a 移动到塔 c 中畅通无阻）这也是为什么在抽象过程中，第一步就是要将 n - 1 个圆盘从塔 a 移动到塔 b 的原因。",-1),C=n("figure",null,[n("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),F=n("br",null,null,-1),N=n("p",null,"现在最大的圆盘已经抵达了它应在的位置，它的位置已经固定不再会移动了，所以我们不在需要考虑它了，甚至我们可以将它忽略掉！",-1),q=n("figure",null,[n("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),V=n("br",null,null,-1),B=n("p",null,"接下来要考虑的问题就是如何将‘塔 a 上的两个圆盘全部移动到塔 b 中’或是‘塔 b 上的两个圆盘全部移动到塔 c 中’，等等这个问题与我们最开始讨论的问题是不是有些相似“要想将塔 a 上的三个圆盘全部移动到塔 c 中”。",-1),D=n("figure",null,[n("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),T=n("br",null,null,-1),E=n("p",null,"也就是说，我们现在将拥有三个圆盘的汉诺塔问题简化成拥有两个圆盘的汉诺塔问题，换而言之要想解决拥有三个圆盘的汉诺塔问题，就需先解决将拥有二个圆盘的汉诺塔问题。（因为我们只要完成二个圆盘的汉诺塔问题，就可执行图 2 中最开始的操作“将最大的 3 号圆盘从塔 a 移动到塔 c 中”完成解题） 此刻要解决的就是拥有二个圆盘的汉诺塔问题，那么以当前思路来说，我们是否可以继续简化这两层的汉诺塔问题，结果肯定是可以的。 这时我们可以发现，当要解决 n 层汉诺塔问题时，就需要先解决 n - 1 层的汉诺塔问题。",-1),S=n("figure",null,[n("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),X=n("br",null,null,-1),A=n("p",null,"那么如何计算需要多少步，首先移动 1 层的我们从上图中可以看出，如果想要移动 n 层圆盘，它包含两个移动 n - 1 层圆盘，还有一个移动第 n 层圆盘，移动第 n 层圆盘就是一步，所以我们就有以下等式。",-1),H=n("figure",null,[n("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),I=n("p",null,"在这里我们以 F(n) 代表移动 n 层圆盘的步数，我们简单计算一下：移动 1 层圆盘需要 F(1) = 1 步、移动 2 层圆盘需要 F(2) = 3 步、移动 3 层圆盘需要 F(3) = 7 步，总结一下分别为： 1 层为二的一次方减一、2 层为二的二次方减一、3 层为二的三次方减一。",-1),J=n("figure",null,[n("img",{src:_,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),L=e(`<br><p>程序求解</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">message</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">char</span> from<span class="token punctuation">,</span> <span class="token keyword">char</span> to<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;将 %d 号圆盘, 从塔 %c 移动到塔 %c\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> from<span class="token punctuation">,</span> to<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">hanoi</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">char</span> a<span class="token punctuation">,</span> <span class="token keyword">char</span> b<span class="token punctuation">,</span> <span class="token keyword">char</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 汉诺塔中只有一个圆盘直接将圆盘从塔 a 移动到塔 c。</span>
        <span class="token function">message</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">// 将 n - 1 个圆盘从塔 a 移动到塔 b。</span>
    <span class="token function">hanoi</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> c<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将第 n 个圆盘从塔 a 移动到塔 c。</span>
    <span class="token function">message</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将 n - 1 个圆盘从塔 b 移动到塔 c。</span>
    <span class="token function">hanoi</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> a<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">hanoi</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),P=e(`<br><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token function">calculate</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d --&gt; %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">calculate</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Q=n("br",null,null,-1);function R(U,W){const s=c("center");return l(),i("div",null,[f,h,y,a(s,null,{default:t(()=>[p("图 1：汉诺塔")]),_:1}),w,a(s,null,{default:t(()=>[p("图 2：将最大的圆盘落入塔 c 中")]),_:1}),x,z,C,a(s,null,{default:t(()=>[p("图 3：第一步将 n - 1 个圆盘从塔 a 移动到塔 b")]),_:1}),F,N,q,a(s,null,{default:t(()=>[p("图 4：第二步将第 n 个圆盘从塔 a 移动到塔 c")]),_:1}),V,B,D,a(s,null,{default:t(()=>[p("图 5：第三步将 n - 1 个圆盘从塔 b 移动到塔 c")]),_:1}),T,E,S,a(s,null,{default:t(()=>[p("图 6：汉诺塔递归")]),_:1}),X,A,H,I,J,a(s,null,{default:t(()=>[p("图 7：汉诺塔各层步数对比")]),_:1}),L,a(s,null,{default:t(()=>[p("code 1：C 语言汉诺塔递归求解步骤")]),_:1}),P,a(s,null,{default:t(()=>[p("code 2：C 语言汉诺塔递归求解步数")]),_:1}),Q])}const j=o(g,[["render",R],["__file","index.html.vue"]]);export{j as default};
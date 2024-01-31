import{_ as o,r as c,o as i,c as l,d as t,w as p,e as s,b as n,a as e}from"./app-P4jJhCJn.js";const u="/assets/stack-59ULE5YD.svg",k="/assets/stack_push_pop-pT1DStdY.svg",r="/assets/stack_list-To30G0CA.svg",d="/assets/stack_array-qErz3kMM.svg",v={},m=n("p",null,[s("栈是一种遵循"),n("strong",null,"先入后出"),s("的逻辑的线性数据结构。我们可以将栈类比为桌面上的一摞盘子，如果想取出底部的盘子，则需要先将上面的盘子依次移走。我们将盘子替换为各种类型的元素（如整数、字符、对象等），就得到了栈这种数据结构。")],-1),b=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),_=n("br",null,null,-1),f=n("h2",{id:"栈的常用操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栈的常用操作","aria-hidden":"true"},"#"),s(" 栈的常用操作")],-1),g=n("p",null,"我们把堆叠元素的顶部称为“栈顶”，底部称为“栈底”。将把元素添加到栈顶的操作叫作“入栈”，删除栈顶元素的操作叫作“出栈”。",-1),y=n("figure",null,[n("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),h=e('<br><h2 id="栈的实现" tabindex="-1"><a class="header-anchor" href="#栈的实现" aria-hidden="true">#</a> 栈的实现</h2><p>为了深入了解栈的运行机制，我们来尝试自己实现一个栈。<strong>栈遵循先入后出的原则，因此我们只能在栈顶添加或删除元素</strong>。然而，数组和链表都可以在任意位置添加和删除元素，因此栈可以视为一种受限制的数组或链表。换句话说，我们可以“屏蔽”数组或链表的部分无关操作，使其对外表现的逻辑符合栈的特性。</p><h3 id="基于链表实现" tabindex="-1"><a class="header-anchor" href="#基于链表实现" aria-hidden="true">#</a> 基于链表实现</h3><p>使用链表实现栈时，我们可以将链表的头节点视为栈顶，尾节点视为栈底。对于入栈操作，我们只需将元素插入链表头部，这种节点插入方法被称为“头插法”。而对于出栈操作，只需将头节点从链表中删除即可。</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6),w=e(`<br><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Node<span class="token punctuation">,</span> <span class="token operator">*</span>P_Node<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
    P_Node top<span class="token punctuation">;</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Stack<span class="token punctuation">,</span> <span class="token operator">*</span>P_Stack<span class="token punctuation">;</span>

<span class="token comment">// 构造函数</span>
P_Stack <span class="token function">create_stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    P_Stack stack <span class="token operator">=</span> <span class="token punctuation">(</span>P_Stack<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Stack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token operator">-&gt;</span>top <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        stack<span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> stack<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 入栈</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>P_Stack stack<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    P_Node node <span class="token operator">=</span> <span class="token punctuation">(</span>P_Node<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> stack<span class="token operator">-&gt;</span>top<span class="token punctuation">;</span>
        node<span class="token operator">-&gt;</span>value <span class="token operator">=</span> val<span class="token punctuation">;</span>
        stack<span class="token operator">-&gt;</span>top <span class="token operator">=</span> node<span class="token punctuation">;</span>
        stack<span class="token operator">-&gt;</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 出栈</span>
<span class="token keyword">void</span> <span class="token function">pop</span><span class="token punctuation">(</span>P_Stack stack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token operator">-&gt;</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;stack is empty\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    P_Node node <span class="token operator">=</span> stack<span class="token operator">-&gt;</span>top<span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>top <span class="token operator">=</span> stack<span class="token operator">-&gt;</span>top<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> node<span class="token operator">-&gt;</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>size<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    P_Stack stack <span class="token operator">=</span> <span class="token function">create_stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">pop</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">pop</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">pop</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),S=n("br",null,null,-1),x=n("h3",{id:"基于数组实现",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基于数组实现","aria-hidden":"true"},"#"),s(" 基于数组实现")],-1),N=n("p",null,"使用数组实现栈时，我们可以将数组的尾部作为栈顶。入栈与出栈操作分别对应在数组尾部添加元素与删除元素。",-1),P=n("figure",null,[n("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),z=e(`<br><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> capacity<span class="token punctuation">;</span> <span class="token comment">// 栈的容量</span>
    <span class="token keyword">int</span> top<span class="token punctuation">;</span> <span class="token comment">// 栈顶元素的索引</span>
    <span class="token keyword">int</span><span class="token operator">*</span> array<span class="token punctuation">;</span> <span class="token comment">// 存储栈元素的数组</span>
<span class="token punctuation">}</span> Stack<span class="token punctuation">,</span> <span class="token operator">*</span>P_Stack<span class="token punctuation">;</span>

<span class="token comment">// 构造函数</span>
P_Stack <span class="token function">create_stack</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    P_Stack stack <span class="token operator">=</span> <span class="token punctuation">(</span>P_Stack<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Stack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token operator">-&gt;</span>capacity <span class="token operator">=</span> cap<span class="token punctuation">;</span>
        stack<span class="token operator">-&gt;</span>top <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        stack<span class="token operator">-&gt;</span>array <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> stack<span class="token operator">-&gt;</span>capacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token operator">-&gt;</span>array <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> stack<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 入栈</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>P_Stack stack<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token operator">-&gt;</span>top <span class="token operator">==</span> stack<span class="token operator">-&gt;</span>capacity <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;stack is full\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    stack<span class="token operator">-&gt;</span>top<span class="token operator">++</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>array<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 出栈</span>
<span class="token keyword">void</span> <span class="token function">pop</span><span class="token punctuation">(</span>P_Stack stack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token operator">-&gt;</span>top <span class="token operator">==</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;stack is empty\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> data <span class="token operator">=</span> stack<span class="token operator">-&gt;</span>array<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>top<span class="token punctuation">]</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>top<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    P_Stack stack <span class="token operator">=</span> <span class="token function">create_stack</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">pop</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">pop</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">pop</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),L=n("br",null,null,-1);function q(U,V){const a=c("center");return i(),l("div",null,[m,b,t(a,null,{default:p(()=>[s("图 1：栈")]),_:1}),_,f,g,y,t(a,null,{default:p(()=>[s("图 2：栈遵循先入后出")]),_:1}),h,t(a,null,{default:p(()=>[s("图 3：基于链表实现栈")]),_:1}),w,t(a,null,{default:p(()=>[s("code - 1：基于链表实现栈")]),_:1}),S,x,N,P,t(a,null,{default:p(()=>[s("图 4：基于数组实现栈")]),_:1}),z,t(a,null,{default:p(()=>[s("code - 2：基于数组实现栈")]),_:1}),L])}const C=o(v,[["render",q],["__file","index.html.vue"]]);export{C as default};

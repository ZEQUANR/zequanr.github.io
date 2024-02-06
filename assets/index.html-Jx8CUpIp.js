import{_ as o,r as i,o as l,c,d as a,w as t,e,a as p,b as n}from"./app-7QKrQFIj.js";const u="/assets/list-struct-VZxs9-Yb.svg",r="/assets/Go-List-Init-mGnXd3F4.svg",k="/assets/Go-List-insert-eOo_PpUw.svg",d={},m=p(`<p>今天给大家带来的是 Go 语言提供的内置容器 List，内部的实现原理是双链表，列表能够高效地进行任意位置的元素插入和删除操作。</p><h2 id="list-struct-element-struct" tabindex="-1"><a class="header-anchor" href="#list-struct-element-struct" aria-hidden="true">#</a> List struct &amp;&amp; Element struct</h2><p>老规矩我们先从数据结构中看起，从 code - 1 中我们可以看到 List 包中的数据结构一共有两个分别为 List 和 Element，通过这两个数据结构组成为 Go 语言提供的内置容器 List 结构，接下来就让我们去看一看这两个数据结构。</p><p>List 数据结构，当前数据结构中包含 root 和 len 两个字段，从注解中我们可以了解到 root 为“哨兵”列表元素，不算在当前 List 链表元素中且结构体中 len 的长度属性中不记录 root 节点。</p><p>Element 数据结构，当前数据结构中包含 next、prev、list 和 value 四个字段，Value 是与此元素一起存储的值这个不用多说，再来看 next 与 prev 为指针类型可以看出这是一个双向链表，再从注解中我们可以了解到 List 存在两种方法，分别为 Front() 方法代表当前 List 中第一个元素， Back() 方法代表当前 List 中最后一个元素，而 list 是一个始终指向当前 Element 所在 List 类型的指针。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/container/list/list.go</span>

<span class="token comment">// List represents a doubly linked list.</span>
<span class="token comment">// The zero value for List is an empty list ready to use.</span>
<span class="token keyword">type</span> List <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	root Element <span class="token comment">// sentinel list element, only &amp;root, root.prev, and root.next are used</span>
	<span class="token builtin">len</span>  <span class="token builtin">int</span>     <span class="token comment">// current list length excluding (this) sentinel element</span>
<span class="token punctuation">}</span>

<span class="token comment">// Element is an element of a linked list.</span>
<span class="token keyword">type</span> Element <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// Next and previous pointers in the doubly-linked list of elements.</span>
	<span class="token comment">// To simplify the implementation, internally a list l is implemented</span>
	<span class="token comment">// as a ring, such that &amp;l.root is both the next element of the last</span>
	<span class="token comment">// list element (l.Back()) and the previous element of the first list</span>
	<span class="token comment">// element (l.Front()).</span>
	next<span class="token punctuation">,</span> prev <span class="token operator">*</span>Element

	<span class="token comment">// The list to which this element belongs.</span>
	list <span class="token operator">*</span>List

	<span class="token comment">// The value stored with this element.</span>
	Value any
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=p(`<br><h2 id="next-prev" tabindex="-1"><a class="header-anchor" href="#next-prev" aria-hidden="true">#</a> Next &amp;&amp; Prev</h2><p>从刚刚的数据结构 code - 1 中我们已经发现 List 存在两种方法 Front() 方法与 Back() 方法，那在了解这两个方法之前，我们先来了解一下 Element 存在的两种方法 Next() 方法与 Prev() 方法，这可以帮助我们更好的理解接下来的方法。</p><p>Next() 与 Prev() ，想必听名字大家都可以猜到这两个方法的作用，分别是去寻找当前元素的下一个或上一个元素，所以这两个方法的逻辑是一致的，唯一值得注意的是在 code - 2 中 if 语句中除了判断当前元素的下一个或上一个元素是否存在外还需要判断是否等于 root 元素，也就是我们刚刚提到的“哨兵”列表元素。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/container/list/list.go</span>

<span class="token comment">// Next returns the next list element or nil.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>Element<span class="token punctuation">)</span> <span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	<span class="token keyword">if</span> p <span class="token operator">:=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span> e<span class="token punctuation">.</span>list <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> p <span class="token operator">!=</span> <span class="token operator">&amp;</span>e<span class="token punctuation">.</span>list<span class="token punctuation">.</span>root <span class="token punctuation">{</span>
		<span class="token keyword">return</span> p
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// Prev returns the previous list element or nil.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>Element<span class="token punctuation">)</span> <span class="token function">Prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	<span class="token keyword">if</span> p <span class="token operator">:=</span> e<span class="token punctuation">.</span>prev<span class="token punctuation">;</span> e<span class="token punctuation">.</span>list <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> p <span class="token operator">!=</span> <span class="token operator">&amp;</span>e<span class="token punctuation">.</span>list<span class="token punctuation">.</span>root <span class="token punctuation">{</span>
		<span class="token keyword">return</span> p
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),b=p(`<br><h2 id="front-back" tabindex="-1"><a class="header-anchor" href="#front-back" aria-hidden="true">#</a> Front &amp;&amp; Back</h2><p>接下来我们就来看看 Front() 方法与 Back() 方法，该方法的作用我们已经知道了，且因为这两个方法的逻辑是一致的，所以我们这里就不做区分，直接来来讲一下这两个方法的具体逻辑。</p><p>Front() 方法与 Back() 方法，需要先调用 Len() 方法获取 List 的具体长度进行判断如果等于 0 那么说明当前 LIst 可能只存在 root “哨兵”列表元素，那么之前也说过 root 不算在 List 元素中，故不存在第一个或最后一个元素，直接返回 nil，反之长度不等于 0 说明 List 中有元素存在即返回 root “哨兵”列表元素中所指向的元素。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/container/list/list.go</span>

<span class="token comment">// Len returns the number of elements of list l.</span>
<span class="token comment">// The complexity is O(1).</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token punctuation">}</span>

<span class="token comment">// Front returns the first element of list l or nil if the list is empty.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	<span class="token keyword">if</span> l<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

<span class="token comment">// Back returns the last element of list l or nil if the list is empty.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">Back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	<span class="token keyword">if</span> l<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>prev
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),f=n("br",null,null,-1),h=n("p",null,"通过刚刚前几个方法 Next() 方法与 Prev() 方法、Front() 方法与 Back() 方法，我们已经可以拼凑出 Go 语言提供的内置容器 List 结构的大致样子了。",-1),g=n("p",null,"通过 Element 结构体中 next、 prev 字段，我们可以知道这是一个双向链表。",-1),x=n("p",null,"通过 Next() 方法与 Prev() 方法，我们可以知道 List 中元素的 next 和 prev 字段是可以指向 root “哨兵”列表元素的。",-1),L=n("p",null,"通过 Front() 方法与 Back() 方法，我们可以知道 root “哨兵”列表元素的 next 和 prev 字段是指向 List 中的第一个和最后一个元素的。",-1),y=n("p",null,"通过刚刚整理的信息我们已经可以清楚的得出 List 其实是一个循环链表如图 1 所示，只不过从中抽象出一个元素将它定义为 root 代表一个位置标符，其本身不存储数据，不记录在当前链表长度中，不认作链表中的元素。",-1),w=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),_=p(`<br><h2 id="new-init" tabindex="-1"><a class="header-anchor" href="#new-init" aria-hidden="true">#</a> New &amp;&amp; Init</h2><p>通过刚刚的讲解想必大家已经对 List 有了一个清楚的认识，接下来我们开看看 New 函数是如何实现的，该函数的实现逻辑比较简单调用 Init() 方法返回了一个初始化的 List。</p><p>Init() 方法，将当前所传入的 List 中的 root “哨兵”列表元素中的 next、 prev 字段都指向自己，从而实现一个闭环，并且之前也说过 root 不记录在当前链表长度中，所以长度赋值为 0，完成初始化操作。</p><p>这里我们在来提及一下 lazyInit() 方法，因为在后面的方法中初始化操作使用的都是该方法，相比 Init() 方法我们可以发现该方法只是在 Init() 方法上套了一层 if 判断，还记得 code - 1 中所说的吗？List 的零值是一个可以使用的空列表，该方法只对 List 为零值状态时他才会进行 Init ，对于已经 Init 过的 List 则不会做任何操作。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/container/list/list.go</span>

<span class="token comment">// New returns an initialized list.</span>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>List <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">new</span><span class="token punctuation">(</span>List<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

<span class="token comment">// Init initializes or clears list l.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>List <span class="token punctuation">{</span>
	l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token operator">&amp;</span>l<span class="token punctuation">.</span>root
	l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token operator">&amp;</span>l<span class="token punctuation">.</span>root
	l<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">return</span> l
<span class="token punctuation">}</span>

<span class="token comment">// lazyInit lazily initializes a zero List value.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">lazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		l<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),E=n("br",null,null,-1),P=n("figure",null,[n("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),I=p(`<br><h2 id="insert-insertvalue" tabindex="-1"><a class="header-anchor" href="#insert-insertvalue" aria-hidden="true">#</a> insert &amp;&amp; insertValue</h2><p>insert() 方法，传入两个元素 e 与 at，然后在 at 之后插入 e，在增加 List 的长度加 1 并且返回 e，具体操作如图 3 所示。</p><p>insertValue() 方法，该方法就是 insert() 方法的封装，只不过把传入两个元素中的 e 换成了元素所要存储的值，而之前的 e 直接在函数方法中创建实例。</p><p>值得思考的是这些这两个方法都是 List 上的方法，且方法名均为小写说明这两个方法并不包外提供，只对包内其他方法所提供，那么如果 at 不是 LIst 上的元素，那么我们可以很清楚的知道 List 的元素并没有增加但 List 的长度的确是增加了，那怎么做又是为的什么？我们可以带着这个疑问继续往下看。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/container/list/list.go</span>

<span class="token comment">// insert inserts e after at, increments l.len, and returns e.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">insert</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> at <span class="token operator">*</span>Element<span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	e<span class="token punctuation">.</span>prev <span class="token operator">=</span> at
	e<span class="token punctuation">.</span>next <span class="token operator">=</span> at<span class="token punctuation">.</span>next
	e<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> e
	e<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> e
	e<span class="token punctuation">.</span>list <span class="token operator">=</span> l
	l<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token operator">++</span>
	<span class="token keyword">return</span> e
<span class="token punctuation">}</span>

<span class="token comment">// insertValue is a convenience wrapper for insert(&amp;Element{Value: v}, at).</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">insertValue</span><span class="token punctuation">(</span>v any<span class="token punctuation">,</span> at <span class="token operator">*</span>Element<span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	<span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Element<span class="token punctuation">{</span>Value<span class="token punctuation">:</span> v<span class="token punctuation">}</span><span class="token punctuation">,</span> at<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),F=n("br",null,null,-1),B=n("figure",null,[n("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),N=p(`<br><h2 id="insertbefore-insertafter" tabindex="-1"><a class="header-anchor" href="#insertbefore-insertafter" aria-hidden="true">#</a> InsertBefore &amp;&amp; InsertAfter</h2><p>InsertBefore() 方法与 InsertAfter() 方法，这两个方法的逻辑是一致的，一个是在当前元素之前插入一个值为 v 的新元素 e，并返回e，另一个则是在当前元素之后插入一个值为 v 的新元素 e，并返回 e，而且在这两个方法中的 if 语句中也解决了我们之前的疑问，如果所传入的 mark 元素不是 List 上的元素，则不修改 LIst。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/container/list/list.go</span>

<span class="token comment">// InsertBefore inserts a new element e with value v immediately before mark and returns e.</span>
<span class="token comment">// If mark is not an element of l, the list is not modified.</span>
<span class="token comment">// The mark must not be nil.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">InsertBefore</span><span class="token punctuation">(</span>v any<span class="token punctuation">,</span> mark <span class="token operator">*</span>Element<span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	<span class="token keyword">if</span> mark<span class="token punctuation">.</span>list <span class="token operator">!=</span> l <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// see comment in List.Remove about initialization of l</span>
	<span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token function">insertValue</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> mark<span class="token punctuation">.</span>prev<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// InsertAfter inserts a new element e with value v immediately after mark and returns e.</span>
<span class="token comment">// If mark is not an element of l, the list is not modified.</span>
<span class="token comment">// The mark must not be nil.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">InsertAfter</span><span class="token punctuation">(</span>v any<span class="token punctuation">,</span> mark <span class="token operator">*</span>Element<span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	<span class="token keyword">if</span> mark<span class="token punctuation">.</span>list <span class="token operator">!=</span> l <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// see comment in List.Remove about initialization of l</span>
	<span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token function">insertValue</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> mark<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),V=p(`<br><h2 id="pushfront-pushback" tabindex="-1"><a class="header-anchor" href="#pushfront-pushback" aria-hidden="true">#</a> PushFront &amp;&amp; PushBack</h2><p>PushFront() 方法与 PushBack() 方法，这两个方法的逻辑也是一致的，一个是在 List l 的前面插入一个值为 v 的新元素 e，并返回 e，另一个则是在 List l 的后面插入一个值为 v 的新元素 e，并返回 e，但在元素添加之前需要先调用 lazyInit() 方法，进行判断当前 List 是否为一个空列表，是的话先进行初始化操作在添加元素。</p><p>在 PushFront() 方法与 PushBack() 方法中我们可以看到 List 中的 root “哨兵”列表元素所展现的作用了，通过 root 元素我们可以很轻松的定位到 List 中的第一个元素和最后一个元素。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/container/list/list.go</span>

<span class="token comment">// PushFront inserts a new element e with value v at the front of list l and returns e.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">PushFront</span><span class="token punctuation">(</span>v any<span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	l<span class="token punctuation">.</span><span class="token function">lazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token function">insertValue</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token operator">&amp;</span>l<span class="token punctuation">.</span>root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// PushBack inserts a new element e with value v at the back of list l and returns e.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">PushBack</span><span class="token punctuation">(</span>v any<span class="token punctuation">)</span> <span class="token operator">*</span>Element <span class="token punctuation">{</span>
	l<span class="token punctuation">.</span><span class="token function">lazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token function">insertValue</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>prev<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),z=p(`<br><h2 id="pushbacklist-pushfrontlist" tabindex="-1"><a class="header-anchor" href="#pushbacklist-pushfrontlist" aria-hidden="true">#</a> <strong>PushBackList &amp;&amp; PushFrontList</strong></h2><p>PushBackList() 方法与 PushFrontList() 方法，这两个方法的逻辑与刚刚看到的 PushFront() 方法与 PushBack() 方法大致是一致的，只过是刚刚所看到的方式是插入一个元素，而现在这两个方式是通过对其传入的 LIst 进行遍历其中的元素依次调用 PushFront() 方法与 PushBack() 方法。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/container/list/list.go</span>

<span class="token comment">// PushBackList inserts a copy of another list at the back of list l.</span>
<span class="token comment">// The lists l and other may be the same. They must not be nil.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">PushBackList</span><span class="token punctuation">(</span>other <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	l<span class="token punctuation">.</span><span class="token function">lazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> e <span class="token operator">:=</span> other<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> other<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token punctuation">,</span> e <span class="token operator">=</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		l<span class="token punctuation">.</span><span class="token function">insertValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Value<span class="token punctuation">,</span> l<span class="token punctuation">.</span>root<span class="token punctuation">.</span>prev<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// PushFrontList inserts a copy of another list at the front of list l.</span>
<span class="token comment">// The lists l and other may be the same. They must not be nil.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token function">PushFrontList</span><span class="token punctuation">(</span>other <span class="token operator">*</span>List<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	l<span class="token punctuation">.</span><span class="token function">lazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> e <span class="token operator">:=</span> other<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> other<span class="token punctuation">.</span><span class="token function">Back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token punctuation">,</span> e <span class="token operator">=</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">Prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		l<span class="token punctuation">.</span><span class="token function">insertValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Value<span class="token punctuation">,</span> <span class="token operator">&amp;</span>l<span class="token punctuation">.</span>root<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),q=p(`<br><p>好了今天先带大家看到这里，下一章节带大家了解一下 Go 语言提供的内置容器 List 中的移动和删除操作，下面是一些测试代码 code - 9、code - 10，大家可以自行查看帮助理解。</p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;container/list&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;list: (%p)%#v\\n&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">,</span> list<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// list: (0xc000066150)</span>
<span class="token comment">// &amp;list.List{</span>
<span class="token comment">//     root:list.Element{</span>
<span class="token comment">//         next:(*list.Element)(0xc000066150),</span>
<span class="token comment">//         prev:(*list.Element)(0xc000066150),</span>
<span class="token comment">//         list:(*list.List)(nil), Value:interface {}(nil)</span>
<span class="token comment">//     },</span>
<span class="token comment">//     len:0</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),T=p(`<br><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;container/list&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    list<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    list<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    list<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;list: (%p)%#v\\n&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">,</span> list<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;list.Front(): (%p)%#v\\n&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;list.Front().Next(): (%p)%#v\\n&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;list.Front().Next().Next(): (%p)%#v\\n&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// list: (0xc00008c150)</span>
<span class="token comment">// &amp;list.List{</span>
<span class="token comment">//     root:list.Element{</span>
<span class="token comment">//         next:(*list.Element)(0xc00008c180),</span>
<span class="token comment">//         prev:(*list.Element)(0xc00008c1e0),</span>
<span class="token comment">//         list:(*list.List)(nil), Value:interface {}(nil)</span>
<span class="token comment">//     },</span>
<span class="token comment">//     len:3</span>
<span class="token comment">// }</span>

<span class="token comment">// list.Front(): (0xc00008c180)</span>
<span class="token comment">// &amp;list.Element{</span>
<span class="token comment">//     next:(*list.Element)(0xc00008c1b0),</span>
<span class="token comment">//     prev:(*list.Element)(0xc00008c150),</span>
<span class="token comment">//     list:(*list.List)(0xc00008c150),</span>
<span class="token comment">//     Value:1</span>
<span class="token comment">// }</span>

<span class="token comment">// list.Front().Next(): (0xc00008c1b0)</span>
<span class="token comment">// &amp;list.Element{</span>
<span class="token comment">//     next:(*list.Element)(0xc00008c1e0),</span>
<span class="token comment">//     prev:(*list.Element)(0xc00008c180),</span>
<span class="token comment">//     list:(*list.List)(0xc00008c150),</span>
<span class="token comment">//     Value:2</span>
<span class="token comment">// }</span>

<span class="token comment">// list.Front().Next().Next(): (0xc00008c1e0)</span>
<span class="token comment">// &amp;list.Element{</span>
<span class="token comment">//     next:(*list.Element)(0xc00008c150),</span>
<span class="token comment">//     prev:(*list.Element)(0xc00008c1b0),</span>
<span class="token comment">//     list:(*list.List)(0xc00008c150),</span>
<span class="token comment">//     Value:3</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),G=n("br",null,null,-1);function A(C,O){const s=i("center");return l(),c("div",null,[m,a(s,null,{default:t(()=>[e("code - 1：List && Element")]),_:1}),v,a(s,null,{default:t(()=>[e("code - 2：Next() 方法与 Prev() 方法")]),_:1}),b,a(s,null,{default:t(()=>[e("code - 3：Front() 方法与 Back() 方法")]),_:1}),f,h,g,x,L,y,w,a(s,null,{default:t(()=>[e("图 1：List 结构")]),_:1}),_,a(s,null,{default:t(()=>[e("code - 4：New 函数与 Init() 方法与 Back() 方法")]),_:1}),E,P,a(s,null,{default:t(()=>[e("图 2：Init() 方法")]),_:1}),I,a(s,null,{default:t(()=>[e("code - 5：insert() 方法与 insertValue() 方法")]),_:1}),F,B,a(s,null,{default:t(()=>[e("图 3：insert() 方法")]),_:1}),N,a(s,null,{default:t(()=>[e("code - 6：InsertBefore() 方法与 InsertAfter() 方法")]),_:1}),V,a(s,null,{default:t(()=>[e("code - 7：PushFront() 方法与 PushBack() 方法")]),_:1}),z,a(s,null,{default:t(()=>[e("code - 8：PushBackList() 方法与 PushFrontList() 方法")]),_:1}),q,a(s,null,{default:t(()=>[e("code - 9：空 LIst")]),_:1}),T,a(s,null,{default:t(()=>[e("code - 10：循环 LIst")]),_:1}),G])}const S=o(d,[["render",A],["__file","index.html.vue"]]);export{S as default};

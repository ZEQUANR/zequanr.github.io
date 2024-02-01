const e=JSON.parse('{"key":"v-721bd50b","path":"/Go/Slice/","title":"Slice","lang":"zh-CN","frontmatter":{"title":"Slice","icon":"iconoir:bread-slice","author":"王泽权","date":"2023-02-28T00:00:00.000Z","category":["Go"],"tag":["Go"],"sticky":true,"star":true,"copyright":"王泽权","description":"在上一篇中我们简单的了解了 slice ，在这一篇中我们将继续深入了解一下。 Slice 数据结构 首先我们先来看一下 Slice 的数据结构，从 code&nbsp;- 1** **中我们可以看到 Slice 是由 3 部分构成，首先第一是名为 unsafe.Pointer（通用指针类型） 类型的 array，从命名中我们可以得知它是一个指向 Array 的指针，其余两个皆为 int 类型分别为 len 和 cap 分别代表 Slice 当前的长度，另一个代表 Slice 当前的容量。 type slice struct { \\tarray unsafe.Pointer \\tlen int \\tcap int }","head":[["meta",{"property":"og:url","content":"https://zequanr.github.io/Go/Slice/"}],["meta",{"property":"og:site_name","content":"ZEQUANR"}],["meta",{"property":"og:title","content":"Slice"}],["meta",{"property":"og:description","content":"在上一篇中我们简单的了解了 slice ，在这一篇中我们将继续深入了解一下。 Slice 数据结构 首先我们先来看一下 Slice 的数据结构，从 code&nbsp;- 1** **中我们可以看到 Slice 是由 3 部分构成，首先第一是名为 unsafe.Pointer（通用指针类型） 类型的 array，从命名中我们可以得知它是一个指向 Array 的指针，其余两个皆为 int 类型分别为 len 和 cap 分别代表 Slice 当前的长度，另一个代表 Slice 当前的容量。 type slice struct { \\tarray unsafe.Pointer \\tlen int \\tcap int }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zequanr.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T09:54:30.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Slice"}],["meta",{"property":"article:author","content":"王泽权"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:published_time","content":"2023-02-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T09:54:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Slice\\",\\"image\\":[\\"https://zequanr.github.io/\\"],\\"datePublished\\":\\"2023-02-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T09:54:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"王泽权\\"}]}"]]},"headers":[{"level":2,"title":"Slice 数据结构","slug":"slice-数据结构","link":"#slice-数据结构","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Make","slug":"make","link":"#make","children":[]},{"level":2,"title":"Append","slug":"append","link":"#append","children":[]}],"git":{"createdTime":1706176470000,"updatedTime":1706176470000,"contributors":[{"name":"ZEQUANR","email":"675897584@qq.com","commits":1}]},"readingTime":{"minutes":5.17,"words":1550},"filePathRelative":"Go/Slice/README.md","localizedDate":"2023年2月28日","excerpt":"<p>在上一篇中我们简单的了解了 slice ，在这一篇中我们将继续深入了解一下。</p>\\n<h2> Slice 数据结构</h2>\\n<p>首先我们先来看一下 Slice 的数据结构，从 code&nbsp;- 1** **中我们可以看到 Slice 是由 3 部分构成，首先第一是名为 unsafe.Pointer（通用指针类型） 类型的 array，从命名中我们可以得知它是一个指向 Array 的指针，其余两个皆为 int 类型分别为 len 和 cap 分别代表 Slice 当前的长度，另一个代表 Slice 当前的容量。</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> slice <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n\\tarray unsafe<span class=\\"token punctuation\\">.</span>Pointer\\n\\t<span class=\\"token builtin\\">len</span>   <span class=\\"token builtin\\">int</span>\\n\\t<span class=\\"token builtin\\">cap</span>   <span class=\\"token builtin\\">int</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
const e=JSON.parse('{"key":"v-d0e11c2e","path":"/C/DataStructure/Queue/","title":"队列","lang":"zh-CN","frontmatter":{"title":"队列","icon":"fluent:people-queue-24-filled","author":"王泽权","date":"2024-01-04T00:00:00.000Z","category":["C"],"tag":["C","数据结构"],"sticky":true,"star":true,"copyright":"王泽权","description":"在计算机科学中，数据结构是软件开发的基础，它们负责组织和存储数据以优化算法性能。其中，队列是一种基础且广泛应用的线性数据结构，尤其在多任务处理、消息传递、操作系统调度等领域具有重要作用。本文将重点探讨如何在 C 语言中实现并操作队列。 队列的概念 队列（queue）遵循先进先出的原则，就像现实生活中排队等待服务的情景一样，最先到达的元素最先离开。 队列的常用操作 我们将队列头部称为“队首”，尾部称为“队尾”，队列有两个主要的操作：“入队”与“出队”，将把元素加入队尾的操作称为“入队”，删除队首元素的操作称为“出队”。","head":[["meta",{"property":"og:url","content":"https://zequanr.github.io/C/DataStructure/Queue/"}],["meta",{"property":"og:site_name","content":"ZEQUANR"}],["meta",{"property":"og:title","content":"队列"}],["meta",{"property":"og:description","content":"在计算机科学中，数据结构是软件开发的基础，它们负责组织和存储数据以优化算法性能。其中，队列是一种基础且广泛应用的线性数据结构，尤其在多任务处理、消息传递、操作系统调度等领域具有重要作用。本文将重点探讨如何在 C 语言中实现并操作队列。 队列的概念 队列（queue）遵循先进先出的原则，就像现实生活中排队等待服务的情景一样，最先到达的元素最先离开。 队列的常用操作 我们将队列头部称为“队首”，尾部称为“队尾”，队列有两个主要的操作：“入队”与“出队”，将把元素加入队尾的操作称为“入队”，删除队首元素的操作称为“出队”。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zequanr.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T07:40:36.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"队列"}],["meta",{"property":"article:author","content":"王泽权"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:published_time","content":"2024-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-21T07:40:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"队列\\",\\"image\\":[\\"https://zequanr.github.io/\\"],\\"datePublished\\":\\"2024-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-21T07:40:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"王泽权\\"}]}"]]},"headers":[{"level":2,"title":"队列的概念","slug":"队列的概念","link":"#队列的概念","children":[]},{"level":2,"title":"队列的常用操作","slug":"队列的常用操作","link":"#队列的常用操作","children":[]},{"level":2,"title":"队列的实现","slug":"队列的实现","link":"#队列的实现","children":[{"level":3,"title":"基于链表实现","slug":"基于链表实现","link":"#基于链表实现","children":[]},{"level":3,"title":"基于数组实现","slug":"基于数组实现","link":"#基于数组实现","children":[]}]},{"level":2,"title":"为什么要用模运算","slug":"为什么要用模运算","link":"#为什么要用模运算","children":[]}],"git":{"createdTime":1705822836000,"updatedTime":1705822836000,"contributors":[{"name":"ZEQUANR","email":"675897584@qq.com","commits":1}]},"readingTime":{"minutes":4.37,"words":1310},"filePathRelative":"C/DataStructure/Queue/README.md","localizedDate":"2024年1月4日","excerpt":"<p>在计算机科学中，数据结构是软件开发的基础，它们负责组织和存储数据以优化算法性能。其中，队列是一种基础且广泛应用的线性数据结构，尤其在多任务处理、消息传递、操作系统调度等领域具有重要作用。本文将重点探讨如何在 C 语言中实现并操作队列。</p>\\n<h2> 队列的概念</h2>\\n<p>队列（queue）遵循<strong>先进先出</strong>的原则，就像现实生活中排队等待服务的情景一样，最先到达的元素最先离开。</p>\\n<figure><figcaption></figcaption></figure>\\n<br>\\n<h2> 队列的常用操作</h2>\\n<p>我们将队列头部称为“队首”，尾部称为“队尾”，队列有两个主要的操作：“入队”与“出队”，将把元素加入队尾的操作称为“入队”，删除队首元素的操作称为“出队”。</p>","autoDesc":true}');export{e as data};
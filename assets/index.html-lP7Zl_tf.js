const t=JSON.parse('{"key":"v-328fed8a","path":"/C/AlgorithmTraining/BinarySearch/","title":"二分查找","lang":"zh-CN","frontmatter":{"title":"二分查找","icon":"tdesign:tree-square-dot-vertical","author":"王泽权","date":"2023-09-26T00:00:00.000Z","category":["C"],"tag":["C","算法训练"],"sticky":true,"star":true,"copyright":"王泽权","description":"给定一个拥有 n 个不同元素的有序（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。 当遇到这样的题目时我们就可以采用二分查找来完成，二分查找又称折半查找，是一种常见的查找算法，它的基本思想是将一个有序的数组按照中间值分成两个部分，然后判断目标值与中间值的大小关系，如果相等，则查找成功，如果目标值比中间值小，则在左半部分继续查找，如果目标值比中间值大，则在右半部分继续查找，直到找到目标值或者查找范围为空为止。 二分查找的具体实现过程如下： 设置查找范围的左右边界 left 和 right，分别指向数组的第一个元素和最后一个元素。","head":[["meta",{"property":"og:url","content":"https://zequanr.github.io/C/AlgorithmTraining/BinarySearch/"}],["meta",{"property":"og:site_name","content":"ZEQUANR"}],["meta",{"property":"og:title","content":"二分查找"}],["meta",{"property":"og:description","content":"给定一个拥有 n 个不同元素的有序（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。 当遇到这样的题目时我们就可以采用二分查找来完成，二分查找又称折半查找，是一种常见的查找算法，它的基本思想是将一个有序的数组按照中间值分成两个部分，然后判断目标值与中间值的大小关系，如果相等，则查找成功，如果目标值比中间值小，则在左半部分继续查找，如果目标值比中间值大，则在右半部分继续查找，直到找到目标值或者查找范围为空为止。 二分查找的具体实现过程如下： 设置查找范围的左右边界 left 和 right，分别指向数组的第一个元素和最后一个元素。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zequanr.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T09:09:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"二分查找"}],["meta",{"property":"article:author","content":"王泽权"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"算法训练"}],["meta",{"property":"article:published_time","content":"2023-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-21T09:09:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二分查找\\",\\"image\\":[\\"https://zequanr.github.io/\\"],\\"datePublished\\":\\"2023-09-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-21T09:09:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"王泽权\\"}]}"]]},"headers":[],"git":{"createdTime":1705828180000,"updatedTime":1705828180000,"contributors":[{"name":"ZEQUANR","email":"675897584@qq.com","commits":1}]},"readingTime":{"minutes":2.59,"words":778},"filePathRelative":"C/AlgorithmTraining/BinarySearch/README.md","localizedDate":"2023年9月26日","excerpt":"<p>给定一个拥有 n 个不同元素的有序（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。</p>\\n<p>当遇到这样的题目时我们就可以采用二分查找来完成，二分查找又称折半查找，是一种常见的查找算法，它的基本思想是将一个有序的数组按照中间值分成两个部分，然后判断目标值与中间值的大小关系，如果相等，则查找成功，如果目标值比中间值小，则在左半部分继续查找，如果目标值比中间值大，则在右半部分继续查找，直到找到目标值或者查找范围为空为止。</p>\\n<p>二分查找的具体实现过程如下：</p>\\n<ol>\\n<li>设置查找范围的左右边界 left 和 right，分别指向数组的第一个元素和最后一个元素。</li>\\n</ol>","autoDesc":true}');export{t as data};

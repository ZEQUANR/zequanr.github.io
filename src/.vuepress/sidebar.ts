import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/": ["/"],

  "/About/": "structure",

  "/FrontEnd/": [
    "",
    {
      text: "JavaScript",
      icon: "devicon:javascript",
      collapsible: true,
      link: "/FrontEnd/JavaScript/",
      children: [
        {
          text: "基础知识",
          // icon: "openmoji:brick",
          icon: "openmoji:drip-coffee-maker",
          collapsible: true,
          prefix: "/FrontEnd/JavaScript/Basic/",
          children: [
            "Deep copy and front copy",
            "File Blob FileReader ArrayBuffer Base64",
            "Closure",
          ],
        },
        {
          text: "DOM 操作与 BOM 接口",
          icon: "icon-park:network-tree",
          collapsible: true,
          children: [],
        },
        {
          text: "ES6+ 新特性",
          icon: "noto-v1:keycap-6",
          collapsible: true,
          children: [],
        },
        {
          text: "异步编程",
          // icon: "bitcoin-icons:channels-filled",
          icon: "bitcoin-icons:channels-outline",
          collapsible: true,
          children: [],
        },
        {
          text: "设计模式",
          icon: "icon-park:graphic-design",
          collapsible: true,
          // link: "/FrontEnd/JavaScript/DesignPattern/",
          children: [
            {
              text: "创建型设计模式",
              icon: "uil:create-dashboard",
              collapsible: true,
              // link: "/FrontEnd/JavaScript/DesignPattern/CreationalPatterns/",
              prefix: "/FrontEnd/JavaScript/DesignPattern/CreationalPatterns",
              children: ["ConstructorPattern", "PrototypePattern", "FactoryPattern", "AbstractFactoryPattern", "BuilderPattern", "SingletonPattern"],
            },
            {
              text: "结构型设计模式",
              icon: "simple-icons:instructure",
              collapsible: true,
              // link: "/FrontEnd/JavaScript/DesignPattern/StructuralPatterns/",
              prefix: "/FrontEnd/JavaScript/DesignPattern/StructuralPatterns",
              children: [],
            },
            {
              text: "行为型设计模式",
              icon: "fluent-mdl2:running",
              collapsible: true,
              // link: "/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/",
              prefix: "/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns",
              children: [],
            },
          ],
        },
        {
          text: "Web API 接口",
          icon: "icon-park:database-network-point",
          collapsible: true,
          children: [],
        },
        {
          text: "面向对象编程",
          icon: "icon-park:elephant",
          collapsible: true,
          children: [],
        },
        {
          text: "Demo",
          icon: "openmoji:chestnut",
          link: "/FrontEnd/JavaScript/Demo/",
        },
      ],
    },
    {
      text: "TypeScript",
      icon: "devicon:typescript",
      collapsible: true,
      children: [],
    },
    {
      text: "浏览器",
      icon: "icon-park:browser-safari",
      collapsible: true,
      children: [],
    },
    {
      text: "工程化",
      icon: "icon-park:projector-two",
      collapsible: true,
      children: [],
    },
    {
      text: "性能优化",
      icon: "icon-park:lightning",
      collapsible: true,
      children: [],
    },
    {
      text: "部署",
      icon: "noto:building-construction",
      collapsible: true,
      children: [],
    },
    {
      text: "HTML",
      icon: "devicon:html5",
      collapsible: true,
      children: [],
    },
    {
      text: "CSS",
      icon: "devicon:css3",
      collapsible: true,
      children: [],
    },
    {
      text: "Vue",
      icon: "devicon:vuejs",
      collapsible: true,
      children: [],
    },
    {
      text: "React",
      icon: "devicon:react",
      collapsible: true,
      children: [],
    },
    {
      text: "开源项目",
      icon: "logos:opensource",
      collapsible: true,
      children: [],
    },
  ],

  "/Go/": "structure",

  "/C/": [
    "",
    {
      text: "语言基础",
      icon: "openmoji:drip-coffee-maker",
      // collapsible: true,
      prefix: "/C/LanguageFoundation",
      children: ["MainFunction", "BasicSyntax", "Variable"],
    },
    {
      text: "数据结构",
      icon: "streamline:industry-innovation-and-infrastructure",
      // collapsible: true,
      prefix: "/C/DataStructure/",
      children: ["Array", "LinkedList", "Stack", "Queue", "BinaryTree"],
    },
    {
      text: "算法训练",
      icon: "icon-park:arithmetic-one",
      // collapsible: true,
      prefix: "/C/AlgorithmTraining/",
      children: ["BinarySearch", "Hanoi", "PrimeNumber"],
    },
    {
      text: "标准库",
      icon: "ion:file-tray",
      collapsible: true,
      prefix: "/C/StandardLibrary",
      children: ["stdio.h"],
    },
  ],

  "/Math/": "structure",

  "/Atlas/": "structure",

  "/Tool/": "structure",

  "/Memory/": "structure",

  "/Database/": [
    "",
    {
      text: "MySql",
      icon: "logos:mysql",
      collapsible: true,
      children: [],
    },
    {
      text: "MongoDB",
      icon: "skill-icons:mongodb",
      collapsible: true,
      children: [],
    },
  ],
})

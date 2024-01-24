---
title: 设计模式
icon: icon-park:graphic-design
article: false
---

JavaScript 中的设计模式种类丰富，它们根据功能和目的的不同，可以被分为三大类：

### [创建型设计模式](/FrontEnd/JavaScript/DesignPattern/CreationalPatterns/)
- [构造函数模式](/FrontEnd/JavaScript/DesignPattern/CreationalPatterns/ConstructorPattern)
    - 通过定义一个构造函数来初始化新对象的属性，并通过new关键字调用构造函数创建实例。
- [原型模式](/FrontEnd/JavaScript/DesignPattern/CreationalPatterns/PrototypePattern)
    - 通过复制现有对象来创建新对象，而不是每次都新建一个全新的实例。
- [工厂模式](/FrontEnd/JavaScript/DesignPattern/CreationalPatterns/FactoryPattern)
    - 提供一个接口用于创建一系列相关或依赖对象，而无需指定具体的类。
- [抽象工厂模式](/FrontEnd/JavaScript/DesignPattern/CreationalPatterns/AbstractFactoryPattern)
    - 提供一个接口，用于创建相关或依赖对象家族的工厂，而无需指定具体的产品类。
- [建造者模式](/FrontEnd/JavaScript/DesignPattern/CreationalPatterns/BuilderPattern)
    - 将复杂的构建过程与表示分离，使得相同的构建过程可以创建不同的表示。
- [单例模式](/FrontEnd/JavaScript/DesignPattern/CreationalPatterns/SingletonPattern)
    - 确保一个类只有一个实例，并提供全局访问点。

### [结构型设计模式](/FrontEnd/JavaScript/DesignPattern/StructuralPatterns/)
- [适配器模式](/FrontEnd/JavaScript/DesignPattern/StructuralPatterns/AdapterPattern)
    - 将一个类的接口转换成客户希望的另一个接口。使得原本由于接口不兼容而不能一起工作的类能够协同工作。
- [装饰器模式](/FrontEnd/JavaScript/DesignPattern/StructuralPatterns/DecoratorPattern)
    - 在运行时动态地向对象添加新的行为，同时保持类的单一职责原则。
- [代理模式](/FrontEnd/JavaScript/DesignPattern/StructuralPatterns/ProxyPattern)
    - 为其他对象提供一种代理以控制对这个对象的访问。
- [外观模式](/FrontEnd/JavaScript/DesignPattern/StructuralPatterns/FacadePattern)
    - 提供了一个统一的接口，用来访问子系统中的一群接口。
- [桥接模式](/FrontEnd/JavaScript/DesignPattern/StructuralPatterns/BridgePattern)
    - 将抽象部分与它的实现部分分离，使它们都可以独立地变化。
- [组合模式](/FrontEnd/JavaScript/DesignPattern/StructuralPatterns/CompositePattern)
    - 允许你将对象组合成树形结构来表现“整体-部分”的层次结构。

### [行为型设计模式](/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/)
- [策略模式](/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/StrategyPattern)
    - 定义了一系列算法，并将每个算法封装起来，让它们可以互相替换。
- [模板方法模式](/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/TemplateMethodPattern)
    - 在一个抽象类中定义一个操作中的框架，而将一些步骤延迟到子类中实现。
- [观察者模式](/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/ObserverPattern)
    - 多个对象间存在一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并自动更新。
- [发布-订阅模式](/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/PublishSubscribePattern)
    - 也称为事件驱动模式，它解耦了事件的生产者和消费者，通常通过事件中心或者消息队列来处理异步通信。
- [状态模式](/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/StatePattern)
    - 允许一个对象在其内部状态改变时改变其行为。
- [迭代器模式](/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/IteratorPattern)
    - 提供一种方法顺序访问聚合对象的元素，而又不暴露其底层表示。
- [责任链模式](/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/ChainOfResponsibilityPattern)
    - 使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。
- [命令模式](/FrontEnd/JavaScript/DesignPattern/BehavioralPatterns/CommandPattern)
    - 将一个请求封装为一个对象，从而使用户能够参数化其他对象的方法调用、排队或记录请求。

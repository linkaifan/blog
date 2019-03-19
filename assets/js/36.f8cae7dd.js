(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{214:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"单例模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单例模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 单例模式")]),s._v(" "),n("ul",[n("li",[s._v("概念：保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。")]),s._v(" "),n("li",[s._v("实现：")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" SingletonTester "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[s._v("//参数：传递给单例的一个参数集合")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("Singleton")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      name "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'SingletonTester'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      pointX "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("6")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      pointY "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("10")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[s._v("//设置args变量为接收的参数或者为空（如果没有提供的话）")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("//设置name参数")]),s._v("\n        "),n("span",{attrs:{class:"token keyword"}},[s._v("this")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" name"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("//设置pointX的值")]),s._v("\n        "),n("span",{attrs:{class:"token keyword"}},[s._v("this")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pointX "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" pointX \n        "),n("span",{attrs:{class:"token comment"}},[s._v("//设置pointY的值")]),s._v("\n        "),n("span",{attrs:{class:"token keyword"}},[s._v("this")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pointY "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" pointY \n\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[s._v("//实例容器")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" instance"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" _static "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        name"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'SingletonTester'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[s._v("//获取实例的方法")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("//返回Singleton的实例")]),s._v("\n        getInstance"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance "),n("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" undefined"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                instance "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[s._v("Singleton")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" _static"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" singletonTest "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" SingletonTester"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getInstance\nconsole"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("log")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("singletonTest"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pointX"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("ul",[n("li",[s._v("应用：")])])])}],!1,null,null,null);e.options.__file="singleton.md";t.default=e.exports}}]);
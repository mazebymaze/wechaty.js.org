(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),c=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,O=s["".concat(b,".").concat(m)]||s[m]||d[m]||o;return a?c.a.createElement(O,r(r({ref:t},l),{},{components:a})):c.a.createElement(O,r({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,b=new Array(o);b[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:n,b[1]=r;for(var l=2;l<o;l++)b[l]=a[l];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),c=a(6),o=(a(0),a(142)),b={title:"Contact"},r={unversionedId:"api/contact",id:"api/contact",isDocsHomePage:!1,title:"Contact",description:"All wechat contacts(friend) will be encapsulated as a Contact.",source:"@site/docs/api/contact.md",slug:"/api/contact",permalink:"/docs/api/contact",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/contact.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1598942723,sidebar:"docs",previous:{title:"Message",permalink:"/docs/api/message"},next:{title:"Room",permalink:"/docs/api/room"}},i=[{value:"Classes",id:"classes",children:[]},{value:"Typedefs",id:"typedefs",children:[]},{value:"Contact",id:"contact",children:[{value:"contact.say(textOrContactOrFileOrUrlLinkOrMiniProgram) \u21d2 <code>Promise &lt;void&gt;</code>",id:"contactsaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void",children:[]},{value:"contact.name() \u21d2 <code>string</code>",id:"contactname-\u21d2-string",children:[]},{value:"contact.alias(newAlias) \u21d2 <code>Promise &lt;null | string | void&gt;</code>",id:"contactaliasnewalias-\u21d2-promise-null--string--void",children:[]},{value:"contact.friend() \u21d2 <code>boolean</code> | <code>null</code>",id:"contactfriend-\u21d2-boolean--null",children:[]},{value:"contact.type() \u21d2 <code>ContactType.Unknown</code> | <code>ContactType.Personal</code> | <code>ContactType.Official</code>",id:"contacttype-\u21d2-contacttypeunknown--contacttypepersonal--contacttypeofficial",children:[]},{value:"contact.gender() \u21d2 <code>ContactGender.Unknown</code> | <code>ContactGender.Male</code> | <code>ContactGender.Female</code>",id:"contactgender-\u21d2-contactgenderunknown--contactgendermale--contactgenderfemale",children:[]},{value:"contact.province() \u21d2 <code>string</code> | <code>null</code>",id:"contactprovince-\u21d2-string--null",children:[]},{value:"contact.city() \u21d2 <code>string</code> | <code>null</code>",id:"contactcity-\u21d2-string--null",children:[]},{value:"contact.avatar() \u21d2 <code>Promise &lt;FileBox&gt;</code>",id:"contactavatar-\u21d2-promise-filebox",children:[]},{value:"contact.sync() \u21d2 <code>Promise &lt;void&gt;</code>",id:"contactsync-\u21d2-promise-void",children:[]},{value:"contact.self() \u21d2 <code>boolean</code>",id:"contactself-\u21d2-boolean",children:[]},{value:"Contact.find(query) \u21d2 <code>Promise &lt;Contact | null&gt;</code>",id:"contactfindquery-\u21d2-promise-contact--null",children:[]},{value:"Contact.findAll([queryArg]) \u21d2 <code>Promise &lt;Contact []&gt;</code>",id:"contactfindallqueryarg-\u21d2-promise-contact-",children:[]}]},{value:"ContactQueryFilter",id:"contactqueryfilter",children:[]}],l={rightToc:i};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All wechat contacts(friend) will be encapsulated as a Contact."),Object(o.b)("h2",{id:"classes"},"Classes"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),"Contact")),Object(o.b)("p",null,"All wechat contacts","(","friend",")"," will be encapsulated as a Contact. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/contact-bot.ts"}),"Examples/Contact-Bot")),Object(o.b)("h2",{id:"typedefs"},"Typedefs"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#ContactQueryFilter"}),"ContactQueryFilter")),Object(o.b)("p",null,"The way to search Contact"),Object(o.b)("h2",{id:"contact"},"Contact"),Object(o.b)("p",null,"All wechat contacts","(","friend",")"," will be encapsulated as a Contact. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/contact-bot.ts"}),"Examples/Contact-Bot")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": global class ",Object(o.b)("strong",{parentName:"p"},"Properties")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"id"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get Contact id. This function is depending on the Puppet Implementation, see ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"}),"puppet-compatible-table"))))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact"}),"Contact"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"instance"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+say"}),".say","(","textOrContactOrFileOrUrl",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <void>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+name"}),".name","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"string")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+alias"}),".alias","(","newAlias",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <null | string | void>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+friend"}),".friend","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"null")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+type"}),".type","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"ContactType.Unknown")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"ContactType.Personal")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"ContactType.Official")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+gender"}),".gender","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"ContactGender.Unknown")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"ContactGender.Male")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"ContactGender.Female")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+province"}),".province","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"string")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"null")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+city"}),".city","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"string")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"null")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+avatar"}),".avatar","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <FileBox>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+sync"}),".sync","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <void>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact+self"}),".self","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"static"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact.find"}),".find","(","query",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <Contact | null>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact#Contact.findAll"}),".findAll","(","[","queryArg","]",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <Contact []>"))))))),Object(o.b)("h3",{id:"contactsaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void"},"contact.say","(","textOrContactOrFileOrUrlLinkOrMiniProgram",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"}),"puppet-compatible-table"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"textOrContactOrFileOrUrlLinkOrMiniProgram"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"FileBox")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"UrlLink")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"MiniProgram")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"send text, Contact, file or UrlLink to contact.   You can use ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.npmjs.com/package/file-box"}),"FileBox")," to send file")))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { FileBox }  from 'file-box'\nimport {\n  Wechaty,\n  UrlLink,\n  MiniProgram,\n}  from 'wechaty'\n\nconst bot = new Wechaty()\nawait bot.start()\nconst contact = await bot.Contact.find({name: 'lijiarui'})  // change 'lijiarui' to any of your contact name in wechat\n\n// 1. send text to contact\n\nawait contact.say('welcome to wechaty!')\n\n// 2. send media file to contact\n\nimport { FileBox }  from 'file-box'\nconst fileBox1 = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\nconst fileBox2 = FileBox.fromFile('/tmp/text.txt')\nawait contact.say(fileBox1)\nawait contact.say(fileBox2)\n\n// 3. send contact card to contact\n\nconst contactCard = bot.Contact.load('contactId')\nawait contact.say(contactCard)\n\n// 4. send url link to contact\n\nconst urlLink = new UrlLink({\n  description : 'WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love',\n  thumbnailUrl: 'https://avatars0.githubusercontent.com/u/25162437?s=200&v=4',\n  title       : 'Welcome to Wechaty',\n  url         : 'https://github.com/wechaty/wechaty',\n})\nawait contact.say(urlLink)\n\n// 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)\n\nconst miniProgram = new MiniProgram ({\n  appid              : 'gh_0aa444a25adc',\n  title              : '\u6211\u6b63\u5728\u4f7f\u7528Authing\u8ba4\u8bc1\u8eab\u4efd\uff0c\u4f60\u4e5f\u6765\u8bd5\u8bd5\u5427',\n  pagePath           : 'routes/explore.html',\n  description        : '\u8eab\u4efd\u7ba1\u5bb6',\n  thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',\n  thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',\n});\n\nawait contact.say(miniProgram);\n")),Object(o.b)("h3",{id:"contactname-\u21d2-string"},"contact.name","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"string")),Object(o.b)("p",null,"Get the name from a contact"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const name = contact.name()\n")),Object(o.b)("h3",{id:"contactaliasnewalias-\u21d2-promise-null--string--void"},"contact.alias","(","newAlias",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <null | string | void>")),Object(o.b)("p",null,"GET / SET / DELETE the alias for a contact"),Object(o.b)("p",null,"Tests show it will failed if set alias too frequently","(","60 times in one minute",")","."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"newAlias"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"none")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"null"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")," ",Object(o.b)("em",{parentName:"p"},"("," GET the alias for a contact, return {","(","Promise","<","string ","|"," null",">",")","}",")")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const alias = await contact.alias()\nif (alias === null) {\n  console.log('You have not yet set any alias for contact ' + contact.name())\n} else {\n  console.log('You have already set an alias for contact ' + contact.name() + ':' + alias)\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")," ",Object(o.b)("em",{parentName:"p"},"(","SET the alias for a contact",")")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"try {\n  await contact.alias('lijiarui')\n  console.log(`change ${contact.name()}'s alias successfully!`)\n} catch (e) {\n  console.log(`failed to change ${contact.name()} alias!`)\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")," ",Object(o.b)("em",{parentName:"p"},"(","DELETE the alias for a contact",")")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"try {\n  const oldAlias = await contact.alias(null)\n  console.log(`delete ${contact.name()}'s alias successfully!`)\n  console.log(`old alias is ${oldAlias}`)\n} catch (e) {\n  console.log(`failed to delete ${contact.name()}'s alias!`)\n}\n")),Object(o.b)("h3",{id:"contactfriend-\u21d2-boolean--null"},"contact.friend","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"boolean")," ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"null")),Object(o.b)("p",null,"Check if contact is friend"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"}),"puppet-compatible-table"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Returns"),": ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",Object(o.b)("inlineCode",{parentName:"p"},"null")," - True for friend of the bot False for not friend of the bot, null for unknown. ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const isFriend = contact.friend()\n")),Object(o.b)("h3",{id:"contacttype-\u21d2-contacttypeunknown--contacttypepersonal--contacttypeofficial"},"contact.type","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"ContactType.Unknown")," ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"ContactType.Personal")," ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"ContactType.Official")),Object(o.b)("p",null,"Return the type of the Contact"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: ContactType is enum here.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nawait bot.start()\nconst isOfficial = contact.type() === bot.Contact.Type.Official\n")),Object(o.b)("h3",{id:"contactgender-\u21d2-contactgenderunknown--contactgendermale--contactgenderfemale"},"contact.gender","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"ContactGender.Unknown")," ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"ContactGender.Male")," ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"ContactGender.Female")),Object(o.b)("p",null,"Contact gender"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: ContactGender is enum here.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const gender = contact.gender() === bot.Contact.Gender.Male\n")),Object(o.b)("h3",{id:"contactprovince-\u21d2-string--null"},"contact.province","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"string")," ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"null")),Object(o.b)("p",null,"Get the region 'province' from a contact"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const province = contact.province()\n")),Object(o.b)("h3",{id:"contactcity-\u21d2-string--null"},"contact.city","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"string")," ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"null")),Object(o.b)("p",null,"Get the region 'city' from a contact"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const city = contact.city()\n")),Object(o.b)("h3",{id:"contactavatar-\u21d2-promise-filebox"},"contact.avatar","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <FileBox>")),Object(o.b)("p",null,"Get avatar picture file stream"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Save avatar to local file like `1-name.jpg`\n\nconst file = await contact.avatar()\nconst name = file.name\nawait file.toFile(name, true)\nconsole.log(`Contact: ${contact.name()} with avatar file: ${name}`)\n")),Object(o.b)("h3",{id:"contactsync-\u21d2-promise-void"},"contact.sync","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(o.b)("p",null,"Force reload data for Contact, Sync data from lowlevel API again."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"await contact.sync()\n")),Object(o.b)("h3",{id:"contactself-\u21d2-boolean"},"contact.self","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"boolean")),Object(o.b)("p",null,"Check if contact is self"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Returns"),": ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")," - True for contact is self, False for contact is others ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const isSelf = contact.self()\n")),Object(o.b)("h3",{id:"contactfindquery-\u21d2-promise-contact--null"},"Contact.find","(","query",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <Contact | null>")),Object(o.b)("p",null,"Try to find a contact by filter: {name: string ","|"," RegExp} / {alias: string ","|"," RegExp}"),Object(o.b)("p",null,"Find contact by name or alias, if the result more than one, return the first one."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))," ",Object(o.b)("strong",{parentName:"p"},"Returns"),": ",Object(o.b)("inlineCode",{parentName:"p"},"Promise.")," - If can find the contact, return Contact, or return null"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"query"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/contact#ContactQueryFilter"}),Object(o.b)("inlineCode",{parentName:"a"},"ContactQueryFilter")))))),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const bot = new Wechaty()\nawait bot.start()\nconst contactFindByName = await bot.Contact.find({ name:"ruirui"} )\nconst contactFindByAlias = await bot.Contact.find({ alias:"lijiarui"} )\n')),Object(o.b)("h3",{id:"contactfindallqueryarg-\u21d2-promise-contact-"},"Contact.findAll","(","[","queryArg","]",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <Contact []>")),Object(o.b)("p",null,"Find contact by ",Object(o.b)("inlineCode",{parentName:"p"},"name")," or ",Object(o.b)("inlineCode",{parentName:"p"},"alias")),Object(o.b)("p",null,"If use Contact.findAll","(",")"," get the contact list of the bot. Include the contacts from bot's rooms."),Object(o.b)("h4",{id:"definition"},"definition"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name"),"   the name-string set by user-self, should be called name"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"alias"),"  the name-string set by bot for others, should be called alias")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact#Contact"}),Object(o.b)("inlineCode",{parentName:"a"},"Contact"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"queryArg"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/contact#ContactQueryFilter"}),Object(o.b)("inlineCode",{parentName:"a"},"ContactQueryFilter")))))),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nawait bot.start()\nconst contactList = await bot.Contact.findAll()                      // get the contact list of the bot\nconst contactList = await bot.Contact.findAll({ name: 'ruirui' })    // find all of the contacts whose name is 'ruirui'\nconst contactList = await bot.Contact.findAll({ alias: 'lijiarui' }) // find all of the contacts whose alias is 'lijiarui'\n")),Object(o.b)("h2",{id:"contactqueryfilter"},"ContactQueryFilter"),Object(o.b)("p",null,"The way to search Contact"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": global typedef ",Object(o.b)("strong",{parentName:"p"},"Properties")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name-string set by user-self, should be called name")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"alias"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name-string set by bot for others, should be called alias ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty/issues/365"}),"More Detail"))))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkstarknet_docs=self.webpackChunkstarknet_docs||[]).push([[641],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),h=l(t),k=s,N=h["".concat(i,".").concat(k)]||h[k]||c[k]||m;return t?n.createElement(N,r(r({ref:a},o),{},{components:t})):n.createElement(N,r({ref:a},o))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,r=new Array(m);r[0]=h;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6325:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return h}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),r=["components"],p={},i="StarkNet Events",l={unversionedId:"Events/starknet-events",id:"Events/starknet-events",title:"StarkNet Events",description:"A contract may emit events throughout its execution. Each event contains the following fields:",source:"@site/docs/Events/starknet-events.md",sourceDirName:"Events",slug:"/Events/starknet-events",permalink:"/docs/Events/starknet-events",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Events/starknet-events.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"On-Chain Data",permalink:"/docs/Data Availabilty/on-chain-data"},next:{title:"Fee Mechanism",permalink:"/docs/Fees/fee-mechanism"}},o=[{value:"Emitting events",id:"emitting-events",children:[],level:2},{value:"Event ABI",id:"event-abi",children:[],level:2},{value:"Event hash",id:"event-hash",children:[],level:2}],c={toc:o};function h(e){var a=e.components,t=(0,s.Z)(e,r);return(0,m.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"starknet-events"},"StarkNet Events"),(0,m.kt)("p",null,"A contract may emit events throughout its execution. Each event contains the following fields:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"from_address"),": address of the contract emitting the events"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"keys"),": a list of field elements"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"data"),": a list of field elements")),(0,m.kt)("p",null,"The keys can be used for indexing the events, while the data may contain any information that we wish to log (note that we are dealing with two separate lists of possibly varying size, rather than a list of key-value pairs)."),(0,m.kt)("h2",{id:"emitting-events"},"Emitting events"),(0,m.kt)("p",null,"Events can be defined in a contract using the ",(0,m.kt)("inlineCode",{parentName:"p"},"@event")," decorator. Once an event ",(0,m.kt)("inlineCode",{parentName:"p"},"E")," has been defined, the compiler automatically adds the function ",(0,m.kt)("inlineCode",{parentName:"p"},"E.emit()"),". The following example illustrates how an event is defined and emitted:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"@event\nfunc message_received(a : felt, b: felt):\nend\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"message_received.emit(1, 2);\n")),(0,m.kt)("p",null,"The emit function emits an event with a single key, which is an identifier of the event, given by ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mtext",{parentName:"mrow"},"sn_keccak(event_name)")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{sn\\_keccak(event\\_name)}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"sn_keccak(event_name)")))))),", where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mtext",{parentName:"mrow"},"event_name")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{event\\_name}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9250799999999999em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"event_name"))))))," is the ASCII encoding of the event\u2019s name and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mtext",{parentName:"mrow"},"sn_keccak")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{sn\\_keccak}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.00444em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"sn_keccak"))))))," is defined ",(0,m.kt)("a",{parentName:"p",href:"../Hashing/hash-functions#starknet-keccak"},"here"),". To emit custom keys, one should use the low level ",(0,m.kt)("inlineCode",{parentName:"p"},"emit_event")," system call:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"from starkware.starknet.common.syscalls import emit_event\n\n# ...\n\nlet (keys : felt*) = alloc()\nassert keys[0] = 'status'\nassert keys[1] = 'deposit'\nlet (data : felt*) = alloc()\nassert data[0] = 1\nassert data[1] = 2\nassert data[2] = 3\nemit_event(2, keys, 3, data)\n")),(0,m.kt)("p",null,"The above code emits an event with two keys, the ",(0,m.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/how_cairo_works/consts.html#short-string-literals"},"strings"),' "status" and "deposit" (think of those as identifiers of the event that can be used for indexing) and three data elments 1, 2, 3.'),(0,m.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"When using the higher level ",(0,m.kt)("inlineCode",{parentName:"p"},"emit")," syntax, the event's data may be of complex types, for example:"),(0,m.kt)("pre",{parentName:"div"},(0,m.kt)("code",{parentName:"pre",className:"language-js"},"struct Point:\n    member x : felt\n    member y : felt\nend\n\n@event\nfunc message_received(arr_len : felt, arr: felt*, p: Point):\nend\n\n# ...\n\nlet (data : felt*) = alloc()\nassert data[0] = 1\nassert data[1] = 2\nlet p = Point(3,4)\nmessage_received.emit(2, data, p)\n")))),(0,m.kt)("p",null,"The emitted events are part of the ",(0,m.kt)("a",{parentName:"p",href:"../Blocks/transaction-life-cycle#transaction-receipt"},"transaction receipt"),"."),(0,m.kt)("h2",{id:"event-abi"},"Event ABI"),(0,m.kt)("p",null,"The event definition appears in the contract\u2019s ABI. It contains the list of data fields (name and type) and the list of the custom keys (that is, all keys except the event identifier discussed above). Below is an example of an event inside the ABI:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "name": "a",\n      "type": "felt"\n    },\n    {\n      "name": "b",\n      "type": "felt"\n    }\n  ],\n  "keys": [],\n  "name": "message_received",\n  "type": "event"\n}\n')),(0,m.kt)("h2",{id:"event-hash"},"Event hash"),(0,m.kt)("p",null,"The event hash is given by:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"0"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mtext",{parentName:"mrow"},"from_address"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mtext",{parentName:"mrow"},"keys_hash"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mtext",{parentName:"mrow"},"data_hash"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h(h(h(h(0,\\text{from\\_address}),\\text{keys\\_hash}),\\text{data\\_hash}),3)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.06em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"from_address")),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"keys_hash")),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"data_hash")),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("p",null,"Where:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mtext",{parentName:"mrow"},"keys_hash")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{keys\\_hash}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.00444em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"keys_hash")))))),", ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mtext",{parentName:"mrow"},"data_hash")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{data\\_hash}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.00444em",verticalAlign:"-0.31em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"data_hash"))))))," are the hashes of the keys list and data list correspondingly (see ",(0,m.kt)("a",{parentName:"li",href:"../Hashing/hash-functions#array-hashing"},"array hashing"),")."),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"h")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," is the ",(0,m.kt)("a",{parentName:"li",href:"../Hashing/hash-functions#pedersen-hash"},"pedersen")," hash function")),(0,m.kt)("p",null,"The event hashes are included in the ",(0,m.kt)("a",{parentName:"p",href:"../Blocks/header#event_commitment"},(0,m.kt)("inlineCode",{parentName:"a"},"event_commitment"))," field of a block."))}h.isMDXComponent=!0}}]);
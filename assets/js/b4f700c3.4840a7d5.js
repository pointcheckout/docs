"use strict";(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[2513],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),p=o,d=f["".concat(u,".").concat(p)]||f[p]||m[p]||i;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},44996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return c}});var n=r(52263),o=r(13919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,a=void 0!==c&&c,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(a)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(i,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},74966:function(e,t,r){var n=r(67294),o=r(44996);t.Z=function(e){var t=e.children,r=e.image,i=e.link,c=e.action;return n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,t)),n.createElement("div",{className:"card__image"},n.createElement("img",{src:(0,o.Z)(r),alt:"Image alt text",title:"Logo Title Text 1"})),n.createElement("div",{className:"card__footer"},n.createElement("a",{className:"button button--primary button--block",href:(0,o.Z)(i)},c)))}},99060:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=r(74966),a=["components"],u={title:"E-Commerce Plugins",sidebar_label:"Overview",slug:"/integrate/ecomm"},l=void 0,s={unversionedId:"integrate/ecomm/index",id:"integrate/ecomm/index",isDocsHomePage:!1,title:"E-Commerce Plugins",description:"We offer a range of plugins for leading technology solutions to give your shoppers the best checkout experience. Our plugins are easy to integrate and come with PointCheckout payments platform functionality delivered out of the box.",source:"@site/docs/1-integrate/1-ecomm/0-index.mdx",sourceDirName:"1-integrate/1-ecomm",slug:"/integrate/ecomm",permalink:"/docs/integrate/ecomm",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"E-Commerce Plugins",sidebar_label:"Overview",slug:"/integrate/ecomm"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/"},next:{title:"OpenCart",permalink:"/docs/integrate/ecomm/opencart"}},m=[{value:"Built by PointCheckout",id:"built-by-pointcheckout",children:[]}],f={toc:m};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We offer a range of plugins for leading technology solutions to give your shoppers the best checkout experience. Our plugins are easy to integrate and come with PointCheckout payments platform functionality delivered out of the box."),(0,i.kt)("h2",{id:"built-by-pointcheckout"},"Built by PointCheckout"),(0,i.kt)("div",{class:"row"},(0,i.kt)("div",{class:"col col--3"},(0,i.kt)(c.Z,{image:"/img/docs/integrate/ecomm/opencart/opencart.svg",link:"/docs/integrate/ecomm/opencart",action:"view guide",mdxType:"Card"})),(0,i.kt)("div",{class:"col col--3"},(0,i.kt)(c.Z,{image:"/img/docs/integrate/ecomm/shopify/shopify.svg",link:"/docs/integrate/ecomm/shopify",action:"view guide",mdxType:"Card"})),(0,i.kt)("div",{class:"col col--3"},(0,i.kt)(c.Z,{image:"/img/docs/integrate/ecomm/woocommerce/woocommerce.svg",link:"/docs/integrate/ecomm/woocommerce",action:"view guide",mdxType:"Card"}))))}p.isMDXComponent=!0}}]);
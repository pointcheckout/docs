"use strict";(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[1460],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=i,p=m["".concat(c,".").concat(f)]||m[f]||d[f]||o;return r?n.createElement(p,a(a({ref:t},u),{},{components:r})):n.createElement(p,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},4996:function(e,t,r){r.d(t,{C:function(){return o},Z:function(){return a}});var n=r(2263),i=r(3919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,s=void 0!==a&&a,c=o.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(s)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4966:function(e,t,r){var n=r(7294),i=r(4996);t.Z=function(e){var t=e.children,r=e.image,o=e.link,a=e.action;return n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,t)),n.createElement("div",{className:"card__image"},n.createElement("img",{src:(0,i.Z)(r),alt:"Image alt text",title:"Logo Title Text 1"})),n.createElement("div",{className:"card__footer"},n.createElement("a",{className:"button button--primary button--block",href:(0,i.Z)(o)},a)))}},5845:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=r(4966),s=["components"],c={title:"SDKs",sidebar_label:"Overview",slug:"/integrate/sdks"},l=void 0,u={unversionedId:"integrate/sdks/index",id:"integrate/sdks/index",isDocsHomePage:!1,title:"SDKs",description:"Our software development kits remove the need to handle sensitive data by enabling you to process payments and transactions in the same secure way as Frames and Hosted Payments.",source:"@site/docs/1-integrate/2-sdks/0-index.mdx",sourceDirName:"1-integrate/2-sdks",slug:"/integrate/sdks",permalink:"/docs/integrate/sdks",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SDKs",sidebar_label:"Overview",slug:"/integrate/sdks"},sidebar:"docs",previous:{title:"WooCommerce",permalink:"/docs/integrate/ecomm/woocommerce"},next:{title:"iOS SDK",permalink:"/docs/integrate/sdks/ios"}},d=[{value:"Mobile SDK libraries",id:"mobile-sdk-libraries",children:[]}],m={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Our software development kits remove the need to handle sensitive data by enabling you to process payments and transactions in the same secure way as Frames and Hosted Payments."),(0,o.kt)("h2",{id:"mobile-sdk-libraries"},"Mobile SDK libraries"),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)(a.Z,{image:"/img/docs/integrate/sdks/android-logo.svg",link:"/docs/integrate/sdks/android",action:"Android",mdxType:"Card"},"Android")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)(a.Z,{image:"/img/docs/integrate/sdks/ios-logo.svg",link:"/docs/integrate/sdks/ios",action:"iOS",mdxType:"Card"},"iOS"))))}f.isMDXComponent=!0}}]);
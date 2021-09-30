"use strict";(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[7359],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46558:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Get checkout details",slug:"details"},u=void 0,l={unversionedId:"build/manage/details",id:"build/manage/details",isDocsHomePage:!1,title:"Get checkout details",description:"API calls made to the PointCheckout API endpoints should be made from your server. You should NEVER include your API keys in your mobile application. A mallicious user can gain access to your account if those keys are exposed.",source:"@site/docs/3-build/1-manage/0-details.md",sourceDirName:"3-build/1-manage",slug:"/build/manage/details",permalink:"/docs/build/manage/details",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Get checkout details",slug:"details"},sidebar:"docs",previous:{title:"Customer Subscriptions",permalink:"/docs/build/initiate/subscriptions"},next:{title:"Cancel unpaid checkout",permalink:"/docs/build/manage/cancel"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"SERVER API CALL")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"API calls made to the PointCheckout API endpoints should be made from your server. You should NEVER include your API keys in your mobile application. A mallicious user can gain access to your account if those keys are exposed."))),(0,a.kt)("p",null,"To retrieve the details and status of a checkout  , make an API call from your server to ",(0,a.kt)("a",{href:"/api/#operation/get_checkout",target:"_blank"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /checkout/{checkoutId}")),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"checkoutId")," is the ID received during the craetion of the checkout."),(0,a.kt)("p",null,"Here's an example of how you can query the status of checkout with id ",(0,a.kt)("inlineCode",{parentName:"p"},"1653241101733169556"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="curl"',title:'"curl"'},'curl -L -X GET "https://api.test.pointcheckout.com/mer/v2.0/checkout/1653241101733169556" \\\n-H "X-POINTCHECKOUT-KEY: YOUR_X-POINTCHECKOUT-KEY" \\\n-H "X-POINTCHECKOUT-SECRET: YOUR_X-POINTCHECKOUT-SECRET" \\\n-H \'Content-Type: application/json\'\n')),(0,a.kt)("p",null,"The response received for a valid checkout would be similar to the one below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="200 Response"',title:'"200','Response"':!0},'{\n  "success": true,\n  "elapsed": 12,\n  "result": {\n    "id": "1653241101733169556",\n    "requestId": "EXAMPLE-123.1",\n    "orderId": "EXAMPLE-123",\n    "currency": "AED",\n    "amount": 100.00,\n    "status": "PENDING",\n    ...\n  }\n}\n')))}d.isMDXComponent=!0}}]);
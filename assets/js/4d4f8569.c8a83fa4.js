(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[596],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(f,r(r({ref:t},s),{},{components:n})):i.createElement(f,r({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1863:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var i=n(2122),o=n(9756),a=(n(7294),n(3905)),r=["components"],p={title:"Shopify"},c=void 0,l={unversionedId:"integrate/ecomm/shopify",id:"integrate/ecomm/shopify",isDocsHomePage:!1,title:"Shopify",description:"The following document guides you through accepting PointCheckout payments through Shopify.",source:"@site/docs/1-integrate/3-ecomm/3-shopify.md",sourceDirName:"1-integrate/3-ecomm",slug:"/integrate/ecomm/shopify",permalink:"/docs/integrate/ecomm/shopify",version:"current",sidebarPosition:3,frontMatter:{title:"Shopify"},sidebar:"docs",previous:{title:"OpenCart",permalink:"/docs/integrate/ecomm/opencart"},next:{title:"WooCommerce",permalink:"/docs/integrate/ecomm/woocommerce"}},s=[{value:"Create a private app",id:"create-a-private-app",children:[]},{value:"Configure PointCheckout",id:"configure-pointcheckout",children:[{value:"PointCheckout Web Console",id:"pointcheckout-web-console",children:[]},{value:"Shopify Configuration",id:"shopify-configuration",children:[]},{value:"Connecting your Shopify account",id:"connecting-your-shopify-account",children:[]}]},{value:"Shopify Additional Scripts",id:"shopify-additional-scripts",children:[]},{value:"Manual Payment method",id:"manual-payment-method",children:[]},{value:"Testing",id:"testing",children:[]}],m={toc:s};function u(e){var t=e.components,p=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following document guides you through accepting PointCheckout payments through ",(0,a.kt)("a",{parentName:"p",href:"https://www.shopify.com"},"Shopify"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This guide assumes that you already have a paid ",(0,a.kt)("a",{parentName:"p",href:"https://www.shopify.com"},"Shopify account"),"."))),(0,a.kt)("h2",{id:"create-a-private-app"},"Create a private app"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your Shopify, go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Apps")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage Private apps")," (at the bottom of the page) and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create private app"),". If private apps are disabled, enable private apps development.\n",(0,a.kt)("img",{src:n(766).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the required application details then expand the Show inactive Admin API permissions:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Private app name: ",(0,a.kt)("inlineCode",{parentName:"li"},"PointCheckout")),(0,a.kt)("li",{parentName:"ul"},"Emergency developer email: ",(0,a.kt)("inlineCode",{parentName:"li"},"support@pointcheckout.com"))))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3493).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Grant ",(0,a.kt)("inlineCode",{parentName:"li"},"Read and write")," permission for ",(0,a.kt)("inlineCode",{parentName:"li"},"Orders")," and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Save")," at the top right corner then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create app")," in the confirmation prompt.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9701).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"li"},"Example URL")," from the PointCheckout application as shown below. We will use this in the next section.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(400).Z})),(0,a.kt)("h2",{id:"configure-pointcheckout"},"Configure PointCheckout"),(0,a.kt)("h3",{id:"pointcheckout-web-console"},"PointCheckout Web Console"),(0,a.kt)("p",null,"To complete this integration, you must first login to the ",(0,a.kt)("a",{parentName:"p",href:"/guides/portal/login"},"PointCheckout Web Console")),(0,a.kt)("h3",{id:"shopify-configuration"},"Shopify Configuration"),(0,a.kt)("p",null,"From the side menu, Select ",(0,a.kt)("strong",{parentName:"p"},'"Integrations"')," -> ",(0,a.kt)("strong",{parentName:"p"},'"Shopify Integration"')," as shown in the image below"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9507).Z})),(0,a.kt)("h3",{id:"connecting-your-shopify-account"},"Connecting your Shopify account"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},'"connect to Shopify"'))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1875).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Paste the URL copied from ",(0,a.kt)("strong",{parentName:"li"},"Step 4")," in Creating a PointCheckout private app above in the popup and click ",(0,a.kt)("strong",{parentName:"li"},"OK"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7108).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Copy the HTML code shown on the confirmation page. We will use this in the next steps.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7397).Z})),(0,a.kt)("h2",{id:"shopify-additional-scripts"},"Shopify Additional Scripts"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go back to Shopify. Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," then click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Checkout"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(200).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Order processing")," section and paste the code from ",(0,a.kt)("strong",{parentName:"li"},"Step 3")," above into the ",(0,a.kt)("inlineCode",{parentName:"li"},"Additional Scripts")," text box. Click ",(0,a.kt)("strong",{parentName:"li"},"Save")," when done.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9261).Z})),(0,a.kt)("h2",{id:"manual-payment-method"},"Manual Payment method"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go back to Shopify. Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," then click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Payments"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1815).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Manual payment methods"),". Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Choose alternative payment")," and then select ",(0,a.kt)("inlineCode",{parentName:"li"},"Create custome payment method"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8784).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Fill in the required details to setup the manual payment method:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Custom payment method name: ",(0,a.kt)("inlineCode",{parentName:"li"},"Card payment (via PointCheckout)")),(0,a.kt)("li",{parentName:"ul"},"Additional details: `Complete your purchase using a credit or debit card"))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Save")," when done")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5876).Z})),(0,a.kt)("h2",{id:"testing"},"Testing"))}u.isMDXComponent=!0},766:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-1-e4a1c2833ec6d23218bf58d8e795b990.png"},3493:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-2-10e37736a135444400b888fb94a3a132.png"},9701:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-3-7f5320038df1606c9ff5120fe6fccb97.png"},400:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-4-a3adf53396e779f9a661aadd547fe1f0.png"},9507:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-connect-1-e9d550f2f04c42ac43dfada665a17f4c.png"},1875:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-connect-2-46838237e86d3aeacdb33ba84c330c82.png"},7108:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-connect-3-75a4dacdb67974b4be7fd817d01c5f16.png"},7397:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-connect-4-3060176756f07dafd306a7281b1c2c32.png"},200:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-1-40f6282d883ac9364a7f921439b4f731.png"},9261:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-2-0ae0e93db4cb3448722da835799b82d6.png"},1815:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-3-85e0f4cafbd3d7aca4f63218f84a1816.png"},8784:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-4-0b903308b857ff5cbbfe4b450c432557.png"},5876:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-5-1c67842d8cf61916414c8cf2febe9b99.png"}}]);
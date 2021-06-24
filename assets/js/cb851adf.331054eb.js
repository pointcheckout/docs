(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[553],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6389:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r=["components"],p={title:"Shopify"},l=void 0,s={unversionedId:"integrate/plugins/shopify",id:"integrate/plugins/shopify",isDocsHomePage:!1,title:"Shopify",description:"The following document guides you through accepting PointCheckout payments through Shopify.",source:"@site/docs/1-integrate/1-plugins/3-shopify.md",sourceDirName:"1-integrate/1-plugins",slug:"/integrate/plugins/shopify",permalink:"/docs/integrate/plugins/shopify",version:"current",sidebarPosition:3,frontMatter:{title:"Shopify"},sidebar:"docs",previous:{title:"OpenCart",permalink:"/docs/integrate/plugins/opencart"},next:{title:"WooCommerce",permalink:"/docs/integrate/plugins/woocommerce"}},c=[{value:"Create a private app",id:"create-a-private-app",children:[]},{value:"Configure PointCheckout",id:"configure-pointcheckout",children:[{value:"PointCheckout Web Console",id:"pointcheckout-web-console",children:[]},{value:"Shopify Configuration",id:"shopify-configuration",children:[]},{value:"Connecting your Shopify account",id:"connecting-your-shopify-account",children:[]}]},{value:"Shopify Additional Scripts",id:"shopify-additional-scripts",children:[]},{value:"Manual Payment method",id:"manual-payment-method",children:[]},{value:"Testing",id:"testing",children:[]}],u={toc:c};function m(e){var t=e.components,p=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following document guides you through accepting PointCheckout payments through ",(0,o.kt)("a",{parentName:"p",href:"https://www.shopify.com"},"Shopify"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide assumes that you already have a paid ",(0,o.kt)("a",{parentName:"p",href:"https://www.shopify.com"},"Shopify account"),"."))),(0,o.kt)("h2",{id:"create-a-private-app"},"Create a private app"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your Shopify, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Apps")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage Private apps")," (at the bottom of the page) and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create private app"),". If private apps are disabled, enable private apps development.\n",(0,o.kt)("img",{src:n(766).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill in the required application details then expand the Show inactive Admin API permissions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Private app name: ",(0,o.kt)("inlineCode",{parentName:"li"},"PointCheckout")),(0,o.kt)("li",{parentName:"ul"},"Emergency developer email: ",(0,o.kt)("inlineCode",{parentName:"li"},"support@pointcheckout.com"))))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3493).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Grant ",(0,o.kt)("inlineCode",{parentName:"li"},"Read and write")," permission for ",(0,o.kt)("inlineCode",{parentName:"li"},"Orders")," and click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Save")," at the top right corner then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create app")," in the confirmation prompt.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9701).Z})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"Example URL")," from the PointCheckout application as shown below. We will use this in the next section.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(400).Z})),(0,o.kt)("h2",{id:"configure-pointcheckout"},"Configure PointCheckout"),(0,o.kt)("h3",{id:"pointcheckout-web-console"},"PointCheckout Web Console"),(0,o.kt)("p",null,"To complete this integration, you must first login to the ",(0,o.kt)("a",{parentName:"p",href:"/guides/portal/login"},"PointCheckout Web Console")),(0,o.kt)("h3",{id:"shopify-configuration"},"Shopify Configuration"),(0,o.kt)("p",null,"From the side menu, Select ",(0,o.kt)("strong",{parentName:"p"},'"Integrations"')," -> ",(0,o.kt)("strong",{parentName:"p"},'"Shopify Integration"')," as shown in the image below"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9507).Z})),(0,o.kt)("h3",{id:"connecting-your-shopify-account"},"Connecting your Shopify account"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},'"connect to Shopify"'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1875).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Paste the URL copied from ",(0,o.kt)("strong",{parentName:"li"},"Step 4")," in Creating a PointCheckout private app above in the popup and click ",(0,o.kt)("strong",{parentName:"li"},"OK"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7108).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Copy the HTML code shown on the confirmation page. We will use this in the next steps.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7397).Z})),(0,o.kt)("h2",{id:"shopify-additional-scripts"},"Shopify Additional Scripts"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go back to Shopify. Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," then click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Checkout"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(200).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Order processing")," section and paste the code from ",(0,o.kt)("strong",{parentName:"li"},"Step 3")," above into the ",(0,o.kt)("inlineCode",{parentName:"li"},"Additional Scripts")," text box. Click ",(0,o.kt)("strong",{parentName:"li"},"Save")," when done.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9261).Z})),(0,o.kt)("h2",{id:"manual-payment-method"},"Manual Payment method"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go back to Shopify. Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," then click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Payments"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1815).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Manual payment methods"),". Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Choose alternative payment")," and then select ",(0,o.kt)("inlineCode",{parentName:"li"},"Create custome payment method"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8784).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Fill in the required details to setup the manual payment method:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Custom payment method name: ",(0,o.kt)("inlineCode",{parentName:"li"},"Card payment (via PointCheckout)")),(0,o.kt)("li",{parentName:"ul"},"Additional details: `Complete your purchase using a credit or debit card"))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Save")," when done")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5876).Z})),(0,o.kt)("h2",{id:"testing"},"Testing"))}m.isMDXComponent=!0},766:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-1-e4a1c2833ec6d23218bf58d8e795b990.png"},3493:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-2-10e37736a135444400b888fb94a3a132.png"},9701:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-3-7f5320038df1606c9ff5120fe6fccb97.png"},400:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-4-a3adf53396e779f9a661aadd547fe1f0.png"},9507:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-connect-1-e9d550f2f04c42ac43dfada665a17f4c.png"},1875:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-connect-2-46838237e86d3aeacdb33ba84c330c82.png"},7108:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-connect-3-75a4dacdb67974b4be7fd817d01c5f16.png"},7397:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-connect-4-3060176756f07dafd306a7281b1c2c32.png"},200:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-1-40f6282d883ac9364a7f921439b4f731.png"},9261:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-2-0ae0e93db4cb3448722da835799b82d6.png"},1815:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-3-85e0f4cafbd3d7aca4f63218f84a1816.png"},8784:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-4-0b903308b857ff5cbbfe4b450c432557.png"},5876:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shopify-setup-5-1c67842d8cf61916414c8cf2febe9b99.png"}}]);
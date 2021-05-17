(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[746],{3905:function(t,e,o){"use strict";o.d(e,{Zo:function(){return p},kt:function(){return k}});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(o),k=a,h=m["".concat(c,".").concat(k)]||m[k]||u[k]||i;return o?n.createElement(h,r(r({ref:e},p),{},{components:o})):n.createElement(h,r({ref:e},p))}));function k(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},68485:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=o(22122),a=o(19756),i=(o(67294),o(3905)),r={title:"Painless payments with Zoho and PointCheckout",sidebar_label:"Zoho Books"},s={unversionedId:"integrate/4-3rd-party/zoho",id:"integrate/4-3rd-party/zoho",isDocsHomePage:!1,title:"Painless payments with Zoho and PointCheckout",description:"Make getting paid faster and easier than ever! PointCheckout is now integrated with Zoho Books. Zoho Books is online accounting software that manages your finances, automates business workflows, and helps you work collectively across departments.",source:"@site/docs/1-integrate/4-3rd-party/1-zoho.md",sourceDirName:"1-integrate/4-3rd-party",slug:"/integrate/4-3rd-party/zoho",permalink:"/docs/integrate/4-3rd-party/zoho",version:"current",sidebar_label:"Zoho Books",sidebarPosition:1,frontMatter:{title:"Painless payments with Zoho and PointCheckout",sidebar_label:"Zoho Books"},sidebar:"docs",previous:{title:"Painless payments with Xero and PointCheckout",permalink:"/docs/integrate/4-3rd-party/xero"}},c=[{value:"Log in to the PointCheckout Web Console",id:"log-in-to-the-pointcheckout-web-console",children:[]},{value:"Access Zoho Integration configuration",id:"access-zoho-integration-configuration",children:[]},{value:"Connecting your Zoho Books account",id:"connecting-your-zoho-books-account",children:[]},{value:"Adding a Payment Link to your Zoho Invoices",id:"adding-a-payment-link-to-your-zoho-invoices",children:[]}],l={toc:c};function p(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Make getting paid faster and easier than ever! PointCheckout is now integrated with Zoho Books. Zoho Books is online accounting software that manages your finances, automates business workflows, and helps you work collectively across departments."),(0,i.kt)("p",null,"This integration will make it easier for your customers to pay your Zoho Books invoices online using PointCheckout."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Before you start")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your user account must have Administrator permission to access this service"))),(0,i.kt)("h2",{id:"log-in-to-the-pointcheckout-web-console"},"Log in to the PointCheckout Web Console"),(0,i.kt)("p",null,"To complete this integration, you must first login to the ",(0,i.kt)("a",{parentName:"p",href:"/guides/portal/login"},"PointCheckout Web Console")),(0,i.kt)("h2",{id:"access-zoho-integration-configuration"},"Access Zoho Integration configuration"),(0,i.kt)("p",null,"From the side menu, Select ",(0,i.kt)("strong",{parentName:"p"},'"Integrations"')," -> ",(0,i.kt)("strong",{parentName:"p"},'"Zoho Books"')," as shown in the image below"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"admin zoho",src:o(54338).Z})),(0,i.kt)("h2",{id:"connecting-your-zoho-books-account"},"Connecting your Zoho Books account"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},'"connect to Zoho Books"')," begin the integration")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"admin zoho connect",src:o(44847).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Select the Xero ",(0,i.kt)("strong",{parentName:"li"},"Organization")," you would like to link to this PointCheckout account.")),(0,i.kt)("p",null,"| PointCheckout supports connecting 1 single Zoho Organization per PointCheckout account. If you manage multiple PointCheckout clients and have multiple Organizations available to your Zoho account, make sure all of them are selected. You can specify which organization is linked to this specific PointCheckout account in the next step."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zoho authorize",src:o(91622).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"(Multiple Organizations Only) Selecting organization to link to your PointCheckout Account")),(0,i.kt)("p",null,"If you have multiple organizations selected in ",(0,i.kt)("em",{parentName:"p"},"Step 2")," above, you will be prompted to select which one you want to link to your PointCheckout account. If you have only one selected Organization, you will not see a prompt."),(0,i.kt)("h2",{id:"adding-a-payment-link-to-your-zoho-invoices"},"Adding a Payment Link to your Zoho Invoices"),(0,i.kt)("p",null,"The next steps explain how to add a ",(0,i.kt)("strong",{parentName:"p"},'"Pay Now"')," link to your Zoho PDF invoices"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy ",(0,i.kt)("strong",{parentName:"li"},"Custom payment URL")," from the ",(0,i.kt)("strong",{parentName:"li"},'"Zoho Books"')," screen on your PointCheckout account.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"admin zoho connected",src:o(20454).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to your ",(0,i.kt)("strong",{parentName:"p"}," ",(0,i.kt)("a",{parentName:"strong",href:"https://accounts.zoho.com/signin?servicename=ZohoBooks"},"Zoho Books Account")," "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Settings"),", select ",(0,i.kt)("strong",{parentName:"p"},"Templates"),", then click ",(0,i.kt)("strong",{parentName:"p"},"Invoices"),". Select the Invoice Template you wish to add payment link to and click ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zoho invoices",src:o(80537).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"On the left side, select ",(0,i.kt)("strong",{parentName:"li"},"Footer"),", then click ",(0,i.kt)("strong",{parentName:"li"},"Add your bank details"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zoho invoices",src:o(16184).Z})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"In the text area, type ",(0,i.kt)("strong",{parentName:"li"},' "Pay your invoice online here" ')," or any other phrase you would like to display on your invoice to instruct clients to pay. Next, highlight the whole sentence or part of it and click on the ",(0,i.kt)("strong",{parentName:"li"},"Create Link")," icon as shown below.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zoho invoices",src:o(53501).Z})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"In the URL field, paste the URL copied from ",(0,i.kt)("em",{parentName:"li"},"Step 1")," above. Once added, click ",(0,i.kt)("strong",{parentName:"li"},"OK")," then click ",(0,i.kt)("strong",{parentName:"li"},"Preview"),". Now this statement will show at the bottom of your invoices.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zoho invoices",src:o(71577).Z})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save")," to save your changes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Settings"),", select ",(0,i.kt)("strong",{parentName:"p"},"Emails"),", then click ",(0,i.kt)("strong",{parentName:"p"},"Invoice Notifications"),". Select the Invoice Template you wish to add payment link to and click ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zoho email",src:o(43188).Z})),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Scroll and click on the ",(0,i.kt)("strong",{parentName:"li"},"Pay Now")," button in the email template. Replace the URL at the top with the URL copied in ",(0,i.kt)("em",{parentName:"li"},"Step 1")," above. Once done, click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zoho email",src:o(43514).Z})))}p.isMDXComponent=!0},54338:function(t,e,o){"use strict";e.Z=o.p+"assets/images/admin-4288ad14d29a360aa712566d7ae11825.png"},91622:function(t,e,o){"use strict";e.Z=o.p+"assets/images/authorize-68d369ace66d6e243699516cd24bc5c1.png"},44847:function(t,e,o){"use strict";e.Z=o.p+"assets/images/connect-46a060139af08b14e5f74b00ebe5992f.png"},20454:function(t,e,o){"use strict";e.Z=o.p+"assets/images/connected-a7ed092983a7253229b518e597d03d87.png"},43188:function(t,e,o){"use strict";e.Z=o.p+"assets/images/email_1-99d00b436236e188b4b266f3850796a6.png"},43514:function(t,e,o){"use strict";e.Z=o.p+"assets/images/email_2-d618bc239990317f30e845398661e2af.png"},80537:function(t,e,o){"use strict";e.Z=o.p+"assets/images/invoice_1-47bea5f37f424f92b5d031abd9c2f3a9.png"},16184:function(t,e,o){"use strict";e.Z=o.p+"assets/images/invoice_2-4b316128fee337a8750aa83685de8377.png"},53501:function(t,e,o){"use strict";e.Z=o.p+"assets/images/invoice_3-5bc066434b617e22b10ee58bc27ee5cc.png"},71577:function(t,e,o){"use strict";e.Z=o.p+"assets/images/invoice_4-a90079d6be5358087729afc5a6820b83.png"}}]);
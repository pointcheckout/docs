"use strict";(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[9406],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Integrate your system with PointCheckout",sidebar_label:"Send payment links"},s=void 0,c={unversionedId:"integrate/merchant-api/payment-links",id:"integrate/merchant-api/payment-links",isDocsHomePage:!1,title:"Integrate your system with PointCheckout",description:"Make getting paid faster and easier than ever! PointCheckout APIs provide an easy way to let your customers pay for their orders easily and securely.",source:"@site/docs/1-integrate/3-merchant-api/3-payment-links.md",sourceDirName:"1-integrate/3-merchant-api",slug:"/integrate/merchant-api/payment-links",permalink:"/docs/integrate/merchant-api/payment-links",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Integrate your system with PointCheckout",sidebar_label:"Send payment links"},sidebar:"docs",previous:{title:"QR Payment",permalink:"/docs/integrate/merchant-api/qr-payment"},next:{title:"Xero",permalink:"/docs/connect/xero"}},p=[{value:"Integration flow",id:"integration-flow",children:[]},{value:"Test the Integration",id:"test-the-integration",children:[]},{value:"Checkout Statuses",id:"checkout-statuses",children:[]}],u={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Make getting paid faster and easier than ever! PointCheckout APIs provide an easy way to let your customers pay for their orders easily and securely."),(0,o.kt)("h2",{id:"integration-flow"},"Integration flow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When a customer is ready to pay for their order/service, \u064cYour system sends a ",(0,o.kt)("a",{parentName:"li",href:"/api/#operation/create-link-checkout"},"Create payment link checkout")," API call to pointCheckout API with the order details."),(0,o.kt)("li",{parentName:"ol"},"In the request you can either provide customer phone/email within the billing address and set the ",(0,o.kt)("inlineCode",{parentName:"li"},"sendSms")," and/or ",(0,o.kt)("inlineCode",{parentName:"li"},"sendEmail")," request parameters to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," so that PointCheckout will send the payment link to the customer contact phone/email or you can get the payment redirect link from the response and share it with your customer."),(0,o.kt)("li",{parentName:"ol"},"In your backend system, you can either listen to Google Firestort notifications for the document related to the checkout ( see the response from the ",(0,o.kt)("a",{parentName:"li",href:"/api/#operation/create-link-checkout"},"Create payment link checkout")," API call), for more details on how to listen to Firebase messages in your system see ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/query-data/listen"},"Get realtime updates with Cloud Firestore"),". Alternatively you can register to receive checkout updates via Webhooks, see ",(0,o.kt)("a",{parentName:"li",href:"/api/#tag/Webhooks"},"Webhooks API"),"."),(0,o.kt)("li",{parentName:"ol"},"Once your system is notified of a payment update, you should call the ",(0,o.kt)("a",{parentName:"li",href:"/api/#operation/get-checkout"},"Get Checkout")," API call to retrieve the status."),(0,o.kt)("li",{parentName:"ol"},"Based on the status of payment retrieved from the ",(0,o.kt)("a",{parentName:"li",href:"/api/#operation/get-checkout"},"Get Checkout")," API call, you should update your order status on your system and provide the service to your customer if payment was complete.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Payment link integration flow",src:n(63163).Z})),(0,o.kt)("p",null,"That's it! You're ready to start testing."),(0,o.kt)("h2",{id:"test-the-integration"},"Test the Integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new payment link."),(0,o.kt)("li",{parentName:"ol"},"Open the link in your internet browser."),(0,o.kt)("li",{parentName:"ol"},"Once the payment page shows,  Enter the following card details:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Number: ",(0,o.kt)("inlineCode",{parentName:"li"},"4242 4242 4242 4242")),(0,o.kt)("li",{parentName:"ul"},"Expiry date: ",(0,o.kt)("inlineCode",{parentName:"li"},"12/25")),(0,o.kt)("li",{parentName:"ul"},"CVV: ",(0,o.kt)("inlineCode",{parentName:"li"},"100")),(0,o.kt)("li",{parentName:"ul"},"Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"TEST USER")))),(0,o.kt)("li",{parentName:"ol"},"Accept the ",(0,o.kt)("strong",{parentName:"li"},"Terms & Conditions")," and click ",(0,o.kt)("strong",{parentName:"li"},"Pay"),". You will be redirected to the order confirmation page. If you entered a real email address in the billing details, you'll also receive a payment confirmation email."),(0,o.kt)("li",{parentName:"ol"},"Check the status of the payment on your system.")),(0,o.kt)("h2",{id:"checkout-statuses"},"Checkout Statuses"),(0,o.kt)("p",null,"A checkout can have multiple statuses that describe the current state that the checkout is in."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"STATUS"),(0,o.kt)("th",{parentName:"tr",align:null},"DETAILS"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PENDING")),(0,o.kt)("td",{parentName:"tr",align:null},"New Checkout. User has not completed the payment.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"AUTHORIZED")),(0,o.kt)("td",{parentName:"tr",align:null},"The payment has been authorized, a subsequent Capture or Cancel payment API call is expected before the checkout Expires.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PAID")),(0,o.kt)("td",{parentName:"tr",align:null},"This status is effective when a customer has successfully completed the payment associated with this checkout.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"FAILED")),(0,o.kt)("td",{parentName:"tr",align:null},"Payment failed due to payment failure. PointCheckout failed to recover such a checkout process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"CANCELLED")),(0,o.kt)("td",{parentName:"tr",align:null},"User cancelled the checkout process and returned to the merchant page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"EXPIRED")),(0,o.kt)("td",{parentName:"tr",align:null},"Checkout has expired without being processed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"REFUNDED")),(0,o.kt)("td",{parentName:"tr",align:null},"Checkout has been fully refunded to the Shopper")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PARTIALLY_REFUNDED")),(0,o.kt)("td",{parentName:"tr",align:null},"Checkout have been partially refunded to the shopper")))))}m.isMDXComponent=!0},63163:function(e,t,n){t.Z=n.p+"assets/images/link-payment-flow-0117383b5cfca4165f2bf461c5c8960b.png"}}]);
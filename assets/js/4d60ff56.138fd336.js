"use strict";(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[728],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1196:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Integrate Payment into your Mobile App with PointCheckout",sidebar_label:"Mobile Payment"},p=void 0,c={unversionedId:"integrate/merchant-api/mobile-payment",id:"integrate/merchant-api/mobile-payment",isDocsHomePage:!1,title:"Integrate Payment into your Mobile App with PointCheckout",description:"Make getting paid faster and easier than ever! PointCheckout APIs provide an easy way to let your customers pay for their orders easily and securely.",source:"@site/docs/1-integrate/3-merchant-api/1-mobile-payment.md",sourceDirName:"1-integrate/3-merchant-api",slug:"/integrate/merchant-api/mobile-payment",permalink:"/docs/integrate/merchant-api/mobile-payment",version:"current",sidebarPosition:1,frontMatter:{title:"Integrate Payment into your Mobile App with PointCheckout",sidebar_label:"Mobile Payment"},sidebar:"docs",previous:{title:"Website / E-Commerce",permalink:"/docs/integrate/merchant-api/web"},next:{title:"QR Payment",permalink:"/docs/integrate/merchant-api/qr-payment"}},s=[{value:"Integration flow",id:"integration-flow",children:[]},{value:"Payment confirmation endpoints",id:"payment-confirmation-endpoints",children:[]},{value:"Test the Integration",id:"test-the-integration",children:[]},{value:"Checkout Statuses",id:"checkout-statuses",children:[]}],u={toc:s};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Make getting paid faster and easier than ever! PointCheckout APIs provide an easy way to let your customers pay for their orders easily and securely."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"SERVER API CALL")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"API calls made to the PointCheckout API endpoints should be made from your backend server. You should ",(0,o.kt)("strong",{parentName:"p"},"NEVER")," include your API key and secret in your mobile application. A malicious user can gain access to your account if those keys were exposed."))),(0,o.kt)("h2",{id:"integration-flow"},"Integration flow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When a customer is ready to pay for their order/service on your mobile application, the mobile application sends a request to the backend server."),(0,o.kt)("li",{parentName:"ol"},"The backend server processes the order and makes the ",(0,o.kt)("a",{parentName:"li",href:"/api/#operation/create-mobile-checkout"},"Create mobile checkout")," API call to PointCheckout & obtains a checkout ID and a redirect URL."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"/docs/integrate/sdks/android"},"Android SDK")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/integrate/sdks/ios"},"iOS SDK")," provided by PointCheckout to complete the payment."),(0,o.kt)("li",{parentName:"ol"},"Alternatively, pass the redirect URL from PointCheckout API call to the mobile app and open it in a webview."),(0,o.kt)("li",{parentName:"ol"},"Once the webview Changes to one of the endpoints below, you should close the webview, and on your backend server, make  the ",(0,o.kt)("a",{parentName:"li",href:"/api/#operation/get-checkout"},"Get Checkout")," API call to retrieve the status."),(0,o.kt)("li",{parentName:"ol"},"Based on the status of payment retrieved from the ",(0,o.kt)("a",{parentName:"li",href:"/api/#operation/get-checkout"},"Get Checkout")," API call, you should update your order status on your backend system, and display confirmation to the customer.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mobile integration flow",src:n(396).Z})),(0,o.kt)("p",null,"That's it! You're ready to start testing."),(0,o.kt)("h2",{id:"payment-confirmation-endpoints"},"Payment confirmation endpoints"),(0,o.kt)("p",null,"When the webview page URL changes to a confirmation endpoint, you should close the webview and check the payment status. "),(0,o.kt)("p",null,"Confirmation endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{pointcheckout-pay-base-url}"),(0,o.kt)("strong",{parentName:"li"},"/complete")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{pointcheckout-pay-base-url}"),(0,o.kt)("strong",{parentName:"li"},"/success-redirect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{pointcheckout-pay-base-url}"),(0,o.kt)("strong",{parentName:"li"},"/payment-confirmation"))),(0,o.kt)("p",null,"Possible values for ",(0,o.kt)("inlineCode",{parentName:"p"},"{pointcheckout-pay-base-url}"),":"),(0,o.kt)("p",null,"Live : ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://pay.pointcheckout.com"},"https://pay.pointcheckout.com"))),(0,o.kt)("p",null,"Test : ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://pay.test.pointcheckout.com"},"https://pay.test.pointcheckout.com"))),(0,o.kt)("h2",{id:"test-the-integration"},"Test the Integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to your mobile app and initiate the payment process."),(0,o.kt)("li",{parentName:"ol"},"You should see the PointCheckout payment page."),(0,o.kt)("li",{parentName:"ol"},"Enter the following card details:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Number: ",(0,o.kt)("inlineCode",{parentName:"li"},"4242 4242 4242 4242")),(0,o.kt)("li",{parentName:"ul"},"Expiry date: ",(0,o.kt)("inlineCode",{parentName:"li"},"12/25")),(0,o.kt)("li",{parentName:"ul"},"CVV: ",(0,o.kt)("inlineCode",{parentName:"li"},"100")),(0,o.kt)("li",{parentName:"ul"},"Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"TEST USER")))),(0,o.kt)("li",{parentName:"ol"},"Accept the ",(0,o.kt)("strong",{parentName:"li"},"Terms & Conditions")," and click ",(0,o.kt)("strong",{parentName:"li"},"Pay"),". You will be redirected to the order confirmation page. If you entered a real email address in the billing details, you'll also receive a payment confirmation email."),(0,o.kt)("li",{parentName:"ol"},"Check the status of the payment on your backend administration panel.")),(0,o.kt)("h2",{id:"checkout-statuses"},"Checkout Statuses"),(0,o.kt)("p",null,"A checkout can have multiple statuses that describe the current state that the checkout is in."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"STATUS"),(0,o.kt)("th",{parentName:"tr",align:null},"DETAILS"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PENDING")),(0,o.kt)("td",{parentName:"tr",align:null},"New Checkout. User has not completed the payment.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"AUTHORIZED")),(0,o.kt)("td",{parentName:"tr",align:null},"The payment has been authorized, a subsequent Capture or Cancel payment API call is expected before the checkout Expires.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PAID")),(0,o.kt)("td",{parentName:"tr",align:null},"This status is effective when a customer has successfully completed the payment associated with this checkout.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"FAILED")),(0,o.kt)("td",{parentName:"tr",align:null},"Payment failed due to payment failure. PointCheckout failed to recover such a checkout process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"CANCELLED")),(0,o.kt)("td",{parentName:"tr",align:null},"User cancelled the checkout process and returned to the merchant page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"EXPIRED")),(0,o.kt)("td",{parentName:"tr",align:null},"Checkout has expired without being processed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"REFUNDED")),(0,o.kt)("td",{parentName:"tr",align:null},"Checkout has been fully refunded to the Shopper")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PARTIALLY_REFUNDED")),(0,o.kt)("td",{parentName:"tr",align:null},"Checkout have been partially refunded to the shopper")))))}m.isMDXComponent=!0},396:function(e,t,n){t.Z=n.p+"assets/images/mobile-payment-flow-a7d1a69d5e282cd0128a11b5d9882669.png"}}]);
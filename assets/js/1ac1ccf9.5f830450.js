"use strict";(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[3286],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(52263),r=n(13919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},74966:function(e,t,n){var a=n(67294),r=n(44996);t.Z=function(e){var t=e.children,n=e.image,i=e.link,o=e.action;return a.createElement("div",{className:"card"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,t)),a.createElement("div",{className:"card__image"},a.createElement("img",{src:(0,r.Z)(n),alt:"Image alt text",title:"Logo Title Text 1"})),a.createElement("div",{className:"card__footer"},a.createElement("a",{className:"button button--primary button--block",href:(0,r.Z)(i)},o)))}},26841:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(74966),l=["components"],s={title:"Mobile SDK payment",slug:"sdk",hide_title:!1,hide_table_of_contents:!1},c=void 0,d={unversionedId:"build/initiate/mobile",id:"build/initiate/mobile",isDocsHomePage:!1,title:"Mobile SDK payment",description:"On this page we describe the steps required to initiate and verify a payment via the PointCheckout payment gateway for mobile based applications using the PointCheckout mobile SDKs.",source:"@site/docs/3-build/0-initiate/1-mobile.md",sourceDirName:"3-build/0-initiate",slug:"/build/initiate/sdk",permalink:"/docs/build/initiate/sdk",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Mobile SDK payment",slug:"sdk",hide_title:!1,hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Web payment",permalink:"/docs/build/initiate/web"},next:{title:"Link payment",permalink:"/docs/build/initiate/link"}},p=[{value:"How it works",id:"how-it-works",children:[]},{value:"Step 1: Create a new checkout",id:"step-1-create-a-new-checkout",children:[]},{value:"Step 2: Initiate the PointCheckoutClient",id:"step-2-initiate-the-pointcheckoutclient",children:[]},{value:"Step 3: Verifying payment status",id:"step-3-verifying-payment-status",children:[{value:"Checkout status values",id:"checkout-status-values",children:[]}]},{value:"Step 4: Test the Integration",id:"step-4-test-the-integration",children:[]}],u={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"On this page we describe the steps required to initiate and verify a payment via the PointCheckout payment gateway for mobile based applications using the PointCheckout mobile SDKs."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Three steps are required to accept payments via the PointCheckout payment gateway for mobile-based applications using the PointCheckout SDKs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new Mobile Checkout"),(0,i.kt)("li",{parentName:"ol"},"Initiate the ",(0,i.kt)("inlineCode",{parentName:"li"},"PointCheckoutClient")," using the ",(0,i.kt)("inlineCode",{parentName:"li"},"checkoutKey")," received in the response"),(0,i.kt)("li",{parentName:"ol"},"On callback, query the API for the payment status")),(0,i.kt)("p",null,"The diagram below shows the overall flow to be used in order to accept payments using the PointCheckout\nweb integration"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Website integration flow",src:n(55139).Z})),(0,i.kt)("h2",{id:"step-1-create-a-new-checkout"},"Step 1: Create a new checkout"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"SERVER API CALL")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"API calls made to the PointCheckout API endpoints should be made from your server. You should NEVER include your API keys in your mobile application. A mallicious user can gain access to your account if those keys are exposed."))),(0,i.kt)("p",null,"When the customer is ready to pay, create a new mobile checkout by making a call from your server to ",(0,i.kt)("a",{href:"/api/#operation/create_checkout_mobile",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"POST /checkout/mobile")),". In your request, you must include the following required parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Parameter")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"requestId")),(0,i.kt)("td",{parentName:"tr",align:null},"A unique Identifier for this request, can be used later to query the status on the checkout")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"orderId")),(0,i.kt)("td",{parentName:"tr",align:null},"This can be the order ID. Must match any reference shown to the user during checkout / order history")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"currency")),(0,i.kt)("td",{parentName:"tr",align:null},"ISO 4217 Currency Code (3 letter currency code)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:null},"A postive decimal number representing the amount customer should pay")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"customer")),(0,i.kt)("td",{parentName:"tr",align:null},"The details of the customer making teh payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"billingAddress")),(0,i.kt)("td",{parentName:"tr",align:null},"The customer billing address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deliveryAddress")),(0,i.kt)("td",{parentName:"tr",align:null},"The address where the service will be delivered")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"items")),(0,i.kt)("td",{parentName:"tr",align:null},"An array of the items associated with this order")))),(0,i.kt)("p",null,"Here's an example of how you would create a new checkout for ",(0,i.kt)("strong",{parentName:"p"},"100.00 AED"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="curl"',title:'"curl"'},'curl -L -X POST "https://api.test.pointcheckout.com/mer/v2.0/checkout/mobile" \\\n-H "X-POINTCHECKOUT-KEY: YOUR_X-POINTCHECKOUT-KEY" \\\n-H "X-POINTCHECKOUT-SECRET: YOUR_X-POINTCHECKOUT-SECRET" \\\n-H "content-type: application/json" \\\n-d \'{\n  "requestID": "EXAMPLE-123.1",\n  "orderID": "EXAMPLE-123",\n  "currency": "AED",\n  "amount": 100.00,\n  "customer": {...},\n  "billingAddress": {...},\n  "deliveryAddress": {...},\n  "items": [...]\n}\'\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Failed or cancelled orders")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If a payment fails or customer cancels the the payment, you cannot reuse the same ",(0,i.kt)("inlineCode",{parentName:"p"},"requestId"),". You can however use the same ",(0,i.kt)("inlineCode",{parentName:"p"},"orderId")," to create a new checkout."))),(0,i.kt)("h2",{id:"step-2-initiate-the-pointcheckoutclient"},"Step 2: Initiate the PointCheckoutClient"),(0,i.kt)("p",null,"The response from ",(0,i.kt)("strong",{parentName:"p"},"Step 1")," above will result in a new checkout being succesffully created for your merchant account. Once received, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"checkoutKey")," to initiate the client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="200 Response"',title:'"200','Response"':!0},'{\n  "success": true,\n  "elapsed": 12,\n  "result": {\n    "id": "1653241101733169556",\n    "requestId": "EXAMPLE-123.1",\n    "orderId": "EXAMPLE-123",\n    "currency": "AED",\n    "amount": 100.00,\n    "status": "PENDING",\n    "checkoutKey": "90ed4298f15d46df994fd1cfbbec5aa24390e811295cf8b5",\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"To learn more about the specific mechanism to use our SDKs, you can view the instructions for each of the SDK platforms below:"),(0,i.kt)("div",{class:"row"},(0,i.kt)("div",{class:"col col--3"},(0,i.kt)(o.Z,{image:"/img/docs/integrate/sdks/android-logo.svg",link:"/docs/integrate/sdks/android",action:"Android",mdxType:"Card"},"Android")),(0,i.kt)("div",{class:"col col--3"},(0,i.kt)(o.Z,{image:"/img/docs/integrate/sdks/ios-logo.svg",link:"/docs/integrate/sdks/ios",action:"iOS",mdxType:"Card"},"iOS"))),(0,i.kt)("h2",{id:"step-3-verifying-payment-status"},"Step 3: Verifying payment status"),(0,i.kt)("p",null,"Once the payment process has completed (regardless of status), the SDK will excute the callback function passed to the SDK during the client initialization in ",(0,i.kt)("strong",{parentName:"p"},"Step 2"),"."),(0,i.kt)("p",null,"To verify the payment status, make an API call from your server to ",(0,i.kt)("a",{href:"/api/#operation/get_checkout",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"GET /checkout/{checkoutId}")),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"checkoutId")," is the ID received in the server response in ",(0,i.kt)("strong",{parentName:"p"},"Step 1")),(0,i.kt)("p",null,"Here's an example of how you can query the status of checkout with id ",(0,i.kt)("inlineCode",{parentName:"p"},"1653241101733169556"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="curl"',title:'"curl"'},'curl -L -X GET "https://api.test.pointcheckout.com/mer/v2.0/checkout/1653241101733169556" \\\n-H "X-POINTCHECKOUT-KEY: YOUR_X-POINTCHECKOUT-KEY" \\\n-H "X-POINTCHECKOUT-SECRET: YOUR_X-POINTCHECKOUT-SECRET" \\\n-H \'Content-Type: application/json\'\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"CONFIRMING CHECKOUT IS ",(0,i.kt)("inlineCode",{parentName:"h5"},"PAID"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A paid checkout will have the status of ",(0,i.kt)("inlineCode",{parentName:"p"},"PAID"),". If the checkout has a status other than paid, you should either display and error or take the user back to the checkout flow."))),(0,i.kt)("h3",{id:"checkout-status-values"},"Checkout status values"),(0,i.kt)("p",null,"Below is a list of available status codes that may be provided via the PointCheckout API to describe the status of a checkout:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"STATUS"),(0,i.kt)("th",{parentName:"tr",align:"left"},"DETAILS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"PENDING"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"New Checkout. User has not completed the payment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"AUTHORIZED"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The payment has been authorized. A subsequent ",(0,i.kt)("inlineCode",{parentName:"td"},"CAPTURE")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"CANCEL")," API call is expected before expiry.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"PAID"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"This status is effective when a customer has successfully completed the payment associated with this checkout.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"FAILED"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Payment failed due to payment failure. PointCheckout failed to recover such a checkout process.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"CANCELLED"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"User cancelled the checkout process and returned to the merchant page.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"EXPIRED"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Checkout has expired without being processed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"REFUNDED"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Checkout has been fully refunded to customer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"PARTIALLY_REFUNDED"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Checkout have been partially refunded to customer")))),(0,i.kt)("h2",{id:"step-4-test-the-integration"},"Step 4: Test the Integration"),(0,i.kt)("p",null,"Once your integration is ready, you can use the below test card details to verify your integration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Number: ",(0,i.kt)("inlineCode",{parentName:"li"},"4242 4242 4242 4242")),(0,i.kt)("li",{parentName:"ul"},"Expiry date: ",(0,i.kt)("inlineCode",{parentName:"li"},"12/25")),(0,i.kt)("li",{parentName:"ul"},"CVV: ",(0,i.kt)("inlineCode",{parentName:"li"},"100")),(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"TEST USER"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"GO LIVE REQUIREMENTS")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before receiving your live API Key and Secret, make sure your web application is compliant with our website requirements. To learn more, view the ",(0,i.kt)("a",{parentName:"p",href:"/guides/developer/website-checklist"},"Website go-live checklist"),"."))))}m.isMDXComponent=!0},55139:function(e,t,n){t.Z=n.p+"assets/images/sdk-flow-c0b29523b0c1176499edfc278f2706ad.png"}}]);
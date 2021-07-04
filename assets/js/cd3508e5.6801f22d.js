(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[916],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1376:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=["components"],l={title:"iOS SDK"},c=void 0,s={unversionedId:"integrate/sdks/ios",id:"integrate/sdks/ios",isDocsHomePage:!1,title:"iOS SDK",description:"View on GitHub",source:"@site/docs/1-integrate/2-sdks/1-ios.md",sourceDirName:"1-integrate/2-sdks",slug:"/integrate/sdks/ios",permalink:"/docs/integrate/sdks/ios",version:"current",sidebarPosition:1,frontMatter:{title:"iOS SDK"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/integrate/sdks"},next:{title:"Android SDK",permalink:"/docs/integrate/sdks/android"}},p=[{value:"SDK Flow",id:"sdk-flow",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Using the SDK",id:"using-the-sdk",children:[{value:"Device Checkout request",id:"device-checkout-request",children:[]},{value:"Create a new PointCheckoutClient",id:"create-a-new-pointcheckoutclient",children:[]},{value:"Start the Payment Process",id:"start-the-payment-process",children:[]},{value:"Listen to Payment Events",id:"listen-to-payment-events",children:[]},{value:"Retrieve Checkout Status",id:"retrieve-checkout-status",children:[]}]},{value:"API References",id:"api-references",children:[]}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{className:"button button--primary button--large",href:"http://www.github.com/pointcheckout/ios-sdk"},"View on GitHub"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"This shows the steps requires to use the PointCheckout iOS SDK for accepting card payments via the PointCheckout payment gateway in your iOS mobile application."),(0,o.kt)("h2",{id:"sdk-flow"},"SDK Flow"),(0,o.kt)("p",null,"The PointCheckout iOS SDK requires three distinct steps for you to accept card payments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new Device Checkout"),(0,o.kt)("li",{parentName:"ol"},"Initiate the SDK's PointCheckoutClient using the provided checkout key"),(0,o.kt)("li",{parentName:"ol"},"Query the API for the payment status")),(0,o.kt)("p",null,"This diagram shows the overall payment and data flow in order to accept payments using the PointCheckout\nmobile SDK"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence Diagram",src:n(8156).Z})),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"We support CocoaPods. To install the PointCheckout iOS SDK:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add PointCheckoutSdk to your project by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"li"},"Podfile"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pod 'PointCheckoutSdk', :git => 'git@github.com:pointcheckout/merchant-ios-sdk.git', :tag=> v${version}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"replace ${version} with the latest version of the SDK, you can check all available versions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointcheckout/merchant-ios-sdk/releases"},"here"),". Example: ",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"pod 'PointCheckoutSdk', :git => 'git@github.com:pointcheckout/merchant-ios-sdk.git', :tag=> v1.1")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install")," inside the project directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Re-build the project."))),(0,o.kt)("h2",{id:"using-the-sdk"},"Using the SDK"),(0,o.kt)("h3",{id:"device-checkout-request"},"Device Checkout request"),(0,o.kt)("p",null,"Send new checkout request to ",(0,o.kt)("a",{parentName:"p",href:"https://www.pointcheckout.com/en/developers/api/api-integration"},"PointCheckout's API")," using endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/mer/v2.0/checkouts")," (check the ",(0,o.kt)("a",{parentName:"p",href:"https://www.pointcheckout.com/en/developers/api/api-integration"},"documentation")," for more details)."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"SERVER API CALL")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"API calls made to the PointCheckout API endpoints should be made from your server. You should ",(0,o.kt)("strong",{parentName:"p"},"NEVER")," include your API keys in your mobile application. A mallicious user can gain access to your account if those keys are exposed."))),(0,o.kt)("h3",{id:"create-a-new-pointcheckoutclient"},"Create a new PointCheckoutClient"),(0,o.kt)("p",null,"Create an object of PointCheckoutClient:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"var pcoClient = PointCheckoutClient();\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Environment"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Enviornment.PRODUCTION")),(0,o.kt)("td",{parentName:"tr",align:null},"Use this for accepting customer payments")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Enviornment.TEST")),(0,o.kt)("td",{parentName:"tr",align:null},"Use this during integration testing")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Keep a reference of the created client to reuse the same instance"))),(0,o.kt)("h3",{id:"start-the-payment-process"},"Start the Payment Process"),(0,o.kt)("p",null,"To commence the payment process, you must call the static ",(0,o.kt)("inlineCode",{parentName:"p"},"pay")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PointCheckoutClient"),". This method accepts 3 parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"viewController"))," is a UIViewController that is calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"pay")," function"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"checkoutKey"))," received in the ",(0,o.kt)("a",{parentName:"li",href:"#device-checkout-request"},"Device Checkout Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"delegate"))," that will be called on payment update or cancellation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"pcClient.pay(controller: viewController, checkoutKey: strCheckoutKey, delegate: callback)\n")),(0,o.kt)("p",null,"Calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"pay")," function will open a modal where the user will be able to complete the payment in a secure manner."),(0,o.kt)("h3",{id:"listen-to-payment-events"},"Listen to Payment Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PointCheckoutPaymentDelegate")," has two callbacks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"onDismiss")," which is called if the user closes the modal by clicking on dismiss or close button; and"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"onUpdate")," which is called the checkout status is updated (paid, cancelled, failed .etc). You ",(0,o.kt)("strong",{parentName:"li"},"MUST")," call PointCheckout API to fetch the new status of the checkout to verify that its been successfully paid.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport PointCheckoutSdk\n\nclass ViewController: UIViewController, PointCheckoutPaymentDelegate{\n    override func viewDidLoad() {\n        super.viewDidLoad()\n    }\n\n    func onUpdate(){\n        print("UPDATE CALLBACK")\n    }\n\n    func onDismiss(){\n        print("USER CLOSED THE MODAL")\n    }\n}\n')),(0,o.kt)("h3",{id:"retrieve-checkout-status"},"Retrieve Checkout Status"),(0,o.kt)("p",null,"Retrieve checkout request to ",(0,o.kt)("a",{parentName:"p",href:"https://www.pointcheckout.com/en/developers/api/api-integration"},"PointCheckout's API")," using endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/mer/v2.0/checkouts")," (check the ",(0,o.kt)("a",{parentName:"p",href:"https://www.pointcheckout.com/en/developers/api/api-integration"},"documentation")," for more details)."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"SERVER API CALL")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"API calls made to the PointCheckout API endpoints should be made from your server. You should ",(0,o.kt)("strong",{parentName:"p"},"NEVER")," include your API keys in your mobile application. A mallicious user can gain access to your account if those keys are exposed."))),(0,o.kt)("h2",{id:"api-references"},"API References"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. New Device Checkout")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/#operation/get-checkout"},(0,o.kt)("strong",{parentName:"a"},"Instructions"))," / ",(0,o.kt)("a",{parentName:"p",href:"/api/#operation/get-checkout"},(0,o.kt)("strong",{parentName:"a"},"API Details"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Get Checkout Details")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/#operation/get-checkout"},(0,o.kt)("strong",{parentName:"a"},"Instructions"))," / ",(0,o.kt)("a",{parentName:"p",href:"/api/#operation/get-checkout"},(0,o.kt)("strong",{parentName:"a"},"API Details"))))}d.isMDXComponent=!0},8156:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sdk-flow-c0b29523b0c1176499edfc278f2706ad.png"}}]);
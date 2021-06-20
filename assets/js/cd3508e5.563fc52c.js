(self.webpackChunkpco_docs=self.webpackChunkpco_docs||[]).push([[916],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1376:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"iOS SDK"},p=void 0,c={unversionedId:"integrate/sdks/ios",id:"integrate/sdks/ios",isDocsHomePage:!1,title:"iOS SDK",description:"View on GitHub",source:"@site/docs/1-integrate/2-sdks/1-ios.md",sourceDirName:"1-integrate/2-sdks",slug:"/integrate/sdks/ios",permalink:"/docs/integrate/sdks/ios",version:"current",sidebarPosition:1,frontMatter:{title:"iOS SDK"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/integrate/sdks"},next:{title:"Android SDK",permalink:"/docs/integrate/sdks/android"}},u=[{value:"Installing the PointCheckout iOS SDK",id:"installing-the-pointcheckout-ios-sdk",children:[]},{value:"Using the SDK",id:"using-the-sdk",children:[{value:"Importing the SDK into your project",id:"importing-the-sdk-into-your-project",children:[]},{value:"Creating a new payment request",id:"creating-a-new-payment-request",children:[]},{value:"Initiating customer payment",id:"initiating-customer-payment",children:[]},{value:"Listening to payment updates",id:"listening-to-payment-updates",children:[]}]},{value:"Demo application",id:"demo-application",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{className:"button button--primary button--large",href:"http://www.github.com/pointcheckout/ios-sdk"},"View on GitHub"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"These are the minimum required steps to use the PointCheckout SDK in your IOS app."),(0,i.kt)("h2",{id:"installing-the-pointcheckout-ios-sdk"},"Installing the PointCheckout iOS SDK"),(0,i.kt)("h4",{id:"add-pointcheckoutsdk-pod-to-your-podfile"},"Add PointCheckoutSdk pod to your podfile:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"pod 'PointCheckoutSdk', :git => 'git@github.com:pointcheckout/merchant-ios-sdk.git', :tag=> v${version}")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"replace ${version} with the latest version of the SDK, you can check all available versions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pointcheckout/merchant-ios-sdk/releases"},"here"),", example:  ",(0,i.kt)("inlineCode",{parentName:"p"},"pod 'PointCheckoutSdk', :git => 'git@github.com:pointcheckout/merchant-ios-sdk.git', :tag=> v1.1"))),(0,i.kt)("p",null," Execute ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install")," inside the project directory."),(0,i.kt)("p",null," Re-build the project."),(0,i.kt)("h2",{id:"using-the-sdk"},"Using the SDK"),(0,i.kt)("h3",{id:"importing-the-sdk-into-your-project"},"Importing the SDK into your project"),(0,i.kt)("p",null,"You can import the framework using ",(0,i.kt)("inlineCode",{parentName:"p"},"import PointCheckoutSdk")),(0,i.kt)("h3",{id:"creating-a-new-payment-request"},"Creating a new payment request"),(0,i.kt)("p",null,"Send new checkout request to ",(0,i.kt)("a",{parentName:"p",href:"https://www.pointcheckout.com/en/developers/api/api-integration"},"PointCheckout's API")," using endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/mer/v1.2/checkouts")," (check the ",(0,i.kt)("a",{parentName:"p",href:"https://www.pointcheckout.com/en/developers/api/api-integration"},"documentation")," for more details). The SDK needs two variables:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redirectUrl"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Will be returned in the response body of the checkout request. This is the URL to the payment page of PointCheckout. The SDK accepts only PointCheckout URLs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resultUrl"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"This is where you normally redirect the user on payment success or failure, for instance to mark the order as paid on payment success.")))),(0,i.kt)("h3",{id:"initiating-customer-payment"},"Initiating customer payment"),(0,i.kt)("p",null,"To submit a payment call the static ",(0,i.kt)("inlineCode",{parentName:"p"},"pay")," function of the ",(0,i.kt)("inlineCode",{parentName:"p"},"PointCheckoutClient"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"  PointCheckoutClient.pay(\n    controller: viewController,\n    redirectUrl: strRedirectUrl,\n    resultUrl: strResultUrl,\n    delegate: callback\n  )\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"controller"),(0,i.kt)("td",{parentName:"tr",align:null},"A UIViewController calling the pay function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redirectUrl"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the payment page, can be obtained from the API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resultUrl"),(0,i.kt)("td",{parentName:"tr",align:null},"URL that PointCheckout will call upon payment success or failure")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"delegate"),(0,i.kt)("td",{parentName:"tr",align:null},"Delegate that will be called on payment update or cancellation")))),(0,i.kt)("p",null,"Calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"pay")," function will open a modal and the user will be able to login and complete the payment."),(0,i.kt)("h3",{id:"listening-to-payment-updates"},"Listening to payment updates"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"PointCheckoutPaymentDelegate")," to listen for payment updates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport PointCheckoutSdk\n\nclass ViewController: UIViewController, PointCheckoutPaymentDelegate{\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n\n    }\n\n    func onPaymentUpdate(){\n        print("UPDATE CALLBACK")\n    }\n\n    func onPaymentCancel(){\n        print("CANCEL CALLBACK")\n    }\n}\n')),(0,i.kt)("h2",{id:"demo-application"},"Demo application"),(0,i.kt)("p",null,"You can use our Demo app as an example of how to integrate our SDK on your application. you can access it from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pointcheckout/merchant-ios-sdk-demo"},"here"),". You can import the example app to Xcode and see how the SDK can be used."))}d.isMDXComponent=!0}}]);
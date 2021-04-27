---
title: iOS SDK
---

These are the minimum required steps to use the PointCheckout SDK in your IOS app.

## Installing the PointCheckout iOS SDK

#### Add PointCheckoutSdk pod to your podfile:

 `pod 'PointCheckoutSdk', :git => 'git@github.com:pointcheckout/merchant-ios-sdk.git', :tag=> v${version}`
> replace ${version} with the latest version of the SDK, you can check all available versions [here](https://github.com/pointcheckout/merchant-ios-sdk/releases), example:  `pod 'PointCheckoutSdk', :git => 'git@github.com:pointcheckout/merchant-ios-sdk.git', :tag=> v1.1`

 Execute `pod install` inside the project directory.

 Re-build the project.

## Using the SDK

### Importing the SDK into your project

You can import the framework using `import PointCheckoutSdk`

### Creating a new payment request

Send new checkout request to [PointCheckout's API](https://www.pointcheckout.com/en/developers/api/api-integration) using endpoint `/mer/v1.2/checkouts` (check the [documentation](https://www.pointcheckout.com/en/developers/api/api-integration) for more details). The SDK needs two variables:

| Variable | Required | Description |
|---|---|---|
| redirectUrl | Yes | Will be returned in the response body of the checkout request. This is the URL to the payment page of PointCheckout. The SDK accepts only PointCheckout URLs. |
| resultUrl | No | This is where you normally redirect the user on payment success or failure, for instance to mark the order as paid on payment success.                        |

### Initiating customer payment

To submit a payment call the static `pay` function of the `PointCheckoutClient`:

```swift
  PointCheckoutClient.pay(
    controller: viewController,
    redirectUrl: strRedirectUrl,
    resultUrl: strResultUrl,
    delegate: callback
  )
```

| Parameter   | Description                                                      |
|-------------|------------------------------------------------------------------|
| controller  | A UIViewController calling the pay function                      |
| redirectUrl | URL of the payment page, can be obtained from the API            |
| resultUrl   | URL that PointCheckout will call upon payment success or failure |
| delegate    | Delegate that will be called on payment update or cancellation   |

Calling the `pay` function will open a modal and the user will be able to login and complete the payment.

### Listening to payment updates

Use `PointCheckoutPaymentDelegate` to listen for payment updates.

```swift
import UIKit
import PointCheckoutSdk

class ViewController: UIViewController, PointCheckoutPaymentDelegate{

    override func viewDidLoad() {
        super.viewDidLoad()

    }

    func onPaymentUpdate(){
        print("UPDATE CALLBACK")
    }

    func onPaymentCancel(){
        print("CANCEL CALLBACK")
    }
}
```

## Demo application
You can use our Demo app as an example of how to integrate our SDK on your application. you can access it from [here](https://github.com/pointcheckout/merchant-ios-sdk-demo). You can import the example app to Xcode and see how the SDK can be used.

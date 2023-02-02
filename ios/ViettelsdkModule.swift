////
////  ViettelsdkModule.swift
////  SourceCore
////
////  Created by aBin MacPro on 10/09/2021.
////  Copyright © 2021 Facebook. All rights reserved.
////
//import Foundation
//import UIKit
//import Flutter
//import FlutterPluginRegistrant
//
//@objc(ViettelsdkModule)
//class ViettelsdkModule: NSObject, FlutterVCDelegate, RCTBridgeModule {
//  static func moduleName() -> String!{
//    return "ViettelsdkModule";
//  }
//  
//
//  static func requiresMainQueueSetup () -> Bool {
//      return true;
//    }
//  
//  //---Code ViettelSDK
//  @objc
//  func openViettelIdSdk(_ callback: RCTResponseSenderBlock) {
////    let modelVC = NativeDemoViewController();
////    DispatchQueue.main.async {
////          let navController = UINavigationController(rootViewController: modelVC)
////          navController.modalPresentationStyle = .fullScreen
////
////      UIApplication.shared.keyWindow?.rootViewController?.present(navController, animated: false, completion: nil);
////
////          let topController = UIApplication.topMostController()
////          topController?.present(navController, animated: true, completion: nil)
////    }
//    //----------
//    
//    print("XX-11")
//    let flutterEngine = FlutterEngine(name: "io.flutter", project: nil)
//    flutterEngine.run(withEntrypoint: nil)
//    GeneratedPluginRegistrant.register(with: flutterEngine)
//
//    let flutterViewController = FlutterVC(engine: flutterEngine, nibName: nil, bundle: nil)
//    flutterViewController.delegate = self
//    flutterViewController.modalPresentationStyle = .fullScreen
//    flutterViewController.flutterEngine = flutterEngine
//    print("XX-22")
//
////----
//    DispatchQueue.main.async {
//      
////      UIApplication.shared.keyWindow?.rootViewController?.present(flutterViewController, animated: false, completion: nil);
//
//      if var topController = UIApplication.shared.keyWindow?.rootViewController {
//        while let presentViewController = topController.presentedViewController {
//          topController = presentViewController
//        }
//        topController.present(flutterViewController, animated: false, completion: nil);
//      }
//      
//    }
//    callback(["XX-33"]);
//    print("XX-33")
//  }
//
//  func callBackData(data: String) {
//          print("accessToken: " + data)
//      }
//
//  //---Code callback trả data về code ReactNative
//  @objc
//    func setSdk(
//      _ resolve: RCTPromiseResolveBlock,
//      rejecter reject: RCTPromiseRejectBlock
//    ) -> Void {
//      do {
////        openViettelIdSdk()
//        print("Token OK 222")
//        resolve("Token OK 222")
//      }
//      catch _ {
//        let errorTemp = NSError(domain: "error", code: 200)
//        reject("error", "count cannot be negative", errorTemp )
//      }
//      
////      if(true) {
////        resolve("Token OK 222")
////      }
////      else {
////        let error = NSError(domain: "error", code: 200)
////        reject("error", "count cannot be negative", error )
////      }
////
//    }
//  
//}

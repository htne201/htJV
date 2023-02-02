//
//  RNCompress.h
//  SourceCore
//
//  Created by Apple on 8/8/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif
NS_ASSUME_NONNULL_BEGIN
@interface RNCompress : NSObject <RCTBridgeModule>

@end

NS_ASSUME_NONNULL_END

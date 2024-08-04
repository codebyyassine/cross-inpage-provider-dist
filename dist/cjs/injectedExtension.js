"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extension_bridge_injected_1 = require("@onekeyfe/extension-bridge-injected");
const cross_inpage_provider_core_1 = require("@onekeyfe/cross-inpage-provider-core");
const inpage_providers_hub_1 = require("@onekeyfe/inpage-providers-hub");
// - send
const bridge = () => new extension_bridge_injected_1.JsBridgeExtInjected({
    receiveHandler: cross_inpage_provider_core_1.injectedProviderReceiveHandler,
});
(0, cross_inpage_provider_core_1.injectJsBridge)(bridge);
(0, inpage_providers_hub_1.injectWeb3Provider)();
console.log('OneKey Provider Ready ', performance.now());
// FIX: Error evaluating injectedJavaScript: This is possibly due to an unsupported return type. Try adding true to the end of your injectedJavaScript string.
// eslint-disable-next-line no-void
void 0;

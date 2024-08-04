"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const desktop_bridge_injected_1 = require("@onekeyfe/desktop-bridge-injected");
const cross_inpage_provider_core_1 = require("@onekeyfe/cross-inpage-provider-core");
const inpage_providers_hub_1 = require("@onekeyfe/inpage-providers-hub");
const bridge = () => new desktop_bridge_injected_1.JsBridgeDesktopInjected({
    receiveHandler: cross_inpage_provider_core_1.injectedProviderReceiveHandler,
});
(0, cross_inpage_provider_core_1.injectJsBridge)(bridge);
(0, inpage_providers_hub_1.injectWeb3Provider)();
// eslint-disable-next-line no-void
void 0;

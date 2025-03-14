import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __esm,
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js
function isMuiElement(element, muiNames) {
  var _a, _b, _c;
  return React.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    element.type.muiName ?? ((_c = (_b = (_a = element.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)
  ) !== -1;
}
var React;
var init_isMuiElement = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js"() {
    React = __toESM(require_react());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/index.js
var init_isMuiElement2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/index.js"() {
    init_isMuiElement();
  }
});

export {
  isMuiElement,
  init_isMuiElement2 as init_isMuiElement
};
//# sourceMappingURL=chunk-I6D2MK6V.js.map

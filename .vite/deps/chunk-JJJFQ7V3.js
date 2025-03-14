import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __esm,
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}
var init_createChainedFunction = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/index.js
var init_createChainedFunction2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/index.js"() {
    init_createChainedFunction();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useControlled/useControlled.js
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React.useRef(controlled !== void 0);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    React.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React.useRef(defaultProp);
    React.useEffect(() => {
      if (!isControlled && !Object.is(defaultValue, defaultProp)) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
var React;
var init_useControlled = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useControlled/useControlled.js"() {
    "use client";
    React = __toESM(require_react());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useControlled/index.js
var init_useControlled2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useControlled/index.js"() {
    init_useControlled();
  }
});

export {
  createChainedFunction,
  init_createChainedFunction2 as init_createChainedFunction,
  useControlled,
  init_useControlled2 as init_useControlled
};
//# sourceMappingURL=chunk-JJJFQ7V3.js.map

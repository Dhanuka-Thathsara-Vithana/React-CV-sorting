import {
  chainPropTypes,
  init_chainPropTypes
} from "./chunk-LLNXM4YE.js";
import {
  require_prop_types
} from "./chunk-HQCYCEJ4.js";
import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __esm,
  __publicField,
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  if (typeof propValue === "function" && !isClassComponent(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var import_prop_types, elementTypeAcceptingRef_default;
var init_elementTypeAcceptingRef = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js"() {
    import_prop_types = __toESM(require_prop_types());
    init_chainPropTypes();
    elementTypeAcceptingRef_default = chainPropTypes(import_prop_types.default.elementType, elementTypeAcceptingRef);
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/elementTypeAcceptingRef/index.js
var init_elementTypeAcceptingRef2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/elementTypeAcceptingRef/index.js"() {
    init_elementTypeAcceptingRef();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/refType/refType.js
var import_prop_types2, refType, refType_default;
var init_refType = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/refType/refType.js"() {
    import_prop_types2 = __toESM(require_prop_types());
    refType = import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]);
    refType_default = refType;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/refType/index.js
var init_refType2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/refType/index.js"() {
    init_refType();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var React, useEnhancedEffect, useEnhancedEffect_default;
var init_useEnhancedEffect = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js"() {
    "use client";
    React = __toESM(require_react());
    useEnhancedEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
    useEnhancedEffect_default = useEnhancedEffect;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useEnhancedEffect/index.js
var init_useEnhancedEffect2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useEnhancedEffect/index.js"() {
    init_useEnhancedEffect();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
function useEventCallback(fn) {
  const ref = React2.useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return React2.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var React2, useEventCallback_default;
var init_useEventCallback = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js"() {
    "use client";
    React2 = __toESM(require_react());
    init_useEnhancedEffect2();
    useEventCallback_default = useEventCallback;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useEventCallback/index.js
var init_useEventCallback2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useEventCallback/index.js"() {
    init_useEventCallback();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
function useLazyRef(init, initArg) {
  const ref = React3.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
var React3, UNINITIALIZED;
var init_useLazyRef = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js"() {
    "use client";
    React3 = __toESM(require_react());
    UNINITIALIZED = {};
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useLazyRef/index.js
var init_useLazyRef2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useLazyRef/index.js"() {
    init_useLazyRef();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useOnMount/useOnMount.js
function useOnMount(fn) {
  React4.useEffect(fn, EMPTY);
}
var React4, EMPTY;
var init_useOnMount = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useOnMount/useOnMount.js"() {
    "use client";
    React4 = __toESM(require_react());
    EMPTY = [];
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useTimeout/useTimeout.js
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
var Timeout;
var init_useTimeout = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useTimeout/useTimeout.js"() {
    "use client";
    init_useLazyRef();
    init_useOnMount();
    Timeout = class _Timeout {
      constructor() {
        __publicField(this, "currentId", null);
        __publicField(this, "clear", () => {
          if (this.currentId !== null) {
            clearTimeout(this.currentId);
            this.currentId = null;
          }
        });
        __publicField(this, "disposeEffect", () => {
          return this.clear;
        });
      }
      static create() {
        return new _Timeout();
      }
      /**
       * Executes `fn` after `delay`, clearing any previously scheduled call.
       */
      start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(() => {
          this.currentId = null;
          fn();
        }, delay);
      }
    };
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useTimeout/index.js
var init_useTimeout2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useTimeout/index.js"() {
    init_useTimeout();
    init_useTimeout();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
function isFocusVisible(element) {
  try {
    return element.matches(":focus-visible");
  } catch (error) {
    if (!/jsdom/.test(window.navigator.userAgent)) {
      console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join("\n"));
    }
  }
  return false;
}
var init_isFocusVisible = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isFocusVisible/index.js
var init_isFocusVisible2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isFocusVisible/index.js"() {
    init_isFocusVisible();
  }
});

export {
  elementTypeAcceptingRef_default,
  init_elementTypeAcceptingRef2 as init_elementTypeAcceptingRef,
  refType_default,
  init_refType2 as init_refType,
  useEnhancedEffect_default,
  init_useEnhancedEffect2 as init_useEnhancedEffect,
  useEventCallback_default,
  init_useEventCallback2 as init_useEventCallback,
  useLazyRef,
  init_useLazyRef2 as init_useLazyRef,
  init_useOnMount,
  Timeout,
  useTimeout,
  init_useTimeout,
  init_useTimeout2,
  isFocusVisible,
  init_isFocusVisible2 as init_isFocusVisible
};
//# sourceMappingURL=chunk-N4QYXURZ.js.map

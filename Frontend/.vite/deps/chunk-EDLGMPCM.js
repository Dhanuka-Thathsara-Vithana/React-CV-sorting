import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __esm,
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/setRef/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
var init_setRef = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/setRef/setRef.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/setRef/index.js
var init_setRef2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/setRef/index.js"() {
    init_setRef();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
function useForkRef(...refs) {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
}
var React;
var init_useForkRef = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useForkRef/useForkRef.js"() {
    "use client";
    React = __toESM(require_react());
    init_setRef2();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useForkRef/index.js
var init_useForkRef2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useForkRef/index.js"() {
    init_useForkRef();
  }
});

export {
  setRef,
  init_setRef2 as init_setRef,
  useForkRef,
  init_useForkRef2 as init_useForkRef
};
//# sourceMappingURL=chunk-EDLGMPCM.js.map

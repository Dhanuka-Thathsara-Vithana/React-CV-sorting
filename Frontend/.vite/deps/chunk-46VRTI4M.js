import {
  DefaultPropsProvider_default,
  GlobalStyles_default,
  defaultTheme_default,
  extendSxProp,
  generateUtilityClass,
  init_DefaultPropsProvider,
  init_defaultTheme,
  init_esm,
  init_generateUtilityClass,
  init_styleFunctionSx,
  init_styled,
  init_useTheme,
  useDefaultProps
} from "./chunk-SYBKTJLL.js";
import {
  identifier_default,
  init_identifier
} from "./chunk-OV2SHWPL.js";
import {
  require_jsx_runtime
} from "./chunk-TMCM54B5.js";
import {
  require_prop_types
} from "./chunk-HQCYCEJ4.js";
import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __esm,
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    let buffer = "";
    let start = true;
    for (let i = 0; i < slot.length; i += 1) {
      const value = slot[i];
      if (value) {
        buffer += (start === true ? "" : " ") + getUtilityClass(value);
        start = false;
        if (classes && classes[value]) {
          buffer += " " + classes[value];
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}
var init_composeClasses = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/composeClasses/index.js
var init_composeClasses2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/composeClasses/index.js"() {
    init_composeClasses();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}
var init_generateUtilityClasses = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"() {
    init_generateUtilityClass();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClasses/index.js
var init_generateUtilityClasses2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClasses/index.js"() {
    init_generateUtilityClasses();
  }
});

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
function GlobalStyles(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles_default, {
    ...props,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}
var React, import_prop_types, import_jsx_runtime, GlobalStyles_default2;
var init_GlobalStyles = __esm({
  "node_modules/@mui/material/GlobalStyles/GlobalStyles.js"() {
    "use client";
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_esm();
    init_defaultTheme();
    init_identifier();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    true ? GlobalStyles.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * The styles you want to apply globally.
       */
      styles: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.bool])
    } : void 0;
    GlobalStyles_default2 = GlobalStyles;
  }
});

// node_modules/@mui/material/GlobalStyles/index.js
var init_GlobalStyles2 = __esm({
  "node_modules/@mui/material/GlobalStyles/index.js"() {
    init_GlobalStyles();
  }
});

// node_modules/@mui/material/zero-styled/index.js
function globalCss(styles) {
  return function GlobalStylesWrapper(props) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      (0, import_jsx_runtime2.jsx)(GlobalStyles_default2, {
        styles: typeof styles === "function" ? (theme) => styles({
          theme,
          ...props
        }) : styles
      })
    );
  };
}
function internal_createExtendSxProp() {
  return extendSxProp;
}
var React2, import_jsx_runtime2;
var init_zero_styled = __esm({
  "node_modules/@mui/material/zero-styled/index.js"() {
    React2 = __toESM(require_react());
    init_styleFunctionSx();
    init_useTheme();
    init_GlobalStyles2();
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    init_esm();
    init_styled();
  }
});

// node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
function DefaultPropsProvider(props) {
  return (0, import_jsx_runtime3.jsx)(DefaultPropsProvider_default, {
    ...props
  });
}
function useDefaultProps2(params) {
  return useDefaultProps(params);
}
var React3, import_prop_types2, import_jsx_runtime3;
var init_DefaultPropsProvider2 = __esm({
  "node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"() {
    "use client";
    React3 = __toESM(require_react());
    import_prop_types2 = __toESM(require_prop_types());
    init_DefaultPropsProvider();
    import_jsx_runtime3 = __toESM(require_jsx_runtime());
    true ? DefaultPropsProvider.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * @ignore
       */
      children: import_prop_types2.default.node,
      /**
       * @ignore
       */
      value: import_prop_types2.default.object.isRequired
    } : void 0;
  }
});

// node_modules/@mui/material/DefaultPropsProvider/index.js
var init_DefaultPropsProvider3 = __esm({
  "node_modules/@mui/material/DefaultPropsProvider/index.js"() {
    init_DefaultPropsProvider2();
  }
});

export {
  composeClasses,
  init_composeClasses2 as init_composeClasses,
  generateUtilityClasses,
  init_generateUtilityClasses2 as init_generateUtilityClasses,
  GlobalStyles_default2 as GlobalStyles_default,
  init_GlobalStyles2 as init_GlobalStyles,
  globalCss,
  internal_createExtendSxProp,
  init_zero_styled,
  useDefaultProps2 as useDefaultProps,
  init_DefaultPropsProvider3 as init_DefaultPropsProvider
};
//# sourceMappingURL=chunk-46VRTI4M.js.map

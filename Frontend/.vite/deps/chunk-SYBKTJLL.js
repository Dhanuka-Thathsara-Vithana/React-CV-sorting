import {
  GlobalStyles,
  ThemeContext,
  borders_default,
  capitalize,
  compose_default,
  createSpacing,
  createTheme_default,
  createUnarySpacing,
  cssGrid_default,
  deepmerge,
  defaultSxConfig_default,
  getValue,
  handleBreakpoints,
  identifier_default,
  init_borders,
  init_breakpoints,
  init_capitalize,
  init_compose,
  init_createBreakpoints,
  init_createSpacing,
  init_createTheme,
  init_cssContainerQueries,
  init_cssGrid,
  init_deepmerge,
  init_defaultSxConfig,
  init_formatMuiErrorMessage,
  init_identifier,
  init_palette,
  init_resolveProps,
  init_responsivePropType,
  init_shape,
  init_sizing,
  init_spacing,
  init_style,
  init_styleFunctionSx,
  init_styled_engine,
  init_useEnhancedEffect,
  init_useMediaQuery,
  init_useTheme,
  init_useThemeProps,
  init_useThemeWithoutDefault,
  internal_mutateStyles,
  internal_serializeStyles,
  isPlainObject,
  mergeBreakpointsInOrder,
  palette_default,
  require_react_is,
  resolveBreakpointValues,
  resolveProps,
  sizing_default,
  spacing_default,
  styleFunctionSx_default,
  style_default,
  styled,
  useEnhancedEffect_default,
  useThemeProps,
  useThemeWithoutDefault_default,
  useTheme_default
} from "./chunk-OV2SHWPL.js";
import {
  require_jsx_runtime
} from "./chunk-TMCM54B5.js";
import {
  require_prop_types
} from "./chunk-HQCYCEJ4.js";
import {
  blue_default,
  common_default,
  green_default,
  grey_default,
  init_blue,
  init_common,
  init_green,
  init_grey,
  init_lightBlue,
  init_orange,
  init_purple,
  init_red,
  lightBlue_default,
  orange_default,
  purple_default,
  red_default
} from "./chunk-YBGP4HOE.js";
import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __commonJS,
  __esm,
  __publicField,
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js
var init_formatMuiErrorMessage2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/formatMuiErrorMessage/index.js
var init_formatMuiErrorMessage3 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/formatMuiErrorMessage/index.js"() {
    init_formatMuiErrorMessage2();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator, createClassNameGenerator, ClassNameGenerator, ClassNameGenerator_default;
var init_ClassNameGenerator = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"() {
    defaultGenerator = (componentName) => componentName;
    createClassNameGenerator = () => {
      let generate = defaultGenerator;
      return {
        configure(generator) {
          generate = generator;
        },
        generate(componentName) {
          return generate(componentName);
        },
        reset() {
          generate = defaultGenerator;
        }
      };
    };
    ClassNameGenerator = createClassNameGenerator();
    ClassNameGenerator_default = ClassNameGenerator;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ClassNameGenerator/index.js
var init_ClassNameGenerator2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ClassNameGenerator/index.js"() {
    init_ClassNameGenerator();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}
var globalStateClasses;
var init_generateUtilityClass = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"() {
    init_ClassNameGenerator2();
    globalStateClasses = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      open: "open",
      readOnly: "readOnly",
      required: "required",
      selected: "selected"
    };
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClass/index.js
var init_generateUtilityClass2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/generateUtilityClass/index.js"() {
    init_generateUtilityClass();
    init_generateUtilityClass();
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/clamp/clamp.js
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
var clamp_default;
var init_clamp = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/clamp/clamp.js"() {
    clamp_default = clamp;
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/clamp/index.js
var init_clamp2 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/clamp/index.js"() {
    init_clamp();
  }
});

// node_modules/@mui/system/esm/colorManipulator/colorManipulator.js
function clampWrapper(value, min = 0, max = 1) {
  if (true) {
    if (value < min || value > max) {
      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }
  return clamp_default(value, min, max);
}
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, "g");
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n);
  }
  if (true) {
    if (color.length !== color.trim().length) {
      console.error(`MUI: The color: "${color}" is invalid. Make sure the color input doesn't contain leading/trailing space.`);
    }
  }
  return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
function decomposeColor(color) {
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf("(");
  const type = color.substring(0, marker);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(type)) {
    throw new Error(true ? `MUI: Unsupported \`${color}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : formatMuiErrorMessage2(9, color));
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === "color") {
    values = values.split(" ");
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === "/") {
      values[3] = values[3].slice(1);
    }
    if (!["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(colorSpace)) {
      throw new Error(true ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage2(10, colorSpace));
    }
  } else {
    values = values.split(",");
  }
  values = values.map((value) => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;
  if (type.includes("rgb")) {
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.includes("hsl")) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.includes("color")) {
    values = `${colorSpace} ${values.join(" ")}`;
  } else {
    values = `${values.join(", ")}`;
  }
  return `${type}(${values})`;
}
function rgbToHex(color) {
  if (color.startsWith("#")) {
    return color;
  }
  const {
    values
  } = decomposeColor(color);
  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === "hsla") {
    type += "a";
    rgb.push(values[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === "hsl" || color.type === "hsla" ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map((val) => {
    if (color.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === "rgb" || color.type === "hsl") {
    color.type += "a";
  }
  if (color.type === "color") {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    if (warning && true) {
      console.warn(warning);
    }
    return color;
  }
}
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes("hsl")) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.includes("rgb") || color.type.includes("color")) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    if (warning && true) {
      console.warn(warning);
    }
    return color;
  }
}
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes("hsl")) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.includes("rgb")) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.includes("color")) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    if (warning && true) {
      console.warn(warning);
    }
    return color;
  }
}
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    if (warning && true) {
      console.warn(warning);
    }
    return color;
  }
}
var colorChannel, private_safeColorChannel;
var init_colorManipulator = __esm({
  "node_modules/@mui/system/esm/colorManipulator/colorManipulator.js"() {
    init_formatMuiErrorMessage();
    init_clamp2();
    colorChannel = (color) => {
      const decomposedColor = decomposeColor(color);
      return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.includes("hsl") && idx !== 0 ? `${val}%` : val).join(" ");
    };
    private_safeColorChannel = (color, warning) => {
      try {
        return colorChannel(color);
      } catch (error) {
        if (warning && true) {
          console.warn(warning);
        }
        return color;
      }
    };
  }
});

// node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js
function GlobalStyles2({
  styles,
  themeId,
  defaultTheme: defaultTheme5 = {}
}) {
  const upperTheme = useTheme_default(defaultTheme5);
  const globalStyles = typeof styles === "function" ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
  return (0, import_jsx_runtime.jsx)(GlobalStyles, {
    styles: globalStyles
  });
}
var React, import_prop_types, import_jsx_runtime, GlobalStyles_default;
var init_GlobalStyles = __esm({
  "node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js"() {
    "use client";
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_styled_engine();
    init_useTheme();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    true ? GlobalStyles2.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * @ignore
       */
      defaultTheme: import_prop_types.default.object,
      /**
       * @ignore
       */
      styles: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.bool]),
      /**
       * @ignore
       */
      themeId: import_prop_types.default.string
    } : void 0;
    GlobalStyles_default = GlobalStyles2;
  }
});

// node_modules/@mui/system/esm/GlobalStyles/index.js
var init_GlobalStyles2 = __esm({
  "node_modules/@mui/system/esm/GlobalStyles/index.js"() {
    init_GlobalStyles();
    init_GlobalStyles();
  }
});

// node_modules/@mui/system/esm/display/display.js
var displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace, display_default;
var init_display = __esm({
  "node_modules/@mui/system/esm/display/display.js"() {
    init_style();
    init_compose();
    displayPrint = style_default({
      prop: "displayPrint",
      cssProperty: false,
      transform: (value) => ({
        "@media print": {
          display: value
        }
      })
    });
    displayRaw = style_default({
      prop: "display"
    });
    overflow = style_default({
      prop: "overflow"
    });
    textOverflow = style_default({
      prop: "textOverflow"
    });
    visibility = style_default({
      prop: "visibility"
    });
    whiteSpace = style_default({
      prop: "whiteSpace"
    });
    display_default = compose_default(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);
  }
});

// node_modules/@mui/system/esm/display/index.js
var init_display2 = __esm({
  "node_modules/@mui/system/esm/display/index.js"() {
    init_display();
    init_display();
  }
});

// node_modules/@mui/system/esm/flexbox/flexbox.js
var flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf, flexbox, flexbox_default;
var init_flexbox = __esm({
  "node_modules/@mui/system/esm/flexbox/flexbox.js"() {
    init_style();
    init_compose();
    flexBasis = style_default({
      prop: "flexBasis"
    });
    flexDirection = style_default({
      prop: "flexDirection"
    });
    flexWrap = style_default({
      prop: "flexWrap"
    });
    justifyContent = style_default({
      prop: "justifyContent"
    });
    alignItems = style_default({
      prop: "alignItems"
    });
    alignContent = style_default({
      prop: "alignContent"
    });
    order = style_default({
      prop: "order"
    });
    flex = style_default({
      prop: "flex"
    });
    flexGrow = style_default({
      prop: "flexGrow"
    });
    flexShrink = style_default({
      prop: "flexShrink"
    });
    alignSelf = style_default({
      prop: "alignSelf"
    });
    justifyItems = style_default({
      prop: "justifyItems"
    });
    justifySelf = style_default({
      prop: "justifySelf"
    });
    flexbox = compose_default(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
    flexbox_default = flexbox;
  }
});

// node_modules/@mui/system/esm/flexbox/index.js
var init_flexbox2 = __esm({
  "node_modules/@mui/system/esm/flexbox/index.js"() {
    init_flexbox();
    init_flexbox();
  }
});

// node_modules/@mui/system/esm/positions/positions.js
var position, zIndex, top, right, bottom, left, positions_default;
var init_positions = __esm({
  "node_modules/@mui/system/esm/positions/positions.js"() {
    init_style();
    init_compose();
    position = style_default({
      prop: "position"
    });
    zIndex = style_default({
      prop: "zIndex",
      themeKey: "zIndex"
    });
    top = style_default({
      prop: "top"
    });
    right = style_default({
      prop: "right"
    });
    bottom = style_default({
      prop: "bottom"
    });
    left = style_default({
      prop: "left"
    });
    positions_default = compose_default(position, zIndex, top, right, bottom, left);
  }
});

// node_modules/@mui/system/esm/positions/index.js
var init_positions2 = __esm({
  "node_modules/@mui/system/esm/positions/index.js"() {
    init_positions();
    init_positions();
  }
});

// node_modules/@mui/system/esm/shadows/shadows.js
var boxShadow, shadows_default;
var init_shadows = __esm({
  "node_modules/@mui/system/esm/shadows/shadows.js"() {
    init_style();
    boxShadow = style_default({
      prop: "boxShadow",
      themeKey: "shadows"
    });
    shadows_default = boxShadow;
  }
});

// node_modules/@mui/system/esm/shadows/index.js
var init_shadows2 = __esm({
  "node_modules/@mui/system/esm/shadows/index.js"() {
    init_shadows();
  }
});

// node_modules/@mui/system/esm/typography/typography.js
var fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, textTransform, lineHeight, textAlign, typographyVariant, typography, typography_default;
var init_typography = __esm({
  "node_modules/@mui/system/esm/typography/typography.js"() {
    init_style();
    init_compose();
    fontFamily = style_default({
      prop: "fontFamily",
      themeKey: "typography"
    });
    fontSize = style_default({
      prop: "fontSize",
      themeKey: "typography"
    });
    fontStyle = style_default({
      prop: "fontStyle",
      themeKey: "typography"
    });
    fontWeight = style_default({
      prop: "fontWeight",
      themeKey: "typography"
    });
    letterSpacing = style_default({
      prop: "letterSpacing"
    });
    textTransform = style_default({
      prop: "textTransform"
    });
    lineHeight = style_default({
      prop: "lineHeight"
    });
    textAlign = style_default({
      prop: "textAlign"
    });
    typographyVariant = style_default({
      prop: "typography",
      cssProperty: false,
      themeKey: "typography"
    });
    typography = compose_default(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
    typography_default = typography;
  }
});

// node_modules/@mui/system/esm/typography/index.js
var init_typography2 = __esm({
  "node_modules/@mui/system/esm/typography/index.js"() {
    init_typography();
    init_typography();
  }
});

// node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
function extendSxProp(props) {
  const {
    sx: inSx,
    ...other
  } = props;
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === "function") {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return {
        ...systemProps,
        ...result
      };
    };
  } else {
    finalSx = {
      ...systemProps,
      ...inSx
    };
  }
  return {
    ...otherProps,
    sx: finalSx
  };
}
var splitProps;
var init_extendSxProp = __esm({
  "node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"() {
    init_deepmerge();
    init_defaultSxConfig();
    splitProps = (props) => {
      var _a;
      const result = {
        systemProps: {},
        otherProps: {}
      };
      const config = ((_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.unstable_sxConfig) ?? defaultSxConfig_default;
      Object.keys(props).forEach((prop) => {
        if (config[prop]) {
          result.systemProps[prop] = props[prop];
        } else {
          result.otherProps[prop] = props[prop];
        }
      });
      return result;
    };
  }
});

// node_modules/@mui/system/esm/styleFunctionSx/index.js
var init_styleFunctionSx2 = __esm({
  "node_modules/@mui/system/esm/styleFunctionSx/index.js"() {
    init_styleFunctionSx();
    init_styleFunctionSx();
    init_extendSxProp();
    init_defaultSxConfig();
  }
});

// node_modules/@mui/system/esm/getThemeValue/getThemeValue.js
var filterPropsMapping, styleFunctionMapping, propToStyleFunction;
var init_getThemeValue = __esm({
  "node_modules/@mui/system/esm/getThemeValue/getThemeValue.js"() {
    init_borders();
    init_display2();
    init_flexbox2();
    init_cssGrid();
    init_positions2();
    init_palette();
    init_shadows2();
    init_sizing();
    init_spacing();
    init_typography2();
    filterPropsMapping = {
      borders: borders_default.filterProps,
      display: display_default.filterProps,
      flexbox: flexbox_default.filterProps,
      grid: cssGrid_default.filterProps,
      positions: positions_default.filterProps,
      palette: palette_default.filterProps,
      shadows: shadows_default.filterProps,
      sizing: sizing_default.filterProps,
      spacing: spacing_default.filterProps,
      typography: typography_default.filterProps
    };
    styleFunctionMapping = {
      borders: borders_default,
      display: display_default,
      flexbox: flexbox_default,
      grid: cssGrid_default,
      positions: positions_default,
      palette: palette_default,
      shadows: shadows_default,
      sizing: sizing_default,
      spacing: spacing_default,
      typography: typography_default
    };
    propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
      filterPropsMapping[styleFnName].forEach((propName) => {
        acc[propName] = styleFunctionMapping[styleFnName];
      });
      return acc;
    }, {});
  }
});

// node_modules/@mui/system/esm/getThemeValue/index.js
var init_getThemeValue2 = __esm({
  "node_modules/@mui/system/esm/getThemeValue/index.js"() {
    init_getThemeValue();
    init_getThemeValue();
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator2, createClassNameGenerator2, ClassNameGenerator2, ClassNameGenerator_default2;
var init_ClassNameGenerator3 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"() {
    defaultGenerator2 = (componentName) => componentName;
    createClassNameGenerator2 = () => {
      let generate = defaultGenerator2;
      return {
        configure(generator) {
          generate = generator;
        },
        generate(componentName) {
          return generate(componentName);
        },
        reset() {
          generate = defaultGenerator2;
        }
      };
    };
    ClassNameGenerator2 = createClassNameGenerator2();
    ClassNameGenerator_default2 = ClassNameGenerator2;
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/ClassNameGenerator/index.js
var init_ClassNameGenerator4 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/ClassNameGenerator/index.js"() {
    init_ClassNameGenerator3();
  }
});

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default;
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
    clsx_default = clsx;
  }
});

// node_modules/@mui/system/esm/createBox/createBox.js
function createBox(options = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme5,
    defaultClassName = "MuiBox-root",
    generateClassName
  } = options;
  const BoxRoot = styled("div", {
    shouldForwardProp: (prop) => prop !== "theme" && prop !== "sx" && prop !== "as"
  })(styleFunctionSx_default);
  const Box2 = React2.forwardRef(function Box3(inProps, ref) {
    const theme = useTheme_default(defaultTheme5);
    const {
      className,
      component = "div",
      ...other
    } = extendSxProp(inProps);
    return (0, import_jsx_runtime2.jsx)(BoxRoot, {
      as: component,
      ref,
      className: clsx_default(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme,
      ...other
    });
  });
  return Box2;
}
var React2, import_jsx_runtime2;
var init_createBox = __esm({
  "node_modules/@mui/system/esm/createBox/createBox.js"() {
    "use client";
    React2 = __toESM(require_react());
    init_clsx();
    init_styled_engine();
    init_styleFunctionSx2();
    init_useTheme();
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
  }
});

// node_modules/@mui/system/esm/createBox/index.js
var init_createBox2 = __esm({
  "node_modules/@mui/system/esm/createBox/index.js"() {
    init_createBox();
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
function generateUtilityClass2(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClasses2[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default2.generate(componentName)}-${slot}`;
}
var globalStateClasses2;
var init_generateUtilityClass3 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"() {
    init_ClassNameGenerator4();
    globalStateClasses2 = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      open: "open",
      readOnly: "readOnly",
      required: "required",
      selected: "selected"
    };
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/generateUtilityClass/index.js
var init_generateUtilityClass4 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/generateUtilityClass/index.js"() {
    init_generateUtilityClass3();
    init_generateUtilityClass3();
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass2(componentName, slot, globalStatePrefix);
  });
  return result;
}
var init_generateUtilityClasses = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"() {
    init_generateUtilityClass4();
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/generateUtilityClasses/index.js
var init_generateUtilityClasses2 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/generateUtilityClasses/index.js"() {
    init_generateUtilityClasses();
  }
});

// node_modules/@mui/system/esm/Box/boxClasses.js
var boxClasses, boxClasses_default;
var init_boxClasses = __esm({
  "node_modules/@mui/system/esm/Box/boxClasses.js"() {
    init_generateUtilityClasses2();
    boxClasses = generateUtilityClasses("MuiBox", ["root"]);
    boxClasses_default = boxClasses;
  }
});

// node_modules/@mui/system/esm/Box/Box.js
var import_prop_types2, Box;
var init_Box = __esm({
  "node_modules/@mui/system/esm/Box/Box.js"() {
    "use client";
    import_prop_types2 = __toESM(require_prop_types());
    init_ClassNameGenerator4();
    init_createBox2();
    init_boxClasses();
    Box = createBox({
      defaultClassName: boxClasses_default.root,
      generateClassName: ClassNameGenerator_default2.generate
    });
    true ? Box.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * @ignore
       */
      children: import_prop_types2.default.node,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types2.default.elementType,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
    } : void 0;
  }
});

// node_modules/@mui/system/esm/Box/index.js
var init_Box2 = __esm({
  "node_modules/@mui/system/esm/Box/index.js"() {
    init_Box();
    init_boxClasses();
    init_boxClasses();
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (typeof Component === "object") {
    switch (Component.$$typeof) {
      case import_react_is.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case import_react_is.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}
var import_react_is;
var init_getDisplayName = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js"() {
    import_react_is = __toESM(require_react_is());
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/getDisplayName/index.js
var init_getDisplayName2 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/getDisplayName/index.js"() {
    init_getDisplayName();
  }
});

// node_modules/@mui/system/esm/preprocessStyles.js
function preprocessStyles(input) {
  const {
    variants,
    ...style2
  } = input;
  const result = {
    variants,
    style: internal_serializeStyles(style2),
    isProcessed: true
  };
  if (result.style === style2) {
    return result;
  }
  if (variants) {
    variants.forEach((variant) => {
      if (typeof variant.style !== "function") {
        variant.style = internal_serializeStyles(variant.style);
      }
    });
  }
  return result;
}
var init_preprocessStyles = __esm({
  "node_modules/@mui/system/esm/preprocessStyles.js"() {
    init_styled_engine();
  }
});

// node_modules/@mui/system/esm/createStyled/createStyled.js
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (_props, styles) => styles[slot];
}
function attachTheme(props, themeId, defaultTheme5) {
  props.theme = isObjectEmpty(props.theme) ? defaultTheme5 : props.theme[themeId] || props.theme;
}
function processStyle(props, style2) {
  const resolvedStyle = typeof style2 === "function" ? style2(props) : style2;
  if (Array.isArray(resolvedStyle)) {
    return resolvedStyle.flatMap((subStyle) => processStyle(props, subStyle));
  }
  if (Array.isArray(resolvedStyle == null ? void 0 : resolvedStyle.variants)) {
    let rootStyle;
    if (resolvedStyle.isProcessed) {
      rootStyle = resolvedStyle.style;
    } else {
      const {
        variants,
        ...otherStyles
      } = resolvedStyle;
      rootStyle = otherStyles;
    }
    return processStyleVariants(props, resolvedStyle.variants, [rootStyle]);
  }
  if (resolvedStyle == null ? void 0 : resolvedStyle.isProcessed) {
    return resolvedStyle.style;
  }
  return resolvedStyle;
}
function processStyleVariants(props, variants, results = []) {
  var _a;
  let mergedState;
  variantLoop:
    for (let i = 0; i < variants.length; i += 1) {
      const variant = variants[i];
      if (typeof variant.props === "function") {
        mergedState ?? (mergedState = {
          ...props,
          ...props.ownerState,
          ownerState: props.ownerState
        });
        if (!variant.props(mergedState)) {
          continue;
        }
      } else {
        for (const key in variant.props) {
          if (props[key] !== variant.props[key] && ((_a = props.ownerState) == null ? void 0 : _a[key]) !== variant.props[key]) {
            continue variantLoop;
          }
        }
      }
      if (typeof variant.style === "function") {
        mergedState ?? (mergedState = {
          ...props,
          ...props.ownerState,
          ownerState: props.ownerState
        });
        results.push(variant.style(mergedState));
      } else {
        results.push(variant.style);
      }
    }
  return results;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme5 = systemDefaultTheme,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
  } = input;
  function styleAttachTheme(props) {
    attachTheme(props, themeId, defaultTheme5);
  }
  const styled4 = (tag, inputOptions = {}) => {
    internal_mutateStyles(tag, (styles) => styles.filter((style2) => style2 !== styleFunctionSx_default));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)),
      ...options
    } = inputOptions;
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
    );
    const skipSx = inputSkipSx || false;
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root" || componentSlot === "root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp2;
    } else if (isStringTag(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = styled(tag, {
      shouldForwardProp: shouldForwardPropOption,
      label: generateStyledLabel(componentName, componentSlot),
      ...options
    });
    const transformStyle = (style2) => {
      if (typeof style2 === "function" && style2.__emotion_real !== style2) {
        return function styleFunctionProcessor(props) {
          return processStyle(props, style2);
        };
      }
      if (isPlainObject(style2)) {
        const serialized = preprocessStyles(style2);
        if (!serialized.variants) {
          return serialized.style;
        }
        return function styleObjectProcessor(props) {
          return processStyle(props, serialized);
        };
      }
      return style2;
    };
    const muiStyledResolver = (...expressionsInput) => {
      const expressionsHead = [];
      const expressionsBody = expressionsInput.map(transformStyle);
      const expressionsTail = [];
      expressionsHead.push(styleAttachTheme);
      if (componentName && overridesResolver) {
        expressionsTail.push(function styleThemeOverrides(props) {
          var _a, _b;
          const theme = props.theme;
          const styleOverrides = (_b = (_a = theme.components) == null ? void 0 : _a[componentName]) == null ? void 0 : _b.styleOverrides;
          if (!styleOverrides) {
            return null;
          }
          const resolvedStyleOverrides = {};
          for (const slotKey in styleOverrides) {
            resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey]);
          }
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsTail.push(function styleThemeVariants(props) {
          var _a, _b;
          const theme = props.theme;
          const themeVariants = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a[componentName]) == null ? void 0 : _b.variants;
          if (!themeVariants) {
            return null;
          }
          return processStyleVariants(props, themeVariants);
        });
      }
      if (!skipSx) {
        expressionsTail.push(styleFunctionSx_default);
      }
      if (Array.isArray(expressionsBody[0])) {
        const inputStrings = expressionsBody.shift();
        const placeholdersHead = new Array(expressionsHead.length).fill("");
        const placeholdersTail = new Array(expressionsTail.length).fill("");
        let outputStrings;
        {
          outputStrings = [...placeholdersHead, ...inputStrings, ...placeholdersTail];
          outputStrings.raw = [...placeholdersHead, ...inputStrings.raw, ...placeholdersTail];
        }
        expressionsHead.unshift(outputStrings);
      }
      const expressions = [...expressionsHead, ...expressionsBody, ...expressionsTail];
      const Component = defaultStyledResolver(...expressions);
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      if (true) {
        Component.displayName = generateDisplayName(componentName, componentSlot, tag);
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
  return styled4;
}
function generateDisplayName(componentName, componentSlot, tag) {
  if (componentName) {
    return `${componentName}${capitalize(componentSlot || "")}`;
  }
  return `Styled(${getDisplayName(tag)})`;
}
function generateStyledLabel(componentName, componentSlot) {
  let label;
  if (true) {
    if (componentName) {
      label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
    }
  }
  return label;
}
function isObjectEmpty(object) {
  for (const _ in object) {
    return false;
  }
  return true;
}
function isStringTag(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}
var systemDefaultTheme;
var init_createStyled = __esm({
  "node_modules/@mui/system/esm/createStyled/createStyled.js"() {
    init_styled_engine();
    init_deepmerge();
    init_capitalize();
    init_getDisplayName2();
    init_createTheme();
    init_styleFunctionSx2();
    init_preprocessStyles();
    systemDefaultTheme = createTheme_default();
  }
});

// node_modules/@mui/system/esm/createStyled/index.js
var init_createStyled2 = __esm({
  "node_modules/@mui/system/esm/createStyled/index.js"() {
    init_createStyled();
    init_createStyled();
  }
});

// node_modules/@mui/system/esm/styled/styled.js
var styled2, styled_default;
var init_styled = __esm({
  "node_modules/@mui/system/esm/styled/styled.js"() {
    init_createStyled2();
    styled2 = createStyled();
    styled_default = styled2;
  }
});

// node_modules/@mui/system/esm/styled/index.js
var init_styled2 = __esm({
  "node_modules/@mui/system/esm/styled/index.js"() {
    init_styled();
  }
});

// node_modules/@mui/system/esm/colorManipulator/index.js
var init_colorManipulator2 = __esm({
  "node_modules/@mui/system/esm/colorManipulator/index.js"() {
    init_colorManipulator();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}
var init_chainPropTypes = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/chainPropTypes/index.js
var init_chainPropTypes2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/chainPropTypes/index.js"() {
    init_chainPropTypes();
  }
});

// node_modules/@mui/private-theming/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/@mui/private-theming/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    (function() {
      function typeOf(object) {
        if ("object" === typeof object && null !== object) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              switch (object = object.type, object) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return object;
                default:
                  switch (object = object && object.$$typeof, object) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                      return object;
                    case REACT_CONSUMER_TYPE:
                      return object;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
      exports.ContextConsumer = REACT_CONSUMER_TYPE;
      exports.ContextProvider = REACT_CONTEXT_TYPE;
      exports.Element = REACT_ELEMENT_TYPE;
      exports.ForwardRef = REACT_FORWARD_REF_TYPE;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Lazy = REACT_LAZY_TYPE;
      exports.Memo = REACT_MEMO_TYPE;
      exports.Portal = REACT_PORTAL_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
      exports.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
      };
      exports.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      };
      exports.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      };
      exports.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      };
      exports.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      };
      exports.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      };
      exports.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      };
      exports.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      };
      exports.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      };
      exports.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      };
      exports.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      };
      exports.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      };
      exports.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
      };
      exports.typeOf = typeOf;
    })();
  }
});

// node_modules/@mui/private-theming/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/@mui/private-theming/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var React3, import_react_is2;
var init_deepmerge2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/deepmerge/deepmerge.js"() {
    React3 = __toESM(require_react());
    import_react_is2 = __toESM(require_react_is2());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/deepmerge/index.js
var init_deepmerge3 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/deepmerge/index.js"() {
    init_deepmerge2();
    init_deepmerge2();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var import_prop_types3, elementAcceptingRef;
var init_elementAcceptingRef = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js"() {
    import_prop_types3 = __toESM(require_prop_types());
    init_chainPropTypes2();
    elementAcceptingRef = chainPropTypes(import_prop_types3.default.element, acceptingRef);
    elementAcceptingRef.isRequired = chainPropTypes(import_prop_types3.default.element.isRequired, acceptingRef);
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/elementAcceptingRef/index.js
var init_elementAcceptingRef2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/elementAcceptingRef/index.js"() {
    init_elementAcceptingRef();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js
function isClassComponent2(elementType) {
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
  if (typeof propValue === "function" && !isClassComponent2(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var import_prop_types4, elementTypeAcceptingRef_default;
var init_elementTypeAcceptingRef = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js"() {
    import_prop_types4 = __toESM(require_prop_types());
    init_chainPropTypes2();
    elementTypeAcceptingRef_default = chainPropTypes(import_prop_types4.default.elementType, elementTypeAcceptingRef);
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/elementTypeAcceptingRef/index.js
var init_elementTypeAcceptingRef2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/elementTypeAcceptingRef/index.js"() {
    init_elementTypeAcceptingRef();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/exactProp/exactProp.js
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return {
    ...propTypes,
    [specialProperty]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  };
}
var specialProperty;
var init_exactProp = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/exactProp/exactProp.js"() {
    specialProperty = "exact-prop: ​";
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/exactProp/index.js
var init_exactProp2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/exactProp/index.js"() {
    init_exactProp();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js
var init_formatMuiErrorMessage4 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/formatMuiErrorMessage/index.js
var init_formatMuiErrorMessage5 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/formatMuiErrorMessage/index.js"() {
    init_formatMuiErrorMessage4();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js
var import_react_is3;
var init_getDisplayName3 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js"() {
    import_react_is3 = __toESM(require_react_is2());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getDisplayName/index.js
var init_getDisplayName4 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getDisplayName/index.js"() {
    init_getDisplayName3();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js
var init_HTMLElementType = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/HTMLElementType/index.js
var init_HTMLElementType2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/HTMLElementType/index.js"() {
    init_HTMLElementType();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js
var ponyfillGlobal_default;
var init_ponyfillGlobal = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js"() {
    ponyfillGlobal_default = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ponyfillGlobal/index.js
var init_ponyfillGlobal2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ponyfillGlobal/index.js"() {
    init_ponyfillGlobal();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/refType/refType.js
var import_prop_types5, refType;
var init_refType = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/refType/refType.js"() {
    import_prop_types5 = __toESM(require_prop_types());
    refType = import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object]);
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/refType/index.js
var init_refType2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/refType/index.js"() {
    init_refType();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/capitalize/capitalize.js
var init_capitalize2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/capitalize/capitalize.js"() {
    init_formatMuiErrorMessage5();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/capitalize/index.js
var init_capitalize3 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/capitalize/index.js"() {
    init_capitalize2();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
var init_createChainedFunction = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/createChainedFunction/index.js
var init_createChainedFunction2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/createChainedFunction/index.js"() {
    init_createChainedFunction();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/debounce/debounce.js
var init_debounce = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/debounce/debounce.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/debounce/index.js
var init_debounce2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/debounce/index.js"() {
    init_debounce();
    init_debounce();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/deprecatedPropType/deprecatedPropType.js
var init_deprecatedPropType = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/deprecatedPropType/deprecatedPropType.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/deprecatedPropType/index.js
var init_deprecatedPropType2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/deprecatedPropType/index.js"() {
    init_deprecatedPropType();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js
var React4;
var init_isMuiElement = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js"() {
    React4 = __toESM(require_react());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isMuiElement/index.js
var init_isMuiElement2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isMuiElement/index.js"() {
    init_isMuiElement();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var init_ownerDocument = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ownerDocument/index.js
var init_ownerDocument2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ownerDocument/index.js"() {
    init_ownerDocument();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
var init_ownerWindow = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js"() {
    init_ownerDocument2();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ownerWindow/index.js
var init_ownerWindow2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ownerWindow/index.js"() {
    init_ownerWindow();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/requirePropFactory/requirePropFactory.js
var init_requirePropFactory = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/requirePropFactory/requirePropFactory.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/requirePropFactory/index.js
var init_requirePropFactory2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/requirePropFactory/index.js"() {
    init_requirePropFactory();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/setRef/setRef.js
var init_setRef = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/setRef/setRef.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/setRef/index.js
var init_setRef2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/setRef/index.js"() {
    init_setRef();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var React5;
var init_useEnhancedEffect2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js"() {
    "use client";
    React5 = __toESM(require_react());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useEnhancedEffect/index.js
var init_useEnhancedEffect3 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useEnhancedEffect/index.js"() {
    init_useEnhancedEffect2();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useId/useId.js
var React6, safeReact, maybeReactUseId;
var init_useId = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useId/useId.js"() {
    "use client";
    React6 = __toESM(require_react());
    safeReact = {
      ...React6
    };
    maybeReactUseId = safeReact.useId;
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useId/index.js
var init_useId2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useId/index.js"() {
    init_useId();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/unsupportedProp/unsupportedProp.js
var init_unsupportedProp = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/unsupportedProp/unsupportedProp.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/unsupportedProp/index.js
var init_unsupportedProp2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/unsupportedProp/index.js"() {
    init_unsupportedProp();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useControlled/useControlled.js
var React7;
var init_useControlled = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useControlled/useControlled.js"() {
    "use client";
    React7 = __toESM(require_react());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useControlled/index.js
var init_useControlled2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useControlled/index.js"() {
    init_useControlled();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var React8;
var init_useEventCallback = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js"() {
    "use client";
    React8 = __toESM(require_react());
    init_useEnhancedEffect3();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useEventCallback/index.js
var init_useEventCallback2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useEventCallback/index.js"() {
    init_useEventCallback();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var React9;
var init_useForkRef = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useForkRef/useForkRef.js"() {
    "use client";
    React9 = __toESM(require_react());
    init_setRef2();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useForkRef/index.js
var init_useForkRef2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useForkRef/index.js"() {
    init_useForkRef();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
var React10;
var init_useLazyRef = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js"() {
    "use client";
    React10 = __toESM(require_react());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useLazyRef/index.js
var init_useLazyRef2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useLazyRef/index.js"() {
    init_useLazyRef();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useOnMount/useOnMount.js
var React11;
var init_useOnMount = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useOnMount/useOnMount.js"() {
    "use client";
    React11 = __toESM(require_react());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useTimeout/useTimeout.js
var Timeout;
var init_useTimeout = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useTimeout/useTimeout.js"() {
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

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useTimeout/index.js
var init_useTimeout2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useTimeout/index.js"() {
    init_useTimeout();
    init_useTimeout();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useOnMount/index.js
var init_useOnMount2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useOnMount/index.js"() {
    init_useOnMount();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useIsFocusVisible/useIsFocusVisible.js
var React12, hadFocusVisibleRecentlyTimeout;
var init_useIsFocusVisible = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useIsFocusVisible/useIsFocusVisible.js"() {
    "use client";
    React12 = __toESM(require_react());
    init_useTimeout();
    hadFocusVisibleRecentlyTimeout = new Timeout();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useIsFocusVisible/index.js
var init_useIsFocusVisible2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useIsFocusVisible/index.js"() {
    init_useIsFocusVisible();
    init_useIsFocusVisible();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
var init_isFocusVisible = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isFocusVisible/index.js
var init_isFocusVisible2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isFocusVisible/index.js"() {
    init_isFocusVisible();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
var init_getScrollbarSize = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getScrollbarSize/index.js
var init_getScrollbarSize2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getScrollbarSize/index.js"() {
    init_getScrollbarSize();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js
var React13;
var init_usePreviousProps = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js"() {
    "use client";
    React13 = __toESM(require_react());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/usePreviousProps/index.js
var init_usePreviousProps2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/usePreviousProps/index.js"() {
    init_usePreviousProps();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getValidReactChildren/getValidReactChildren.js
var React14;
var init_getValidReactChildren = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getValidReactChildren/getValidReactChildren.js"() {
    React14 = __toESM(require_react());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getValidReactChildren/index.js
var init_getValidReactChildren2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getValidReactChildren/index.js"() {
    init_getValidReactChildren();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js
var init_visuallyHidden = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/visuallyHidden/index.js
var init_visuallyHidden2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/visuallyHidden/index.js"() {
    init_visuallyHidden();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/integerPropType/integerPropType.js
function getTypeByValue(value) {
  const valueType = typeof value;
  switch (valueType) {
    case "number":
      if (Number.isNaN(value)) {
        return "NaN";
      }
      if (!Number.isFinite(value)) {
        return "Infinity";
      }
      if (value !== Math.floor(value)) {
        return "float";
      }
      return "number";
    case "object":
      if (value === null) {
        return "null";
      }
      return value.constructor.name;
    default:
      return valueType;
  }
}
function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue == null || !Number.isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, ...other) {
  const propValue = props[propName];
  if (propValue === void 0) {
    return null;
  }
  return requiredInteger(props, propName, ...other);
}
function validatorNoop() {
  return null;
}
var init_integerPropType = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/integerPropType/integerPropType.js"() {
    validator.isRequired = requiredInteger;
    validatorNoop.isRequired = validatorNoop;
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/integerPropType/index.js
var init_integerPropType2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/integerPropType/index.js"() {
    init_integerPropType();
    init_integerPropType();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/resolveProps/resolveProps.js
var init_resolveProps2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/resolveProps/resolveProps.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/resolveProps/index.js
var init_resolveProps3 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/resolveProps/index.js"() {
    init_resolveProps2();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var init_composeClasses = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/composeClasses/index.js
var init_composeClasses2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/composeClasses/index.js"() {
    init_composeClasses();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator3, createClassNameGenerator3, ClassNameGenerator3;
var init_ClassNameGenerator5 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"() {
    defaultGenerator3 = (componentName) => componentName;
    createClassNameGenerator3 = () => {
      let generate = defaultGenerator3;
      return {
        configure(generator) {
          generate = generator;
        },
        generate(componentName) {
          return generate(componentName);
        },
        reset() {
          generate = defaultGenerator3;
        }
      };
    };
    ClassNameGenerator3 = createClassNameGenerator3();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ClassNameGenerator/index.js
var init_ClassNameGenerator6 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/ClassNameGenerator/index.js"() {
    init_ClassNameGenerator5();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var init_generateUtilityClass5 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"() {
    init_ClassNameGenerator6();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/generateUtilityClass/index.js
var init_generateUtilityClass6 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/generateUtilityClass/index.js"() {
    init_generateUtilityClass5();
    init_generateUtilityClass5();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var init_generateUtilityClasses3 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"() {
    init_generateUtilityClass6();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/generateUtilityClasses/index.js
var init_generateUtilityClasses4 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/generateUtilityClasses/index.js"() {
    init_generateUtilityClasses3();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/clamp/clamp.js
var init_clamp3 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/clamp/clamp.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/clamp/index.js
var init_clamp4 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/clamp/index.js"() {
    init_clamp3();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
var init_isHostComponent = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isHostComponent/index.js
var init_isHostComponent2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/isHostComponent/index.js"() {
    init_isHostComponent();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js
var init_appendOwnerState = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js"() {
    init_isHostComponent2();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/appendOwnerState/index.js
var init_appendOwnerState2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/appendOwnerState/index.js"() {
    init_appendOwnerState();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var init_extractEventHandlers = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/extractEventHandlers/index.js
var init_extractEventHandlers2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/extractEventHandlers/index.js"() {
    init_extractEventHandlers();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
var init_omitEventHandlers = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/omitEventHandlers/index.js
var init_omitEventHandlers2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/omitEventHandlers/index.js"() {
    init_omitEventHandlers();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js
var init_mergeSlotProps = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js"() {
    init_clsx();
    init_extractEventHandlers2();
    init_omitEventHandlers2();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/mergeSlotProps/index.js
var init_mergeSlotProps2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/mergeSlotProps/index.js"() {
    init_mergeSlotProps();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js
var init_resolveComponentProps = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/resolveComponentProps/index.js
var init_resolveComponentProps2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/resolveComponentProps/index.js"() {
    init_resolveComponentProps();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var init_useSlotProps = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js"() {
    "use client";
    init_useForkRef2();
    init_appendOwnerState2();
    init_mergeSlotProps2();
    init_resolveComponentProps2();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useSlotProps/index.js
var init_useSlotProps2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/useSlotProps/index.js"() {
    init_useSlotProps();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getReactNodeRef/getReactNodeRef.js
var React15;
var init_getReactNodeRef = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getReactNodeRef/getReactNodeRef.js"() {
    React15 = __toESM(require_react());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getReactNodeRef/index.js
var init_getReactNodeRef2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getReactNodeRef/index.js"() {
    init_getReactNodeRef();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var React16;
var init_getReactElementRef = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js"() {
    React16 = __toESM(require_react());
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getReactElementRef/index.js
var init_getReactElementRef2 = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/getReactElementRef/index.js"() {
    init_getReactElementRef();
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/types.js
var init_types = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/types.js"() {
  }
});

// node_modules/@mui/private-theming/node_modules/@mui/utils/esm/index.js
var init_esm = __esm({
  "node_modules/@mui/private-theming/node_modules/@mui/utils/esm/index.js"() {
    init_chainPropTypes2();
    init_deepmerge3();
    init_deepmerge3();
    init_elementAcceptingRef2();
    init_elementTypeAcceptingRef2();
    init_exactProp2();
    init_formatMuiErrorMessage5();
    init_getDisplayName4();
    init_HTMLElementType2();
    init_ponyfillGlobal2();
    init_refType2();
    init_capitalize3();
    init_createChainedFunction2();
    init_debounce2();
    init_deprecatedPropType2();
    init_isMuiElement2();
    init_ownerDocument2();
    init_ownerWindow2();
    init_requirePropFactory2();
    init_setRef2();
    init_useEnhancedEffect3();
    init_useId2();
    init_unsupportedProp2();
    init_useControlled2();
    init_useEventCallback2();
    init_useForkRef2();
    init_useLazyRef2();
    init_useTimeout2();
    init_useOnMount2();
    init_useIsFocusVisible2();
    init_isFocusVisible2();
    init_getScrollbarSize2();
    init_usePreviousProps2();
    init_getValidReactChildren2();
    init_visuallyHidden2();
    init_integerPropType2();
    init_resolveProps3();
    init_composeClasses2();
    init_generateUtilityClass6();
    init_generateUtilityClass6();
    init_generateUtilityClass6();
    init_generateUtilityClasses4();
    init_ClassNameGenerator6();
    init_clamp4();
    init_useSlotProps2();
    init_resolveComponentProps2();
    init_extractEventHandlers2();
    init_getReactNodeRef2();
    init_getReactElementRef2();
    init_types();
  }
});

// node_modules/@mui/private-theming/useTheme/ThemeContext.js
var React17, ThemeContext2, ThemeContext_default;
var init_ThemeContext = __esm({
  "node_modules/@mui/private-theming/useTheme/ThemeContext.js"() {
    "use client";
    React17 = __toESM(require_react());
    ThemeContext2 = React17.createContext(null);
    if (true) {
      ThemeContext2.displayName = "ThemeContext";
    }
    ThemeContext_default = ThemeContext2;
  }
});

// node_modules/@mui/private-theming/useTheme/useTheme.js
function useTheme() {
  const theme = React18.useContext(ThemeContext_default);
  if (true) {
    React18.useDebugValue(theme);
  }
  return theme;
}
var React18;
var init_useTheme2 = __esm({
  "node_modules/@mui/private-theming/useTheme/useTheme.js"() {
    React18 = __toESM(require_react());
    init_ThemeContext();
  }
});

// node_modules/@mui/private-theming/useTheme/index.js
var init_useTheme3 = __esm({
  "node_modules/@mui/private-theming/useTheme/index.js"() {
    init_useTheme2();
  }
});

// node_modules/@mui/private-theming/ThemeProvider/nested.js
var hasSymbol, nested_default;
var init_nested = __esm({
  "node_modules/@mui/private-theming/ThemeProvider/nested.js"() {
    hasSymbol = typeof Symbol === "function" && Symbol.for;
    nested_default = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  }
});

// node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    if (true) {
      if (!mergedTheme) {
        console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join("\n"));
      }
    }
    return mergedTheme;
  }
  return {
    ...outerTheme,
    ...localTheme
  };
}
function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();
  if (true) {
    if (outerTheme === null && typeof localTheme === "function") {
      console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  const theme = React19.useMemo(() => {
    const output = outerTheme === null ? {
      ...localTheme
    } : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested_default] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return (0, import_jsx_runtime3.jsx)(ThemeContext_default.Provider, {
    value: theme,
    children
  });
}
var React19, import_prop_types6, import_jsx_runtime3, ThemeProvider_default;
var init_ThemeProvider = __esm({
  "node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js"() {
    React19 = __toESM(require_react());
    import_prop_types6 = __toESM(require_prop_types());
    init_esm();
    init_ThemeContext();
    init_useTheme3();
    init_nested();
    import_jsx_runtime3 = __toESM(require_jsx_runtime());
    true ? ThemeProvider.propTypes = {
      /**
       * Your component tree.
       */
      children: import_prop_types6.default.node,
      /**
       * A theme object. You can provide a function to extend the outer theme.
       */
      theme: import_prop_types6.default.oneOfType([import_prop_types6.default.object, import_prop_types6.default.func]).isRequired
    } : void 0;
    if (true) {
      true ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
    }
    ThemeProvider_default = ThemeProvider;
  }
});

// node_modules/@mui/private-theming/ThemeProvider/index.js
var init_ThemeProvider2 = __esm({
  "node_modules/@mui/private-theming/ThemeProvider/index.js"() {
    init_ThemeProvider();
    init_nested();
  }
});

// node_modules/@mui/private-theming/index.js
var init_private_theming = __esm({
  "node_modules/@mui/private-theming/index.js"() {
    init_ThemeProvider2();
    init_ThemeProvider2();
    init_useTheme3();
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/exactProp/exactProp.js
function exactProp2(propTypes) {
  if (false) {
    return propTypes;
  }
  return {
    ...propTypes,
    [specialProperty2]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  };
}
var specialProperty2;
var init_exactProp3 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/exactProp/exactProp.js"() {
    specialProperty2 = "exact-prop: ​";
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/exactProp/index.js
var init_exactProp4 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/exactProp/index.js"() {
    init_exactProp3();
  }
});

// node_modules/@mui/system/esm/RtlProvider/index.js
function RtlProvider({
  value,
  ...props
}) {
  return (0, import_jsx_runtime4.jsx)(RtlContext.Provider, {
    value: value ?? true,
    ...props
  });
}
var React20, import_prop_types7, import_jsx_runtime4, RtlContext, useRtl, RtlProvider_default;
var init_RtlProvider = __esm({
  "node_modules/@mui/system/esm/RtlProvider/index.js"() {
    "use client";
    React20 = __toESM(require_react());
    import_prop_types7 = __toESM(require_prop_types());
    import_jsx_runtime4 = __toESM(require_jsx_runtime());
    RtlContext = React20.createContext();
    true ? RtlProvider.propTypes = {
      children: import_prop_types7.default.node,
      value: import_prop_types7.default.bool
    } : void 0;
    useRtl = () => {
      const value = React20.useContext(RtlContext);
      return value ?? false;
    };
    RtlProvider_default = RtlProvider;
  }
});

// node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js
function DefaultPropsProvider({
  value,
  children
}) {
  return (0, import_jsx_runtime5.jsx)(PropsContext.Provider, {
    value,
    children
  });
}
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name]) {
    return props;
  }
  const config = theme.components[name];
  if (config.defaultProps) {
    return resolveProps(config.defaultProps, props);
  }
  if (!config.styleOverrides && !config.variants) {
    return resolveProps(config, props);
  }
  return props;
}
function useDefaultProps({
  props,
  name
}) {
  const ctx = React21.useContext(PropsContext);
  return getThemeProps({
    props,
    name,
    theme: {
      components: ctx
    }
  });
}
var React21, import_prop_types8, import_jsx_runtime5, PropsContext, DefaultPropsProvider_default;
var init_DefaultPropsProvider = __esm({
  "node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js"() {
    "use client";
    React21 = __toESM(require_react());
    import_prop_types8 = __toESM(require_prop_types());
    init_resolveProps();
    import_jsx_runtime5 = __toESM(require_jsx_runtime());
    PropsContext = React21.createContext(void 0);
    true ? DefaultPropsProvider.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * @ignore
       */
      children: import_prop_types8.default.node,
      /**
       * @ignore
       */
      value: import_prop_types8.default.object
    } : void 0;
    DefaultPropsProvider_default = DefaultPropsProvider;
  }
});

// node_modules/@mui/system/esm/DefaultPropsProvider/index.js
var init_DefaultPropsProvider2 = __esm({
  "node_modules/@mui/system/esm/DefaultPropsProvider/index.js"() {
    init_DefaultPropsProvider();
  }
});

// node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return React22.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === "function") {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? {
        ...upperTheme,
        [themeId]: mergedTheme
      } : mergedTheme;
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? {
      ...upperTheme,
      [themeId]: localTheme
    } : {
      ...upperTheme,
      ...localTheme
    };
  }, [themeId, upperTheme, localTheme, isPrivate]);
}
function ThemeProvider2(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useThemeWithoutDefault_default(EMPTY_THEME);
  const upperPrivateTheme = useTheme() || EMPTY_THEME;
  if (true) {
    if (upperTheme === null && typeof localTheme === "function" || themeId && upperTheme && !upperTheme[themeId] && typeof localTheme === "function") {
      console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = (themeId ? engineTheme[themeId] : engineTheme).direction === "rtl";
  return (0, import_jsx_runtime6.jsx)(ThemeProvider_default, {
    theme: privateTheme,
    children: (0, import_jsx_runtime6.jsx)(ThemeContext.Provider, {
      value: engineTheme,
      children: (0, import_jsx_runtime6.jsx)(RtlProvider_default, {
        value: rtlValue,
        children: (0, import_jsx_runtime6.jsx)(DefaultPropsProvider_default, {
          value: themeId ? engineTheme[themeId].components : engineTheme.components,
          children
        })
      })
    })
  });
}
var React22, import_prop_types9, import_jsx_runtime6, EMPTY_THEME, ThemeProvider_default2;
var init_ThemeProvider3 = __esm({
  "node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js"() {
    "use client";
    React22 = __toESM(require_react());
    import_prop_types9 = __toESM(require_prop_types());
    init_private_theming();
    init_exactProp4();
    init_styled_engine();
    init_useThemeWithoutDefault();
    init_RtlProvider();
    init_DefaultPropsProvider2();
    import_jsx_runtime6 = __toESM(require_jsx_runtime());
    EMPTY_THEME = {};
    true ? ThemeProvider2.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * Your component tree.
       */
      children: import_prop_types9.default.node,
      /**
       * A theme object. You can provide a function to extend the outer theme.
       */
      theme: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object]).isRequired,
      /**
       * The design system's unique id for getting the corresponded theme when there are multiple design systems.
       */
      themeId: import_prop_types9.default.string
    } : void 0;
    if (true) {
      true ? ThemeProvider2.propTypes = exactProp2(ThemeProvider2.propTypes) : void 0;
    }
    ThemeProvider_default2 = ThemeProvider2;
  }
});

// node_modules/@mui/system/esm/ThemeProvider/index.js
var init_ThemeProvider4 = __esm({
  "node_modules/@mui/system/esm/ThemeProvider/index.js"() {
    init_ThemeProvider3();
  }
});

// node_modules/@mui/system/esm/memoTheme.js
function unstable_memoTheme(styleFn) {
  let lastValue;
  let lastTheme;
  return function styleMemoized(props) {
    let value = lastValue;
    if (value === void 0 || props.theme !== lastTheme) {
      arg.theme = props.theme;
      value = preprocessStyles(styleFn(arg));
      lastValue = value;
      lastTheme = props.theme;
    }
    return value;
  };
}
var arg;
var init_memoTheme = __esm({
  "node_modules/@mui/system/esm/memoTheme.js"() {
    init_preprocessStyles();
    arg = {
      theme: void 0
    };
  }
});

// node_modules/@mui/system/esm/InitColorSchemeScript/InitColorSchemeScript.js
function InitColorSchemeScript(options) {
  const {
    defaultMode = "system",
    defaultLightColorScheme = "light",
    defaultDarkColorScheme = "dark",
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    attribute: initialAttribute = DEFAULT_ATTRIBUTE,
    colorSchemeNode = "document.documentElement",
    nonce
  } = options || {};
  let setter = "";
  let attribute = initialAttribute;
  if (initialAttribute === "class") {
    attribute = ".%s";
  }
  if (initialAttribute === "data") {
    attribute = "[data-%s]";
  }
  if (attribute.startsWith(".")) {
    const selector = attribute.substring(1);
    setter += `${colorSchemeNode}.classList.remove('${selector}'.replace('%s', light), '${selector}'.replace('%s', dark));
      ${colorSchemeNode}.classList.add('${selector}'.replace('%s', colorScheme));`;
  }
  const matches = attribute.match(/\[([^\]]+)\]/);
  if (matches) {
    const [attr, value] = matches[1].split("=");
    if (!value) {
      setter += `${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', light));
      ${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', dark));`;
    }
    setter += `
      ${colorSchemeNode}.setAttribute('${attr}'.replace('%s', colorScheme), ${value ? `${value}.replace('%s', colorScheme)` : '""'});`;
  } else {
    setter += `${colorSchemeNode}.setAttribute('${attribute}', colorScheme);`;
  }
  return (0, import_jsx_runtime7.jsx)("script", {
    suppressHydrationWarning: true,
    nonce: typeof window === "undefined" ? nonce : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${modeStorageKey}') || '${defaultMode}';
  const dark = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
  const light = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${setter}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
var React23, import_jsx_runtime7, DEFAULT_MODE_STORAGE_KEY, DEFAULT_COLOR_SCHEME_STORAGE_KEY, DEFAULT_ATTRIBUTE;
var init_InitColorSchemeScript = __esm({
  "node_modules/@mui/system/esm/InitColorSchemeScript/InitColorSchemeScript.js"() {
    React23 = __toESM(require_react());
    import_jsx_runtime7 = __toESM(require_jsx_runtime());
    DEFAULT_MODE_STORAGE_KEY = "mode";
    DEFAULT_COLOR_SCHEME_STORAGE_KEY = "color-scheme";
    DEFAULT_ATTRIBUTE = "data-color-scheme";
  }
});

// node_modules/@mui/system/esm/cssVars/localStorageManager.js
function noop() {
}
var localStorageManager, localStorageManager_default;
var init_localStorageManager = __esm({
  "node_modules/@mui/system/esm/cssVars/localStorageManager.js"() {
    localStorageManager = ({
      key,
      storageWindow
    }) => {
      if (!storageWindow && typeof window !== "undefined") {
        storageWindow = window;
      }
      return {
        get(defaultValue) {
          if (typeof window === "undefined") {
            return void 0;
          }
          if (!storageWindow) {
            return defaultValue;
          }
          let value;
          try {
            value = storageWindow.localStorage.getItem(key);
          } catch {
          }
          return value || defaultValue;
        },
        set: (value) => {
          if (storageWindow) {
            try {
              storageWindow.localStorage.setItem(key, value);
            } catch {
            }
          }
        },
        subscribe: (handler) => {
          if (!storageWindow) {
            return noop;
          }
          const listener = (event) => {
            const value = event.newValue;
            if (event.key === key) {
              handler(value);
            }
          };
          storageWindow.addEventListener("storage", listener);
          return () => {
            storageWindow.removeEventListener("storage", listener);
          };
        }
      };
    };
    localStorageManager_default = localStorageManager;
  }
});

// node_modules/@mui/system/esm/cssVars/useCurrentColorScheme.js
function noop2() {
}
function getSystemMode(mode) {
  if (typeof window !== "undefined" && typeof window.matchMedia === "function" && mode === "system") {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    if (mql.matches) {
      return "dark";
    }
    return "light";
  }
  return void 0;
}
function processState(state, callback) {
  if (state.mode === "light" || state.mode === "system" && state.systemMode === "light") {
    return callback("light");
  }
  if (state.mode === "dark" || state.mode === "system" && state.systemMode === "dark") {
    return callback("dark");
  }
  return void 0;
}
function getColorScheme(state) {
  return processState(state, (mode) => {
    if (mode === "light") {
      return state.lightColorScheme;
    }
    if (mode === "dark") {
      return state.darkColorScheme;
    }
    return void 0;
  });
}
function useCurrentColorScheme(options) {
  const {
    defaultMode = "light",
    defaultLightColorScheme,
    defaultDarkColorScheme,
    supportedColorSchemes = [],
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    storageWindow = typeof window === "undefined" ? void 0 : window,
    storageManager = localStorageManager_default,
    noSsr = false
  } = options;
  const joinedColorSchemes = supportedColorSchemes.join(",");
  const isMultiSchemes = supportedColorSchemes.length > 1;
  const modeStorage = React24.useMemo(() => storageManager == null ? void 0 : storageManager({
    key: modeStorageKey,
    storageWindow
  }), [storageManager, modeStorageKey, storageWindow]);
  const lightStorage = React24.useMemo(() => storageManager == null ? void 0 : storageManager({
    key: `${colorSchemeStorageKey}-light`,
    storageWindow
  }), [storageManager, colorSchemeStorageKey, storageWindow]);
  const darkStorage = React24.useMemo(() => storageManager == null ? void 0 : storageManager({
    key: `${colorSchemeStorageKey}-dark`,
    storageWindow
  }), [storageManager, colorSchemeStorageKey, storageWindow]);
  const [state, setState] = React24.useState(() => {
    const initialMode = (modeStorage == null ? void 0 : modeStorage.get(defaultMode)) || defaultMode;
    const lightColorScheme = (lightStorage == null ? void 0 : lightStorage.get(defaultLightColorScheme)) || defaultLightColorScheme;
    const darkColorScheme = (darkStorage == null ? void 0 : darkStorage.get(defaultDarkColorScheme)) || defaultDarkColorScheme;
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme,
      darkColorScheme
    };
  });
  const [isClient, setIsClient] = React24.useState(noSsr || !isMultiSchemes);
  React24.useEffect(() => {
    setIsClient(true);
  }, []);
  const colorScheme = getColorScheme(state);
  const setMode = React24.useCallback((mode) => {
    setState((currentState) => {
      if (mode === currentState.mode) {
        return currentState;
      }
      const newMode = mode ?? defaultMode;
      modeStorage == null ? void 0 : modeStorage.set(newMode);
      return {
        ...currentState,
        mode: newMode,
        systemMode: getSystemMode(newMode)
      };
    });
  }, [modeStorage, defaultMode]);
  const setColorScheme = React24.useCallback((value) => {
    if (!value) {
      setState((currentState) => {
        lightStorage == null ? void 0 : lightStorage.set(defaultLightColorScheme);
        darkStorage == null ? void 0 : darkStorage.set(defaultDarkColorScheme);
        return {
          ...currentState,
          lightColorScheme: defaultLightColorScheme,
          darkColorScheme: defaultDarkColorScheme
        };
      });
    } else if (typeof value === "string") {
      if (value && !joinedColorSchemes.includes(value)) {
        console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
      } else {
        setState((currentState) => {
          const newState = {
            ...currentState
          };
          processState(currentState, (mode) => {
            if (mode === "light") {
              lightStorage == null ? void 0 : lightStorage.set(value);
              newState.lightColorScheme = value;
            }
            if (mode === "dark") {
              darkStorage == null ? void 0 : darkStorage.set(value);
              newState.darkColorScheme = value;
            }
          });
          return newState;
        });
      }
    } else {
      setState((currentState) => {
        const newState = {
          ...currentState
        };
        const newLightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
        const newDarkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
        if (newLightColorScheme) {
          if (!joinedColorSchemes.includes(newLightColorScheme)) {
            console.error(`\`${newLightColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.lightColorScheme = newLightColorScheme;
            lightStorage == null ? void 0 : lightStorage.set(newLightColorScheme);
          }
        }
        if (newDarkColorScheme) {
          if (!joinedColorSchemes.includes(newDarkColorScheme)) {
            console.error(`\`${newDarkColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.darkColorScheme = newDarkColorScheme;
            darkStorage == null ? void 0 : darkStorage.set(newDarkColorScheme);
          }
        }
        return newState;
      });
    }
  }, [joinedColorSchemes, lightStorage, darkStorage, defaultLightColorScheme, defaultDarkColorScheme]);
  const handleMediaQuery = React24.useCallback((event) => {
    if (state.mode === "system") {
      setState((currentState) => {
        const systemMode = (event == null ? void 0 : event.matches) ? "dark" : "light";
        if (currentState.systemMode === systemMode) {
          return currentState;
        }
        return {
          ...currentState,
          systemMode
        };
      });
    }
  }, [state.mode]);
  const mediaListener = React24.useRef(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  React24.useEffect(() => {
    if (typeof window.matchMedia !== "function" || !isMultiSchemes) {
      return void 0;
    }
    const handler = (...args) => mediaListener.current(...args);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addListener(handler);
    handler(media);
    return () => {
      media.removeListener(handler);
    };
  }, [isMultiSchemes]);
  React24.useEffect(() => {
    if (isMultiSchemes) {
      const unsubscribeMode = (modeStorage == null ? void 0 : modeStorage.subscribe((value) => {
        if (!value || ["light", "dark", "system"].includes(value)) {
          setMode(value || defaultMode);
        }
      })) || noop2;
      const unsubscribeLight = (lightStorage == null ? void 0 : lightStorage.subscribe((value) => {
        if (!value || joinedColorSchemes.match(value)) {
          setColorScheme({
            light: value
          });
        }
      })) || noop2;
      const unsubscribeDark = (darkStorage == null ? void 0 : darkStorage.subscribe((value) => {
        if (!value || joinedColorSchemes.match(value)) {
          setColorScheme({
            dark: value
          });
        }
      })) || noop2;
      return () => {
        unsubscribeMode();
        unsubscribeLight();
        unsubscribeDark();
      };
    }
    return void 0;
  }, [setColorScheme, setMode, joinedColorSchemes, defaultMode, storageWindow, isMultiSchemes, modeStorage, lightStorage, darkStorage]);
  return {
    ...state,
    mode: isClient ? state.mode : void 0,
    systemMode: isClient ? state.systemMode : void 0,
    colorScheme: isClient ? colorScheme : void 0,
    setMode,
    setColorScheme
  };
}
var React24;
var init_useCurrentColorScheme = __esm({
  "node_modules/@mui/system/esm/cssVars/useCurrentColorScheme.js"() {
    "use client";
    React24 = __toESM(require_react());
    init_InitColorSchemeScript();
    init_localStorageManager();
  }
});

// node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js
function createCssVarsProvider(options) {
  const {
    themeId,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: defaultTheme5 = {},
    modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey: defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    defaultColorScheme,
    resolveTheme
  } = options;
  const defaultContext = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  };
  const ColorSchemeContext = React25.createContext(void 0);
  if (true) {
    ColorSchemeContext.displayName = "ColorSchemeContext";
  }
  const useColorScheme = () => React25.useContext(ColorSchemeContext) || defaultContext;
  const defaultColorSchemes = {};
  const defaultComponents = {};
  function CssVarsProvider(props) {
    var _a, _b, _c, _d;
    const {
      children,
      theme: themeProp,
      modeStorageKey = defaultModeStorageKey,
      colorSchemeStorageKey = defaultColorSchemeStorageKey,
      disableTransitionOnChange = designSystemTransitionOnChange,
      storageManager,
      storageWindow = typeof window === "undefined" ? void 0 : window,
      documentNode = typeof document === "undefined" ? void 0 : document,
      colorSchemeNode = typeof document === "undefined" ? void 0 : document.documentElement,
      disableNestedContext = false,
      disableStyleSheetGeneration = false,
      defaultMode: initialMode = "system",
      noSsr
    } = props;
    const hasMounted = React25.useRef(false);
    const upperTheme = useTheme();
    const ctx = React25.useContext(ColorSchemeContext);
    const nested = !!ctx && !disableNestedContext;
    const initialTheme = React25.useMemo(() => {
      if (themeProp) {
        return themeProp;
      }
      return typeof defaultTheme5 === "function" ? defaultTheme5() : defaultTheme5;
    }, [themeProp]);
    const scopedTheme = initialTheme[themeId];
    const restThemeProp = scopedTheme || initialTheme;
    const {
      colorSchemes = defaultColorSchemes,
      components = defaultComponents,
      cssVarPrefix
    } = restThemeProp;
    const joinedColorSchemes = Object.keys(colorSchemes).filter((k) => !!colorSchemes[k]).join(",");
    const allColorSchemes = React25.useMemo(() => joinedColorSchemes.split(","), [joinedColorSchemes]);
    const defaultLightColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.dark;
    const defaultMode = colorSchemes[defaultLightColorScheme2] && colorSchemes[defaultDarkColorScheme2] ? initialMode : ((_b = (_a = colorSchemes[restThemeProp.defaultColorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || ((_c = restThemeProp.palette) == null ? void 0 : _c.mode);
    const {
      mode: stateMode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme: stateColorScheme,
      setColorScheme
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme: defaultLightColorScheme2,
      defaultDarkColorScheme: defaultDarkColorScheme2,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageManager,
      storageWindow,
      noSsr
    });
    let mode = stateMode;
    let colorScheme = stateColorScheme;
    if (nested) {
      mode = ctx.mode;
      colorScheme = ctx.colorScheme;
    }
    const memoTheme = React25.useMemo(() => {
      var _a2;
      const calculatedColorScheme = colorScheme || restThemeProp.defaultColorScheme;
      const themeVars = ((_a2 = restThemeProp.generateThemeVars) == null ? void 0 : _a2.call(restThemeProp)) || restThemeProp.vars;
      const theme = {
        ...restThemeProp,
        components,
        colorSchemes,
        cssVarPrefix,
        vars: themeVars
      };
      if (typeof theme.generateSpacing === "function") {
        theme.spacing = theme.generateSpacing();
      }
      if (calculatedColorScheme) {
        const scheme = colorSchemes[calculatedColorScheme];
        if (scheme && typeof scheme === "object") {
          Object.keys(scheme).forEach((schemeKey) => {
            if (scheme[schemeKey] && typeof scheme[schemeKey] === "object") {
              theme[schemeKey] = {
                ...theme[schemeKey],
                ...scheme[schemeKey]
              };
            } else {
              theme[schemeKey] = scheme[schemeKey];
            }
          });
        }
      }
      return resolveTheme ? resolveTheme(theme) : theme;
    }, [restThemeProp, colorScheme, components, colorSchemes, cssVarPrefix]);
    const colorSchemeSelector = restThemeProp.colorSchemeSelector;
    useEnhancedEffect_default(() => {
      if (colorScheme && colorSchemeNode && colorSchemeSelector && colorSchemeSelector !== "media") {
        const selector = colorSchemeSelector;
        let rule = colorSchemeSelector;
        if (selector === "class") {
          rule = `.%s`;
        }
        if (selector === "data") {
          rule = `[data-%s]`;
        }
        if ((selector == null ? void 0 : selector.startsWith("data-")) && !selector.includes("%s")) {
          rule = `[${selector}="%s"]`;
        }
        if (rule.startsWith(".")) {
          colorSchemeNode.classList.remove(...allColorSchemes.map((scheme) => rule.substring(1).replace("%s", scheme)));
          colorSchemeNode.classList.add(rule.substring(1).replace("%s", colorScheme));
        } else {
          const matches = rule.replace("%s", colorScheme).match(/\[([^\]]+)\]/);
          if (matches) {
            const [attr, value] = matches[1].split("=");
            if (!value) {
              allColorSchemes.forEach((scheme) => {
                colorSchemeNode.removeAttribute(attr.replace(colorScheme, scheme));
              });
            }
            colorSchemeNode.setAttribute(attr, value ? value.replace(/"|'/g, "") : "");
          } else {
            colorSchemeNode.setAttribute(rule, colorScheme);
          }
        }
      }
    }, [colorScheme, colorSchemeSelector, colorSchemeNode, allColorSchemes]);
    React25.useEffect(() => {
      let timer;
      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        const css2 = documentNode.createElement("style");
        css2.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css2);
        (() => window.getComputedStyle(documentNode.body))();
        timer = setTimeout(() => {
          documentNode.head.removeChild(css2);
        }, 1);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React25.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    const contextValue = React25.useMemo(() => ({
      allColorSchemes,
      colorScheme,
      darkColorScheme,
      lightColorScheme,
      mode,
      setColorScheme,
      setMode: false ? setMode : (newMode) => {
        if (memoTheme.colorSchemeSelector === "media") {
          console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join("\n"));
        }
        setMode(newMode);
      },
      systemMode
    }), [allColorSchemes, colorScheme, darkColorScheme, lightColorScheme, mode, setColorScheme, setMode, systemMode, memoTheme.colorSchemeSelector]);
    let shouldGenerateStyleSheet = true;
    if (disableStyleSheetGeneration || restThemeProp.cssVariables === false || nested && (upperTheme == null ? void 0 : upperTheme.cssVarPrefix) === cssVarPrefix) {
      shouldGenerateStyleSheet = false;
    }
    const element = (0, import_jsx_runtime8.jsxs)(React25.Fragment, {
      children: [(0, import_jsx_runtime8.jsx)(ThemeProvider_default2, {
        themeId: scopedTheme ? themeId : void 0,
        theme: memoTheme,
        children
      }), shouldGenerateStyleSheet && (0, import_jsx_runtime8.jsx)(GlobalStyles, {
        styles: ((_d = memoTheme.generateStyleSheets) == null ? void 0 : _d.call(memoTheme)) || []
      })]
    });
    if (nested) {
      return element;
    }
    return (0, import_jsx_runtime8.jsx)(ColorSchemeContext.Provider, {
      value: contextValue,
      children: element
    });
  }
  true ? CssVarsProvider.propTypes = {
    /**
     * The component tree.
     */
    children: import_prop_types10.default.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: import_prop_types10.default.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: import_prop_types10.default.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: import_prop_types10.default.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: import_prop_types10.default.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: import_prop_types10.default.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: import_prop_types10.default.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: import_prop_types10.default.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: import_prop_types10.default.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: import_prop_types10.default.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: import_prop_types10.default.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: import_prop_types10.default.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: import_prop_types10.default.object
  } : void 0;
  const defaultLightColorScheme = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.light;
  const defaultDarkColorScheme = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.dark;
  const getInitColorSchemeScript = (params) => InitColorSchemeScript({
    colorSchemeStorageKey: defaultColorSchemeStorageKey,
    defaultLightColorScheme,
    defaultDarkColorScheme,
    modeStorageKey: defaultModeStorageKey,
    ...params
  });
  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript
  };
}
var React25, import_prop_types10, import_jsx_runtime8, DISABLE_CSS_TRANSITION;
var init_createCssVarsProvider = __esm({
  "node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js"() {
    "use client";
    React25 = __toESM(require_react());
    import_prop_types10 = __toESM(require_prop_types());
    init_styled_engine();
    init_private_theming();
    init_useEnhancedEffect();
    init_ThemeProvider4();
    init_InitColorSchemeScript();
    init_useCurrentColorScheme();
    import_jsx_runtime8 = __toESM(require_jsx_runtime());
    DISABLE_CSS_TRANSITION = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  }
});

// node_modules/@mui/system/esm/cssVars/createGetCssVar.js
function createGetCssVar(prefix = "") {
  function appendVar(...vars) {
    if (!vars.length) {
      return "";
    }
    const value = vars[0];
    if (typeof value === "string" && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
      return `, var(--${prefix ? `${prefix}-` : ""}${value}${appendVar(...vars.slice(1))})`;
    }
    return `, ${value}`;
  }
  const getCssVar = (field, ...fallbacks) => {
    return `var(--${prefix ? `${prefix}-` : ""}${field}${appendVar(...fallbacks)})`;
  };
  return getCssVar;
}
var init_createGetCssVar = __esm({
  "node_modules/@mui/system/esm/cssVars/createGetCssVar.js"() {
  }
});

// node_modules/@mui/system/esm/cssVars/cssVarsParser.js
function cssVarsParser(theme, options) {
  const {
    prefix,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2
  } = options || {};
  const css2 = {};
  const vars = {};
  const varsWithDefaults = {};
  walkObjectDeep(
    theme,
    (keys, value, arrayKeys) => {
      if (typeof value === "string" || typeof value === "number") {
        if (!shouldSkipGeneratingVar2 || !shouldSkipGeneratingVar2(keys, value)) {
          const cssVar = `--${prefix ? `${prefix}-` : ""}${keys.join("-")}`;
          const resolvedValue = getCssValue(keys, value);
          Object.assign(css2, {
            [cssVar]: resolvedValue
          });
          assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
          assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${resolvedValue})`, arrayKeys);
        }
      }
    },
    (keys) => keys[0] === "vars"
    // skip 'vars/*' paths
  );
  return {
    css: css2,
    vars,
    varsWithDefaults
  };
}
var assignNestedKeys, walkObjectDeep, getCssValue;
var init_cssVarsParser = __esm({
  "node_modules/@mui/system/esm/cssVars/cssVarsParser.js"() {
    assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
      let temp = obj;
      keys.forEach((k, index) => {
        if (index === keys.length - 1) {
          if (Array.isArray(temp)) {
            temp[Number(k)] = value;
          } else if (temp && typeof temp === "object") {
            temp[k] = value;
          }
        } else if (temp && typeof temp === "object") {
          if (!temp[k]) {
            temp[k] = arrayKeys.includes(k) ? [] : {};
          }
          temp = temp[k];
        }
      });
    };
    walkObjectDeep = (obj, callback, shouldSkipPaths) => {
      function recurse(object, parentKeys = [], arrayKeys = []) {
        Object.entries(object).forEach(([key, value]) => {
          if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
            if (value !== void 0 && value !== null) {
              if (typeof value === "object" && Object.keys(value).length > 0) {
                recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
              } else {
                callback([...parentKeys, key], value, arrayKeys);
              }
            }
          }
        });
      }
      recurse(obj);
    };
    getCssValue = (keys, value) => {
      if (typeof value === "number") {
        if (["lineHeight", "fontWeight", "opacity", "zIndex"].some((prop) => keys.includes(prop))) {
          return value;
        }
        const lastKey = keys[keys.length - 1];
        if (lastKey.toLowerCase().includes("opacity")) {
          return value;
        }
        return `${value}px`;
      }
      return value;
    };
  }
});

// node_modules/@mui/system/esm/cssVars/prepareCssVars.js
function prepareCssVars(theme, parserConfig = {}) {
  const {
    getSelector = defaultGetSelector,
    disableCssColorScheme,
    colorSchemeSelector: selector
  } = parserConfig;
  const {
    colorSchemes = {},
    components,
    defaultColorScheme = "light",
    ...otherTheme
  } = theme;
  const {
    vars: rootVars,
    css: rootCss,
    varsWithDefaults: rootVarsWithDefaults
  } = cssVarsParser(otherTheme, parserConfig);
  let themeVars = rootVarsWithDefaults;
  const colorSchemesMap = {};
  const {
    [defaultColorScheme]: defaultScheme,
    ...otherColorSchemes
  } = colorSchemes;
  Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
    const {
      vars,
      css: css2,
      varsWithDefaults
    } = cssVarsParser(scheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[key] = {
      css: css2,
      vars
    };
  });
  if (defaultScheme) {
    const {
      css: css2,
      vars,
      varsWithDefaults
    } = cssVarsParser(defaultScheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[defaultColorScheme] = {
      css: css2,
      vars
    };
  }
  function defaultGetSelector(colorScheme, cssObject) {
    var _a, _b;
    let rule = selector;
    if (selector === "class") {
      rule = ".%s";
    }
    if (selector === "data") {
      rule = "[data-%s]";
    }
    if ((selector == null ? void 0 : selector.startsWith("data-")) && !selector.includes("%s")) {
      rule = `[${selector}="%s"]`;
    }
    if (colorScheme) {
      if (rule === "media") {
        if (theme.defaultColorScheme === colorScheme) {
          return ":root";
        }
        const mode = ((_b = (_a = colorSchemes[colorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || colorScheme;
        return {
          [`@media (prefers-color-scheme: ${mode})`]: {
            ":root": cssObject
          }
        };
      }
      if (rule) {
        if (theme.defaultColorScheme === colorScheme) {
          return `:root, ${rule.replace("%s", String(colorScheme))}`;
        }
        return rule.replace("%s", String(colorScheme));
      }
    }
    return ":root";
  }
  const generateThemeVars = () => {
    let vars = {
      ...rootVars
    };
    Object.entries(colorSchemesMap).forEach(([, {
      vars: schemeVars
    }]) => {
      vars = deepmerge(vars, schemeVars);
    });
    return vars;
  };
  const generateStyleSheets = () => {
    var _a, _b;
    const stylesheets = [];
    const colorScheme = theme.defaultColorScheme || "light";
    function insertStyleSheet(key, css2) {
      if (Object.keys(css2).length) {
        stylesheets.push(typeof key === "string" ? {
          [key]: {
            ...css2
          }
        } : key);
      }
    }
    insertStyleSheet(getSelector(void 0, {
      ...rootCss
    }), rootCss);
    const {
      [colorScheme]: defaultSchemeVal,
      ...other
    } = colorSchemesMap;
    if (defaultSchemeVal) {
      const {
        css: css2
      } = defaultSchemeVal;
      const cssColorSheme = (_b = (_a = colorSchemes[colorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css2
      } : {
        ...css2
      };
      insertStyleSheet(getSelector(colorScheme, {
        ...finalCss
      }), finalCss);
    }
    Object.entries(other).forEach(([key, {
      css: css2
    }]) => {
      var _a2, _b2;
      const cssColorSheme = (_b2 = (_a2 = colorSchemes[key]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css2
      } : {
        ...css2
      };
      insertStyleSheet(getSelector(key, {
        ...finalCss
      }), finalCss);
    });
    return stylesheets;
  };
  return {
    vars: themeVars,
    generateThemeVars,
    generateStyleSheets
  };
}
var prepareCssVars_default;
var init_prepareCssVars = __esm({
  "node_modules/@mui/system/esm/cssVars/prepareCssVars.js"() {
    init_deepmerge();
    init_cssVarsParser();
    prepareCssVars_default = prepareCssVars;
  }
});

// node_modules/@mui/system/esm/cssVars/getColorSchemeSelector.js
function createGetColorSchemeSelector(selector) {
  return function getColorSchemeSelector(colorScheme) {
    if (selector === "media") {
      if (true) {
        if (colorScheme !== "light" && colorScheme !== "dark") {
          console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${colorScheme}'.`);
        }
      }
      return `@media (prefers-color-scheme: ${colorScheme})`;
    }
    if (selector) {
      if (selector.startsWith("data-") && !selector.includes("%s")) {
        return `[${selector}="${colorScheme}"] &`;
      }
      if (selector === "class") {
        return `.${colorScheme} &`;
      }
      if (selector === "data") {
        return `[data-${colorScheme}] &`;
      }
      return `${selector.replace("%s", colorScheme)} &`;
    }
    return "&";
  };
}
var init_getColorSchemeSelector = __esm({
  "node_modules/@mui/system/esm/cssVars/getColorSchemeSelector.js"() {
  }
});

// node_modules/@mui/system/esm/cssVars/createCssVarsTheme.js
var init_createCssVarsTheme = __esm({
  "node_modules/@mui/system/esm/cssVars/createCssVarsTheme.js"() {
    init_prepareCssVars();
    init_getColorSchemeSelector();
    init_InitColorSchemeScript();
  }
});

// node_modules/@mui/system/esm/version/index.js
var major, minor, patch;
var init_version = __esm({
  "node_modules/@mui/system/esm/version/index.js"() {
    major = Number("6");
    minor = Number("4");
    patch = Number("7");
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
function composeClasses2(slots, getUtilityClass, classes = void 0) {
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
var init_composeClasses3 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"() {
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/composeClasses/index.js
var init_composeClasses4 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/composeClasses/index.js"() {
    init_composeClasses3();
  }
});

// node_modules/@mui/system/esm/Container/createContainer.js
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps: useThemeProps2 = useThemePropsDefault,
    componentName = "MuiContainer"
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    ...!ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    }
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...ownerState.maxWidth === "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up("xs")]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(theme.breakpoints.values.xs, 444)
      }
    },
    ...ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
    ownerState.maxWidth !== "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up(ownerState.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
      }
    }
  }));
  const Container2 = React26.forwardRef(function Container3(inProps, ref) {
    const props = useThemeProps2(inProps);
    const {
      className,
      component = "div",
      disableGutters = false,
      fixed = false,
      maxWidth = "lg",
      classes: classesProp,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      disableGutters,
      fixed,
      maxWidth
    };
    const classes = useUtilityClasses(ownerState, componentName);
    return (
      // @ts-ignore theme is injected by the styled util
      (0, import_jsx_runtime9.jsx)(ContainerRoot, {
        as: component,
        ownerState,
        className: clsx_default(classes.root, className),
        ref,
        ...other
      })
    );
  });
  true ? Container2.propTypes = {
    children: import_prop_types11.default.node,
    classes: import_prop_types11.default.object,
    className: import_prop_types11.default.string,
    component: import_prop_types11.default.elementType,
    disableGutters: import_prop_types11.default.bool,
    fixed: import_prop_types11.default.bool,
    maxWidth: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types11.default.string]),
    sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object])
  } : void 0;
  return Container2;
}
var React26, import_prop_types11, import_jsx_runtime9, defaultTheme, defaultCreateStyledComponent, useThemePropsDefault, useUtilityClasses;
var init_createContainer = __esm({
  "node_modules/@mui/system/esm/Container/createContainer.js"() {
    React26 = __toESM(require_react());
    import_prop_types11 = __toESM(require_prop_types());
    init_clsx();
    init_generateUtilityClass4();
    init_composeClasses4();
    init_capitalize();
    init_useThemeProps();
    init_styled2();
    init_createTheme();
    import_jsx_runtime9 = __toESM(require_jsx_runtime());
    defaultTheme = createTheme_default();
    defaultCreateStyledComponent = styled_default("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
      }
    });
    useThemePropsDefault = (inProps) => useThemeProps({
      props: inProps,
      name: "MuiContainer",
      defaultTheme
    });
    useUtilityClasses = (ownerState, componentName) => {
      const getContainerUtilityClass = (slot) => {
        return generateUtilityClass2(componentName, slot);
      };
      const {
        classes,
        fixed,
        disableGutters,
        maxWidth
      } = ownerState;
      const slots = {
        root: ["root", maxWidth && `maxWidth${capitalize(String(maxWidth))}`, fixed && "fixed", disableGutters && "disableGutters"]
      };
      return composeClasses2(slots, getContainerUtilityClass, classes);
    };
  }
});

// node_modules/@mui/system/esm/Container/Container.js
var import_prop_types12, Container;
var init_Container = __esm({
  "node_modules/@mui/system/esm/Container/Container.js"() {
    "use client";
    import_prop_types12 = __toESM(require_prop_types());
    init_createContainer();
    Container = createContainer();
    true ? Container.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * @ignore
       */
      children: import_prop_types12.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types12.default.object,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types12.default.elementType,
      /**
       * If `true`, the left and right padding is removed.
       * @default false
       */
      disableGutters: import_prop_types12.default.bool,
      /**
       * Set the max-width to match the min-width of the current breakpoint.
       * This is useful if you'd prefer to design for a fixed set of sizes
       * instead of trying to accommodate a fully fluid viewport.
       * It's fluid by default.
       * @default false
       */
      fixed: import_prop_types12.default.bool,
      /**
       * Determine the max-width of the container.
       * The container width grows with the size of the screen.
       * Set to `false` to disable `maxWidth`.
       * @default 'lg'
       */
      maxWidth: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types12.default.string]),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object])
    } : void 0;
  }
});

// node_modules/@mui/system/esm/Container/containerClasses.js
var containerClasses;
var init_containerClasses = __esm({
  "node_modules/@mui/system/esm/Container/containerClasses.js"() {
    init_generateUtilityClasses2();
    init_generateUtilityClass4();
    containerClasses = generateUtilityClasses("MuiContainer", ["root", "disableGutters", "fixed", "maxWidthXs", "maxWidthSm", "maxWidthMd", "maxWidthLg", "maxWidthXl"]);
  }
});

// node_modules/@mui/system/esm/Container/index.js
var init_Container2 = __esm({
  "node_modules/@mui/system/esm/Container/index.js"() {
    init_Container();
    init_containerClasses();
    init_containerClasses();
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js
function isMuiElement2(element, muiNames) {
  var _a, _b, _c;
  return React27.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    element.type.muiName ?? ((_c = (_b = (_a = element.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)
  ) !== -1;
}
var React27;
var init_isMuiElement3 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js"() {
    React27 = __toESM(require_react());
  }
});

// node_modules/@mui/system/node_modules/@mui/utils/esm/isMuiElement/index.js
var init_isMuiElement4 = __esm({
  "node_modules/@mui/system/node_modules/@mui/utils/esm/isMuiElement/index.js"() {
    init_isMuiElement3();
  }
});

// node_modules/@mui/system/esm/Grid/traverseBreakpoints.js
var filterBreakpointKeys, traverseBreakpoints;
var init_traverseBreakpoints = __esm({
  "node_modules/@mui/system/esm/Grid/traverseBreakpoints.js"() {
    filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter((key) => responsiveKeys.includes(key));
    traverseBreakpoints = (breakpoints, responsive, iterator) => {
      const smallestBreakpoint = breakpoints.keys[0];
      if (Array.isArray(responsive)) {
        responsive.forEach((breakpointValue, index) => {
          iterator((responsiveStyles, style2) => {
            if (index <= breakpoints.keys.length - 1) {
              if (index === 0) {
                Object.assign(responsiveStyles, style2);
              } else {
                responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style2;
              }
            }
          }, breakpointValue);
        });
      } else if (responsive && typeof responsive === "object") {
        const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
        keys.forEach((key) => {
          if (breakpoints.keys.includes(key)) {
            const breakpointValue = responsive[key];
            if (breakpointValue !== void 0) {
              iterator((responsiveStyles, style2) => {
                if (smallestBreakpoint === key) {
                  Object.assign(responsiveStyles, style2);
                } else {
                  responsiveStyles[breakpoints.up(key)] = style2;
                }
              }, breakpointValue);
            }
          }
        });
      } else if (typeof responsive === "number" || typeof responsive === "string") {
        iterator((responsiveStyles, style2) => {
          Object.assign(responsiveStyles, style2);
        }, responsive);
      }
    };
  }
});

// node_modules/@mui/system/esm/Grid/gridGenerator.js
function getSelfSpacingVar(axis) {
  return `--Grid-${axis}Spacing`;
}
function getParentSpacingVar(axis) {
  return `--Grid-parent-${axis}Spacing`;
}
var selfColumnsVar, parentColumnsVar, generateGridSizeStyles, generateGridOffsetStyles, generateGridColumnsStyles, generateGridRowSpacingStyles, generateGridColumnSpacingStyles, generateGridDirectionStyles, generateGridStyles, generateSizeClassNames, generateSpacingClassNames, generateDirectionClasses;
var init_gridGenerator = __esm({
  "node_modules/@mui/system/esm/Grid/gridGenerator.js"() {
    init_traverseBreakpoints();
    selfColumnsVar = "--Grid-columns";
    parentColumnsVar = "--Grid-parent-columns";
    generateGridSizeStyles = ({
      theme,
      ownerState
    }) => {
      const styles = {};
      traverseBreakpoints(theme.breakpoints, ownerState.size, (appendStyle, value) => {
        let style2 = {};
        if (value === "grow") {
          style2 = {
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: "100%"
          };
        }
        if (value === "auto") {
          style2 = {
            flexBasis: "auto",
            flexGrow: 0,
            flexShrink: 0,
            maxWidth: "none",
            width: "auto"
          };
        }
        if (typeof value === "number") {
          style2 = {
            flexGrow: 0,
            flexBasis: "auto",
            width: `calc(100% * ${value} / var(${parentColumnsVar}) - (var(${parentColumnsVar}) - ${value}) * (var(${getParentSpacingVar("column")}) / var(${parentColumnsVar})))`
          };
        }
        appendStyle(styles, style2);
      });
      return styles;
    };
    generateGridOffsetStyles = ({
      theme,
      ownerState
    }) => {
      const styles = {};
      traverseBreakpoints(theme.breakpoints, ownerState.offset, (appendStyle, value) => {
        let style2 = {};
        if (value === "auto") {
          style2 = {
            marginLeft: "auto"
          };
        }
        if (typeof value === "number") {
          style2 = {
            marginLeft: value === 0 ? "0px" : `calc(100% * ${value} / var(${parentColumnsVar}) + var(${getParentSpacingVar("column")}) * ${value} / var(${parentColumnsVar}))`
          };
        }
        appendStyle(styles, style2);
      });
      return styles;
    };
    generateGridColumnsStyles = ({
      theme,
      ownerState
    }) => {
      if (!ownerState.container) {
        return {};
      }
      const styles = {
        [selfColumnsVar]: 12
      };
      traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
        const columns = value ?? 12;
        appendStyle(styles, {
          [selfColumnsVar]: columns,
          "> *": {
            [parentColumnsVar]: columns
          }
        });
      });
      return styles;
    };
    generateGridRowSpacingStyles = ({
      theme,
      ownerState
    }) => {
      if (!ownerState.container) {
        return {};
      }
      const styles = {};
      traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
        var _a;
        const spacing = typeof value === "string" ? value : (_a = theme.spacing) == null ? void 0 : _a.call(theme, value);
        appendStyle(styles, {
          [getSelfSpacingVar("row")]: spacing,
          "> *": {
            [getParentSpacingVar("row")]: spacing
          }
        });
      });
      return styles;
    };
    generateGridColumnSpacingStyles = ({
      theme,
      ownerState
    }) => {
      if (!ownerState.container) {
        return {};
      }
      const styles = {};
      traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
        var _a;
        const spacing = typeof value === "string" ? value : (_a = theme.spacing) == null ? void 0 : _a.call(theme, value);
        appendStyle(styles, {
          [getSelfSpacingVar("column")]: spacing,
          "> *": {
            [getParentSpacingVar("column")]: spacing
          }
        });
      });
      return styles;
    };
    generateGridDirectionStyles = ({
      theme,
      ownerState
    }) => {
      if (!ownerState.container) {
        return {};
      }
      const styles = {};
      traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
        appendStyle(styles, {
          flexDirection: value
        });
      });
      return styles;
    };
    generateGridStyles = ({
      ownerState
    }) => {
      return {
        minWidth: 0,
        boxSizing: "border-box",
        ...ownerState.container && {
          display: "flex",
          flexWrap: "wrap",
          ...ownerState.wrap && ownerState.wrap !== "wrap" && {
            flexWrap: ownerState.wrap
          },
          gap: `var(${getSelfSpacingVar("row")}) var(${getSelfSpacingVar("column")})`
        }
      };
    };
    generateSizeClassNames = (size) => {
      const classNames = [];
      Object.entries(size).forEach(([key, value]) => {
        if (value !== false && value !== void 0) {
          classNames.push(`grid-${key}-${String(value)}`);
        }
      });
      return classNames;
    };
    generateSpacingClassNames = (spacing, smallestBreakpoint = "xs") => {
      function isValidSpacing(val) {
        if (val === void 0) {
          return false;
        }
        return typeof val === "string" && !Number.isNaN(Number(val)) || typeof val === "number" && val > 0;
      }
      if (isValidSpacing(spacing)) {
        return [`spacing-${smallestBreakpoint}-${String(spacing)}`];
      }
      if (typeof spacing === "object" && !Array.isArray(spacing)) {
        const classNames = [];
        Object.entries(spacing).forEach(([key, value]) => {
          if (isValidSpacing(value)) {
            classNames.push(`spacing-${key}-${String(value)}`);
          }
        });
        return classNames;
      }
      return [];
    };
    generateDirectionClasses = (direction) => {
      if (direction === void 0) {
        return [];
      }
      if (typeof direction === "object") {
        return Object.entries(direction).map(([key, value]) => `direction-${key}-${value}`);
      }
      return [`direction-xs-${String(direction)}`];
    };
  }
});

// node_modules/@mui/system/esm/Grid/deleteLegacyGridProps.js
function deleteLegacyGridProps(props, breakpoints) {
  const propsToWarn = [];
  if (props.item !== void 0) {
    delete props.item;
    propsToWarn.push("item");
  }
  if (props.zeroMinWidth !== void 0) {
    delete props.zeroMinWidth;
    propsToWarn.push("zeroMinWidth");
  }
  breakpoints.keys.forEach((breakpoint) => {
    if (props[breakpoint] !== void 0) {
      propsToWarn.push(breakpoint);
      delete props[breakpoint];
    }
  });
  if (true) {
    propsToWarn.forEach((prop) => {
      if (!warnedAboutProps.includes(prop)) {
        warnedAboutProps.push(prop);
        console.warn(`MUI Grid2: ${getLegacyGridWarning(prop)}
`);
      }
    });
  }
}
var getLegacyGridWarning, warnedAboutProps;
var init_deleteLegacyGridProps = __esm({
  "node_modules/@mui/system/esm/Grid/deleteLegacyGridProps.js"() {
    getLegacyGridWarning = (propName) => {
      if (["item", "zeroMinWidth"].includes(propName)) {
        return `The \`${propName}\` prop has been removed and is no longer necessary. You can safely remove it.`;
      }
      return `The \`${propName}\` prop has been removed. See https://mui.com/material-ui/migration/upgrade-to-grid-v2/ for migration instructions.`;
    };
    warnedAboutProps = [];
  }
});

// node_modules/@mui/system/esm/Grid/createGrid.js
function useThemePropsDefault2(props) {
  return useThemeProps({
    props,
    name: "MuiGrid",
    defaultTheme: defaultTheme2
  });
}
function createGrid(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent2,
    useThemeProps: useThemeProps2 = useThemePropsDefault2,
    useTheme: useTheme3 = useTheme_default,
    componentName = "MuiGrid"
  } = options;
  const useUtilityClasses2 = (ownerState, theme) => {
    const {
      container,
      direction,
      spacing,
      wrap,
      size
    } = ownerState;
    const slots = {
      root: ["root", container && "container", wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...generateDirectionClasses(direction), ...generateSizeClassNames(size), ...container ? generateSpacingClassNames(spacing, theme.breakpoints.keys[0]) : []]
    };
    return composeClasses2(slots, (slot) => generateUtilityClass2(componentName, slot), {});
  };
  function parseResponsiveProp(propValue, breakpoints, shouldUseValue = () => true) {
    const parsedProp = {};
    if (propValue === null) {
      return parsedProp;
    }
    if (Array.isArray(propValue)) {
      propValue.forEach((value, index) => {
        if (value !== null && shouldUseValue(value) && breakpoints.keys[index]) {
          parsedProp[breakpoints.keys[index]] = value;
        }
      });
    } else if (typeof propValue === "object") {
      Object.keys(propValue).forEach((key) => {
        const value = propValue[key];
        if (value !== null && value !== void 0 && shouldUseValue(value)) {
          parsedProp[key] = value;
        }
      });
    } else {
      parsedProp[breakpoints.keys[0]] = propValue;
    }
    return parsedProp;
  }
  const GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  const Grid2 = React28.forwardRef(function Grid3(inProps, ref) {
    const theme = useTheme3();
    const themeProps = useThemeProps2(inProps);
    const props = extendSxProp(themeProps);
    deleteLegacyGridProps(props, theme.breakpoints);
    const {
      className,
      children,
      columns: columnsProp = 12,
      container = false,
      component = "div",
      direction = "row",
      wrap = "wrap",
      size: sizeProp = {},
      offset: offsetProp = {},
      spacing: spacingProp = 0,
      rowSpacing: rowSpacingProp = spacingProp,
      columnSpacing: columnSpacingProp = spacingProp,
      unstable_level: level = 0,
      ...other
    } = props;
    const size = parseResponsiveProp(sizeProp, theme.breakpoints, (val) => val !== false);
    const offset = parseResponsiveProp(offsetProp, theme.breakpoints);
    const columns = inProps.columns ?? (level ? void 0 : columnsProp);
    const spacing = inProps.spacing ?? (level ? void 0 : spacingProp);
    const rowSpacing = inProps.rowSpacing ?? inProps.spacing ?? (level ? void 0 : rowSpacingProp);
    const columnSpacing = inProps.columnSpacing ?? inProps.spacing ?? (level ? void 0 : columnSpacingProp);
    const ownerState = {
      ...props,
      level,
      columns,
      container,
      direction,
      wrap,
      spacing,
      rowSpacing,
      columnSpacing,
      size,
      offset
    };
    const classes = useUtilityClasses2(ownerState, theme);
    return (0, import_jsx_runtime10.jsx)(GridRoot, {
      ref,
      as: component,
      ownerState,
      className: clsx_default(classes.root, className),
      ...other,
      children: React28.Children.map(children, (child) => {
        var _a;
        if (React28.isValidElement(child) && isMuiElement2(child, ["Grid"]) && container && child.props.container) {
          return React28.cloneElement(child, {
            unstable_level: ((_a = child.props) == null ? void 0 : _a.unstable_level) ?? level + 1
          });
        }
        return child;
      })
    });
  });
  true ? Grid2.propTypes = {
    children: import_prop_types13.default.node,
    className: import_prop_types13.default.string,
    columns: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.number), import_prop_types13.default.number, import_prop_types13.default.object]),
    columnSpacing: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.number, import_prop_types13.default.string])), import_prop_types13.default.number, import_prop_types13.default.object, import_prop_types13.default.string]),
    component: import_prop_types13.default.elementType,
    container: import_prop_types13.default.bool,
    direction: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types13.default.arrayOf(import_prop_types13.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types13.default.object]),
    offset: import_prop_types13.default.oneOfType([import_prop_types13.default.string, import_prop_types13.default.number, import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.string, import_prop_types13.default.number])), import_prop_types13.default.object]),
    rowSpacing: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.number, import_prop_types13.default.string])), import_prop_types13.default.number, import_prop_types13.default.object, import_prop_types13.default.string]),
    size: import_prop_types13.default.oneOfType([import_prop_types13.default.string, import_prop_types13.default.bool, import_prop_types13.default.number, import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.string, import_prop_types13.default.bool, import_prop_types13.default.number])), import_prop_types13.default.object]),
    spacing: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.number, import_prop_types13.default.string])), import_prop_types13.default.number, import_prop_types13.default.object, import_prop_types13.default.string]),
    sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object]),
    wrap: import_prop_types13.default.oneOf(["nowrap", "wrap-reverse", "wrap"])
  } : void 0;
  Grid2.muiName = "Grid";
  return Grid2;
}
var React28, import_prop_types13, import_jsx_runtime10, defaultTheme2, defaultCreateStyledComponent2;
var init_createGrid = __esm({
  "node_modules/@mui/system/esm/Grid/createGrid.js"() {
    React28 = __toESM(require_react());
    import_prop_types13 = __toESM(require_prop_types());
    init_clsx();
    init_isMuiElement4();
    init_generateUtilityClass4();
    init_composeClasses4();
    init_styled2();
    init_useThemeProps();
    init_useTheme();
    init_styleFunctionSx2();
    init_createTheme();
    init_gridGenerator();
    init_deleteLegacyGridProps();
    import_jsx_runtime10 = __toESM(require_jsx_runtime());
    defaultTheme2 = createTheme_default();
    defaultCreateStyledComponent2 = styled_default("div", {
      name: "MuiGrid",
      slot: "Root",
      overridesResolver: (props, styles) => styles.root
    });
  }
});

// node_modules/@mui/system/esm/Grid/Grid.js
var import_prop_types14, Grid;
var init_Grid = __esm({
  "node_modules/@mui/system/esm/Grid/Grid.js"() {
    "use client";
    import_prop_types14 = __toESM(require_prop_types());
    init_createGrid();
    Grid = createGrid();
    true ? Grid.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * The content of the component.
       */
      children: import_prop_types14.default.node,
      /**
       * The number of columns.
       * @default 12
       */
      columns: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.number), import_prop_types14.default.number, import_prop_types14.default.object]),
      /**
       * Defines the horizontal space between the type `item` components.
       * It overrides the value of the `spacing` prop.
       */
      columnSpacing: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string])), import_prop_types14.default.number, import_prop_types14.default.object, import_prop_types14.default.string]),
      /**
       * If `true`, the component will have the flex *container* behavior.
       * You should be wrapping *items* with a *container*.
       * @default false
       */
      container: import_prop_types14.default.bool,
      /**
       * Defines the `flex-direction` style property.
       * It is applied for all screen sizes.
       * @default 'row'
       */
      direction: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types14.default.arrayOf(import_prop_types14.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types14.default.object]),
      /**
       * Defines the offset value for the type `item` components.
       */
      offset: import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.number, import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.number])), import_prop_types14.default.object]),
      /**
       * Defines the vertical space between the type `item` components.
       * It overrides the value of the `spacing` prop.
       */
      rowSpacing: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string])), import_prop_types14.default.number, import_prop_types14.default.object, import_prop_types14.default.string]),
      /**
       * Defines the size of the the type `item` components.
       */
      size: import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.bool, import_prop_types14.default.number, import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.bool, import_prop_types14.default.number])), import_prop_types14.default.object]),
      /**
       * Defines the space between the type `item` components.
       * It can only be used on a type `container` component.
       * @default 0
       */
      spacing: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string])), import_prop_types14.default.number, import_prop_types14.default.object, import_prop_types14.default.string]),
      /**
       * @ignore
       */
      sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
      /**
       * @internal
       * The level of the grid starts from `0` and increases when the grid nests
       * inside another grid. Nesting is defined as a container Grid being a direct
       * child of a container Grid.
       *
       * ```js
       * <Grid container> // level 0
       *   <Grid container> // level 1
       *     <Grid container> // level 2
       * ```
       *
       * Only consecutive grid is considered nesting. A grid container will start at
       * `0` if there are non-Grid container element above it.
       *
       * ```js
       * <Grid container> // level 0
       *   <div>
       *     <Grid container> // level 0
       * ```
       *
       * ```js
       * <Grid container> // level 0
       *   <Grid>
       *     <Grid container> // level 0
       * ```
       */
      unstable_level: import_prop_types14.default.number,
      /**
       * Defines the `flex-wrap` style property.
       * It's applied for all screen sizes.
       * @default 'wrap'
       */
      wrap: import_prop_types14.default.oneOf(["nowrap", "wrap-reverse", "wrap"])
    } : void 0;
  }
});

// node_modules/@mui/system/esm/Grid/GridProps.js
var init_GridProps = __esm({
  "node_modules/@mui/system/esm/Grid/GridProps.js"() {
  }
});

// node_modules/@mui/system/esm/Grid/gridClasses.js
var SPACINGS, DIRECTIONS, WRAPS, GRID_SIZES, gridClasses;
var init_gridClasses = __esm({
  "node_modules/@mui/system/esm/Grid/gridClasses.js"() {
    init_generateUtilityClasses2();
    init_generateUtilityClass4();
    SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
    WRAPS = ["nowrap", "wrap-reverse", "wrap"];
    GRID_SIZES = ["auto", "grow", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    gridClasses = generateUtilityClasses("MuiGrid", [
      "root",
      "container",
      "item",
      // spacings
      ...SPACINGS.map((spacing) => `spacing-xs-${spacing}`),
      // direction values
      ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
      // wrap values
      ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
      // grid sizes for all breakpoints
      ...GRID_SIZES.map((size) => `grid-xs-${size}`),
      ...GRID_SIZES.map((size) => `grid-sm-${size}`),
      ...GRID_SIZES.map((size) => `grid-md-${size}`),
      ...GRID_SIZES.map((size) => `grid-lg-${size}`),
      ...GRID_SIZES.map((size) => `grid-xl-${size}`)
    ]);
  }
});

// node_modules/@mui/system/esm/Grid/index.js
var init_Grid2 = __esm({
  "node_modules/@mui/system/esm/Grid/index.js"() {
    init_Grid();
    init_createGrid();
    init_GridProps();
    init_gridClasses();
    init_gridClasses();
    init_traverseBreakpoints();
    init_gridGenerator();
  }
});

// node_modules/@mui/system/esm/Stack/createStack.js
function useThemePropsDefault3(props) {
  return useThemeProps({
    props,
    name: "MuiStack",
    defaultTheme: defaultTheme3
  });
}
function joinChildren(children, separator) {
  const childrenArray = React29.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(React29.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent3,
    useThemeProps: useThemeProps2 = useThemePropsDefault3,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses2 = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses2(slots, (slot) => generateUtilityClass2(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack2 = React29.forwardRef(function Grid2(inProps, ref) {
    const themeProps = useThemeProps2(inProps);
    const props = extendSxProp(themeProps);
    const {
      component = "div",
      direction = "column",
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = props;
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses2();
    return (0, import_jsx_runtime11.jsx)(StackRoot, {
      as: component,
      ownerState,
      ref,
      className: clsx_default(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
  true ? Stack2.propTypes = {
    children: import_prop_types15.default.node,
    direction: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types15.default.arrayOf(import_prop_types15.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types15.default.object]),
    divider: import_prop_types15.default.node,
    spacing: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string])), import_prop_types15.default.number, import_prop_types15.default.object, import_prop_types15.default.string]),
    sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object])
  } : void 0;
  return Stack2;
}
var React29, import_prop_types15, import_jsx_runtime11, defaultTheme3, defaultCreateStyledComponent3, getSideFromDirection, style;
var init_createStack = __esm({
  "node_modules/@mui/system/esm/Stack/createStack.js"() {
    React29 = __toESM(require_react());
    import_prop_types15 = __toESM(require_prop_types());
    init_clsx();
    init_deepmerge();
    init_generateUtilityClass4();
    init_composeClasses4();
    init_styled2();
    init_useThemeProps();
    init_styleFunctionSx2();
    init_createTheme();
    init_breakpoints();
    init_spacing();
    import_jsx_runtime11 = __toESM(require_jsx_runtime());
    defaultTheme3 = createTheme_default();
    defaultCreateStyledComponent3 = styled_default("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (props, styles) => styles.root
    });
    getSideFromDirection = (direction) => {
      return {
        row: "Left",
        "row-reverse": "Right",
        column: "Top",
        "column-reverse": "Bottom"
      }[direction];
    };
    style = ({
      ownerState,
      theme
    }) => {
      let styles = {
        display: "flex",
        flexDirection: "column",
        ...handleBreakpoints({
          theme
        }, resolveBreakpointValues({
          values: ownerState.direction,
          breakpoints: theme.breakpoints.values
        }), (propValue) => ({
          flexDirection: propValue
        }))
      };
      if (ownerState.spacing) {
        const transformer = createUnarySpacing(theme);
        const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
          if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
            acc[breakpoint] = true;
          }
          return acc;
        }, {});
        const directionValues = resolveBreakpointValues({
          values: ownerState.direction,
          base
        });
        const spacingValues = resolveBreakpointValues({
          values: ownerState.spacing,
          base
        });
        if (typeof directionValues === "object") {
          Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
            const directionValue = directionValues[breakpoint];
            if (!directionValue) {
              const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
              directionValues[breakpoint] = previousDirectionValue;
            }
          });
        }
        const styleFromPropValue = (propValue, breakpoint) => {
          if (ownerState.useFlexGap) {
            return {
              gap: getValue(transformer, propValue)
            };
          }
          return {
            // The useFlexGap={false} implement relies on each child to give up control of the margin.
            // We need to reset the margin to avoid double spacing.
            "& > :not(style):not(style)": {
              margin: 0
            },
            "& > :not(style) ~ :not(style)": {
              [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
            }
          };
        };
        styles = deepmerge(styles, handleBreakpoints({
          theme
        }, spacingValues, styleFromPropValue));
      }
      styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
      return styles;
    };
  }
});

// node_modules/@mui/system/esm/Stack/Stack.js
var import_prop_types16, Stack;
var init_Stack = __esm({
  "node_modules/@mui/system/esm/Stack/Stack.js"() {
    "use client";
    import_prop_types16 = __toESM(require_prop_types());
    init_createStack();
    Stack = createStack();
    true ? Stack.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * The content of the component.
       */
      children: import_prop_types16.default.node,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types16.default.elementType,
      /**
       * Defines the `flex-direction` style property.
       * It is applied for all screen sizes.
       * @default 'column'
       */
      direction: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types16.default.arrayOf(import_prop_types16.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types16.default.object]),
      /**
       * Add an element between each child.
       */
      divider: import_prop_types16.default.node,
      /**
       * Defines the space between immediate children.
       * @default 0
       */
      spacing: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])), import_prop_types16.default.number, import_prop_types16.default.object, import_prop_types16.default.string]),
      /**
       * The system prop, which allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object]),
      /**
       * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
       *
       * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
       * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
       *
       * To enable this flag globally, follow the theme's default props configuration.
       * @default false
       */
      useFlexGap: import_prop_types16.default.bool
    } : void 0;
  }
});

// node_modules/@mui/system/esm/Stack/StackProps.js
var init_StackProps = __esm({
  "node_modules/@mui/system/esm/Stack/StackProps.js"() {
  }
});

// node_modules/@mui/system/esm/Stack/stackClasses.js
var stackClasses;
var init_stackClasses = __esm({
  "node_modules/@mui/system/esm/Stack/stackClasses.js"() {
    init_generateUtilityClasses2();
    init_generateUtilityClass4();
    stackClasses = generateUtilityClasses("MuiStack", ["root"]);
  }
});

// node_modules/@mui/system/esm/Stack/index.js
var init_Stack2 = __esm({
  "node_modules/@mui/system/esm/Stack/index.js"() {
    init_Stack();
    init_createStack();
    init_StackProps();
    init_stackClasses();
    init_stackClasses();
  }
});

// node_modules/@mui/system/esm/index.js
var init_esm2 = __esm({
  "node_modules/@mui/system/esm/index.js"() {
    init_formatMuiErrorMessage();
    init_styled_engine();
    init_GlobalStyles2();
    init_borders();
    init_borders();
    init_breakpoints();
    init_cssContainerQueries();
    init_breakpoints();
    init_compose();
    init_display2();
    init_flexbox2();
    init_flexbox2();
    init_cssGrid();
    init_cssGrid();
    init_palette();
    init_palette();
    init_positions2();
    init_positions2();
    init_shadows2();
    init_sizing();
    init_sizing();
    init_spacing();
    init_spacing();
    init_style();
    init_typography2();
    init_typography2();
    init_styleFunctionSx2();
    init_getThemeValue2();
    init_Box2();
    init_createBox2();
    init_createStyled2();
    init_createStyled2();
    init_styled2();
    init_createTheme();
    init_createBreakpoints();
    init_createSpacing();
    init_shape();
    init_useThemeProps();
    init_useTheme();
    init_useThemeWithoutDefault();
    init_useMediaQuery();
    init_colorManipulator2();
    init_ThemeProvider4();
    init_memoTheme();
    init_createCssVarsProvider();
    init_createGetCssVar();
    init_cssVarsParser();
    init_prepareCssVars();
    init_createCssVarsTheme();
    init_responsivePropType();
    init_RtlProvider();
    init_RtlProvider();
    init_version();
    init_createContainer();
    init_Container2();
    init_Container2();
    init_Grid();
    init_Grid2();
    init_Stack();
    init_Stack2();
  }
});

// node_modules/@mui/material/styles/createMixins.js
function createMixins(breakpoints, mixins) {
  return {
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    },
    ...mixins
  };
}
var init_createMixins = __esm({
  "node_modules/@mui/material/styles/createMixins.js"() {
  }
});

// node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    (function() {
      function typeOf(object) {
        if ("object" === typeof object && null !== object) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              switch (object = object.type, object) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return object;
                default:
                  switch (object = object && object.$$typeof, object) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                      return object;
                    case REACT_CONSUMER_TYPE:
                      return object;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
      exports.ContextConsumer = REACT_CONSUMER_TYPE;
      exports.ContextProvider = REACT_CONTEXT_TYPE;
      exports.Element = REACT_ELEMENT_TYPE;
      exports.ForwardRef = REACT_FORWARD_REF_TYPE;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Lazy = REACT_LAZY_TYPE;
      exports.Memo = REACT_MEMO_TYPE;
      exports.Portal = REACT_PORTAL_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
      exports.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
      };
      exports.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      };
      exports.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      };
      exports.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      };
      exports.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      };
      exports.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      };
      exports.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      };
      exports.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      };
      exports.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      };
      exports.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      };
      exports.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      };
      exports.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      };
      exports.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
      };
      exports.typeOf = typeOf;
    })();
  }
});

// node_modules/@mui/material/node_modules/react-is/index.js
var require_react_is3 = __commonJS({
  "node_modules/@mui/material/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
function isPlainObject3(item) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (React30.isValidElement(source) || (0, import_react_is4.isValidElementType)(source) || !isPlainObject3(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge3(target, source, options = {
  clone: true
}) {
  const output = options.clone ? {
    ...target
  } : target;
  if (isPlainObject3(target) && isPlainObject3(source)) {
    Object.keys(source).forEach((key) => {
      if (React30.isValidElement(source[key]) || (0, import_react_is4.isValidElementType)(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject3(source[key]) && // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject3(target[key])) {
        output[key] = deepmerge3(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject3(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
var React30, import_react_is4;
var init_deepmerge4 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge/deepmerge.js"() {
    React30 = __toESM(require_react());
    import_react_is4 = __toESM(require_react_is3());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge/index.js
var init_deepmerge5 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge/index.js"() {
    init_deepmerge4();
    init_deepmerge4();
  }
});

// node_modules/@mui/material/styles/createTypography.js
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
function createTypography(palette, typography2) {
  const {
    fontFamily: fontFamily2 = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize: fontSize2 = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2,
    ...other
  } = typeof typography2 === "function" ? typography2(palette) : typography2;
  if (true) {
    if (typeof fontSize2 !== "number") {
      console.error("MUI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize !== "number") {
      console.error("MUI: `htmlFontSize` is required to be a number.");
    }
  }
  const coef = fontSize2 / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight2, size, lineHeight2, letterSpacing2, casing) => ({
    fontFamily: fontFamily2,
    fontWeight: fontWeight2,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: lineHeight2,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...fontFamily2 === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing2 / size)}em`
    } : {},
    ...casing,
    ...allVariants
  });
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return deepmerge3({
    htmlFontSize,
    pxToRem,
    fontFamily: fontFamily2,
    fontSize: fontSize2,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants
  }, other, {
    clone: false
    // No need to clone deep
  });
}
var caseAllCaps, defaultFontFamily;
var init_createTypography = __esm({
  "node_modules/@mui/material/styles/createTypography.js"() {
    init_deepmerge5();
    caseAllCaps = {
      textTransform: "uppercase"
    };
    defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  }
});

// node_modules/@mui/material/styles/createTransitions.js
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;
  return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3e3);
}
function createTransitions(inputTransitions) {
  const mergedEasing = {
    ...easing,
    ...inputTransitions.easing
  };
  const mergedDuration = {
    ...duration,
    ...inputTransitions.duration
  };
  const create = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0,
      ...other
    } = options;
    if (true) {
      const isString = (value) => typeof value === "string";
      const isNumber = (value) => !Number.isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (typeof options !== "object") {
        console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join("\n"));
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
  };
  return {
    getAutoHeightDuration,
    create,
    ...inputTransitions,
    easing: mergedEasing,
    duration: mergedDuration
  };
}
var easing, duration;
var init_createTransitions = __esm({
  "node_modules/@mui/material/styles/createTransitions.js"() {
    easing = {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    };
    duration = {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    };
  }
});

// node_modules/@mui/material/styles/createPalette.js
function getLight() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common_default.white,
      default: common_default.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
function getDark() {
  return {
    text: {
      primary: common_default.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: common_default.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue_default[200],
      light: blue_default[50],
      dark: blue_default[400]
    };
  }
  return {
    main: blue_default[700],
    light: blue_default[400],
    dark: blue_default[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple_default[200],
      light: purple_default[50],
      dark: purple_default[400]
    };
  }
  return {
    main: purple_default[500],
    light: purple_default[300],
    dark: purple_default[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red_default[500],
      light: red_default[300],
      dark: red_default[700]
    };
  }
  return {
    main: red_default[700],
    light: red_default[400],
    dark: red_default[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue_default[400],
      light: lightBlue_default[300],
      dark: lightBlue_default[700]
    };
  }
  return {
    main: lightBlue_default[700],
    light: lightBlue_default[500],
    dark: lightBlue_default[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green_default[400],
      light: green_default[300],
      dark: green_default[700]
    };
  }
  return {
    main: green_default[800],
    light: green_default[500],
    dark: green_default[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange_default[400],
      light: orange_default[300],
      dark: orange_default[700]
    };
  }
  return {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: orange_default[500],
    dark: orange_default[900]
  };
}
function createPalette(palette) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette;
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (true) {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = {
      ...color
    };
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.hasOwnProperty("main")) {
      throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
    }
    if (typeof color.main !== "string") {
      throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color.main)));
    }
    addLightOrDark(color, "light", lightShade, tonalOffset);
    addLightOrDark(color, "dark", darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  let modeHydrated;
  if (mode === "light") {
    modeHydrated = getLight();
  } else if (mode === "dark") {
    modeHydrated = getDark();
  }
  if (true) {
    if (!modeHydrated) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge3({
    // A collection of common colors.
    common: {
      ...common_default
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: "success"
    }),
    // The grey colors.
    grey: grey_default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset,
    // The light and dark mode object.
    ...modeHydrated
  }, other);
  return paletteOutput;
}
var light, dark;
var init_createPalette = __esm({
  "node_modules/@mui/material/styles/createPalette.js"() {
    init_formatMuiErrorMessage3();
    init_deepmerge5();
    init_colorManipulator2();
    init_common();
    init_grey();
    init_purple();
    init_red();
    init_orange();
    init_blue();
    init_lightBlue();
    init_green();
    light = getLight();
    dark = getDark();
  }
});

// node_modules/@mui/material/styles/shadows.js
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
var shadowKeyUmbraOpacity, shadowKeyPenumbraOpacity, shadowAmbientShadowOpacity, shadows, shadows_default2;
var init_shadows3 = __esm({
  "node_modules/@mui/material/styles/shadows.js"() {
    shadowKeyUmbraOpacity = 0.2;
    shadowKeyPenumbraOpacity = 0.14;
    shadowAmbientShadowOpacity = 0.12;
    shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
    shadows_default2 = shadows;
  }
});

// node_modules/@mui/material/styles/zIndex.js
var zIndex2, zIndex_default;
var init_zIndex = __esm({
  "node_modules/@mui/material/styles/zIndex.js"() {
    zIndex2 = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    };
    zIndex_default = zIndex2;
  }
});

// node_modules/@mui/material/styles/stringifyTheme.js
function isSerializable(val) {
  return isPlainObject3(val) || typeof val === "undefined" || typeof val === "string" || typeof val === "boolean" || typeof val === "number" || Array.isArray(val);
}
function stringifyTheme(baseTheme = {}) {
  const serializableTheme = {
    ...baseTheme
  };
  function serializeTheme(object) {
    const array = Object.entries(object);
    for (let index = 0; index < array.length; index++) {
      const [key, value] = array[index];
      if (!isSerializable(value) || key.startsWith("unstable_")) {
        delete object[key];
      } else if (isPlainObject3(value)) {
        object[key] = {
          ...value
        };
        serializeTheme(object[key]);
      }
    }
  }
  serializeTheme(serializableTheme);
  return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
var init_stringifyTheme = __esm({
  "node_modules/@mui/material/styles/stringifyTheme.js"() {
    init_deepmerge5();
  }
});

// node_modules/@mui/material/styles/createThemeNoVars.js
function createThemeNoVars(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput,
    mixins: mixinsInput = {},
    spacing: spacingInput,
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {},
    shape: shapeInput,
    ...other
  } = options;
  if (options.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  options.generateThemeVars === void 0) {
    throw new Error(true ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : formatMuiErrorMessage(20));
  }
  const palette = createPalette(paletteInput);
  const systemTheme = createTheme_default(options);
  let muiTheme = deepmerge3(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows_default2.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: {
      ...zIndex_default
    }
  });
  muiTheme = deepmerge3(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge3(acc, argument), muiTheme);
  if (true) {
    const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
    const traverse = (node, component) => {
      let key;
      for (key in node) {
        const child = node[key];
        if (stateClasses.includes(key) && Object.keys(child).length > 0) {
          if (true) {
            const stateClass = generateUtilityClass("", key);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
          }
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach((component) => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.startsWith("Mui")) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig_default,
    ...other == null ? void 0 : other.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  muiTheme.toRuntimeSource = stringifyTheme;
  return muiTheme;
}
function createMuiTheme(...args) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(["MUI: the createMuiTheme function was renamed to createTheme.", "", "You should use `import { createTheme } from '@mui/material/styles'`"].join("\n"));
    }
  }
  return createThemeNoVars(...args);
}
var warnedOnce, createThemeNoVars_default;
var init_createThemeNoVars = __esm({
  "node_modules/@mui/material/styles/createThemeNoVars.js"() {
    init_formatMuiErrorMessage3();
    init_deepmerge5();
    init_styleFunctionSx2();
    init_createTheme();
    init_generateUtilityClass2();
    init_createMixins();
    init_createPalette();
    init_createTypography();
    init_shadows3();
    init_createTransitions();
    init_zIndex();
    init_stringifyTheme();
    warnedOnce = false;
    createThemeNoVars_default = createThemeNoVars;
  }
});

// node_modules/@mui/material/styles/getOverlayAlpha.js
function getOverlayAlpha(elevation) {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Math.round(alphaValue * 10) / 1e3;
}
var init_getOverlayAlpha = __esm({
  "node_modules/@mui/material/styles/getOverlayAlpha.js"() {
  }
});

// node_modules/@mui/material/styles/createColorScheme.js
function getOpacity(mode) {
  return {
    inputPlaceholder: mode === "dark" ? 0.5 : 0.42,
    inputUnderline: mode === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: mode === "dark" ? 0.2 : 0.12,
    switchTrack: mode === "dark" ? 0.3 : 0.38
  };
}
function getOverlays(mode) {
  return mode === "dark" ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
  const {
    palette: paletteInput = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity,
    overlays,
    ...rest
  } = options;
  const palette = createPalette(paletteInput);
  return {
    palette,
    opacity: {
      ...getOpacity(palette.mode),
      ...opacity
    },
    overlays: overlays || getOverlays(palette.mode),
    ...rest
  };
}
var defaultDarkOverlays;
var init_createColorScheme = __esm({
  "node_modules/@mui/material/styles/createColorScheme.js"() {
    init_createPalette();
    init_getOverlayAlpha();
    defaultDarkOverlays = [...Array(25)].map((_, index) => {
      if (index === 0) {
        return "none";
      }
      const overlay = getOverlayAlpha(index);
      return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
    });
  }
});

// node_modules/@mui/material/styles/shouldSkipGeneratingVar.js
function shouldSkipGeneratingVar(keys) {
  var _a;
  return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
  keys[0] === "palette" && !!((_a = keys[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
}
var init_shouldSkipGeneratingVar = __esm({
  "node_modules/@mui/material/styles/shouldSkipGeneratingVar.js"() {
  }
});

// node_modules/@mui/material/styles/excludeVariablesFromRoot.js
var excludeVariablesFromRoot, excludeVariablesFromRoot_default;
var init_excludeVariablesFromRoot = __esm({
  "node_modules/@mui/material/styles/excludeVariablesFromRoot.js"() {
    excludeVariablesFromRoot = (cssVarPrefix) => [...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}overlays-${index}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkColor`];
    excludeVariablesFromRoot_default = excludeVariablesFromRoot;
  }
});

// node_modules/@mui/system/esm/cssVars/prepareTypographyVars.js
function prepareTypographyVars(typography2) {
  const vars = {};
  const entries = Object.entries(typography2);
  entries.forEach((entry) => {
    const [key, value] = entry;
    if (typeof value === "object") {
      vars[key] = `${value.fontStyle ? `${value.fontStyle} ` : ""}${value.fontVariant ? `${value.fontVariant} ` : ""}${value.fontWeight ? `${value.fontWeight} ` : ""}${value.fontStretch ? `${value.fontStretch} ` : ""}${value.fontSize || ""}${value.lineHeight ? `/${value.lineHeight} ` : ""}${value.fontFamily || ""}`;
    }
  });
  return vars;
}
var init_prepareTypographyVars = __esm({
  "node_modules/@mui/system/esm/cssVars/prepareTypographyVars.js"() {
  }
});

// node_modules/@mui/system/esm/cssVars/index.js
var init_cssVars = __esm({
  "node_modules/@mui/system/esm/cssVars/index.js"() {
    init_createCssVarsProvider();
    init_prepareCssVars();
    init_prepareTypographyVars();
    init_createCssVarsTheme();
    init_getColorSchemeSelector();
  }
});

// node_modules/@mui/material/styles/createGetSelector.js
var createGetSelector_default;
var init_createGetSelector = __esm({
  "node_modules/@mui/material/styles/createGetSelector.js"() {
    init_excludeVariablesFromRoot();
    createGetSelector_default = (theme) => (colorScheme, css2) => {
      const root = theme.rootSelector || ":root";
      const selector = theme.colorSchemeSelector;
      let rule = selector;
      if (selector === "class") {
        rule = ".%s";
      }
      if (selector === "data") {
        rule = "[data-%s]";
      }
      if ((selector == null ? void 0 : selector.startsWith("data-")) && !selector.includes("%s")) {
        rule = `[${selector}="%s"]`;
      }
      if (theme.defaultColorScheme === colorScheme) {
        if (colorScheme === "dark") {
          const excludedVariables = {};
          excludeVariablesFromRoot_default(theme.cssVarPrefix).forEach((cssVar) => {
            excludedVariables[cssVar] = css2[cssVar];
            delete css2[cssVar];
          });
          if (rule === "media") {
            return {
              [root]: css2,
              [`@media (prefers-color-scheme: dark)`]: {
                [root]: excludedVariables
              }
            };
          }
          if (rule) {
            return {
              [rule.replace("%s", colorScheme)]: excludedVariables,
              [`${root}, ${rule.replace("%s", colorScheme)}`]: css2
            };
          }
          return {
            [root]: {
              ...css2,
              ...excludedVariables
            }
          };
        }
        if (rule && rule !== "media") {
          return `${root}, ${rule.replace("%s", String(colorScheme))}`;
        }
      } else if (colorScheme) {
        if (rule === "media") {
          return {
            [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
              [root]: css2
            }
          };
        }
        if (rule) {
          return rule.replace("%s", String(colorScheme));
        }
      }
      return root;
    };
  }
});

// node_modules/@mui/material/styles/createThemeWithVars.js
function assignNode(obj, keys) {
  keys.forEach((k) => {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  if (!obj[key] && defaultValue) {
    obj[key] = defaultValue;
  }
}
function toRgb(color) {
  if (typeof color !== "string" || !color.startsWith("hsl")) {
    return color;
  }
  return hslToRgb(color);
}
function setColorChannel(obj, key) {
  if (!(`${key}Channel` in obj)) {
    obj[`${key}Channel`] = private_safeColorChannel(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
  }
}
function getSpacingVal(spacingInput) {
  if (typeof spacingInput === "number") {
    return `${spacingInput}px`;
  }
  if (typeof spacingInput === "string" || typeof spacingInput === "function" || Array.isArray(spacingInput)) {
    return spacingInput;
  }
  return "8px";
}
function attachColorScheme(colorSchemes, scheme, restTheme, colorScheme) {
  if (!scheme) {
    return void 0;
  }
  scheme = scheme === true ? {} : scheme;
  const mode = colorScheme === "dark" ? "dark" : "light";
  if (!restTheme) {
    colorSchemes[colorScheme] = createColorScheme({
      ...scheme,
      palette: {
        mode,
        ...scheme == null ? void 0 : scheme.palette
      }
    });
    return void 0;
  }
  const {
    palette,
    ...muiTheme
  } = createThemeNoVars_default({
    ...restTheme,
    palette: {
      mode,
      ...scheme == null ? void 0 : scheme.palette
    }
  });
  colorSchemes[colorScheme] = {
    ...scheme,
    palette,
    opacity: {
      ...getOpacity(mode),
      ...scheme == null ? void 0 : scheme.opacity
    },
    overlays: (scheme == null ? void 0 : scheme.overlays) || getOverlays(mode)
  };
  return muiTheme;
}
function createThemeWithVars(options = {}, ...args) {
  const {
    colorSchemes: colorSchemesInput = {
      light: true
    },
    defaultColorScheme: defaultColorSchemeInput,
    disableCssColorScheme = false,
    cssVarPrefix = "mui",
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2 = shouldSkipGeneratingVar,
    colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? "media" : void 0,
    rootSelector = ":root",
    ...input
  } = options;
  const firstColorScheme = Object.keys(colorSchemesInput)[0];
  const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== "light" ? "light" : firstColorScheme);
  const getCssVar = createGetCssVar2(cssVarPrefix);
  const {
    [defaultColorScheme]: defaultSchemeInput,
    light: builtInLight,
    dark: builtInDark,
    ...customColorSchemes
  } = colorSchemesInput;
  const colorSchemes = {
    ...customColorSchemes
  };
  let defaultScheme = defaultSchemeInput;
  if (defaultColorScheme === "dark" && !("dark" in colorSchemesInput) || defaultColorScheme === "light" && !("light" in colorSchemesInput)) {
    defaultScheme = true;
  }
  if (!defaultScheme) {
    throw new Error(true ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : formatMuiErrorMessage(21, defaultColorScheme));
  }
  const muiTheme = attachColorScheme(colorSchemes, defaultScheme, input, defaultColorScheme);
  if (builtInLight && !colorSchemes.light) {
    attachColorScheme(colorSchemes, builtInLight, void 0, "light");
  }
  if (builtInDark && !colorSchemes.dark) {
    attachColorScheme(colorSchemes, builtInDark, void 0, "dark");
  }
  let theme = {
    defaultColorScheme,
    ...muiTheme,
    cssVarPrefix,
    colorSchemeSelector: selector,
    rootSelector,
    getCssVar,
    colorSchemes,
    font: {
      ...prepareTypographyVars(muiTheme.typography),
      ...muiTheme.font
    },
    spacing: getSpacingVal(input.spacing)
  };
  Object.keys(theme.colorSchemes).forEach((key) => {
    const palette = theme.colorSchemes[key].palette;
    const setCssVarColor = (cssVar) => {
      const tokens = cssVar.split("-");
      const color = tokens[1];
      const colorToken = tokens[2];
      return getCssVar(cssVar, palette[color][colorToken]);
    };
    if (palette.mode === "light") {
      setColor(palette.common, "background", "#fff");
      setColor(palette.common, "onBackground", "#000");
    }
    if (palette.mode === "dark") {
      setColor(palette.common, "background", "#000");
      setColor(palette.common, "onBackground", "#fff");
    }
    assignNode(palette, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]);
    if (palette.mode === "light") {
      setColor(palette.Alert, "errorColor", private_safeDarken(palette.error.light, 0.6));
      setColor(palette.Alert, "infoColor", private_safeDarken(palette.info.light, 0.6));
      setColor(palette.Alert, "successColor", private_safeDarken(palette.success.light, 0.6));
      setColor(palette.Alert, "warningColor", private_safeDarken(palette.warning.light, 0.6));
      setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-main"));
      setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-main"));
      setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-main"));
      setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-main"));
      setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.main)));
      setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.main)));
      setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.main)));
      setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.main)));
      setColor(palette.Alert, "errorStandardBg", private_safeLighten(palette.error.light, 0.9));
      setColor(palette.Alert, "infoStandardBg", private_safeLighten(palette.info.light, 0.9));
      setColor(palette.Alert, "successStandardBg", private_safeLighten(palette.success.light, 0.9));
      setColor(palette.Alert, "warningStandardBg", private_safeLighten(palette.warning.light, 0.9));
      setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
      setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
      setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
      setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
      setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-100"));
      setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-400"));
      setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-300"));
      setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-A100"));
      setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-400"));
      setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-700"));
      setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-700"));
      setColor(palette.FilledInput, "bg", "rgba(0, 0, 0, 0.06)");
      setColor(palette.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)");
      setColor(palette.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)");
      setColor(palette.LinearProgress, "primaryBg", private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.LinearProgress, "secondaryBg", private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.LinearProgress, "errorBg", private_safeLighten(palette.error.main, 0.62));
      setColor(palette.LinearProgress, "infoBg", private_safeLighten(palette.info.main, 0.62));
      setColor(palette.LinearProgress, "successBg", private_safeLighten(palette.success.main, 0.62));
      setColor(palette.LinearProgress, "warningBg", private_safeLighten(palette.warning.main, 0.62));
      setColor(palette.Skeleton, "bg", `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.11)`);
      setColor(palette.Slider, "primaryTrack", private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.Slider, "secondaryTrack", private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.Slider, "errorTrack", private_safeLighten(palette.error.main, 0.62));
      setColor(palette.Slider, "infoTrack", private_safeLighten(palette.info.main, 0.62));
      setColor(palette.Slider, "successTrack", private_safeLighten(palette.success.main, 0.62));
      setColor(palette.Slider, "warningTrack", private_safeLighten(palette.warning.main, 0.62));
      const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.8);
      setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette.SnackbarContent, "color", silent(() => palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-400"));
      setColor(palette.StepContent, "border", setCssVarColor("palette-grey-400"));
      setColor(palette.Switch, "defaultColor", setCssVarColor("palette-common-white"));
      setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-100"));
      setColor(palette.Switch, "primaryDisabledColor", private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.Switch, "secondaryDisabledColor", private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.Switch, "errorDisabledColor", private_safeLighten(palette.error.main, 0.62));
      setColor(palette.Switch, "infoDisabledColor", private_safeLighten(palette.info.main, 0.62));
      setColor(palette.Switch, "successDisabledColor", private_safeLighten(palette.success.main, 0.62));
      setColor(palette.Switch, "warningDisabledColor", private_safeLighten(palette.warning.main, 0.62));
      setColor(palette.TableCell, "border", private_safeLighten(private_safeAlpha(palette.divider, 1), 0.88));
      setColor(palette.Tooltip, "bg", private_safeAlpha(palette.grey[700], 0.92));
    }
    if (palette.mode === "dark") {
      setColor(palette.Alert, "errorColor", private_safeLighten(palette.error.light, 0.6));
      setColor(palette.Alert, "infoColor", private_safeLighten(palette.info.light, 0.6));
      setColor(palette.Alert, "successColor", private_safeLighten(palette.success.light, 0.6));
      setColor(palette.Alert, "warningColor", private_safeLighten(palette.warning.light, 0.6));
      setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-dark"));
      setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-dark"));
      setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-dark"));
      setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-dark"));
      setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.dark)));
      setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.dark)));
      setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.dark)));
      setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.dark)));
      setColor(palette.Alert, "errorStandardBg", private_safeDarken(palette.error.light, 0.9));
      setColor(palette.Alert, "infoStandardBg", private_safeDarken(palette.info.light, 0.9));
      setColor(palette.Alert, "successStandardBg", private_safeDarken(palette.success.light, 0.9));
      setColor(palette.Alert, "warningStandardBg", private_safeDarken(palette.warning.light, 0.9));
      setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
      setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
      setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
      setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
      setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-900"));
      setColor(palette.AppBar, "darkBg", setCssVarColor("palette-background-paper"));
      setColor(palette.AppBar, "darkColor", setCssVarColor("palette-text-primary"));
      setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-600"));
      setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-800"));
      setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-700"));
      setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-700"));
      setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-300"));
      setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-300"));
      setColor(palette.FilledInput, "bg", "rgba(255, 255, 255, 0.09)");
      setColor(palette.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)");
      setColor(palette.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)");
      setColor(palette.LinearProgress, "primaryBg", private_safeDarken(palette.primary.main, 0.5));
      setColor(palette.LinearProgress, "secondaryBg", private_safeDarken(palette.secondary.main, 0.5));
      setColor(palette.LinearProgress, "errorBg", private_safeDarken(palette.error.main, 0.5));
      setColor(palette.LinearProgress, "infoBg", private_safeDarken(palette.info.main, 0.5));
      setColor(palette.LinearProgress, "successBg", private_safeDarken(palette.success.main, 0.5));
      setColor(palette.LinearProgress, "warningBg", private_safeDarken(palette.warning.main, 0.5));
      setColor(palette.Skeleton, "bg", `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.13)`);
      setColor(palette.Slider, "primaryTrack", private_safeDarken(palette.primary.main, 0.5));
      setColor(palette.Slider, "secondaryTrack", private_safeDarken(palette.secondary.main, 0.5));
      setColor(palette.Slider, "errorTrack", private_safeDarken(palette.error.main, 0.5));
      setColor(palette.Slider, "infoTrack", private_safeDarken(palette.info.main, 0.5));
      setColor(palette.Slider, "successTrack", private_safeDarken(palette.success.main, 0.5));
      setColor(palette.Slider, "warningTrack", private_safeDarken(palette.warning.main, 0.5));
      const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.98);
      setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette.SnackbarContent, "color", silent(() => palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-600"));
      setColor(palette.StepContent, "border", setCssVarColor("palette-grey-600"));
      setColor(palette.Switch, "defaultColor", setCssVarColor("palette-grey-300"));
      setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-600"));
      setColor(palette.Switch, "primaryDisabledColor", private_safeDarken(palette.primary.main, 0.55));
      setColor(palette.Switch, "secondaryDisabledColor", private_safeDarken(palette.secondary.main, 0.55));
      setColor(palette.Switch, "errorDisabledColor", private_safeDarken(palette.error.main, 0.55));
      setColor(palette.Switch, "infoDisabledColor", private_safeDarken(palette.info.main, 0.55));
      setColor(palette.Switch, "successDisabledColor", private_safeDarken(palette.success.main, 0.55));
      setColor(palette.Switch, "warningDisabledColor", private_safeDarken(palette.warning.main, 0.55));
      setColor(palette.TableCell, "border", private_safeDarken(private_safeAlpha(palette.divider, 1), 0.68));
      setColor(palette.Tooltip, "bg", private_safeAlpha(palette.grey[700], 0.92));
    }
    setColorChannel(palette.background, "default");
    setColorChannel(palette.background, "paper");
    setColorChannel(palette.common, "background");
    setColorChannel(palette.common, "onBackground");
    setColorChannel(palette, "divider");
    Object.keys(palette).forEach((color) => {
      const colors = palette[color];
      if (color !== "tonalOffset" && colors && typeof colors === "object") {
        if (colors.main) {
          setColor(palette[color], "mainChannel", private_safeColorChannel(toRgb(colors.main)));
        }
        if (colors.light) {
          setColor(palette[color], "lightChannel", private_safeColorChannel(toRgb(colors.light)));
        }
        if (colors.dark) {
          setColor(palette[color], "darkChannel", private_safeColorChannel(toRgb(colors.dark)));
        }
        if (colors.contrastText) {
          setColor(palette[color], "contrastTextChannel", private_safeColorChannel(toRgb(colors.contrastText)));
        }
        if (color === "text") {
          setColorChannel(palette[color], "primary");
          setColorChannel(palette[color], "secondary");
        }
        if (color === "action") {
          if (colors.active) {
            setColorChannel(palette[color], "active");
          }
          if (colors.selected) {
            setColorChannel(palette[color], "selected");
          }
        }
      }
    });
  });
  theme = args.reduce((acc, argument) => deepmerge3(acc, argument), theme);
  const parserConfig = {
    prefix: cssVarPrefix,
    disableCssColorScheme,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2,
    getSelector: createGetSelector_default(theme)
  };
  const {
    vars,
    generateThemeVars,
    generateStyleSheets
  } = prepareCssVars_default(theme, parserConfig);
  theme.vars = vars;
  Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
    theme[key] = value;
  });
  theme.generateThemeVars = generateThemeVars;
  theme.generateStyleSheets = generateStyleSheets;
  theme.generateSpacing = function generateSpacing() {
    return createSpacing(input.spacing, createUnarySpacing(this));
  };
  theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
  theme.spacing = theme.generateSpacing();
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar2;
  theme.unstable_sxConfig = {
    ...defaultSxConfig_default,
    ...input == null ? void 0 : input.unstable_sxConfig
  };
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  theme.toRuntimeSource = stringifyTheme;
  return theme;
}
var silent, createGetCssVar2;
var init_createThemeWithVars = __esm({
  "node_modules/@mui/material/styles/createThemeWithVars.js"() {
    init_formatMuiErrorMessage3();
    init_deepmerge5();
    init_esm2();
    init_spacing();
    init_cssVars();
    init_styleFunctionSx2();
    init_colorManipulator2();
    init_createThemeNoVars();
    init_createColorScheme();
    init_shouldSkipGeneratingVar();
    init_createGetSelector();
    init_stringifyTheme();
    silent = (fn) => {
      try {
        return fn();
      } catch (error) {
      }
      return void 0;
    };
    createGetCssVar2 = (cssVarPrefix = "mui") => createGetCssVar(cssVarPrefix);
  }
});

// node_modules/@mui/material/styles/createTheme.js
function attachColorScheme2(theme, scheme, colorScheme) {
  if (!theme.colorSchemes) {
    return void 0;
  }
  if (colorScheme) {
    theme.colorSchemes[scheme] = {
      ...colorScheme !== true && colorScheme,
      palette: createPalette({
        ...colorScheme === true ? {} : colorScheme.palette,
        mode: scheme
      })
      // cast type to skip module augmentation test
    };
  }
}
function createTheme(options = {}, ...args) {
  const {
    palette,
    cssVariables = false,
    colorSchemes: initialColorSchemes = !palette ? {
      light: true
    } : void 0,
    defaultColorScheme: initialDefaultColorScheme = palette == null ? void 0 : palette.mode,
    ...rest
  } = options;
  const defaultColorSchemeInput = initialDefaultColorScheme || "light";
  const defaultScheme = initialColorSchemes == null ? void 0 : initialColorSchemes[defaultColorSchemeInput];
  const colorSchemesInput = {
    ...initialColorSchemes,
    ...palette ? {
      [defaultColorSchemeInput]: {
        ...typeof defaultScheme !== "boolean" && defaultScheme,
        palette
      }
    } : void 0
  };
  if (cssVariables === false) {
    if (!("colorSchemes" in options)) {
      return createThemeNoVars_default(options, ...args);
    }
    let paletteOptions = palette;
    if (!("palette" in options)) {
      if (colorSchemesInput[defaultColorSchemeInput]) {
        if (colorSchemesInput[defaultColorSchemeInput] !== true) {
          paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
        } else if (defaultColorSchemeInput === "dark") {
          paletteOptions = {
            mode: "dark"
          };
        }
      }
    }
    const theme = createThemeNoVars_default({
      ...options,
      palette: paletteOptions
    }, ...args);
    theme.defaultColorScheme = defaultColorSchemeInput;
    theme.colorSchemes = colorSchemesInput;
    if (theme.palette.mode === "light") {
      theme.colorSchemes.light = {
        ...colorSchemesInput.light !== true && colorSchemesInput.light,
        palette: theme.palette
      };
      attachColorScheme2(theme, "dark", colorSchemesInput.dark);
    }
    if (theme.palette.mode === "dark") {
      theme.colorSchemes.dark = {
        ...colorSchemesInput.dark !== true && colorSchemesInput.dark,
        palette: theme.palette
      };
      attachColorScheme2(theme, "light", colorSchemesInput.light);
    }
    return theme;
  }
  if (!palette && !("light" in colorSchemesInput) && defaultColorSchemeInput === "light") {
    colorSchemesInput.light = true;
  }
  return createThemeWithVars({
    ...rest,
    colorSchemes: colorSchemesInput,
    defaultColorScheme: defaultColorSchemeInput,
    ...typeof cssVariables !== "boolean" && cssVariables
  }, ...args);
}
var init_createTheme2 = __esm({
  "node_modules/@mui/material/styles/createTheme.js"() {
    init_createPalette();
    init_createThemeWithVars();
    init_createThemeNoVars();
    init_createThemeNoVars();
  }
});

// node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme4, defaultTheme_default;
var init_defaultTheme = __esm({
  "node_modules/@mui/material/styles/defaultTheme.js"() {
    "use client";
    init_createTheme2();
    defaultTheme4 = createTheme();
    defaultTheme_default = defaultTheme4;
  }
});

// node_modules/@mui/material/styles/useTheme.js
function useTheme2() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React31.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}
var React31;
var init_useTheme4 = __esm({
  "node_modules/@mui/material/styles/useTheme.js"() {
    "use client";
    React31 = __toESM(require_react());
    init_esm2();
    init_defaultTheme();
    init_identifier();
  }
});

// node_modules/@mui/material/styles/slotShouldForwardProp.js
function slotShouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
var slotShouldForwardProp_default;
var init_slotShouldForwardProp = __esm({
  "node_modules/@mui/material/styles/slotShouldForwardProp.js"() {
    slotShouldForwardProp_default = slotShouldForwardProp;
  }
});

// node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp, rootShouldForwardProp_default;
var init_rootShouldForwardProp = __esm({
  "node_modules/@mui/material/styles/rootShouldForwardProp.js"() {
    init_slotShouldForwardProp();
    rootShouldForwardProp = (prop) => slotShouldForwardProp_default(prop) && prop !== "classes";
    rootShouldForwardProp_default = rootShouldForwardProp;
  }
});

// node_modules/@mui/material/styles/styled.js
var styled3, styled_default2;
var init_styled3 = __esm({
  "node_modules/@mui/material/styles/styled.js"() {
    "use client";
    init_createStyled2();
    init_defaultTheme();
    init_identifier();
    init_rootShouldForwardProp();
    init_slotShouldForwardProp();
    init_rootShouldForwardProp();
    styled3 = createStyled({
      themeId: identifier_default,
      defaultTheme: defaultTheme_default,
      rootShouldForwardProp: rootShouldForwardProp_default
    });
    styled_default2 = styled3;
  }
});

export {
  require_react_is3 as require_react_is,
  deepmerge3 as deepmerge,
  init_deepmerge5 as init_deepmerge,
  init_formatMuiErrorMessage3 as init_formatMuiErrorMessage,
  ClassNameGenerator_default,
  init_ClassNameGenerator2 as init_ClassNameGenerator,
  generateUtilityClass,
  init_generateUtilityClass2 as init_generateUtilityClass,
  clsx_default,
  init_clsx,
  extendSxProp,
  init_styleFunctionSx2 as init_styleFunctionSx,
  GlobalStyles_default,
  createBox,
  hexToRgb,
  decomposeColor,
  recomposeColor,
  rgbToHex,
  hslToRgb,
  getLuminance,
  getContrastRatio,
  alpha,
  darken,
  lighten,
  emphasize,
  init_colorManipulator2 as init_colorManipulator,
  useRtl,
  init_RtlProvider,
  useDefaultProps,
  DefaultPropsProvider_default,
  init_DefaultPropsProvider2 as init_DefaultPropsProvider,
  ThemeProvider_default2 as ThemeProvider_default,
  unstable_memoTheme,
  init_InitColorSchemeScript,
  createCssVarsProvider,
  createContainer,
  createGrid,
  init_Grid2 as init_Grid,
  createStack,
  init_esm2 as init_esm,
  createMixins,
  init_createMixins,
  createTypography,
  init_createTypography,
  easing,
  duration,
  createTransitions,
  init_createTransitions,
  createMuiTheme,
  getOverlayAlpha,
  init_getOverlayAlpha,
  createColorScheme,
  init_createColorScheme,
  shouldSkipGeneratingVar,
  init_shouldSkipGeneratingVar,
  excludeVariablesFromRoot_default,
  init_excludeVariablesFromRoot,
  createThemeWithVars,
  init_createThemeWithVars,
  createTheme,
  init_createTheme2 as init_createTheme,
  defaultTheme_default,
  init_defaultTheme,
  useTheme2 as useTheme,
  init_useTheme4 as init_useTheme,
  slotShouldForwardProp_default,
  init_slotShouldForwardProp,
  rootShouldForwardProp_default,
  init_rootShouldForwardProp,
  styled_default2 as styled_default,
  init_styled3 as init_styled
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/private-theming/index.js:
  (**
   * @mui/private-theming v6.4.6
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-SYBKTJLL.js.map

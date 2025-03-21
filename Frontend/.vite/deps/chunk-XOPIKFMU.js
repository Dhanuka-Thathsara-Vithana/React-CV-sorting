import {
  clsx_default,
  init_clsx
} from "./chunk-SYBKTJLL.js";
import {
  __esm
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var extractEventHandlers_default;
var init_extractEventHandlers = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js"() {
    extractEventHandlers_default = extractEventHandlers;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/extractEventHandlers/index.js
var init_extractEventHandlers2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/extractEventHandlers/index.js"() {
    init_extractEventHandlers();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
var resolveComponentProps_default;
var init_resolveComponentProps = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js"() {
    resolveComponentProps_default = resolveComponentProps;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/resolveComponentProps/index.js
var init_resolveComponentProps2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/resolveComponentProps/index.js"() {
    init_resolveComponentProps();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}
var isHostComponent_default;
var init_isHostComponent = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js"() {
    isHostComponent_default = isHostComponent;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isHostComponent/index.js
var init_isHostComponent2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isHostComponent/index.js"() {
    init_isHostComponent();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent_default(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}
var appendOwnerState_default;
var init_appendOwnerState = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js"() {
    init_isHostComponent2();
    appendOwnerState_default = appendOwnerState;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/appendOwnerState/index.js
var init_appendOwnerState2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/appendOwnerState/index.js"() {
    init_appendOwnerState();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var omitEventHandlers_default;
var init_omitEventHandlers = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js"() {
    omitEventHandlers_default = omitEventHandlers;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/omitEventHandlers/index.js
var init_omitEventHandlers2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/omitEventHandlers/index.js"() {
    init_omitEventHandlers();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_default(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = {
      ...additionalProps == null ? void 0 : additionalProps.style,
      ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
      ...externalSlotProps == null ? void 0 : externalSlotProps.style
    };
    const props2 = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers_default({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers_default(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_default(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = {
    ...internalSlotProps == null ? void 0 : internalSlotProps.style,
    ...additionalProps == null ? void 0 : additionalProps.style,
    ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
    ...externalSlotProps == null ? void 0 : externalSlotProps.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
var mergeSlotProps_default;
var init_mergeSlotProps = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js"() {
    init_clsx();
    init_extractEventHandlers2();
    init_omitEventHandlers2();
    mergeSlotProps_default = mergeSlotProps;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/mergeSlotProps/index.js
var init_mergeSlotProps2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/mergeSlotProps/index.js"() {
    init_mergeSlotProps();
  }
});

export {
  appendOwnerState_default,
  init_appendOwnerState2 as init_appendOwnerState,
  extractEventHandlers_default,
  init_extractEventHandlers2 as init_extractEventHandlers,
  mergeSlotProps_default,
  init_mergeSlotProps2 as init_mergeSlotProps,
  resolveComponentProps_default,
  init_resolveComponentProps2 as init_resolveComponentProps
};
//# sourceMappingURL=chunk-XOPIKFMU.js.map

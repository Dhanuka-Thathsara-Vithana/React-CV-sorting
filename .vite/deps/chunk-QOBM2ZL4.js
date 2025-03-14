import {
  init_formatMuiErrorMessage
} from "./chunk-SYBKTJLL.js";
import {
  __esm
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/capitalize.js
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? "MUI: `capitalize(string)` expects a string argument." : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var init_capitalize = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/capitalize.js"() {
    init_formatMuiErrorMessage();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/index.js
var init_capitalize2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/capitalize/index.js"() {
    init_capitalize();
  }
});

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default;
var init_capitalize3 = __esm({
  "node_modules/@mui/material/utils/capitalize.js"() {
    init_capitalize2();
    capitalize_default = capitalize;
  }
});

export {
  init_capitalize2 as init_capitalize,
  capitalize_default,
  init_capitalize3 as init_capitalize2
};
//# sourceMappingURL=chunk-QOBM2ZL4.js.map

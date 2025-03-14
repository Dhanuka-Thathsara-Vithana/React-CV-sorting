import {
  DAY_MARGIN,
  DAY_SIZE,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses
} from "./chunk-VAPJGW6Z.js";
import {
  Skeleton_default
} from "./chunk-CMTDOC7U.js";
import {
  useThemeProps
} from "./chunk-Z2U4T4HN.js";
import {
  _objectWithoutPropertiesLoose
} from "./chunk-Z2DTZZ72.js";
import "./chunk-Y55PT2ZD.js";
import "./chunk-46VRTI4M.js";
import {
  clsx_default,
  init_clsx,
  styled_default
} from "./chunk-SYBKTJLL.js";
import "./chunk-OV2SHWPL.js";
import "./chunk-I43MICRE.js";
import {
  require_jsx_runtime
} from "./chunk-TMCM54B5.js";
import {
  require_prop_types
} from "./chunk-HQCYCEJ4.js";
import {
  _extends,
  init_extends
} from "./chunk-LEH4WKQI.js";
import "./chunk-YBGP4HOE.js";
import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/x-date-pickers/DayCalendarSkeleton/DayCalendarSkeleton.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();

// node_modules/@mui/x-date-pickers/DayCalendarSkeleton/dayCalendarSkeletonClasses.js
var getDayCalendarSkeletonUtilityClass = (slot) => generateUtilityClass("MuiDayCalendarSkeleton", slot);
var dayCalendarSkeletonClasses = generateUtilityClasses("MuiDayCalendarSkeleton", ["root", "week", "daySkeleton"]);

// node_modules/@mui/x-date-pickers/DayCalendarSkeleton/DayCalendarSkeleton.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    week: ["week"],
    daySkeleton: ["daySkeleton"]
  };
  return composeClasses(slots, getDayCalendarSkeletonUtilityClass, classes);
};
var DayCalendarSkeletonRoot = styled_default("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  alignSelf: "start"
});
var DayCalendarSkeletonWeek = styled_default("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Week",
  overridesResolver: (props, styles) => styles.week
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
var DayCalendarSkeletonDay = styled_default(Skeleton_default, {
  name: "MuiDayCalendarSkeleton",
  slot: "DaySkeleton",
  overridesResolver: (props, styles) => styles.daySkeleton
})(({
  ownerState
}) => _extends({
  margin: `0 ${DAY_MARGIN}px`
}, ownerState.day === 0 && {
  visibility: "hidden"
}));
DayCalendarSkeletonDay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: import_prop_types.default.shape({
    day: import_prop_types.default.number.isRequired
  }).isRequired
};
var monthMap = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];
function DayCalendarSkeleton(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendarSkeleton"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const classes = useUtilityClasses(other);
  return (0, import_jsx_runtime.jsx)(DayCalendarSkeletonRoot, _extends({
    className: clsx_default(classes.root, className)
  }, other, {
    children: monthMap.map((week, index) => (0, import_jsx_runtime.jsx)(DayCalendarSkeletonWeek, {
      className: classes.week,
      children: week.map((day, index2) => (0, import_jsx_runtime.jsx)(DayCalendarSkeletonDay, {
        variant: "circular",
        width: DAY_SIZE,
        height: DAY_SIZE,
        className: classes.daySkeleton,
        ownerState: {
          day
        }
      }, index2))
    }, index))
  }));
}
true ? DayCalendarSkeleton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
export {
  DayCalendarSkeleton,
  dayCalendarSkeletonClasses,
  getDayCalendarSkeletonUtilityClass
};
//# sourceMappingURL=@mui_x-date-pickers_DayCalendarSkeleton.js.map

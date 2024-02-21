import {
  createHotContext
} from "/build/_shared/chunk-Q6LMBPEP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/ui/elements/input_field.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/elements/input_field.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/elements/input_field.tsx"
  );
  import.meta.hot.lastModified = "1708503151015.1636";
}
function Input({
  type,
  name,
  title,
  value,
  required,
  readonly,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-1 w-fit", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-bold text-slate-700", htmlFor: name, children: title }, void 0, false, {
      fileName: "app/ui/elements/input_field.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "font-mono", id: name, type, defaultValue: value, "aria-label": name, name, required, readOnly: readonly, onChange, size: 5, maxLength: 10 }, void 0, false, {
      fileName: "app/ui/elements/input_field.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/elements/input_field.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c = Input;
var _c;
$RefreshReg$(_c, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Input
};
//# sourceMappingURL=/build/_shared/chunk-ZYEIHSR3.js.map
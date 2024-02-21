import {
  require_node
} from "/build/_shared/chunk-KDA2VXG4.js";
import {
  require_react as require_react2
} from "/build/_shared/chunk-DGLILCEK.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-TJ4YKIVD.js";
import {
  createHotContext
} from "/build/_shared/chunk-Q6LMBPEP.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/forms.$formId.tsx
var import_react = __toESM(require_react2(), 1);
var import_node = __toESM(require_node(), 1);
var import_react3 = __toESM(require_react(), 1);

// app/ui/elements/form_input.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/elements/form_input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/elements/form_input.tsx"
  );
  import.meta.hot.lastModified = "1708517954902.7751";
}
function FormInput({
  cls,
  fieldType,
  fieldName,
  title,
  value,
  required,
  disabled,
  size,
  maxLength,
  step,
  isSelect = false,
  options
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-1 flex items-baseline ${cls}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold text-sm mr-1 min-w-40", htmlFor: fieldName, children: title }, void 0, false, {
      fileName: "app/ui/elements/form_input.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between", children: [
      isSelect ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "font-mono text-sm border-2 p-1 focus:outline-blue-gray-500 bg-white", id: fieldName, name: fieldName, defaultValue: value, required, disabled, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "-" }, void 0, false, {
          fileName: "app/ui/elements/form_input.tsx",
          lineNumber: 41,
          columnNumber: 25
        }, this),
        options?.data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.id, children: item.title }, item.id, false, {
          fileName: "app/ui/elements/form_input.tsx",
          lineNumber: 42,
          columnNumber: 52
        }, this))
      ] }, void 0, true, {
        fileName: "app/ui/elements/form_input.tsx",
        lineNumber: 40,
        columnNumber: 29
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "font-mono text-sm border-2 p-1 focus:outline-blue-gray-500", id: fieldName, type: fieldType, name: fieldName, defaultValue: value, required, disabled, size, maxLength, step }, void 0, false, {
        fileName: "app/ui/elements/form_input.tsx",
        lineNumber: 43,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-red-500 h-4" }, void 0, false, {
        fileName: "app/ui/elements/form_input.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/elements/form_input.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/elements/form_input.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c = FormInput;
var _c;
$RefreshReg$(_c, "FormInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/forms.$formId.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/forms.$formId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/forms.$formId.tsx"
  );
  import.meta.hot.lastModified = "1708519467034.0286";
}
var {
  Alert,
  Button
} = import_react.default;
function Forms() {
  _s();
  const [open, setOpen] = (0, import_react3.useState)(false);
  const {
    state,
    inputForm,
    errors,
    dicts,
    doc
  } = useLoaderData();
  (0, import_react3.useEffect)(() => {
    if (errors) {
      setOpen(true);
    }
  }, [errors]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: inputForm?.title }, void 0, false, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 102,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { className: "text-white bg-red-500", open, onClose: () => setOpen(false), children: errors ? errors : "" }, void 0, false, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 103,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "formId", value: inputForm.id }, void 0, false, {
        fileName: "app/routes/forms.$formId.tsx",
        lineNumber: 108,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { className: "flex items-center gap-3", color: "blue-gray", placeholder: "", size: "sm", type: "submit", name: "_action", value: "createDoc", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/routes/forms.$formId.tsx",
          lineNumber: 111,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/forms.$formId.tsx",
          lineNumber: 110,
          columnNumber: 25
        }, this),
        "Create"
      ] }, void 0, true, {
        fileName: "app/routes/forms.$formId.tsx",
        lineNumber: 109,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 107,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white w-full border p-1 shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { id: "editDocument", children: inputForm?.groups && inputForm.groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "bg-orange-700 text-white font-bold text-sm p-1 pl-4", children: group.title }, void 0, false, {
        fileName: "app/routes/forms.$formId.tsx",
        lineNumber: 120,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border border-blue-gray p-2 mb-2 grid grid-cols-3", children: group?.fields && group.fields.map((fld) => {
        const fieldName = `f${fld.id}`;
        const cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`;
        switch (fld.fieldType) {
          case "TEXT":
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInput, { cls, fieldName, fieldType: "text", title: fld.title, value: doc[fieldName], required: fld.isRequire, disabled: !fld.isEnable || state !== "edit", size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 127,
              columnNumber: 26
            }, this);
          case "CYRILLIC":
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInput, { cls, fieldName, fieldType: "text", title: fld.title, value: doc[fieldName], required: fld.isRequire, disabled: !fld.isEnable || state !== "edit", size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 129,
              columnNumber: 26
            }, this);
          case "INTEGER":
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInput, { cls, fieldName, fieldType: "number", title: fld.title, value: doc[fieldName], required: fld.isRequire, disabled: !fld.isEnable || state !== "edit", size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 131,
              columnNumber: 26
            }, this);
          case "NUMERIC":
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInput, { cls, fieldName, fieldType: "number", step: "0.01", title: fld.title, value: doc[fieldName], required: fld.isRequire, disabled: !fld.isEnable || state !== "edit", size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 133,
              columnNumber: 26
            }, this);
          case "DICT":
            const dic = dicts.find((item) => item.dictId === fld.dicId);
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInput, { cls, fieldName, fieldType: "number", step: "0.01", title: fld.title, value: doc[fieldName], required: fld.isRequire, disabled: !fld.isEnable || state !== "edit", size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30, isSelect: true, options: dic }, fld.id, false, {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 136,
              columnNumber: 26
            }, this);
          case "DATE":
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInput, { cls, fieldName, fieldType: "date", title: fld.title, value: doc[fieldName], required: fld.isRequire, disabled: !fld.isEnable || state !== "edit", size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 138,
              columnNumber: 26
            }, this);
          case "TIME":
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInput, { cls, fieldName, fieldType: "time", title: fld.title, value: doc[fieldName], required: fld.isRequire, disabled: !fld.isEnable || state !== "edit", size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 140,
              columnNumber: 26
            }, this);
          case "FILE":
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInput, { cls, fieldName, fieldType: "file", title: fld.title, value: doc[fieldName], required: fld.isRequire, disabled: !fld.isEnable || state !== "edit", size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 142,
              columnNumber: 26
            }, this);
        }
      }) }, void 0, false, {
        fileName: "app/routes/forms.$formId.tsx",
        lineNumber: 121,
        columnNumber: 29
      }, this)
    ] }, group.id, true, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 119,
      columnNumber: 73
    }, this)) }, void 0, false, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 118,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 117,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/forms.$formId.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_s(Forms, "ebQHrl+byEfPJ4GMBKDuRXimgkw=", false, function() {
  return [useLoaderData];
});
_c2 = Forms;
var _c2;
$RefreshReg$(_c2, "Forms");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Forms as default
};
//# sourceMappingURL=/build/routes/forms.$formId-NHA7SHCB.js.map

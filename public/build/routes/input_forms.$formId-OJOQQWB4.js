import {
  CustomSelect
} from "/build/_shared/chunk-ZPTKG4AS.js";
import {
  CustomButton,
  CustomInput,
  require_node
} from "/build/_shared/chunk-CCQ6AUXW.js";
import {
  require_react as require_react2
} from "/build/_shared/chunk-DGLILCEK.js";
import {
  Form,
  useActionData,
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

// app/routes/input_forms.$formId.tsx
var import_react = __toESM(require_react2(), 1);
var import_node = __toESM(require_node(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/input_forms.$formId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/input_forms.$formId.tsx"
  );
  import.meta.hot.lastModified = "1708604689801.4277";
}
var {
  Alert
} = import_react.default;
function InputForms() {
  _s();
  const userId = 19;
  const [open, setOpen] = (0, import_react3.useState)(false);
  const {
    state,
    inputForm,
    dicts,
    doc
  } = useLoaderData();
  const data = useActionData();
  (0, import_react3.useEffect)(() => {
    if (data?.errors) {
      setOpen(true);
    }
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: inputForm?.title }, void 0, false, {
      fileName: "app/routes/input_forms.$formId.tsx",
      lineNumber: 159,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { className: "text-white bg-red-500", open, onClose: () => setOpen(false), children: data?.errors ? data.errors : "" }, void 0, false, {
      fileName: "app/routes/input_forms.$formId.tsx",
      lineNumber: 160,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 165,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "formId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 166,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForCreate", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
            fileName: "app/routes/input_forms.$formId.tsx",
            lineNumber: 169,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/input_forms.$formId.tsx",
            lineNumber: 168,
            columnNumber: 25
          }, this),
          "Create"
        ] }, void 0, true, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 167,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/input_forms.$formId.tsx",
        lineNumber: 164,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 175,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "formId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 176,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForSearch", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
            fileName: "app/routes/input_forms.$formId.tsx",
            lineNumber: 179,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/input_forms.$formId.tsx",
            lineNumber: 178,
            columnNumber: 25
          }, this),
          "Search"
        ] }, void 0, true, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 177,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/input_forms.$formId.tsx",
        lineNumber: 174,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "documentForm", type: "submit", name: "_action", value: "findDocument", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 186,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 185,
          columnNumber: 21
        }, this),
        "Find"
      ] }, void 0, true, {
        fileName: "app/routes/input_forms.$formId.tsx",
        lineNumber: 184,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 191,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "formId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 192,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: doc.id }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 193,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForEdit", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, false, {
            fileName: "app/routes/input_forms.$formId.tsx",
            lineNumber: 196,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/input_forms.$formId.tsx",
            lineNumber: 195,
            columnNumber: 25
          }, this),
          "Edit"
        ] }, void 0, true, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 194,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/input_forms.$formId.tsx",
        lineNumber: 190,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "documentForm", type: "submit", name: "_action", value: "saveDocument", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 203,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 202,
          columnNumber: 21
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/routes/input_forms.$formId.tsx",
        lineNumber: 201,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/input_forms.$formId.tsx",
      lineNumber: 163,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border p-1 shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "documentForm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
        fileName: "app/routes/input_forms.$formId.tsx",
        lineNumber: 210,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "inputFormId", value: inputForm.id }, void 0, false, {
        fileName: "app/routes/input_forms.$formId.tsx",
        lineNumber: 211,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: doc.id }, void 0, false, {
        fileName: "app/routes/input_forms.$formId.tsx",
        lineNumber: 212,
        columnNumber: 21
      }, this),
      inputForm?.groups && inputForm.groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "col-span-3 bg-orange-700 text-white font-bold text-sm p-1 pl-4", children: group.title }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 214,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border p-1 grid grid-cols-3 gap-1", children: group?.fields && group.fields.map((fld) => {
          const tableName = `tbl_${fld.groupId}`;
          const fieldName = `f${fld.id}`;
          const defVal = String(doc.tables.find((tbl) => tbl.name === tableName)?.fields.find((fld2) => fld2.name === fieldName)?.value);
          const cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`;
          switch (fld.fieldType) {
            case "TEXT":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "text", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["edit", "search"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/input_forms.$formId.tsx",
                lineNumber: 223,
                columnNumber: 26
              }, this);
            case "CYRILLIC":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "text", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["edit", "search"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/input_forms.$formId.tsx",
                lineNumber: 225,
                columnNumber: 26
              }, this);
            case "INTEGER":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "number", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["edit", "search"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/input_forms.$formId.tsx",
                lineNumber: 227,
                columnNumber: 26
              }, this);
            case "NUMERIC":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "number", step: "0.01", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["edit", "search"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/input_forms.$formId.tsx",
                lineNumber: 229,
                columnNumber: 26
              }, this);
            case "DICT":
              const dic = dicts.find((item) => item.dictId === fld.dicId);
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelect, { className: cls, id: fieldName, title: fld.title, name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["edit", "search"].includes(String(state)), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "-" }, void 0, false, {
                  fileName: "app/routes/input_forms.$formId.tsx",
                  lineNumber: 233,
                  columnNumber: 53
                }, this),
                dic?.data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.id, children: item.title }, item.id, false, {
                  fileName: "app/routes/input_forms.$formId.tsx",
                  lineNumber: 234,
                  columnNumber: 76
                }, this))
              ] }, fld.id, true, {
                fileName: "app/routes/input_forms.$formId.tsx",
                lineNumber: 232,
                columnNumber: 26
              }, this);
            case "DATE":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "date", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["edit", "search"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/input_forms.$formId.tsx",
                lineNumber: 237,
                columnNumber: 26
              }, this);
            case "TIME":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "time", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["edit", "search"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/input_forms.$formId.tsx",
                lineNumber: 239,
                columnNumber: 26
              }, this);
            case "FILE":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "file", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["edit", "search"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/input_forms.$formId.tsx",
                lineNumber: 241,
                columnNumber: 26
              }, this);
          }
        }) }, void 0, false, {
          fileName: "app/routes/input_forms.$formId.tsx",
          lineNumber: 215,
          columnNumber: 29
        }, this)
      ] }, group.id, true, {
        fileName: "app/routes/input_forms.$formId.tsx",
        lineNumber: 213,
        columnNumber: 73
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/input_forms.$formId.tsx",
      lineNumber: 209,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/input_forms.$formId.tsx",
      lineNumber: 208,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/input_forms.$formId.tsx",
    lineNumber: 158,
    columnNumber: 10
  }, this);
}
_s(InputForms, "wR6Q6KCL3MZZM17uHLyF4CCiBPo=", false, function() {
  return [useLoaderData, useActionData];
});
_c = InputForms;
var _c;
$RefreshReg$(_c, "InputForms");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  InputForms as default
};
//# sourceMappingURL=/build/routes/input_forms.$formId-OJOQQWB4.js.map

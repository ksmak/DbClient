import {
  InputField,
  require_node
} from "/build/_shared/chunk-E6EKDHBM.js";
import {
  require_react
} from "/build/_shared/chunk-DGLILCEK.js";
import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-HZQAXSMT.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-Q6LMBPEP.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/db_struct._index.tsx
var import_react10 = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);

// app/ui/forms/dictionary.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/forms/dictionary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/forms/dictionary.tsx"
  );
  import.meta.hot.lastModified = "1707383470000";
}
var {
  Button
} = import_react.default;
function DictionaryForm({
  dictionary
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "flex items-center gap-1", color: "green", form: "updateDictionary", placeholder: "", size: "sm", type: "submit", name: "_action", value: "updateDictionary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 33,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/dictionary.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "flex items-center gap-1", color: "red", form: "deleteDictionary", placeholder: "", size: "sm", type: "submit", name: "_action", value: "deleteDictionary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 39,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        "Delete"
      ] }, void 0, true, {
        fileName: "app/ui/forms/dictionary.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/dictionary.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "updateDictionary", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, false, {
        fileName: "app/ui/forms/dictionary.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-bold text-slate-700", htmlFor: "title", children: "Title: " }, void 0, false, {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "title", type: "text", defaultValue: dictionary?.title, "aria-label": "title", name: "title", required: true }, void 0, false, {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/forms/dictionary.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-bold text-slate-700", htmlFor: "tableName", children: "Table:" }, void 0, false, {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "tableName", type: "text", defaultValue: dictionary?.tableName, "aria-label": "tableName", name: "tableName", required: true }, void 0, false, {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/forms/dictionary.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, dictionary?.id, true, {
      fileName: "app/ui/forms/dictionary.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "deleteDictionary", method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, false, {
      fileName: "app/ui/forms/dictionary.tsx",
      lineNumber: 63,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/forms/dictionary.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/forms/dictionary.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = DictionaryForm;
var _c;
$RefreshReg$(_c, "DictionaryForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/forms/group_form.tsx
var import_react3 = __toESM(require_react(), 1);

// app/ui/elements/check_field.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/elements/check_field.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/elements/check_field.tsx"
  );
  import.meta.hot.lastModified = "1707495376338.4407";
}
function CheckField({
  type,
  name,
  title,
  value,
  required
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "text-sm font-bold text-slate-700", htmlFor: name, children: title }, void 0, false, {
      fileName: "app/ui/elements/check_field.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: name, type, defaultChecked: value, "aria-label": name, name, required }, void 0, false, {
      fileName: "app/ui/elements/check_field.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/elements/check_field.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c2 = CheckField;
var _c2;
$RefreshReg$(_c2, "CheckField");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/forms/group_form.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/forms/group_form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/forms/group_form.tsx"
  );
  import.meta.hot.lastModified = "1707496399484.8547";
}
var {
  Button: Button2
} = import_react3.default;
function GroupForm({
  group,
  inputFields
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button2, { className: "flex items-center gap-1", color: "blue-gray", form: "addInputFieldForm", placeholder: "", size: "sm", type: "submit", name: "_action", value: "addInputField", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 36,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 35,
          columnNumber: 21
        }, this),
        "Add Field"
      ] }, void 0, true, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button2, { className: "flex items-center gap-1", color: "green", form: "updateGroupForm", placeholder: "", size: "sm", type: "submit", name: "_action", value: "updateGroup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 42,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button2, { className: "flex items-center gap-1", color: "red", form: "deleteGroupForm", placeholder: "", size: "sm", type: "submit", name: "_action", value: "deleteGroup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        "Delete"
      ] }, void 0, true, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { id: "addInputFieldForm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "groupId", defaultValue: group.id }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: inputFields.length + 1 }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, 1, true, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { id: "updateGroupForm", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InputField, { type: "number", name: "pos", title: "Pos: ", value: group?.pos, required: true }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InputField, { type: "text", name: "title", title: "Title: ", value: group?.title, required: true }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InputField, { type: "text", name: "tableName", title: "Table name: ", value: group?.tableName, required: true }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CheckField, { type: "checkbox", name: "isMulty", title: "Is Multy: ", value: group?.isMulty, required: false }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, 2, true, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { id: "deleteGroupForm", method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, false, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this) }, 3, false, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/forms/group_form.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c3 = GroupForm;
var _c3;
$RefreshReg$(_c3, "GroupForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/forms/input_form.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/forms/input_form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/forms/input_form.tsx"
  );
  import.meta.hot.lastModified = "1707495908902.1226";
}
var {
  Button: Button3
} = import_react5.default;
function InputFormForm({
  inputForm,
  groups
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button3, { className: "flex items-center gap-1", color: "blue-gray", form: "addGroupForm", placeholder: "", size: "sm", type: "submit", name: "_action", value: "createEmptyGroup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 34,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this),
        "Add Group"
      ] }, void 0, true, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button3, { className: "flex items-center gap-1", color: "green", form: "updateInputForm", placeholder: "", size: "sm", type: "submit", name: "_action", value: "updateInputForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button3, { className: "flex items-center gap-1", color: "red", form: "deleteInputForm", placeholder: "", size: "sm", type: "submit", name: "_action", value: "deleteInputForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        "Delete"
      ] }, void 0, true, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { id: "addGroupForm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, false, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: groups.length + 1 }, void 0, false, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, 1, true, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { id: "updateInputForm", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, false, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "block text-sm font-bold text-slate-700", htmlFor: "pos", children: "Pos:" }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { id: "pos", type: "number", defaultValue: inputForm?.pos, "aria-label": "pos", name: "pos", required: true }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "block text-sm font-bold text-slate-700", htmlFor: "title", children: "Title: " }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { id: "title", type: "text", defaultValue: inputForm?.title, "aria-label": "title", name: "title", required: true }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, 2, true, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { id: "deleteInputForm", method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, false, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 74,
      columnNumber: 17
    }, this) }, 3, false, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/forms/input_form.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c4 = InputFormForm;
var _c4;
$RefreshReg$(_c4, "InputFormForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/forms/search_form.tsx
var import_react7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/forms/search_form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/forms/search_form.tsx"
  );
  import.meta.hot.lastModified = "1707453330000";
}
var {
  Button: Button4
} = import_react7.default;
function SearchFormForm({
  searchForm
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button4, { className: "flex items-center gap-1", color: "green", form: "updateSearchForm", placeholder: "", size: "sm", type: "submit", name: "_action", value: "updateSearchForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 33,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button4, { className: "flex items-center gap-1", color: "red", form: "deleteSearchForm", placeholder: "", size: "sm", type: "submit", name: "_action", value: "deleteSearchForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 39,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        "Delete"
      ] }, void 0, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { id: "updateSearchForm", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "block text-sm font-bold text-slate-700", htmlFor: "pos", children: "Pos:" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { id: "pos", type: "number", defaultValue: searchForm?.pos, "aria-label": "pos", name: "pos", required: true }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "block text-sm font-bold text-slate-700", htmlFor: "title", children: "Title: " }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { id: "title", type: "text", defaultValue: searchForm?.title, "aria-label": "title", name: "title", required: true }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, searchForm?.id, true, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { id: "deleteSearchForm", method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, false, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 63,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/forms/search_form.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c5 = SearchFormForm;
var _c5;
$RefreshReg$(_c5, "SearchFormForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/panels/db_struct.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/panels/db_struct.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/panels/db_struct.tsx"
  );
  import.meta.hot.lastModified = "1707496182781.9768";
}
function DbStrucPanel({
  state,
  inputForms,
  searchForms,
  dictionaries,
  groups,
  inputFormId,
  searchFormId,
  dictionaryId,
  groupId
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "flex items-center gap-1 font-bold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      "Input Forms"
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: inputForms.map((form) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/db_struct?state=inputForm&inputFormId=${form.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["pl-4 flex items-center gap-1 hover:cursor-pointer", state === "inputForm" && form.id === inputFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 45,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 44,
          columnNumber: 33
        }, this),
        form.pos,
        ". ",
        form.title
      ] }, void 0, true, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 43,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: groups.map((gr) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/db_struct?state=group&inputFormId=${gr.inputFormId}&groupId=${gr.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["pl-8 flex items-center gap-1 hover:cursor-pointer", state === "group" && gr.id === groupId ? "bg-blue-gray-200" : ""].join(" "), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 54,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 53,
          columnNumber: 41
        }, this),
        gr.pos,
        ". ",
        gr.title
      ] }, void 0, true, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 52,
        columnNumber: 37
      }, this) }, gr.id, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 51,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 50,
        columnNumber: 25
      }, this)
    ] }, form.id, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 41,
      columnNumber: 41
    }, this)) }, void 0, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "flex items-center gap-1 font-bold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 64,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      "Search Forms"
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: searchForms.map((form) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/db_struct?state=searchForm&searchFormId=${form.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["pl-4 flex items-center gap-1 hover:cursor-pointer", state === "searchForm" && form.id === searchFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 72,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 71,
        columnNumber: 29
      }, this),
      form.pos,
      ". ",
      form.title
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 70,
      columnNumber: 25
    }, this) }, form.id, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 69,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "flex items-center gap-1 font-bold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 80,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      "Dictionaries"
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: dictionaries.map((dict) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/db_struct?state=dictionary&dictionaryId=${dict.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["pl-4 flex items-center gap-1 hover:cursor-pointer", state === "dictionary" && dict.id === dictionaryId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 88,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 87,
        columnNumber: 29
      }, this),
      dict.title
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 86,
      columnNumber: 25
    }, this) }, dict.id, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 85,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/panels/db_struct.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c6 = DbStrucPanel;
var _c6;
$RefreshReg$(_c6, "DbStrucPanel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/db_struct._index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/db_struct._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/db_struct._index.tsx"
  );
  import.meta.hot.lastModified = "1707496452468.594";
}
var {
  Button: Button5
} = import_react10.default;
function DbStruct() {
  _s();
  const {
    state,
    inputForm,
    searchForm,
    dictionary,
    group,
    inputForms,
    searchForms,
    dictionaries,
    groups,
    inputFields
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: "Db Struct" }, void 0, false, {
      fileName: "app/routes/db_struct._index.tsx",
      lineNumber: 192,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: inputForms.length + 1 }, void 0, false, {
          fileName: "app/routes/db_struct._index.tsx",
          lineNumber: 195,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button5, { className: "flex items-center gap-3", color: "blue-gray", placeholder: "", size: "sm", type: "submit", name: "_action", value: "createEmptyInputForm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 198,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 197,
            columnNumber: 25
          }, this),
          "Add InputForm"
        ] }, void 0, true, {
          fileName: "app/routes/db_struct._index.tsx",
          lineNumber: 196,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 194,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: searchForms.length + 1 }, void 0, false, {
          fileName: "app/routes/db_struct._index.tsx",
          lineNumber: 204,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button5, { className: "flex items-center gap-3", color: "blue-gray", placeholder: "", size: "sm", type: "submit", name: "_action", value: "createEmptySearchForm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 207,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 206,
            columnNumber: 25
          }, this),
          "Add SearchForm"
        ] }, void 0, true, {
          fileName: "app/routes/db_struct._index.tsx",
          lineNumber: 205,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 203,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: dictionaries.length + 1 }, void 0, false, {
          fileName: "app/routes/db_struct._index.tsx",
          lineNumber: 213,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button5, { className: "flex items-center gap-3", color: "blue-gray", placeholder: "", size: "sm", type: "submit", name: "_action", value: "createEmptyDictionary", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 216,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 215,
            columnNumber: 25
          }, this),
          "Add Dictionary"
        ] }, void 0, true, {
          fileName: "app/routes/db_struct._index.tsx",
          lineNumber: 214,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 212,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/db_struct._index.tsx",
      lineNumber: 193,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-row h-full w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-white p-4 mr-5 w-1/3 border shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DbStrucPanel, { state, inputForms, searchForms, dictionaries, groups, inputFormId: inputForm?.id, searchFormId: searchForm?.id, dictionaryId: dictionary?.id, groupId: group?.id }, void 0, false, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 224,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 223,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-white w-full border p-4 shadow-blue-gray-700 shadow-md overflow-auto", children: state === "inputForm" && inputForm ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(InputFormForm, { inputForm, groups }, void 0, false, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 227,
        columnNumber: 59
      }, this) : state === "searchForm" && searchForm ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SearchFormForm, { searchForm }, void 0, false, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 227,
        columnNumber: 156
      }, this) : state === "dictionary" && dictionary ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DictionaryForm, { dictionary }, void 0, false, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 227,
        columnNumber: 240
      }, this) : state === "group" && group ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(GroupForm, { group, inputFields }, void 0, false, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 227,
        columnNumber: 314
      }, this) : null }, void 0, false, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 226,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/db_struct._index.tsx",
      lineNumber: 222,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/db_struct._index.tsx",
    lineNumber: 191,
    columnNumber: 10
  }, this);
}
_s(DbStruct, "brZUmlUbpXQZQbHZkCFjYvJ0678=", false, function() {
  return [useLoaderData];
});
_c7 = DbStruct;
var _c7;
$RefreshReg$(_c7, "DbStruct");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DbStruct as default
};
//# sourceMappingURL=/build/routes/db_struct._index-LB5IADEB.js.map

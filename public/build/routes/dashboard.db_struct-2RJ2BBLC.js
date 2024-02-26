import {
  CustomButton,
  CustomInput,
  require_index_browser,
  require_node
} from "/build/_shared/chunk-CCQ6AUXW.js";
import {
  require_react as require_react2
} from "/build/_shared/chunk-DGLILCEK.js";
import {
  Form,
  Link,
  useActionData,
  useFetcher,
  useLoaderData,
  useNavigate,
  useOutletContext
} from "/build/_shared/chunk-TJ4YKIVD.js";
import {
  createHotContext
} from "/build/_shared/chunk-Q6LMBPEP.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard.db_struct.tsx
var import_react10 = __toESM(require_react2(), 1);
var import_node = __toESM(require_node(), 1);

// app/ui/forms/dict_form.tsx
var import_react = __toESM(require_react2(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/forms/dict_form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/forms/dict_form.tsx"
  );
  import.meta.hot.lastModified = "1708575219759.3423";
}
var {
  Spinner
} = import_react.default;
function DictionaryForm({
  dictionary
}) {
  _s();
  const fetcher = useFetcher();
  const isDeleting = fetcher.state !== "idle";
  const handleDelete = async (event) => {
    const response = confirm("Please confirm you want to delete this record.");
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "hidden", id: "updateDictionaryButton", form: "updateDictionary", type: "submit", name: "_action", value: "updateDictionary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/dict_form.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, false, {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", disabled: isDeleting, onClick: handleDelete, type: "submit", name: "_action", value: "deleteDictionary", children: isDeleting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, { className: "w-4 h-4" }, void 0, false, {
            fileName: "app/ui/forms/dict_form.tsx",
            lineNumber: 53,
            columnNumber: 33
          }, this),
          "Deleting..."
        ] }, void 0, true, {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 52,
          columnNumber: 39
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/ui/forms/dict_form.tsx",
            lineNumber: 57,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/ui/forms/dict_form.tsx",
            lineNumber: 56,
            columnNumber: 33
          }, this),
          "Delete"
        ] }, void 0, true, {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 55,
          columnNumber: 35
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/forms/dict_form.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/dict_form.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "updateDictionary", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, false, {
        fileName: "app/ui/forms/dict_form.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: dictionary.id, title: "Title", type: "text", defaultValue: dictionary?.title, name: "title", required: true, onChange: () => {
        const button = document.getElementById("updateDictionaryButton");
        button.click();
      } }, void 0, false, {
        fileName: "app/ui/forms/dict_form.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this)
    ] }, dictionary?.id, true, {
      fileName: "app/ui/forms/dict_form.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "deleteDictionary", method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, false, {
      fileName: "app/ui/forms/dict_form.tsx",
      lineNumber: 77,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/forms/dict_form.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/forms/dict_form.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(DictionaryForm, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c = DictionaryForm;
var _c;
$RefreshReg$(_c, "DictionaryForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/forms/group_form.tsx
var import_react3 = __toESM(require_react2(), 1);
var import_client = __toESM(require_index_browser(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/forms/group_form.tsx"
  );
  import.meta.hot.lastModified = "1708575404768.928";
}
var {
  Spinner: Spinner2
} = import_react3.default;
function GroupForm({
  group,
  dicts
}) {
  _s2();
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const isDeleting = fetcher.state !== "idle";
  const handleDelete = async (event) => {
    const response = confirm("Please confirm you want to delete this record.");
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "addInputFieldForm", type: "submit", name: "_action", value: "createEmptyInputField", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        "Add Field"
      ] }, void 0, true, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "hidden", id: "updateGroupButton", color: "green", form: "updateGroupForm", type: "submit", name: "_action", value: "updateGroup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 54,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", form: "deleteGroupForm", type: "submit", name: "_action", value: "deleteGroup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 59,
          columnNumber: 21
        }, this),
        "Delete"
      ] }, void 0, true, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(fetcher.Form, { id: "addInputFieldForm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "groupId", defaultValue: group.id }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: group.fields.length + 1 }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { id: "updateGroupForm", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomInput, { id: "group_pos", type: "number", name: "pos", title: "Pos: ", defaultValue: group?.pos, required: true, onChange: () => {
        const button = document.getElementById("updateGroupButton");
        button.click();
      } }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomInput, { id: "group_title", type: "text", name: "title", title: "Title: ", defaultValue: group?.title, required: true, onChange: () => {
        const button = document.getElementById("updateGroupButton");
        button.click();
      } }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomInput, { id: "group_ismulty", type: "checkbox", name: "isMulty", title: "Is Multy: ", checked: group?.isMulty ? true : false, required: false, onChange: () => {
        const button = document.getElementById("updateGroupButton");
        button.click();
      } }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    group?.fields && group.fields.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { className: "hidden", id: `updateInputFieldForm_${field.id}`, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 88,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "groupId", defaultValue: field.groupId }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 89,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-green-500 hover:shadow-green-100", id: `updateInputFieldButton_${field.id}`, form: `updateInputFieldForm_${field.id}`, type: "submit", name: "_action", value: "updateInputField", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 92,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 91,
          columnNumber: 25
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 90,
        columnNumber: 21
      }, this)
    ] }, `updateInputFieldForm_${field.id}`, true, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 87,
      columnNumber: 57
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { className: "bg-blue-gray-400 text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 101,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Pos" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 102,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Span" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 103,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Start" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 104,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Title" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 105,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Type" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 106,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Dict" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 107,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Len" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 108,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Precision" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 109,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Key" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 110,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Visible" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 111,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Enable" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 112,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Require" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 113,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Duplicate" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 114,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 115,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 100,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 99,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { className: "text-center", children: group?.fields && group.fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 120,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "pos", defaultValue: field.pos, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 122,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 121,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "colSpan", min: 1, max: 3, defaultValue: field.colSpan, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 128,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 127,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "colStart", min: 1, max: 3, defaultValue: field.colStart, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 134,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 133,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40", onClick: () => navigate(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}&inputFieldId=${field.id}`), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "text", name: "title", defaultValue: field.title, maxLength: 23, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 140,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 139,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("select", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, name: "fieldType", defaultValue: field.fieldType, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        }, children: Object.keys(import_client.FieldType).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: key, children: key }, key, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 150,
          columnNumber: 76
        }, this)) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 146,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 145,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.fieldType === "DICT" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("select", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, name: "dicId", defaultValue: String(field.dicId), onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: "", children: "-" }, void 0, false, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 158,
            columnNumber: 45
          }, this),
          dicts.map((dic) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: dic.id, children: dic.title }, dic.id, false, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 159,
            columnNumber: 63
          }, this))
        ] }, void 0, true, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 154,
          columnNumber: 67
        }, this) : null }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 153,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "len", defaultValue: field.len, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 163,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 162,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "precision", defaultValue: field.precision, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 169,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 168,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isKey", defaultChecked: field.isKey, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 175,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 174,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isVisible", defaultChecked: field.isVisible, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 181,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 180,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isEnable", defaultChecked: field.isEnable, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 187,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 186,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isRequire", defaultChecked: field.isRequire, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 193,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 192,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isDuplicate", defaultChecked: field.isDuplicate, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 199,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 198,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(fetcher.Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: field?.id ? field.id : "" }, void 0, false, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 206,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", disabled: isDeleting, onClick: handleDelete, type: "submit", name: "_action", value: "deleteInputField", children: isDeleting ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Spinner2, { className: "w-4 h-4" }, void 0, false, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 209,
              columnNumber: 53
            }, this),
            "Deleting..."
          ] }, void 0, true, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 208,
            columnNumber: 59
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 213,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 212,
              columnNumber: 53
            }, this),
            "Delete"
          ] }, void 0, true, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 211,
            columnNumber: 55
          }, this) }, void 0, false, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 207,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 205,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 204,
          columnNumber: 33
        }, this)
      ] }, field.id, true, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 119,
        columnNumber: 78
      }, this)) }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 118,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 98,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { id: "deleteGroupForm", method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 230,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, false, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 231,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 224,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/forms/group_form.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s2(GroupForm, "3r9eYsJ9DVBrzdsbJrjaiQEaKBA=", false, function() {
  return [useNavigate, useFetcher];
});
_c2 = GroupForm;
var _c2;
$RefreshReg$(_c2, "GroupForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/forms/input_form.tsx
var import_react5 = __toESM(require_react2(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1708575498971.6978";
}
var {
  Spinner: Spinner3
} = import_react5.default;
function InputFormForm({
  inputForm,
  groups
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "addGroupForm", type: "submit", name: "_action", value: "createEmptyGroup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 36,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 35,
          columnNumber: 21
        }, this),
        "Add Group"
      ] }, void 0, true, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "hidden", id: "updateInputFormButton", form: "updateInputForm", type: "submit", name: "_action", value: "updateInputForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 42,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", form: "deleteInputForm", type: "submit", name: "_action", value: "deleteInputForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        "Delete"
      ] }, void 0, true, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { id: "addGroupForm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, false, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: groups.length + 1 }, void 0, false, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, 1, true, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { id: "updateInputForm", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, false, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomInput, { id: "inputForm_pos", title: "Pos: ", type: "number", defaultValue: inputForm?.pos, name: "pos", required: true, onChange: () => {
        const button = document.getElementById("updateInputFormButton");
        button.click();
      } }, void 0, false, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomInput, { id: "inputForm_title", title: "Title: ", type: "text", defaultValue: inputForm?.title, name: "title", required: true, onChange: () => {
        const button = document.getElementById("updateInputFormButton");
        button.click();
      } }, void 0, false, {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, 2, true, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { id: "deleteInputForm", method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, false, {
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
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c3 = InputFormForm;
var _c3;
$RefreshReg$(_c3, "InputFormForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/forms/search_form.tsx
var import_react7 = __toESM(require_react2(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/forms/search_form.tsx"
  );
  import.meta.hot.lastModified = "1708575564138.8464";
}
var {
  Spinner: Spinner4
} = import_react7.default;
function SearchFormForm({
  searchForm,
  inputFields
}) {
  _s3();
  const fetcher = useFetcher();
  const isDeleting = fetcher.state !== "idle";
  const handleDelete = async (event) => {
    const response = confirm("Please confirm you want to delete this record.");
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "addSearchFieldForm", type: "submit", name: "_action", value: "createEmptySearchField", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        "Add Field"
      ] }, void 0, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "hidden", id: "updateSearchFormButton", form: "updateSearchForm", type: "submit", name: "_action", value: "updateSearchForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", form: "deleteSearchForm", type: "submit", name: "_action", value: "deleteSearchForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this),
        "Delete"
      ] }, void 0, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { id: "addSearchFieldForm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "searchFormId", defaultValue: searchForm.id }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: searchForm.fields?.length + 1 }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { id: "updateSearchForm", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: searchForm.id }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomInput, { id: "searchForm_pos", title: "Pos: ", type: "number", value: searchForm?.pos, name: "pos", required: true, onChange: () => {
        const button = document.getElementById("updateSearchFormButton");
        button.click();
      } }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomInput, { id: "searchForm_title", title: "Title: ", type: "text", value: searchForm?.title, name: "title", required: true, onChange: () => {
        const button = document.getElementById("updateSearchFormButton");
        button.click();
      } }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this)
    ] }, searchForm?.id, true, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { id: "deleteSearchForm", method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, false, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 84,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    searchForm?.fields && searchForm.fields.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { className: "hidden", id: `updateSearchFieldForm_${field.id}`, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "searchFormId", defaultValue: field.searchFormId }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 88,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "bg-green-500 hover:shadow-green-100", id: `updateSearchFieldButton_${field.id}`, form: `updateSearchFieldForm_${field.id}`, type: "submit", name: "_action", value: "updateSearchField", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 91,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 90,
          columnNumber: 25
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 89,
        columnNumber: 21
      }, this)
    ] }, `updateSearchFieldForm_${field.id}`, true, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 86,
      columnNumber: 67
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("thead", { className: "bg-blue-gray-400 text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 100,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Pos" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 101,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Title" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 102,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Field" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 103,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 104,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 99,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 98,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tbody", { children: searchForm?.fields && searchForm.fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 109,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { className: "text-sm w-full", form: `updateSearchFieldForm_${field.id}`, type: "number", name: "pos", defaultValue: field.pos, onChange: () => {
          const button = document.getElementById(`updateSearchFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 111,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 110,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { className: "text-sm w-full", form: `updateSearchFieldForm_${field.id}`, type: "text", name: "title", defaultValue: field.title, onChange: () => {
          const button = document.getElementById(`updateSearchFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 117,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 116,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("select", { className: "text-sm w-full", form: `updateSearchFieldForm_${field.id}`, name: "fieldId", defaultValue: String(field.fieldId), onChange: () => {
          const button = document.getElementById(`updateSearchFieldButton_${field.id}`);
          button.click();
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "", children: "-" }, void 0, false, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 127,
            columnNumber: 41
          }, this),
          inputFields && inputFields.map((fld) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: fld.id, children: `${fld.group.pos}. ${fld.group.title} -> ${fld.title}` }, fld.id, false, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 128,
            columnNumber: 80
          }, this))
        ] }, void 0, true, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 123,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 122,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, false, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 135,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", disabled: isDeleting, onClick: handleDelete, type: "submit", name: "_action", value: "deleteSearchField", children: isDeleting ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Spinner4, { className: "w-4 h-4" }, void 0, false, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 138,
              columnNumber: 53
            }, this),
            "Deleting..."
          ] }, void 0, true, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 137,
            columnNumber: 59
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 142,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 141,
              columnNumber: 53
            }, this),
            "Delete"
          ] }, void 0, true, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 140,
            columnNumber: 55
          }, this) }, void 0, false, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 136,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 134,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 133,
          columnNumber: 33
        }, this)
      ] }, field.id, true, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 108,
        columnNumber: 88
      }, this)) }, void 0, false, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 107,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 97,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/forms/search_form.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s3(SearchFormForm, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c4 = SearchFormForm;
var _c4;
$RefreshReg$(_c4, "SearchFormForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/panels/db_struct.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1708671185681.6826";
}
function DbStrucPanel({
  state,
  inputForms,
  searchForms,
  dictionaries,
  inputFormId,
  searchFormId,
  dictionaryId,
  groupId
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: ["flex items-center gap-1 font-bold", state === "inputForm" && !inputFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/dashboard/db_struct?state=inputForm&inputFormId=0`, children: "Input Forms" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: inputForms.map((form) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: ["pl-4 flex items-center gap-1 hover:cursor-pointer", state === "inputForm" && form.id === inputFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 46,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 45,
          columnNumber: 33
        }, this),
        form.pos,
        ". ",
        form.title
      ] }, void 0, true, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 44,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 43,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: form.groups.map((gr) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/dashboard/db_struct?state=group&inputFormId=${gr.inputFormId}&groupId=${gr.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: ["pl-8 flex items-center gap-1 hover:cursor-pointer", state === "group" && gr.id === groupId ? "bg-blue-gray-200" : ""].join(" "), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 55,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 54,
          columnNumber: 41
        }, this),
        gr.pos,
        ". ",
        gr.title
      ] }, void 0, true, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 53,
        columnNumber: 37
      }, this) }, gr.id, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 52,
        columnNumber: 52
      }, this)) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 51,
        columnNumber: 25
      }, this)
    ] }, form.id, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 42,
      columnNumber: 41
    }, this)) }, void 0, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: ["flex items-center gap-1 font-bold", state === "searchForm" && !searchFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/dashboard/db_struct?state=searchForm&searchFormId=0`, children: "Search Forms" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: searchForms.map((form) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: ["pl-4 flex items-center gap-1 hover:cursor-pointer", state === "searchForm" && form.id === searchFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 75,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 74,
        columnNumber: 29
      }, this),
      form.pos,
      ". ",
      form.title
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 73,
      columnNumber: 25
    }, this) }, form.id, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 72,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: ["flex items-center gap-1 font-bold", state === "dictionary" && !dictionaryId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 83,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/dashboard/db_struct?state=dictionary&dictionaryId=0`, children: "Dictionaries" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: dictionaries.map((dict) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: ["pl-4 flex items-center gap-1 hover:cursor-pointer", state === "dictionary" && dict.id === dictionaryId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 93,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 92,
        columnNumber: 29
      }, this),
      dict.title
    ] }, void 0, true, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 91,
      columnNumber: 25
    }, this) }, dict.id, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 90,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 89,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/panels/db_struct.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c5 = DbStrucPanel;
var _c5;
$RefreshReg$(_c5, "DbStrucPanel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.db_struct.tsx
var import_react12 = __toESM(require_react(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.db_struct.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.db_struct.tsx"
  );
  import.meta.hot.lastModified = "1708673101273.735";
}
var {
  Spinner: Spinner5,
  Alert
} = import_react10.default;
function DbStruct() {
  _s4();
  const {
    dictionaries,
    inputForms,
    searchForms
  } = useOutletContext();
  const [open, setOpen] = (0, import_react12.useState)(false);
  const {
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    groups,
    inputFields
  } = useLoaderData();
  const data = useActionData();
  const fetcher = useFetcher();
  const isRestruct = fetcher.state !== "idle";
  const handleRestruct = async (event) => {
    const response = confirm("Please confirm you want to restructure database.");
    if (!response) {
      event.preventDefault();
    }
  };
  (0, import_react12.useEffect)(() => {
    if (data?.errors) {
      setOpen(true);
    }
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-4 flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: "Db Struct" }, void 0, false, {
      fileName: "app/routes/dashboard.db_struct.tsx",
      lineNumber: 361,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Alert, { className: "text-white bg-red-500", open, onClose: () => setOpen(false), children: data?.errors ? data.errors : "" }, void 0, false, {
      fileName: "app/routes/dashboard.db_struct.tsx",
      lineNumber: 362,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-end items-center gap-3 h-14", children: [
      state === "dictionary" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: dictionaries.length + 1 }, void 0, false, {
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 367,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "createEmptyDictionary", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 370,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 369,
            columnNumber: 29
          }, this),
          "Add Dictionary"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 368,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 366,
        columnNumber: 43
      }, this) : state === "inputForm" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: inputForms.length + 1 }, void 0, false, {
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 375,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "createEmptyInputForm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 378,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 377,
            columnNumber: 33
          }, this),
          "Add InputForm"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 376,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 374,
        columnNumber: 55
      }, this) : state === "searchForm" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: searchForms.length + 1 }, void 0, false, {
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 383,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "createEmptySearchForm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 386,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 385,
            columnNumber: 37
          }, this),
          "Add SearchForm"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 384,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 382,
        columnNumber: 60
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CustomButton, { className: "bg-blue-500 hover:shadow-blue-100", type: "submit", name: "_action", value: "generateStructDb", disabled: isRestruct, onClick: handleRestruct, children: isRestruct ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Spinner5, { className: "w-4 h-4" }, void 0, false, {
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 394,
          columnNumber: 33
        }, this),
        "Restructuring..."
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 393,
        columnNumber: 39
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" }, void 0, false, {
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 398,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 397,
          columnNumber: 33
        }, this),
        "Restruct Database"
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 396,
        columnNumber: 35
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 392,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 391,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.db_struct.tsx",
      lineNumber: 365,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row h-full w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white p-4 mr-5 w-1/3 border shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DbStrucPanel, { state, inputForms, searchForms, dictionaries, groups, inputFormId: inputForm?.id, searchFormId: searchForm?.id, dictionaryId: dictionary?.id, groupId: group?.id }, void 0, false, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 407,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 406,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white w-full border p-4 shadow-blue-gray-700 shadow-md overflow-auto", children: state === "inputForm" && inputForm ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InputFormForm, { inputForm, groups }, void 0, false, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 410,
        columnNumber: 59
      }, this) : state === "searchForm" && searchForm ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SearchFormForm, { searchForm, inputFields }, void 0, false, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 410,
        columnNumber: 156
      }, this) : state === "dictionary" && dictionary ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DictionaryForm, { dictionary }, void 0, false, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 410,
        columnNumber: 266
      }, this) : state === "group" && group ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(GroupForm, { group, dicts: dictionaries }, void 0, false, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 410,
        columnNumber: 340
      }, this) : null }, void 0, false, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 409,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.db_struct.tsx",
      lineNumber: 405,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.db_struct.tsx",
    lineNumber: 360,
    columnNumber: 10
  }, this);
}
_s4(DbStruct, "2sQJUgaajDkOgkoW76YT9wq4F6s=", false, function() {
  return [useOutletContext, useLoaderData, useActionData, useFetcher];
});
_c6 = DbStruct;
var _c6;
$RefreshReg$(_c6, "DbStruct");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DbStruct as default
};
//# sourceMappingURL=/build/routes/dashboard.db_struct-2RJ2BBLC.js.map
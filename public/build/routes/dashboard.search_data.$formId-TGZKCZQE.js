import {
  CustomButton,
  CustomInput,
  require_node
} from "/build/_shared/chunk-7I5FVRXN.js";
import {
  require_react as require_react2
} from "/build/_shared/chunk-DGLILCEK.js";
import {
  useActionData,
  useLoaderData,
  useOutletContext,
  useSubmit
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

// app/routes/dashboard.search_data.$formId.tsx
var import_react2 = __toESM(require_react2(), 1);
var import_node = __toESM(require_node(), 1);
var import_react4 = __toESM(require_react(), 1);

// app/ui/elements/panel.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/elements/panel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/elements/panel.tsx"
  );
  import.meta.hot.lastModified = "1709003471564.9463";
}
function Panel({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${className} bg-white border p-1 shadow-blue-gray-700 shadow-md overflow-auto`, ...props, children }, void 0, false, {
    fileName: "app/ui/elements/panel.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = Panel;
var _c;
$RefreshReg$(_c, "Panel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/dialogs/condition_dialog.tsx
var import_react = __toESM(require_react2(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/dialogs/condition_dialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/dialogs/condition_dialog.tsx"
  );
  import.meta.hot.lastModified = "1709013507129.1064";
}
var {
  Spinner,
  Alert,
  Dialog,
  Card,
  CardBody,
  CardFooter
} = import_react.default;
function ConditionDialog({
  condIndex,
  cond,
  setCond,
  show,
  setShow,
  conditions,
  setConditions
}) {
  const handlerOK = () => {
    if (condIndex !== null) {
      let conds = [...conditions];
      conds.splice(condIndex, 1, cond);
      setConditions(conds);
    } else {
      if (conditions.length > 0) {
        setConditions([...conditions, {
          log: "AND"
        }, cond]);
      } else {
        setConditions([...conditions, cond]);
      }
    }
    setShow(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { placeholder: "", size: "md", open: show, handler: () => setShow(false), className: "bg-transparent shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "mx-auto w-full", placeholder: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center gap-1 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: `${cond.oper === "between" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "between"
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: "\u0421..\u041F\u041E" }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: `${cond.oper === "=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "="
        }), children: "=" }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 67,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: `${cond.oper === ">" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: ">"
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: ">" }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 73,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: `${cond.oper === ">=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: ">="
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: ">=" }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 79,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: `${cond.oper === "<" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "<"
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: "<" }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 85,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: `${cond.oper === "<=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "<="
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: "<=" }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 91,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: `${cond.oper === "<>" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "<>"
        }), children: "<>" }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 97,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: `${cond.oper === "=()" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "=()"
        }), children: "=()" }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 103,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: `${cond.oper === "<>()" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "<>()"
        }), children: "<>()" }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 109,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/dialogs/condition_dialog.tsx",
        lineNumber: 60,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm font-bold text-blue-gray-600", children: cond.field?.title }, void 0, false, {
        fileName: "app/ui/dialogs/condition_dialog.tsx",
        lineNumber: 116,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: cond.oper === "between" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomInput, { id: "val1", type: "text", name: "val1", title: "Val1: ", value: cond.val1, onChange: (e) => setCond({
          ...cond,
          val1: e.target.value
        }) }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 119,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomInput, { id: "val2", type: "text", name: "val2", title: "Val2: ", value: cond.val2, onChange: (e) => setCond({
          ...cond,
          val2: e.target.value
        }) }, void 0, false, {
          fileName: "app/ui/dialogs/condition_dialog.tsx",
          lineNumber: 123,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/dialogs/condition_dialog.tsx",
        lineNumber: 118,
        columnNumber: 52
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomInput, { id: "val1", type: "text", name: "val1", title: "Val1: ", value: cond.val1, onChange: (e) => setCond({
        ...cond,
        val1: e.target.value
      }) }, void 0, false, {
        fileName: "app/ui/dialogs/condition_dialog.tsx",
        lineNumber: 128,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/ui/dialogs/condition_dialog.tsx",
        lineNumber: 127,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "app/ui/dialogs/condition_dialog.tsx",
        lineNumber: 117,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/dialogs/condition_dialog.tsx",
      lineNumber: 59,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-green-100", onClick: () => handlerOK(), children: "OK" }, void 0, false, {
        fileName: "app/ui/dialogs/condition_dialog.tsx",
        lineNumber: 136,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-green-100", onClick: () => setShow(false), children: "Cancel" }, void 0, false, {
        fileName: "app/ui/dialogs/condition_dialog.tsx",
        lineNumber: 139,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/dialogs/condition_dialog.tsx",
      lineNumber: 135,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/dialogs/condition_dialog.tsx",
    lineNumber: 58,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/ui/dialogs/condition_dialog.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_c2 = ConditionDialog;
var _c2;
$RefreshReg$(_c2, "ConditionDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.search_data.$formId.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.search_data.$formId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.search_data.$formId.tsx"
  );
  import.meta.hot.lastModified = "1709021676588.3586";
}
var {
  Spinner: Spinner2,
  Alert: Alert2,
  Dialog: Dialog2,
  Card: Card2,
  CardBody: CardBody2,
  CardFooter: CardFooter2
} = import_react2.default;
function SearchData() {
  _s();
  const {
    conditions,
    setConditions
  } = useOutletContext();
  const {
    searchForm,
    state
  } = useLoaderData();
  const data = useActionData();
  const submit = useSubmit();
  const [showError, setShowError] = (0, import_react4.useState)(false);
  const [showCondition, setShowCondition] = (0, import_react4.useState)(false);
  const [cond, setCond] = (0, import_react4.useState)({});
  const [condIndex, setCondIndex] = (0, import_react4.useState)(null);
  const [fld, setFld] = (0, import_react4.useState)(null);
  const userId = 19;
  const handleOpenCondition = async (cond2, condIndex2 = null) => {
    setCondIndex(condIndex2);
    setCond(cond2);
    setShowCondition(true);
  };
  const handleAddCondition = () => {
    if (fld) {
      handleOpenCondition({
        oper: ["TEXT", "CYRILLIC", "DICT"].includes(fld.field.fieldType) ? "=" : "between",
        field: fld
      });
    }
  };
  const handleDeleteCondition = () => {
    if (condIndex !== null) {
      let conds = [...conditions];
      if (conds[condIndex].log) {
        conds.splice(condIndex, 1);
      } else {
        conds.splice(condIndex - 1, 2);
      }
      setConditions(conds);
    }
  };
  const handleBktBoth = () => {
    if (conditions.length > 0) {
      setConditions([{
        log: "("
      }, ...conditions, {
        log: ")"
      }]);
    }
  };
  const handleBktLeft = () => {
    if (condIndex !== null && !conditions[condIndex].log) {
      let conds = [...conditions];
      conds.splice(condIndex, 0, {
        log: "("
      });
      setConditions(conds);
    }
  };
  const handleBktRight = () => {
    if (condIndex !== null && !conditions[condIndex].log) {
      let conds = [...conditions];
      conds.splice(condIndex + 1, 0, {
        log: ")"
      });
      setConditions(conds);
    }
  };
  const handleReplaceOrAnd = (log) => {
    if (condIndex !== null && ["OR", "AND"].includes(String(conditions[condIndex].log))) {
      let conds = [...conditions];
      conds.splice(condIndex, 1, {
        log
      });
      setConditions(conds);
    }
  };
  const handleSearch = () => {
    submit({
      _action: "searchDocument",
      _user: userId ? userId : "",
      _inputFormId: searchForm.inputFormId,
      json: JSON.stringify(conditions)
    }, {
      method: "post"
    });
  };
  (0, import_react4.useEffect)(() => {
    if (data?.errors) {
      setShowError(true);
    }
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: searchForm?.title }, void 0, false, {
      fileName: "app/routes/dashboard.search_data.$formId.tsx",
      lineNumber: 178,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Alert2, { className: "text-white bg-red-500", open: showError, onClose: () => setShowError(false), children: data?.errors ? data.errors : "" }, void 0, false, {
      fileName: "app/routes/dashboard.search_data.$formId.tsx",
      lineNumber: 179,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ConditionDialog, { condIndex, cond, setCond, show: showCondition, setShow: setShowCondition, conditions, setConditions }, void 0, false, {
      fileName: "app/routes/dashboard.search_data.$formId.tsx",
      lineNumber: 182,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", onClick: () => handleSearch(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
        fileName: "app/routes/dashboard.search_data.$formId.tsx",
        lineNumber: 186,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.search_data.$formId.tsx",
        lineNumber: 185,
        columnNumber: 21
      }, this),
      "Search"
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.search_data.$formId.tsx",
      lineNumber: 184,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.search_data.$formId.tsx",
      lineNumber: 183,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-3 w-full h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Panel, { className: "w-1/3", children: searchForm && searchForm.fields.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `${fld?.id === field.id ? "bg-blue-gray-100" : ""} hover:cursor-pointer hover:bg-blue-gray-100 select-none`, onClick: () => setFld(field), onDoubleClick: () => handleOpenCondition({
        oper: ["TEXT", "CYRILLIC", "DICT"].includes(field.field.fieldType) ? "=" : "between",
        field
      }), children: field.title }, field.id, false, {
        fileName: "app/routes/dashboard.search_data.$formId.tsx",
        lineNumber: 193,
        columnNumber: 67
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.search_data.$formId.tsx",
        lineNumber: 192,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "self-center flex flex-col justify-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleAddCondition(), children: "Add" }, void 0, false, {
          fileName: "app/routes/dashboard.search_data.$formId.tsx",
          lineNumber: 201,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleDeleteCondition(), children: "Delete" }, void 0, false, {
          fileName: "app/routes/dashboard.search_data.$formId.tsx",
          lineNumber: 204,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => setConditions([]), children: "Erase" }, void 0, false, {
          fileName: "app/routes/dashboard.search_data.$formId.tsx",
          lineNumber: 207,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleBktBoth(), children: "()" }, void 0, false, {
          fileName: "app/routes/dashboard.search_data.$formId.tsx",
          lineNumber: 210,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleBktLeft(), children: "(" }, void 0, false, {
          fileName: "app/routes/dashboard.search_data.$formId.tsx",
          lineNumber: 213,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleBktRight(), children: ")" }, void 0, false, {
          fileName: "app/routes/dashboard.search_data.$formId.tsx",
          lineNumber: 216,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleReplaceOrAnd("OR"), children: "OR" }, void 0, false, {
          fileName: "app/routes/dashboard.search_data.$formId.tsx",
          lineNumber: 219,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleReplaceOrAnd("AND"), children: "AND" }, void 0, false, {
          fileName: "app/routes/dashboard.search_data.$formId.tsx",
          lineNumber: 222,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.search_data.$formId.tsx",
        lineNumber: 200,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Panel, { className: "w-2/3", children: conditions.map((c, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `${condIndex === index ? "bg-blue-gray-100" : ""} hover:cursor-pointer`, onClick: () => setCondIndex(index), children: c.log ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        "---- ",
        c.log,
        " ----"
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.search_data.$formId.tsx",
        lineNumber: 228,
        columnNumber: 38
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { onDoubleClick: () => handleOpenCondition(c, index), children: [
        c.field?.title,
        " ",
        c.oper,
        " ",
        c.val1,
        " ",
        c.val2
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.search_data.$formId.tsx",
        lineNumber: 228,
        columnNumber: 69
      }, this) }, index, false, {
        fileName: "app/routes/dashboard.search_data.$formId.tsx",
        lineNumber: 227,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.search_data.$formId.tsx",
        lineNumber: 226,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.search_data.$formId.tsx",
      lineNumber: 191,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.search_data.$formId.tsx",
    lineNumber: 177,
    columnNumber: 10
  }, this);
}
_s(SearchData, "+qDjnbfrvcMrPxa7q47q19XCOT4=", false, function() {
  return [useOutletContext, useLoaderData, useActionData, useSubmit];
});
_c3 = SearchData;
var _c3;
$RefreshReg$(_c3, "SearchData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SearchData as default
};
//# sourceMappingURL=/build/routes/dashboard.search_data.$formId-TGZKCZQE.js.map

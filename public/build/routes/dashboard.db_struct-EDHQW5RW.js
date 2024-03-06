import {
  CustomButton,
  CustomInput,
  ErrorMessage,
  Panel,
  require_index_browser,
  require_node
} from "/build/_shared/chunk-FMBQK5TO.js";
import {
  require_react
} from "/build/_shared/chunk-DGLILCEK.js";
import {
  useTranslation
} from "/build/_shared/chunk-XJ6BYS35.js";
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
import "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard.db_struct.tsx
var import_node = __toESM(require_node(), 1);

// app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx"
  );
  import.meta.hot.lastModified = "1709721125296.242";
}
function ButtonAddDicionary({
  count
}) {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "createEmptyDictionary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      t("add_dictionary")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(ButtonAddDicionary, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = ButtonAddDicionary;
var _c;
$RefreshReg$(_c, "ButtonAddDicionary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx"
  );
  import.meta.hot.lastModified = "1709721133780.5713";
}
function ButtonAddInputForm({
  count
}) {
  _s2();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "createEmptyInputForm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      t("add_inputform")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s2(ButtonAddInputForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c2 = ButtonAddInputForm;
var _c2;
$RefreshReg$(_c2, "ButtonAddInputForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx"
  );
  import.meta.hot.lastModified = "1709721140960.8484";
}
function ButtonAddSearchForm({
  count
}) {
  _s3();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "createEmptySearchForm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      t("add_searchform")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s3(ButtonAddSearchForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c3 = ButtonAddSearchForm;
var _c3;
$RefreshReg$(_c3, "ButtonAddSearchForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx"
  );
  import.meta.hot.lastModified = "1709721158857.5342";
}
var {
  Spinner
} = import_react4.default;
function ButtonRestructDb() {
  _s4();
  const fetcher = useFetcher();
  const isRestruct = fetcher.state !== "idle";
  const handleRestruct = async (event) => {
    const response = confirm("Please confirm you want to restructure database.");
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "bg-blue-500 hover:shadow-blue-100", type: "submit", name: "_action", value: "generateStructDb", disabled: isRestruct, onClick: handleRestruct, children: isRestruct ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Spinner, { className: "w-4 h-4" }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
      lineNumber: 41,
      columnNumber: 25
    }, this),
    "Restructuring..."
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
    lineNumber: 40,
    columnNumber: 31
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
      lineNumber: 45,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
      lineNumber: 44,
      columnNumber: 25
    }, this),
    "Restruct Database"
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
    lineNumber: 43,
    columnNumber: 27
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
    lineNumber: 39,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s4(ButtonRestructDb, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c4 = ButtonRestructDb;
var _c4;
$RefreshReg$(_c4, "ButtonRestructDb");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/buttons/buttons.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/buttons/buttons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/buttons/buttons.tsx"
  );
  import.meta.hot.lastModified = "1709721171562.0166";
}
function Buttons({
  state,
  dictionaries_count,
  inputForms_count,
  searchForms_count
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-2 flex justify-between py-2 px-2 border border-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-3", children: state === "dictionary" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ButtonAddDicionary, { count: dictionaries_count }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 33,
      columnNumber: 43
    }, this) : state === "inputForm" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ButtonAddInputForm, { count: inputForms_count }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 33,
      columnNumber: 119
    }, this) : state === "searchForm" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ButtonAddSearchForm, { count: searchForms_count }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 33,
      columnNumber: 194
    }, this) : null }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ButtonRestructDb, {}, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c5 = Buttons;
var _c5;
$RefreshReg$(_c5, "Buttons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/navigator.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/navigator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/navigator.tsx"
  );
  import.meta.hot.lastModified = "1709709623120.8232";
}
function DbStructNav({
  state,
  inputForms,
  searchForms,
  dictionaries,
  inputFormId,
  searchFormId,
  dictionaryId,
  groupId
}) {
  _s5();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-4 mr-5 w-1/3 border border-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["flex items-center gap-1 font-bold", state === "inputForm" && !inputFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/dashboard/db_struct?state=inputForm&inputFormId=0`, children: t("inputforms") }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: inputForms.map((form) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["pl-4 flex items-center gap-1 hover:cursor-pointer", state === "inputForm" && form.id === inputFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
          lineNumber: 53,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
          lineNumber: 52,
          columnNumber: 37
        }, this),
        form.pos,
        ". ",
        form.title
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 51,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 50,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: form.groups.map((gr) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/dashboard/db_struct?state=group&inputFormId=${gr.inputFormId}&groupId=${gr.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["pl-8 flex items-center gap-1 hover:cursor-pointer", state === "group" && gr.id === groupId ? "bg-blue-gray-200" : ""].join(" "), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
          lineNumber: 62,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
          lineNumber: 61,
          columnNumber: 45
        }, this),
        gr.pos,
        ". ",
        gr.title
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 60,
        columnNumber: 41
      }, this) }, gr.id, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 59,
        columnNumber: 56
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 58,
        columnNumber: 29
      }, this)
    ] }, form.id, true, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 49,
      columnNumber: 45
    }, this)) }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["flex items-center gap-1 font-bold", state === "searchForm" && !searchFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 72,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/dashboard/db_struct?state=searchForm&searchFormId=0`, children: t("searchforms") }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 74,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: searchForms.map((form) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["pl-4 flex items-center gap-1 hover:cursor-pointer", state === "searchForm" && form.id === searchFormId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 82,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 81,
        columnNumber: 33
      }, this),
      form.pos,
      ". ",
      form.title
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 80,
      columnNumber: 29
    }, this) }, form.id, false, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 79,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 78,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["flex items-center gap-1 font-bold", state === "dictionary" && !dictionaryId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 90,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 89,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/dashboard/db_struct?state=dictionary&dictionaryId=0`, children: t("dictionaries") }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 92,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 88,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: dictionaries.map((dict) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: `/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: ["pl-4 flex items-center gap-1 hover:cursor-pointer", state === "dictionary" && dict.id === dictionaryId ? "bg-blue-gray-200" : ""].join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 100,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 99,
        columnNumber: 33
      }, this),
      dict.title
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 98,
      columnNumber: 29
    }, this) }, dict.id, false, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 97,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 96,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
    lineNumber: 39,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s5(DbStructNav, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c6 = DbStructNav;
var _c6;
$RefreshReg$(_c6, "DbStructNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/forms/form_dict.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/forms/form_dict.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/forms/form_dict.tsx"
  );
  import.meta.hot.lastModified = "1709721198463.0256";
}
function DictionaryForm({
  dictionary
}) {
  _s6();
  const {
    t
  } = useTranslation();
  const handleDelete = async (event) => {
    const response = confirm(t("confirm_delete"));
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CustomButton, { className: "hidden", id: "updateDictionaryButton", form: "updateDictionary", type: "submit", name: "_action", value: "updateDictionary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
          lineNumber: 43,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        t("save")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", onClick: handleDelete, type: "submit", name: "_action", value: "deleteDictionary", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
            lineNumber: 51,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
            lineNumber: 50,
            columnNumber: 25
          }, this),
          t("delete")
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
          lineNumber: 49,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { id: "updateDictionary", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CustomInput, { id: dictionary.id, title: t("title"), type: "text", defaultValue: dictionary?.title, name: "title", required: true, onChange: () => {
        const button = document.getElementById("updateDictionaryButton");
        button.click();
      }, size: 100 }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this)
    ] }, dictionary?.id, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s6(DictionaryForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c7 = DictionaryForm;
var _c7;
$RefreshReg$(_c7, "DictionaryForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/forms/form_group.tsx
var import_client = __toESM(require_index_browser(), 1);
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/forms/form_group.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/forms/form_group.tsx"
  );
  import.meta.hot.lastModified = "1709721213387.5789";
}
function GroupForm({
  group,
  dicts
}) {
  _s7();
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  const handleDelete = async (event) => {
    const response = confirm(t("confirm_delete"));
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "addInputFieldForm", type: "submit", name: "_action", value: "createEmptyInputField", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        t("add_field")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CustomButton, { className: "hidden", id: "updateGroupButton", color: "green", form: "updateGroupForm", type: "submit", name: "_action", value: "updateGroup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this),
        t("save")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", form: "deleteGroupForm", type: "submit", name: "_action", value: "deleteGroup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this),
        t("delete")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { id: "addInputFieldForm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "groupId", defaultValue: group.id }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: group.fields.length + 1 }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { id: "updateGroupForm", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CustomInput, { id: "group_pos", type: "number", name: "pos", title: t("pos"), defaultValue: group?.pos, required: true, onChange: () => {
        const button = document.getElementById("updateGroupButton");
        button.click();
      }, subClass: "w-16" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CustomInput, { id: "group_title", type: "text", name: "title", title: t("title"), defaultValue: group?.title, required: true, onChange: () => {
        const button = document.getElementById("updateGroupButton");
        button.click();
      }, size: 100 }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CustomInput, { id: "group_ismulty", type: "checkbox", name: "isMulty", title: t("is_multy"), checked: group?.isMulty ? true : false, required: false, onChange: () => {
        const button = document.getElementById("updateGroupButton");
        button.click();
      } }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    group?.fields && group.fields.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { className: "hidden", id: `updateInputFieldForm_${field.id}`, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "groupId", defaultValue: field.groupId }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CustomButton, { className: "bg-green-500 hover:shadow-green-100", id: `updateInputFieldButton_${field.id}`, form: `updateInputFieldForm_${field.id}`, type: "submit", name: "_action", value: "updateInputField", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 89,
          columnNumber: 25
        }, this),
        t("save")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 88,
        columnNumber: 21
      }, this)
    ] }, `updateInputFieldForm_${field.id}`, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 85,
      columnNumber: 57
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("thead", { className: "bg-blue-gray-400 text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 99,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("pos") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 100,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("span") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 101,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("start") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 102,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("title") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 103,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("type_data") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 104,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("dictionary") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 105,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("len") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 106,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("precision") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 107,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("is_key") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 108,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("is_visible") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 109,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("is_enable") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 110,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("is_require") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 111,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("duplicate") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 112,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 113,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 98,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 97,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tbody", { className: "text-center", children: group?.fields && group.fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 118,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "pos", defaultValue: field.pos, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 120,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 119,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "colSpan", min: 1, max: 3, defaultValue: field.colSpan, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 126,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 125,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "colStart", min: 1, max: 3, defaultValue: field.colStart, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 132,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 131,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40", onClick: () => navigate(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}&inputFieldId=${field.id}`), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "text", name: "title", defaultValue: field.title, maxLength: 23, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 138,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 137,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("select", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, name: "fieldType", defaultValue: field.fieldType, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        }, children: Object.keys(import_client.FieldType).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: key, children: key }, key, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 148,
          columnNumber: 76
        }, this)) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 144,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 143,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.fieldType === "DICT" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("select", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, name: "dicId", defaultValue: String(field.dicId), onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "", children: "-" }, void 0, false, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 156,
            columnNumber: 45
          }, this),
          dicts.map((dic) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: dic.id, children: dic.title }, dic.id, false, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 157,
            columnNumber: 63
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 152,
          columnNumber: 67
        }, this) : null }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 151,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "len", defaultValue: field.len, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 161,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 160,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm w-full", form: `updateInputFieldForm_${field.id}`, type: "number", name: "precision", defaultValue: field.precision, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 167,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 166,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isKey", defaultChecked: field.isKey, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 173,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 172,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isVisible", defaultChecked: field.isVisible, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 179,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 178,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isEnable", defaultChecked: field.isEnable, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 185,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 184,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isRequire", defaultChecked: field.isRequire, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 191,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 190,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "text-sm", form: `updateInputFieldForm_${field.id}`, type: "checkbox", name: "isDuplicate", defaultChecked: field.isDuplicate, onChange: () => {
          const button = document.getElementById(`updateInputFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 197,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 196,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: field?.id ? field.id : "" }, void 0, false, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 204,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", onClick: handleDelete, type: "submit", name: "_action", value: "deleteInputField", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 207,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 206,
              columnNumber: 45
            }, this),
            t("delete")
          ] }, void 0, true, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 205,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 203,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 202,
          columnNumber: 33
        }, this)
      ] }, field.id, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 117,
        columnNumber: 78
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 116,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 96,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { id: "deleteGroupForm", method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 223,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 224,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 217,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s7(GroupForm, "1n6r5eWNKhP/dvqdbLCphpT4ddM=", false, function() {
  return [useTranslation, useNavigate];
});
_c8 = GroupForm;
var _c8;
$RefreshReg$(_c8, "GroupForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/forms/form_input.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/forms/form_input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/forms/form_input.tsx"
  );
  import.meta.hot.lastModified = "1709721228492.134";
}
function InputFormForm({
  inputForm,
  groups
}) {
  _s8();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "addGroupForm", type: "submit", name: "_action", value: "createEmptyGroup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 38,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this),
        t("add_group")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CustomButton, { className: "hidden", id: "updateInputFormButton", form: "updateInputForm", type: "submit", name: "_action", value: "updateInputForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 44,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        t("save")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", form: "deleteInputForm", type: "submit", name: "_action", value: "deleteInputForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 50,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 49,
          columnNumber: 21
        }, this),
        t("delete")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Form, { id: "addGroupForm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "inputFormId", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: groups.length + 1 }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, 1, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Form, { id: "updateInputForm", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CustomInput, { id: "inputForm_pos", title: t("pos"), type: "number", defaultValue: inputForm?.pos, name: "pos", required: true, onChange: () => {
        const button = document.getElementById("updateInputFormButton");
        button.click();
      }, subClass: "w-16" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CustomInput, { id: "inputForm_title", title: t("title"), type: "text", defaultValue: inputForm?.title, name: "title", required: true, onChange: () => {
        const button = document.getElementById("updateInputFormButton");
        button.click();
      }, size: 100 }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, 2, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Form, { id: "deleteInputForm", method: "post", onSubmit: (event) => {
      const response = confirm(t("confirm_delete"));
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this) }, 3, false, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s8(InputFormForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c9 = InputFormForm;
var _c9;
$RefreshReg$(_c9, "InputFormForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/forms/form_search.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/forms/form_search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/forms/form_search.tsx"
  );
  import.meta.hot.lastModified = "1709721245040.7368";
}
function SearchFormForm({
  searchForm,
  inputFields
}) {
  _s9();
  const {
    t
  } = useTranslation();
  const handleDelete = async (event) => {
    const response = confirm(t("confirm_delete"));
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "addSearchFieldForm", type: "submit", name: "_action", value: "createEmptySearchField", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 44,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        t("add_field")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CustomButton, { className: "hidden", id: "updateSearchFormButton", form: "updateSearchForm", type: "submit", name: "_action", value: "updateSearchForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 50,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 49,
          columnNumber: 21
        }, this),
        t("save")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", form: "deleteSearchForm", type: "submit", name: "_action", value: "deleteSearchForm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 56,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this),
        t("delete")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { id: "addSearchFieldForm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "searchFormId", defaultValue: searchForm.id }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: searchForm.fields?.length + 1 }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { id: "updateSearchForm", className: "flex flex-col gap-3", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: searchForm.id }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CustomInput, { id: "searchForm_pos", title: t("pos"), type: "number", value: searchForm?.pos, name: "pos", required: true, onChange: () => {
        const button = document.getElementById("updateSearchFormButton");
        button.click();
      }, subClass: "w-16" }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CustomInput, { id: "searchForm_title", title: t("title"), type: "text", value: searchForm?.title, name: "title", required: true, onChange: () => {
        const button = document.getElementById("updateSearchFormButton");
        button.click();
      }, size: 100 }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this)
    ] }, searchForm?.id, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { id: "deleteSearchForm", method: "post", onSubmit: (event) => {
      const response = confirm(t("confirm_delete"));
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 82,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    searchForm?.fields && searchForm.fields.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { className: "hidden", id: `updateSearchFieldForm_${field.id}`, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 85,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "searchFormId", defaultValue: field.searchFormId }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CustomButton, { className: "bg-green-500 hover:shadow-green-100", id: `updateSearchFieldButton_${field.id}`, form: `updateSearchFieldForm_${field.id}`, type: "submit", name: "_action", value: "updateSearchField", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 88,
          columnNumber: 25
        }, this),
        t("save")
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this)
    ] }, `updateSearchFieldForm_${field.id}`, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 84,
      columnNumber: 67
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("thead", { className: "bg-blue-gray-400 text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 98,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("pos") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 99,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("title") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 100,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("field") }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 101,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 102,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 97,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 96,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("tbody", { children: searchForm?.fields && searchForm.fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 107,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "text-sm w-full", form: `updateSearchFieldForm_${field.id}`, type: "number", name: "pos", defaultValue: field.pos, onChange: () => {
          const button = document.getElementById(`updateSearchFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 109,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 108,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "text-sm w-full", form: `updateSearchFieldForm_${field.id}`, type: "text", name: "title", defaultValue: field.title, onChange: () => {
          const button = document.getElementById(`updateSearchFieldButton_${field.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 115,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 114,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("select", { className: "text-sm w-full", form: `updateSearchFieldForm_${field.id}`, name: "fieldId", defaultValue: String(field.fieldId), onChange: () => {
          const button = document.getElementById(`updateSearchFieldButton_${field.id}`);
          button.click();
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "", children: "-" }, void 0, false, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 125,
            columnNumber: 41
          }, this),
          inputFields && inputFields.map((fld) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: fld.id, children: `${fld.group.pos}. ${fld.group.title} -> ${fld.title}` }, fld.id, false, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 126,
            columnNumber: 80
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 121,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 120,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, false, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 133,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", onClick: handleDelete, type: "submit", name: "_action", value: "deleteSearchField", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 136,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 135,
              columnNumber: 45
            }, this),
            t("delete")
          ] }, void 0, true, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 134,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 132,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 131,
          columnNumber: 33
        }, this)
      ] }, field.id, true, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 106,
        columnNumber: 88
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 105,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 95,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s9(SearchFormForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c10 = SearchFormForm;
var _c10;
$RefreshReg$(_c10, "SearchFormForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/forms/forms.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/forms/forms.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/forms/forms.tsx"
  );
  import.meta.hot.lastModified = "1709711447009.0662";
}
function Forms({
  state,
  dictionaries,
  groups,
  inputForm,
  searchForm,
  dictionary,
  group,
  inputFields
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "p-4 border border-gray-900 grow", children: state === "inputForm" && inputForm ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(InputFormForm, { inputForm, groups }, void 0, false, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 36,
    columnNumber: 51
  }, this) : state === "searchForm" && searchForm ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SearchFormForm, { searchForm, inputFields }, void 0, false, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 36,
    columnNumber: 148
  }, this) : state === "dictionary" && dictionary ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DictionaryForm, { dictionary }, void 0, false, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 36,
    columnNumber: 258
  }, this) : state === "group" && group ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(GroupForm, { group, dicts: dictionaries }, void 0, false, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 36,
    columnNumber: 332
  }, this) : null }, void 0, false, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c11 = Forms;
var _c11;
$RefreshReg$(_c11, "Forms");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/db_struct/view.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/db_struct/view.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/db_struct/view.tsx"
  );
  import.meta.hot.lastModified = "1709721269297.6106";
}
function DbStructView({
  errors,
  state,
  inputForms,
  searchForms,
  dictionaries,
  groups,
  inputFormId,
  searchFormId,
  dictionaryId,
  groupId,
  inputForm,
  searchForm,
  dictionary,
  group,
  inputFields
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ErrorMessage, { errors }, void 0, false, {
      fileName: "app/components/UI/widgets/db_struct/view.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Buttons, { state, dictionaries_count: dictionaries && dictionaries.length ? dictionaries.length : 0, inputForms_count: inputForms && inputForms.length ? inputForms.length : 0, searchForms_count: searchForms && searchForms.length ? searchForms.length : 0 }, void 0, false, {
        fileName: "app/components/UI/widgets/db_struct/view.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DbStructNav, { state, inputForms, searchForms, dictionaries, groups, inputFormId, searchFormId, dictionaryId, groupId }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/view.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Forms, { state, dictionaries, groups, inputForm, searchForm, dictionary, group, inputFields }, void 0, false, {
          fileName: "app/components/UI/widgets/db_struct/view.tsx",
          lineNumber: 49,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/db_struct/view.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/db_struct/view.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/db_struct/view.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c12 = DbStructView;
var _c12;
$RefreshReg$(_c12, "DbStructView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.db_struct.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s10 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.db_struct.tsx"
  );
  import.meta.hot.lastModified = "1709721425911.0088";
}
function DbStruct() {
  _s10();
  const {
    dictionaries,
    inputForms,
    searchForms
  } = useOutletContext();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DbStructView, { errors: data?.errors ? data?.errors : void 0, state, inputForms, searchForms, dictionaries, groups, inputFormId: inputForm?.id, searchFormId: searchForm?.id, dictionaryId: dictionary?.id, groupId: group?.id, inputForm, searchForm, dictionary, group, inputFields }, void 0, false, {
    fileName: "app/routes/dashboard.db_struct.tsx",
    lineNumber: 335,
    columnNumber: 10
  }, this);
}
_s10(DbStruct, "kNnKkDlN1zrymI1rlQ+0TMjZkQA=", false, function() {
  return [useOutletContext, useLoaderData, useActionData];
});
_c13 = DbStruct;
var _c13;
$RefreshReg$(_c13, "DbStruct");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DbStruct as default
};
//# sourceMappingURL=/build/routes/dashboard.db_struct-EDHQW5RW.js.map

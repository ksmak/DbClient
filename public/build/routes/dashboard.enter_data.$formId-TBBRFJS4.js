import {
  CustomSelect
} from "/build/_shared/chunk-35IR2J3X.js";
import {
  CustomButton,
  CustomInput,
  ErrorMessage,
  Panel,
  require_node
} from "/build/_shared/chunk-FMBQK5TO.js";
import {
  require_react as require_react2
} from "/build/_shared/chunk-DGLILCEK.js";
import {
  useTranslation
} from "/build/_shared/chunk-XJ6BYS35.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
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

// app/routes/dashboard.enter_data.$formId.tsx
var import_node = __toESM(require_node(), 1);
var import_react14 = __toESM(require_react(), 1);

// app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx"
  );
  import.meta.hot.lastModified = "1709721283146.1047";
}
function ButtonCancel({
  userId,
  inputFormId,
  doc
}) {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "cancelUpdate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      t("cancel")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(ButtonCancel, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = ButtonCancel;
var _c;
$RefreshReg$(_c, "ButtonCancel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_create.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_create.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_create.tsx"
  );
  import.meta.hot.lastModified = "1709721290982.3826";
}
function ButtonCreate({
  userId,
  inputFormId
}) {
  _s2();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForCreate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      t("create")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s2(ButtonCreate, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c2 = ButtonCreate;
var _c2;
$RefreshReg$(_c2, "ButtonCreate");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_delete.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_delete.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx"
  );
  import.meta.hot.lastModified = "1709721299382.6792";
}
function ButtonDelete({
  userId,
  inputFormId,
  doc
}) {
  _s3();
  const {
    t
  } = useTranslation();
  const handleDelete = async (event) => {
    const response = confirm("Please confirm you want to delete this record.");
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", onClick: handleDelete, type: "submit", name: "_action", value: "deleteDocument", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      t("delete")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s3(ButtonDelete, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c3 = ButtonDelete;
var _c3;
$RefreshReg$(_c3, "ButtonDelete");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_edit.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx"
  );
  import.meta.hot.lastModified = "1709721306522.9307";
}
function ButtonEdit({
  userId,
  inputFormId,
  doc
}) {
  _s4();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForEdit", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      t("edit")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s4(ButtonEdit, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c4 = ButtonEdit;
var _c4;
$RefreshReg$(_c4, "ButtonEdit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_find.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_find.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_find.tsx"
  );
  import.meta.hot.lastModified = "1709721316399.2766";
}
function ButtonFind({
  userId,
  inputFormId,
  doc
}) {
  _s5();
  const {
    t
  } = useTranslation();
  const submit = useSubmit();
  const handleFind = () => {
    submit({
      _action: "findDocument",
      _user: userId,
      _inputFormId: inputFormId,
      _id: doc.id ? doc.id : "",
      json: JSON.stringify(document)
    }, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", onClick: () => handleFind(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    t("find")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s5(ButtonFind, "6b9drngkmiq9KhFUfrO+O1zoj50=", false, function() {
  return [useTranslation, useSubmit];
});
_c5 = ButtonFind;
var _c5;
$RefreshReg$(_c5, "ButtonFind");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_save.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_save.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_save.tsx"
  );
  import.meta.hot.lastModified = "1709721323311.5178";
}
function ButtonSave({
  userId,
  inputFormId,
  doc
}) {
  _s6();
  const {
    t
  } = useTranslation();
  const submit = useSubmit();
  const handleSave = () => {
    submit({
      _action: "saveDocument",
      _user: userId ? userId : "",
      _inputFormId: inputFormId ? inputFormId : "",
      _id: doc.id ? doc.id : "",
      json: JSON.stringify(document)
    }, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", onClick: () => handleSave(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    t("save")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s6(ButtonSave, "6b9drngkmiq9KhFUfrO+O1zoj50=", false, function() {
  return [useTranslation, useSubmit];
});
_c6 = ButtonSave;
var _c6;
$RefreshReg$(_c6, "ButtonSave");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_search.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_search.tsx"
  );
  import.meta.hot.lastModified = "1709721330031.7515";
}
function ButtonSearch({
  userId,
  inputFormId
}) {
  _s7();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForSearch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      t("search")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s7(ButtonSearch, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c7 = ButtonSearch;
var _c7;
$RefreshReg$(_c7, "ButtonSearch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/buttons.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/buttons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/buttons.tsx"
  );
  import.meta.hot.lastModified = "1709717049279.9956";
}
function Buttons({
  userId,
  inputFormId,
  state,
  doc
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-3", children: [
    !["edit", "search"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonCreate, { userId, inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 35,
      columnNumber: 60
    }, this) : null,
    !["edit", "search"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonSearch, { userId, inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 36,
      columnNumber: 60
    }, this) : null,
    state === "search" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonFind, { userId, inputFormId, doc }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 37,
      columnNumber: 35
    }, this) : null,
    doc.id && state !== "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonEdit, { userId, inputFormId, doc }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 38,
      columnNumber: 43
    }, this) : null,
    state === "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonSave, { userId, inputFormId, doc }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 39,
      columnNumber: 33
    }, this) : null,
    state === "edit" || state === "search" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonCancel, { userId, inputFormId, doc }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 40,
      columnNumber: 55
    }, this) : null,
    doc.id && state !== "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonDelete, { userId, inputFormId, doc }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 41,
      columnNumber: 43
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c8 = Buttons;
var _c8;
$RefreshReg$(_c8, "Buttons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/dlg_find_result.tsx
var import_react8 = __toESM(require_react2(), 1);
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/dlg_find_result.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/dlg_find_result.tsx"
  );
  import.meta.hot.lastModified = "1709721343144.2053";
}
var {
  Dialog,
  Card,
  CardBody,
  CardFooter
} = import_react8.default;
function DialogFindResult({
  open,
  setOpen,
  docs
}) {
  _s8();
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  const handleOpenInputForm = () => {
    setOpen(false);
    if (docs && docs.ids?.length) {
      navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`);
    } else {
      navigate(`/dashboard/enter_data/${docs.formId}?state=search`);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Dialog, { placeholder: "", size: "sm", open, handler: () => handleOpenInputForm(), className: "bg-transparent shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card, { className: "mx-auto w-full", placeholder: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: docs && docs.ids?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-bold p-1", children: [
      t("find_result"),
      ": ",
      docs.ids?.length
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
      lineNumber: 53,
      columnNumber: 49
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-bold p-1", children: t("nothing") }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
      lineNumber: 53,
      columnNumber: 127
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardFooter, { className: "pt-0 flex flex-row gap-3 justify-center", placeholder: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CustomButton, { className: "bg-green-500 hover:shadow-green-100", onClick: () => handleOpenInputForm(), children: "OK" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
      lineNumber: 57,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
    lineNumber: 51,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s8(DialogFindResult, "1n6r5eWNKhP/dvqdbLCphpT4ddM=", false, function() {
  return [useTranslation, useNavigate];
});
_c9 = DialogFindResult;
var _c9;
$RefreshReg$(_c9, "DialogFindResult");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/rec_navigator.tsx
var import_react11 = __toESM(require_react(), 1);
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/rec_navigator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/rec_navigator.tsx"
  );
  import.meta.hot.lastModified = "1708944139413.0334";
}
function RecNavigator({
  docs,
  current,
  setCurrent
}) {
  _s9();
  const [val, setVal] = (0, import_react11.useState)(current);
  const navigate = useNavigate();
  const handleFirst = () => {
    setVal(0);
    setCurrent(0);
    navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`);
  };
  const handlePrev = () => {
    if (current > 0) {
      --current;
      setVal(current);
      setCurrent(current);
      navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`);
    }
  };
  const handleNext = () => {
    const lastIndex = docs.ids.length - 1;
    if (current < lastIndex) {
      ++current;
      setVal(current);
      setCurrent(current);
      navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`);
    }
  };
  const handleLast = () => {
    const lastIndex = docs.ids.length - 1;
    setVal(lastIndex);
    setCurrent(lastIndex);
    navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[lastIndex]}`);
  };
  const handleSeek = (val2) => {
    if (val2 < 0) {
      val2 = 0;
    }
    if (val2 > docs.ids.length - 1) {
      val2 = docs.ids.length - 1;
    }
    setVal(val2);
    setCurrent(val2);
    navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[val2]}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: docs && docs.ids ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex gap-1 justify-end items-center text-xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-blue-gray-600 font-bold", children: [
      current + 1,
      " / ",
      docs.ids.length
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
      lineNumber: 73,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "p-1 text-blue-gray-600 focus:outline-0 w-20", type: "number", max: docs.ids.length, min: 1, value: val + 1, onChange: (e) => setVal(Number(e.target.value) - 1) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
      lineNumber: 76,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-20 text-center border bg-blue-gray-500 p-1 font-bold text-white rounded", onClick: () => handleSeek(val), children: "Seek" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded", onClick: () => handleFirst(), children: "<<" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
      lineNumber: 80,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded", onClick: () => handlePrev(), children: "<" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
      lineNumber: 83,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded", onClick: () => handleNext(), children: ">" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
      lineNumber: 86,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded", onClick: () => handleLast(), children: ">>" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
      lineNumber: 89,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
    lineNumber: 72,
    columnNumber: 33
  }, this) : null }, void 0, false, {
    fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s9(RecNavigator, "bRS7YemhOiQ/UMD2eufTNCWGMz4=", false, function() {
  return [useNavigate];
});
_c10 = RecNavigator;
var _c10;
$RefreshReg$(_c10, "RecNavigator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/edit_form/field.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/edit_form/field.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/edit_form/field.tsx"
  );
  import.meta.hot.lastModified = "1709697011959.976";
}
function Field({
  state,
  dictionaries,
  doc,
  setDoc,
  recordIndex,
  fld
}) {
  const tableName = `tbl_${fld.groupId}`;
  const fieldName = `f${fld.id}`;
  let val = doc[tableName][recordIndex][fieldName] ? doc[tableName][recordIndex][fieldName] : "";
  const cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`;
  const handleChange = (e) => {
    let d = {
      ...doc
    };
    d[tableName][recordIndex][fieldName] = e.target.value;
    setDoc(d);
  };
  switch (fld.fieldType) {
    case "TEXT":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "text", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 44,
        columnNumber: 14
      }, this);
    case "CYRILLIC":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "text", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 46,
        columnNumber: 14
      }, this);
    case "INTEGER":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "number", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 48,
        columnNumber: 14
      }, this);
    case "NUMERIC":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "number", step: "0.01", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 50,
        columnNumber: 14
      }, this);
    case "DICT":
      const dic = dictionaries.find((item) => item.id === fld.dicId);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomSelect, { className: cls, id: fieldName, title: fld.title, name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { children: "-" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        ["create", "edit", "search", "find"].includes(String(state)) ? dic?.data_edit.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: item.id, children: item.title }, item.id, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 55,
          columnNumber: 112
        }, this)) : dic?.data_browse.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: item.id, children: item.title }, item.id, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 55,
          columnNumber: 204
        }, this))
      ] }, fld.id, true, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 53,
        columnNumber: 14
      }, this);
    case "DATE":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "date", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 58,
        columnNumber: 14
      }, this);
    case "TIME":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "time", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 60,
        columnNumber: 14
      }, this);
  }
}
_c11 = Field;
var _c11;
$RefreshReg$(_c11, "Field");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/edit_form/single_group.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/edit_form/single_group.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/edit_form/single_group.tsx"
  );
  import.meta.hot.lastModified = "1709720976130.1318";
}
function SingleGroup({
  state,
  dictionaries,
  group,
  doc,
  setDoc
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "border p-1 grid grid-cols-3 gap-1", children: group?.fields && group.fields.map((fld) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Field, { state, dictionaries, recordIndex: 0, doc, setDoc, fld }, fld.id, false, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/single_group.tsx",
    lineNumber: 30,
    columnNumber: 55
  }, this)) }, void 0, false, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/single_group.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c12 = SingleGroup;
var _c12;
$RefreshReg$(_c12, "SingleGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/edit_form/multy_group.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/edit_form/multy_group.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx"
  );
  import.meta.hot.lastModified = "1709720976130.1318";
}
function MultyGroup({
  state,
  dictionaries,
  group,
  doc,
  setDoc
}) {
  const handleAdd = (e) => {
    e.preventDefault();
    let d = {
      ...doc
    };
    const tbl = `tbl_${group.id}`;
    let fields = {
      id: null,
      sid: null,
      lst: 0
    };
    for (const field of group.fields) {
      fields[`f${field.id}`] = "";
    }
    d[tbl].push(fields);
    setDoc(d);
  };
  const handleDelete = (e, recordIndex) => {
    e.preventDefault();
    const response = confirm("Please confirm you want to delete this record.");
    if (response) {
      let d = {
        ...doc
      };
      const tbl = `tbl_${group.id}`;
      d[tbl].splice([recordIndex], 1);
      setDoc(d);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "border p-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex justify-end p-1", children: state === "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", onClick: handleAdd, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 63,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this),
      "Add"
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
      lineNumber: 61,
      columnNumber: 37
    }, this) : null }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("table", { className: "border border-blue-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("thead", { className: "bg-blue-gray-400 text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 71,
          columnNumber: 25
        }, this),
        group?.fields && group.fields.map((fld) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: fld.title }, fld.id, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 72,
          columnNumber: 67
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 75,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tbody", { children: doc[`tbl_${group.id}`].map((record, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 80,
          columnNumber: 29
        }, this),
        group?.fields && group.fields.map((fld) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Field, { state, dictionaries, recordIndex: index, doc, setDoc, fld }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 82,
          columnNumber: 37
        }, this) }, fld.id, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 81,
          columnNumber: 71
        }, this)),
        state === "edit" && index !== 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", onClick: (e) => handleDelete(e, index), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 87,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 86,
            columnNumber: 41
          }, this),
          "Delete"
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 85,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 84,
          columnNumber: 64
        }, this) : null
      ] }, index, true, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 79,
        columnNumber: 68
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c13 = MultyGroup;
var _c13;
$RefreshReg$(_c13, "MultyGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/edit_form/edit_form.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/edit_form/edit_form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s10 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx"
  );
  import.meta.hot.lastModified = "1709716930924.5032";
}
function EditForm({
  formRef,
  userId,
  inputForm,
  state,
  dictionaries,
  doc,
  setDoc
}) {
  _s10();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Form, { id: "documentForm", method: "post", ref: formRef, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    inputForm?.groups && inputForm.groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "col-span-3 bg-orange-700 text-white font-bold text-sm p-1 pl-4", children: group.title }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      !group.isMulty ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SingleGroup, { state, dictionaries, group, doc, setDoc }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
        lineNumber: 42,
        columnNumber: 39
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MultyGroup, { state, dictionaries, group, doc, setDoc }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
        lineNumber: 42,
        columnNumber: 139
      }, this)
    ] }, group.id, true, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
      lineNumber: 40,
      columnNumber: 65
    }, this))
  ] }, location.key, true, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s10(EditForm, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c14 = EditForm;
var _c14;
$RefreshReg$(_c14, "EditForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/view.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/view.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/view.tsx"
  );
  import.meta.hot.lastModified = "1709721358088.7192";
}
function EnterDataView({
  errors,
  open,
  setOpen,
  docs,
  userId,
  current,
  setCurrent,
  formRef,
  inputForm,
  state,
  dictionaries,
  doc,
  setDoc
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ErrorMessage, { errors }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DialogFindResult, { open, setOpen, docs }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "py-2 flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Buttons, { userId, inputFormId: inputForm.id, doc, state }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(RecNavigator, { docs, current, setCurrent }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/enter_data/view.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(EditForm, { formRef, userId, inputForm, state, dictionaries, doc, setDoc }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/view.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/view.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c15 = EnterDataView;
var _c15;
$RefreshReg$(_c15, "EnterDataView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.enter_data.$formId.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.enter_data.$formId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s11 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.enter_data.$formId.tsx"
  );
  import.meta.hot.lastModified = "1709721439563.4617";
}
function EnterData() {
  _s11();
  const {
    dictionaries,
    docs,
    setDocs,
    current,
    setCurrent
  } = useOutletContext();
  const {
    inputForm,
    doc,
    state
  } = useLoaderData();
  const [document2, setDocument] = (0, import_react14.useState)(doc);
  const navigation = useNavigation();
  const formRef = (0, import_react14.useRef)(null);
  const userId = 19;
  const data = useActionData();
  const [showFind, setShowFind] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    setDocument(doc);
  }, [doc]);
  (0, import_react14.useEffect)(() => {
    if (data?.docs && data?.ok) {
      setDocs(data.docs);
      setShowFind(true);
    }
    if (navigation.state === "idle" && data?.ok) {
      formRef.current?.reset();
    }
    if (data?.deletedDocId && data?.ok) {
      setDocs((prev) => ({
        formId: prev.formId,
        ids: prev.ids?.filter((item) => item !== data.deletedDocId)
      }));
    }
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(EnterDataView, { errors: data?.errors, open: showFind, setOpen: setShowFind, docs, userId, current, setCurrent, formRef, inputForm, state, dictionaries, doc: document2, setDoc: setDocument }, void 0, false, {
    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
    lineNumber: 154,
    columnNumber: 10
  }, this);
}
_s11(EnterData, "5/1QAMMsuCa9Z9XpGxCZDcBaDPk=", false, function() {
  return [useOutletContext, useLoaderData, useNavigation, useActionData];
});
_c16 = EnterData;
var _c16;
$RefreshReg$(_c16, "EnterData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EnterData as default
};
//# sourceMappingURL=/build/routes/dashboard.enter_data.$formId-TBBRFJS4.js.map

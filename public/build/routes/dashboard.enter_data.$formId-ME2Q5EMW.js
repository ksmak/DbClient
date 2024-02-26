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
  useFetcher,
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
var import_react3 = __toESM(require_react2(), 1);
var import_node = __toESM(require_node(), 1);
var import_react5 = __toESM(require_react(), 1);

// app/widgets/field.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/widgets/field.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/widgets/field.tsx"
  );
  import.meta.hot.lastModified = "1708937813547.5159";
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
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "text", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/widgets/field.tsx",
        lineNumber: 44,
        columnNumber: 14
      }, this);
    case "CYRILLIC":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "text", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/widgets/field.tsx",
        lineNumber: 46,
        columnNumber: 14
      }, this);
    case "INTEGER":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "number", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/widgets/field.tsx",
        lineNumber: 48,
        columnNumber: 14
      }, this);
    case "NUMERIC":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "number", step: "0.01", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/widgets/field.tsx",
        lineNumber: 50,
        columnNumber: 14
      }, this);
    case "DICT":
      const dic = dictionaries.find((item) => item.id === fld.dicId);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelect, { className: cls, id: fieldName, title: fld.title, name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "-" }, void 0, false, {
          fileName: "app/widgets/field.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        ["create", "edit", "search", "find"].includes(String(state)) ? dic?.data_edit.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.id, children: item.title }, item.id, false, {
          fileName: "app/widgets/field.tsx",
          lineNumber: 55,
          columnNumber: 112
        }, this)) : dic?.data_browse.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.id, children: item.title }, item.id, false, {
          fileName: "app/widgets/field.tsx",
          lineNumber: 55,
          columnNumber: 204
        }, this))
      ] }, fld.id, true, {
        fileName: "app/widgets/field.tsx",
        lineNumber: 53,
        columnNumber: 14
      }, this);
    case "DATE":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "date", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/widgets/field.tsx",
        lineNumber: 58,
        columnNumber: 14
      }, this);
    case "TIME":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "time", name: fieldName, value: val, onChange: handleChange, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
        fileName: "app/widgets/field.tsx",
        lineNumber: 60,
        columnNumber: 14
      }, this);
  }
}
_c = Field;
var _c;
$RefreshReg$(_c, "Field");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/widgets/single_group.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/widgets/single_group.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/widgets/single_group.tsx"
  );
  import.meta.hot.lastModified = "1708936355877.7522";
}
function SingleGroup({
  state,
  dictionaries,
  group,
  doc,
  setDoc
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border p-1 grid grid-cols-3 gap-1", children: group?.fields && group.fields.map((fld) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { state, dictionaries, recordIndex: 0, doc, setDoc, fld }, fld.id, false, {
    fileName: "app/widgets/single_group.tsx",
    lineNumber: 30,
    columnNumber: 55
  }, this)) }, void 0, false, {
    fileName: "app/widgets/single_group.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c2 = SingleGroup;
var _c2;
$RefreshReg$(_c2, "SingleGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/widgets/multy_group.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/widgets/multy_group.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/widgets/multy_group.tsx"
  );
  import.meta.hot.lastModified = "1708939643111.3315";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border p-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-end p-1", children: state === "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", onClick: handleAdd, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/widgets/multy_group.tsx",
        lineNumber: 63,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/widgets/multy_group.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this),
      "Add"
    ] }, void 0, true, {
      fileName: "app/widgets/multy_group.tsx",
      lineNumber: 61,
      columnNumber: 37
    }, this) : null }, void 0, false, {
      fileName: "app/widgets/multy_group.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { className: "border border-blue-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { className: "bg-blue-gray-400 text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/widgets/multy_group.tsx",
          lineNumber: 71,
          columnNumber: 25
        }, this),
        group?.fields && group.fields.map((fld) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: fld.title }, fld.id, false, {
          fileName: "app/widgets/multy_group.tsx",
          lineNumber: 72,
          columnNumber: 67
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/widgets/multy_group.tsx",
          lineNumber: 75,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/widgets/multy_group.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/widgets/multy_group.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { children: doc[`tbl_${group.id}`].map((record, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, false, {
          fileName: "app/widgets/multy_group.tsx",
          lineNumber: 80,
          columnNumber: 29
        }, this),
        group?.fields && group.fields.map((fld) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Field, { state, dictionaries, recordIndex: index, doc, setDoc, fld }, void 0, false, {
          fileName: "app/widgets/multy_group.tsx",
          lineNumber: 82,
          columnNumber: 37
        }, this) }, fld.id, false, {
          fileName: "app/widgets/multy_group.tsx",
          lineNumber: 81,
          columnNumber: 71
        }, this)),
        state === "edit" && index !== 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", onClick: (e) => handleDelete(e, index), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/widgets/multy_group.tsx",
            lineNumber: 87,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/widgets/multy_group.tsx",
            lineNumber: 86,
            columnNumber: 41
          }, this),
          "Delete"
        ] }, void 0, true, {
          fileName: "app/widgets/multy_group.tsx",
          lineNumber: 85,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/widgets/multy_group.tsx",
          lineNumber: 84,
          columnNumber: 64
        }, this) : null
      ] }, index, true, {
        fileName: "app/widgets/multy_group.tsx",
        lineNumber: 79,
        columnNumber: 68
      }, this)) }, void 0, false, {
        fileName: "app/widgets/multy_group.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/widgets/multy_group.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/widgets/multy_group.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c3 = MultyGroup;
var _c3;
$RefreshReg$(_c3, "MultyGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/widgets/rec_navigator.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/widgets/rec_navigator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/widgets/rec_navigator.tsx"
  );
  import.meta.hot.lastModified = "1708944139413.0334";
}
function RecNavigator({
  docs,
  current,
  setCurrent
}) {
  _s();
  const [val, setVal] = (0, import_react2.useState)(current);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: docs && docs.ids ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-1 justify-end items-center text-xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-blue-gray-600 font-bold", children: [
      current + 1,
      " / ",
      docs.ids.length
    ] }, void 0, true, {
      fileName: "app/widgets/rec_navigator.tsx",
      lineNumber: 73,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { className: "p-1 text-blue-gray-600 focus:outline-0 w-20", type: "number", max: docs.ids.length, min: 1, value: val + 1, onChange: (e) => setVal(Number(e.target.value) - 1) }, void 0, false, {
      fileName: "app/widgets/rec_navigator.tsx",
      lineNumber: 76,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "w-20 text-center border bg-blue-gray-500 p-1 font-bold text-white rounded", onClick: () => handleSeek(val), children: "Seek" }, void 0, false, {
      fileName: "app/widgets/rec_navigator.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded", onClick: () => handleFirst(), children: "<<" }, void 0, false, {
      fileName: "app/widgets/rec_navigator.tsx",
      lineNumber: 80,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded", onClick: () => handlePrev(), children: "<" }, void 0, false, {
      fileName: "app/widgets/rec_navigator.tsx",
      lineNumber: 83,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded", onClick: () => handleNext(), children: ">" }, void 0, false, {
      fileName: "app/widgets/rec_navigator.tsx",
      lineNumber: 86,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded", onClick: () => handleLast(), children: ">>" }, void 0, false, {
      fileName: "app/widgets/rec_navigator.tsx",
      lineNumber: 89,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/widgets/rec_navigator.tsx",
    lineNumber: 72,
    columnNumber: 33
  }, this) : null }, void 0, false, {
    fileName: "app/widgets/rec_navigator.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s(RecNavigator, "bRS7YemhOiQ/UMD2eufTNCWGMz4=", false, function() {
  return [useNavigate];
});
_c4 = RecNavigator;
var _c4;
$RefreshReg$(_c4, "RecNavigator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.enter_data.$formId.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.enter_data.$formId.tsx"
  );
  import.meta.hot.lastModified = "1708941786330.0444";
}
var {
  Spinner,
  Alert,
  Dialog,
  Card,
  CardBody,
  CardFooter
} = import_react3.default;
function InputForms() {
  _s2();
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
  const [document, setDocument] = (0, import_react5.useState)(doc);
  const location = useLocation();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const formRef = (0, import_react5.useRef)(null);
  const userId = 19;
  const [open, setOpen] = (0, import_react5.useState)(false);
  const data = useActionData();
  const [showFind, setShowFind] = (0, import_react5.useState)(false);
  const fetcher = useFetcher();
  const isDeleting = fetcher.state !== "idle";
  const submit = useSubmit();
  (0, import_react5.useEffect)(() => {
    setDocument(doc);
    console.log("useEffect");
  }, [doc]);
  const handleSave = () => {
    submit({
      _action: "saveDocument",
      _user: userId ? userId : "",
      _inputFormId: inputForm.id ? inputForm.id : "",
      _id: document.id ? document.id : "",
      json: JSON.stringify(document)
    }, {
      method: "post"
    });
  };
  const handleFind = () => {
    submit({
      _action: "findDocument",
      _user: userId ? userId : "",
      _inputFormId: inputForm.id ? inputForm.id : "",
      _id: document.id ? document.id : "",
      json: JSON.stringify(document)
    }, {
      method: "post"
    });
  };
  const handleOpenInputForm = () => {
    setShowFind(false);
    if (docs && docs.ids?.length) {
      navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`);
    } else {
      navigate(`/dashboard/enter_data/${docs.formId}?state=search`);
    }
  };
  const handleDelete = async (event) => {
    const response = confirm("Please confirm you want to delete this record.");
    if (!response) {
      event.preventDefault();
    }
  };
  (0, import_react5.useEffect)(() => {
    if (data?.errors) {
      setOpen(true);
    }
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dialog, { placeholder: "", size: "sm", open: showFind, handler: () => handleOpenInputForm(), className: "bg-transparent shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { className: "mx-auto w-full", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-bold p-1", children: [
        "Find: ",
        docs.ids?.length
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 216,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 215,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-green-500 hover:shadow-green-100", onClick: () => handleOpenInputForm(), children: "OK" }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 219,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 218,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 214,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 213,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: inputForm?.title }, void 0, false, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 225,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Alert, { className: "text-white bg-red-500", open, onClose: () => setOpen(false), children: data?.errors ? data.errors : "" }, void 0, false, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 226,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(RecNavigator, { docs, current, setCurrent }, void 0, false, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 229,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-3", children: [
      !["edit", "search"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 232,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 233,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForCreate", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 236,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 235,
            columnNumber: 29
          }, this),
          "Create"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 234,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 231,
        columnNumber: 64
      }, this) : null,
      !["edit", "search"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 242,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 243,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForSearch", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 246,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 245,
            columnNumber: 29
          }, this),
          "Search"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 244,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 241,
        columnNumber: 64
      }, this) : null,
      state === "search" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        CustomButton,
        {
          className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
          onClick: () => handleFind(),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 258,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 257,
              columnNumber: 25
            }, this),
            "Find"
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 251,
          columnNumber: 39
        },
        this
      ) : null,
      doc.id && state !== "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 263,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 264,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 265,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForEdit", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 268,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 267,
            columnNumber: 29
          }, this),
          "Edit"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 266,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 262,
        columnNumber: 47
      }, this) : null,
      state === "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        CustomButton,
        {
          className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
          onClick: () => handleSave(),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" }, void 0, false, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 280,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 279,
              columnNumber: 25
            }, this),
            "Save"
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 273,
          columnNumber: 37
        },
        this
      ) : null,
      state === "edit" || state === "search" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 285,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 286,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 287,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "cancelUpdate", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 290,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 289,
            columnNumber: 29
          }, this),
          "Cancel"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 288,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 284,
        columnNumber: 59
      }, this) : null,
      doc.id && state !== "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 297,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 298,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 299,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", disabled: isDeleting, onClick: handleDelete, type: "submit", name: "_action", value: "deleteDocument", children: isDeleting ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Spinner, { className: "w-4 h-4" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 302,
            columnNumber: 37
          }, this),
          "Deleting..."
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 301,
          columnNumber: 43
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 306,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 305,
            columnNumber: 37
          }, this),
          "Delete"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 304,
          columnNumber: 39
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 300,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 296,
        columnNumber: 47
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 230,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white border p-1 shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { id: "documentForm", method: "post", ref: formRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 315,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 316,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 317,
        columnNumber: 21
      }, this),
      inputForm?.groups && inputForm.groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "col-span-3 bg-orange-700 text-white font-bold text-sm p-1 pl-4", children: group.title }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 319,
          columnNumber: 29
        }, this),
        !group.isMulty ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SingleGroup, { state, dictionaries, group, doc: document, setDoc: setDocument }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 320,
          columnNumber: 47
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MultyGroup, { state, dictionaries, group, doc: document, setDoc: setDocument }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 320,
          columnNumber: 157
        }, this)
      ] }, group.id, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 318,
        columnNumber: 73
      }, this))
    ] }, location.key, true, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 314,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 313,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
    lineNumber: 212,
    columnNumber: 10
  }, this);
}
_s2(InputForms, "boAPRmDy6wosEk/wQ00CNkdLTEI=", false, function() {
  return [useOutletContext, useLoaderData, useLocation, useNavigation, useNavigate, useActionData, useFetcher, useSubmit];
});
_c5 = InputForms;
var _c5;
$RefreshReg$(_c5, "InputForms");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  InputForms as default
};
//# sourceMappingURL=/build/routes/dashboard.enter_data.$formId-ME2Q5EMW.js.map

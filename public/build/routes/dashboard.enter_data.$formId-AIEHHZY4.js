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

// app/routes/dashboard.enter_data.$formId.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.enter_data.$formId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.enter_data.$formId.tsx"
  );
  import.meta.hot.lastModified = "1708694562363.1995";
}
var {
  Spinner,
  Alert,
  Dialog,
  Card,
  CardBody,
  CardFooter
} = import_react.default;
function InputForms() {
  _s();
  const location = useLocation();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const formRef = (0, import_react3.useRef)(null);
  const {
    dictionaries,
    docs,
    setDocs
  } = useOutletContext();
  const userId = 19;
  const [open, setOpen] = (0, import_react3.useState)(false);
  const {
    inputForm,
    doc,
    state
  } = useLoaderData();
  const data = useActionData();
  const [showFind, setShowFind] = (0, import_react3.useState)(false);
  const fetcher = useFetcher();
  const isDeleting = fetcher.state !== "idle";
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
  (0, import_react3.useEffect)(() => {
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
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    state,
    " ",
    data?.ok,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { placeholder: "", size: "sm", open: showFind, handler: () => handleOpenInputForm(), className: "bg-transparent shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mx-auto w-full", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-bold p-1", children: [
        "Find: ",
        docs.ids?.length
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 175,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 174,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-green-500 hover:shadow-green-100", onClick: () => handleOpenInputForm(), children: "OK" }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 178,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 177,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 173,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 172,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: inputForm?.title }, void 0, false, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 184,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { className: "text-white bg-red-500", open, onClose: () => setOpen(false), children: data?.errors ? data.errors : "" }, void 0, false, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 185,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
      !["edit", "search"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 190,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 191,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForCreate", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 194,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 193,
            columnNumber: 29
          }, this),
          "Create"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 192,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 189,
        columnNumber: 64
      }, this) : null,
      !["edit", "search"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 200,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 201,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForSearch", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 204,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 203,
            columnNumber: 29
          }, this),
          "Search"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 202,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 199,
        columnNumber: 64
      }, this) : null,
      state === "search" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "documentForm", type: "submit", name: "_action", value: "findDocument", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 211,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 210,
          columnNumber: 25
        }, this),
        "Find"
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 209,
        columnNumber: 39
      }, this) : null,
      doc.id && state !== "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 216,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 217,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 218,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "openForEdit", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 221,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 220,
            columnNumber: 29
          }, this),
          "Edit"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 219,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 215,
        columnNumber: 47
      }, this) : null,
      state === "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "documentForm", type: "submit", name: "_action", value: "saveDocument", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 228,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 227,
          columnNumber: 25
        }, this),
        "Save"
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 226,
        columnNumber: 37
      }, this) : null,
      state === "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 233,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 234,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 235,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "cancelUpdate", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 238,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 237,
            columnNumber: 29
          }, this),
          "Cancel"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 236,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 232,
        columnNumber: 37
      }, this) : null,
      doc.id && state !== "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 245,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 246,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 247,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", disabled: isDeleting, onClick: handleDelete, type: "submit", name: "_action", value: "deleteDocument", children: isDeleting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, { className: "w-4 h-4" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 250,
            columnNumber: 37
          }, this),
          "Deleting..."
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 249,
          columnNumber: 43
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 254,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 253,
            columnNumber: 37
          }, this),
          "Delete"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 252,
          columnNumber: 39
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 248,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 244,
        columnNumber: 47
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 188,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border p-1 shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "documentForm", method: "post", ref: formRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 263,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 264,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 265,
        columnNumber: 21
      }, this),
      inputForm?.groups && inputForm.groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "col-span-3 bg-orange-700 text-white font-bold text-sm p-1 pl-4", children: group.title }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 267,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border p-1 grid grid-cols-3 gap-1", children: group?.fields && group.fields.map((fld) => {
          const tableName = `tbl_${fld.groupId}`;
          const fieldName = `f${fld.id}`;
          let defVal = doc.tables.find((tbl) => tbl.name === tableName)?.fields.find((fld2) => fld2.name === fieldName)?.value;
          defVal = defVal ? defVal : "";
          const cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`;
          switch (fld.fieldType) {
            case "TEXT":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "text", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 277,
                columnNumber: 26
              }, this);
            case "CYRILLIC":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "text", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 279,
                columnNumber: 26
              }, this);
            case "INTEGER":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "number", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 281,
                columnNumber: 26
              }, this);
            case "NUMERIC":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "number", step: "0.01", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 283,
                columnNumber: 26
              }, this);
            case "DICT":
              const dic = dictionaries.find((item) => item.id === fld.dicId);
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelect, { className: cls, id: fieldName, title: fld.title, name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "-" }, void 0, false, {
                  fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                  lineNumber: 287,
                  columnNumber: 53
                }, this),
                ["create", "edit", "search", "find"].includes(String(state)) ? dic?.data_edit.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.id, children: item.title }, item.id, false, {
                  fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                  lineNumber: 288,
                  columnNumber: 144
                }, this)) : dic?.data_browse.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.id, children: item.title }, item.id, false, {
                  fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                  lineNumber: 288,
                  columnNumber: 236
                }, this))
              ] }, fld.id, true, {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 286,
                columnNumber: 26
              }, this);
            case "DATE":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "date", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 291,
                columnNumber: 26
              }, this);
            case "TIME":
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fld.title, type: "time", name: fieldName, defaultValue: defVal, required: fld.isRequire && state === "edit", disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), size: fld.len ? fld.len : 30, maxLength: fld.len ? fld.len : 30 }, fld.id, false, {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 293,
                columnNumber: 26
              }, this);
          }
        }) }, void 0, false, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 268,
          columnNumber: 29
        }, this)
      ] }, group.id, true, {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 266,
        columnNumber: 73
      }, this))
    ] }, location.key, true, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 262,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 261,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
    lineNumber: 170,
    columnNumber: 10
  }, this);
}
_s(InputForms, "M30nK2laght3KVdcm+RNsPtZjGg=", false, function() {
  return [useLocation, useNavigation, useNavigate, useOutletContext, useLoaderData, useActionData, useFetcher];
});
_c = InputForms;
var _c;
$RefreshReg$(_c, "InputForms");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  InputForms as default
};
//# sourceMappingURL=/build/routes/dashboard.enter_data.$formId-AIEHHZY4.js.map

import {
  Link,
  Outlet,
  useLoaderData
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

// app/routes/dashboard.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1708692280288.233";
}
function dashboard() {
  const [docs, setDocs] = (0, import_react2.useState)({});
  const data = useLoaderData();
  const context = {
    ...data,
    docs,
    setDocs
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl text-amber-700 font-bold", children: "DbClient" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: docs.ids?.map((id) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-blue-500 underline hover:cursor-pointer p-1", to: `/dashboard/enter_data/${docs.formId}?docId=${id}`, children: id }, id, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 50,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-blue-500 text-bold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        "Enter Data",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "ml-4", children: data.inputForms.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/dashboard/enter_data/${item.id}`, children: [
          "Form: ",
          item.title
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 56,
          columnNumber: 47
        }, this) }, item.id, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 56,
          columnNumber: 29
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        "Search Data",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "ml-4", children: data.searchForms.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/dashboard/search_data/${item.id}`, children: [
          "Form: ",
          item.title
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 65,
          columnNumber: 47
        }, this) }, item.id, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 65,
          columnNumber: 29
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        "Service",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "db_struct", children: "Db Structure" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 73,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 73,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "users", children: "Users" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 74,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 74,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Help" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
}
export {
  dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-36FIJDQZ.js.map

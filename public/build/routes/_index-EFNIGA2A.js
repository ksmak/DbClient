import {
  require_react
} from "/build/_shared/chunk-DGLILCEK.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-TJ4YKIVD.js";
import {
  createHotContext
} from "/build/_shared/chunk-Q6LMBPEP.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import "/build/_shared/chunk-CJ4MY3PQ.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1708531360978.6316";
}
var {
  Button
} = import_react.default;
var meta = () => {
  return [{
    title: "New Remix App"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  _s();
  const {
    inputForms
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl text-amber-700 font-bold", children: "DbClient" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/users", children: "Users" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/db_struct", children: "Db Struct" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    inputForms.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/forms/${item.id}`, children: [
      "Form: ",
      item.title
    ] }, item.id, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 51,
      columnNumber: 31
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(Index, "9108qSvdGRo+DmwUY6Wem+xrK5U=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-EFNIGA2A.js.map

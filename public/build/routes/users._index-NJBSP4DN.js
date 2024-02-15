import {
  Input,
  require_moment,
  require_node
} from "/build/_shared/chunk-JD7QYX3J.js";
import {
  require_react
} from "/build/_shared/chunk-DGLILCEK.js";
import {
  Form,
  useLoaderData,
  useNavigate
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

// app/routes/users._index.tsx
var import_react3 = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_moment2 = __toESM(require_moment(), 1);

// app/ui/dialogs/user_dialog.tsx
var import_react = __toESM(require_react(), 1);

// app/ui/elements/select_field.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/elements/select_field.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/elements/select_field.tsx"
  );
  import.meta.hot.lastModified = "1707543896081.2876";
}
function SelectField({
  name,
  title,
  options,
  value,
  required
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-bold text-slate-700", htmlFor: name, children: title }, void 0, false, {
      fileName: "app/ui/elements/select_field.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: name, defaultValue: value, "aria-label": name, name, required, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "-" }, void 0, false, {
        fileName: "app/ui/elements/select_field.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      options.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.id, children: item.title }, item.id, false, {
        fileName: "app/ui/elements/select_field.tsx",
        lineNumber: 34,
        columnNumber: 38
      }, this))
    ] }, void 0, true, {
      fileName: "app/ui/elements/select_field.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/elements/select_field.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = SelectField;
var _c;
$RefreshReg$(_c, "SelectField");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/dialogs/user_dialog.tsx
var import_moment = __toESM(require_moment(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/dialogs/user_dialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/dialogs/user_dialog.tsx"
  );
  import.meta.hot.lastModified = "1707996246927.1182";
}
var {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter
} = import_react.default;
function UserDialog({
  handleOpen,
  open,
  user,
  roles,
  departments
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { placeholder: "", size: "sm", open, handler: handleOpen, className: "bg-transparent shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "mx-auto w-full", placeholder: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { id: "updateUserForm", className: "flex flex-col gap-3", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: user?.id ? user.id : "" }, void 0, false, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 44,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { type: "text", name: "login", title: "Login: ", value: user?.login, required: true }, void 0, false, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { type: "password", name: "password", title: "Password: ", value: user?.password, required: false }, void 0, false, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { type: "text", name: "firstName", title: "First Name: ", value: user?.firstName, required: false }, void 0, false, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { type: "text", name: "lastName", title: "Last Name: ", value: user?.lastName, required: false }, void 0, false, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { type: "text", name: "middleName", title: "Middle Name: ", value: user?.middleName, required: false }, void 0, false, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 49,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectField, { name: "departmentId", title: "Department: ", options: departments, value: user?.departmentId, required: false }, void 0, false, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 50,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { type: "date", name: "expiredPwd", title: "Expired Password: ", value: (0, import_moment.default)(user?.expiredPwd).format("YYYY-MM-DD"), required: true }, void 0, false, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this)
      ] }, user?.id, true, {
        fileName: "app/ui/dialogs/user_dialog.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { id: "deleteUserForm", method: "post", onSubmit: (event) => {
        const response = confirm("Please confirm you want to delete this record.");
        if (!response) {
          event.preventDefault();
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: user?.id ? user.id : "" }, void 0, false, {
        fileName: "app/ui/dialogs/user_dialog.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/ui/dialogs/user_dialog.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/dialogs/user_dialog.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "gradient", color: "green", form: "updateUserForm", placeholder: "", type: "submit", name: "_action", value: "updateUser", fullWidth: true, children: "Save" }, void 0, false, {
        fileName: "app/ui/dialogs/user_dialog.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "gradient", color: "red", form: "deleteUserForm", placeholder: "", type: "submit", name: "_action", value: "deleteUser", fullWidth: true, children: "Delete" }, void 0, false, {
        fileName: "app/ui/dialogs/user_dialog.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "gradient", onClick: handleOpen, fullWidth: true, placeholder: "", children: "Close" }, void 0, false, {
        fileName: "app/ui/dialogs/user_dialog.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/dialogs/user_dialog.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/dialogs/user_dialog.tsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/ui/dialogs/user_dialog.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c2 = UserDialog;
var _c2;
$RefreshReg$(_c2, "UserDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/users._index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/users._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/users._index.tsx"
  );
  import.meta.hot.lastModified = "1707996275855.401";
}
var {
  Button: Button2
} = import_react3.default;
function Users() {
  _s();
  const {
    user,
    users,
    roles,
    departments
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserDialog, { handleOpen: () => {
      navigate("/users");
    }, open: user ? true : false, user: user ? user : null, roles, departments }, void 0, false, {
      fileName: "app/routes/users._index.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: "Users" }, void 0, false, {
      fileName: "app/routes/users._index.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: users.length + 1 }, void 0, false, {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 103,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button2, { className: "flex items-center gap-3", color: "blue-gray", placeholder: "", size: "sm", type: "submit", name: "_action", value: "createEmptyUser", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 106,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 105,
          columnNumber: 25
        }, this),
        "Add User"
      ] }, void 0, true, {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 104,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/users._index.tsx",
      lineNumber: 102,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/users._index.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { className: "border-2 border-blue-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { className: "bg-blue-gray-400 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 115,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Login" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 116,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "First Name" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 117,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Last Name" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 118,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Middle Name" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 119,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Department" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 120,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Expired Password" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 121,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "created" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 122,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "updated" }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 123,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 114,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { children: users.map((user2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { className: "hover:cursor-pointer hover:bg-blue-gray-100", onClick: () => navigate(`/users?userId=${user2.id}`), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 128,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: user2.login }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 129,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: user2.firstName }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 130,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: user2.lastName }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 131,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: user2.middleName }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 132,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: departments.find((item) => item.id === user2.departmentId)?.title }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 133,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: (0, import_moment2.default)(user2.expiredPwd).format("DD.MM.YYYY") }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 134,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: (0, import_moment2.default)(user2.createdAt).format("DD.MM.YYYY H:m:s") }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 135,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: (0, import_moment2.default)(user2.updatedAt).format("DD.MM.YYYY H:m:s") }, void 0, false, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 136,
          columnNumber: 29
        }, this)
      ] }, user2.id, true, {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 127,
        columnNumber: 49
      }, this)) }, void 0, false, {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 126,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/users._index.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/users._index.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_s(Users, "fHU8vsfRwgXac4Yfb2CyZC8Vb2c=", false, function() {
  return [useLoaderData, useNavigate];
});
_c3 = Users;
var _c3;
$RefreshReg$(_c3, "Users");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Users as default
};
//# sourceMappingURL=/build/routes/users._index-NJBSP4DN.js.map

var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-J3QSEALY.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-blue-gray-50", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/db_struct._index.tsx
var db_struct_index_exports = {};
__export(db_struct_index_exports, {
  action: () => action,
  default: () => DbStruct,
  loader: () => loader
});
import MaterialTailwind5 from "@material-tailwind/react";
import { json, redirect } from "@remix-run/node";
import { Form as Form5, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

// app/api/api.ts
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient();
async function getDepartments() {
  return await prisma.department.findMany();
}
async function getRoles() {
  return await prisma.role.findMany();
}
async function getUsers(q = null) {
  return q ? await prisma.user.findMany({
    include: {
      roles: !0
    },
    where: {
      login: {
        startsWith: q
      }
    },
    orderBy: {
      login: "asc"
    }
  }) : await prisma.user.findMany({
    include: {
      roles: !0
    },
    orderBy: {
      login: "asc"
    }
  });
}
async function createEmptyUser(cnt) {
  let now = /* @__PURE__ */ new Date(), expiredDate = new Date(now.setDate(now.getDate() + 30)), hash = await bcrypt.hash("12345", 10), count = cnt, obj, unique_name;
  do
    unique_name = `User ${count}`, obj = await prisma.user.findFirst({
      where: {
        login: unique_name
      }
    }), count++;
  while (obj);
  return await prisma.user.create({
    data: {
      login: unique_name,
      password: hash,
      expiredPwd: expiredDate
    }
  });
}
async function updateUser(userId, user) {
  if (user.password) {
    let hash = await bcrypt.hash(user.password, 10);
    return await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        login: user.login,
        password: hash,
        firstName: user.firstName,
        lastName: user.lastName,
        middleName: user.middleName,
        departmentId: user.departmentId,
        expiredPwd: user.expiredPwd
      }
    });
  } else
    return await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        login: user.login,
        firstName: user.firstName,
        lastName: user.lastName,
        middleName: user.middleName,
        departmentId: user.departmentId,
        expiredPwd: user.expiredPwd
      }
    });
}
async function getUser(userId) {
  return await prisma.user.findFirst({
    where: {
      id: userId
    }
  });
}
async function deleteUser(userId) {
  return await prisma.user.delete({
    where: {
      id: userId
    }
  });
}
async function getInputForms(q = null) {
  return q ? await prisma.inputForm.findMany({
    where: {
      title: {
        startsWith: q
      }
    },
    include: {
      groups: !0
    },
    orderBy: {
      pos: "asc"
    }
  }) : await prisma.inputForm.findMany({
    include: {
      groups: !0
    },
    orderBy: {
      pos: "asc"
    }
  });
}
async function createEmptyInputForm(cnt) {
  return await prisma.inputForm.create({
    data: {
      pos: cnt,
      title: `Input Form ${cnt}`
    }
  });
}
async function updateInputForm(formId, form) {
  return await prisma.inputForm.update({
    where: {
      id: formId
    },
    data: {
      pos: form.pos,
      title: form.title
    }
  });
}
async function getInputForm(formId) {
  return await prisma.inputForm.findFirst({
    where: {
      id: formId
    }
  });
}
async function deleteInputForm(formId) {
  return await prisma.inputForm.delete({
    where: {
      id: formId
    }
  });
}
async function getGroups(formId, q = null) {
  return formId ? q ? await prisma.group.findMany({
    where: {
      inputFormId: formId,
      title: {
        startsWith: q
      }
    },
    include: {
      fields: !0
    },
    orderBy: {
      pos: "asc"
    }
  }) : await prisma.group.findMany({
    where: {
      inputFormId: formId
    },
    include: {
      fields: !0
    },
    orderBy: {
      pos: "asc"
    }
  }) : [];
}
async function createEmptyGroup(formId, cnt) {
  return await prisma.group.create({
    data: {
      pos: cnt,
      inputFormId: formId,
      title: `Group ${cnt}`,
      tableName: `GROUP_${cnt}`
    }
  });
}
async function getGroup(groupId) {
  return await prisma.group.findFirst({
    include: {
      fields: !0
    },
    where: {
      id: groupId
    }
  });
}
async function updateGroup(inputFormId, groupId, group) {
  return await prisma.group.update({
    where: {
      id: groupId
    },
    data: {
      inputFormId,
      pos: group.pos,
      title: group.title,
      tableName: group.tableName,
      isMulty: group.isMulty
    }
  });
}
async function deleteGroup(groupId) {
  return await prisma.group.delete({
    where: {
      id: groupId
    }
  });
}
async function createEmptyInputField(groupId, cnt) {
  return await prisma.inputField.create({
    data: {
      pos: cnt,
      groupId,
      title: `Input Field ${cnt}`,
      fieldName: `FIELD_${cnt}`,
      fieldType: "text"
    }
  });
}
async function updateInputField(inputFieldId, inputField) {
  return await prisma.inputField.update({
    where: {
      id: inputFieldId
    },
    data: {
      pos: inputField.pos,
      title: inputField.title,
      fieldName: inputField.fieldName,
      fieldType: inputField.fieldType,
      len: inputField.len,
      isKey: inputField.isKey,
      isVisible: inputField.isVisible,
      isEnable: inputField.isEnable,
      isRequire: inputField.isRequire,
      precision: inputField.precision,
      isDuplicate: inputField.isDuplicate
    }
  });
}
async function deleteInputField(inputFieldId) {
  return await prisma.inputField.delete({
    where: {
      id: inputFieldId
    }
  });
}
async function getSearchForms(q = null) {
  return q ? await prisma.searchForm.findMany({
    where: {
      title: {
        startsWith: q
      }
    },
    orderBy: {
      pos: "asc"
    }
  }) : await prisma.searchForm.findMany({
    orderBy: {
      pos: "asc"
    }
  });
}
async function createEmptySeacrhForm(cnt) {
  return await prisma.searchForm.create({
    data: {
      pos: cnt,
      title: `Search form ${cnt}`
    }
  });
}
async function updateSeacrhForm(formId, form) {
  return await prisma.searchForm.update({
    where: {
      id: formId
    },
    data: {
      pos: form.pos,
      title: form.title
    }
  });
}
async function getSeacrhForm(formId) {
  return prisma.searchForm.findFirst({
    where: {
      id: formId
    }
  });
}
async function deleteSeacrhForm(formId) {
  return prisma.searchForm.delete({
    where: {
      id: formId
    }
  });
}
async function getDictionaries(q = null) {
  return q ? prisma.dictionary.findMany({
    where: {
      title: {
        startsWith: q
      }
    }
  }) : prisma.dictionary.findMany();
}
async function createEmptyDictionary(cnt) {
  let count = cnt, obj, unique_name;
  do
    unique_name = `D_DICT_${count}`, obj = await prisma.dictionary.findFirst({
      where: {
        tableName: unique_name
      }
    }), count++;
  while (obj);
  return await prisma.dictionary.create({
    data: {
      title: `Dictionary ${count - 1}`,
      tableName: unique_name
    }
  });
}
async function updateDictionary(dictId, dict) {
  return prisma.dictionary.update({
    where: {
      id: dictId
    },
    data: {
      title: dict.title,
      tableName: dict.tableName
    }
  });
}
async function getDictionary(dictId) {
  return await prisma.dictionary.findFirst({
    where: {
      id: dictId
    }
  });
}
async function deleteDictionary(dictId) {
  return await prisma.dictionary.delete({
    where: {
      id: dictId
    }
  });
}

// app/ui/forms/dictionary.tsx
import MaterialTailwind from "@material-tailwind/react";
import { Form } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var { Button } = MaterialTailwind;
function DictionaryForm({ dictionary }) {
  return /* @__PURE__ */ jsxDEV3(Fragment, { children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV3(
        Button,
        {
          className: "flex items-center gap-1",
          color: "green",
          form: "updateDictionary",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "updateDictionary",
          children: [
            /* @__PURE__ */ jsxDEV3("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/dictionary.tsx",
              lineNumber: 24,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/dictionary.tsx",
              lineNumber: 23,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 13,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        Button,
        {
          className: "flex items-center gap-1",
          color: "red",
          form: "deleteDictionary",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "deleteDictionary",
          children: [
            /* @__PURE__ */ jsxDEV3("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/dictionary.tsx",
              lineNumber: 39,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/dictionary.tsx",
              lineNumber: 38,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 28,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/dictionary.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV3(
      Form,
      {
        id: "updateDictionary",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV3("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/dictionary.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3(
            "div",
            {
              className: "w-full",
              children: [
                /* @__PURE__ */ jsxDEV3("label", { className: "block text-sm font-bold text-slate-700", htmlFor: "title", children: "Title: " }, void 0, !1, {
                  fileName: "app/ui/forms/dictionary.tsx",
                  lineNumber: 54,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV3(
                  "input",
                  {
                    id: "title",
                    type: "text",
                    defaultValue: dictionary?.title,
                    "aria-label": "title",
                    name: "title",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/forms/dictionary.tsx",
                    lineNumber: 55,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/dictionary.tsx",
              lineNumber: 51,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            "div",
            {
              className: "w-full",
              children: [
                /* @__PURE__ */ jsxDEV3(
                  "label",
                  {
                    className: "block text-sm font-bold text-slate-700",
                    htmlFor: "tableName",
                    children: "Table:"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/forms/dictionary.tsx",
                    lineNumber: 67,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV3(
                  "input",
                  {
                    id: "tableName",
                    type: "text",
                    defaultValue: dictionary?.tableName,
                    "aria-label": "tableName",
                    name: "tableName",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/forms/dictionary.tsx",
                    lineNumber: 73,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/dictionary.tsx",
              lineNumber: 64,
              columnNumber: 17
            },
            this
          )
        ]
      },
      dictionary?.id,
      !0,
      {
        fileName: "app/ui/forms/dictionary.tsx",
        lineNumber: 44,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3(
      Form,
      {
        id: "deleteDictionary",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV3("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/dictionary.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/ui/forms/dictionary.tsx",
        lineNumber: 83,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/forms/dictionary.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/ui/forms/group_form.tsx
import MaterialTailwind2 from "@material-tailwind/react";
import { Form as Form2, useNavigate } from "@remix-run/react";

// app/ui/elements/input_field.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Input({ type, name, title, value, required }) {
  return /* @__PURE__ */ jsxDEV4(
    "div",
    {
      className: "flex flex-col gap-1",
      children: [
        /* @__PURE__ */ jsxDEV4(
          "label",
          {
            className: "text-sm font-bold text-slate-700",
            htmlFor: name,
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/input_field.tsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4(
          "input",
          {
            id: name,
            type,
            defaultValue: value,
            "aria-label": name,
            name,
            required
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/input_field.tsx",
            lineNumber: 20,
            columnNumber: 13
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/elements/input_field.tsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  );
}

// app/ui/elements/check_field.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function CheckField({ type, name, title, value, required }) {
  return /* @__PURE__ */ jsxDEV5(
    "div",
    {
      className: "flex flex-col gap-1",
      children: [
        /* @__PURE__ */ jsxDEV5(
          "label",
          {
            className: "text-sm font-bold text-slate-700",
            htmlFor: name,
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/check_field.tsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          "input",
          {
            id: name,
            type,
            defaultChecked: value,
            "aria-label": name,
            name,
            required
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/check_field.tsx",
            lineNumber: 20,
            columnNumber: 13
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/elements/check_field.tsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  );
}

// app/ui/forms/group_form.tsx
import moment from "moment";
import { Fragment as Fragment2, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var { Button: Button2 } = MaterialTailwind2;
function GroupForm({ group }) {
  let navigate = useNavigate();
  return /* @__PURE__ */ jsxDEV6(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV6(
        Button2,
        {
          className: "flex items-center gap-1",
          color: "blue-gray",
          form: "addInputFieldForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "createEmptyInputField",
          children: [
            /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 42,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 41,
              columnNumber: 21
            }, this),
            "Add Field"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 31,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(
        Button2,
        {
          className: "flex items-center gap-1",
          color: "green",
          form: "updateGroupForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "updateGroup",
          children: [
            /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 57,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 56,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 46,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(
        Button2,
        {
          className: "flex items-center gap-1",
          color: "red",
          form: "deleteGroupForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "deleteGroup",
          children: [
            /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 72,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 71,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 61,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6(
      Form2,
      {
        id: "addInputFieldForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "groupId", defaultValue: group.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "cnt", defaultValue: group.fields.length + 1 }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ]
      },
      1,
      !0,
      {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 77,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(
      Form2,
      {
        id: "updateGroupForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(
            Input,
            {
              type: "number",
              name: "pos",
              title: "Pos: ",
              value: group?.pos,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 94,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(
            Input,
            {
              type: "text",
              name: "title",
              title: "Title: ",
              value: group?.title,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 101,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(
            Input,
            {
              type: "text",
              name: "tableName",
              title: "Table name: ",
              value: group?.tableName,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 108,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(
            CheckField,
            {
              type: "checkbox",
              name: "isMulty",
              title: "Is Multy: ",
              value: group?.isMulty,
              required: !1
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 115,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV6("table", { className: "w-full", children: [
            /* @__PURE__ */ jsxDEV6(
              "thead",
              {
                className: "bg-blue-gray-400 text-white",
                children: /* @__PURE__ */ jsxDEV6("tr", { children: [
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 128,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "pos" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 129,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "title" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 130,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "name" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 131,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "type" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 132,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Len" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 133,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "1" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 134,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "2" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 135,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "3" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 136,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "4" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 137,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "5" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 138,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "6" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 139,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "createAt" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 140,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV6("th", { className: "p-1 text-sm border border-blue-gray-700", children: "updateAt" }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 141,
                    columnNumber: 33
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/ui/forms/group_form.tsx",
                  lineNumber: 127,
                  columnNumber: 29
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/ui/forms/group_form.tsx",
                lineNumber: 124,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6("tbody", { children: group?.fields && group.fields.map((field, index) => /* @__PURE__ */ jsxDEV6(
              "tr",
              {
                className: "hover:cursor-pointer hover:bg-blue-gray-100",
                onClick: () => navigate(`/fields?fieldId=${field.id}`),
                children: [
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 151,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.pos }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 152,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.title }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 153,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.fieldName }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 154,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.fieldType }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 155,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.len }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 156,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.isKey }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 157,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.isVisible }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 158,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.isEnable }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 159,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.isRequire }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 160,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.precision }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 161,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.isDuplicate }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 162,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment(field.createdAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 163,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV6("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment(field.updatedAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                    fileName: "app/ui/forms/group_form.tsx",
                    lineNumber: 164,
                    columnNumber: 37
                  }, this)
                ]
              },
              field.id,
              !0,
              {
                fileName: "app/ui/forms/group_form.tsx",
                lineNumber: 146,
                columnNumber: 33
              },
              this
            )) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 144,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 123,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this)
        ]
      },
      2,
      !0,
      {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 86,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(
      Form2,
      {
        id: "deleteGroupForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: [
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 184,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this)
        ]
      },
      3,
      !0,
      {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 171,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/forms/group_form.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

// app/ui/forms/input_form.tsx
import MaterialTailwind3 from "@material-tailwind/react";
import { Form as Form3 } from "@remix-run/react";
import { Fragment as Fragment3, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var { Button: Button3 } = MaterialTailwind3;
function InputFormForm({ inputForm, groups }) {
  return /* @__PURE__ */ jsxDEV7(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV7(
        Button3,
        {
          className: "flex items-center gap-1",
          color: "blue-gray",
          form: "addGroupForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "createEmptyGroup",
          children: [
            /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 25,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 24,
              columnNumber: 21
            }, this),
            "Add Group"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 14,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7(
        Button3,
        {
          className: "flex items-center gap-1",
          color: "green",
          form: "updateInputForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "updateInputForm",
          children: [
            /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 40,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 39,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 29,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7(
        Button3,
        {
          className: "flex items-center gap-1",
          color: "red",
          form: "deleteInputForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "deleteInputForm",
          children: [
            /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 55,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 54,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 44,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7(
      Form3,
      {
        id: "addGroupForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "inputFormId", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/input_form.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "cnt", defaultValue: groups.length + 1 }, void 0, !1, {
            fileName: "app/ui/forms/input_form.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this)
        ]
      },
      1,
      !0,
      {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 60,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      Form3,
      {
        id: "updateInputForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/input_form.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV7(
            "div",
            {
              className: "w-full",
              children: [
                /* @__PURE__ */ jsxDEV7(
                  "label",
                  {
                    className: "block text-sm font-bold text-slate-700",
                    htmlFor: "pos",
                    children: "Pos:"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/forms/input_form.tsx",
                    lineNumber: 78,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV7(
                  "input",
                  {
                    id: "pos",
                    type: "number",
                    defaultValue: inputForm?.pos,
                    "aria-label": "pos",
                    name: "pos",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/forms/input_form.tsx",
                    lineNumber: 84,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 75,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            "div",
            {
              className: "w-full",
              children: [
                /* @__PURE__ */ jsxDEV7("label", { className: "block text-sm font-bold text-slate-700", htmlFor: "title", children: "Title: " }, void 0, !1, {
                  fileName: "app/ui/forms/input_form.tsx",
                  lineNumber: 96,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV7(
                  "input",
                  {
                    id: "title",
                    type: "text",
                    defaultValue: inputForm?.title,
                    "aria-label": "title",
                    name: "title",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/forms/input_form.tsx",
                    lineNumber: 97,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 93,
              columnNumber: 17
            },
            this
          )
        ]
      },
      2,
      !0,
      {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 68,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      Form3,
      {
        id: "deleteInputForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 120,
          columnNumber: 17
        }, this)
      },
      3,
      !1,
      {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 107,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/forms/input_form.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

// app/ui/forms/search_form.tsx
import MaterialTailwind4 from "@material-tailwind/react";
import { Form as Form4 } from "@remix-run/react";
import { Fragment as Fragment4, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var { Button: Button4 } = MaterialTailwind4;
function SearchFormForm({ searchForm }) {
  return /* @__PURE__ */ jsxDEV8(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV8(
        Button4,
        {
          className: "flex items-center gap-1",
          color: "green",
          form: "updateSearchForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "updateSearchForm",
          children: [
            /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 23,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 22,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 12,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(
        Button4,
        {
          className: "flex items-center gap-1",
          color: "red",
          form: "deleteSearchForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "deleteSearchForm",
          children: [
            /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 38,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 37,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 27,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8(
      Form4,
      {
        id: "updateSearchForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8(
            "div",
            {
              className: "w-full",
              children: [
                /* @__PURE__ */ jsxDEV8(
                  "label",
                  {
                    className: "block text-sm font-bold text-slate-700",
                    htmlFor: "pos",
                    children: "Pos:"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/forms/search_form.tsx",
                    lineNumber: 53,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV8(
                  "input",
                  {
                    id: "pos",
                    type: "number",
                    defaultValue: searchForm?.pos,
                    "aria-label": "pos",
                    name: "pos",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/forms/search_form.tsx",
                    lineNumber: 59,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 50,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            "div",
            {
              className: "w-full",
              children: [
                /* @__PURE__ */ jsxDEV8("label", { className: "block text-sm font-bold text-slate-700", htmlFor: "title", children: "Title: " }, void 0, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 71,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV8(
                  "input",
                  {
                    id: "title",
                    type: "text",
                    defaultValue: searchForm?.title,
                    "aria-label": "title",
                    name: "title",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/forms/search_form.tsx",
                    lineNumber: 72,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 68,
              columnNumber: 17
            },
            this
          )
        ]
      },
      searchForm?.id,
      !0,
      {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 43,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV8(
      Form4,
      {
        id: "deleteSearchForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 82,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/forms/search_form.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/ui/panels/db_struct.tsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV9("ul", { children: [
    /* @__PURE__ */ jsxDEV9("li", { className: "flex items-center gap-1 font-bold", children: [
      /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 30,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      "Input Forms"
    ] }, void 0, !0, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9("ul", { children: inputForms.map((form) => /* @__PURE__ */ jsxDEV9("div", { children: [
      /* @__PURE__ */ jsxDEV9(
        Link,
        {
          to: `/db_struct?state=inputForm&inputFormId=${form.id}`,
          children: /* @__PURE__ */ jsxDEV9(
            "li",
            {
              className: [
                "pl-4 flex items-center gap-1 hover:cursor-pointer",
                state === "inputForm" && form.id === inputFormId ? "bg-blue-gray-200" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                  fileName: "app/ui/panels/db_struct.tsx",
                  lineNumber: 45,
                  columnNumber: 37
                }, this) }, void 0, !1, {
                  fileName: "app/ui/panels/db_struct.tsx",
                  lineNumber: 44,
                  columnNumber: 33
                }, this),
                form.pos,
                ". ",
                form.title
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/panels/db_struct.tsx",
              lineNumber: 40,
              columnNumber: 29
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 37,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9("ul", { children: form.groups.map((gr) => /* @__PURE__ */ jsxDEV9(
        Link,
        {
          to: `/db_struct?state=group&inputFormId=${gr.inputFormId}&groupId=${gr.id}`,
          children: /* @__PURE__ */ jsxDEV9(
            "li",
            {
              className: [
                "pl-8 flex items-center gap-1 hover:cursor-pointer",
                state === "group" && gr.id === groupId ? "bg-blue-gray-200" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                  fileName: "app/ui/panels/db_struct.tsx",
                  lineNumber: 61,
                  columnNumber: 45
                }, this) }, void 0, !1, {
                  fileName: "app/ui/panels/db_struct.tsx",
                  lineNumber: 60,
                  columnNumber: 41
                }, this),
                gr.pos,
                ". ",
                gr.title
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/panels/db_struct.tsx",
              lineNumber: 56,
              columnNumber: 37
            },
            this
          )
        },
        gr.id,
        !1,
        {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 52,
          columnNumber: 33
        },
        this
      )) }, void 0, !1, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 50,
        columnNumber: 25
      }, this)
    ] }, form.id, !0, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 36,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9("li", { className: "flex items-center gap-1 font-bold", children: [
      /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      "Search Forms"
    ] }, void 0, !0, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9("ul", { children: searchForms.map((form) => /* @__PURE__ */ jsxDEV9(
      Link,
      {
        to: `/db_struct?state=searchForm&searchFormId=${form.id}`,
        children: /* @__PURE__ */ jsxDEV9(
          "li",
          {
            className: [
              "pl-4 flex items-center gap-1 hover:cursor-pointer",
              state === "searchForm" && form.id === searchFormId ? "bg-blue-gray-200" : ""
            ].join(" "),
            children: [
              /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                fileName: "app/ui/panels/db_struct.tsx",
                lineNumber: 88,
                columnNumber: 33
              }, this) }, void 0, !1, {
                fileName: "app/ui/panels/db_struct.tsx",
                lineNumber: 87,
                columnNumber: 29
              }, this),
              form.pos,
              ". ",
              form.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 83,
            columnNumber: 25
          },
          this
        )
      },
      form.id,
      !1,
      {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 79,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9("li", { className: "flex items-center gap-1 font-bold", children: [
      /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 97,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this),
      "Dictionaries"
    ] }, void 0, !0, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9("ul", { children: dictionaries.map((dict) => /* @__PURE__ */ jsxDEV9(
      Link,
      {
        to: `/db_struct?state=dictionary&dictionaryId=${dict.id}`,
        children: /* @__PURE__ */ jsxDEV9(
          "li",
          {
            className: [
              "pl-4 flex items-center gap-1 hover:cursor-pointer",
              state === "dictionary" && dict.id === dictionaryId ? "bg-blue-gray-200" : ""
            ].join(" "),
            children: [
              /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                fileName: "app/ui/panels/db_struct.tsx",
                lineNumber: 112,
                columnNumber: 33
              }, this) }, void 0, !1, {
                fileName: "app/ui/panels/db_struct.tsx",
                lineNumber: 111,
                columnNumber: 29
              }, this),
              dict.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 107,
            columnNumber: 25
          },
          this
        )
      },
      dict.id,
      !1,
      {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 103,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/ui/panels/db_struct.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

// app/routes/db_struct._index.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var { Button: Button5 } = MaterialTailwind5;
async function loader({
  request
}) {
  let url = new URL(request.url), state = url.searchParams.get("state"), inputFormId = url.searchParams.get("inputFormId"), searchFormId = url.searchParams.get("searchFormId"), dictionaryId = url.searchParams.get("dictionaryId"), groupId = url.searchParams.get("groupId"), q = url.searchParams.get("q"), inputForms = await getInputForms(q), searchForms = await getSearchForms(q), dictionaries = await getDictionaries(q), groups = await getGroups(Number(inputFormId), q), inputForm, searchForm, dictionary, group;
  switch (state) {
    case "inputForm": {
      invariant(inputFormId, "Missing inputFormId param"), inputForm = await getInputForm(Number(inputFormId));
      break;
    }
    case "searchForm": {
      invariant(searchFormId, "Missing searchFormId param"), searchForm = await getSeacrhForm(Number(searchFormId));
      break;
    }
    case "dictionary": {
      invariant(dictionaryId, "Missing dictionaryId param"), dictionary = await getDictionary(Number(dictionaryId));
      break;
    }
    case "group": {
      invariant(groupId, "Missing groupId param"), group = await getGroup(Number(groupId));
      break;
    }
  }
  return json({
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    dictionaries,
    inputForms,
    searchForms,
    groups
  });
}
async function action({
  request
}) {
  let formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  if (_action === "updateInputForm")
    return await updateInputForm(Number(values.id), {
      id: Number(values.id),
      pos: Number(values.pos),
      title: String(values.title)
    }), redirect(`/db_struct?state=inputForm&inputFormId=${values.id}`);
  if (_action === "createEmptyInputForm") {
    let form = await createEmptyInputForm(Number(values.cnt));
    return redirect(`/db_struct?state=inputForm&inputFormId=${form.id}`);
  }
  if (_action === "deleteInputForm")
    return await deleteInputForm(Number(values.id)), redirect("/db_struct");
  if (_action === "updateSearchForm")
    return await updateSeacrhForm(Number(values.id), {
      id: Number(values.id),
      pos: Number(values.pos),
      title: String(values.title)
    }), redirect(`/db_struct?state=searchForm&searchFormId=${values.id}`);
  if (_action === "createEmptySearchForm") {
    let form = await createEmptySeacrhForm(Number(values.cnt));
    return redirect(`/db_struct?state=searchForm&searchFormId=${form.id}`);
  }
  if (_action === "deleteSearchForm")
    return await deleteSeacrhForm(Number(values.id)), redirect("/db_struct");
  if (_action === "updateDictionary")
    return await updateDictionary(Number(values.id), {
      id: Number(values.id),
      title: String(values.title),
      tableName: String(values.tableName)
    }), redirect(`/db_struct?state=dictionary&dictionaryId=${values.id}`);
  if (_action === "createEmptyDictionary") {
    let dict = await createEmptyDictionary(Number(values.cnt));
    return redirect(`/db_struct?state=dictionary&dictionaryId=${dict.id}`);
  }
  if (_action === "deleteDictionary")
    return await deleteDictionary(Number(values.id)), redirect("/db_struct");
  if (_action === "createEmptyGroup") {
    let group = await createEmptyGroup(Number(values.inputFormId), Number(values.cnt));
    return redirect(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}`);
  }
  if (_action === "updateGroup") {
    let group = await updateGroup(Number(values.inputFormId), Number(values.id), {
      id: Number(values.id),
      pos: Number(values.pos),
      title: String(values.title),
      tableName: String(values.tableName),
      isMulty: Boolean(values.isMulty)
    });
    return redirect(`/db_struct?state=group&inputFormId=${group.inputFormId}&groupId=${group.id}`);
  }
  if (_action === "deleteGroup")
    return await deleteGroup(Number(values.id)), redirect("/db_struct");
  if (_action === "updateInputField")
    return await updateInputField(Number(values.id), {
      id: Number(values.id),
      groupId: Number(values.groupId),
      pos: Number(values.pos),
      title: String(values.title),
      fieldName: String(values.fieldName),
      fieldType: String(values.fieldType)
    }), redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.id}`);
  if (_action === "createEmptyInputField") {
    let field = await createEmptyInputField(Number(values.groupId), Number(values.cnt));
    return redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${field.id}`);
  }
  return _action === "deleteInputField" ? (await deleteInputField(Number(values.id)), redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.id}`)) : null;
}
function DbStruct() {
  let {
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    dictionaries,
    inputForms,
    searchForms,
    groups
  } = useLoaderData();
  return /* @__PURE__ */ jsxDEV10("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ jsxDEV10("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: "Db Struct" }, void 0, !1, {
      fileName: "app/routes/db_struct._index.tsx",
      lineNumber: 199,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV10(
      "div",
      {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsxDEV10(Form5, { method: "post", children: [
            /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "cnt", defaultValue: inputForms.length + 1 }, void 0, !1, {
              fileName: "app/routes/db_struct._index.tsx",
              lineNumber: 204,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV10(
              Button5,
              {
                className: "flex items-center gap-3",
                color: "blue-gray",
                placeholder: "",
                size: "sm",
                type: "submit",
                name: "_action",
                value: "createEmptyInputForm",
                children: [
                  /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 215,
                    columnNumber: 29
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 214,
                    columnNumber: 25
                  }, this),
                  "Add InputForm"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/db_struct._index.tsx",
                lineNumber: 205,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 203,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV10(Form5, { method: "post", children: [
            /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "cnt", defaultValue: searchForms.length + 1 }, void 0, !1, {
              fileName: "app/routes/db_struct._index.tsx",
              lineNumber: 221,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV10(
              Button5,
              {
                className: "flex items-center gap-3",
                color: "blue-gray",
                placeholder: "",
                size: "sm",
                type: "submit",
                name: "_action",
                value: "createEmptySearchForm",
                children: [
                  /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 232,
                    columnNumber: 29
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 231,
                    columnNumber: 25
                  }, this),
                  "Add SearchForm"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/db_struct._index.tsx",
                lineNumber: 222,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV10(Form5, { method: "post", children: [
            /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "cnt", defaultValue: dictionaries.length + 1 }, void 0, !1, {
              fileName: "app/routes/db_struct._index.tsx",
              lineNumber: 238,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV10(
              Button5,
              {
                className: "flex items-center gap-3",
                color: "blue-gray",
                placeholder: "",
                size: "sm",
                type: "submit",
                name: "_action",
                value: "createEmptyDictionary",
                children: [
                  /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 249,
                    columnNumber: 29
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 248,
                    columnNumber: 25
                  }, this),
                  "Add Dictionary"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/db_struct._index.tsx",
                lineNumber: 239,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 237,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 200,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10("div", { className: "flex flex-row h-full w-full", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "bg-white p-4 mr-5 w-1/3 border shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ jsxDEV10(
        DbStrucPanel,
        {
          state,
          inputForms,
          searchForms,
          dictionaries,
          groups,
          inputFormId: inputForm?.id,
          searchFormId: searchForm?.id,
          dictionaryId: dictionary?.id,
          groupId: group?.id
        },
        void 0,
        !1,
        {
          fileName: "app/routes/db_struct._index.tsx",
          lineNumber: 257,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 256,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "bg-white w-full border p-4 shadow-blue-gray-700 shadow-md overflow-auto", children: state === "inputForm" && inputForm ? /* @__PURE__ */ jsxDEV10(InputFormForm, { inputForm, groups }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 271,
        columnNumber: 27
      }, this) : state === "searchForm" && searchForm ? /* @__PURE__ */ jsxDEV10(SearchFormForm, { searchForm }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 273,
        columnNumber: 31
      }, this) : state === "dictionary" && dictionary ? /* @__PURE__ */ jsxDEV10(DictionaryForm, { dictionary }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 275,
        columnNumber: 35
      }, this) : state === "group" && group ? /* @__PURE__ */ jsxDEV10(GroupForm, { group }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 277,
        columnNumber: 39
      }, this) : null }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 269,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/db_struct._index.tsx",
      lineNumber: 255,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/db_struct._index.tsx",
    lineNumber: 198,
    columnNumber: 9
  }, this);
}

// app/routes/users._index.tsx
var users_index_exports = {};
__export(users_index_exports, {
  action: () => action2,
  default: () => Users,
  loader: () => loader2
});
import MaterialTailwind7 from "@material-tailwind/react";
import { json as json2, redirect as redirect2 } from "@remix-run/node";
import { Form as Form7, useLoaderData as useLoaderData2, useNavigate as useNavigate2 } from "@remix-run/react";
import moment3 from "moment";

// app/ui/dialogs/user_dialog.tsx
import MaterialTailwind6 from "@material-tailwind/react";
import { Form as Form6 } from "@remix-run/react";

// app/ui/elements/select_field.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function SelectField({ name, title, options, value, required }) {
  return /* @__PURE__ */ jsxDEV11(
    "div",
    {
      className: "flex flex-col gap-1",
      children: [
        /* @__PURE__ */ jsxDEV11(
          "label",
          {
            className: "block text-sm font-bold text-slate-700",
            htmlFor: name,
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/select_field.tsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          "select",
          {
            id: name,
            defaultValue: value,
            "aria-label": name,
            name,
            required,
            children: [
              /* @__PURE__ */ jsxDEV11("option", { children: "-" }, void 0, !1, {
                fileName: "app/ui/elements/select_field.tsx",
                lineNumber: 27,
                columnNumber: 17
              }, this),
              options.map((item) => /* @__PURE__ */ jsxDEV11("option", { value: item.id, children: item.title }, item.id, !1, {
                fileName: "app/ui/elements/select_field.tsx",
                lineNumber: 29,
                columnNumber: 21
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/ui/elements/select_field.tsx",
            lineNumber: 20,
            columnNumber: 13
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/elements/select_field.tsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  );
}

// app/ui/dialogs/user_dialog.tsx
import moment2 from "moment";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var { Button: Button6, Dialog, Card, CardBody, CardFooter } = MaterialTailwind6;
function UserDialog({ handleOpen, open, user, roles, departments }) {
  return /* @__PURE__ */ jsxDEV12(
    Dialog,
    {
      placeholder: "",
      size: "sm",
      open,
      handler: handleOpen,
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV12(Card, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV12(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV12(
            Form6,
            {
              id: "updateUserForm",
              className: "flex flex-col gap-3",
              method: "post",
              children: [
                /* @__PURE__ */ jsxDEV12("input", { type: "hidden", name: "id", defaultValue: user?.id ? user.id : "" }, void 0, !1, {
                  fileName: "app/ui/dialogs/user_dialog.tsx",
                  lineNumber: 34,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV12(
                  Input,
                  {
                    type: "text",
                    name: "login",
                    title: "Login: ",
                    value: user?.login,
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 35,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV12(
                  Input,
                  {
                    type: "password",
                    name: "password",
                    title: "Password: ",
                    value: user?.password,
                    required: !1
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 42,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV12(
                  Input,
                  {
                    type: "text",
                    name: "firstName",
                    title: "First Name: ",
                    value: user?.firstName,
                    required: !1
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 49,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV12(
                  Input,
                  {
                    type: "text",
                    name: "lastName",
                    title: "Last Name: ",
                    value: user?.lastName,
                    required: !1
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 56,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV12(
                  Input,
                  {
                    type: "text",
                    name: "middleName",
                    title: "Middle Name: ",
                    value: user?.middleName,
                    required: !1
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 63,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV12(
                  SelectField,
                  {
                    name: "departmentId",
                    title: "Department: ",
                    options: departments,
                    value: user?.departmentId,
                    required: !1
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 70,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV12(
                  Input,
                  {
                    type: "date",
                    name: "expiredPwd",
                    title: "Expired Password: ",
                    value: moment2(user?.expiredPwd).format("YYYY-MM-DD"),
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 77,
                    columnNumber: 25
                  },
                  this
                )
              ]
            },
            user?.id,
            !0,
            {
              fileName: "app/ui/dialogs/user_dialog.tsx",
              lineNumber: 28,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            Form6,
            {
              id: "deleteUserForm",
              method: "post",
              onSubmit: (event) => {
                confirm(
                  "Please confirm you want to delete this record."
                ) || event.preventDefault();
              },
              children: /* @__PURE__ */ jsxDEV12("input", { type: "hidden", name: "id", defaultValue: user?.id ? user.id : "" }, void 0, !1, {
                fileName: "app/ui/dialogs/user_dialog.tsx",
                lineNumber: 97,
                columnNumber: 25
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/ui/dialogs/user_dialog.tsx",
              lineNumber: 85,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV12(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV12(
            Button6,
            {
              variant: "gradient",
              color: "green",
              form: "updateUserForm",
              placeholder: "",
              type: "submit",
              name: "_action",
              value: "updateUser",
              fullWidth: !0,
              children: "Save"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/dialogs/user_dialog.tsx",
              lineNumber: 101,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            Button6,
            {
              variant: "gradient",
              color: "red",
              form: "deleteUserForm",
              placeholder: "",
              type: "submit",
              name: "_action",
              value: "deleteUser",
              fullWidth: !0,
              children: "Delete"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/dialogs/user_dialog.tsx",
              lineNumber: 113,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(Button6, { variant: "gradient", onClick: handleOpen, fullWidth: !0, placeholder: "", children: "Close" }, void 0, !1, {
            fileName: "app/ui/dialogs/user_dialog.tsx",
            lineNumber: 125,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 100,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/ui/dialogs/user_dialog.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/ui/dialogs/user_dialog.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  );
}

// app/routes/users._index.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var { Button: Button7 } = MaterialTailwind7;
async function loader2({
  request
}) {
  let roles = await getRoles(), departments = await getDepartments(), users = await getUsers(), userId = new URL(request.url).searchParams.get("userId"), user;
  return userId && (user = await getUser(Number(userId)), user = { ...user, password: void 0 }), json2({ user, users, roles, departments });
}
async function action2({
  request
}) {
  let formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  if (_action === "createEmptyUser") {
    let user = await createEmptyUser(Number(values.cnt));
    return redirect2(`/users?userId=${user.id}`);
  }
  return _action === "updateUser" ? (await updateUser(Number(values.id), {
    id: Number(values.id),
    login: String(values.login),
    password: String(values.password),
    firstName: String(values.firstName),
    lastName: String(values.lastName),
    middleName: String(values.middleName),
    departmentId: Number(values.departmentId),
    expiredPwd: new Date(String(values.expiredPwd)),
    createdAt: null,
    updatedAt: null
  }), redirect2("/users")) : _action === "deleteUser" ? (await deleteUser(Number(values.id)), redirect2("/users")) : null;
}
function Users() {
  let { user, users, roles, departments } = useLoaderData2(), navigate = useNavigate2();
  return /* @__PURE__ */ jsxDEV13("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ jsxDEV13(
      UserDialog,
      {
        handleOpen: () => {
          navigate("/users");
        },
        open: !!user,
        user: user || null,
        roles,
        departments
      },
      void 0,
      !1,
      {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV13("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: "Users" }, void 0, !1, {
      fileName: "app/routes/users._index.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV13(
      "div",
      {
        className: "flex items-center gap-3",
        children: /* @__PURE__ */ jsxDEV13(Form7, { method: "post", children: [
          /* @__PURE__ */ jsxDEV13("input", { type: "hidden", name: "cnt", defaultValue: users.length + 1 }, void 0, !1, {
            fileName: "app/routes/users._index.tsx",
            lineNumber: 75,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV13(
            Button7,
            {
              className: "flex items-center gap-3",
              color: "blue-gray",
              placeholder: "",
              size: "sm",
              type: "submit",
              name: "_action",
              value: "createEmptyUser",
              children: [
                /* @__PURE__ */ jsxDEV13("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV13("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 86,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 85,
                  columnNumber: 25
                }, this),
                "Add User"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/users._index.tsx",
              lineNumber: 76,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/users._index.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 71,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV13(
      "table",
      {
        className: "border-2 border-blue-gray-700",
        children: [
          /* @__PURE__ */ jsxDEV13(
            "thead",
            {
              className: "bg-blue-gray-400 text-white",
              children: /* @__PURE__ */ jsxDEV13("tr", { children: [
                /* @__PURE__ */ jsxDEV13("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 99,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV13("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Login" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 100,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV13("th", { className: "p-1 text-sm border border-blue-gray-700", children: "First Name" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 101,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV13("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Last Name" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 102,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV13("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Middle Name" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 103,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV13("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Department" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 104,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV13("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Expired Password" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 105,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV13("th", { className: "p-1 text-sm border border-blue-gray-700", children: "created" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 106,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV13("th", { className: "p-1 text-sm border border-blue-gray-700", children: "updated" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 107,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/users._index.tsx",
                lineNumber: 98,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/users._index.tsx",
              lineNumber: 95,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13("tbody", { children: users.map((user2, index) => /* @__PURE__ */ jsxDEV13(
            "tr",
            {
              className: "hover:cursor-pointer hover:bg-blue-gray-100",
              onClick: () => navigate(`/users?userId=${user2.id}`),
              children: [
                /* @__PURE__ */ jsxDEV13("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 117,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV13("td", { className: "p-1 text-sm border border-blue-gray-700", children: user2.login }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 118,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV13("td", { className: "p-1 text-sm border border-blue-gray-700", children: user2.firstName }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 119,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV13("td", { className: "p-1 text-sm border border-blue-gray-700", children: user2.lastName }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 120,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV13("td", { className: "p-1 text-sm border border-blue-gray-700", children: user2.middleName }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 121,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV13("td", { className: "p-1 text-sm border border-blue-gray-700", children: departments.find((item) => item.id === user2.departmentId)?.title }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 122,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV13("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment3(user2.expiredPwd).format("DD.MM.YYYY") }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 123,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV13("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment3(user2.createdAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 124,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV13("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment3(user2.updatedAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 125,
                  columnNumber: 29
                }, this)
              ]
            },
            user2.id,
            !0,
            {
              fileName: "app/routes/users._index.tsx",
              lineNumber: 112,
              columnNumber: 25
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/users._index.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 92,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/users._index.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import MaterialTailwind8 from "@material-tailwind/react";
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var { Button: Button8 } = MaterialTailwind8, meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV14("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxDEV14("h1", { className: "text-3xl text-amber-700 font-bold", children: "DbClient" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14(Link2, { to: "/users", children: "Users" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14(Link2, { to: "/db_struct", children: "Db Struct" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-IOGH23W3.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-DGLILCEK.js", "/build/_shared/chunk-HZQAXSMT.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-Q6LMBPEP.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PYWV6XKW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-G57PV55O.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/db_struct._index": { id: "routes/db_struct._index", parentId: "root", path: "db_struct", index: !0, caseSensitive: void 0, module: "/build/routes/db_struct._index-EB2LKGI2.js", imports: ["/build/_shared/chunk-JD7QYX3J.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/users._index": { id: "routes/users._index", parentId: "root", path: "users", index: !0, caseSensitive: void 0, module: "/build/routes/users._index-NJBSP4DN.js", imports: ["/build/_shared/chunk-JD7QYX3J.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "e2a1ce72", hmr: { runtime: "/build/_shared/chunk-Q6LMBPEP.js", timestamp: 1708000783815 }, url: "/build/manifest-E2A1CE72.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/db_struct._index": {
    id: "routes/db_struct._index",
    parentId: "root",
    path: "db_struct",
    index: !0,
    caseSensitive: void 0,
    module: db_struct_index_exports
  },
  "routes/users._index": {
    id: "routes/users._index",
    parentId: "root",
    path: "users",
    index: !0,
    caseSensitive: void 0,
    module: users_index_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map

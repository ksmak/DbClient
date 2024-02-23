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
var tailwind_default = "/build/_assets/tailwind-FKRZYQ7V.css";

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

// app/routes/dashboard.enter_data.$formId.tsx
var dashboard_enter_data_formId_exports = {};
__export(dashboard_enter_data_formId_exports, {
  action: () => action,
  default: () => InputForms,
  loader: () => loader
});
import MaterialTailwind from "@material-tailwind/react";
import { Prisma } from "@prisma/client";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useOutletContext } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

// app/api/instance.ts
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient(), instance_default = prisma;

// app/api/users.ts
import bcrypt from "bcryptjs";
function UsersModule(prisma2) {
  return {
    getDepartments() {
      return prisma2.department.findMany();
    },
    getRoles() {
      return prisma2.role.findMany();
    },
    getUsers(q = null) {
      return q ? prisma2.user.findMany({
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
      }) : prisma2.user.findMany({
        include: {
          roles: !0
        },
        orderBy: {
          login: "asc"
        }
      });
    },
    createUser(user) {
      return prisma2.user.create({
        data: {
          ...user,
          id: void 0,
          password: bcrypt.hashSync(user.password),
          createdAt: void 0,
          updatedAt: void 0
        }
      });
    },
    updateUser(userId, user) {
      return user.password ? prisma2.user.update({
        where: {
          id: userId
        },
        data: {
          ...user,
          id: void 0,
          password: void 0,
          createdAt: void 0,
          updatedAt: void 0
        }
      }) : prisma2.user.update({
        where: {
          id: userId
        },
        data: {
          ...user,
          id: void 0,
          password: bcrypt.hashSync(user.password),
          createdAt: void 0,
          updatedAt: void 0
        }
      });
    },
    getUser(userId) {
      return prisma2.user.findFirst({
        where: {
          id: userId
        }
      });
    },
    deleteUser(userId) {
      return prisma2.user.delete({
        where: {
          id: userId
        }
      });
    }
  };
}

// app/api/db.ts
function DbModule(prisma2) {
  return {
    async getDictionaries() {
      let dicts = [], dictionaries = await prisma2.dictionary.findMany({
        orderBy: {
          title: "asc"
        }
      });
      for (let dict of dictionaries)
        try {
          let [dic1, dic2] = await prisma2.$transaction([
            prisma2.$queryRawUnsafe(`SELECT * FROM dic_${dict.id}`),
            prisma2.$queryRawUnsafe(`SELECT * FROM dic_${dict.id} WHERE is_enabled = true`)
          ]);
          dicts.push({
            id: dict.id,
            title: dict.title,
            data_browse: dic1,
            data_edit: dic2
          });
        } catch {
          dicts.push({
            id: dict.id,
            title: dict.title,
            data_browse: [],
            data_edit: []
          });
        }
      return dicts;
    },
    createEmptyDictionary(cnt) {
      return prisma2.dictionary.create({
        data: {
          title: `Dictionary ${cnt}`
        }
      });
    },
    updateDictionary(formId, form) {
      return prisma2.dictionary.update({
        where: {
          id: formId
        },
        data: {
          ...form,
          id: void 0
        }
      });
    },
    getDictionary(formId) {
      return prisma2.dictionary.findFirst({
        where: {
          id: formId
        }
      });
    },
    deleteDictionary(formId) {
      return prisma2.dictionary.delete({
        where: {
          id: formId
        }
      });
    },
    getInputForms() {
      return prisma2.inputForm.findMany({
        include: {
          groups: !0
        },
        orderBy: {
          pos: "asc"
        }
      });
    },
    createEmptyInputForm(cnt) {
      return prisma2.inputForm.create({
        data: {
          pos: cnt,
          title: `Input Form ${cnt}`
        }
      });
    },
    updateInputForm(formId, form) {
      return prisma2.inputForm.update({
        where: {
          id: formId
        },
        data: {
          ...form,
          id: void 0
        }
      });
    },
    getInputForm(formId) {
      return prisma2.inputForm.findFirst({
        where: {
          id: formId
        },
        include: {
          groups: {
            orderBy: {
              pos: "asc"
            },
            include: {
              fields: {
                orderBy: {
                  pos: "asc"
                }
              }
            }
          }
        }
      });
    },
    deleteInputForm(formId) {
      return prisma2.inputForm.delete({
        where: {
          id: formId
        }
      });
    },
    getSearchForms() {
      return prisma2.searchForm.findMany({
        include: {
          fields: !0
        },
        orderBy: {
          pos: "asc"
        }
      });
    },
    createEmptySearchForm(cnt) {
      return prisma2.searchForm.create({
        data: {
          pos: cnt,
          title: `Search Form ${cnt}`
        }
      });
    },
    updateSearchForm(formId, form) {
      return prisma2.searchForm.update({
        where: {
          id: formId
        },
        data: {
          ...form,
          id: void 0
        }
      });
    },
    getSearchForm(formId) {
      return prisma2.searchForm.findFirst({
        include: {
          fields: {
            orderBy: {
              pos: "asc"
            }
          }
        },
        where: {
          id: formId
        },
        orderBy: {
          pos: "asc"
        }
      });
    },
    deleteSearchForm(formId) {
      return prisma2.searchForm.delete({
        where: {
          id: formId
        }
      });
    },
    getGroups(formId) {
      return formId ? prisma2.group.findMany({
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
    },
    createEmptyGroup(formId, cnt) {
      return prisma2.group.create({
        data: {
          pos: cnt,
          inputFormId: formId,
          title: `Group ${cnt}`
        }
      });
    },
    getGroup(groupId) {
      return prisma2.group.findFirst({
        include: {
          fields: {
            orderBy: {
              pos: "asc"
            }
          }
        },
        where: {
          id: groupId
        },
        orderBy: {
          pos: "asc"
        }
      });
    },
    updateGroup(groupId, group) {
      return prisma2.group.update({
        where: {
          id: groupId
        },
        data: {
          ...group,
          id: void 0
        }
      });
    },
    deleteGroup(groupId) {
      return prisma2.group.delete({
        where: {
          id: groupId
        }
      });
    },
    createEmptySearchField(formId, cnt) {
      return prisma2.searchField.create({
        data: {
          pos: cnt,
          searchFormId: formId,
          title: `Search Field ${cnt}`
        }
      });
    },
    getSearchField(fieldId) {
      return prisma2.searchField.findFirst({
        where: {
          id: fieldId
        }
      });
    },
    updateSearchField(fieldId, searchField) {
      return prisma2.searchField.update({
        where: {
          id: fieldId
        },
        data: {
          ...searchField,
          id: void 0
        }
      });
    },
    deleteSearchField(fieldId) {
      return prisma2.searchField.delete({
        where: {
          id: fieldId
        }
      });
    },
    createEmptyInputField(groupId, cnt) {
      return prisma2.inputField.create({
        data: {
          pos: cnt,
          groupId,
          title: `Input Field ${cnt}`
        }
      });
    },
    getInputFields() {
      return prisma2.inputField.findMany({
        include: {
          group: !0
        }
      });
    },
    getInputField(fieldId) {
      return prisma2.inputField.findFirst({
        where: {
          id: fieldId
        }
      });
    },
    updateInputField(fieldId, field) {
      return prisma2.inputField.update({
        where: {
          id: fieldId
        },
        data: {
          ...field,
          id: void 0
        }
      });
    },
    deleteInputField(fieldId) {
      return prisma2.inputField.delete({
        where: {
          id: fieldId
        }
      });
    },
    generateStructDb() {
      return prisma2.$executeRaw`CALL restructure_db()`;
    }
  };
}

// app/api/doc.ts
function DocModule(prisma2) {
  return {
    async getDoc(sid, inputForm) {
      let doc = {};
      sid && (doc = await prisma2.doc.findFirst({
        where: {
          id: sid,
          isActive: !0
        }
      }));
      let tables = [];
      for (let group of inputForm.groups) {
        let fields = [];
        if (doc?.id) {
          let sql = "SELECT id";
          group.fields.forEach((fld) => {
            switch (fld.fieldType) {
              case "DATE":
                sql = sql + `, to_char(f${fld.id}, 'DD.MM.YYYY') f${fld.id}`;
                break;
              case "TIME":
                sql = sql + `, to_char(f${fld.id}, 'HH:MI') f${fld.id}`;
                break;
              default:
                sql = sql + `, f${fld.id}`;
            }
          }), sql = sql + ` FROM tbl_${group.id} WHERE sid = ${sid}`;
          let data = await prisma2.$queryRawUnsafe(`${sql}`);
          group.fields.forEach((fld) => {
            fields.push({
              name: `f${fld.id}`,
              _type: fld.fieldType,
              value: data && data.length && data[0][`f${fld.id}`] ? data[0][`f${fld.id}`] : ""
            });
          });
        } else
          group.fields.forEach((fld) => {
            fields.push({
              name: `f${fld.id}`,
              _type: fld.fieldType,
              value: ""
            });
          });
        tables.push({
          name: `tbl_${group.id}`,
          fields
        });
      }
      return {
        id: sid,
        tables
      };
    },
    async createDoc(userId, inputForm, values) {
      let seq = await prisma2.$queryRaw`SELECT nextval('doc_id_seq')`, sid = Number(seq[0].nextval), tr = [];
      tr.push(
        prisma2.doc.create({
          data: {
            id: sid,
            isActive: !0,
            dateStart: null,
            dateEnd: null,
            createdAt: null,
            updatedAt: null,
            createdUserId: userId,
            updatedUserId: null
          }
        })
      );
      for (let group of inputForm.groups) {
        let tbl = `tbl_${group.id}`, flds = "sid", vals = `${sid}`;
        group.fields.forEach((fld) => {
          flds = flds + `, f${fld.id}`;
          let fieldVal = String(values[`f${fld.id}`]);
          switch (fld.fieldType) {
            case "TEXT":
            case "CYRILLIC":
            case "DATE":
            case "TIME":
            case "FILE":
              vals = vals + `, ${["", "-"].includes(fieldVal) ? "null" : `'${fieldVal}'`}`;
              break;
            default:
              vals = vals + `, ${["", "-"].includes(fieldVal) ? "null" : fieldVal}`;
              break;
          }
        }), tr.push(prisma2.$executeRawUnsafe(`INSERT INTO ${tbl}(${flds}) VALUES(${vals})`));
      }
      return prisma2.$transaction(tr);
    },
    updateDoc(docId, userId, inputForm, values) {
      let tr = [];
      tr.push(
        prisma2.doc.update({
          where: {
            id: docId
          },
          data: {
            isActive: !0,
            dateStart: void 0,
            dateEnd: void 0,
            createdAt: void 0,
            updatedAt: void 0,
            createdUserId: void 0,
            updatedUserId: userId
          }
        })
      );
      for (let group of inputForm.groups) {
        let tbl = `tbl_${group.id}`, flds = "lst = 0";
        group.fields.forEach((fld) => {
          let fieldName = `f${fld.id}`, fieldVal = String(values[`f${fld.id}`]);
          switch (fld.fieldType) {
            case "TEXT":
            case "CYRILLIC":
            case "DATE":
            case "TIME":
            case "FILE":
              flds = flds + `, ${["", "-"].includes(fieldVal) ? `${fieldName} = null` : `${fieldName} = '${fieldVal}'`}`;
              break;
            default:
              flds = flds + `, ${["", "-"].includes(fieldVal) ? `${fieldName} = null` : `${fieldName} = ${fieldVal}`}`;
          }
        }), tr.push(prisma2.$executeRawUnsafe(`UPDATE ${tbl} SET ${flds} WHERE sid = ${docId}`));
      }
      return prisma2.$transaction(tr);
    },
    findDoc(inputForm, values) {
      let sf = "", select = "SELECT distinct doc.id", from = ' FROM "Doc" doc', where = ' WHERE doc."isActive" is true', tbls = [];
      for (let group of inputForm.groups) {
        let tbl = `tbl_${group.id}`;
        group.fields.forEach((fld) => {
          let fieldName = `f${fld.id}`, fieldVal = String(values[fieldName]);
          if (!["", "-"].includes(fieldVal))
            switch (tbls.includes(tbl) || (tbls.push(tbl), where = where + ` AND doc.id = ${tbl}.sid`, from = from + `, ${tbl}`), fld.fieldType) {
              case "TEXT":
              case "CYRILLIC":
              case "DATE":
              case "TIME":
              case "FILE":
                where = where + ` AND ${fieldName} = '${fieldVal}'`;
                break;
              default:
                where = where + ` AND ${fieldName} = ${fieldVal}`;
                break;
            }
        });
      }
      return sf = select + from + where, prisma2.$queryRawUnsafe(`${sf}`);
    },
    deleteDoc(sid) {
      return prisma2.doc.update({
        where: {
          id: sid
        },
        data: {
          isActive: !1
        }
      });
    }
  };
}

// app/api/index.ts
var api_default = {
  users: UsersModule(instance_default),
  db: DbModule(instance_default),
  doc: DocModule(instance_default)
};

// app/ui/elements/custom_button.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function CustomButton({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV3(
    "button",
    {
      ...props,
      className: `text-white text-xs py-1.5 px-3.5 flex items-center gap-2 rounded-md hover:cursor-pointer hover:shadow-lg font-semibold uppercase ${className}`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/ui/elements/custom_button.tsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  );
}

// app/ui/elements/custom_input.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function CustomInput({ className, id, title, errors, children, ...props }) {
  return /* @__PURE__ */ jsxDEV4(
    "div",
    {
      className: `${className} p-1 flex items-baseline`,
      children: [
        /* @__PURE__ */ jsxDEV4(
          "label",
          {
            className: "font-bold text-sm mr-1 min-w-40",
            htmlFor: id,
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/custom_input.tsx",
            lineNumber: 16,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV4(
            "input",
            {
              id,
              className: "font-mono text-sm border-2 p-1 focus:outline-blue-gray-500",
              ...props,
              children
            },
            void 0,
            !1,
            {
              fileName: "app/ui/elements/custom_input.tsx",
              lineNumber: 23,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4("span", { className: "text-sm text-red-500 h-4", children: errors }, void 0, !1, {
            fileName: "app/ui/elements/custom_input.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/ui/elements/custom_input.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/elements/custom_input.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  );
}

// app/ui/elements/custom_select.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function CustomSelect({ className, id, title, errors, children, ...props }) {
  return /* @__PURE__ */ jsxDEV5(
    "div",
    {
      className: `${className} p-1 flex items-baseline`,
      children: [
        /* @__PURE__ */ jsxDEV5(
          "label",
          {
            className: "font-bold text-sm mr-1 min-w-40",
            htmlFor: id,
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/custom_select.tsx",
            lineNumber: 16,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV5(
            "select",
            {
              id,
              className: "font-mono text-sm border-2 p-1 focus:outline-blue-gray-500 bg-white",
              ...props,
              children
            },
            void 0,
            !1,
            {
              fileName: "app/ui/elements/custom_select.tsx",
              lineNumber: 23,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5("span", { className: "text-sm text-red-500 h-4", children: errors }, void 0, !1, {
            fileName: "app/ui/elements/custom_select.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/ui/elements/custom_select.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/elements/custom_select.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.enter_data.$formId.tsx
import { Fragment, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var { Spinner, Alert, Dialog, Card, CardBody, CardFooter } = MaterialTailwind;
async function loader({
  request,
  params
}) {
  let url = new URL(request.url), docId = url.searchParams.get("docId"), state = url.searchParams.get("state"), inputForm, doc;
  return inputForm = await api_default.db.getInputForm(Number(params.formId)), doc = await api_default.doc.getDoc(docId ? Number(docId) : null, inputForm), json({ inputForm, doc, state });
}
async function action({
  request
}) {
  let ok = !1, errors = "", docs = {}, formData = await request.formData(), {
    _action,
    _user,
    _inputFormId,
    _id,
    ...values
  } = Object.fromEntries(formData);
  try {
    let inputForm = await api_default.db.getInputForm(Number(_inputFormId));
    if (_action === "openForCreate")
      return redirect(`/dashboard/enter_data/${_inputFormId}?state=edit`);
    if (_action === "openForEdit")
      return redirect(`/dashboard/enter_data/${_inputFormId}?state=edit&docId=${_id}`);
    if (_action === "openForSearch")
      return redirect(`/dashboard/enter_data/${_inputFormId}?state=search`);
    if (_action === "saveDocument")
      return _id ? (await api_default.doc.updateDoc(Number(_id), Number(_user), inputForm, values), redirect(`/dashboard/enter_data/${_inputFormId}?docId=${_id}`)) : (await api_default.doc.createDoc(Number(_user), inputForm, values), redirect(`/dashboard/enter_data/${_inputFormId}?`));
    if (_action === "findDocument") {
      let results = await api_default.doc.findDoc(inputForm, values);
      results.length > 100 ? errors = "Find records more 100" : (docs = {
        formId: inputForm.id,
        ids: results.map((item) => item.id)
      }, ok = !0);
    } else {
      if (_action === "cancelUpdate")
        return _id ? redirect(`/dashboard/enter_data/${_inputFormId}?docId=${_id}`) : redirect(`/dashboard/enter_data/${_inputFormId}?`);
      if (_action === "deleteDocument" && _id)
        return await api_default.doc.deleteDoc(Number(_id)), redirect(`/dashboard/enter_data/${_inputFormId}`);
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      errors = e.message;
    else
      throw e;
  }
  return json({ errors, docs, ok });
}
function InputForms() {
  let location = useLocation(), navigation = useNavigation(), navigate = useNavigate(), formRef = useRef(null), { dictionaries, docs, setDocs } = useOutletContext(), userId = 19, [open, setOpen] = useState(!1), { inputForm, doc, state } = useLoaderData(), data = useActionData(), [showFind, setShowFind] = useState(!1), isDeleting = useFetcher().state !== "idle", handleOpenInputForm = () => {
    setShowFind(!1), docs && docs.ids?.length ? navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`) : navigate(`/dashboard/enter_data/${docs.formId}?state=search`);
  }, handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return useEffect(() => {
    data?.errors && setOpen(!0), data?.docs && data?.ok && (setDocs(data.docs), setShowFind(!0)), navigation.state === "idle" && data?.ok && formRef.current?.reset();
  }, [data]), /* @__PURE__ */ jsxDEV6("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    state,
    " ",
    data?.ok,
    /* @__PURE__ */ jsxDEV6(
      Dialog,
      {
        placeholder: "",
        size: "sm",
        open: showFind,
        handler: () => handleOpenInputForm(),
        className: "bg-transparent shadow-none",
        children: /* @__PURE__ */ jsxDEV6(Card, { className: "mx-auto w-full", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV6(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: /* @__PURE__ */ jsxDEV6("div", { className: "text-bold p-1", children: [
            "Find: ",
            docs.ids?.length
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 156,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 155,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV6(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: /* @__PURE__ */ jsxDEV6(
            CustomButton,
            {
              className: "bg-green-500 hover:shadow-green-100",
              onClick: () => handleOpenInputForm(),
              children: "OK"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 159,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 158,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
          lineNumber: 154,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 147,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: inputForm?.title }, void 0, !1, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 168,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6(Alert, { className: "text-white bg-red-500", open, onClose: () => setOpen(!1), children: data?.errors ? data.errors : "" }, void 0, !1, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 169,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6(
      "div",
      {
        className: "flex items-center gap-3",
        children: [
          ["edit", "search"].includes(String(state)) ? null : /* @__PURE__ */ jsxDEV6(Form, { method: "post", children: [
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 177,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 178,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
                type: "submit",
                name: "_action",
                value: "openForCreate",
                children: [
                  /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 186,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 185,
                    columnNumber: 29
                  }, this),
                  "Create"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 179,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 176,
            columnNumber: 23
          }, this),
          ["edit", "search"].includes(String(state)) ? null : /* @__PURE__ */ jsxDEV6(Form, { method: "post", children: [
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 194,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 195,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
                type: "submit",
                name: "_action",
                value: "openForSearch",
                children: [
                  /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 203,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 202,
                    columnNumber: 29
                  }, this),
                  "Search"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 196,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 193,
            columnNumber: 23
          }, this),
          state === "search" ? /* @__PURE__ */ jsxDEV6(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
              form: "documentForm",
              type: "submit",
              name: "_action",
              value: "findDocument",
              children: [
                /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, !1, {
                  fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                  lineNumber: 218,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                  lineNumber: 217,
                  columnNumber: 25
                }, this),
                "Find"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 210,
              columnNumber: 23
            },
            this
          ) : null,
          doc.id && state !== "edit" ? /* @__PURE__ */ jsxDEV6(Form, { method: "post", children: [
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 225,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 226,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 227,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
                type: "submit",
                name: "_action",
                value: "openForEdit",
                children: [
                  /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 235,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 234,
                    columnNumber: 29
                  }, this),
                  "Edit"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 228,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 224,
            columnNumber: 23
          }, this) : null,
          state === "edit" ? /* @__PURE__ */ jsxDEV6(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
              form: "documentForm",
              type: "submit",
              name: "_action",
              value: "saveDocument",
              children: [
                /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" }, void 0, !1, {
                  fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                  lineNumber: 250,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                  lineNumber: 249,
                  columnNumber: 25
                }, this),
                "Save"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 242,
              columnNumber: 23
            },
            this
          ) : null,
          state === "edit" ? /* @__PURE__ */ jsxDEV6(Form, { method: "post", children: [
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 257,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 258,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 259,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
                type: "submit",
                name: "_action",
                value: "cancelUpdate",
                children: [
                  /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 267,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 266,
                    columnNumber: 29
                  }, this),
                  "Cancel"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 260,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 256,
            columnNumber: 23
          }, this) : null,
          doc.id && state !== "edit" ? /* @__PURE__ */ jsxDEV6(Form, { method: "post", children: [
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 276,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 277,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 278,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: "bg-red-500 hover:shadow-red-100",
                disabled: isDeleting,
                onClick: handleDelete,
                type: "submit",
                name: "_action",
                value: "deleteDocument",
                children: isDeleting ? /* @__PURE__ */ jsxDEV6(Fragment, { children: [
                  /* @__PURE__ */ jsxDEV6(Spinner, { className: "w-4 h-4" }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 289,
                    columnNumber: 37
                  }, this),
                  "Deleting..."
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                  lineNumber: 288,
                  columnNumber: 35
                }, this) : /* @__PURE__ */ jsxDEV6(Fragment, { children: [
                  /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 294,
                    columnNumber: 41
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                    lineNumber: 293,
                    columnNumber: 37
                  }, this),
                  "Delete"
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                  lineNumber: 292,
                  columnNumber: 35
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                lineNumber: 279,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 275,
            columnNumber: 23
          }, this) : null
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 172,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6("div", { className: "bg-white border p-1 shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ jsxDEV6(
      Form,
      {
        id: "documentForm",
        method: "post",
        ref: formRef,
        children: [
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 309,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, !1, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 310,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 311,
            columnNumber: 21
          }, this),
          inputForm?.groups && inputForm.groups.map((group) => /* @__PURE__ */ jsxDEV6("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsxDEV6("h2", { className: "col-span-3 bg-orange-700 text-white font-bold text-sm p-1 pl-4", children: group.title }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 314,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "border p-1 grid grid-cols-3 gap-1", children: group?.fields && group.fields.map((fld) => {
              let tableName = `tbl_${fld.groupId}`, fieldName = `f${fld.id}`, defVal = doc.tables.find((tbl) => tbl.name === tableName)?.fields.find((fld2) => fld2.name === fieldName)?.value;
              defVal = defVal || "";
              let cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`;
              switch (fld.fieldType) {
                case "TEXT":
                  return /* @__PURE__ */ jsxDEV6(
                    CustomInput,
                    {
                      className: cls,
                      id: fieldName,
                      title: fld.title,
                      type: "text",
                      name: fieldName,
                      defaultValue: defVal,
                      required: fld.isRequire && state === "edit",
                      disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
                      size: fld.len ? fld.len : 30,
                      maxLength: fld.len ? fld.len : 30
                    },
                    fld.id,
                    !1,
                    {
                      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                      lineNumber: 325,
                      columnNumber: 49
                    },
                    this
                  );
                case "CYRILLIC":
                  return /* @__PURE__ */ jsxDEV6(
                    CustomInput,
                    {
                      className: cls,
                      id: fieldName,
                      title: fld.title,
                      type: "text",
                      name: fieldName,
                      defaultValue: defVal,
                      required: fld.isRequire && state === "edit",
                      disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
                      size: fld.len ? fld.len : 30,
                      maxLength: fld.len ? fld.len : 30
                    },
                    fld.id,
                    !1,
                    {
                      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                      lineNumber: 341,
                      columnNumber: 49
                    },
                    this
                  );
                case "INTEGER":
                  return /* @__PURE__ */ jsxDEV6(
                    CustomInput,
                    {
                      className: cls,
                      id: fieldName,
                      title: fld.title,
                      type: "number",
                      name: fieldName,
                      defaultValue: defVal,
                      required: fld.isRequire && state === "edit",
                      disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
                      size: fld.len ? fld.len : 30,
                      maxLength: fld.len ? fld.len : 30
                    },
                    fld.id,
                    !1,
                    {
                      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                      lineNumber: 357,
                      columnNumber: 49
                    },
                    this
                  );
                case "NUMERIC":
                  return /* @__PURE__ */ jsxDEV6(
                    CustomInput,
                    {
                      className: cls,
                      id: fieldName,
                      title: fld.title,
                      type: "number",
                      step: "0.01",
                      name: fieldName,
                      defaultValue: defVal,
                      required: fld.isRequire && state === "edit",
                      disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
                      size: fld.len ? fld.len : 30,
                      maxLength: fld.len ? fld.len : 30
                    },
                    fld.id,
                    !1,
                    {
                      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                      lineNumber: 373,
                      columnNumber: 49
                    },
                    this
                  );
                case "DICT":
                  let dic = dictionaries.find((item) => item.id === fld.dicId);
                  return /* @__PURE__ */ jsxDEV6(
                    CustomSelect,
                    {
                      className: cls,
                      id: fieldName,
                      title: fld.title,
                      name: fieldName,
                      defaultValue: defVal,
                      required: fld.isRequire && state === "edit",
                      disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
                      children: [
                        /* @__PURE__ */ jsxDEV6("option", { children: "-" }, void 0, !1, {
                          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                          lineNumber: 401,
                          columnNumber: 53
                        }, this),
                        ["create", "edit", "search", "find"].includes(String(state)) ? dic?.data_edit.map((item) => /* @__PURE__ */ jsxDEV6("option", { value: item.id, children: item.title }, item.id, !1, {
                          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                          lineNumber: 404,
                          columnNumber: 61
                        }, this)) : dic?.data_browse.map((item) => /* @__PURE__ */ jsxDEV6("option", { value: item.id, children: item.title }, item.id, !1, {
                          fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                          lineNumber: 407,
                          columnNumber: 61
                        }, this))
                      ]
                    },
                    fld.id,
                    !0,
                    {
                      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                      lineNumber: 391,
                      columnNumber: 49
                    },
                    this
                  );
                case "DATE":
                  return /* @__PURE__ */ jsxDEV6(
                    CustomInput,
                    {
                      className: cls,
                      id: fieldName,
                      title: fld.title,
                      type: "date",
                      name: fieldName,
                      defaultValue: defVal,
                      required: fld.isRequire && state === "edit",
                      disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
                      size: fld.len ? fld.len : 30,
                      maxLength: fld.len ? fld.len : 30
                    },
                    fld.id,
                    !1,
                    {
                      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                      lineNumber: 413,
                      columnNumber: 49
                    },
                    this
                  );
                case "TIME":
                  return /* @__PURE__ */ jsxDEV6(
                    CustomInput,
                    {
                      className: cls,
                      id: fieldName,
                      title: fld.title,
                      type: "time",
                      name: fieldName,
                      defaultValue: defVal,
                      required: fld.isRequire && state === "edit",
                      disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
                      size: fld.len ? fld.len : 30,
                      maxLength: fld.len ? fld.len : 30
                    },
                    fld.id,
                    !1,
                    {
                      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
                      lineNumber: 429,
                      columnNumber: 49
                    },
                    this
                  );
              }
            }) }, void 0, !1, {
              fileName: "app/routes/dashboard.enter_data.$formId.tsx",
              lineNumber: 315,
              columnNumber: 29
            }, this)
          ] }, group.id, !0, {
            fileName: "app/routes/dashboard.enter_data.$formId.tsx",
            lineNumber: 313,
            columnNumber: 25
          }, this))
        ]
      },
      location.key,
      !0,
      {
        fileName: "app/routes/dashboard.enter_data.$formId.tsx",
        lineNumber: 303,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 302,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
    lineNumber: 145,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.db_struct.tsx
var dashboard_db_struct_exports = {};
__export(dashboard_db_struct_exports, {
  action: () => action2,
  default: () => DbStruct,
  loader: () => loader2
});
import MaterialTailwind6 from "@material-tailwind/react";
import { Prisma as Prisma2 } from "@prisma/client";
import { json as json2, redirect as redirect2 } from "@remix-run/node";
import { Form as Form6, useActionData as useActionData2, useFetcher as useFetcher5, useLoaderData as useLoaderData2, useOutletContext as useOutletContext2 } from "@remix-run/react";
import invariant from "tiny-invariant";

// app/ui/forms/dict_form.tsx
import MaterialTailwind2 from "@material-tailwind/react";
import { Form as Form2, useFetcher as useFetcher2 } from "@remix-run/react";
import { Fragment as Fragment2, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var { Spinner: Spinner2 } = MaterialTailwind2;
function DictionaryForm({ dictionary }) {
  let fetcher = useFetcher2(), isDeleting = fetcher.state !== "idle", handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV7(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV7(
        CustomButton,
        {
          className: "hidden",
          id: "updateDictionaryButton",
          form: "updateDictionary",
          type: "submit",
          name: "_action",
          value: "updateDictionary",
          children: [
            /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/dict_form.tsx",
              lineNumber: 35,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/dict_form.tsx",
              lineNumber: 34,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 26,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV7(
          CustomButton,
          {
            className: "bg-red-500 hover:shadow-red-100",
            disabled: isDeleting,
            onClick: handleDelete,
            type: "submit",
            name: "_action",
            value: "deleteDictionary",
            children: isDeleting ? /* @__PURE__ */ jsxDEV7(Fragment2, { children: [
              /* @__PURE__ */ jsxDEV7(Spinner2, { className: "w-4 h-4" }, void 0, !1, {
                fileName: "app/ui/forms/dict_form.tsx",
                lineNumber: 51,
                columnNumber: 33
              }, this),
              "Deleting..."
            ] }, void 0, !0, {
              fileName: "app/ui/forms/dict_form.tsx",
              lineNumber: 50,
              columnNumber: 31
            }, this) : /* @__PURE__ */ jsxDEV7(Fragment2, { children: [
              /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                fileName: "app/ui/forms/dict_form.tsx",
                lineNumber: 56,
                columnNumber: 37
              }, this) }, void 0, !1, {
                fileName: "app/ui/forms/dict_form.tsx",
                lineNumber: 55,
                columnNumber: 33
              }, this),
              "Delete"
            ] }, void 0, !0, {
              fileName: "app/ui/forms/dict_form.tsx",
              lineNumber: 54,
              columnNumber: 31
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/dict_form.tsx",
            lineNumber: 41,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/ui/forms/dict_form.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/ui/forms/dict_form.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7(
      Form2,
      {
        id: "updateDictionary",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/dict_form.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV7(
            CustomInput,
            {
              id: dictionary.id,
              title: "Title",
              type: "text",
              defaultValue: dictionary?.title,
              name: "title",
              required: !0,
              onChange: () => {
                document.getElementById("updateDictionaryButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/dict_form.tsx",
              lineNumber: 70,
              columnNumber: 17
            },
            this
          )
        ]
      },
      dictionary?.id,
      !0,
      {
        fileName: "app/ui/forms/dict_form.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      Form2,
      {
        id: "deleteDictionary",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/ui/forms/dict_form.tsx",
        lineNumber: 83,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/forms/dict_form.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

// app/ui/forms/group_form.tsx
import MaterialTailwind3 from "@material-tailwind/react";
import { Form as Form3, useFetcher as useFetcher3, useNavigate as useNavigate2 } from "@remix-run/react";
import { FieldType } from "@prisma/client";
import { Fragment as Fragment3, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var { Spinner: Spinner3 } = MaterialTailwind3;
function GroupForm({ group, dicts }) {
  let navigate = useNavigate2(), fetcher = useFetcher3(), isDeleting = fetcher.state !== "idle", handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV8(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV8(
        CustomButton,
        {
          className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
          form: "addInputFieldForm",
          type: "submit",
          name: "_action",
          value: "createEmptyInputField",
          children: [
            /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 38,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 37,
              columnNumber: 21
            }, this),
            "Add Field"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 30,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(
        CustomButton,
        {
          className: "hidden",
          id: "updateGroupButton",
          color: "green",
          form: "updateGroupForm",
          type: "submit",
          name: "_action",
          value: "updateGroup",
          children: [
            /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 52,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 51,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 42,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(
        CustomButton,
        {
          className: "bg-red-500 hover:shadow-red-100",
          form: "deleteGroupForm",
          type: "submit",
          name: "_action",
          value: "deleteGroup",
          children: [
            /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 64,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 63,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 56,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8(
      fetcher.Form,
      {
        id: "addInputFieldForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "groupId", defaultValue: group.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "cnt", defaultValue: group.fields.length + 1 }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 69,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV8(
      Form3,
      {
        id: "updateGroupForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8(
            CustomInput,
            {
              id: "group_pos",
              type: "number",
              name: "pos",
              title: "Pos: ",
              defaultValue: group?.pos,
              required: !0,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 85,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            CustomInput,
            {
              id: "group_title",
              type: "text",
              name: "title",
              title: "Title: ",
              defaultValue: group?.title,
              required: !0,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 97,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            CustomInput,
            {
              id: "group_ismulty",
              type: "checkbox",
              name: "isMulty",
              title: "Is Multy: ",
              checked: !!group?.isMulty,
              required: !1,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 109,
              columnNumber: 17
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 77,
        columnNumber: 13
      },
      this
    ),
    group?.fields && group.fields.map((field) => /* @__PURE__ */ jsxDEV8(
      Form3,
      {
        className: "hidden",
        id: `updateInputFieldForm_${field.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 129,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "groupId", defaultValue: field.groupId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 130,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV8(
            CustomButton,
            {
              className: "bg-green-500 hover:shadow-green-100",
              id: `updateInputFieldButton_${field.id}`,
              form: `updateInputFieldForm_${field.id}`,
              type: "submit",
              name: "_action",
              value: "updateInputField",
              children: [
                /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
                  fileName: "app/ui/forms/group_form.tsx",
                  lineNumber: 140,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/ui/forms/group_form.tsx",
                  lineNumber: 139,
                  columnNumber: 25
                }, this),
                "Save"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 131,
              columnNumber: 21
            },
            this
          )
        ]
      },
      `updateInputFieldForm_${field.id}`,
      !0,
      {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 123,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV8("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxDEV8("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV8(
        "thead",
        {
          className: "bg-blue-gray-400 text-white text-center",
          children: /* @__PURE__ */ jsxDEV8("tr", { children: [
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 152,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Pos" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 153,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Span" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 154,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Start" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 155,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Title" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 156,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Type" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 157,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Dict" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 158,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Len" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 159,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Precision" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 160,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Key" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 161,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Visible" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 162,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Enable" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 163,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Require" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 164,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Duplicate" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 165,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV8("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 166,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 151,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 148,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8("tbody", { className: "text-center", children: group?.fields && group.fields.map((field, index) => /* @__PURE__ */ jsxDEV8("tr", { children: [
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 172,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm w-full",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "pos",
            defaultValue: field.pos,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 174,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 173,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm w-full",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "colSpan",
            min: 1,
            max: 3,
            defaultValue: field.colSpan,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 187,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 186,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm w-full",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "colStart",
            min: 1,
            max: 3,
            defaultValue: field.colStart,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 202,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 201,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            onClick: () => navigate(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}&inputFieldId=${field.id}`),
            children: /* @__PURE__ */ jsxDEV8(
              "input",
              {
                className: "text-sm w-full",
                form: `updateInputFieldForm_${field.id}`,
                type: "text",
                name: "title",
                defaultValue: field.title,
                maxLength: 23,
                onChange: () => {
                  document.getElementById(`updateInputFieldButton_${field.id}`).click();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/ui/forms/group_form.tsx",
                lineNumber: 220,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 216,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV8(
          "select",
          {
            className: "text-sm w-full",
            form: `updateInputFieldForm_${field.id}`,
            name: "fieldType",
            defaultValue: field.fieldType,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            },
            children: Object.keys(FieldType).map((key) => /* @__PURE__ */ jsxDEV8("option", { value: key, children: key }, key, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 244,
              columnNumber: 78
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 234,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 233,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.fieldType === "DICT" ? /* @__PURE__ */ jsxDEV8(
          "select",
          {
            className: "text-sm w-full",
            form: `updateInputFieldForm_${field.id}`,
            name: "dicId",
            defaultValue: String(field.dicId),
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            },
            children: [
              /* @__PURE__ */ jsxDEV8("option", { value: "", children: "-" }, void 0, !1, {
                fileName: "app/ui/forms/group_form.tsx",
                lineNumber: 259,
                columnNumber: 45
              }, this),
              dicts.map((dic) => /* @__PURE__ */ jsxDEV8("option", { value: dic.id, children: dic.title }, dic.id, !1, {
                fileName: "app/ui/forms/group_form.tsx",
                lineNumber: 260,
                columnNumber: 77
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 249,
            columnNumber: 43
          },
          this
        ) : null }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 247,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm w-full",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "len",
            defaultValue: field.len,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 265,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 264,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm w-full",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "precision",
            defaultValue: field.precision,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 278,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 277,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isKey",
            defaultChecked: field.isKey,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 291,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 290,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isVisible",
            defaultChecked: field.isVisible,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 304,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 303,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isEnable",
            defaultChecked: field.isEnable,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 317,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 316,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isRequire",
            defaultChecked: field.isRequire,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 330,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 329,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isDuplicate",
            defaultChecked: field.isDuplicate,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 343,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 342,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV8(fetcher.Form, { method: "post", children: [
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "id", defaultValue: field?.id ? field.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 357,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV8(
            CustomButton,
            {
              className: "bg-red-500 hover:shadow-red-100",
              disabled: isDeleting,
              onClick: handleDelete,
              type: "submit",
              name: "_action",
              value: "deleteInputField",
              children: isDeleting ? /* @__PURE__ */ jsxDEV8(Fragment3, { children: [
                /* @__PURE__ */ jsxDEV8(Spinner3, { className: "w-4 h-4" }, void 0, !1, {
                  fileName: "app/ui/forms/group_form.tsx",
                  lineNumber: 368,
                  columnNumber: 53
                }, this),
                "Deleting..."
              ] }, void 0, !0, {
                fileName: "app/ui/forms/group_form.tsx",
                lineNumber: 367,
                columnNumber: 51
              }, this) : /* @__PURE__ */ jsxDEV8(Fragment3, { children: [
                /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                  fileName: "app/ui/forms/group_form.tsx",
                  lineNumber: 373,
                  columnNumber: 57
                }, this) }, void 0, !1, {
                  fileName: "app/ui/forms/group_form.tsx",
                  lineNumber: 372,
                  columnNumber: 53
                }, this),
                "Delete"
              ] }, void 0, !0, {
                fileName: "app/ui/forms/group_form.tsx",
                lineNumber: 371,
                columnNumber: 51
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 358,
              columnNumber: 41
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 356,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 355,
          columnNumber: 33
        }, this)
      ] }, field.id, !0, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 171,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 169,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 147,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 146,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8(
      Form3,
      {
        id: "deleteGroupForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: [
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 397,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 398,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 385,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/forms/group_form.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

// app/ui/forms/input_form.tsx
import MaterialTailwind4 from "@material-tailwind/react";
import { Form as Form4 } from "@remix-run/react";
import { Fragment as Fragment4, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var { Spinner: Spinner4 } = MaterialTailwind4;
function InputFormForm({ inputForm, groups }) {
  return /* @__PURE__ */ jsxDEV9(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV9(
        CustomButton,
        {
          className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
          form: "addGroupForm",
          type: "submit",
          name: "_action",
          value: "createEmptyGroup",
          children: [
            /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 24,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 23,
              columnNumber: 21
            }, this),
            "Add Group"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 16,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(
        CustomButton,
        {
          className: "hidden",
          id: "updateInputFormButton",
          form: "updateInputForm",
          type: "submit",
          name: "_action",
          value: "updateInputForm",
          children: [
            /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 37,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 36,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 28,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(
        CustomButton,
        {
          className: "bg-red-500 hover:shadow-red-100",
          form: "deleteInputForm",
          type: "submit",
          name: "_action",
          value: "deleteInputForm",
          children: [
            /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 49,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 48,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 41,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9(
      Form4,
      {
        id: "addGroupForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "inputFormId", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/input_form.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "cnt", defaultValue: groups.length + 1 }, void 0, !1, {
            fileName: "app/ui/forms/input_form.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this)
        ]
      },
      1,
      !0,
      {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 54,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV9(
      Form4,
      {
        id: "updateInputForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/input_form.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9(
            CustomInput,
            {
              id: "inputForm_pos",
              title: "Pos: ",
              type: "number",
              defaultValue: inputForm?.pos,
              name: "pos",
              required: !0,
              onChange: () => {
                document.getElementById("updateInputFormButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 69,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            CustomInput,
            {
              id: "inputForm_title",
              title: "Title: ",
              type: "text",
              defaultValue: inputForm?.title,
              name: "title",
              required: !0,
              onChange: () => {
                document.getElementById("updateInputFormButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 81,
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
        lineNumber: 62,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV9(
      Form4,
      {
        id: "deleteInputForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 107,
          columnNumber: 17
        }, this)
      },
      3,
      !1,
      {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 94,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/forms/input_form.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/ui/forms/search_form.tsx
import MaterialTailwind5 from "@material-tailwind/react";
import { Form as Form5, useFetcher as useFetcher4 } from "@remix-run/react";
import { Fragment as Fragment5, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var { Spinner: Spinner5 } = MaterialTailwind5;
function SearchFormForm({ searchForm, inputFields }) {
  let fetcher = useFetcher4(), isDeleting = fetcher.state !== "idle", handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV10(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV10(
        CustomButton,
        {
          className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
          form: "addSearchFieldForm",
          type: "submit",
          name: "_action",
          value: "createEmptySearchField",
          children: [
            /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 36,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 35,
              columnNumber: 21
            }, this),
            "Add Field"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 28,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        CustomButton,
        {
          className: "hidden",
          id: "updateSearchFormButton",
          form: "updateSearchForm",
          type: "submit",
          name: "_action",
          value: "updateSearchForm",
          children: [
            /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 49,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 48,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 40,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        CustomButton,
        {
          className: "bg-red-500 hover:shadow-red-100",
          form: "deleteSearchForm",
          type: "submit",
          name: "_action",
          value: "deleteSearchForm",
          children: [
            /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 61,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 60,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 53,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV10(
      fetcher.Form,
      {
        id: "addSearchFieldForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "searchFormId", defaultValue: searchForm.id }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "cnt", defaultValue: searchForm.fields?.length + 1 }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 66,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(
      Form5,
      {
        id: "updateSearchForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "id", defaultValue: searchForm.id }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV10(
            CustomInput,
            {
              id: "searchForm_pos",
              title: "Pos: ",
              type: "number",
              value: searchForm?.pos,
              name: "pos",
              required: !0,
              onChange: () => {
                document.getElementById("updateSearchFormButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 80,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV10(
            CustomInput,
            {
              id: "searchForm_title",
              title: "Title: ",
              type: "text",
              value: searchForm?.title,
              name: "title",
              required: !0,
              onChange: () => {
                document.getElementById("updateSearchFormButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 92,
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
        lineNumber: 73,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(
      Form5,
      {
        id: "deleteSearchForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 105,
        columnNumber: 13
      },
      this
    ),
    searchForm?.fields && searchForm.fields.map((field) => /* @__PURE__ */ jsxDEV10(
      Form5,
      {
        className: "hidden",
        id: `updateSearchFieldForm_${field.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 126,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "searchFormId", defaultValue: field.searchFormId }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 127,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10(
            CustomButton,
            {
              className: "bg-green-500 hover:shadow-green-100",
              id: `updateSearchFieldButton_${field.id}`,
              form: `updateSearchFieldForm_${field.id}`,
              type: "submit",
              name: "_action",
              value: "updateSearchField",
              children: [
                /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 137,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 136,
                  columnNumber: 25
                }, this),
                "Save"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 128,
              columnNumber: 21
            },
            this
          )
        ]
      },
      `updateSearchFieldForm_${field.id}`,
      !0,
      {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 120,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV10("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxDEV10("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV10(
        "thead",
        {
          className: "bg-blue-gray-400 text-white text-center",
          children: /* @__PURE__ */ jsxDEV10("tr", { children: [
            /* @__PURE__ */ jsxDEV10("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 149,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV10("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Pos" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 150,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV10("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Title" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 151,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV10("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Field" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 152,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV10("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 153,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 148,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 145,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10("tbody", { children: searchForm?.fields && searchForm.fields.map((field, index) => /* @__PURE__ */ jsxDEV10("tr", { children: [
        /* @__PURE__ */ jsxDEV10("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 159,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV10("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV10(
          "input",
          {
            className: "text-sm w-full",
            form: `updateSearchFieldForm_${field.id}`,
            type: "number",
            name: "pos",
            defaultValue: field.pos,
            onChange: () => {
              document.getElementById(`updateSearchFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 161,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 160,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV10(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            children: /* @__PURE__ */ jsxDEV10(
              "input",
              {
                className: "text-sm w-full",
                form: `updateSearchFieldForm_${field.id}`,
                type: "text",
                name: "title",
                defaultValue: field.title,
                onChange: () => {
                  document.getElementById(`updateSearchFieldButton_${field.id}`).click();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/ui/forms/search_form.tsx",
                lineNumber: 176,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 173,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV10(
          "select",
          {
            className: "text-sm w-full",
            form: `updateSearchFieldForm_${field.id}`,
            name: "fieldId",
            defaultValue: String(field.fieldId),
            onChange: () => {
              document.getElementById(`updateSearchFieldButton_${field.id}`).click();
            },
            children: [
              /* @__PURE__ */ jsxDEV10("option", { value: "", children: "-" }, void 0, !1, {
                fileName: "app/ui/forms/search_form.tsx",
                lineNumber: 199,
                columnNumber: 41
              }, this),
              inputFields && inputFields.map(
                (fld) => /* @__PURE__ */ jsxDEV10("option", { value: fld.id, children: `${fld.group.pos}. ${fld.group.title} -> ${fld.title}` }, fld.id, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 202,
                  columnNumber: 49
                }, this)
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 189,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 188,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV10("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV10(fetcher.Form, { method: "post", children: [
          /* @__PURE__ */ jsxDEV10("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 209,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV10(
            CustomButton,
            {
              className: "bg-red-500 hover:shadow-red-100",
              disabled: isDeleting,
              onClick: handleDelete,
              type: "submit",
              name: "_action",
              value: "deleteSearchField",
              children: isDeleting ? /* @__PURE__ */ jsxDEV10(Fragment5, { children: [
                /* @__PURE__ */ jsxDEV10(Spinner5, { className: "w-4 h-4" }, void 0, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 220,
                  columnNumber: 53
                }, this),
                "Deleting..."
              ] }, void 0, !0, {
                fileName: "app/ui/forms/search_form.tsx",
                lineNumber: 219,
                columnNumber: 51
              }, this) : /* @__PURE__ */ jsxDEV10(Fragment5, { children: [
                /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 225,
                  columnNumber: 57
                }, this) }, void 0, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 224,
                  columnNumber: 53
                }, this),
                "Delete"
              ] }, void 0, !0, {
                fileName: "app/ui/forms/search_form.tsx",
                lineNumber: 223,
                columnNumber: 51
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 210,
              columnNumber: 41
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 208,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 207,
          columnNumber: 33
        }, this)
      ] }, field.id, !0, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 158,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 156,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 144,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 143,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/ui/forms/search_form.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/ui/panels/db_struct.tsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV11("ul", { children: [
    /* @__PURE__ */ jsxDEV11(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "inputForm" && !inputFormId ? "bg-blue-gray-200" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 32,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11(
            Link,
            {
              to: "/dashboard/db_struct?state=inputForm&inputFormId=0",
              children: "Input Forms"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/panels/db_struct.tsx",
              lineNumber: 34,
              columnNumber: 17
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 27,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11("ul", { children: inputForms.map((form) => /* @__PURE__ */ jsxDEV11("div", { children: [
      /* @__PURE__ */ jsxDEV11(
        Link,
        {
          to: `/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`,
          children: /* @__PURE__ */ jsxDEV11(
            "li",
            {
              className: [
                "pl-4 flex items-center gap-1 hover:cursor-pointer",
                state === "inputForm" && form.id === inputFormId ? "bg-blue-gray-200" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                  fileName: "app/ui/panels/db_struct.tsx",
                  lineNumber: 51,
                  columnNumber: 37
                }, this) }, void 0, !1, {
                  fileName: "app/ui/panels/db_struct.tsx",
                  lineNumber: 50,
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
              lineNumber: 46,
              columnNumber: 29
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 43,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11("ul", { children: form.groups.map((gr) => /* @__PURE__ */ jsxDEV11(
        Link,
        {
          to: `/dashboard/db_struct?state=group&inputFormId=${gr.inputFormId}&groupId=${gr.id}`,
          children: /* @__PURE__ */ jsxDEV11(
            "li",
            {
              className: [
                "pl-8 flex items-center gap-1 hover:cursor-pointer",
                state === "group" && gr.id === groupId ? "bg-blue-gray-200" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                  fileName: "app/ui/panels/db_struct.tsx",
                  lineNumber: 67,
                  columnNumber: 45
                }, this) }, void 0, !1, {
                  fileName: "app/ui/panels/db_struct.tsx",
                  lineNumber: 66,
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
              lineNumber: 62,
              columnNumber: 37
            },
            this
          )
        },
        gr.id,
        !1,
        {
          fileName: "app/ui/panels/db_struct.tsx",
          lineNumber: 58,
          columnNumber: 33
        },
        this
      )) }, void 0, !1, {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this)
    ] }, form.id, !0, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV11(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "searchForm" && !searchFormId ? "bg-blue-gray-200" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 82,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11(
            Link,
            {
              to: "/dashboard/db_struct?state=searchForm&searchFormId=0",
              children: "Search Forms"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/panels/db_struct.tsx",
              lineNumber: 84,
              columnNumber: 17
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 77,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11("ul", { children: searchForms.map((form) => /* @__PURE__ */ jsxDEV11(
      Link,
      {
        to: `/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`,
        children: /* @__PURE__ */ jsxDEV11(
          "li",
          {
            className: [
              "pl-4 flex items-center gap-1 hover:cursor-pointer",
              state === "searchForm" && form.id === searchFormId ? "bg-blue-gray-200" : ""
            ].join(" "),
            children: [
              /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                fileName: "app/ui/panels/db_struct.tsx",
                lineNumber: 101,
                columnNumber: 33
              }, this) }, void 0, !1, {
                fileName: "app/ui/panels/db_struct.tsx",
                lineNumber: 100,
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
            lineNumber: 96,
            columnNumber: 25
          },
          this
        )
      },
      form.id,
      !1,
      {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 92,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 90,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV11(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "dictionary" && !dictionaryId ? "bg-blue-gray-200" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 113,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11(
            Link,
            {
              to: "/dashboard/db_struct?state=dictionary&dictionaryId=0",
              children: "Dictionaries"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/panels/db_struct.tsx",
              lineNumber: 115,
              columnNumber: 17
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 108,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11("ul", { children: dictionaries.map((dict) => /* @__PURE__ */ jsxDEV11(
      Link,
      {
        to: `/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`,
        children: /* @__PURE__ */ jsxDEV11(
          "li",
          {
            className: [
              "pl-4 flex items-center gap-1 hover:cursor-pointer",
              state === "dictionary" && dict.id === dictionaryId ? "bg-blue-gray-200" : ""
            ].join(" "),
            children: [
              /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                fileName: "app/ui/panels/db_struct.tsx",
                lineNumber: 132,
                columnNumber: 33
              }, this) }, void 0, !1, {
                fileName: "app/ui/panels/db_struct.tsx",
                lineNumber: 131,
                columnNumber: 29
              }, this),
              dict.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 127,
            columnNumber: 25
          },
          this
        )
      },
      dict.id,
      !1,
      {
        fileName: "app/ui/panels/db_struct.tsx",
        lineNumber: 123,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/ui/panels/db_struct.tsx",
      lineNumber: 121,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/ui/panels/db_struct.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.db_struct.tsx
import { useEffect as useEffect2, useState as useState2 } from "react";
import { Fragment as Fragment6, jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var { Spinner: Spinner6, Alert: Alert2 } = MaterialTailwind6;
async function loader2({
  request
}) {
  let url = new URL(request.url), state = url.searchParams.get("state"), inputFormId = url.searchParams.get("inputFormId"), searchFormId = url.searchParams.get("searchFormId"), dictionaryId = url.searchParams.get("dictionaryId"), groupId = url.searchParams.get("groupId"), inputFieldId = url.searchParams.get("inputFieldId"), groups = await api_default.db.getGroups(Number(inputFormId)), inputFields = await api_default.db.getInputFields(), inputForm, searchForm, dictionary, group, inputField;
  switch (state) {
    case "dictionary": {
      invariant(dictionaryId, "Missing dictionaryId param"), dictionary = await api_default.db.getDictionary(Number(dictionaryId));
      break;
    }
    case "inputForm": {
      invariant(inputFormId, "Missing inputFormId param"), inputForm = await api_default.db.getInputForm(Number(inputFormId));
      break;
    }
    case "searchForm": {
      invariant(searchFormId, "Missing searchFormId param"), searchForm = await api_default.db.getSearchForm(Number(searchFormId));
      break;
    }
    case "group": {
      invariant(groupId, "Missing groupId param"), group = await api_default.db.getGroup(Number(groupId)), inputField = group?.fields.find((item) => {
        item.id, Number(inputFieldId);
      });
      break;
    }
  }
  return json2({
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    inputField,
    groups,
    inputFields
  });
}
async function action2({
  request
}) {
  let errors = null, formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  if (_action === "updateInputForm")
    try {
      return await api_default.db.updateInputForm(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        title: String(values.title)
      }), redirect2(`/dashboard/db_struct?state=inputForm&inputFormId=${values.id}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyInputForm")
    try {
      let form = await api_default.db.createEmptyInputForm(Number(values.cnt));
      return redirect2(`/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteInputForm")
    try {
      return await api_default.db.deleteInputForm(Number(values.id)), redirect2("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateSearchForm")
    try {
      return await api_default.db.updateSearchForm(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        title: String(values.title)
      }), redirect2(`/dashboard/db_struct?state=searchForm&searchFormId=${values.id}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptySearchForm")
    try {
      let form = await api_default.db.createEmptySearchForm(Number(values.cnt));
      return redirect2(`/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteSearchForm")
    try {
      return await api_default.db.deleteSearchForm(Number(values.id)), redirect2("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateDictionary")
    try {
      return await api_default.db.updateDictionary(Number(values.id), {
        id: Number(values.id),
        title: String(values.title)
      }), redirect2(`/dashboard/db_struct?state=dictionary&dictionaryId=${values.id}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyDictionary")
    try {
      let dict = await api_default.db.createEmptyDictionary(Number(values.cnt));
      return redirect2(`/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteDictionary")
    try {
      return await api_default.db.deleteDictionary(Number(values.id)), redirect2("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyGroup")
    try {
      let group = await api_default.db.createEmptyGroup(Number(values.inputFormId), Number(values.cnt));
      return redirect2(`/dashboard/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateGroup")
    try {
      let group = await api_default.db.updateGroup(
        Number(values.id),
        {
          id: Number(values.id),
          inputFormId: Number(values.inputFormId),
          pos: Number(values.pos),
          title: String(values.title),
          isMulty: Boolean(values.isMulty)
        }
      );
      return redirect2(`/dashboard/db_struct?state=group&inputFormId=${group.inputFormId}&groupId=${group.id}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteGroup")
    try {
      return await api_default.db.deleteGroup(Number(values.id)), redirect2("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateInputField")
    try {
      return await api_default.db.updateInputField(Number(values.id), {
        id: Number(values.id),
        groupId: Number(values.groupId),
        colSpan: Number(values.colSpan),
        colStart: Number(values.colStart),
        pos: Number(values.pos),
        title: String(values.title),
        len: Number(values.len),
        fieldType: String(values.fieldType),
        dicId: Number(values.dicId),
        isKey: Boolean(values.isKey),
        isVisible: Boolean(values.isVisible),
        isEnable: Boolean(values.isEnable),
        isRequire: Boolean(values.isRequire),
        precision: Number(values.precision),
        isDuplicate: Boolean(values.isDuplicate)
      }), redirect2(`/dashboard/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.groupId}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyInputField")
    try {
      await api_default.db.createEmptyInputField(Number(values.groupId), Number(values.cnt));
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteInputField")
    try {
      await api_default.db.deleteInputField(Number(values.id));
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptySearchField")
    try {
      await api_default.db.createEmptySearchField(Number(values.searchFormId), Number(values.cnt));
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateSearchField")
    try {
      return await api_default.db.updateSearchField(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        searchFormId: Number(values.searchFormId),
        title: String(values.title),
        fieldId: Number(values.fieldId)
      }), redirect2(`/dashboard/db_struct?state=searchForm&searchFormId=${values.searchFormId}`);
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteSearchField")
    try {
      await api_default.db.deleteSearchField(Number(values.id));
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "generateStructDb")
    try {
      await api_default.db.generateStructDb();
    } catch (e) {
      e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
    }
  return json2({ errors });
}
function DbStruct() {
  let { dictionaries, inputForms, searchForms } = useOutletContext2(), [open, setOpen] = useState2(!1), {
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    groups,
    inputFields
  } = useLoaderData2(), data = useActionData2(), isRestruct = useFetcher5().state !== "idle", handleRestruct = async (event) => {
    confirm(
      "Please confirm you want to restructure database."
    ) || event.preventDefault();
  };
  return useEffect2(() => {
    data?.errors && setOpen(!0);
  }, [data]), /* @__PURE__ */ jsxDEV12("div", { className: "mx-4 flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ jsxDEV12("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: "Db Struct" }, void 0, !1, {
      fileName: "app/routes/dashboard.db_struct.tsx",
      lineNumber: 332,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(Alert2, { className: "text-white bg-red-500", open, onClose: () => setOpen(!1), children: data?.errors ? data.errors : "" }, void 0, !1, {
      fileName: "app/routes/dashboard.db_struct.tsx",
      lineNumber: 333,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(
      "div",
      {
        className: "flex justify-end items-center gap-3 h-14",
        children: [
          state === "dictionary" ? /* @__PURE__ */ jsxDEV12(Form6, { method: "post", children: [
            /* @__PURE__ */ jsxDEV12("input", { type: "hidden", name: "cnt", defaultValue: dictionaries.length + 1 }, void 0, !1, {
              fileName: "app/routes/dashboard.db_struct.tsx",
              lineNumber: 341,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV12(
              CustomButton,
              {
                className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
                type: "submit",
                name: "_action",
                value: "createEmptyDictionary",
                children: [
                  /* @__PURE__ */ jsxDEV12("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV12("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/dashboard.db_struct.tsx",
                    lineNumber: 349,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/dashboard.db_struct.tsx",
                    lineNumber: 348,
                    columnNumber: 29
                  }, this),
                  "Add Dictionary"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboard.db_struct.tsx",
                lineNumber: 342,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 340,
            columnNumber: 23
          }, this) : state === "inputForm" ? /* @__PURE__ */ jsxDEV12(Form6, { method: "post", children: [
            /* @__PURE__ */ jsxDEV12("input", { type: "hidden", name: "cnt", defaultValue: inputForms.length + 1 }, void 0, !1, {
              fileName: "app/routes/dashboard.db_struct.tsx",
              lineNumber: 356,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV12(
              CustomButton,
              {
                className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
                type: "submit",
                name: "_action",
                value: "createEmptyInputForm",
                children: [
                  /* @__PURE__ */ jsxDEV12("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV12("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/dashboard.db_struct.tsx",
                    lineNumber: 364,
                    columnNumber: 37
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/dashboard.db_struct.tsx",
                    lineNumber: 363,
                    columnNumber: 33
                  }, this),
                  "Add InputForm"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboard.db_struct.tsx",
                lineNumber: 357,
                columnNumber: 29
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 355,
            columnNumber: 27
          }, this) : state === "searchForm" ? /* @__PURE__ */ jsxDEV12(Form6, { method: "post", children: [
            /* @__PURE__ */ jsxDEV12("input", { type: "hidden", name: "cnt", defaultValue: searchForms.length + 1 }, void 0, !1, {
              fileName: "app/routes/dashboard.db_struct.tsx",
              lineNumber: 371,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV12(
              CustomButton,
              {
                className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
                type: "submit",
                name: "_action",
                value: "createEmptySearchForm",
                children: [
                  /* @__PURE__ */ jsxDEV12("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV12("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/dashboard.db_struct.tsx",
                    lineNumber: 379,
                    columnNumber: 41
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/dashboard.db_struct.tsx",
                    lineNumber: 378,
                    columnNumber: 37
                  }, this),
                  "Add SearchForm"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboard.db_struct.tsx",
                lineNumber: 372,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 370,
            columnNumber: 31
          }, this) : null,
          /* @__PURE__ */ jsxDEV12(Form6, { method: "post", children: /* @__PURE__ */ jsxDEV12(
            CustomButton,
            {
              className: "bg-blue-500 hover:shadow-blue-100",
              type: "submit",
              name: "_action",
              value: "generateStructDb",
              disabled: isRestruct,
              onClick: handleRestruct,
              children: isRestruct ? /* @__PURE__ */ jsxDEV12(Fragment6, { children: [
                /* @__PURE__ */ jsxDEV12(Spinner6, { className: "w-4 h-4" }, void 0, !1, {
                  fileName: "app/routes/dashboard.db_struct.tsx",
                  lineNumber: 396,
                  columnNumber: 33
                }, this),
                "Restructuring..."
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.db_struct.tsx",
                lineNumber: 395,
                columnNumber: 31
              }, this) : /* @__PURE__ */ jsxDEV12(Fragment6, { children: [
                /* @__PURE__ */ jsxDEV12("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV12("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" }, void 0, !1, {
                  fileName: "app/routes/dashboard.db_struct.tsx",
                  lineNumber: 401,
                  columnNumber: 37
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard.db_struct.tsx",
                  lineNumber: 400,
                  columnNumber: 33
                }, this),
                "Restruct Database"
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.db_struct.tsx",
                lineNumber: 399,
                columnNumber: 31
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.db_struct.tsx",
              lineNumber: 386,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard.db_struct.tsx",
            lineNumber: 385,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 336,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-row h-full w-full", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: "bg-white p-4 mr-5 w-1/3 border shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ jsxDEV12(
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
          fileName: "app/routes/dashboard.db_struct.tsx",
          lineNumber: 410,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 409,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "bg-white w-full border p-4 shadow-blue-gray-700 shadow-md overflow-auto", children: state === "inputForm" && inputForm ? /* @__PURE__ */ jsxDEV12(InputFormForm, { inputForm, groups }, void 0, !1, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 424,
        columnNumber: 27
      }, this) : state === "searchForm" && searchForm ? /* @__PURE__ */ jsxDEV12(SearchFormForm, { searchForm, inputFields }, void 0, !1, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 426,
        columnNumber: 31
      }, this) : state === "dictionary" && dictionary ? /* @__PURE__ */ jsxDEV12(DictionaryForm, { dictionary }, void 0, !1, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 428,
        columnNumber: 35
      }, this) : state === "group" && group ? /* @__PURE__ */ jsxDEV12(GroupForm, { group, dicts: dictionaries }, void 0, !1, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 430,
        columnNumber: 39
      }, this) : null }, void 0, !1, {
        fileName: "app/routes/dashboard.db_struct.tsx",
        lineNumber: 422,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.db_struct.tsx",
      lineNumber: 408,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.db_struct.tsx",
    lineNumber: 331,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.users.tsx
var dashboard_users_exports = {};
__export(dashboard_users_exports, {
  action: () => action3,
  default: () => Users,
  loader: () => loader3
});
import MaterialTailwind8 from "@material-tailwind/react";
import { Prisma as Prisma3 } from "@prisma/client";
import { json as json3, redirect as redirect3 } from "@remix-run/node";
import { useActionData as useActionData3, useFetcher as useFetcher6, useLoaderData as useLoaderData3, useNavigate as useNavigate3 } from "@remix-run/react";
import moment2 from "moment";

// app/ui/dialogs/user_dialog.tsx
import MaterialTailwind7 from "@material-tailwind/react";
import { Form as Form7 } from "@remix-run/react";
import moment from "moment";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var { Dialog: Dialog2, Card: Card2, CardBody: CardBody2, CardFooter: CardFooter2 } = MaterialTailwind7;
function UserDialog({ isNew, handleOpen, open, user, roles, departments, errors }) {
  return /* @__PURE__ */ jsxDEV13(
    Dialog2,
    {
      placeholder: "",
      size: "sm",
      open,
      handler: handleOpen,
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV13(Card2, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV13(CardBody2, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV13(
            Form7,
            {
              id: "userForm",
              className: "flex flex-col gap-3",
              method: "post",
              children: [
                /* @__PURE__ */ jsxDEV13("input", { type: "hidden", name: "id", defaultValue: user?.id ? user.id : "" }, void 0, !1, {
                  fileName: "app/ui/dialogs/user_dialog.tsx",
                  lineNumber: 37,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV13(
                  CustomInput,
                  {
                    id: "user_is_active",
                    type: "checkbox",
                    name: "isActive",
                    title: "is Active: ",
                    defaultChecked: user?.isActive
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 38,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV13(
                  CustomInput,
                  {
                    id: "user_login",
                    type: "text",
                    name: "login",
                    title: "Login: ",
                    defaultValue: user?.login,
                    required: !0,
                    readOnly: !isNew
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 45,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV13(
                  CustomInput,
                  {
                    id: "user_password",
                    type: "password",
                    name: "password",
                    title: "Password: ",
                    defaultValue: user?.password,
                    required: !1
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 54,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV13(
                  CustomInput,
                  {
                    id: "user_firsName",
                    type: "text",
                    name: "firstName",
                    title: "First Name: ",
                    defaultValue: user?.firstName ? user.firstName : "",
                    required: !1
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 62,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV13(
                  CustomInput,
                  {
                    id: "user_lastName",
                    type: "text",
                    name: "lastName",
                    title: "Last Name: ",
                    defaultValue: user?.lastName ? user.lastName : "",
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
                /* @__PURE__ */ jsxDEV13(
                  CustomInput,
                  {
                    id: "user_middleName",
                    type: "text",
                    name: "middleName",
                    title: "Middle Name: ",
                    defaultValue: user?.middleName ? user.middleName : "",
                    required: !1
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 78,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV13(
                  CustomSelect,
                  {
                    id: "user_department",
                    name: "departmentId",
                    title: "Department: ",
                    defaultValue: user?.departmentId ? user.departmentId : "",
                    required: !1,
                    children: [
                      /* @__PURE__ */ jsxDEV13("option", { children: "-" }, void 0, !1, {
                        fileName: "app/ui/dialogs/user_dialog.tsx",
                        lineNumber: 93,
                        columnNumber: 29
                      }, this),
                      departments.map((item) => /* @__PURE__ */ jsxDEV13("option", { value: item.id, children: item.title }, void 0, !1, {
                        fileName: "app/ui/dialogs/user_dialog.tsx",
                        lineNumber: 95,
                        columnNumber: 33
                      }, this))
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 86,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV13(
                  CustomInput,
                  {
                    id: "user_expiredPwd",
                    type: "date",
                    name: "expiredPwd",
                    title: "Expired Password: ",
                    defaultValue: moment(user?.expiredPwd).format("YYYY-MM-DD"),
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 98,
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
              lineNumber: 31,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13("span", { className: "text-red-500 text-sm", children: errors }, void 0, !1, {
            fileName: "app/ui/dialogs/user_dialog.tsx",
            lineNumber: 107,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 30,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV13(CardFooter2, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV13(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
              form: "userForm",
              type: "submit",
              name: "_action",
              value: isNew ? "createUser" : "updateUser",
              children: "Save"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/dialogs/user_dialog.tsx",
              lineNumber: 110,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
              onClick: handleOpen,
              children: "Close"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/dialogs/user_dialog.tsx",
              lineNumber: 119,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/ui/dialogs/user_dialog.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/ui/dialogs/user_dialog.tsx",
      lineNumber: 22,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.users.tsx
import { useEffect as useEffect3, useState as useState3 } from "react";
import { Fragment as Fragment7, jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var { Spinner: Spinner7 } = MaterialTailwind8;
async function loader3({
  request
}) {
  let roles = await api_default.users.getRoles(), departments = await api_default.users.getDepartments(), users = await api_default.users.getUsers(), url = new URL(request.url), userId = url.searchParams.get("userId"), isNew = url.searchParams.get("new"), user;
  return isNew ? user = {} : userId && (user = await api_default.users.getUser(Number(userId)), user = { ...user, password: void 0 }), json3({ user, users, roles, departments, isNew });
}
async function action3({
  request
}) {
  let errors = null, formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  if (_action === "createUser") {
    let createUser = {
      id: Number(values.id),
      isActive: Boolean(values.isActive),
      login: String(values.login),
      password: String(values.password),
      firstName: String(values.firstName),
      lastName: String(values.lastName),
      middleName: String(values.middleName),
      departmentId: Number(values.departmentId),
      expiredPwd: new Date(String(values.expiredPwd)),
      createdAt: null,
      updatedAt: null
    };
    try {
      return await api_default.users.createUser(createUser), redirect3("/dashboard/users");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "updateUser") {
    let userId = Number(values.id), updateUser = {
      id: Number(values.id),
      isActive: Boolean(values.isActive),
      login: String(values.login),
      password: String(values.password),
      firstName: String(values.firstName),
      lastName: String(values.lastName),
      middleName: String(values.middleName),
      departmentId: Number(values.departmentId),
      expiredPwd: new Date(String(values.expiredPwd)),
      createdAt: null,
      updatedAt: null
    };
    try {
      return await api_default.users.updateUser(userId, updateUser), redirect3("/dashboard/users");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "deleteUser") {
    let userId = Number(values.id);
    try {
      return await api_default.users.deleteUser(userId), redirect3("/dashboard/users");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  return json3({ errors });
}
function Users() {
  let [open, setOpen] = useState3(!1), { user, users, roles, departments, isNew } = useLoaderData3(), actionData = useActionData3(), navigate = useNavigate3(), fetcher = useFetcher6(), isDeleting = fetcher.state !== "idle";
  useEffect3(() => {
    setOpen(!!user);
  }, [user]);
  let handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV14("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ jsxDEV14(
      UserDialog,
      {
        isNew: !!isNew,
        handleOpen: () => navigate("/dashboard/users"),
        open,
        user: user || null,
        roles,
        departments,
        errors: actionData?.errors
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard.users.tsx",
        lineNumber: 124,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: "Users" }, void 0, !1, {
      fileName: "app/routes/dashboard.users.tsx",
      lineNumber: 133,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV14(
      "div",
      {
        className: "flex items-center gap-3",
        children: /* @__PURE__ */ jsxDEV14(
          CustomButton,
          {
            className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
            onClick: () => {
              navigate("/dashboard/users?new=true");
            },
            children: [
              /* @__PURE__ */ jsxDEV14("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV14("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                fileName: "app/routes/dashboard.users.tsx",
                lineNumber: 142,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.users.tsx",
                lineNumber: 141,
                columnNumber: 21
              }, this),
              "New User"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard.users.tsx",
            lineNumber: 137,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard.users.tsx",
        lineNumber: 134,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14(
      "table",
      {
        className: "border-2 border-blue-gray-700",
        children: [
          /* @__PURE__ */ jsxDEV14(
            "thead",
            {
              className: "bg-blue-gray-400 text-white text-center",
              children: /* @__PURE__ */ jsxDEV14("tr", { children: [
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 154,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "IsActive" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 155,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Login" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 156,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "First Name" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 157,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Last Name" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 158,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Middle Name" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 159,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Department" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 160,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Expired Password" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 161,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "created" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 162,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "updated" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 163,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV14("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 164,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.users.tsx",
                lineNumber: 153,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.users.tsx",
              lineNumber: 150,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV14("tbody", { children: users.map((user2, index) => /* @__PURE__ */ jsxDEV14(
            "tr",
            {
              children: [
                /* @__PURE__ */ jsxDEV14("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 173,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV14(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                    onClick: () => navigate(`/dashboard/users?userId=${user2.id}`),
                    children: user2.isActive ? "Yes" : "No"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard.users.tsx",
                    lineNumber: 174,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV14(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                    onClick: () => navigate(`/dashboard/users?userId=${user2.id}`),
                    children: user2.login
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard.users.tsx",
                    lineNumber: 179,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV14(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                    onClick: () => navigate(`/dashboard/users?userId=${user2.id}`),
                    children: user2.firstName
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard.users.tsx",
                    lineNumber: 185,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV14(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                    onClick: () => navigate(`/dashboard/users?userId=${user2.id}`),
                    children: user2.lastName
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard.users.tsx",
                    lineNumber: 191,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV14(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                    onClick: () => navigate(`/dashboard/users?userId=${user2.id}`),
                    children: user2.middleName
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard.users.tsx",
                    lineNumber: 197,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV14("td", { className: "p-1 text-sm border border-blue-gray-700", children: departments.find((item) => item.id === user2.departmentId)?.title }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 203,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV14("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment2(user2.expiredPwd).format("DD.MM.YYYY") }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 204,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV14("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment2(user2.createdAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 205,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV14("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment2(user2.updatedAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 206,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV14("td", { className: "p-1 text-sm border border-blue-gray-700 flex justify-center", children: /* @__PURE__ */ jsxDEV14(fetcher.Form, { method: "post", children: [
                  /* @__PURE__ */ jsxDEV14("input", { type: "hidden", name: "id", defaultValue: user2?.id ? user2.id : "" }, void 0, !1, {
                    fileName: "app/routes/dashboard.users.tsx",
                    lineNumber: 209,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV14(
                    CustomButton,
                    {
                      className: "bg-red-500 hover:shadow-red-100",
                      disabled: isDeleting,
                      onClick: handleDelete,
                      type: "submit",
                      name: "_action",
                      value: "deleteUser",
                      children: isDeleting ? /* @__PURE__ */ jsxDEV14(Fragment7, { children: [
                        /* @__PURE__ */ jsxDEV14(Spinner7, { className: "w-4 h-4" }, void 0, !1, {
                          fileName: "app/routes/dashboard.users.tsx",
                          lineNumber: 220,
                          columnNumber: 49
                        }, this),
                        "Deleting..."
                      ] }, void 0, !0, {
                        fileName: "app/routes/dashboard.users.tsx",
                        lineNumber: 219,
                        columnNumber: 47
                      }, this) : /* @__PURE__ */ jsxDEV14(Fragment7, { children: [
                        /* @__PURE__ */ jsxDEV14("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV14("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                          fileName: "app/routes/dashboard.users.tsx",
                          lineNumber: 225,
                          columnNumber: 53
                        }, this) }, void 0, !1, {
                          fileName: "app/routes/dashboard.users.tsx",
                          lineNumber: 224,
                          columnNumber: 49
                        }, this),
                        "Delete"
                      ] }, void 0, !0, {
                        fileName: "app/routes/dashboard.users.tsx",
                        lineNumber: 223,
                        columnNumber: 47
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/dashboard.users.tsx",
                      lineNumber: 210,
                      columnNumber: 37
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 208,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard.users.tsx",
                  lineNumber: 207,
                  columnNumber: 29
                }, this)
              ]
            },
            user2.id,
            !0,
            {
              fileName: "app/routes/dashboard.users.tsx",
              lineNumber: 169,
              columnNumber: 25
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/dashboard.users.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboard.users.tsx",
        lineNumber: 147,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.users.tsx",
    lineNumber: 123,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard,
  loader: () => loader4
});
import { Link as Link2, Outlet as Outlet2, json as json4, useLoaderData as useLoaderData4 } from "@remix-run/react";
import { useState as useState4 } from "react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
async function loader4() {
  let dictionaries = await api_default.db.getDictionaries(), inputForms = await api_default.db.getInputForms(), searchForms = await api_default.db.getSearchForms();
  return json4({
    dictionaries,
    inputForms,
    searchForms
  });
}
function dashboard() {
  let [docs, setDocs] = useState4({}), data = useLoaderData4(), context = {
    ...data,
    docs,
    setDocs
  };
  return /* @__PURE__ */ jsxDEV15("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ jsxDEV15("h1", { className: "text-3xl text-amber-700 font-bold", children: "DbClient" }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15("p", { children: docs.ids?.map((id) => /* @__PURE__ */ jsxDEV15(Link2, { className: "text-blue-500 underline hover:cursor-pointer p-1", to: `/dashboard/enter_data/${docs.formId}?docId=${id}`, children: id }, id, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 39,
      columnNumber: 40
    }, this)) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15("ul", { className: "text-blue-500 text-bold", children: [
      /* @__PURE__ */ jsxDEV15("li", { children: [
        "Enter Data",
        /* @__PURE__ */ jsxDEV15("ul", { className: "ml-4", children: data.inputForms.map((item) => /* @__PURE__ */ jsxDEV15("li", { children: /* @__PURE__ */ jsxDEV15(Link2, { to: `/dashboard/enter_data/${item.id}`, children: [
          "Form: ",
          item.title
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 45,
          columnNumber: 47
        }, this) }, item.id, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 45,
          columnNumber: 29
        }, this)) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV15("li", { children: [
        "Search Data",
        /* @__PURE__ */ jsxDEV15("ul", { className: "ml-4", children: data.searchForms.map((item) => /* @__PURE__ */ jsxDEV15("li", { children: /* @__PURE__ */ jsxDEV15(Link2, { to: `/dashboard/search_data/${item.id}`, children: [
          "Form: ",
          item.title
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 54,
          columnNumber: 47
        }, this) }, item.id, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 54,
          columnNumber: 29
        }, this)) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV15("li", { children: [
        "Service",
        /* @__PURE__ */ jsxDEV15("ul", { className: "ml-4", children: [
          /* @__PURE__ */ jsxDEV15("li", { children: /* @__PURE__ */ jsxDEV15(Link2, { to: "db_struct", children: "Db Structure" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 62,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 62,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV15("li", { children: /* @__PURE__ */ jsxDEV15(Link2, { to: "users", children: "Users" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 63,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 63,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV15("li", { children: "Help" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15(Outlet2, { context }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV16("div", { children: /* @__PURE__ */ jsxDEV16(Link3, { to: "/dashboard", children: "Dashboard" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6WOD7NPS.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-DGLILCEK.js", "/build/_shared/chunk-TJ4YKIVD.js", "/build/_shared/chunk-Q6LMBPEP.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5UH6OGIQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WDIKY46K.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-36FIJDQZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.db_struct": { id: "routes/dashboard.db_struct", parentId: "routes/dashboard", path: "db_struct", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.db_struct-2RJ2BBLC.js", imports: ["/build/_shared/chunk-CCQ6AUXW.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.enter_data.$formId": { id: "routes/dashboard.enter_data.$formId", parentId: "routes/dashboard", path: "enter_data/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.enter_data.$formId-AIEHHZY4.js", imports: ["/build/_shared/chunk-ZPTKG4AS.js", "/build/_shared/chunk-CCQ6AUXW.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.users": { id: "routes/dashboard.users", parentId: "routes/dashboard", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.users-YOVRUVA6.js", imports: ["/build/_shared/chunk-ZPTKG4AS.js", "/build/_shared/chunk-CCQ6AUXW.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "0347e665", hmr: { runtime: "/build/_shared/chunk-Q6LMBPEP.js", timestamp: 1708694562884 }, url: "/build/manifest-0347E665.js" };

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
  "routes/dashboard.enter_data.$formId": {
    id: "routes/dashboard.enter_data.$formId",
    parentId: "routes/dashboard",
    path: "enter_data/:formId",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_enter_data_formId_exports
  },
  "routes/dashboard.db_struct": {
    id: "routes/dashboard.db_struct",
    parentId: "routes/dashboard",
    path: "db_struct",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_db_struct_exports
  },
  "routes/dashboard.users": {
    id: "routes/dashboard.users",
    parentId: "routes/dashboard",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_users_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
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

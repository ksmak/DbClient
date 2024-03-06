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
import { PassThrough } from "stream";
import {
  createReadableStreamFromReadable
} from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createInstance } from "i18next";

// app/i18next.server.ts
import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import { RemixI18Next } from "remix-i18next/server";

// app/i18n.ts
var i18n_default = {
  // This is the list of languages your application supports
  supportedLngs: ["ru", "kk"],
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: "ru",
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: "common"
};

// app/i18next.server.ts
var i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18n_default.supportedLngs,
    fallbackLanguage: i18n_default.fallbackLng
  },
  // This is the configuration for i18next used
  // when translating messages server-side only
  i18next: {
    ...i18n_default,
    backend: {
      loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json")
    }
  },
  // The i18next plugins you want RemixI18next to use for `i18n.getFixedT` inside loaders and actions.
  // E.g. The Backend plugin for loading translations from the file system
  // Tip: You could pass `resources` to the `i18next` configuration and avoid a backend here
  plugins: [Backend]
}), i18next_server_default = i18next;

// app/entry.server.tsx
import { I18nextProvider, initReactI18next } from "react-i18next";
import Backend2 from "i18next-fs-backend";
import { resolve as resolve2 } from "node:path";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = isbot(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady", instance = createInstance(), lng = await i18next_server_default.getLocale(request), ns = i18next_server_default.getRouteNamespaces(remixContext);
  return await instance.use(initReactI18next).use(Backend2).init({
    ...i18n_default,
    // spread the configuration
    lng,
    // The locale we detected above
    ns,
    // The namespaces the routes about to render wants to use
    backend: { loadPath: resolve2("./public/locales/{{lng}}/{{ns}}.json") }
  }), new Promise((resolve3, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(I18nextProvider, { i18n: instance, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      {
        [callbackName]: () => {
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve3(
            new Response(stream, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
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
  handle: () => handle,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData
} from "@remix-run/react";
import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SGUIJSGJ.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
async function loader({ request }) {
  let locale = await i18next_server_default.getLocale(request);
  return json({ locale });
}
var handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common"
};
function App() {
  let { locale } = useLoaderData(), { i18n } = useTranslation();
  return useChangeLanguage(locale), /* @__PURE__ */ jsxDEV2("html", { lang: locale, dir: i18n.dir(), children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-blue-gray-50", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.search_data.$formId.tsx
var dashboard_search_data_formId_exports = {};
__export(dashboard_search_data_formId_exports, {
  action: () => action,
  default: () => SearchData,
  loader: () => loader2
});
import { Prisma } from "@prisma/client";
import { json as json2 } from "@remix-run/node";
import { useActionData, useLoaderData as useLoaderData2, useOutletContext } from "@remix-run/react";
import { useState as useState2 } from "react";

// app/components/api/instance.ts
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient(), instance_default = prisma;

// app/components/api/users.ts
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

// app/components/api/db.ts
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
            },
            include: {
              field: !0
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
        },
        include: {
          field: !0
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

// app/components/api/doc.ts
function DocModule(prisma2) {
  return {
    async getDoc(sid, inputForm) {
      let tables = {};
      for (let group of inputForm.groups) {
        let fields = { id: null, sid: null, lst: 0 };
        for (let field of group.fields)
          fields[`f${field.id}`] = "";
        tables[`tbl_${group.id}`] = [{ ...fields }];
      }
      let doc = {
        id: null,
        isActive: !0,
        startDate: null,
        endDate: null,
        createdAt: null,
        updatedAt: null,
        createdUserId: null,
        updatedUserId: null,
        ...tables
      };
      if (sid) {
        let result = await prisma2.doc.findFirst({
          where: {
            id: sid,
            isActive: !0
          }
        });
        result && (doc.id = result.id, doc.isActive = result.isActive, doc.startDate = result.startDate, doc.endDate = result.endDate, doc.createdAt = result.createdAt, doc.updatedAt = result.updatedAt, doc.createdUserId = result.createdUserId, doc.updatedUserId = result.updatedUserId);
      }
      for (let group of inputForm.groups) {
        let tbl = `tbl_${group.id}`;
        if (doc?.id) {
          let sql = "SELECT id";
          for (let field of group.fields) {
            let fieldName = `f${field.id}`;
            switch (field.fieldType) {
              case "DATE":
                sql = sql + `, to_char(${fieldName}, 'DD.MM.YYYY') ${fieldName}`;
                break;
              case "TIME":
                sql = sql + `, to_char(f${fieldName}, 'HH:MI') ${fieldName}`;
                break;
              default:
                sql = sql + `, ${fieldName}`;
            }
          }
          sql = sql + ` FROM ${tbl} WHERE sid = ${sid}`;
          let data = await prisma2.$queryRawUnsafe(`${sql}`);
          doc[tbl] = data;
        }
      }
      return doc;
    },
    async createDoc(userId, inputForm, doc) {
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
        let tbl = `tbl_${group.id}`;
        for (let rec of doc[tbl]) {
          let flds = "sid", vals = `${sid}`;
          for (let field of group.fields) {
            let fieldName = `f${field.id}`;
            flds = flds + `, ${fieldName}`;
            let fieldVal = rec[fieldName];
            switch (field.fieldType) {
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
          }
          tr.push(prisma2.$executeRawUnsafe(`INSERT INTO ${tbl}(${flds}) VALUES(${vals})`));
        }
      }
      return prisma2.$transaction(tr);
    },
    updateDoc(userId, inputForm, doc) {
      let tr = [];
      tr.push(
        prisma2.doc.update({
          where: {
            id: doc.id
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
        let tbl = `tbl_${group.id}`;
        tr.push(prisma2.$executeRawUnsafe(`DELETE FROM ${tbl} WHERE sid=${doc.id}`));
        for (let rec of doc[tbl]) {
          let flds = "sid", vals = `${doc.id}`;
          for (let field of group.fields) {
            let fieldName = `f${field.id}`;
            flds = flds + `, ${fieldName}`;
            let fieldVal = rec[fieldName];
            switch (field.fieldType) {
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
          }
          tr.push(prisma2.$executeRawUnsafe(`INSERT INTO ${tbl}(${flds}) VALUES(${vals})`));
        }
      }
      return prisma2.$transaction(tr);
    },
    findDoc(inputForm, doc) {
      let sf = "", select = "SELECT distinct doc.id", from = ' FROM "Doc" doc', where = ' WHERE doc."isActive" is true', tbls = [];
      for (let group of inputForm.groups) {
        let tbl = `tbl_${group.id}`;
        if (!group.isMulty)
          for (let field of group.fields) {
            let fieldName = `f${field.id}`, fieldVal = doc[tbl][0][fieldName];
            if (!["", "-"].includes(fieldVal))
              switch (tbls.includes(tbl) || (tbls.push(tbl), where = where + ` AND doc.id = ${tbl}.sid`, from = from + `, ${tbl}`), field.fieldType) {
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
          }
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
    },
    searchDoc(conditions) {
      let sf = "", select = "SELECT distinct doc.id", from = ' FROM "Doc" doc', where = ' WHERE doc."isActive" is true', tbls = [], val1 = "", val2 = "", conds = "", sids = "";
      for (let cond of conditions)
        if (cond.log)
          conds = conds + ` ${cond.log}`;
        else {
          let tbl = `tbl_${cond.field?.field.groupId}`, fieldName = `f${cond.field?.fieldId}`;
          switch (tbls.includes(tbl) || (tbls.push(tbl), sids = sids + ` AND doc.id = ${tbl}.sid`, from = from + `, ${tbl}`), cond.field?.field.fieldType) {
            case "TEXT":
            case "CYRILLIC":
            case "DATE":
            case "TIME":
            case "FILE":
              val1 = `'${cond.val1}'`, val2 = `'${cond.val2}'`;
              break;
            default:
              val1 = `${cond.val1}`, val2 = `${cond.val2}`;
              break;
          }
          switch (cond.oper) {
            case "between":
              conds = conds + ` ${fieldName} BETWEEN ${val2} AND ${val2}`;
              break;
            case "=":
            case ">=":
            case ">":
            case "<":
            case "<=":
            case "<>":
              conds = conds + ` ${fieldName} ${cond.oper} ${val1}`;
              break;
            case "=()":
              conds = conds + ` ${fieldName} IS NULL`;
              break;
            case "<>()":
              conds = conds + ` ${fieldName} IS NOT NULL`;
              break;
          }
        }
      return sf = select + from + where + sids + " AND " + conds, prisma2.$queryRawUnsafe(`${sf}`);
    }
  };
}

// app/components/api/index.ts
var api_default = {
  users: UsersModule(instance_default),
  db: DbModule(instance_default),
  doc: DocModule(instance_default)
};

// app/components/UI/elements/error_message.tsx
import MaterialTailwind from "@material-tailwind/react";
import { useState } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var { Alert } = MaterialTailwind;
function ErrorMessage({ errors }) {
  let [open, setOpen] = useState(!1);
  return /* @__PURE__ */ jsxDEV3(
    Alert,
    {
      className: "text-white bg-red-500",
      open: errors !== void 0,
      onClose: () => setOpen(!1),
      children: errors || ""
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/elements/error_message.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/dlg_condition.tsx
import MaterialTailwind2 from "@material-tailwind/react";

// app/components/UI/elements/custom_button.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function CustomButton({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV4(
    "button",
    {
      ...props,
      className: `text-white text-xs py-1.5 px-3.5 flex items-center gap-2 rounded-md hover:cursor-pointer hover:shadow-lg font-semibold uppercase ${className}`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/elements/custom_button.tsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/elements/custom_input.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function CustomInput({ className, subClass, id, title, errors, children, ...props }) {
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
            fileName: "app/components/UI/elements/custom_input.tsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV5(
            "input",
            {
              id,
              className: `${subClass} font-mono font-bold text-sm border-2 p-1 focus:outline-blue-gray-500`,
              ...props,
              children
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/elements/custom_input.tsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5("span", { className: "text-sm text-red-500 h-4", children: errors }, void 0, !1, {
            fileName: "app/components/UI/elements/custom_input.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/elements/custom_input.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/elements/custom_input.tsx",
      lineNumber: 14,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/dlg_condition.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var { Dialog, Card, CardBody, CardFooter } = MaterialTailwind2;
function ConditionDialog({
  condIndex,
  cond,
  setCond,
  show,
  setShow,
  conditions,
  setConditions
}) {
  let handlerOK = () => {
    if (condIndex !== null) {
      let conds = [...conditions];
      conds.splice(condIndex, 1, cond), setConditions(conds);
    } else
      conditions.length > 0 ? setConditions([...conditions, { log: "AND" }, cond]) : setConditions([...conditions, cond]);
    setShow(!1);
  };
  return /* @__PURE__ */ jsxDEV6(
    Dialog,
    {
      placeholder: "",
      size: "md",
      open: show,
      handler: () => setShow(!1),
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV6(Card, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV6(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center gap-1 w-full", children: [
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "between" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "between" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: "\u0421..\u041F\u041E"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 53,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "=" }),
                children: "="
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 60,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === ">" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: ">" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: ">"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 66,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === ">=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: ">=" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: ">="
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 73,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "<" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "<" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: "<"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 80,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "<=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "<=" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: "<="
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 87,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "<>" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "<>" }),
                children: "<>"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 94,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "=()" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "=()" }),
                children: "=()"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 100,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "<>()" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "<>()" }),
                children: "<>()"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 106,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 52,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "text-sm font-bold text-blue-gray-600", children: cond.field?.title }, void 0, !1, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 113,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { children: cond.oper === "between" ? /* @__PURE__ */ jsxDEV6("div", { children: [
            /* @__PURE__ */ jsxDEV6(
              CustomInput,
              {
                id: "val1",
                type: "text",
                name: "val1",
                title: "Val1: ",
                value: cond.val1,
                onChange: (e) => setCond({ ...cond, val1: e.target.value })
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 117,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomInput,
              {
                id: "val2",
                type: "text",
                name: "val2",
                title: "Val2: ",
                value: cond.val2,
                onChange: (e) => setCond({ ...cond, val2: e.target.value })
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 125,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 116,
            columnNumber: 31
          }, this) : /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6(
            CustomInput,
            {
              id: "val1",
              type: "text",
              name: "val1",
              title: "Val1: ",
              value: cond.val1,
              onChange: (e) => setCond({ ...cond, val1: e.target.value })
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
              lineNumber: 135,
              columnNumber: 33
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 134,
            columnNumber: 31
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 114,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV6(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-green-100",
              onClick: () => handlerOK(),
              children: "OK"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
              lineNumber: 147,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-green-100",
              onClick: () => setShow(!1),
              children: "Cancel"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
              lineNumber: 153,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 146,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
      lineNumber: 43,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/buttons/btn_search.tsx
import { useSubmit } from "@remix-run/react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function ButtonSearch({
  userId,
  inputFormId,
  conditions
}) {
  let { t } = useTranslation2(), submit = useSubmit(), handleSearch = () => {
    submit({
      _action: "searchDocument",
      _user: userId,
      _inputFormId: inputFormId,
      json: JSON.stringify(conditions)
    }, {
      method: "post"
    });
  };
  return /* @__PURE__ */ jsxDEV7(
    CustomButton,
    {
      className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
      onClick: () => handleSearch(),
      children: [
        /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, !1, {
          fileName: "app/components/UI/widgets/search_data/buttons/btn_search.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/search_data/buttons/btn_search.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        t("search")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/search_data/buttons/btn_search.tsx",
      lineNumber: 31,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/buttons/buttons.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Buttons({ userId, inputFormId, conditions }) {
  return /* @__PURE__ */ jsxDEV8(
    "div",
    {
      className: "flex items-center gap-3",
      children: /* @__PURE__ */ jsxDEV8(
        ButtonSearch,
        {
          userId,
          inputFormId,
          conditions
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/search_data/buttons/buttons.tsx",
          lineNumber: 15,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/search_data/buttons/buttons.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/elements/panel.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Panel({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV9(
    "div",
    {
      className: `${className} bg-white border p-1 shadow-blue-gray-700 shadow-md`,
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/elements/panel.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/list_fields.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function ListFields({ searchForm, fld, setFld, handleOpenCondition }) {
  return /* @__PURE__ */ jsxDEV10("div", { className: "w-1/3", children: searchForm && searchForm.fields.map((field) => /* @__PURE__ */ jsxDEV10(
    "div",
    {
      className: `${fld?.id === field.id ? "bg-blue-gray-100" : ""} hover:cursor-pointer hover:bg-blue-gray-100 select-none`,
      onClick: () => setFld(field),
      onDoubleClick: () => handleOpenCondition({
        oper: ["TEXT", "CYRILLIC", "DICT"].includes(field.field.fieldType) ? "=" : "between",
        field
      }, null),
      children: field.title
    },
    field.id,
    !1,
    {
      fileName: "app/components/UI/widgets/search_data/list_fields.tsx",
      lineNumber: 16,
      columnNumber: 17
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/UI/widgets/search_data/list_fields.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/search_data/view.tsx
import { useSubmit as useSubmit2 } from "@remix-run/react";

// app/components/UI/widgets/search_data/cond_buttons.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function ConditionButtons({
  handleAddCondition,
  handleDeleteCondition,
  handleEraseConditions,
  handleBktBoth,
  handleBktLeft,
  handleBktRight,
  handleReplaceOrAnd
}) {
  return /* @__PURE__ */ jsxDEV11("div", { className: "self-center flex flex-col justify-center gap-1", children: [
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleAddCondition(),
        children: "Add"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleDeleteCondition(),
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleEraseConditions(),
        children: "Erase"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 36,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleBktBoth(),
        children: "()"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 42,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleBktLeft(),
        children: "("
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 48,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleBktRight(),
        children: ")"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 54,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleReplaceOrAnd("OR"),
        children: "OR"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 60,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleReplaceOrAnd("AND"),
        children: "AND"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 66,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/search_data/list_conditions.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function ListConditions({
  conditions,
  condIndex,
  setCondIndex,
  handleOpenCondition
}) {
  return /* @__PURE__ */ jsxDEV12("div", { className: "w-2/3", children: conditions.map((c, index) => /* @__PURE__ */ jsxDEV12(
    "div",
    {
      className: `${condIndex === index ? "bg-blue-gray-100" : ""} hover:cursor-pointer`,
      onClick: () => setCondIndex(index),
      children: c.log ? /* @__PURE__ */ jsxDEV12(
        "div",
        {
          children: [
            "---- ",
            c.log,
            " ----"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
          lineNumber: 26,
          columnNumber: 27
        },
        this
      ) : /* @__PURE__ */ jsxDEV12(
        "div",
        {
          onDoubleClick: () => handleOpenCondition(c, index),
          children: [
            c.field?.title,
            " ",
            c.oper,
            " ",
            c.val1,
            " ",
            c.val2
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
          lineNumber: 29,
          columnNumber: 27
        },
        this
      )
    },
    index,
    !1,
    {
      fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
      lineNumber: 20,
      columnNumber: 17
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/search_data/view.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function SearchDataView({
  errors,
  condIndex,
  setCondIndex,
  cond,
  setCond,
  show,
  setShow,
  conditions,
  setConditions,
  userId,
  inputFormId,
  searchForm,
  fld,
  setFld
}) {
  let submit = useSubmit2(), handleOpenCondition = (cond2, condIndex2 = null) => {
    setCondIndex(condIndex2), setCond(cond2), setShow(!0);
  };
  return /* @__PURE__ */ jsxDEV13("div", { className: "h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5", children: [
    /* @__PURE__ */ jsxDEV13(ErrorMessage, { errors }, void 0, !1, {
      fileName: "app/components/UI/widgets/search_data/view.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV13(
      ConditionDialog,
      {
        condIndex,
        cond,
        setCond,
        show,
        setShow,
        conditions,
        setConditions
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/view.tsx",
        lineNumber: 113,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV13(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ jsxDEV13(
        Buttons,
        {
          userId,
          inputFormId,
          conditions
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/search_data/view.tsx",
          lineNumber: 123,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ jsxDEV13(
          ListFields,
          {
            searchForm,
            fld,
            setFld,
            handleOpenCondition
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/search_data/view.tsx",
            lineNumber: 129,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          ConditionButtons,
          {
            handleAddCondition: () => {
              fld && handleOpenCondition({
                oper: ["TEXT", "CYRILLIC", "DICT"].includes(fld.field.fieldType) ? "=" : "between",
                field: fld
              });
            },
            handleDeleteCondition: () => {
              if (condIndex !== null) {
                let conds = [...conditions];
                conds[condIndex].log ? conds.splice(condIndex, 1) : conds.splice(condIndex - 1, 2), setConditions(conds);
              }
            },
            handleEraseConditions: () => {
              setConditions([]);
            },
            handleBktBoth: () => {
              conditions.length > 0 && setConditions([
                { log: "(" },
                ...conditions,
                { log: ")" }
              ]);
            },
            handleBktLeft: () => {
              if (condIndex !== null && !conditions[condIndex].log) {
                let conds = [...conditions];
                conds.splice(condIndex, 0, { log: "(" }), setConditions(conds);
              }
            },
            handleBktRight: () => {
              if (condIndex !== null && !conditions[condIndex].log) {
                let conds = [...conditions];
                conds.splice(condIndex + 1, 0, { log: ")" }), setConditions(conds);
              }
            },
            handleReplaceOrAnd: (log) => {
              if (condIndex !== null && ["OR", "AND"].includes(String(conditions[condIndex].log))) {
                let conds = [...conditions];
                conds.splice(condIndex, 1, { log }), setConditions(conds);
              }
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/search_data/view.tsx",
            lineNumber: 135,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          ListConditions,
          {
            conditions,
            condIndex,
            setCondIndex,
            handleOpenCondition
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/search_data/view.tsx",
            lineNumber: 144,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/search_data/view.tsx",
        lineNumber: 128,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/search_data/view.tsx",
      lineNumber: 122,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/search_data/view.tsx",
    lineNumber: 111,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.search_data.$formId.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
async function loader2({
  request,
  params
}) {
  let state = new URL(request.url).searchParams.get("state"), searchForm;
  return searchForm = await api_default.db.getSearchForm(Number(params.formId)), json2({ searchForm, state });
}
async function action({
  request
}) {
  let ok = !1, errors = "", docs = null, formData = await request.formData(), {
    _action,
    _user,
    _inputFormId,
    ...values
  } = Object.fromEntries(formData);
  try {
    let jsonData = JSON.parse(String(values.json)), results = await api_default.doc.searchDoc(jsonData);
    docs = {
      formId: Number(_inputFormId),
      ids: results.map((item) => item.id)
    }, ok = !0;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      errors = e.message;
    else
      throw e;
  }
  return json2({ errors });
}
function SearchData() {
  let { conditions, setConditions } = useOutletContext(), { searchForm, state } = useLoaderData2(), data = useActionData(), [showCondition, setShowCondition] = useState2(!1), [cond, setCond] = useState2({}), [condIndex, setCondIndex] = useState2(null), [fld, setFld] = useState2(null), userId = 19;
  return /* @__PURE__ */ jsxDEV14(
    SearchDataView,
    {
      errors: data?.errors,
      condIndex,
      setCondIndex,
      cond,
      setCond,
      show: showCondition,
      setShow: setShowCondition,
      conditions,
      setConditions,
      userId,
      inputFormId: searchForm ? searchForm.inputFormId : null,
      searchForm,
      fld,
      setFld
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.search_data.$formId.tsx",
      lineNumber: 62,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.enter_data.$formId.tsx
var dashboard_enter_data_formId_exports = {};
__export(dashboard_enter_data_formId_exports, {
  action: () => action2,
  default: () => EnterData,
  loader: () => loader3
});
import { Prisma as Prisma2 } from "@prisma/client";
import { json as json3, redirect } from "@remix-run/node";
import { useActionData as useActionData2, useLoaderData as useLoaderData3, useNavigation, useOutletContext as useOutletContext2 } from "@remix-run/react";
import { useEffect, useRef, useState as useState4 } from "react";

// app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx
import { Form } from "@remix-run/react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function ButtonCancel({ userId, inputFormId, doc }) {
  let { t } = useTranslation3();
  return /* @__PURE__ */ jsxDEV15(Form, { method: "post", children: [
    /* @__PURE__ */ jsxDEV15("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
        type: "submit",
        name: "_action",
        value: "cancelUpdate",
        children: [
          /* @__PURE__ */ jsxDEV15("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV15("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
            lineNumber: 25,
            columnNumber: 17
          }, this),
          t("cancel")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
        lineNumber: 19,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/buttons/btn_create.tsx
import { Form as Form2 } from "@remix-run/react";
import { useTranslation as useTranslation4 } from "react-i18next";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function ButtonCreate({ userId, inputFormId }) {
  let { t } = useTranslation4();
  return /* @__PURE__ */ jsxDEV16(Form2, { method: "post", children: [
    /* @__PURE__ */ jsxDEV16("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV16("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV16(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
        type: "submit",
        name: "_action",
        value: "openForCreate",
        children: [
          /* @__PURE__ */ jsxDEV16("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
            lineNumber: 24,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
            lineNumber: 23,
            columnNumber: 17
          }, this),
          t("create")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
        lineNumber: 17,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/buttons/btn_delete.tsx
import { Form as Form3 } from "@remix-run/react";
import { useTranslation as useTranslation5 } from "react-i18next";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function ButtonDelete({ userId, inputFormId, doc }) {
  let { t } = useTranslation5(), handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV17(Form3, { method: "post", children: [
    /* @__PURE__ */ jsxDEV17("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17(
      CustomButton,
      {
        className: "bg-red-500 hover:shadow-red-100",
        onClick: handleDelete,
        type: "submit",
        name: "_action",
        value: "deleteDocument",
        children: [
          /* @__PURE__ */ jsxDEV17("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV17("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
            lineNumber: 35,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this),
          t("delete")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
        lineNumber: 27,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/buttons/btn_edit.tsx
import { Form as Form4 } from "@remix-run/react";
import { useTranslation as useTranslation6 } from "react-i18next";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function ButtonEdit({ userId, inputFormId, doc }) {
  let { t } = useTranslation6();
  return /* @__PURE__ */ jsxDEV18(Form4, { method: "post", children: [
    /* @__PURE__ */ jsxDEV18("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
        type: "submit",
        name: "_action",
        value: "openForEdit",
        children: [
          /* @__PURE__ */ jsxDEV18("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV18("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
            lineNumber: 25,
            columnNumber: 17
          }, this),
          t("edit")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
        lineNumber: 19,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/buttons/btn_find.tsx
import { useTranslation as useTranslation7 } from "react-i18next";
import { useSubmit as useSubmit3 } from "@remix-run/react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function ButtonFind({ userId, inputFormId, doc }) {
  let { t } = useTranslation7(), submit = useSubmit3(), handleFind = () => {
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
  return /* @__PURE__ */ jsxDEV19(
    CustomButton,
    {
      className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
      onClick: () => handleFind(),
      children: [
        /* @__PURE__ */ jsxDEV19("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV19("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        t("find")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
      lineNumber: 27,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/buttons/btn_save.tsx
import { useTranslation as useTranslation8 } from "react-i18next";
import { useSubmit as useSubmit4 } from "@remix-run/react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function ButtonSave({ userId, inputFormId, doc }) {
  let { t } = useTranslation8(), submit = useSubmit4(), handleSave = () => {
    submit({
      _action: "saveDocument",
      _user: userId || "",
      _inputFormId: inputFormId || "",
      _id: doc.id ? doc.id : "",
      json: JSON.stringify(document)
    }, {
      method: "post"
    });
  };
  return /* @__PURE__ */ jsxDEV20(
    CustomButton,
    {
      className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
      onClick: () => handleSave(),
      children: [
        /* @__PURE__ */ jsxDEV20("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV20("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        t("save")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
      lineNumber: 27,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/buttons/btn_search.tsx
import { Form as Form5 } from "@remix-run/react";
import { useTranslation as useTranslation9 } from "react-i18next";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function ButtonSearch2({ userId, inputFormId }) {
  let { t } = useTranslation9();
  return /* @__PURE__ */ jsxDEV21(Form5, { method: "post", children: [
    /* @__PURE__ */ jsxDEV21("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV21("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV21(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
        type: "submit",
        name: "_action",
        value: "openForSearch",
        children: [
          /* @__PURE__ */ jsxDEV21("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV21("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
            lineNumber: 24,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
            lineNumber: 23,
            columnNumber: 17
          }, this),
          t("search")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
        lineNumber: 17,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/buttons/buttons.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function Buttons2({ userId, inputFormId, state, doc }) {
  return /* @__PURE__ */ jsxDEV22(
    "div",
    {
      className: "flex items-center gap-3",
      children: [
        ["edit", "search"].includes(String(state)) ? null : /* @__PURE__ */ jsxDEV22(ButtonCreate, { userId, inputFormId }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 22,
          columnNumber: 19
        }, this),
        ["edit", "search"].includes(String(state)) ? null : /* @__PURE__ */ jsxDEV22(ButtonSearch2, { userId, inputFormId }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 25,
          columnNumber: 19
        }, this),
        state === "search" ? /* @__PURE__ */ jsxDEV22(ButtonFind, { userId, inputFormId, doc }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 28,
          columnNumber: 19
        }, this) : null,
        doc.id && state !== "edit" ? /* @__PURE__ */ jsxDEV22(ButtonEdit, { userId, inputFormId, doc }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 31,
          columnNumber: 19
        }, this) : null,
        state === "edit" ? /* @__PURE__ */ jsxDEV22(ButtonSave, { userId, inputFormId, doc }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 34,
          columnNumber: 19
        }, this) : null,
        state === "edit" || state === "search" ? /* @__PURE__ */ jsxDEV22(ButtonCancel, { userId, inputFormId, doc }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 37,
          columnNumber: 19
        }, this) : null,
        doc.id && state !== "edit" ? /* @__PURE__ */ jsxDEV22(ButtonDelete, { userId, inputFormId, doc }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 40,
          columnNumber: 19
        }, this) : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/dlg_find_result.tsx
import MaterialTailwind3 from "@material-tailwind/react";
import { useNavigate } from "@remix-run/react";
import { useTranslation as useTranslation10 } from "react-i18next";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var { Dialog: Dialog2, Card: Card2, CardBody: CardBody2, CardFooter: CardFooter2 } = MaterialTailwind3;
function DialogFindResult({ open, setOpen, docs }) {
  let { t } = useTranslation10(), navigate = useNavigate(), handleOpenInputForm = () => {
    setOpen(!1), docs && docs.ids?.length ? navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`) : navigate(`/dashboard/enter_data/${docs.formId}?state=search`);
  };
  return /* @__PURE__ */ jsxDEV23(
    Dialog2,
    {
      placeholder: "",
      size: "sm",
      open,
      handler: () => handleOpenInputForm(),
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV23(Card2, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV23(CardBody2, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: docs && docs.ids?.length ? /* @__PURE__ */ jsxDEV23("div", { className: "text-bold p-1", children: [
          t("find_result"),
          ": ",
          docs.ids?.length
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 37,
          columnNumber: 27
        }, this) : /* @__PURE__ */ jsxDEV23("div", { className: "text-bold p-1", children: t("nothing") }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 38,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV23(CardFooter2, { className: "pt-0 flex flex-row gap-3 justify-center", placeholder: "", children: /* @__PURE__ */ jsxDEV23(
          CustomButton,
          {
            className: "bg-green-500 hover:shadow-green-100",
            onClick: () => handleOpenInputForm(),
            children: "OK"
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
            lineNumber: 42,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
      lineNumber: 27,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/rec_navigator.tsx
import { useNavigate as useNavigate2 } from "@remix-run/react";
import { useState as useState3 } from "react";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function RecNavigator({ docs, current, setCurrent }) {
  let [val, setVal] = useState3(current), navigate = useNavigate2(), handleFirst = () => {
    setVal(0), setCurrent(0), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`);
  }, handlePrev = () => {
    current > 0 && (--current, setVal(current), setCurrent(current), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`));
  }, handleNext = () => {
    let lastIndex = docs.ids.length - 1;
    current < lastIndex && (++current, setVal(current), setCurrent(current), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`));
  }, handleLast = () => {
    let lastIndex = docs.ids.length - 1;
    setVal(lastIndex), setCurrent(lastIndex), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[lastIndex]}`);
  }, handleSeek = (val2) => {
    val2 < 0 && (val2 = 0), val2 > docs.ids.length - 1 && (val2 = docs.ids.length - 1), setVal(val2), setCurrent(val2), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[val2]}`);
  };
  return /* @__PURE__ */ jsxDEV24("div", { children: docs && docs.ids ? /* @__PURE__ */ jsxDEV24("div", { className: "flex gap-1 justify-end items-center text-xs", children: [
    /* @__PURE__ */ jsxDEV24("p", { className: "text-blue-gray-600 font-bold", children: [
      current + 1,
      " / ",
      docs.ids.length
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
      lineNumber: 56,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV24(
      "input",
      {
        className: "p-1 text-blue-gray-600 focus:outline-0 w-20",
        type: "number",
        max: docs.ids.length,
        min: 1,
        value: val + 1,
        onChange: (e) => setVal(Number(e.target.value) - 1)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
        lineNumber: 59,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-20 text-center border bg-blue-gray-500 p-1 font-bold text-white rounded",
        onClick: () => handleSeek(val),
        children: "Seek"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
        lineNumber: 68,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded",
        onClick: () => handleFirst(),
        children: "<<"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
        lineNumber: 74,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded",
        onClick: () => handlePrev(),
        children: "<"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
        lineNumber: 80,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded",
        onClick: () => handleNext(),
        children: ">"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
        lineNumber: 86,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded",
        onClick: () => handleLast(),
        children: ">>"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
        lineNumber: 92,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
    lineNumber: 55,
    columnNumber: 19
  }, this) : null }, void 0, !1, {
    fileName: "app/components/UI/widgets/enter_data/rec_navigator.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/edit_form/edit_form.tsx
import { Form as Form6, useLocation } from "@remix-run/react";

// app/components/UI/elements/custom_select.tsx
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function CustomSelect({ className, id, title, errors, children, ...props }) {
  return /* @__PURE__ */ jsxDEV25(
    "div",
    {
      className: `${className} p-1 flex items-baseline`,
      children: [
        /* @__PURE__ */ jsxDEV25(
          "label",
          {
            className: "font-bold text-sm mr-1 min-w-40",
            htmlFor: id,
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/elements/custom_select.tsx",
            lineNumber: 16,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV25("div", { className: "flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV25(
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
              fileName: "app/components/UI/elements/custom_select.tsx",
              lineNumber: 23,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV25("span", { className: "text-sm text-red-500 h-4", children: errors }, void 0, !1, {
            fileName: "app/components/UI/elements/custom_select.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/elements/custom_select.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/elements/custom_select.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/edit_form/field.tsx
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function Field({ state, dictionaries, doc, setDoc, recordIndex, fld }) {
  let tableName = `tbl_${fld.groupId}`, fieldName = `f${fld.id}`, val = doc[tableName][recordIndex][fieldName] ? doc[tableName][recordIndex][fieldName] : "", cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`, handleChange = (e) => {
    let d = { ...doc };
    d[tableName][recordIndex][fieldName] = e.target.value, setDoc(d);
  };
  switch (fld.fieldType) {
    case "TEXT":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fld.title,
          type: "text",
          name: fieldName,
          value: val,
          onChange: handleChange,
          required: fld.isRequire && state === "edit",
          disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
          size: fld.len ? fld.len : 30,
          maxLength: fld.len ? fld.len : 30
        },
        fld.id,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 29,
          columnNumber: 17
        },
        this
      );
    case "CYRILLIC":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fld.title,
          type: "text",
          name: fieldName,
          value: val,
          onChange: handleChange,
          required: fld.isRequire && state === "edit",
          disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
          size: fld.len ? fld.len : 30,
          maxLength: fld.len ? fld.len : 30
        },
        fld.id,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 46,
          columnNumber: 17
        },
        this
      );
    case "INTEGER":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fld.title,
          type: "number",
          name: fieldName,
          value: val,
          onChange: handleChange,
          required: fld.isRequire && state === "edit",
          disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
          size: fld.len ? fld.len : 30,
          maxLength: fld.len ? fld.len : 30
        },
        fld.id,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 63,
          columnNumber: 17
        },
        this
      );
    case "NUMERIC":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fld.title,
          type: "number",
          step: "0.01",
          name: fieldName,
          value: val,
          onChange: handleChange,
          required: fld.isRequire && state === "edit",
          disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
          size: fld.len ? fld.len : 30,
          maxLength: fld.len ? fld.len : 30
        },
        fld.id,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 80,
          columnNumber: 17
        },
        this
      );
    case "DICT":
      let dic = dictionaries.find((item) => item.id === fld.dicId);
      return /* @__PURE__ */ jsxDEV26(
        CustomSelect,
        {
          className: cls,
          id: fieldName,
          title: fld.title,
          name: fieldName,
          value: val,
          onChange: handleChange,
          required: fld.isRequire && state === "edit",
          disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
          children: [
            /* @__PURE__ */ jsxDEV26("option", { children: "-" }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, this),
            ["create", "edit", "search", "find"].includes(String(state)) ? dic?.data_edit.map((item) => /* @__PURE__ */ jsxDEV26("option", { value: item.id, children: item.title }, item.id, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
              lineNumber: 113,
              columnNumber: 29
            }, this)) : dic?.data_browse.map((item) => /* @__PURE__ */ jsxDEV26("option", { value: item.id, children: item.title }, item.id, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
              lineNumber: 116,
              columnNumber: 29
            }, this))
          ]
        },
        fld.id,
        !0,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 99,
          columnNumber: 17
        },
        this
      );
    case "DATE":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fld.title,
          type: "date",
          name: fieldName,
          value: val,
          onChange: handleChange,
          required: fld.isRequire && state === "edit",
          disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
          size: fld.len ? fld.len : 30,
          maxLength: fld.len ? fld.len : 30
        },
        fld.id,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 122,
          columnNumber: 17
        },
        this
      );
    case "TIME":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fld.title,
          type: "time",
          name: fieldName,
          value: val,
          onChange: handleChange,
          required: fld.isRequire && state === "edit",
          disabled: !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)),
          size: fld.len ? fld.len : 30,
          maxLength: fld.len ? fld.len : 30
        },
        fld.id,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 139,
          columnNumber: 17
        },
        this
      );
  }
}

// app/components/UI/widgets/enter_data/edit_form/single_group.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
function SingleGroup({ state, dictionaries, group, doc, setDoc }) {
  return /* @__PURE__ */ jsxDEV27("div", { className: "border p-1 grid grid-cols-3 gap-1", children: group?.fields && group.fields.map((fld) => /* @__PURE__ */ jsxDEV27(
    Field,
    {
      state,
      dictionaries,
      recordIndex: 0,
      doc,
      setDoc,
      fld
    },
    fld.id,
    !1,
    {
      fileName: "app/components/UI/widgets/enter_data/edit_form/single_group.tsx",
      lineNumber: 16,
      columnNumber: 17
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/single_group.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/edit_form/multy_group.tsx
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
function MultyGroup({ state, dictionaries, group, doc, setDoc }) {
  let handleAdd = (e) => {
    e.preventDefault();
    let d = { ...doc }, tbl = `tbl_${group.id}`, fields = { id: null, sid: null, lst: 0 };
    for (let field of group.fields)
      fields[`f${field.id}`] = "";
    d[tbl].push(fields), setDoc(d);
  }, handleDelete = (e, recordIndex) => {
    if (e.preventDefault(), confirm(
      "Please confirm you want to delete this record."
    )) {
      let d = { ...doc }, tbl = `tbl_${group.id}`;
      d[tbl].splice([recordIndex], 1), setDoc(d);
    }
  };
  return /* @__PURE__ */ jsxDEV28("div", { className: "border p-1", children: [
    /* @__PURE__ */ jsxDEV28(
      "div",
      {
        className: "flex justify-end p-1",
        children: state === "edit" ? /* @__PURE__ */ jsxDEV28(
          CustomButton,
          {
            className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
            onClick: handleAdd,
            children: [
              /* @__PURE__ */ jsxDEV28("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV28("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 50,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 49,
                columnNumber: 25
              }, this),
              "Add"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 45,
            columnNumber: 23
          },
          this
        ) : null
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 41,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV28(
      "table",
      {
        className: "border border-blue-gray-700",
        children: [
          /* @__PURE__ */ jsxDEV28(
            "thead",
            {
              className: "bg-blue-gray-400 text-white text-center",
              children: /* @__PURE__ */ jsxDEV28("tr", { children: [
                /* @__PURE__ */ jsxDEV28("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                  lineNumber: 63,
                  columnNumber: 25
                }, this),
                group?.fields && group.fields.map((fld) => /* @__PURE__ */ jsxDEV28("th", { className: "p-1 text-sm border border-blue-gray-700", children: fld.title }, fld.id, !1, {
                  fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                  lineNumber: 65,
                  columnNumber: 29
                }, this)),
                /* @__PURE__ */ jsxDEV28("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                  lineNumber: 69,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 62,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
              lineNumber: 59,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV28("tbody", { children: doc[`tbl_${group.id}`].map((record, index) => /* @__PURE__ */ jsxDEV28("tr", { children: [
            /* @__PURE__ */ jsxDEV28("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
              lineNumber: 75,
              columnNumber: 29
            }, this),
            group?.fields && group.fields.map((fld) => /* @__PURE__ */ jsxDEV28("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV28(
              Field,
              {
                state,
                dictionaries,
                recordIndex: index,
                doc,
                setDoc,
                fld
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 78,
                columnNumber: 37
              },
              this
            ) }, fld.id, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
              lineNumber: 77,
              columnNumber: 33
            }, this)),
            state === "edit" && index !== 0 ? /* @__PURE__ */ jsxDEV28("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV28(
              CustomButton,
              {
                className: "bg-red-500 hover:shadow-red-100",
                onClick: (e) => handleDelete(e, index),
                children: [
                  /* @__PURE__ */ jsxDEV28("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV28("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                    lineNumber: 95,
                    columnNumber: 45
                  }, this) }, void 0, !1, {
                    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                    lineNumber: 94,
                    columnNumber: 41
                  }, this),
                  "Delete"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 90,
                columnNumber: 37
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
              lineNumber: 89,
              columnNumber: 35
            }, this) : null
          ] }, index, !0, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 74,
            columnNumber: 25
          }, this)) }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 56,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/edit_form/edit_form.tsx
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
function EditForm({
  formRef,
  userId,
  inputForm,
  state,
  dictionaries,
  doc,
  setDoc
}) {
  let location = useLocation();
  return /* @__PURE__ */ jsxDEV29(
    Form6,
    {
      id: "documentForm",
      method: "post",
      ref: formRef,
      children: [
        /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        inputForm?.groups && inputForm.groups.map((group) => /* @__PURE__ */ jsxDEV29("div", { className: "mb-2", children: [
          /* @__PURE__ */ jsxDEV29("h2", { className: "col-span-3 bg-orange-700 text-white font-bold text-sm p-1 pl-4", children: group.title }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
            lineNumber: 39,
            columnNumber: 21
          }, this),
          group.isMulty ? /* @__PURE__ */ jsxDEV29(
            MultyGroup,
            {
              state,
              dictionaries,
              group,
              doc,
              setDoc
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
              lineNumber: 48,
              columnNumber: 27
            },
            this
          ) : /* @__PURE__ */ jsxDEV29(
            SingleGroup,
            {
              state,
              dictionaries,
              group,
              doc,
              setDoc
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
              lineNumber: 41,
              columnNumber: 27
            },
            this
          )
        ] }, group.id, !0, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this))
      ]
    },
    location.key,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
      lineNumber: 28,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/view.tsx
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV30("div", { className: "h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5", children: [
    /* @__PURE__ */ jsxDEV30(ErrorMessage, { errors }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV30(
      DialogFindResult,
      {
        open,
        setOpen,
        docs
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/view.tsx",
        lineNumber: 43,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV30(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ jsxDEV30("div", { className: "py-2 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxDEV30(Buttons2, { userId, inputFormId: inputForm.id, doc, state }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV30(RecNavigator, { docs, current, setCurrent }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/enter_data/view.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV30(
        EditForm,
        {
          formRef,
          userId,
          inputForm,
          state,
          dictionaries,
          doc,
          setDoc
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 53,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/view.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.enter_data.$formId.tsx
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
async function loader3({
  request,
  params
}) {
  let url = new URL(request.url), docId = url.searchParams.get("docId"), state = url.searchParams.get("state"), inputForm, doc;
  return inputForm = await api_default.db.getInputForm(Number(params.formId)), doc = await api_default.doc.getDoc(docId ? Number(docId) : null, inputForm), json3({ inputForm, doc, state });
}
async function action2({
  request
}) {
  let ok = !1, errors = "", docs = null, deletedDocId = null, formData = await request.formData(), {
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
    if (_action === "saveDocument") {
      let jsonData = JSON.parse(String(values.json));
      return _id ? (await api_default.doc.updateDoc(Number(_user), inputForm, jsonData), redirect(`/dashboard/enter_data/${_inputFormId}?docId=${_id}`)) : (await api_default.doc.createDoc(Number(_user), inputForm, jsonData), redirect(`/dashboard/enter_data/${_inputFormId}?`));
    } else if (_action === "findDocument") {
      let jsonData = JSON.parse(String(values.json)), results = await api_default.doc.findDoc(inputForm, jsonData);
      results.length > 100 ? errors = "Find records more 100" : (docs = {
        formId: inputForm.id,
        ids: results.map((item) => item.id)
      }, ok = !0);
    } else {
      if (_action === "cancelUpdate")
        return _id ? redirect(`/dashboard/enter_data/${_inputFormId}?docId=${_id}`) : redirect(`/dashboard/enter_data/${_inputFormId}?`);
      _action === "deleteDocument" && _id && (await api_default.doc.deleteDoc(Number(_id)), deletedDocId = Number(_id), ok = !0);
    }
  } catch (e) {
    if (e instanceof Prisma2.PrismaClientKnownRequestError)
      errors = e.message;
    else
      throw e;
  }
  return json3({ errors, docs, deletedDocId, ok });
}
function EnterData() {
  let { dictionaries, docs, setDocs, current, setCurrent } = useOutletContext2(), { inputForm, doc, state } = useLoaderData3(), [document2, setDocument] = useState4(doc), navigation = useNavigation(), formRef = useRef(null), userId = 19, data = useActionData2(), [showFind, setShowFind] = useState4(!1);
  return useEffect(() => {
    setDocument(doc);
  }, [doc]), useEffect(() => {
    data?.docs && data?.ok && (setDocs(data.docs), setShowFind(!0)), navigation.state === "idle" && data?.ok && formRef.current?.reset(), data?.deletedDocId && data?.ok && setDocs((prev) => ({ formId: prev.formId, ids: prev.ids?.filter((item) => item !== data.deletedDocId) }));
  }, [data]), /* @__PURE__ */ jsxDEV31(
    EnterDataView,
    {
      errors: data?.errors,
      open: showFind,
      setOpen: setShowFind,
      docs,
      userId,
      current,
      setCurrent,
      formRef,
      inputForm,
      state,
      dictionaries,
      doc: document2,
      setDoc: setDocument
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 127,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.db_struct.tsx
var dashboard_db_struct_exports = {};
__export(dashboard_db_struct_exports, {
  action: () => action3,
  default: () => DbStruct,
  loader: () => loader4
});
import { Prisma as Prisma3 } from "@prisma/client";
import { json as json4, redirect as redirect2 } from "@remix-run/node";
import { useActionData as useActionData3, useLoaderData as useLoaderData4, useOutletContext as useOutletContext3 } from "@remix-run/react";
import invariant from "tiny-invariant";

// app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx
import { Form as Form7 } from "@remix-run/react";
import { useTranslation as useTranslation11 } from "react-i18next";
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
function ButtonAddDicionary({ count }) {
  let { t } = useTranslation11();
  return /* @__PURE__ */ jsxDEV32(Form7, { method: "post", children: [
    /* @__PURE__ */ jsxDEV32("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV32(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
        type: "submit",
        name: "_action",
        value: "createEmptyDictionary",
        children: [
          /* @__PURE__ */ jsxDEV32("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV32("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add_dictionary")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx
import { Form as Form8 } from "@remix-run/react";
import { useTranslation as useTranslation12 } from "react-i18next";
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
function ButtonAddInputForm({ count }) {
  let { t } = useTranslation12();
  return /* @__PURE__ */ jsxDEV33(Form8, { method: "post", children: [
    /* @__PURE__ */ jsxDEV33("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV33(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
        type: "submit",
        name: "_action",
        value: "createEmptyInputForm",
        children: [
          /* @__PURE__ */ jsxDEV33("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV33("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add_inputform")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx
import { Form as Form9 } from "@remix-run/react";
import { useTranslation as useTranslation13 } from "react-i18next";
import { jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
function ButtonAddSearchForm({ count }) {
  let { t } = useTranslation13();
  return /* @__PURE__ */ jsxDEV34(Form9, { method: "post", children: [
    /* @__PURE__ */ jsxDEV34("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV34(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
        type: "submit",
        name: "_action",
        value: "createEmptySearchForm",
        children: [
          /* @__PURE__ */ jsxDEV34("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV34("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add_searchform")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx
import MaterialTailwind4 from "@material-tailwind/react";
import { Form as Form10, useFetcher } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
var { Spinner } = MaterialTailwind4;
function ButtonRestructDb() {
  let isRestruct = useFetcher().state !== "idle";
  return /* @__PURE__ */ jsxDEV35(Form10, { method: "post", children: /* @__PURE__ */ jsxDEV35(
    CustomButton,
    {
      className: "bg-blue-500 hover:shadow-blue-100",
      type: "submit",
      name: "_action",
      value: "generateStructDb",
      disabled: isRestruct,
      onClick: async (event) => {
        confirm(
          "Please confirm you want to restructure database."
        ) || event.preventDefault();
      },
      children: isRestruct ? /* @__PURE__ */ jsxDEV35(Fragment, { children: [
        /* @__PURE__ */ jsxDEV35(Spinner, { className: "w-4 h-4" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
          lineNumber: 30,
          columnNumber: 25
        }, this),
        "Restructuring..."
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
        lineNumber: 29,
        columnNumber: 23
      }, this) : /* @__PURE__ */ jsxDEV35(Fragment, { children: [
        /* @__PURE__ */ jsxDEV35("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV35("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
          lineNumber: 35,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
          lineNumber: 34,
          columnNumber: 25
        }, this),
        "Restruct Database"
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
        lineNumber: 33,
        columnNumber: 23
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
      lineNumber: 20,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/buttons/buttons.tsx
import { jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
function Buttons3({
  state,
  dictionaries_count,
  inputForms_count,
  searchForms_count
}) {
  return /* @__PURE__ */ jsxDEV36("div", { className: "mb-2 flex justify-between py-2 px-2 border border-gray-900", children: [
    /* @__PURE__ */ jsxDEV36("div", { className: "flex items-center gap-3", children: state === "dictionary" ? /* @__PURE__ */ jsxDEV36(ButtonAddDicionary, { count: dictionaries_count }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 23,
      columnNumber: 23
    }, this) : state === "inputForm" ? /* @__PURE__ */ jsxDEV36(ButtonAddInputForm, { count: inputForms_count }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 25,
      columnNumber: 27
    }, this) : state === "searchForm" ? /* @__PURE__ */ jsxDEV36(ButtonAddSearchForm, { count: searchForms_count }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 27,
      columnNumber: 31
    }, this) : null }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV36(ButtonRestructDb, {}, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/navigator.tsx
import { Link as Link2 } from "@remix-run/react";
import { useTranslation as useTranslation14 } from "react-i18next";
import { jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
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
  let { t } = useTranslation14();
  return /* @__PURE__ */ jsxDEV37("div", { className: "p-4 mr-5 w-1/3 border border-gray-900", children: /* @__PURE__ */ jsxDEV37("ul", { children: [
    /* @__PURE__ */ jsxDEV37(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "inputForm" && !inputFormId ? "bg-blue-gray-200" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV37("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV37("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 36,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 35,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV37(
            Link2,
            {
              to: "/dashboard/db_struct?state=inputForm&inputFormId=0",
              children: t("inputforms")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 38,
              columnNumber: 21
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 31,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ jsxDEV37("ul", { children: inputForms.map((form) => /* @__PURE__ */ jsxDEV37("div", { children: [
      /* @__PURE__ */ jsxDEV37(
        Link2,
        {
          to: `/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`,
          children: /* @__PURE__ */ jsxDEV37(
            "li",
            {
              className: [
                "pl-4 flex items-center gap-1 hover:cursor-pointer",
                state === "inputForm" && form.id === inputFormId ? "bg-blue-gray-200" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV37("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV37("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                  lineNumber: 55,
                  columnNumber: 41
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                  lineNumber: 54,
                  columnNumber: 37
                }, this),
                form.pos,
                ". ",
                form.title
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 50,
              columnNumber: 33
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
          lineNumber: 47,
          columnNumber: 29
        },
        this
      ),
      /* @__PURE__ */ jsxDEV37("ul", { children: form.groups.map((gr) => /* @__PURE__ */ jsxDEV37(
        Link2,
        {
          to: `/dashboard/db_struct?state=group&inputFormId=${gr.inputFormId}&groupId=${gr.id}`,
          children: /* @__PURE__ */ jsxDEV37(
            "li",
            {
              className: [
                "pl-8 flex items-center gap-1 hover:cursor-pointer",
                state === "group" && gr.id === groupId ? "bg-blue-gray-200" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV37("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV37("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                  lineNumber: 71,
                  columnNumber: 49
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                  lineNumber: 70,
                  columnNumber: 45
                }, this),
                gr.pos,
                ". ",
                gr.title
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 66,
              columnNumber: 41
            },
            this
          )
        },
        gr.id,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
          lineNumber: 62,
          columnNumber: 37
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 60,
        columnNumber: 29
      }, this)
    ] }, form.id, !0, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 46,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 44,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV37(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "searchForm" && !searchFormId ? "bg-blue-gray-200" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV37("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV37("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 86,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 85,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV37(
            Link2,
            {
              to: "/dashboard/db_struct?state=searchForm&searchFormId=0",
              children: t("searchforms")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 88,
              columnNumber: 21
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 81,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ jsxDEV37("ul", { children: searchForms.map((form) => /* @__PURE__ */ jsxDEV37(
      Link2,
      {
        to: `/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`,
        children: /* @__PURE__ */ jsxDEV37(
          "li",
          {
            className: [
              "pl-4 flex items-center gap-1 hover:cursor-pointer",
              state === "searchForm" && form.id === searchFormId ? "bg-blue-gray-200" : ""
            ].join(" "),
            children: [
              /* @__PURE__ */ jsxDEV37("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV37("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                lineNumber: 105,
                columnNumber: 37
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                lineNumber: 104,
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
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 100,
            columnNumber: 29
          },
          this
        )
      },
      form.id,
      !1,
      {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 96,
        columnNumber: 25
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 94,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV37(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "dictionary" && !dictionaryId ? "bg-blue-gray-200" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV37("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV37("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 117,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 116,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV37(
            Link2,
            {
              to: "/dashboard/db_struct?state=dictionary&dictionaryId=0",
              children: t("dictionaries")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 119,
              columnNumber: 21
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 112,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ jsxDEV37("ul", { children: dictionaries.map((dict) => /* @__PURE__ */ jsxDEV37(
      Link2,
      {
        to: `/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`,
        children: /* @__PURE__ */ jsxDEV37(
          "li",
          {
            className: [
              "pl-4 flex items-center gap-1 hover:cursor-pointer",
              state === "dictionary" && dict.id === dictionaryId ? "bg-blue-gray-200" : ""
            ].join(" "),
            children: [
              /* @__PURE__ */ jsxDEV37("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV37("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                lineNumber: 136,
                columnNumber: 37
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                lineNumber: 135,
                columnNumber: 33
              }, this),
              dict.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 131,
            columnNumber: 29
          },
          this
        )
      },
      dict.id,
      !1,
      {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 127,
        columnNumber: 25
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 125,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
    lineNumber: 30,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/form_dict.tsx
import { Form as Form11 } from "@remix-run/react";
import { useTranslation as useTranslation15 } from "react-i18next";
import { Fragment as Fragment2, jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
function DictionaryForm({ dictionary }) {
  let { t } = useTranslation15(), handleDelete = async (event) => {
    confirm(
      t("confirm_delete")
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV38(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV38("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV38(
        CustomButton,
        {
          className: "hidden",
          id: "updateDictionaryButton",
          form: "updateDictionary",
          type: "submit",
          name: "_action",
          value: "updateDictionary",
          children: [
            /* @__PURE__ */ jsxDEV38("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV38("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
              lineNumber: 33,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
              lineNumber: 32,
              columnNumber: 21
            }, this),
            t("save")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
          lineNumber: 24,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV38(Form11, { method: "post", children: [
        /* @__PURE__ */ jsxDEV38("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV38(
          CustomButton,
          {
            className: "bg-red-500 hover:shadow-red-100",
            onClick: handleDelete,
            type: "submit",
            name: "_action",
            value: "deleteDictionary",
            children: [
              /* @__PURE__ */ jsxDEV38("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV38("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
                lineNumber: 47,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
                lineNumber: 46,
                columnNumber: 25
              }, this),
              t("delete")
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
            lineNumber: 39,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV38(
      Form11,
      {
        id: "updateDictionary",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV38("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV38(
            CustomInput,
            {
              id: dictionary.id,
              title: t("title"),
              type: "text",
              defaultValue: dictionary?.title,
              name: "title",
              required: !0,
              onChange: () => {
                document.getElementById("updateDictionaryButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
              lineNumber: 60,
              columnNumber: 17
            },
            this
          )
        ]
      },
      dictionary?.id,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
        lineNumber: 53,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/form_group.tsx
import { Form as Form12, useNavigate as useNavigate3 } from "@remix-run/react";
import { FieldType } from "@prisma/client";
import { useTranslation as useTranslation16 } from "react-i18next";
import { Fragment as Fragment3, jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
function GroupForm({ group, dicts }) {
  let { t } = useTranslation16(), navigate = useNavigate3(), handleDelete = async (event) => {
    confirm(
      t("confirm_delete")
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV39(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV39("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV39(
        CustomButton,
        {
          className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
          form: "addInputFieldForm",
          type: "submit",
          name: "_action",
          value: "createEmptyInputField",
          children: [
            /* @__PURE__ */ jsxDEV39("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV39("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 36,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 35,
              columnNumber: 21
            }, this),
            t("add_field")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 28,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV39(
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
            /* @__PURE__ */ jsxDEV39("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV39("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 50,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 49,
              columnNumber: 21
            }, this),
            t("save")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 40,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV39(
        CustomButton,
        {
          className: "bg-red-500 hover:shadow-red-100",
          form: "deleteGroupForm",
          type: "submit",
          name: "_action",
          value: "deleteGroup",
          children: [
            /* @__PURE__ */ jsxDEV39("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV39("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 62,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 61,
              columnNumber: 21
            }, this),
            t("delete")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 54,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV39(
      Form12,
      {
        id: "addInputFieldForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "groupId", defaultValue: group.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "cnt", defaultValue: group.fields.length + 1 }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 67,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV39(
      Form12,
      {
        id: "updateGroupForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV39(
            CustomInput,
            {
              id: "group_pos",
              type: "number",
              name: "pos",
              title: t("pos"),
              defaultValue: group?.pos,
              required: !0,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              },
              subClass: "w-16"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV39(
            CustomInput,
            {
              id: "group_title",
              type: "text",
              name: "title",
              title: t("title"),
              defaultValue: group?.title,
              required: !0,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 96,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV39(
            CustomInput,
            {
              id: "group_ismulty",
              type: "checkbox",
              name: "isMulty",
              title: t("is_multy"),
              checked: !!group?.isMulty,
              required: !1,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
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
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 75,
        columnNumber: 13
      },
      this
    ),
    group?.fields && group.fields.map((field) => /* @__PURE__ */ jsxDEV39(
      Form12,
      {
        className: "hidden",
        id: `updateInputFieldForm_${field.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 129,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "groupId", defaultValue: field.groupId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 130,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV39(
            CustomButton,
            {
              className: "bg-green-500 hover:shadow-green-100",
              id: `updateInputFieldButton_${field.id}`,
              form: `updateInputFieldForm_${field.id}`,
              type: "submit",
              name: "_action",
              value: "updateInputField",
              children: [
                /* @__PURE__ */ jsxDEV39("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV39("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                  lineNumber: 140,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                  lineNumber: 139,
                  columnNumber: 25
                }, this),
                t("save")
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
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
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 123,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV39("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxDEV39("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV39(
        "thead",
        {
          className: "bg-blue-gray-400 text-white text-center",
          children: /* @__PURE__ */ jsxDEV39("tr", { children: [
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 152,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("pos") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 153,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("span") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 154,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("start") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 155,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("title") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 156,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("type_data") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 157,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("dictionary") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 158,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("len") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 159,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("precision") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 160,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("is_key") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 161,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("is_visible") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 162,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("is_enable") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 163,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("is_require") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 164,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("duplicate") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 165,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV39("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 166,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 151,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 148,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV39("tbody", { className: "text-center", children: group?.fields && group.fields.map((field, index) => /* @__PURE__ */ jsxDEV39("tr", { children: [
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 172,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 174,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 173,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 187,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 186,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 202,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 201,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            onClick: () => navigate(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}&inputFieldId=${field.id}`),
            children: /* @__PURE__ */ jsxDEV39(
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
                fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                lineNumber: 220,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 216,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV39(
          "select",
          {
            className: "text-sm w-full",
            form: `updateInputFieldForm_${field.id}`,
            name: "fieldType",
            defaultValue: field.fieldType,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            },
            children: Object.keys(FieldType).map((key) => /* @__PURE__ */ jsxDEV39("option", { value: key, children: key }, key, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 244,
              columnNumber: 78
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 234,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 233,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.fieldType === "DICT" ? /* @__PURE__ */ jsxDEV39(
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
              /* @__PURE__ */ jsxDEV39("option", { value: "", children: "-" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                lineNumber: 259,
                columnNumber: 45
              }, this),
              dicts.map((dic) => /* @__PURE__ */ jsxDEV39("option", { value: dic.id, children: dic.title }, dic.id, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                lineNumber: 260,
                columnNumber: 77
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 249,
            columnNumber: 43
          },
          this
        ) : null }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 247,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 265,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 264,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 278,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 277,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 291,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 290,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 304,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 303,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 317,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 316,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 330,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 329,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV39(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 343,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 342,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV39("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV39(Form12, { method: "post", children: [
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "id", defaultValue: field?.id ? field.id : "" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 357,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV39(
            CustomButton,
            {
              className: "bg-red-500 hover:shadow-red-100",
              onClick: handleDelete,
              type: "submit",
              name: "_action",
              value: "deleteInputField",
              children: [
                /* @__PURE__ */ jsxDEV39("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV39("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                  lineNumber: 366,
                  columnNumber: 49
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                  lineNumber: 365,
                  columnNumber: 45
                }, this),
                t("delete")
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 358,
              columnNumber: 41
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 356,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 355,
          columnNumber: 33
        }, this)
      ] }, field.id, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 171,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 169,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 147,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 146,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV39(
      Form12,
      {
        id: "deleteGroupForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: [
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 389,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV39("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 390,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 377,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/form_input.tsx
import { Form as Form13 } from "@remix-run/react";
import { useTranslation as useTranslation17 } from "react-i18next";
import { Fragment as Fragment4, jsxDEV as jsxDEV40 } from "react/jsx-dev-runtime";
function InputFormForm({ inputForm, groups }) {
  let { t } = useTranslation17();
  return /* @__PURE__ */ jsxDEV40(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV40("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV40(
        CustomButton,
        {
          className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
          form: "addGroupForm",
          type: "submit",
          name: "_action",
          value: "createEmptyGroup",
          children: [
            /* @__PURE__ */ jsxDEV40("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV40("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 25,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 24,
              columnNumber: 21
            }, this),
            t("add_group")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 17,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV40(
        CustomButton,
        {
          className: "hidden",
          id: "updateInputFormButton",
          form: "updateInputForm",
          type: "submit",
          name: "_action",
          value: "updateInputForm",
          children: [
            /* @__PURE__ */ jsxDEV40("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV40("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 38,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 37,
              columnNumber: 21
            }, this),
            t("save")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 29,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV40(
        CustomButton,
        {
          className: "bg-red-500 hover:shadow-red-100",
          form: "deleteInputForm",
          type: "submit",
          name: "_action",
          value: "deleteInputForm",
          children: [
            /* @__PURE__ */ jsxDEV40("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV40("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 50,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 49,
              columnNumber: 21
            }, this),
            t("delete")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 42,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV40(
      Form13,
      {
        id: "addGroupForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV40("input", { type: "hidden", name: "inputFormId", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV40("input", { type: "hidden", name: "cnt", defaultValue: groups.length + 1 }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this)
        ]
      },
      1,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 55,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV40(
      Form13,
      {
        id: "updateInputForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV40("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV40(
            CustomInput,
            {
              id: "inputForm_pos",
              title: t("pos"),
              type: "number",
              defaultValue: inputForm?.pos,
              name: "pos",
              required: !0,
              onChange: () => {
                document.getElementById("updateInputFormButton").click();
              },
              subClass: "w-16"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 70,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV40(
            CustomInput,
            {
              id: "inputForm_title",
              title: t("title"),
              type: "text",
              defaultValue: inputForm?.title,
              name: "title",
              required: !0,
              onChange: () => {
                document.getElementById("updateInputFormButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          )
        ]
      },
      2,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV40(
      Form13,
      {
        id: "deleteInputForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            t("confirm_delete")
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV40("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this)
      },
      3,
      !1,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 97,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/form_search.tsx
import { Form as Form14 } from "@remix-run/react";
import { useTranslation as useTranslation18 } from "react-i18next";
import { Fragment as Fragment5, jsxDEV as jsxDEV41 } from "react/jsx-dev-runtime";
function SearchFormForm({ searchForm, inputFields }) {
  let { t } = useTranslation18(), handleDelete = async (event) => {
    confirm(
      t("confirm_delete")
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV41(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV41("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV41(
        CustomButton,
        {
          className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
          form: "addSearchFieldForm",
          type: "submit",
          name: "_action",
          value: "createEmptySearchField",
          children: [
            /* @__PURE__ */ jsxDEV41("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV41("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 34,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 33,
              columnNumber: 21
            }, this),
            t("add_field")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 26,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV41(
        CustomButton,
        {
          className: "hidden",
          id: "updateSearchFormButton",
          form: "updateSearchForm",
          type: "submit",
          name: "_action",
          value: "updateSearchForm",
          children: [
            /* @__PURE__ */ jsxDEV41("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV41("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 47,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 46,
              columnNumber: 21
            }, this),
            t("save")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 38,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV41(
        CustomButton,
        {
          className: "bg-red-500 hover:shadow-red-100",
          form: "deleteSearchForm",
          type: "submit",
          name: "_action",
          value: "deleteSearchForm",
          children: [
            /* @__PURE__ */ jsxDEV41("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV41("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 59,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 58,
              columnNumber: 21
            }, this),
            t("delete")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 51,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV41(
      Form14,
      {
        id: "addSearchFieldForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "searchFormId", defaultValue: searchForm.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "cnt", defaultValue: searchForm.fields?.length + 1 }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 64,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV41(
      Form14,
      {
        id: "updateSearchForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "id", defaultValue: searchForm.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV41(
            CustomInput,
            {
              id: "searchForm_pos",
              title: t("pos"),
              type: "number",
              value: searchForm?.pos,
              name: "pos",
              required: !0,
              onChange: () => {
                document.getElementById("updateSearchFormButton").click();
              },
              subClass: "w-16"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 78,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV41(
            CustomInput,
            {
              id: "searchForm_title",
              title: t("title"),
              type: "text",
              value: searchForm?.title,
              name: "title",
              required: !0,
              onChange: () => {
                document.getElementById("updateSearchFormButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 91,
              columnNumber: 17
            },
            this
          )
        ]
      },
      searchForm?.id,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 71,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV41(
      Form14,
      {
        id: "deleteSearchForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            t("confirm_delete")
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 105,
        columnNumber: 13
      },
      this
    ),
    searchForm?.fields && searchForm.fields.map((field) => /* @__PURE__ */ jsxDEV41(
      Form14,
      {
        className: "hidden",
        id: `updateSearchFieldForm_${field.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 126,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "searchFormId", defaultValue: field.searchFormId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 127,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV41(
            CustomButton,
            {
              className: "bg-green-500 hover:shadow-green-100",
              id: `updateSearchFieldButton_${field.id}`,
              form: `updateSearchFieldForm_${field.id}`,
              type: "submit",
              name: "_action",
              value: "updateSearchField",
              children: [
                /* @__PURE__ */ jsxDEV41("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV41("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                  lineNumber: 137,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                  lineNumber: 136,
                  columnNumber: 25
                }, this),
                t("save")
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
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
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 120,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV41("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxDEV41("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV41(
        "thead",
        {
          className: "bg-blue-gray-400 text-white text-center",
          children: /* @__PURE__ */ jsxDEV41("tr", { children: [
            /* @__PURE__ */ jsxDEV41("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 149,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV41("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("pos") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 150,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV41("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("title") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 151,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV41("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("field") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 152,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV41("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 153,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 148,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 145,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV41("tbody", { children: searchForm?.fields && searchForm.fields.map((field, index) => /* @__PURE__ */ jsxDEV41("tr", { children: [
        /* @__PURE__ */ jsxDEV41("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 159,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV41("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV41(
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
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 161,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 160,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV41(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            children: /* @__PURE__ */ jsxDEV41(
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
                fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                lineNumber: 176,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 173,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV41("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV41(
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
              /* @__PURE__ */ jsxDEV41("option", { value: "", children: "-" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                lineNumber: 199,
                columnNumber: 41
              }, this),
              inputFields && inputFields.map(
                (fld) => /* @__PURE__ */ jsxDEV41("option", { value: fld.id, children: `${fld.group.pos}. ${fld.group.title} -> ${fld.title}` }, fld.id, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                  lineNumber: 202,
                  columnNumber: 49
                }, this)
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 189,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 188,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV41("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV41(Form14, { method: "post", children: [
          /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 209,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV41(
            CustomButton,
            {
              className: "bg-red-500 hover:shadow-red-100",
              onClick: handleDelete,
              type: "submit",
              name: "_action",
              value: "deleteSearchField",
              children: [
                /* @__PURE__ */ jsxDEV41("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV41("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                  lineNumber: 218,
                  columnNumber: 49
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                  lineNumber: 217,
                  columnNumber: 45
                }, this),
                t("delete")
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 210,
              columnNumber: 41
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 208,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 207,
          columnNumber: 33
        }, this)
      ] }, field.id, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 158,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 156,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 144,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 143,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/forms.tsx
import { jsxDEV as jsxDEV42 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV42("div", { className: "p-4 border border-gray-900 grow", children: state === "inputForm" && inputForm ? /* @__PURE__ */ jsxDEV42(InputFormForm, { inputForm, groups }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 30,
    columnNumber: 19
  }, this) : state === "searchForm" && searchForm ? /* @__PURE__ */ jsxDEV42(SearchFormForm, { searchForm, inputFields }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 32,
    columnNumber: 23
  }, this) : state === "dictionary" && dictionary ? /* @__PURE__ */ jsxDEV42(DictionaryForm, { dictionary }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 34,
    columnNumber: 27
  }, this) : state === "group" && group ? /* @__PURE__ */ jsxDEV42(GroupForm, { group, dicts: dictionaries }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 36,
    columnNumber: 31
  }, this) : null }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/view.tsx
import { jsxDEV as jsxDEV43 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV43("div", { className: "mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]", children: [
    /* @__PURE__ */ jsxDEV43(ErrorMessage, { errors }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/view.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV43(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ jsxDEV43(
        Buttons3,
        {
          state,
          dictionaries_count: dictionaries && dictionaries.length ? dictionaries.length : 0,
          inputForms_count: inputForms && inputForms.length ? inputForms.length : 0,
          searchForms_count: searchForms && searchForms.length ? searchForms.length : 0
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/view.tsx",
          lineNumber: 46,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV43("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ jsxDEV43(
          DbStructNav,
          {
            state,
            inputForms,
            searchForms,
            dictionaries,
            groups,
            inputFormId,
            searchFormId,
            dictionaryId,
            groupId
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/view.tsx",
            lineNumber: 53,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV43(
          Forms,
          {
            state,
            dictionaries,
            groups,
            inputForm,
            searchForm,
            dictionary,
            group,
            inputFields
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/view.tsx",
            lineNumber: 64,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/view.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/view.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/view.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.db_struct.tsx
import { jsxDEV as jsxDEV44 } from "react/jsx-dev-runtime";
async function loader4({
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
  return json4({
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
async function action3({
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
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyInputForm")
    try {
      let form = await api_default.db.createEmptyInputForm(Number(values.cnt));
      return redirect2(`/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`);
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteInputForm")
    try {
      return await api_default.db.deleteInputForm(Number(values.id)), redirect2("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateSearchForm")
    try {
      return await api_default.db.updateSearchForm(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        title: String(values.title)
      }), redirect2(`/dashboard/db_struct?state=searchForm&searchFormId=${values.id}`);
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptySearchForm")
    try {
      let form = await api_default.db.createEmptySearchForm(Number(values.cnt));
      return redirect2(`/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`);
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteSearchForm")
    try {
      return await api_default.db.deleteSearchForm(Number(values.id)), redirect2("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateDictionary")
    try {
      return await api_default.db.updateDictionary(Number(values.id), {
        id: Number(values.id),
        title: String(values.title)
      }), redirect2(`/dashboard/db_struct?state=dictionary&dictionaryId=${values.id}`);
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyDictionary")
    try {
      let dict = await api_default.db.createEmptyDictionary(Number(values.cnt));
      return redirect2(`/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`);
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteDictionary")
    try {
      return await api_default.db.deleteDictionary(Number(values.id)), redirect2("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyGroup")
    try {
      let group = await api_default.db.createEmptyGroup(Number(values.inputFormId), Number(values.cnt));
      return redirect2(`/dashboard/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}`);
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
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
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteGroup")
    try {
      return await api_default.db.deleteGroup(Number(values.id)), redirect2("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
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
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyInputField")
    try {
      await api_default.db.createEmptyInputField(Number(values.groupId), Number(values.cnt));
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteInputField")
    try {
      await api_default.db.deleteInputField(Number(values.id));
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptySearchField")
    try {
      await api_default.db.createEmptySearchField(Number(values.searchFormId), Number(values.cnt));
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
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
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteSearchField")
    try {
      await api_default.db.deleteSearchField(Number(values.id));
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "generateStructDb")
    try {
      await api_default.db.generateStructDb();
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  return json4({ errors });
}
function DbStruct() {
  let { dictionaries, inputForms, searchForms } = useOutletContext3(), {
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    groups,
    inputFields
  } = useLoaderData4(), data = useActionData3();
  return /* @__PURE__ */ jsxDEV44(
    DbStructView,
    {
      errors: data?.errors ? data?.errors : void 0,
      state,
      inputForms,
      searchForms,
      dictionaries,
      groups,
      inputFormId: inputForm?.id,
      searchFormId: searchForm?.id,
      dictionaryId: dictionary?.id,
      groupId: group?.id,
      inputForm,
      searchForm,
      dictionary,
      group,
      inputFields
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.db_struct.tsx",
      lineNumber: 307,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.users.tsx
var dashboard_users_exports = {};
__export(dashboard_users_exports, {
  action: () => action4,
  default: () => Users,
  loader: () => loader5
});
import { Prisma as Prisma4 } from "@prisma/client";
import { json as json5, redirect as redirect3 } from "@remix-run/node";
import { useActionData as useActionData4, useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/components/UI/widgets/users/user_dialog.tsx
import MaterialTailwind5 from "@material-tailwind/react";
import { Form as Form15 } from "@remix-run/react";
import moment from "moment";
import { useEffect as useEffect2, useState as useState5 } from "react";
import { useTranslation as useTranslation19 } from "react-i18next";
import { jsxDEV as jsxDEV45 } from "react/jsx-dev-runtime";
var { Dialog: Dialog3, Card: Card3, CardBody: CardBody3, CardFooter: CardFooter3 } = MaterialTailwind5;
function UserDialog({ isNew, user, departments, errors }) {
  let { t } = useTranslation19(), [open, setOpen] = useState5(!1);
  return useEffect2(() => {
    setOpen(!!user);
  }, [user]), /* @__PURE__ */ jsxDEV45(
    Dialog3,
    {
      placeholder: "",
      size: "sm",
      open,
      handler: () => setOpen(!1),
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV45(Card3, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV45(CardBody3, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV45(
            Form15,
            {
              id: "userForm",
              className: "flex flex-col gap-3",
              method: "post",
              children: [
                /* @__PURE__ */ jsxDEV45("input", { type: "hidden", name: "id", defaultValue: user?.id ? user.id : "" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                  lineNumber: 43,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV45(
                  CustomInput,
                  {
                    id: "user_is_active",
                    type: "checkbox",
                    name: "isActive",
                    title: t("is_active"),
                    defaultChecked: user?.isActive
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                    lineNumber: 44,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV45(
                  CustomInput,
                  {
                    id: "user_login",
                    type: "text",
                    name: "login",
                    title: t("login"),
                    defaultValue: user?.login,
                    required: !0,
                    readOnly: !isNew,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                    lineNumber: 51,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV45(
                  CustomInput,
                  {
                    id: "user_password",
                    type: "password",
                    name: "password",
                    title: t("password"),
                    defaultValue: user?.password,
                    required: !1,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                    lineNumber: 61,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV45(
                  CustomInput,
                  {
                    id: "user_firsName",
                    type: "text",
                    name: "firstName",
                    title: t("first_name"),
                    defaultValue: user?.firstName ? user.firstName : "",
                    required: !1,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                    lineNumber: 70,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV45(
                  CustomInput,
                  {
                    id: "user_lastName",
                    type: "text",
                    name: "lastName",
                    title: t("last_name"),
                    defaultValue: user?.lastName ? user.lastName : "",
                    required: !1,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                    lineNumber: 79,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV45(
                  CustomInput,
                  {
                    id: "user_middleName",
                    type: "text",
                    name: "middleName",
                    title: t("middle_name"),
                    defaultValue: user?.middleName ? user.middleName : "",
                    required: !1,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                    lineNumber: 88,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV45(
                  CustomSelect,
                  {
                    id: "user_department",
                    name: "departmentId",
                    title: t("department"),
                    defaultValue: user?.departmentId ? user.departmentId : "",
                    required: !1,
                    children: [
                      /* @__PURE__ */ jsxDEV45("option", { children: "-" }, void 0, !1, {
                        fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                        lineNumber: 104,
                        columnNumber: 29
                      }, this),
                      departments.map((item) => /* @__PURE__ */ jsxDEV45("option", { value: item.id, children: item.title }, void 0, !1, {
                        fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                        lineNumber: 106,
                        columnNumber: 33
                      }, this))
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                    lineNumber: 97,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV45(
                  CustomInput,
                  {
                    id: "user_expiredPwd",
                    type: "date",
                    name: "expiredPwd",
                    title: t("expired_password"),
                    defaultValue: moment(user?.expiredPwd).format("YYYY-MM-DD"),
                    required: !0,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/user_dialog.tsx",
                    lineNumber: 109,
                    columnNumber: 25
                  },
                  this
                )
              ]
            },
            user?.id,
            !0,
            {
              fileName: "app/components/UI/widgets/users/user_dialog.tsx",
              lineNumber: 37,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV45("span", { className: "text-red-500 text-sm", children: errors }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/user_dialog.tsx",
            lineNumber: 119,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/users/user_dialog.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV45(CardFooter3, { className: "pt-0 flex flex-row gap-3 justify-center", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV45(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
              form: "userForm",
              type: "submit",
              name: "_action",
              value: isNew ? "createUser" : "updateUser",
              children: t("save")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/user_dialog.tsx",
              lineNumber: 122,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV45(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
              onClick: () => setOpen(!1),
              children: t("close")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/user_dialog.tsx",
              lineNumber: 131,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/users/user_dialog.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/users/user_dialog.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/users/user_dialog.tsx",
      lineNumber: 28,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/users/btn_new_user.tsx
import { useNavigate as useNavigate4 } from "@remix-run/react";
import { useTranslation as useTranslation20 } from "react-i18next";
import { jsxDEV as jsxDEV46 } from "react/jsx-dev-runtime";
function ButtonNewUser() {
  let navigate = useNavigate4(), { t } = useTranslation20();
  return /* @__PURE__ */ jsxDEV46(
    CustomButton,
    {
      className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
      onClick: () => navigate("/dashboard/users?new=True"),
      children: [
        /* @__PURE__ */ jsxDEV46("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV46("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_new_user.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_new_user.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        t("new_user")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/users/btn_new_user.tsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/users/users_table.tsx
import moment2 from "moment";
import { useNavigate as useNavigate5 } from "@remix-run/react";

// app/components/UI/widgets/users/btn_delete_user.tsx
import { Form as Form16 } from "@remix-run/react";
import { useTranslation as useTranslation21 } from "react-i18next";
import { jsxDEV as jsxDEV47 } from "react/jsx-dev-runtime";
function ButtonDeleteUser({ userId }) {
  let { t } = useTranslation21();
  return /* @__PURE__ */ jsxDEV47(Form16, { method: "post", children: [
    /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "id", defaultValue: userId }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV47(
      CustomButton,
      {
        className: "bg-red-500 hover:shadow-red-100",
        onClick: async (event) => {
          confirm(
            t("confirm_delete")
          ) || event.preventDefault();
        },
        type: "submit",
        name: "_action",
        value: "deleteUser",
        children: [
          /* @__PURE__ */ jsxDEV47("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV47("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
            lineNumber: 32,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this),
          t("delete")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/users_table.tsx
import { useTranslation as useTranslation22 } from "react-i18next";
import { jsxDEV as jsxDEV48 } from "react/jsx-dev-runtime";
function UsersTable({ users, departments }) {
  let navigate = useNavigate5(), { t } = useTranslation22();
  return /* @__PURE__ */ jsxDEV48(
    "table",
    {
      className: "border-2 border-blue-gray-700 w-full",
      children: [
        /* @__PURE__ */ jsxDEV48(
          "thead",
          {
            className: "bg-blue-gray-400 text-white text-center",
            children: /* @__PURE__ */ jsxDEV48("tr", { children: [
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 24,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("is_active") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 25,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("login") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 26,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("first_name") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 27,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("last_name") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 28,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("middle_name") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 29,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("department") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 30,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("expired_password") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 31,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("created") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 32,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700", children: t("updated") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 33,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV48("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 34,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/UI/widgets/users/users_table.tsx",
              lineNumber: 23,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/users/users_table.tsx",
            lineNumber: 20,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV48("tbody", { children: users.map((user, index) => /* @__PURE__ */ jsxDEV48(
          "tr",
          {
            children: [
              /* @__PURE__ */ jsxDEV48("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 42,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV48(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                  onClick: () => navigate(`/dashboard/users?userId=${user.id}`),
                  children: user.isActive ? t("active") : t("not_active")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/users_table.tsx",
                  lineNumber: 43,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV48(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                  onClick: () => navigate(`/dashboard/users?userId=${user.id}`),
                  children: user.login
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/users_table.tsx",
                  lineNumber: 48,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV48(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                  onClick: () => navigate(`/dashboard/users?userId=${user.id}`),
                  children: user.firstName
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/users_table.tsx",
                  lineNumber: 54,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV48(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                  onClick: () => navigate(`/dashboard/users?userId=${user.id}`),
                  children: user.lastName
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/users_table.tsx",
                  lineNumber: 60,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV48(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                  onClick: () => navigate(`/dashboard/users?userId=${user.id}`),
                  children: user.middleName
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/users_table.tsx",
                  lineNumber: 66,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV48("td", { className: "p-1 text-sm border border-blue-gray-700", children: departments.find((item) => item.id === user.departmentId)?.title }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 72,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV48("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment2(user.expiredPwd).format("DD.MM.YYYY") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 75,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV48("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment2(user.createdAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 78,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV48("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment2(user.updatedAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 81,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV48("td", { className: "p-1 text-sm border border-blue-gray-700 flex justify-center", children: /* @__PURE__ */ jsxDEV48(ButtonDeleteUser, { userId: user.id }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 85,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/users_table.tsx",
                lineNumber: 84,
                columnNumber: 25
              }, this)
            ]
          },
          user.id,
          !0,
          {
            fileName: "app/components/UI/widgets/users/users_table.tsx",
            lineNumber: 39,
            columnNumber: 21
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/users_table.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/users/users_table.tsx",
      lineNumber: 17,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/users/view.tsx
import { jsxDEV as jsxDEV49 } from "react/jsx-dev-runtime";
function UsersView({
  isNew,
  user,
  users,
  departments,
  errors
}) {
  return /* @__PURE__ */ jsxDEV49("div", { className: "mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]", children: [
    /* @__PURE__ */ jsxDEV49(ErrorMessage, { errors }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/view.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV49(
      UserDialog,
      {
        isNew,
        user: user || null,
        departments,
        errors
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/users/view.tsx",
        lineNumber: 26,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV49(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ jsxDEV49("div", { className: "mb-2 flex justify-between py-2 px-2 border border-gray-900", children: /* @__PURE__ */ jsxDEV49(
        "div",
        {
          className: "flex items-center gap-3",
          children: /* @__PURE__ */ jsxDEV49(ButtonNewUser, {}, void 0, !1, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 37,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 34,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/UI/widgets/users/view.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV49(
        UsersTable,
        {
          users,
          departments
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 40,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/users/view.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/view.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.users.tsx
import { jsxDEV as jsxDEV50 } from "react/jsx-dev-runtime";
async function loader5({
  request
}) {
  let roles = await api_default.users.getRoles(), departments = await api_default.users.getDepartments(), users = await api_default.users.getUsers(), url = new URL(request.url), userId = url.searchParams.get("userId"), isNew = url.searchParams.get("new"), user;
  return isNew ? user = {} : userId && (user = await api_default.users.getUser(Number(userId)), user = { ...user, password: void 0 }), json5({ user, users, roles, departments, isNew });
}
async function action4({
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
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
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
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "deleteUser") {
    let userId = Number(values.id);
    try {
      return await api_default.users.deleteUser(userId), redirect3("/dashboard/users");
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  return json5({ errors });
}
function Users() {
  let { user, users, departments, isNew } = useLoaderData5(), data = useActionData4();
  return /* @__PURE__ */ jsxDEV50(
    UsersView,
    {
      isNew: !!isNew,
      user,
      users,
      departments,
      errors: data?.errors ? data.errors : void 0
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.users.tsx",
      lineNumber: 98,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard,
  loader: () => loader6
});
import { json as json6, useLoaderData as useLoaderData6 } from "@remix-run/react";
import { useEffect as useEffect3, useState as useState7 } from "react";
import {
  NewspaperIcon,
  UsersIcon,
  CircleStackIcon
} from "@heroicons/react/24/solid";
import { useTranslation as useTranslation25 } from "react-i18next";

// app/components/UI/widgets/dashboard/view.tsx
import { Outlet as Outlet2 } from "@remix-run/react";

// app/components/UI/widgets/dashboard/menu/main_menu.tsx
import MaterialTailwind8 from "@material-tailwind/react";

// app/components/UI/elements/logo.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV51 } from "react/jsx-dev-runtime";
var Logo = () => /* @__PURE__ */ jsxDEV51(Link3, { to: "/", className: "flex gap-3", children: [
  /* @__PURE__ */ jsxDEV51(
    "img",
    {
      className: "h-14 object-cover object-center",
      src: "/logo.png",
      alt: "logo"
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/elements/logo.tsx",
      lineNumber: 6,
      columnNumber: 13
    },
    this
  ),
  /* @__PURE__ */ jsxDEV51("span", { className: "font-bold text-lg self-center pt-1 text-blue-gray-800", children: "Db Creator" }, void 0, !1, {
    fileName: "app/components/UI/elements/logo.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/UI/elements/logo.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this), logo_default = Logo;

// app/components/UI/widgets/dashboard/menu/nav_list.tsx
import MaterialTailwind7 from "@material-tailwind/react";

// app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx
import MaterialTailwind6 from "@material-tailwind/react";
import { Fragment as Fragment6, createElement, useState as useState6 } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV52 } from "react/jsx-dev-runtime";
var {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} = MaterialTailwind6;
function NavListMenu({ menuTitle, navListMenuItems }) {
  let [isMenuOpen, setIsMenuOpen] = useState6(!1), [isMobileMenuOpen, setIsMobileMenuOpen] = useState6(!1), renderItems = navListMenuItems.map(
    ({ icon, title, link }, key) => /* @__PURE__ */ jsxDEV52("a", { href: "#", children: /* @__PURE__ */ jsxDEV52(
      MenuItem,
      {
        placeholder: "",
        className: "flex items-center gap-3 rounded-lg",
        children: [
          /* @__PURE__ */ jsxDEV52("div", { className: "flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ", children: [
            " ",
            createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6"
            })
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
            lineNumber: 34,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV52("div", { children: /* @__PURE__ */ jsxDEV52(
            Typography,
            {
              className: "flex items-center text-sm font-bold",
              variant: "h6",
              color: "blue-gray",
              placeholder: "",
              children: /* @__PURE__ */ jsxDEV52(Link4, { to: link, children: title }, void 0, !1, {
                fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                lineNumber: 48,
                columnNumber: 29
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
              lineNumber: 42,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
            lineNumber: 41,
            columnNumber: 21
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
        lineNumber: 30,
        columnNumber: 17
      },
      this
    ) }, key, !1, {
      fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  );
  return /* @__PURE__ */ jsxDEV52(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV52(
      Menu,
      {
        open: isMenuOpen,
        handler: setIsMenuOpen,
        offset: { mainAxis: 20 },
        placement: "bottom",
        children: [
          /* @__PURE__ */ jsxDEV52(MenuHandler, { children: /* @__PURE__ */ jsxDEV52(
            Typography,
            {
              className: "font-medium",
              as: "div",
              variant: "small",
              placeholder: "",
              children: /* @__PURE__ */ jsxDEV52(
                ListItem,
                {
                  className: "flex items-center gap-2 py-2 pr-4 font-medium text-gray-900",
                  selected: isMenuOpen || isMobileMenuOpen,
                  onClick: () => setIsMobileMenuOpen((cur) => !cur),
                  placeholder: "",
                  children: [
                    menuTitle,
                    /* @__PURE__ */ jsxDEV52(
                      ChevronDownIcon,
                      {
                        strokeWidth: 2.5,
                        className: `hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                        lineNumber: 78,
                        columnNumber: 29
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV52(
                      ChevronDownIcon,
                      {
                        strokeWidth: 2.5,
                        className: `block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                        lineNumber: 83,
                        columnNumber: 29
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                  lineNumber: 71,
                  columnNumber: 25
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
              lineNumber: 65,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV52(
            MenuList,
            {
              className: "hidden max-w-screen-xl rounded-xl lg:block",
              placeholder: "",
              children: /* @__PURE__ */ jsxDEV52("ul", { className: "flex flex-col gap-y-2 outline-none outline-0", children: renderItems }, void 0, !1, {
                fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                lineNumber: 95,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
              lineNumber: 91,
              columnNumber: 17
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
        lineNumber: 58,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV52("div", { className: "block lg:hidden", children: /* @__PURE__ */ jsxDEV52(Collapse, { open: isMobileMenuOpen, children: renderItems }, void 0, !1, {
      fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
      lineNumber: 101,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dashboard/menu/nav_list.tsx
import { useTranslation as useTranslation23 } from "react-i18next";
import { jsxDEV as jsxDEV53 } from "react/jsx-dev-runtime";
var { List } = MaterialTailwind7;
function NavList({
  editDataMenuItems,
  searchDataMenuItems,
  serviceMenuItems
}) {
  let { t } = useTranslation23();
  return /* @__PURE__ */ jsxDEV53(
    List,
    {
      className: "mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1",
      placeholder: "",
      children: [
        /* @__PURE__ */ jsxDEV53(
          NavListMenu,
          {
            menuTitle: t("edit_data"),
            navListMenuItems: editDataMenuItems
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list.tsx",
            lineNumber: 25,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV53(
          NavListMenu,
          {
            menuTitle: t("search_data"),
            navListMenuItems: searchDataMenuItems
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list.tsx",
            lineNumber: 29,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV53(
          NavListMenu,
          {
            menuTitle: t("service"),
            navListMenuItems: serviceMenuItems
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list.tsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/dashboard/menu/nav_list.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/elements/language.tsx
import { useTranslation as useTranslation24 } from "react-i18next";
import { jsxDEV as jsxDEV54 } from "react/jsx-dev-runtime";
function LanguagePanel() {
  let { i18n } = useTranslation24();
  return /* @__PURE__ */ jsxDEV54("div", { className: "flex flex-row justify-center items-center gap-4 font-bold", children: [
    {
      title: "KAZ",
      label: "kk"
    },
    {
      title: "RUS",
      label: "ru"
    }
  ].map((item, index) => /* @__PURE__ */ jsxDEV54(
    "span",
    {
      className: `${i18n.language === item.label ? "border-2 border-blue-gray-500" : ""} p-1 text-sm rounded-md hover:cursor-pointer`,
      onClick: () => i18n.changeLanguage(item.label),
      children: item.title
    },
    index,
    !1,
    {
      fileName: "app/components/UI/elements/language.tsx",
      lineNumber: 20,
      columnNumber: 17
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/UI/elements/language.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dashboard/menu/main_menu.tsx
import {
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { jsxDEV as jsxDEV55 } from "react/jsx-dev-runtime";
var {
  IconButton,
  Collapse: Collapse2
} = MaterialTailwind8;
function MainMenu({
  openNav,
  setOpenNav,
  editDataMenuItems,
  searchDataMenuItems,
  serviceMenuItems
}) {
  return /* @__PURE__ */ jsxDEV55("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV55(
    "div",
    {
      className: "w-full px-4 bg-white shadow shadow-blue-gray-300 mb-2",
      children: [
        /* @__PURE__ */ jsxDEV55("div", { className: "w-full flex items-center justify-between text-blue-gray-900", children: [
          /* @__PURE__ */ jsxDEV55("div", { className: "shrink-0 h-16", children: /* @__PURE__ */ jsxDEV55(logo_default, {}, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 37,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV55("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV55(
            NavList,
            {
              editDataMenuItems,
              searchDataMenuItems,
              serviceMenuItems
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
              lineNumber: 41,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 40,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV55(
            IconButton,
            {
              variant: "text",
              color: "blue-gray",
              className: "lg:hidden",
              onClick: () => setOpenNav(!openNav),
              placeholder: "",
              children: openNav ? /* @__PURE__ */ jsxDEV55(XMarkIcon, { className: "h-6 w-6", strokeWidth: 2 }, void 0, !1, {
                fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
                lineNumber: 55,
                columnNumber: 29
              }, this) : /* @__PURE__ */ jsxDEV55(Bars3Icon, { className: "h-6 w-6", strokeWidth: 2 }, void 0, !1, {
                fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
                lineNumber: 57,
                columnNumber: 29
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
              lineNumber: 47,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV55(LanguagePanel, {}, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 60,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV55(Collapse2, { open: openNav, children: /* @__PURE__ */ jsxDEV55(
          NavList,
          {
            editDataMenuItems,
            searchDataMenuItems,
            serviceMenuItems
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 63,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
      lineNumber: 32,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dashboard/view.tsx
import { jsxDEV as jsxDEV56 } from "react/jsx-dev-runtime";
function DashboardView({
  openNav,
  setOpenNav,
  editDataMenuItems,
  searchDataMenuItems,
  serviceMenuItems,
  context
}) {
  return /* @__PURE__ */ jsxDEV56("div", { className: "w-full h-screen", children: [
    /* @__PURE__ */ jsxDEV56(
      MainMenu,
      {
        openNav,
        setOpenNav,
        editDataMenuItems,
        searchDataMenuItems,
        serviceMenuItems
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/dashboard/view.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV56("div", { className: "overflow-y-auto h-[calc(100vh-5rem)]", children: /* @__PURE__ */ jsxDEV56(Outlet2, { context }, void 0, !1, {
      fileName: "app/components/UI/widgets/dashboard/view.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/widgets/dashboard/view.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/dashboard/view.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.tsx
import { jsxDEV as jsxDEV57 } from "react/jsx-dev-runtime";
async function loader6() {
  let dictionaries = await api_default.db.getDictionaries(), inputForms = await api_default.db.getInputForms(), searchForms = await api_default.db.getSearchForms();
  return json6({
    dictionaries,
    inputForms,
    searchForms
  });
}
function dashboard() {
  let { t } = useTranslation25(), data = useLoaderData6(), [docs, setDocs] = useState7({}), [current, setCurrent] = useState7(0), [conditions, setConditions] = useState7([]), context = {
    ...data,
    docs,
    setDocs,
    current,
    setCurrent,
    conditions,
    setConditions
  }, [openNav, setOpenNav] = useState7(!1), editDataMenuItems = data.inputForms.map((item) => ({
    title: item.title,
    link: `/dashboard/enter_data/${item.id}`,
    icon: NewspaperIcon
  })), searchDataMenuItems = data.searchForms.map((item) => ({
    title: item.title,
    link: `/dashboard/search_data/${item.id}`,
    icon: NewspaperIcon
  })), serviceMenuItems = [
    {
      title: t("db_structure"),
      link: "db_struct",
      icon: CircleStackIcon
    },
    {
      title: t("users"),
      link: "users",
      icon: UsersIcon
    }
  ];
  return useEffect3(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(!1)
    );
  }, []), /* @__PURE__ */ jsxDEV57(
    DashboardView,
    {
      openNav,
      setOpenNav,
      editDataMenuItems,
      searchDataMenuItems,
      serviceMenuItems,
      context
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 82,
      columnNumber: 9
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { Link as Link5 } from "@remix-run/react";
import { jsxDEV as jsxDEV58 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV58("div", { children: /* @__PURE__ */ jsxDEV58(Link5, { to: "/dashboard", children: "Dashboard" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-TAHU6LB7.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-XJ6BYS35.js", "/build/_shared/chunk-TJ4YKIVD.js", "/build/_shared/chunk-Q6LMBPEP.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KLSWWMWR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-O7O22ZK6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-WCMTBFBG.js", imports: ["/build/_shared/chunk-DGLILCEK.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.db_struct": { id: "routes/dashboard.db_struct", parentId: "routes/dashboard", path: "db_struct", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.db_struct-EDHQW5RW.js", imports: ["/build/_shared/chunk-FMBQK5TO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.enter_data.$formId": { id: "routes/dashboard.enter_data.$formId", parentId: "routes/dashboard", path: "enter_data/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.enter_data.$formId-TBBRFJS4.js", imports: ["/build/_shared/chunk-35IR2J3X.js", "/build/_shared/chunk-FMBQK5TO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.search_data.$formId": { id: "routes/dashboard.search_data.$formId", parentId: "routes/dashboard", path: "search_data/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.search_data.$formId-PSLAM6BY.js", imports: ["/build/_shared/chunk-FMBQK5TO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.users": { id: "routes/dashboard.users", parentId: "routes/dashboard", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.users-E6D2IMC7.js", imports: ["/build/_shared/chunk-35IR2J3X.js", "/build/_shared/chunk-FMBQK5TO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "8a7437c8", hmr: { runtime: "/build/_shared/chunk-Q6LMBPEP.js", timestamp: 1709722588938 }, url: "/build/manifest-8A7437C8.js" };

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
  "routes/dashboard.search_data.$formId": {
    id: "routes/dashboard.search_data.$formId",
    parentId: "routes/dashboard",
    path: "search_data/:formId",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_search_data_formId_exports
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

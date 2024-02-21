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
var tailwind_default = "/build/_assets/tailwind-RKC6NXJO.css";

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
import { Prisma } from "@prisma/client";
import { json, redirect } from "@remix-run/node";
import { Form as Form5, useActionData, useFetcher as useFetcher4, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

// app/ui/forms/dict_form.tsx
import MaterialTailwind from "@material-tailwind/react";
import { Form, useFetcher } from "@remix-run/react";

// app/ui/elements/input_field.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Input({ type, name, title, value, required, readonly, onChange }) {
  return /* @__PURE__ */ jsxDEV3(
    "div",
    {
      className: "flex flex-col gap-1 w-fit",
      children: [
        /* @__PURE__ */ jsxDEV3(
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
            lineNumber: 16,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          "input",
          {
            className: "font-mono",
            id: name,
            type,
            defaultValue: value,
            "aria-label": name,
            name,
            required,
            readOnly: readonly,
            onChange,
            size: 5,
            maxLength: 10
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/input_field.tsx",
            lineNumber: 22,
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
      lineNumber: 13,
      columnNumber: 9
    },
    this
  );
}

// app/ui/elements/custom_button.tsx
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
      fileName: "app/ui/elements/custom_button.tsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  );
}

// app/ui/forms/dict_form.tsx
import { Fragment, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var { Spinner } = MaterialTailwind;
function DictionaryForm({ dictionary }) {
  let fetcher = useFetcher(), isDeleting = fetcher.state !== "idle", handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV5(Fragment, { children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV5(
        CustomButton,
        {
          className: "hidden",
          id: "updateDictionaryButton",
          form: "updateDictionary",
          type: "submit",
          name: "_action",
          value: "updateDictionary",
          children: [
            /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
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
      /* @__PURE__ */ jsxDEV5(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/dict_form.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV5(
          CustomButton,
          {
            className: "bg-red-500 hover:shadow-red-100",
            disabled: isDeleting,
            onClick: handleDelete,
            type: "submit",
            name: "_action",
            value: "deleteDictionary",
            children: isDeleting ? /* @__PURE__ */ jsxDEV5(Fragment, { children: [
              /* @__PURE__ */ jsxDEV5(Spinner, { className: "w-4 h-4" }, void 0, !1, {
                fileName: "app/ui/forms/dict_form.tsx",
                lineNumber: 51,
                columnNumber: 33
              }, this),
              "Deleting..."
            ] }, void 0, !0, {
              fileName: "app/ui/forms/dict_form.tsx",
              lineNumber: 50,
              columnNumber: 31
            }, this) : /* @__PURE__ */ jsxDEV5(Fragment, { children: [
              /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
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
    /* @__PURE__ */ jsxDEV5(
      Form,
      {
        id: "updateDictionary",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/dict_form.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5(
            Input,
            {
              title: "Title",
              type: "text",
              value: dictionary?.title,
              "aria-label": "title",
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
    /* @__PURE__ */ jsxDEV5(
      Form,
      {
        id: "deleteDictionary",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
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
import MaterialTailwind2 from "@material-tailwind/react";
import { Form as Form2, useFetcher as useFetcher2, useNavigate } from "@remix-run/react";

// app/ui/elements/check_field.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function CheckField({ type, name, title, value, required, onChange }) {
  return /* @__PURE__ */ jsxDEV6(
    "div",
    {
      className: "flex flex-col gap-1",
      children: [
        /* @__PURE__ */ jsxDEV6(
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
            lineNumber: 17,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          "input",
          {
            id: name,
            type,
            checked: value,
            "aria-label": name,
            name,
            required,
            onChange
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/check_field.tsx",
            lineNumber: 23,
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
      lineNumber: 14,
      columnNumber: 9
    },
    this
  );
}

// app/ui/forms/group_form.tsx
import { FieldType } from "@prisma/client";
import { Fragment as Fragment2, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var { Button } = MaterialTailwind2;
function GroupForm({ group, dicts }) {
  let navigate = useNavigate(), fetcher = useFetcher2(), isDeleting = fetcher.state !== "idle", handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV7(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV7(
        CustomButton,
        {
          className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
          form: "addInputFieldForm",
          type: "submit",
          name: "_action",
          value: "createEmptyInputField",
          children: [
            /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 39,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 38,
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
      /* @__PURE__ */ jsxDEV7(
        Button,
        {
          id: "updateGroupButton",
          className: "hidden",
          color: "green",
          form: "updateGroupForm",
          placeholder: "",
          type: "submit",
          size: "sm",
          name: "_action",
          value: "updateGroup",
          children: [
            /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 55,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 54,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 43,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7(
        Button,
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
            /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 70,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 69,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 59,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7(
      fetcher.Form,
      {
        id: "addInputFieldForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "groupId", defaultValue: group.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "cnt", defaultValue: group.fields.length + 1 }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 75,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      Form2,
      {
        id: "updateGroupForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV7(
            Input,
            {
              type: "number",
              name: "pos",
              title: "Pos: ",
              value: group?.pos,
              required: !0,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 91,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            Input,
            {
              type: "text",
              name: "title",
              title: "Title: ",
              value: group?.title,
              required: !0,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 102,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            CheckField,
            {
              type: "checkbox",
              name: "isMulty",
              title: "Is Multy: ",
              value: !!group?.isMulty,
              required: !1,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 113,
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
        lineNumber: 83,
        columnNumber: 13
      },
      this
    ),
    group?.fields && group.fields.map((field) => /* @__PURE__ */ jsxDEV7(
      Form2,
      {
        className: "hidden",
        id: `updateInputFieldForm_${field.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 132,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "groupId", defaultValue: field.groupId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 133,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV7(
            Button,
            {
              id: `updateInputFieldButton_${field.id}`,
              className: "flex items-center gap-1",
              color: "green",
              form: `updateInputFieldForm_${field.id}`,
              placeholder: "",
              size: "sm",
              type: "submit",
              name: "_action",
              value: "updateInputField",
              children: [
                /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
                  fileName: "app/ui/forms/group_form.tsx",
                  lineNumber: 146,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/ui/forms/group_form.tsx",
                  lineNumber: 145,
                  columnNumber: 25
                }, this),
                "Save"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 134,
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
        lineNumber: 126,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV7("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxDEV7("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV7(
        "thead",
        {
          className: "bg-blue-gray-400 text-white text-center",
          children: /* @__PURE__ */ jsxDEV7("tr", { children: [
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 158,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Pos" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 159,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Span" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 160,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Start" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 161,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Title" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 162,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Type" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 163,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Dict" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 164,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Len" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 165,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Precision" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 166,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Key" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 167,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Visible" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 168,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Enable" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 169,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Require" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 170,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Duplicate" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 171,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV7("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 172,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 157,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 154,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7("tbody", { className: "text-center", children: group?.fields && group.fields.map((field, index) => /* @__PURE__ */ jsxDEV7("tr", { children: [
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 178,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 180,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 179,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 193,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 192,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 208,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 207,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            onClick: () => navigate(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}&inputFieldId=${field.id}`),
            children: /* @__PURE__ */ jsxDEV7(
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
                lineNumber: 226,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 222,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV7(
          "select",
          {
            className: "text-sm w-full",
            form: `updateInputFieldForm_${field.id}`,
            name: "fieldType",
            defaultValue: field.fieldType,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            },
            children: Object.keys(FieldType).map((key) => /* @__PURE__ */ jsxDEV7("option", { value: key, children: key }, key, !1, {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 250,
              columnNumber: 78
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 240,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 239,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.fieldType === "DICT" ? /* @__PURE__ */ jsxDEV7(
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
              /* @__PURE__ */ jsxDEV7("option", { value: "", children: "-" }, void 0, !1, {
                fileName: "app/ui/forms/group_form.tsx",
                lineNumber: 265,
                columnNumber: 45
              }, this),
              dicts.map((dic) => /* @__PURE__ */ jsxDEV7("option", { value: dic.id, children: dic.title }, dic.id, !1, {
                fileName: "app/ui/forms/group_form.tsx",
                lineNumber: 266,
                columnNumber: 77
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 255,
            columnNumber: 43
          },
          this
        ) : null }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 253,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 271,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 270,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 284,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 283,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 297,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 296,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 310,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 309,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 323,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 322,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 336,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 335,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 349,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 348,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV7("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV7(fetcher.Form, { method: "post", children: [
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "id", defaultValue: field?.id ? field.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 363,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV7(
            Button,
            {
              className: "hover:underline",
              color: "red",
              placeholder: "",
              size: "sm",
              disabled: isDeleting,
              onClick: handleDelete,
              type: "submit",
              name: "_action",
              value: "deleteInputField",
              children: isDeleting ? "Deleting..." : "Delete"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/group_form.tsx",
              lineNumber: 364,
              columnNumber: 41
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 362,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/ui/forms/group_form.tsx",
          lineNumber: 361,
          columnNumber: 33
        }, this)
      ] }, field.id, !0, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 177,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 175,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 153,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/ui/forms/group_form.tsx",
      lineNumber: 152,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7(
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
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 396,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/ui/forms/group_form.tsx",
            lineNumber: 397,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/forms/group_form.tsx",
        lineNumber: 384,
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
import { Fragment as Fragment3, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var { Button: Button2 } = MaterialTailwind3;
function InputFormForm({ inputForm, groups }) {
  return /* @__PURE__ */ jsxDEV8(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV8(
        Button2,
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
            /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 26,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 25,
              columnNumber: 21
            }, this),
            "Add Group"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 15,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(
        Button2,
        {
          id: "updateInputFormButton",
          className: "hidden",
          color: "green",
          form: "updateInputForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "updateInputForm",
          children: [
            /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 42,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 41,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 30,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(
        Button2,
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
            /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 57,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/input_form.tsx",
              lineNumber: 56,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 46,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/input_form.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8(
      Form3,
      {
        id: "addGroupForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "inputFormId", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/input_form.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "cnt", defaultValue: groups.length + 1 }, void 0, !1, {
            fileName: "app/ui/forms/input_form.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        ]
      },
      1,
      !0,
      {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 62,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV8(
      Form3,
      {
        id: "updateInputForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/ui/forms/input_form.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8(
            Input,
            {
              title: "Pos: ",
              type: "number",
              value: inputForm?.pos,
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
              lineNumber: 77,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            Input,
            {
              title: "Title: ",
              type: "text",
              value: inputForm?.title,
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
              lineNumber: 88,
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
        lineNumber: 70,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV8(
      Form3,
      {
        id: "deleteInputForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/input_form.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this)
      },
      3,
      !1,
      {
        fileName: "app/ui/forms/input_form.tsx",
        lineNumber: 100,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/forms/input_form.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/ui/forms/search_form.tsx
import MaterialTailwind4 from "@material-tailwind/react";
import { Form as Form4, useFetcher as useFetcher3 } from "@remix-run/react";
import { Fragment as Fragment4, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var { Button: Button3 } = MaterialTailwind4;
function SearchFormForm({ searchForm, inputFields }) {
  let fetcher = useFetcher3(), isDeleting = fetcher.state !== "idle", handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV9(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV9(
        Button3,
        {
          className: "flex items-center gap-1",
          color: "blue-gray",
          form: "addSearchFieldForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "createEmptySearchField",
          children: [
            /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 38,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 37,
              columnNumber: 21
            }, this),
            "Add Field"
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
      ),
      /* @__PURE__ */ jsxDEV9(
        Button3,
        {
          id: "updateSearchFormButton",
          className: "hidden",
          color: "green",
          form: "updateSearchForm",
          placeholder: "",
          size: "sm",
          type: "submit",
          name: "_action",
          value: "updateSearchForm",
          children: [
            /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 54,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 53,
              columnNumber: 21
            }, this),
            "Save"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 42,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(
        Button3,
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
            /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 69,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 68,
              columnNumber: 21
            }, this),
            "Delete"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 58,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9(
      fetcher.Form,
      {
        id: "addSearchFieldForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "searchFormId", defaultValue: searchForm.id }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "cnt", defaultValue: searchForm.fields?.length + 1 }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 74,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV9(
      Form4,
      {
        id: "updateSearchForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "id", defaultValue: searchForm.id }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9(
            Input,
            {
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
              lineNumber: 88,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            Input,
            {
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
              lineNumber: 99,
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
        lineNumber: 81,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV9(
      Form4,
      {
        id: "deleteSearchForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 111,
        columnNumber: 13
      },
      this
    ),
    searchForm?.fields && searchForm.fields.map((field) => /* @__PURE__ */ jsxDEV9(
      Form4,
      {
        className: "hidden",
        id: `updateSearchFieldForm_${field.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 132,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "searchFormId", defaultValue: field.searchFormId }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 133,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV9(
            Button3,
            {
              id: `updateSearchFieldButton_${field.id}`,
              className: "flex items-center gap-1",
              color: "green",
              form: `updateSearchFieldForm_${field.id}`,
              placeholder: "",
              size: "sm",
              type: "submit",
              name: "_action",
              value: "updateSearchField",
              children: [
                /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 146,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 145,
                  columnNumber: 25
                }, this),
                "Save"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 134,
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
        lineNumber: 126,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV9("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxDEV9("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV9(
        "thead",
        {
          className: "bg-blue-gray-400 text-white text-center",
          children: /* @__PURE__ */ jsxDEV9("tr", { children: [
            /* @__PURE__ */ jsxDEV9("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 158,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV9("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Pos" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 159,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV9("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Title" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 160,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV9("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Field" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 161,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV9("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, !1, {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 162,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 157,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 154,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9("tbody", { children: searchForm?.fields && searchForm.fields.map((field, index) => /* @__PURE__ */ jsxDEV9("tr", { children: [
        /* @__PURE__ */ jsxDEV9("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 168,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV9("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV9(
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
            lineNumber: 170,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 169,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV9(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            children: /* @__PURE__ */ jsxDEV9(
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
                lineNumber: 185,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 182,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV9("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV9(
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
              /* @__PURE__ */ jsxDEV9("option", { value: "", children: "-" }, void 0, !1, {
                fileName: "app/ui/forms/search_form.tsx",
                lineNumber: 208,
                columnNumber: 41
              }, this),
              inputFields && inputFields.map(
                (fld) => /* @__PURE__ */ jsxDEV9("option", { value: fld.id, children: `${fld.group.pos}. ${fld.group.title} -> ${fld.title}` }, fld.id, !1, {
                  fileName: "app/ui/forms/search_form.tsx",
                  lineNumber: 211,
                  columnNumber: 49
                }, this)
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 198,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 197,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV9("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV9(fetcher.Form, { method: "post", children: [
          /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/ui/forms/search_form.tsx",
            lineNumber: 218,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV9(
            Button3,
            {
              className: "hover:underline",
              color: "red",
              placeholder: "",
              size: "sm",
              disabled: isDeleting,
              onClick: handleDelete,
              type: "submit",
              name: "_action",
              value: "deleteSearchField",
              children: isDeleting ? "Deleting..." : "Delete"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/forms/search_form.tsx",
              lineNumber: 219,
              columnNumber: 41
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 217,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/ui/forms/search_form.tsx",
          lineNumber: 216,
          columnNumber: 33
        }, this)
      ] }, field.id, !0, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 167,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/ui/forms/search_form.tsx",
        lineNumber: 165,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 153,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/ui/forms/search_form.tsx",
      lineNumber: 152,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/ui/forms/search_form.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

// app/ui/panels/db_struct.tsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV10("ul", { children: [
    /* @__PURE__ */ jsxDEV10(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "inputForm" && !inputFormId ? "bg-blue-gray-200" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 32,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV10(
            Link,
            {
              to: "/db_struct?state=inputForm&inputFormId=0",
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
    /* @__PURE__ */ jsxDEV10("ul", { children: inputForms.map((form) => /* @__PURE__ */ jsxDEV10("div", { children: [
      /* @__PURE__ */ jsxDEV10(
        Link,
        {
          to: `/db_struct?state=inputForm&inputFormId=${form.id}`,
          children: /* @__PURE__ */ jsxDEV10(
            "li",
            {
              className: [
                "pl-4 flex items-center gap-1 hover:cursor-pointer",
                state === "inputForm" && form.id === inputFormId ? "bg-blue-gray-200" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
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
      /* @__PURE__ */ jsxDEV10("ul", { children: form.groups.map((gr) => /* @__PURE__ */ jsxDEV10(
        Link,
        {
          to: `/db_struct?state=group&inputFormId=${gr.inputFormId}&groupId=${gr.id}`,
          children: /* @__PURE__ */ jsxDEV10(
            "li",
            {
              className: [
                "pl-8 flex items-center gap-1 hover:cursor-pointer",
                state === "group" && gr.id === groupId ? "bg-blue-gray-200" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
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
    /* @__PURE__ */ jsxDEV10(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "searchForm" && !searchFormId ? "bg-blue-gray-200" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 82,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV10(
            Link,
            {
              to: "/db_struct?state=searchForm&searchFormId=0",
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
    /* @__PURE__ */ jsxDEV10("ul", { children: searchForms.map((form) => /* @__PURE__ */ jsxDEV10(
      Link,
      {
        to: `/db_struct?state=searchForm&searchFormId=${form.id}`,
        children: /* @__PURE__ */ jsxDEV10(
          "li",
          {
            className: [
              "pl-4 flex items-center gap-1 hover:cursor-pointer",
              state === "searchForm" && form.id === searchFormId ? "bg-blue-gray-200" : ""
            ].join(" "),
            children: [
              /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
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
    /* @__PURE__ */ jsxDEV10(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "dictionary" && !dictionaryId ? "bg-blue-gray-200" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 113,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/ui/panels/db_struct.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV10(
            Link,
            {
              to: "/db_struct?state=dictionary&dictionaryId=0",
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
    /* @__PURE__ */ jsxDEV10("ul", { children: dictionaries.map((dict) => /* @__PURE__ */ jsxDEV10(
      Link,
      {
        to: `/db_struct?state=dictionary&dictionaryId=${dict.id}`,
        children: /* @__PURE__ */ jsxDEV10(
          "li",
          {
            className: [
              "pl-4 flex items-center gap-1 hover:cursor-pointer",
              state === "dictionary" && dict.id === dictionaryId ? "bg-blue-gray-200" : ""
            ].join(" "),
            children: [
              /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
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
    getDictionaries() {
      return prisma2.dictionary.findMany({
        orderBy: {
          title: "asc"
        }
      });
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

// app/api/forms.ts
function FormsModule(prisma2) {
  return {
    getDic(dicId, isEdit) {
      return isEdit ? prisma2.$queryRawUnsafe(`SELECT * FROM dic_${dicId} WHERE is_enabled = true`) : prisma2.$queryRawUnsafe(`SELECT * FROM dic_${dicId}`);
    }
  };
}

// app/api/index.ts
var api_default = {
  users: UsersModule(instance_default),
  db: DbModule(instance_default),
  forms: FormsModule(instance_default)
};

// app/routes/db_struct._index.tsx
import { useEffect, useState } from "react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var { Alert, Button: Button4 } = MaterialTailwind5;
async function loader({
  request
}) {
  let url = new URL(request.url), state = url.searchParams.get("state"), inputFormId = url.searchParams.get("inputFormId"), searchFormId = url.searchParams.get("searchFormId"), dictionaryId = url.searchParams.get("dictionaryId"), groupId = url.searchParams.get("groupId"), inputFieldId = url.searchParams.get("inputFieldId"), inputForms = await api_default.db.getInputForms(), searchForms = await api_default.db.getSearchForms(), dictionaries = await api_default.db.getDictionaries(), groups = await api_default.db.getGroups(Number(inputFormId)), inputFields = await api_default.db.getInputFields(), inputForm, searchForm, dictionary, group, inputField;
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
  return json({
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    inputField,
    dictionaries,
    inputForms,
    searchForms,
    groups,
    inputFields
  });
}
async function action({
  request
}) {
  let errors = null, formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  if (_action === "updateInputForm")
    try {
      return await api_default.db.updateInputForm(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        title: String(values.title)
      }), redirect(`/db_struct?state=inputForm&inputFormId=${values.id}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyInputForm")
    try {
      let form = await api_default.db.createEmptyInputForm(Number(values.cnt));
      return redirect(`/db_struct?state=inputForm&inputFormId=${form.id}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteInputForm")
    try {
      return await api_default.db.deleteInputForm(Number(values.id)), redirect("/db_struct");
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateSearchForm")
    try {
      return await api_default.db.updateSearchForm(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        title: String(values.title)
      }), redirect(`/db_struct?state=searchForm&searchFormId=${values.id}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptySearchForm")
    try {
      let form = await api_default.db.createEmptySearchForm(Number(values.cnt));
      return redirect(`/db_struct?state=searchForm&searchFormId=${form.id}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteSearchForm")
    try {
      return await api_default.db.deleteSearchForm(Number(values.id)), redirect("/db_struct");
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateDictionary")
    try {
      return await api_default.db.updateDictionary(Number(values.id), {
        id: Number(values.id),
        title: String(values.title)
      }), redirect(`/db_struct?state=dictionary&dictionaryId=${values.id}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyDictionary")
    try {
      let dict = await api_default.db.createEmptyDictionary(Number(values.cnt));
      return redirect(`/db_struct?state=dictionary&dictionaryId=${dict.id}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteDictionary")
    try {
      return await api_default.db.deleteDictionary(Number(values.id)), redirect("/db_struct");
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyGroup")
    try {
      let group = await api_default.db.createEmptyGroup(Number(values.inputFormId), Number(values.cnt));
      return redirect(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
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
      return redirect(`/db_struct?state=group&inputFormId=${group.inputFormId}&groupId=${group.id}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteGroup")
    try {
      return await api_default.db.deleteGroup(Number(values.id)), redirect("/db_struct");
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
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
      }), redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.groupId}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyInputField")
    try {
      await api_default.db.createEmptyInputField(Number(values.groupId), Number(values.cnt));
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteInputField")
    try {
      await api_default.db.deleteInputField(Number(values.id));
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptySearchField")
    try {
      await api_default.db.createEmptySearchField(Number(values.searchFormId), Number(values.cnt));
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateSearchField")
    try {
      return await api_default.db.updateSearchField(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        searchFormId: Number(values.searchFormId),
        title: String(values.title),
        fieldId: Number(values.fieldId)
      }), redirect(`/db_struct?state=searchForm&searchFormId=${values.searchFormId}`);
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteSearchField")
    try {
      await api_default.db.deleteSearchField(Number(values.id));
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "generateStructDb")
    try {
      await api_default.db.generateStructDb();
    } catch (e) {
      e instanceof Prisma.PrismaClientKnownRequestError && (errors = e.message);
    }
  return json({ errors });
}
function DbStruct() {
  let [open, setOpen] = useState(!1), {
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    dictionaries,
    inputForms,
    searchForms,
    groups,
    inputFields
  } = useLoaderData(), data = useActionData(), isRestruct = useFetcher4().state !== "idle", handleRestruct = async (event) => {
    confirm(
      "Please confirm you want to restructure database."
    ) || event.preventDefault();
  };
  return useEffect(() => {
    data?.errors && setOpen(!0);
  }, [data]), /* @__PURE__ */ jsxDEV11("div", { className: "mx-4 flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ jsxDEV11("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: "Db Struct" }, void 0, !1, {
      fileName: "app/routes/db_struct._index.tsx",
      lineNumber: 338,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV11(Alert, { className: "text-white bg-red-500", open, onClose: () => setOpen(!1), children: data?.errors ? data.errors : "" }, void 0, !1, {
      fileName: "app/routes/db_struct._index.tsx",
      lineNumber: 339,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV11(
      "div",
      {
        className: "flex justify-end items-center gap-3 h-14",
        children: [
          state === "dictionary" ? /* @__PURE__ */ jsxDEV11(Form5, { method: "post", children: [
            /* @__PURE__ */ jsxDEV11("input", { type: "hidden", name: "cnt", defaultValue: dictionaries.length + 1 }, void 0, !1, {
              fileName: "app/routes/db_struct._index.tsx",
              lineNumber: 347,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV11(
              Button4,
              {
                className: "flex items-center gap-3",
                color: "blue-gray",
                placeholder: "",
                size: "sm",
                type: "submit",
                name: "_action",
                value: "createEmptyDictionary",
                children: [
                  /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 358,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 357,
                    columnNumber: 29
                  }, this),
                  "Add Dictionary"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/db_struct._index.tsx",
                lineNumber: 348,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 346,
            columnNumber: 23
          }, this) : state === "inputForm" ? /* @__PURE__ */ jsxDEV11(Form5, { method: "post", children: [
            /* @__PURE__ */ jsxDEV11("input", { type: "hidden", name: "cnt", defaultValue: inputForms.length + 1 }, void 0, !1, {
              fileName: "app/routes/db_struct._index.tsx",
              lineNumber: 365,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV11(
              Button4,
              {
                className: "flex items-center gap-3",
                color: "blue-gray",
                placeholder: "",
                size: "sm",
                type: "submit",
                name: "_action",
                value: "createEmptyInputForm",
                children: [
                  /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 376,
                    columnNumber: 37
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 375,
                    columnNumber: 33
                  }, this),
                  "Add InputForm"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/db_struct._index.tsx",
                lineNumber: 366,
                columnNumber: 29
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 364,
            columnNumber: 27
          }, this) : state === "searchForm" ? /* @__PURE__ */ jsxDEV11(Form5, { method: "post", children: [
            /* @__PURE__ */ jsxDEV11("input", { type: "hidden", name: "cnt", defaultValue: searchForms.length + 1 }, void 0, !1, {
              fileName: "app/routes/db_struct._index.tsx",
              lineNumber: 383,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV11(
              Button4,
              {
                className: "flex items-center gap-3",
                color: "blue-gray",
                placeholder: "",
                size: "sm",
                type: "submit",
                name: "_action",
                value: "createEmptySearchForm",
                children: [
                  /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 394,
                    columnNumber: 41
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/db_struct._index.tsx",
                    lineNumber: 393,
                    columnNumber: 37
                  }, this),
                  "Add SearchForm"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/db_struct._index.tsx",
                lineNumber: 384,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 382,
            columnNumber: 31
          }, this) : null,
          /* @__PURE__ */ jsxDEV11(Form5, { method: "post", children: /* @__PURE__ */ jsxDEV11(
            Button4,
            {
              className: "flex items-center gap-3",
              color: "blue",
              placeholder: "",
              size: "sm",
              type: "submit",
              name: "_action",
              value: "generateStructDb",
              disabled: isRestruct,
              onClick: handleRestruct,
              children: [
                /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV11("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" }, void 0, !1, {
                  fileName: "app/routes/db_struct._index.tsx",
                  lineNumber: 413,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/db_struct._index.tsx",
                  lineNumber: 412,
                  columnNumber: 25
                }, this),
                isRestruct ? "Restructuring..." : "Restruct Database"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/db_struct._index.tsx",
              lineNumber: 401,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/db_struct._index.tsx",
            lineNumber: 400,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 342,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11("div", { className: "flex flex-row h-full w-full", children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "bg-white p-4 mr-5 w-1/3 border shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ jsxDEV11(
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
          lineNumber: 421,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 420,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "bg-white w-full border p-4 shadow-blue-gray-700 shadow-md overflow-auto", children: state === "inputForm" && inputForm ? /* @__PURE__ */ jsxDEV11(InputFormForm, { inputForm, groups }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 435,
        columnNumber: 27
      }, this) : state === "searchForm" && searchForm ? /* @__PURE__ */ jsxDEV11(SearchFormForm, { searchForm, inputFields }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 437,
        columnNumber: 31
      }, this) : state === "dictionary" && dictionary ? /* @__PURE__ */ jsxDEV11(DictionaryForm, { dictionary }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 439,
        columnNumber: 35
      }, this) : state === "group" && group ? /* @__PURE__ */ jsxDEV11(GroupForm, { group, dicts: dictionaries }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 441,
        columnNumber: 39
      }, this) : null }, void 0, !1, {
        fileName: "app/routes/db_struct._index.tsx",
        lineNumber: 433,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/db_struct._index.tsx",
      lineNumber: 419,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/db_struct._index.tsx",
    lineNumber: 337,
    columnNumber: 9
  }, this);
}

// app/routes/forms.$formId.tsx
var forms_formId_exports = {};
__export(forms_formId_exports, {
  action: () => action2,
  default: () => Forms,
  loader: () => loader2
});
import MaterialTailwind6 from "@material-tailwind/react";
import { Prisma as Prisma2 } from "@prisma/client";
import { json as json2, redirect as redirect2 } from "@remix-run/node";
import { Form as Form6, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { useEffect as useEffect2, useState as useState2 } from "react";

// app/ui/elements/form_input.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function FormInput({ cls, fieldType, fieldName, title, value, required, disabled, size, maxLength, step, isSelect = !1, options }) {
  return /* @__PURE__ */ jsxDEV12(
    "div",
    {
      className: `p-1 flex items-baseline ${cls}`,
      children: [
        /* @__PURE__ */ jsxDEV12(
          "label",
          {
            className: "font-bold text-sm mr-1 min-w-40",
            htmlFor: fieldName,
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/ui/elements/form_input.tsx",
            lineNumber: 22,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col justify-between", children: [
          isSelect ? /* @__PURE__ */ jsxDEV12(
            "select",
            {
              className: "font-mono text-sm border-2 p-1 focus:outline-blue-gray-500 bg-white",
              id: fieldName,
              name: fieldName,
              defaultValue: value,
              required,
              disabled,
              children: [
                /* @__PURE__ */ jsxDEV12("option", { children: "-" }, void 0, !1, {
                  fileName: "app/ui/elements/form_input.tsx",
                  lineNumber: 38,
                  columnNumber: 25
                }, this),
                options?.data.map((item) => /* @__PURE__ */ jsxDEV12("option", { value: item.id, children: item.title }, item.id, !1, {
                  fileName: "app/ui/elements/form_input.tsx",
                  lineNumber: 40,
                  columnNumber: 29
                }, this))
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/ui/elements/form_input.tsx",
              lineNumber: 30,
              columnNumber: 23
            },
            this
          ) : /* @__PURE__ */ jsxDEV12(
            "input",
            {
              className: "font-mono text-sm border-2 p-1 focus:outline-blue-gray-500",
              id: fieldName,
              type: fieldType,
              name: fieldName,
              defaultValue: value,
              required,
              disabled,
              size,
              maxLength,
              step
            },
            void 0,
            !1,
            {
              fileName: "app/ui/elements/form_input.tsx",
              lineNumber: 43,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12("span", { className: "text-sm text-red-500 h-4" }, void 0, !1, {
            fileName: "app/ui/elements/form_input.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/ui/elements/form_input.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/elements/form_input.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  );
}

// app/routes/forms.$formId.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var { Alert: Alert2, Button: Button5 } = MaterialTailwind6;
async function loader2({
  request,
  params
}) {
  let url = new URL(request.url), state = url.searchParams.get("state"), isNew = url.searchParams.get("isNew"), dicts = [], inputForm, errors = null, doc, dictionaries = await api_default.db.getDictionaries();
  for (let dict of dictionaries) {
    let data = await api_default.forms.getDic(dict.id, Boolean(state === "edit"));
    dicts.push({
      dictId: dict.id,
      data
    });
  }
  try {
    inputForm = await api_default.db.getInputForm(Number(params.formId));
    for (let field of inputForm.fields)
      doc[`f${field.id}`] = null;
  } catch (e) {
    e instanceof Prisma2.PrismaClientKnownRequestError && (errors = e.message);
  }
  return json2({ state, inputForm, errors, dicts, doc });
}
async function action2({
  request
}) {
  let errors = null, formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  if (_action === "createDoc")
    return redirect2(`/forms/${values.formId}?state=edit&isNew=true`);
}
function Forms() {
  let [open, setOpen] = useState2(!1), { state, inputForm, errors, dicts, doc } = useLoaderData2();
  return useEffect2(() => {
    errors && setOpen(!0);
  }, [errors]), /* @__PURE__ */ jsxDEV13("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ jsxDEV13("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: inputForm?.title }, void 0, !1, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV13(Alert2, { className: "text-white bg-red-500", open, onClose: () => setOpen(!1), children: errors || "" }, void 0, !1, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV13(
      "div",
      {
        className: "flex items-center gap-3",
        children: /* @__PURE__ */ jsxDEV13(Form6, { method: "post", children: [
          /* @__PURE__ */ jsxDEV13("input", { type: "hidden", name: "formId", value: inputForm.id }, void 0, !1, {
            fileName: "app/routes/forms.$formId.tsx",
            lineNumber: 87,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV13(
            Button5,
            {
              className: "flex items-center gap-3",
              color: "blue-gray",
              placeholder: "",
              size: "sm",
              type: "submit",
              name: "_action",
              value: "createDoc",
              children: [
                /* @__PURE__ */ jsxDEV13("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV13("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                  fileName: "app/routes/forms.$formId.tsx",
                  lineNumber: 98,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/forms.$formId.tsx",
                  lineNumber: 97,
                  columnNumber: 25
                }, this),
                "Create"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 88,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/forms.$formId.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/forms.$formId.tsx",
        lineNumber: 83,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV13("div", { className: "bg-white w-full border p-1 shadow-blue-gray-700 shadow-md overflow-auto", children: /* @__PURE__ */ jsxDEV13(
      Form6,
      {
        id: "editDocument",
        children: inputForm?.groups && inputForm.groups.map((group) => /* @__PURE__ */ jsxDEV13("div", { children: [
          /* @__PURE__ */ jsxDEV13("h2", { className: "bg-orange-700 text-white font-bold text-sm p-1 pl-4", children: group.title }, void 0, !1, {
            fileName: "app/routes/forms.$formId.tsx",
            lineNumber: 110,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV13(
            "div",
            {
              className: "border border-blue-gray p-2 mb-2 grid grid-cols-3",
              children: group?.fields && group.fields.map((fld) => {
                let fieldName = `f${fld.id}`, cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`;
                switch (fld.fieldType) {
                  case "TEXT":
                    return /* @__PURE__ */ jsxDEV13(
                      FormInput,
                      {
                        cls,
                        fieldName,
                        fieldType: "text",
                        title: fld.title,
                        value: doc[fieldName],
                        required: fld.isRequire,
                        disabled: !fld.isEnable || state !== "edit",
                        size: fld.len ? fld.len : 30,
                        maxLength: fld.len ? fld.len : 30
                      },
                      fld.id,
                      !1,
                      {
                        fileName: "app/routes/forms.$formId.tsx",
                        lineNumber: 120,
                        columnNumber: 49
                      },
                      this
                    );
                  case "CYRILLIC":
                    return /* @__PURE__ */ jsxDEV13(
                      FormInput,
                      {
                        cls,
                        fieldName,
                        fieldType: "text",
                        title: fld.title,
                        value: doc[fieldName],
                        required: fld.isRequire,
                        disabled: !fld.isEnable || state !== "edit",
                        size: fld.len ? fld.len : 30,
                        maxLength: fld.len ? fld.len : 30
                      },
                      fld.id,
                      !1,
                      {
                        fileName: "app/routes/forms.$formId.tsx",
                        lineNumber: 135,
                        columnNumber: 49
                      },
                      this
                    );
                  case "INTEGER":
                    return /* @__PURE__ */ jsxDEV13(
                      FormInput,
                      {
                        cls,
                        fieldName,
                        fieldType: "number",
                        title: fld.title,
                        value: doc[fieldName],
                        required: fld.isRequire,
                        disabled: !fld.isEnable || state !== "edit",
                        size: fld.len ? fld.len : 30,
                        maxLength: fld.len ? fld.len : 30
                      },
                      fld.id,
                      !1,
                      {
                        fileName: "app/routes/forms.$formId.tsx",
                        lineNumber: 150,
                        columnNumber: 49
                      },
                      this
                    );
                  case "NUMERIC":
                    return /* @__PURE__ */ jsxDEV13(
                      FormInput,
                      {
                        cls,
                        fieldName,
                        fieldType: "number",
                        step: "0.01",
                        title: fld.title,
                        value: doc[fieldName],
                        required: fld.isRequire,
                        disabled: !fld.isEnable || state !== "edit",
                        size: fld.len ? fld.len : 30,
                        maxLength: fld.len ? fld.len : 30
                      },
                      fld.id,
                      !1,
                      {
                        fileName: "app/routes/forms.$formId.tsx",
                        lineNumber: 165,
                        columnNumber: 49
                      },
                      this
                    );
                  case "DICT":
                    let dic = dicts.find((item) => item.dictId === fld.dicId);
                    return /* @__PURE__ */ jsxDEV13(
                      FormInput,
                      {
                        cls,
                        fieldName,
                        fieldType: "number",
                        step: "0.01",
                        title: fld.title,
                        value: doc[fieldName],
                        required: fld.isRequire,
                        disabled: !fld.isEnable || state !== "edit",
                        size: fld.len ? fld.len : 30,
                        maxLength: fld.len ? fld.len : 30,
                        isSelect: !0,
                        options: dic
                      },
                      fld.id,
                      !1,
                      {
                        fileName: "app/routes/forms.$formId.tsx",
                        lineNumber: 182,
                        columnNumber: 49
                      },
                      this
                    );
                  case "DATE":
                    return /* @__PURE__ */ jsxDEV13(
                      FormInput,
                      {
                        cls,
                        fieldName,
                        fieldType: "date",
                        title: fld.title,
                        value: doc[fieldName],
                        required: fld.isRequire,
                        disabled: !fld.isEnable || state !== "edit",
                        size: fld.len ? fld.len : 30,
                        maxLength: fld.len ? fld.len : 30
                      },
                      fld.id,
                      !1,
                      {
                        fileName: "app/routes/forms.$formId.tsx",
                        lineNumber: 201,
                        columnNumber: 49
                      },
                      this
                    );
                  case "TIME":
                    return /* @__PURE__ */ jsxDEV13(
                      FormInput,
                      {
                        cls,
                        fieldName,
                        fieldType: "time",
                        title: fld.title,
                        value: doc[fieldName],
                        required: fld.isRequire,
                        disabled: !fld.isEnable || state !== "edit",
                        size: fld.len ? fld.len : 30,
                        maxLength: fld.len ? fld.len : 30
                      },
                      fld.id,
                      !1,
                      {
                        fileName: "app/routes/forms.$formId.tsx",
                        lineNumber: 216,
                        columnNumber: 49
                      },
                      this
                    );
                  case "FILE":
                    return /* @__PURE__ */ jsxDEV13(
                      FormInput,
                      {
                        cls,
                        fieldName,
                        fieldType: "file",
                        title: fld.title,
                        value: doc[fieldName],
                        required: fld.isRequire,
                        disabled: !fld.isEnable || state !== "edit",
                        size: fld.len ? fld.len : 30,
                        maxLength: fld.len ? fld.len : 30
                      },
                      fld.id,
                      !1,
                      {
                        fileName: "app/routes/forms.$formId.tsx",
                        lineNumber: 231,
                        columnNumber: 49
                      },
                      this
                    );
                }
              })
            },
            void 0,
            !1,
            {
              fileName: "app/routes/forms.$formId.tsx",
              lineNumber: 111,
              columnNumber: 29
            },
            this
          )
        ] }, group.id, !0, {
          fileName: "app/routes/forms.$formId.tsx",
          lineNumber: 109,
          columnNumber: 25
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/routes/forms.$formId.tsx",
        lineNumber: 105,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/forms.$formId.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/forms.$formId.tsx",
    lineNumber: 78,
    columnNumber: 9
  }, this);
}

// app/routes/users._index.tsx
var users_index_exports = {};
__export(users_index_exports, {
  action: () => action3,
  default: () => Users,
  loader: () => loader3
});
import MaterialTailwind8 from "@material-tailwind/react";
import { Prisma as Prisma3 } from "@prisma/client";
import { json as json3, redirect as redirect3 } from "@remix-run/node";
import { useActionData as useActionData2, useFetcher as useFetcher5, useLoaderData as useLoaderData3, useNavigate as useNavigate2 } from "@remix-run/react";
import moment2 from "moment";

// app/ui/dialogs/user_dialog.tsx
import MaterialTailwind7 from "@material-tailwind/react";
import { Form as Form7 } from "@remix-run/react";

// app/ui/elements/select_field.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function SelectField({ name, title, options, value, required }) {
  return /* @__PURE__ */ jsxDEV14(
    "div",
    {
      className: "flex flex-col gap-1",
      children: [
        /* @__PURE__ */ jsxDEV14(
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
        /* @__PURE__ */ jsxDEV14(
          "select",
          {
            id: name,
            defaultValue: value,
            "aria-label": name,
            name,
            required,
            children: [
              /* @__PURE__ */ jsxDEV14("option", { children: "-" }, void 0, !1, {
                fileName: "app/ui/elements/select_field.tsx",
                lineNumber: 27,
                columnNumber: 17
              }, this),
              options.map((item) => /* @__PURE__ */ jsxDEV14("option", { value: item.id, children: item.title }, item.id, !1, {
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
import moment from "moment";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var { Button: Button6, Dialog, Card, CardBody, CardFooter } = MaterialTailwind7;
function UserDialog({ isNew, handleOpen, open, user, roles, departments, errors }) {
  return /* @__PURE__ */ jsxDEV15(
    Dialog,
    {
      placeholder: "",
      size: "sm",
      open,
      handler: handleOpen,
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV15(Card, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV15(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV15(
            Form7,
            {
              id: "userForm",
              className: "flex flex-col gap-3",
              method: "post",
              children: [
                /* @__PURE__ */ jsxDEV15("input", { type: "hidden", name: "id", defaultValue: user?.id ? user.id : "" }, void 0, !1, {
                  fileName: "app/ui/dialogs/user_dialog.tsx",
                  lineNumber: 36,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV15(
                  Input,
                  {
                    type: "text",
                    name: "login",
                    title: "Login: ",
                    value: user?.login,
                    required: !0,
                    readonly: !isNew
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 37,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV15(
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
                    lineNumber: 45,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV15(
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
                    lineNumber: 52,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV15(
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
                    lineNumber: 59,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV15(
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
                    lineNumber: 66,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV15(
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
                    lineNumber: 73,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV15(
                  Input,
                  {
                    type: "date",
                    name: "expiredPwd",
                    title: "Expired Password: ",
                    value: moment(user?.expiredPwd).format("YYYY-MM-DD"),
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/dialogs/user_dialog.tsx",
                    lineNumber: 80,
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
              lineNumber: 30,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV15("span", { className: "text-red-500 text-sm", children: errors }, void 0, !1, {
            fileName: "app/ui/dialogs/user_dialog.tsx",
            lineNumber: 88,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV15(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV15(
            Button6,
            {
              variant: "gradient",
              color: "green",
              form: "userForm",
              placeholder: "",
              type: "submit",
              name: "_action",
              value: isNew ? "createUser" : "updateUser",
              fullWidth: !0,
              children: "Save"
            },
            void 0,
            !1,
            {
              fileName: "app/ui/dialogs/user_dialog.tsx",
              lineNumber: 91,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV15(Button6, { variant: "gradient", onClick: handleOpen, fullWidth: !0, placeholder: "", children: "Close" }, void 0, !1, {
            fileName: "app/ui/dialogs/user_dialog.tsx",
            lineNumber: 103,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/ui/dialogs/user_dialog.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/ui/dialogs/user_dialog.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/ui/dialogs/user_dialog.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
}

// app/routes/users._index.tsx
import { useEffect as useEffect3, useState as useState3 } from "react";
import { Fragment as Fragment5, jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var { Spinner: Spinner2, Button: Button7 } = MaterialTailwind8;
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
      return await api_default.users.createUser(createUser), redirect3("/users");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "updateUser") {
    let userId = Number(values.id), updateUser = {
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
    };
    try {
      return await api_default.users.updateUser(userId, updateUser), redirect3("/users");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "deleteUser") {
    let userId = Number(values.id);
    try {
      return await api_default.users.deleteUser(userId), redirect3("/users");
    } catch (e) {
      e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  return json3({ errors });
}
function Users() {
  let [open, setOpen] = useState3(!1), { user, users, roles, departments, isNew } = useLoaderData3(), actionData = useActionData2(), navigate = useNavigate2(), fetcher = useFetcher5(), isDeleting = fetcher.state !== "idle";
  useEffect3(() => {
    setOpen(!!user);
  }, [user]);
  let handleDelete = async (event) => {
    confirm(
      "Please confirm you want to delete this record."
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV16("div", { className: "container mx-auto flex flex-col gap-3 h-screen pb-5", children: [
    /* @__PURE__ */ jsxDEV16(
      UserDialog,
      {
        isNew: !!isNew,
        handleOpen: () => navigate("/users"),
        open,
        user: user || null,
        roles,
        departments,
        errors: actionData?.errors
      },
      void 0,
      !1,
      {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 122,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV16("h1", { className: "self-center text-amber-700 text-3xl font-bold mt-4", children: "Users" }, void 0, !1, {
      fileName: "app/routes/users._index.tsx",
      lineNumber: 131,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV16(
      "div",
      {
        className: "flex items-center gap-3",
        children: /* @__PURE__ */ jsxDEV16(
          Button7,
          {
            className: "flex items-center gap-3",
            color: "blue-gray",
            placeholder: "",
            size: "sm",
            onClick: () => {
              navigate("/users?new=true");
            },
            children: [
              /* @__PURE__ */ jsxDEV16("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
                fileName: "app/routes/users._index.tsx",
                lineNumber: 143,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/users._index.tsx",
                lineNumber: 142,
                columnNumber: 21
              }, this),
              "New User"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/users._index.tsx",
            lineNumber: 135,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 132,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV16(
      "table",
      {
        className: "border-2 border-blue-gray-700",
        children: [
          /* @__PURE__ */ jsxDEV16(
            "thead",
            {
              className: "bg-blue-gray-400 text-white text-center",
              children: /* @__PURE__ */ jsxDEV16("tr", { children: [
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 155,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Login" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 156,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "First Name" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 157,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Last Name" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 158,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Middle Name" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 159,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Department" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 160,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "Expired Password" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 161,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "created" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 162,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "updated" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 163,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV16("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 164,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/users._index.tsx",
                lineNumber: 154,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/users._index.tsx",
              lineNumber: 151,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV16("tbody", { children: users.map((user2, index) => /* @__PURE__ */ jsxDEV16(
            "tr",
            {
              children: [
                /* @__PURE__ */ jsxDEV16("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 173,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV16(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                    onClick: () => navigate(`/users?userId=${user2.id}`),
                    children: user2.login
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/users._index.tsx",
                    lineNumber: 174,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV16(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                    onClick: () => navigate(`/users?userId=${user2.id}`),
                    children: user2.firstName
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/users._index.tsx",
                    lineNumber: 180,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV16(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                    onClick: () => navigate(`/users?userId=${user2.id}`),
                    children: user2.lastName
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/users._index.tsx",
                    lineNumber: 186,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV16(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline",
                    onClick: () => navigate(`/users?userId=${user2.id}`),
                    children: user2.middleName
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/users._index.tsx",
                    lineNumber: 192,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV16("td", { className: "p-1 text-sm border border-blue-gray-700", children: departments.find((item) => item.id === user2.departmentId)?.title }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 198,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV16("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment2(user2.expiredPwd).format("DD.MM.YYYY") }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 199,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV16("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment2(user2.createdAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 200,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV16("td", { className: "p-1 text-sm border border-blue-gray-700", children: moment2(user2.updatedAt).format("DD.MM.YYYY H:m:s") }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 201,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV16("td", { className: "p-1 text-sm border border-blue-gray-700 flex justify-center", children: /* @__PURE__ */ jsxDEV16(fetcher.Form, { method: "post", children: [
                  /* @__PURE__ */ jsxDEV16("input", { type: "hidden", name: "id", defaultValue: user2?.id ? user2.id : "" }, void 0, !1, {
                    fileName: "app/routes/users._index.tsx",
                    lineNumber: 204,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV16(
                    CustomButton,
                    {
                      className: "bg-red-500 hover:shadow-red-100",
                      disabled: isDeleting,
                      onClick: handleDelete,
                      type: "submit",
                      name: "_action",
                      value: "deleteUser",
                      children: isDeleting ? /* @__PURE__ */ jsxDEV16(Fragment5, { children: [
                        /* @__PURE__ */ jsxDEV16(Spinner2, { className: "w-4 h-4" }, void 0, !1, {
                          fileName: "app/routes/users._index.tsx",
                          lineNumber: 215,
                          columnNumber: 49
                        }, this),
                        "Deleting..."
                      ] }, void 0, !0, {
                        fileName: "app/routes/users._index.tsx",
                        lineNumber: 214,
                        columnNumber: 47
                      }, this) : /* @__PURE__ */ jsxDEV16(Fragment5, { children: [
                        /* @__PURE__ */ jsxDEV16("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                          fileName: "app/routes/users._index.tsx",
                          lineNumber: 220,
                          columnNumber: 53
                        }, this) }, void 0, !1, {
                          fileName: "app/routes/users._index.tsx",
                          lineNumber: 219,
                          columnNumber: 49
                        }, this),
                        "Delete"
                      ] }, void 0, !0, {
                        fileName: "app/routes/users._index.tsx",
                        lineNumber: 218,
                        columnNumber: 47
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/users._index.tsx",
                      lineNumber: 205,
                      columnNumber: 37
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 203,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/users._index.tsx",
                  lineNumber: 202,
                  columnNumber: 29
                }, this)
              ]
            },
            user2.id,
            !0,
            {
              fileName: "app/routes/users._index.tsx",
              lineNumber: 169,
              columnNumber: 25
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/users._index.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/users._index.tsx",
        lineNumber: 148,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/users._index.tsx",
    lineNumber: 121,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader4,
  meta: () => meta
});
import MaterialTailwind9 from "@material-tailwind/react";
import { Link as Link2, json as json4, useLoaderData as useLoaderData4 } from "@remix-run/react";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var { Button: Button8 } = MaterialTailwind9, meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
async function loader4() {
  let inputForms = await api_default.db.getInputForms();
  return json4({ inputForms });
}
function Index() {
  let { inputForms } = useLoaderData4();
  return /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxDEV17("h1", { className: "text-3xl text-amber-700 font-bold", children: "DbClient" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(Link2, { to: "/users", children: "Users" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(Link2, { to: "/db_struct", children: "Db Struct" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    inputForms.map((item) => /* @__PURE__ */ jsxDEV17(Link2, { to: `/forms/${item.id}`, children: [
      "Form: ",
      item.title
    ] }, item.id, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 28,
      columnNumber: 44
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-2Z4J3AHZ.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-DGLILCEK.js", "/build/_shared/chunk-TJ4YKIVD.js", "/build/_shared/chunk-Q6LMBPEP.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NNEBLEG4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-EFNIGA2A.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/db_struct._index": { id: "routes/db_struct._index", parentId: "root", path: "db_struct", index: !0, caseSensitive: void 0, module: "/build/routes/db_struct._index-ZK7YETOT.js", imports: ["/build/_shared/chunk-WNBUWJKY.js", "/build/_shared/chunk-KDA2VXG4.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forms.$formId": { id: "routes/forms.$formId", parentId: "root", path: "forms/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/forms.$formId-N2IUZEM5.js", imports: ["/build/_shared/chunk-KDA2VXG4.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/users._index": { id: "routes/users._index", parentId: "root", path: "users", index: !0, caseSensitive: void 0, module: "/build/routes/users._index-QHNN6OXU.js", imports: ["/build/_shared/chunk-WNBUWJKY.js", "/build/_shared/chunk-KDA2VXG4.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "6afcf35b", hmr: { runtime: "/build/_shared/chunk-Q6LMBPEP.js", timestamp: 1708540429967 }, url: "/build/manifest-6AFCF35B.js" };

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
  "routes/forms.$formId": {
    id: "routes/forms.$formId",
    parentId: "root",
    path: "forms/:formId",
    index: void 0,
    caseSensitive: void 0,
    module: forms_formId_exports
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

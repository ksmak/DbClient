import MaterialTailwind from "@material-tailwind/react";
import { InputForm } from "@prisma/client";
const { Button } = MaterialTailwind;
import type { MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import api from "~/api";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const inputForms = await api.db.getInputForms()
  return json({ inputForms })
}

export default function Index() {
  const { inputForms } = useLoaderData<typeof loader>()

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl text-amber-700 font-bold">DbClient</h1>
      <Link to="/users">Users</Link>
      <Link to="/db_struct">Db Struct</Link>
      {inputForms.map((item: InputForm) => <Link key={item.id} to={`/forms/${item.id}`}>Form: {item.title}</Link>)}
    </div >
  );
}

import MaterialTailwind from "@material-tailwind/react";
const { Button } = MaterialTailwind;
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl text-amber-700 font-bold">DbClient</h1>
      <Link to="/users">Users</Link>
      <Link to="/db_struct">Db Struct</Link>
    </div >
  );
}

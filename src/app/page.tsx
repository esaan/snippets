import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippet = await db.snippet.findMany();
  const renderedSnippets = snippet.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
        className="flex justify-between item-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>view</div>
      </Link>)
  });

  return <div>
    <div className="flex flex-col gap-2">
      <div className="flex justify-between item-center gap-5">
      <h1 className="text-xl font-bold">Snippets</h1>
      <Link className="border rounded p-2" href={`/snippets/new`}>Add New Snippet</Link>
      </div>
      {renderedSnippets}
    </div>
  </div>;
}

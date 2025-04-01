import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";
import { DeleteSnippet } from "@/actions";

interface SnippetShowPageProps {
    params: Promise<{
        id: string;
    }>;

}
export default async function SnippetShowPage(props: SnippetShowPageProps) {
    const { id } = await props.params;

    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(id) }
    });

    if (!snippet) {
        return notFound();
    }

    const deleteSnippetAction=DeleteSnippet.bind(null,snippet.id);

    return (
        <div >
            <div className="flex justify-between items-center">
                <div>Reading Snippet Id : {snippet.id}</div>
                <div className="flex gap-2">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
                    <button className="p-2 border rounded" onClick={deleteSnippetAction} >Delete</button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h1>{snippet.title}</h1>
                <pre className="border rounded bg-sky-500">{snippet.code}</pre>
            </div>
        </div>
    );
}

import { db } from "@/db";
//import Link from "next/link";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
    params: {
        id: string
    };
}
export type paramsType = Promise<{ id: string }>;

//export default async function SnippetEditPage(props: SnippetEditPageProps) {
    export default async function SnippetEditPage(props: Promise<SnippetEditPageProps>){

    const {id} = (await props).params;
    //await is very important otherwise snippet object is not going to get data
    const snippet =await db.snippet.findFirst({
        where: { id: parseInt(id) }
    });

    if (!snippet) {
        return notFound();
    }

    return (<SnippetEditForm snippet={snippet}/>);
}

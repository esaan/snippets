import { db } from "@/db";
//import Link from "next/link";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
    params: {
        id: string
    };
}
export default async function SnippetEditPage(props: SnippetEditPageProps) {

    const {id} = props.params;
    //await is very important otherwise snippet object is not going to get data
    const snippet =await db.snippet.findFirst({
        where: { id: parseInt(id) }
    });

    if (!snippet) {
        return notFound();
    }

    return (<SnippetEditForm snippet={snippet}/>);
}
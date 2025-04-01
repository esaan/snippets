'use client'
//import { db } from "@/db";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions"

interface SnippetEditFormProps {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = "") => {
        console.log(value);
        setCode(value);
    }
    const editSnippetAction = actions.EditSnippet.bind(null, snippet.id, code);
    console.log(editSnippetAction);

    return (<div>
        client component {snippet.title}
        <Editor
            height="40vh"
            theme="vs-dark"
            defaultLanguage="Javascript"
            defaultValue={snippet.code}
            options={{ minimap: { enabled: false } }}
            onChange={handleEditorChange}
        />

        <form action={editSnippetAction}>
            <button type="submit" className="border p-2 rounded">Save</button>
        </form>
    </div>);
}

//the above form action going to post the data to server and the value is seen in the Terminal 
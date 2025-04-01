"use server"

import { db } from "@/db";

export async function EditSnippet(id: number, code: string) {

    //console.log(id, code);
    await db.snippet.update({
        where: { id },
        data: { code }
    });
}

export async function DeleteSnippet(id: number) {

    console.log(`Deleted ${id}`);
    await db.snippet.delete({
        where: { id },       
    });
}
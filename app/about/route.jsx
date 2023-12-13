import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export default async function GET() {
    const res = await fetch(DATA_SOURCE_URL);
    
    const Todo = {
        userId: Number,
        id: Number,
        title: String,
        completed: Boolean,
    };
    
    Todo = Todo + await res.json();

    return NextResponse.json()
}
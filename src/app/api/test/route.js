// app/api/hello/route.js
import { NextResponse } from 'next/server';
const datas = [
    {
        name: 'prod1',
        id: 1
    },
    {
        name: 'prod2',
        id: 2
    },
    {
        name: 'prod3',
        id: 3
    },
    {
        name: 'prod4',
        id: 4
    },

]
export async function GET() {
    return NextResponse.json(datas);
}

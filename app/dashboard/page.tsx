'use client'

import { useSearchParams } from "@/node_modules/next/navigation"

export default function Dashboard() {
    const searchParams = useSearchParams();
    const person = searchParams.get('person')??'';
    const results = JSON.parse(person);
    console.log('result',person)

    
   

    return <div>Dashboard<p>Name:{'results.name'}</p>
    <p>Age:{'results.age'}</p>
    <div>{searchParams.get("name")}</div>
    </div>
}
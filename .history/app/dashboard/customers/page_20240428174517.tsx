"use client"
import { useSession } from "next-auth/react";
export default function Page() {
        const { data: session } = useSession();
        console.log(session)
    return (
        <div>customers</div>
    );
}
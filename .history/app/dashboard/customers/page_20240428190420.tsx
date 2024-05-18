import { auth } from "@/auth";
export default function Page() {
        const session = await auth()
        console.log(session)
    return (
        <div>customers</div>
    );
}
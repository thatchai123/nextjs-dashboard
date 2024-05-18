import { auth } from "@/auth";
export default function Page() {
        const session =  auth()
        console.log(session)
    return (
        <div>customers</div>
    );
}
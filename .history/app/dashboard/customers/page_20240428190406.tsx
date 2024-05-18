import { auth } from "@/auth";
export default function Page() {
        const session = useSession();
        console.log(session)
    return (
        <div>customers</div>
    );
}
import { auth } from "@/auth";
export default async function Page() {
    const {user:session}:any = await auth()
    console.log(session)
    return (
        <div>{session.name}</div>
    );
}
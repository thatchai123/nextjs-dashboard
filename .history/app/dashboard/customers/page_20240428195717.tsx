import { auth } from "@/auth";
export default async function Page() {
    const {user:user}:any = await auth()
    console.log({user})
    return (
        <div>{user?.name}</div>
    );
}
import { auth } from "@/auth";
export default async function Page() {
    const {user:user}:any = await auth()
    console.log({user:user.email})
    return (
        <div>{user?.user}</div>
    );
}
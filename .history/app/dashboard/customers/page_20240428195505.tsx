import { auth } from "@/auth";
export default async function Page() {
    const {user}:any = await auth()
    console.log({user})
    return (
        <div>customers</div>
    );
}
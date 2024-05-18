import { auth } from "@/auth";
export default async function Page() {
    const {user} = await auth()
    console.log({user})
    return (
        <div>customers</div>
    );
}
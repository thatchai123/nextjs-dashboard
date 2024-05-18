import { auth } from "@/auth";
export default async function Page() {
    const data = await auth()
    console.log({user})
    return (
        <div>customers</div>
    );
}
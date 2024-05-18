import { auth } from "@/auth";
export default async function Page() {
    const data = await auth()
    console.log(data)
    return (
        <div>customers</div>
    );
}
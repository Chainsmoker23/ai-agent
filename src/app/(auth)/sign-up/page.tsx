import { auth } from "@/lib/auth";
import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const Page = async () => {
    const session = await auth.api.getSession({
            headers: await headers(),
          });
        
          if(!!session){
            redirect("/");
          }
    return <SignUpView/>
}

export default Page;
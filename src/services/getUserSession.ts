import { createServerSupabaseClient } from "@/services/supabaseServer";
import { redirect } from "next/navigation";

const getUserSessionData = async () => {
    const supabase = createServerSupabaseClient();
  
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
  
      if (!session) {
        redirect("/");
      }
  
      return { session };
    } catch (error) {
      redirect("/");
    }
  };
  
  export { getUserSessionData };
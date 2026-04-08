import { redirect } from "next/navigation";
import { createServerSupabase } from "../../lib/supabase-server";
import AdminClient from "./AdminClient";

export default async function AdminPage() {
 const supabase = await createServerSupabase();
 const { data: { user } } = await supabase.auth.getUser();
 if (!user) redirect("/login");

 const { data: profile } = await supabase
 .from("user_profiles")
 .select("is_admin")
 .eq("id", user.id)
 .single();

 if (!profile?.is_admin) redirect("/dashboard");

 const { data: users } = await supabase
 .from("user_profiles")
 .select("id, email, full_name, company_name, plan, credits, is_admin, onboarding_complete, created_at")
 .order("created_at", { ascending: false })
 .limit(50);

 const { data: conversions } = await supabase
 .from("conversions")
 .select("id, user_id, original_filename, status, invoice_number, invoice_total, created_at")
 .order("created_at", { ascending: false })
 .limit(50);

 const { data: messages } = await supabase
 .from("contact_messages")
 .select("*")
 .order("created_at", { ascending: false })
 .limit(20);

 const { data: payments } = await supabase
 .from("payments")
 .select("*")
 .order("created_at", { ascending: false })
 .limit(20);

 return (
 <AdminClient
 users={users || []}
 conversions={conversions || []}
 messages={messages || []}
 payments={payments || []}
 />
 );
}

import { redirect } from "next/navigation";
import { createServerSupabase } from "../../lib/supabase-server";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
 const supabase = await createServerSupabase();
 const { data: { user } } = await supabase.auth.getUser();
 if (!user) redirect("/login");

 const { data: profile } = await supabase
 .from("user_profiles")
 .select("*")
 .eq("id", user.id)
 .single();

 // Redirect to onboarding if not complete
 if (profile && !profile.onboarding_complete) {
 redirect("/onboarding");
 }

 const { data: conversions } = await supabase
 .from("conversions")
 .select("*")
 .eq("user_id", user.id)
 .order("created_at", { ascending: false })
 .limit(10);

 return <DashboardClient user={user} profile={profile} conversions={conversions || []} />;
}

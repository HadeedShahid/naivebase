"use server";
import { waitlistFormSchema } from "@/utils/formSchema";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";

export async function getQouteCost(values: z.infer<typeof waitlistFormSchema>) {
  const { name, email, platforms, industry, country } = values;
  const supabase = await createClient();

  try {
    const { error } = await supabase.from("waitlist").insert(values);
    if (error) throw error;

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

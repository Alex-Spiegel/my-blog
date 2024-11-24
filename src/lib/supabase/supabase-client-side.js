import { createBrowserClient } from "@supabase/ssr";

// Dieser Creator ist für die Client Components
export const createSupabaseClientSide = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};

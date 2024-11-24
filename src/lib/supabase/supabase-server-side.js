import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Dieser Creator ist für die serverseitigen Components
export const createSupabaseServertSide = () => {
  const cookieStore = cookies(); // damit kann ich cookies lesen und in meiner App verwenden
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      // below: Supabase verwendet cookies (Sitzungsdaten). So werden sie gelesen...
      cookies: {
        get(name) {
          // liest cookie-wert  für angegebenen Namen. Notwendig, um bereits eingeloggte user zu erkennen, wenn sie die Seite refreshen
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
};

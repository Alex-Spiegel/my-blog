import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Dieser Client ist speziell für die Route Handlers & Server Actions in Next.js gedacht
// wo ich serverseitig direkt auf Req und Res zugreigen kannst
export const createSupabaseReqRes = () => {
  const cookieStore = cookies(); // damit kann ich cookies lesen und in meiner App verwenden
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          // cookies.get(name) holt den Wert eines Cookies
          return cookieStore.get(name)?.value; // nutzt coocieStore.get um den Cookie-Namen abzufragen
        },
        set(name, value, options) {
          // Setzt oder aktualisiert einen Cookie-Wert
          cookieStore.set({ name, value, ...options }); // s.o.
        },
        remove(name, options) {
          // cookies.remove(name, options) löscht Cookies
          cookieStore.set({ name, value: "", ...options }); // s.o.
        },
      },
    }
  );
};

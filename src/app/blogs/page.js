// Die Seite für die Liste aller Blogs. Hier zeige ich die Titel,
// Autoren und eine Vorschau des Inhalts an.
import { createSupabaseReqRes } from "@/lib/supabase/supbabase-req-res";
import Link from "next/link";

export default async function AllBlogsPage() {
  // hier rufe ich die function/ client "createSupabaseReqRes", eine Supbabase-Instanz
  const supabase = createSupabaseReqRes();
  // Hier machen wir die Datenbankabfrage. "supabase.from("Blogs")" wählt die tabelle Blogs aus der SubabaseDB aus. ".selevt("*")" holt alle Spalten aus der Tabelle.
  // "{ data: blogs, error }" ist das destrukturierte Object das aus der Supbabaseabfrage zurückgegeben wird. Ein Object mit den Feldern "data" und "error".
  // Mit "data: blogs" speichern wir die daten in der Variablen blogs. Nennt sich "Destrukturierung mit Umbenennung". Es könnte auch einfach nur "data" bleiben
  const { data: blogs, error } = await supabase.from("Blogs").select("*");

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        All Blogs
      </h1>
      <ul className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="w-[60%] bg-white rounded-lg shadow-xl p-6"
          >
            <img
              src={blog.cover_image}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700">
              {" "}
              {blog.title}
            </h2>
            <p className="text-gray-700 mt-2">{blog.body.slice(0, 100)}...</p>
            <Link
              href={`/blogs/${blog.id}`}
              className="text-blue-500 mt-4 inline-block"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
// ul dient als dient als Container für die blog items
// "{blogs.map((blog) => " blogs ist ein Array mit blogdaten aus der Supabase DB, blog ist ein einzelnes element (Parameter)
// mit .map() durchlaufen wir das Array und machen für jedes Element (blog) ein <li> Element mit darunterliegendem <img>, <h2>, <p> und <Link> Elementen
// "key={blog.id}": React benötigt einen eindeutigen key, um Änderungen in Listen effizient zu verfolgen. Hier wird die id des Blogs verwendet.
// "blog.body.slice(0, 100)": mit slice()-methode zeigen wir die ersten 100 Zeichen des blog.body an
// "href={/blogs/${blog.id}}": Hier verwenden wir String-Interpolation, damit für den href-Wert ein Link zur Seite des spezifischen Blogs generiert werden kann, z. B. /blogs/1

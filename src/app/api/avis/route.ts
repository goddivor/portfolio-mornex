import { baseDeDonnees } from "@/lib/mongodb";
import { schemaAvis } from "@/lib/schemas";

export async function POST(request: Request) {
  const donnees = schemaAvis.safeParse(await request.json().catch(() => null));
  if (!donnees.success) {
    return Response.json({ ok: false, erreur: donnees.error.issues[0]?.message ?? "Avis invalide." }, { status: 400 });
  }

  const db = await baseDeDonnees();
  if (!db) {
    return Response.json({ ok: false, erreur: "Les avis ne sont pas encore reliés. Réessayez bientôt." }, { status: 503 });
  }

  // Chaque avis attend la validation de Mornex avant d'apparaître sur le site.
  const { nom, role, texte, note } = donnees.data;
  await db.collection("avis").insertOne({ nom, role, texte, note, publie: false, recuLe: new Date() });
  return Response.json({ ok: true });
}

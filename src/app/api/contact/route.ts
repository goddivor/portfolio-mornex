import { baseDeDonnees } from "@/lib/mongodb";
import { schemaMessage } from "@/lib/schemas";

export async function POST(request: Request) {
  const donnees = schemaMessage.safeParse(await request.json().catch(() => null));
  if (!donnees.success) {
    return Response.json({ ok: false, erreur: donnees.error.issues[0]?.message ?? "Formulaire invalide." }, { status: 400 });
  }

  const db = await baseDeDonnees();
  if (!db) {
    return Response.json(
      { ok: false, erreur: "Le formulaire n'est pas encore relié. Écrivez-moi directement sur WhatsApp." },
      { status: 503 },
    );
  }

  const { nom, contact, besoin, message } = donnees.data;
  await db.collection("messages").insertOne({ nom, contact, besoin, message, lu: false, recuLe: new Date() });
  return Response.json({ ok: true });
}

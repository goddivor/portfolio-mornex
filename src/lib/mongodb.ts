import { MongoClient, type Db } from "mongodb";

const globalPourMongo = globalThis as unknown as { _mongoClient?: Promise<MongoClient> };

/** Renvoie la base MongoDB, ou `null` si MONGODB_URI n'est pas configurée. */
export async function baseDeDonnees(): Promise<Db | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  // Une seule connexion réutilisée, y compris entre les rechargements à chaud en développement.
  globalPourMongo._mongoClient ??= new MongoClient(uri).connect();
  const client = await globalPourMongo._mongoClient;
  return client.db(process.env.MONGODB_DB ?? "portfolio_mornex");
}

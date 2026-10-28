import { MongoClient } from "mongodb";

export type ClickDoc = {
  _id: string; // 링크 id
  count: number;
};

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(".env.local에 MONGODB_URI가 설정되어 있지 않습니다.");
}

// 개발 중 핫 리로드마다 새 연결이 생기지 않도록 전역에 한 번만 만들어 둡니다.
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo.mongoClientPromise ?? new MongoClient(uri).connect();
globalForMongo.mongoClientPromise = clientPromise;

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<ClickDoc>("clicks");
}

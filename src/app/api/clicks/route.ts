import { connection } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

// 모든 링크의 클릭 수를 { [링크 id]: 횟수 } 형태로 한 번에 돌려줍니다.
export async function GET() {
  await connection();
  const clicks = await getClicksCollection();
  const docs = await clicks.find().toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  return Response.json(counts);
}

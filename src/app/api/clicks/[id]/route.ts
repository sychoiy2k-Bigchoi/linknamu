import type { NextRequest } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { profile } from "@/data/profile";

// 링크 하나의 클릭 수를 1 늘리고, 늘어난 값을 돌려줍니다.
export async function POST(_req: NextRequest, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;
  // 등록된 링크만 집계해서 아무 id나 DB에 쌓이지 않게 합니다.
  if (!profile.links.some((link) => link.id === id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return Response.json({ count: doc?.count ?? 0 });
}

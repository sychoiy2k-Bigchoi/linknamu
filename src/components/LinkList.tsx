"use client";

import { useEffect, useState } from "react";
import { LinkCard } from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Props = {
  links: LinkItem[];
};

export function LinkList({ links }: Props) {
  // 데이터를 받기 전에는 비어 있어서 모든 카드가 0회로 보입니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  function handleClick(id: string) {
    // 화면은 바로 올리고, 서버 응답이 오면 실제 값으로 맞춥니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { count: number } | null) => {
        if (data) setCounts((prev) => ({ ...prev, [id]: data.count }));
      })
      .catch(() => {});
  }

  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}

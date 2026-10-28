type Props = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export function LinkCard({ title, url, count, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="glass group relative block w-full rounded-3xl px-16 py-5 text-center text-[15px] font-medium transition duration-300 ease-out hover:-translate-y-px hover:bg-(--glass-bg-hover) hover:shadow-(--glass-shadow-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--muted) motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
      {/* 클릭 수 */}
      <span className="absolute top-1/2 right-11 -translate-y-1/2 text-xs font-normal tabular-nums opacity-50">
        {count.toLocaleString()}회
      </span>
      {/* 외부 링크임을 알려 주는 작은 화살표 */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute top-1/2 right-5 size-4 -translate-y-1/2 opacity-30 transition duration-300 group-hover:opacity-60"
      >
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  );
}

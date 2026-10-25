import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

// 흰 테두리 + 따뜻한 그림자로 사진이 배경에서 살짝 떠 보이게 합니다.
const avatarClass =
  "size-[150px] rounded-full ring-4 ring-white/80 shadow-[0_2px_4px_rgb(120_80_50/0.08),0_18px_40px_-12px_rgb(120_80_50/0.35)] dark:ring-white/10 dark:shadow-[0_18px_40px_-12px_rgb(0_0_0/0.7)]";

export function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={150}
          height={150}
          priority
          // next/image는 SVG 최적화를 지원하지 않으므로 원본 그대로 씁니다.
          unoptimized={image.endsWith(".svg")}
          className={`${avatarClass} object-cover`}
        />
      ) : (
        <div
          aria-hidden
          className={`${avatarClass} flex items-center justify-center bg-white/60 text-4xl font-semibold text-muted dark:bg-white/5`}
        >
          {name.slice(0, 1)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-balance text-muted">
        {bio}
      </p>
    </header>
  );
}

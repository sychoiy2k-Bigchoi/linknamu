import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          priority
          // next/image는 SVG 최적화를 지원하지 않으므로 원본 그대로 씁니다.
          unoptimized={image.endsWith(".svg")}
          className="size-32 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="flex size-32 items-center justify-center rounded-full bg-zinc-200 text-4xl font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
        >
          {name.slice(0, 1)}
        </div>
      )}
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}

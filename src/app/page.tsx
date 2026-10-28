import { LinkList } from "@/components/LinkList";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 pt-6 pb-16 sm:px-8 sm:pt-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-6 flex flex-col items-center gap-12 sm:mt-10">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          image={profile.image}
        />
        <LinkList links={profile.links} />
      </div>
    </main>
  );
}

import { LinkCard } from "@/components/LinkCard";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-6">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-4 flex flex-col items-center gap-8">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          image={profile.image}
        />
        <ul className="flex w-full flex-col gap-4">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

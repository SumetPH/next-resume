import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Avatar className="w-60 h-60 border-4 border-white">
          <AvatarImage src="/img/profile.png" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div>
          <section className="text-3xl font-bold">Hello</section>
          <section className="text-lg font-medium">My name is SumetPH.</section>
          <section className="text-lg font-medium">
            This is my personal website where I showcase my information and
            skills.
          </section>
        </div>
      </div>
    </>
  );
}

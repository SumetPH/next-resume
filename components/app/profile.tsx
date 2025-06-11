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
          <section className="text-3xl font-bold">Web Developer</section>
          <section className="text-lg font-medium">
            Hello, My name is SumetPH.
          </section>
        </div>
      </div>
    </>
  );
}

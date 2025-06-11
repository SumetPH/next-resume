import Contact from "@/components/app/contact";
import Education from "@/components/app/education";
import Experience from "@/components/app/experience";
import Profile from "@/components/app/profile";
import Skill from "@/components/app/skill";

export default function Home() {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 flex justify-center my-4">
          <Profile />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <Experience />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <Contact />
        </div>
        <div className="col-span-2">
          <Education />
        </div>
        <div className="col-span-2">
          <Skill />
        </div>
      </div>
    </div>
  );
}

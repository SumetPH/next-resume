import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function Experience() {
  return (
    <>
      <Card className="h-full">
        <CardHeader>
          <span className="text-xl font-bold">Experience</span>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <section>
              <BriefcaseBusiness />
            </section>
            <section>
              <section className="text-sm">2021 - Present</section>
              <section className="font-semibold">Web Developer</section>
              <section className="text-sm">Rudy Technology Co., Ltd</section>
            </section>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

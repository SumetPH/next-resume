import { University } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function Education() {
  return (
    <>
      <Card className="h-full">
        <CardHeader>
          <span className="text-xl font-bold">Education</span>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-3">
            <section>
              <University />
            </section>
            <section>
              <section className="font-medium">
                2017 : Diploma in Electronic Srisongkram Industrial Technology,
                Nakhonphanom University
              </section>
              <section className="text-sm">GPA : 3.65</section>
            </section>
          </div>
          <div className="flex gap-4 mb-3">
            <section>
              <University />
            </section>
            <section>
              <section className="font-medium">
                2019 : Bachelor of Business Administration Program in Computer
                Information System Rajamangala University of Technology Isan
                Sakon Nakhon Campus
              </section>
              <section className="text-sm">GPA : 3.69</section>
            </section>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

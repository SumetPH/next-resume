import { GitBranch, Mail } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function Contact() {
  return (
    <>
      <Card className="h-full">
        <CardHeader>
          <span className="text-xl font-bold">Contact</span>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-3">
            <section>
              <GitBranch />
            </section>
            <section>
              <span className="font-medium">Github : </span>
              <a href="https://github.com/sumetph" target="_blank">
                github.com/sumetph
              </a>
            </section>
          </div>
          <div className="flex gap-4 mb-3">
            <section>
              <Mail />
            </section>
            <section>
              <span className="font-medium">Email : </span>
              <span>sumetph.dev@gmail.com</span>
            </section>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

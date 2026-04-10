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
          <div className="flex gap-3 mb-3">
            <section className="pt-1">
              <GitBranch size={16} />
            </section>
            <section>
              <span>Github : </span>
              <a href="https://github.com/sumetph" target="_blank">
                github.com/sumetph
              </a>
            </section>
          </div>
          <div className="flex gap-3 mb-3">
            <section className="pt-1">
              <Mail size={16} />
            </section>
            <section>
              <span>Email : </span>
              <span>sumetph.dev@gmail.com</span>
            </section>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

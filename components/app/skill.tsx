import {
  SiVuedotjs,
  SiNuxt,
  SiReact,
  SiNextdotjs,
  SiVuetify,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiGooglegemini,
} from "react-icons/si";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function Skill() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Card className="col-span-3 md:col-span-1 gap-2 h-full">
        <CardHeader>
          <span className="text-xl font-bold">Front-End</span>
        </CardHeader>
        <CardContent>
          <section className="flex items-center gap-3">
            <SiVuedotjs />
            Vue
          </section>
          <section className="flex items-center gap-3">
            <SiNuxt />
            Nuxt
          </section>
          <section className="flex items-center gap-3">
            <SiReact />
            React
          </section>
          <section className="flex items-center gap-3">
            <SiNextdotjs />
            Next
          </section>
          <section className="flex items-center gap-3">
            <SiVuetify />
            Vuetify
          </section>
          <section className="flex items-center gap-3">
            <SiTailwindcss />
            Tailwind
          </section>
        </CardContent>
      </Card>
      <Card className="col-span-3 md:col-span-1 gap-2 h-full">
        <CardHeader>
          <span className="text-xl font-bold">Back-End</span>
        </CardHeader>
        <CardContent>
          <section className="flex items-center gap-3">
            <SiExpress />
            Express
          </section>
          <section className="flex items-center gap-3">
            <SiPostgresql />
            Postgres
          </section>
          <section className="flex items-center gap-3">
            <SiMysql />
            MySQL
          </section>
        </CardContent>
      </Card>
      <Card className="col-span-3 md:col-span-1 gap-2 h-full">
        <CardHeader>
          <span className="text-xl font-bold">Interested</span>
        </CardHeader>
        <CardContent>
          <section className="flex items-center gap-3">
            <SiPython />
            Python
          </section>
          <section className="flex items-center gap-3">
            <SiFastapi />
            FastAPI
          </section>
          <section className="flex items-center gap-3">
            <SiGooglegemini />
            LLM
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

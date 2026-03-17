import { Card, CardContent, CardHeader } from "../ui/card";

export default function Skill() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Card className="col-span-3 md:col-span-1 gap-2 h-full">
        <CardHeader>
          <span className="text-xl font-bold">Front End</span>
        </CardHeader>
        <CardContent>
          <section>Vue</section>
          <section>Nuxt</section>
          <section>React</section>
          <section>Next</section>
          <section>Vuetify</section>
          <section>Tailwind</section>
        </CardContent>
      </Card>
      <Card className="col-span-3 md:col-span-1 gap-2 h-full">
        <CardHeader>
          <span className="text-xl font-bold">Back End</span>
        </CardHeader>
        <CardContent>
          <section>Express</section>
          <section>Nest</section>
          <section>FastAPI</section>
        </CardContent>
      </Card>
      <Card className="col-span-3 md:col-span-1 gap-2 h-full">
        <CardHeader>
          <span className="text-xl font-bold">Other</span>
        </CardHeader>
        <CardContent>
          <section>Postgres</section>
          <section>MySQL</section>
          <section>Prisma</section>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Computer System Servicing ",

"Hardware Repair & Troubleshooting",

"Computer Networking",

"Programming Foundations",

"Web Development (React & Next.js)",

"Tailwind CSS",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            My passion for technology began in my High School journey, In my high school days we do a lot of fixing and networking where I learned how computer hardware works, how to troubleshoot repair issues, and how to set up computer networks. During senior high school, I learned more and improve my skills by earning my TESDA NC II certification in Computer System Servicing and completing my hands-on OJT training with honors.
          </p>
          <p>
           Currently, I am studying for my Bachelor of Science in Information Technology at Naga College Foundation, Enjoying my course and the technology well of course sometimes its hard but I'm willing to learned to gain a skills. Building on my hardware and networking foundation, I am now focused on software programming, database management, and creating modern web applications
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge className="text-sm px-3 py-1" key="{skill}" variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
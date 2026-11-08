import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tv, Gamepad2, Palette, Dumbbell, Plane,} from "lucide-react";

const hobbies = [
  {
    title: "Movies",
    icon: Tv,
    description: "Watching diferent movies and series with a genres like Action,Fiction and Fantasy.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "I usually play multiplayer game and Guns game.",
  },
  {
    title: "Arts",
    icon: Palette,
    description: "I love drawing and painting i usually paint and draw nature.",
  },
  {
    title: "Fitness & Running",
    icon: Dumbbell,
    description: "Staying active through regular workout sessions and weekend runs.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
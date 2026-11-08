import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="px-3 py-1 text-sm font-normal">
          Welcome to my portfolio
        </Badge>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Hello, I'm a New Developer 👋
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Im Deave Mark H. Buffe, a 2nd year BSIT student at Naga college Foundation.
          I am a aspiring developer and learning new things in technology field while improving my skills.
        </p>
        
        <div className="flex justify-center gap-4 pt-2">
          <Link href="/about">
            <Button size="lg">About me</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">Contact Me</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">💻 What I Do</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed">
           I fix computer hardware, set up local networks, and build simple, easy-to-use web applications.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">⚡ Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Computer System Servicing</Badge>
              <Badge variant="outline">Web Development (React & Next.js)</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">Programming Foundations</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
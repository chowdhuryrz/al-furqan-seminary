import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck, BookCopy, GraduationCap } from "lucide-react";

const programs = [
  {
    title: "Fulltime Hifz Program",
    description: "Memorize the Quran with a team of qualified instructors",
    price: "Contact for pricing",
    icon: BookOpenCheck,
    iconColor: "text-emerald-600",
  },
  {
    title: "Part-Time Hifz Program",
    description:
      "After school program for memorizing the Quran with a team of qualified instructors",
    price: "Contact for pricing",
    icon: BookCopy,
    iconColor: "text-blue-600",
  },
  {
    title: "Maktab Program",
    description:
      "A program for children to learn arabic to read the Quran and learn islamic studies",
    price: "Contact for pricing",
    icon: GraduationCap,
    iconColor: "text-purple-600",
  },
];

const Programs = () => {
  return (
    <section className="py-20 px-5 md:px-20 bg-secondary" id="programs">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-elMessiri mb-12">
        Our Programs
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-3">
                {React.createElement(program.icon, {
                  className: `w-6 h-6 ${program.iconColor}`,
                })}
                <CardTitle>{program.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {program.description}
              </p>
              <p className="font-bold mb-4">{program.price}</p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Programs;

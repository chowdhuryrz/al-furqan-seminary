import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Clock } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Expert Scholars",
    description:
      "Learn from qualified Islamic scholars with years of teaching experience",
    icon: <GraduationCap className="w-12 h-12 text-amber-300" />,
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Structured learning path covering Quran, Hadith, Fiqh, and Islamic Studies",
    icon: <BookOpen className="w-12 h-12 text-amber-300" />,
  },
  {
    title: "Flexible Learning",
    description:
      "Choose from various programs that fit your schedule and learning goals",
    icon: <Clock className="w-12 h-12 text-amber-300" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-5 md:px-20" id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-elMessiri mb-12">
        Why Choose Al-Furqan Seminary?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-primary">
            <CardHeader>
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <CardTitle className="text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

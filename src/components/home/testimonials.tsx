import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Hifz Program Graduate",
    text: "The supportive environment and expert guidance helped me complete my Hifz journey successfully.",
  },
  {
    name: "Fatima Khan",
    role: "Islamic Studies Student",
    text: "The comprehensive curriculum and knowledgeable teachers have deepened my understanding of Islam.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-5 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-elMessiri mb-12">
        Student Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-amber-200">
            <CardContent className="pt-6">
              <p className="mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

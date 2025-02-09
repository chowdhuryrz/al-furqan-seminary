import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <nav className="flex justify-between items-center p-5 md:px-20 border-b border-border">
        <h1 className="text-2xl font-bold flex items-center gap-2 font-elMessiri">
          <div className="w-9 h-9 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Al-Furqan Seminary"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          Al-Furqan Seminary
        </h1>
        <Menu className="md:hidden cursor-pointer size-6" />
        <ul className="gap-4 hidden md:flex font-bold">
          <li>
            <Link href="/programs">Programs</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <section className="flex-1 flex flex-col items-center bg-secondary">
        <div className="flex flex-col items-center py-32" id="home">
          <h1 className="text-4xl font-bold font-elMessiri md:text-6xl">
            Elevating Islamic Knowledge
          </h1>
          <p className="text-lg">
            A comprehensive Islamic education for all ages
          </p>
          <Button className="font-bold px-8 py-6 mt-8">Enroll Now</Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-5 md:px-20" id="about">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-elMessiri mb-12">
          Why Choose Al-Furqan Seminary?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Scholars",
              description:
                "Learn from qualified Islamic scholars with years of teaching experience",
            },
            {
              title: "Comprehensive Curriculum",
              description:
                "Structured learning path covering Quran, Hadith, Fiqh, and Islamic Studies",
            },
            {
              title: "Flexible Learning",
              description:
                "Choose from various programs that fit your schedule and learning goals",
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-muted">
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 px-5 md:px-20 bg-secondary" id="programs">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-elMessiri mb-12">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Quran Memorization",
              description: "Complete Hifz program with certified instructors",
              price: "Contact for pricing",
            },
            {
              title: "Islamic Studies",
              description:
                "Comprehensive course covering various Islamic sciences",
              price: "Contact for pricing",
            },
            {
              title: "Arabic Language",
              description: "Learn Classical Arabic from native speakers",
              price: "Contact for pricing",
            },
          ].map((program, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-muted-foreground mb-4">
                {program.description}
              </p>
              <p className="font-bold">{program.price}</p>
              <Button className="mt-4 w-full">Learn More</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-5 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-elMessiri mb-12">
          Student Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
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
          ].map((testimonial, index) => (
            <div key={index} className="p-6 rounded-lg bg-muted">
              <p className="mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-5 md:px-20 bg-secondary" id="contact">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-elMessiri mb-12">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-bold">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border bg-background"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-bold">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg border bg-background"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-bold">Message</label>
              <textarea
                className="w-full p-3 rounded-lg border bg-background min-h-[150px]"
                required
              ></textarea>
            </div>
            <Button className="w-full py-6">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-5 md:px-20">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 font-elMessiri">
              Al-Furqan Seminary
            </h3>
            <p className="text-primary-foreground/80">
              Dedicated to providing quality Islamic education for all.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#programs">Programs</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Email: info@alfurqan.edu</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Islamic Center St</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {/* Add your social media icons/links here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Al-Furqan Seminary. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

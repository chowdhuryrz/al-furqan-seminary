import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/home/navbar";
import { ContactForm } from "@/components/home/contact-form";
import { FeaturesSection } from "@/components/home/feature-section";
import Programs from "@/components/home/programs";
import Testimonials from "@/components/home/testimonials";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />

      <section className="flex-1 flex flex-col items-center bg-secondary">
        <div
          className="flex flex-col items-center py-32 text-center px-4"
          id="home"
        >
          <h1 className="text-4xl font-bold font-elMessiri md:text-6xl">
            Elevating Islamic Knowledge
          </h1>
          <p className="text-lg mt-4">
            A comprehensive Islamic education for all ages
          </p>
          <Button size="lg" className="font-bold mt-8">
            Enroll Now
          </Button>
        </div>
      </section>

      <FeaturesSection />
      <Programs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}

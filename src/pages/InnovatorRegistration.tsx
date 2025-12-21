import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnovatorRegistrationForm from "@/components/InnovatorRegistrationForm";
import ScrollReveal from "@/components/ScrollReveal";

const eligibility = [
  "Age 14-35 years old",
  "Based in Zimbabwe or African region",
  "Have an innovative idea or working prototype",
  "Committed to making a positive impact",
  "Willing to participate in training programs",
];

const InnovatorRegistration = () => {
  return (
    <>
      <Helmet>
        <title>Register as an Innovator | STEMOBILE Solutions</title>
        <meta
          name="description"
          content="Join our Young Innovators Incubation Hub. Get access to mentorship, resources, and opportunities to transform your innovative ideas into real-world solutions."
        />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="hero-gradient py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl floating-animation" />
            <div className="absolute bottom-10 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: "-3s" }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Link to="/#innovators">
              <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <ScrollReveal animation="fade-up">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6">
                  <Rocket className="w-4 h-4 text-secondary" />
                  <span className="text-primary-foreground text-sm font-medium">Young Innovators Hub</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Register as an{" "}
                  <span className="text-gradient">Innovator</span>
                </h1>

                <p className="text-lg text-primary-foreground/80 mb-8">
                  Take the first step towards turning your innovative ideas into reality. 
                  Join our incubation hub and get access to mentorship, resources, and 
                  opportunities to make a real-world impact.
                </p>

                {/* Eligibility */}
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <h3 className="text-lg font-bold text-primary-foreground mb-4">
                    Eligibility Criteria
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {eligibility.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal animation="fade-up">
                <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Innovation Application Form
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill in the details below to register your innovation. All fields marked with * are required.
                  </p>

                  <InnovatorRegistrationForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default InnovatorRegistration;

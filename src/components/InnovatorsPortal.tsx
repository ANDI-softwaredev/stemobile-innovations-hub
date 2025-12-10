import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Users, 
  Wrench, 
  Rocket, 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const portalActions = [
  {
    icon: Users,
    title: "Apply for Mentorship",
    description: "Get guidance from experienced professionals and innovators.",
  },
  {
    icon: Lightbulb,
    title: "Register Your Innovation",
    description: "Submit your ideas and get support to develop them further.",
  },
  {
    icon: Wrench,
    title: "Request Prototype Development",
    description: "Access tools and resources to build your prototype.",
  },
  {
    icon: Rocket,
    title: "Join Startup Incubation",
    description: "Transform your idea into a scalable business solution.",
  },
];

const eligibility = [
  "Age 14-35 years old",
  "Based in Zimbabwe or African region",
  "Have an innovative idea or working prototype",
  "Committed to making a positive impact",
  "Willing to participate in training programs",
];

const InnovatorsPortal = () => {
  return (
    <section id="innovators" className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <ScrollReveal animation="fade-right">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-secondary" />
              <span className="text-primary-foreground text-sm font-medium">Innovators Portal</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Turn Your Ideas Into{" "}
              <span className="text-gradient">Reality</span>
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-8">
              Join our Young Innovators Incubation Hub and get access to mentorship, 
              resources, and opportunities to transform your innovative ideas into 
              real-world solutions.
            </p>

            {/* Eligibility */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 mb-8">
              <h3 className="text-xl font-bold text-primary-foreground mb-4">
                Eligibility Criteria
              </h3>
              <ul className="space-y-3">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="hero" size="lg">
              Register as an Innovator
              <ArrowRight className="w-5 h-5" />
            </Button>
          </ScrollReveal>

          {/* Right Content - Actions Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {portalActions.map((action, index) => (
              <ScrollReveal
                key={action.title}
                delay={index * 100}
                animation="fade-left"
              >
                <div className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <action.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-foreground mb-2">
                    {action.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {action.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovatorsPortal;

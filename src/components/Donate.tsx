import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Building2, 
  GraduationCap, 
  Lightbulb, 
  Gift,
  CheckCircle
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const donationOptions = [
  {
    icon: Building2,
    title: "Sponsor a Container Lab",
    description: "Fund a complete solar-powered science lab for a rural school.",
    amount: "$5,000+",
  },
  {
    icon: GraduationCap,
    title: "Sponsor a School Program",
    description: "Cover a full semester of STEM education for a school.",
    amount: "$500+",
  },
  {
    icon: Lightbulb,
    title: "Sponsor an Innovator",
    description: "Support a young innovator's prototype development journey.",
    amount: "$100+",
  },
  {
    icon: Gift,
    title: "General Support",
    description: "Contribute to our general fund for maximum flexibility.",
    amount: "Any amount",
  },
];

const impactAreas = [
  "Building and equipping Community Science Centers",
  "Purchasing robotics kits, IoT tools, and digital resources",
  "Delivering STEM programs, bootcamps, and hackathons",
  "Nurturing young innovators through mentorship",
  "Training teachers on modern teaching methods",
  "Providing scholarships and free lab access",
];

const Donate = () => {
  return (
    <section id="donate" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-secondary" />
            <span className="text-foreground text-sm font-medium">Support Our Mission</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Support Builds{" "}
            <span className="text-secondary">Brighter Futures</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every contribution directly strengthens our mission to expand access 
            to STEM education in underserved communities.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left - Impact Areas */}
          <ScrollReveal animation="fade-right">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Where Your Funds Go
              </h3>
              <ul className="space-y-4 mb-8">
                {impactAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground border-t border-border pt-6">
                Through your partnership, we are building a brighter future—one community, 
                one school, and one young innovator at a time.
              </p>
            </div>
          </ScrollReveal>

          {/* Right - Donation Options */}
          <div className="space-y-4">
            {donationOptions.map((option, index) => (
              <ScrollReveal key={option.title} delay={index * 100} animation="fade-left">
                <div className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <option.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-foreground group-hover:text-secondary transition-colors">
                        {option.title}
                      </h4>
                      <span className="text-secondary font-bold">{option.amount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={400} animation="fade-up">
              <Button variant="secondary" size="xl" className="w-full mt-6">
                <Heart className="w-5 h-5" />
                Donate Now
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Secure payment via PayPal, Paynow, or Bank Transfer
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;

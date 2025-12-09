import { Button } from "@/components/ui/button";
import { 
  Building, 
  School, 
  Briefcase, 
  Users,
  ArrowRight
} from "lucide-react";

const partnershipTypes = [
  {
    icon: School,
    title: "School Partnerships",
    description: "Partner with us to bring STEM education directly to your students through our mobile labs and container science centers.",
  },
  {
    icon: Building,
    title: "District & Council Collaborations",
    description: "Work with us to establish permanent STEM infrastructure in your community and reach more learners.",
  },
  {
    icon: Briefcase,
    title: "Corporate Sponsorships",
    description: "Support our mission while engaging in meaningful CSR activities that create lasting impact.",
  },
  {
    icon: Users,
    title: "Advisory Board Participation",
    description: "Share your expertise and help guide our strategic direction as an advisory board member.",
  },
];

const Partnership = () => {
  return (
    <section id="partner" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Building className="w-4 h-4 text-primary" />
            <span className="text-foreground text-sm font-medium">Partnership Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Partner With Us to{" "}
            <span className="text-secondary">Create Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join forces with STEMobile Solutions to expand access to quality 
            STEM education across Zimbabwe.
          </p>
        </div>

        {/* Partnership Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {partnershipTypes.map((type) => (
            <div
              key={type.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <type.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {type.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg">
            Partner With Us
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg">
            Request a Proposal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;

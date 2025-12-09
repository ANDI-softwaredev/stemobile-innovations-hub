import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Makomborero Lawrence Sivangani",
    role: "Chief Executive Officer",
    bio: "Passionate young Zimbabwean entrepreneur and founder of STEMobile Solutions. Driven by a vision to bridge the STEM education gap in rural and underserved communities through transformative initiatives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Tinotenda Nyikadzino",
    role: "Chief Operating Officer",
    bio: "Director driving transformative STEM education and innovation in Zimbabwe and beyond. Championing accessible, hands-on science learning through mobile Container Labs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ruzivorwashe Faith Nyakusendwa",
    role: "Chief Financial Officer",
    bio: "Leading financial strategy and sustainable growth for STEMobile Solutions, ensuring resources reach where they're needed most.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Angela Kalilombe",
    role: "Marketing Lead",
    bio: "Driving brand awareness and community engagement for STEMobile Solutions across Zimbabwe and beyond.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Thandeka Chiramba",
    role: "Governance & Compliance",
    bio: "Ensuring organizational integrity and regulatory compliance while championing advocacy for STEM education access.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Tatenda Mhokore",
    role: "Projects Development & Evaluation",
    bio: "Designing, implementing, and evaluating innovative STEM programs. Passionate about empowering youth with hands-on learning experiences.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-foreground text-sm font-medium">Meet Our Team</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Changemakers Behind{" "}
            <span className="text-secondary">STEMobile</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A dedicated team of innovators committed to transforming 
            STEM education across Zimbabwe.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card rounded-3xl p-6 border border-border hover:border-secondary/50 hover:shadow-2xl transition-all duration-500 text-center"
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-card group-hover:border-secondary transition-colors"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-secondary font-semibold text-sm mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

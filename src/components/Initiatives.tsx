import { 
  Lightbulb, 
  Laptop, 
  GraduationCap, 
  Users, 
  Heart, 
  Sun, 
  Compass, 
  Trophy, 
  Wrench, 
  Rocket 
} from "lucide-react";

const initiatives = [
  {
    icon: Lightbulb,
    title: "Young Innovators Incubation Hub",
    description: "Mentorship, prototype development, and pitch training for promising young innovators.",
  },
  {
    icon: Laptop,
    title: "Digital Skills & AI Literacy",
    description: "Training in programming, AI fundamentals, cybersecurity, and digital safety.",
  },
  {
    icon: GraduationCap,
    title: "Teacher Capacity Building",
    description: "Workshops for teachers on digital tools and modern teaching methods.",
  },
  {
    icon: Users,
    title: "Community Tech Clubs",
    description: "After-school clubs exploring drones, electronics, IoT, and robotics.",
  },
  {
    icon: Heart,
    title: "Girls in STEM Program",
    description: "Mentoring and training girls in ICT, robotics, and engineering.",
  },
  {
    icon: Sun,
    title: "Solar Digital Kiosks",
    description: "Solar-powered learning points with offline e-learning resources.",
  },
  {
    icon: Compass,
    title: "Career Guidance Roadshows",
    description: "Inspiring students to pursue STEM careers through professional sessions.",
  },
  {
    icon: Trophy,
    title: "Innovation Competitions",
    description: "Annual science fairs encouraging creative solutions to community challenges.",
  },
  {
    icon: Wrench,
    title: "MakerSpace Workshops",
    description: "Hands-on engineering sessions with tools, electronics, and recycled materials.",
  },
  {
    icon: Rocket,
    title: "Digital Entrepreneurship",
    description: "Bootcamps teaching youth to build digital products and online businesses.",
  },
];

const Initiatives = () => {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-foreground text-sm font-medium">Additional Initiatives</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            More Ways We're Making{" "}
            <span className="text-secondary">an Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Beyond our core programs, we run various initiatives to ensure 
            comprehensive STEM education reaches every corner of Zimbabwe.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <initiative.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {initiative.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;

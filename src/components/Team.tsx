import { Linkedin, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import makomboreroImg from "@/assets/team/makomborero-sivangani.jpg";
import tinotendaImg from "@/assets/team/tinotenda-nyikadzino.jpg";
import faithImg from "@/assets/team/faith-nyakusendwa.jpg";
import angelaImg from "@/assets/team/angela-kalilombe.jpg";
import thandekaImg from "@/assets/team/thandeka-chiramba.jpg";
import tatendaImg from "@/assets/team/tatenda-mhokore.jpg";

const team = [
  {
    name: "Makomborero Lawrence Sivangani",
    role: "Chief Executive Officer",
    bio: "Passionate young Zimbabwean entrepreneur and founder of STEMobile Solutions. Driven by a vision to bridge the STEM education gap in rural and underserved communities through transformative initiatives.",
    image: makomboreroImg,
  },
  {
    name: "Tinotenda Nyikadzino",
    role: "Chief Operating Officer",
    bio: "Director driving transformative STEM education and innovation in Zimbabwe and beyond. Championing accessible, hands-on science learning through mobile Container Labs.",
    image: tinotendaImg,
  },
  {
    name: "Ruzivorwashe Faith Nyakusendwa",
    role: "Chief Financial Officer",
    bio: "Leading financial strategy and sustainable growth for STEMobile Solutions, ensuring resources reach where they're needed most.",
    image: faithImg,
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
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
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
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <ScrollReveal 
              key={member.name}
              delay={index * 100}
              animation="fade-up"
            >
              <div className="group bg-card rounded-3xl p-6 border border-border hover:border-secondary/50 hover:shadow-2xl transition-all duration-500 text-center h-full">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

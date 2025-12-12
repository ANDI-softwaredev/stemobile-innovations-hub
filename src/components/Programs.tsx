import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { programs } from "@/data/programs";

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-foreground text-sm font-medium">Our Core Programs</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Innovative STEM Solutions for{" "}
            <span className="text-secondary">Every Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From mobile labs to virtual reality, we bring world-class STEM education 
            directly to underserved schools and communities across Zimbabwe.
          </p>
        </ScrollReveal>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <ScrollReveal 
              key={program.title}
              delay={index * 100}
              animation="scale"
            >
              <div className="group relative bg-card rounded-3xl p-8 border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl card-elevated h-full">
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${program.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
                      {program.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mt-1">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={`/programs/${program.id}`}>
                    <Button variant="ghost" className="group/btn p-0 h-auto text-secondary hover:text-secondary/80">
                      Learn More & Book
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal className="text-center mt-16" delay={400}>
          <Link to="/programs/container-lab">
            <Button variant="secondary" size="lg">
              Book a School Program
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Programs;

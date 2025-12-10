import containerLab from "@/assets/container-lab.jpg";
import vrLearning from "@/assets/vr-learning.jpg";
import ScrollReveal from "./ScrollReveal";

const ImageShowcase = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Our Labs in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Bringing world-class STEM education directly to communities across Zimbabwe.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Container Lab Image */}
          <ScrollReveal animation="fade-right" delay={100}>
            <div className="group relative rounded-3xl overflow-hidden aspect-video cursor-pointer">
              <img
                src={containerLab}
                alt="Solar-powered container science lab in rural Zimbabwe"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full mb-2">
                  Container Lab
                </span>
                <h3 className="text-xl font-bold text-primary-foreground">
                  Young Einstein's Hub
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Solar-powered science labs for rural schools
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* VR Lab Image */}
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="group relative rounded-3xl overflow-hidden aspect-video cursor-pointer">
              <img
                src={vrLearning}
                alt="Student experiencing virtual reality STEM education"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full mb-2">
                  Virtual Reality
                </span>
                <h3 className="text-xl font-bold text-primary-foreground">
                  Immersive Learning
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Experience science through VR technology
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;

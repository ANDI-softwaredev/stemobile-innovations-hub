import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProgramById } from "@/data/programs";
import BookingForm from "@/components/BookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";

const ProgramDetail = () => {
  const { programId } = useParams<{ programId: string }>();
  const program = programId ? getProgramById(programId) : undefined;

  if (!program) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Program Not Found</h1>
          <p className="text-muted-foreground mb-6">The program you're looking for doesn't exist.</p>
          <Link to="/#programs">
            <Button variant="secondary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Programs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = program.icon;

  return (
    <>
      <Helmet>
        <title>{program.title} - {program.subtitle} | STEMobile Solutions</title>
        <meta name="description" content={program.description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <Link
                to="/#programs"
                className="inline-flex items-center text-muted-foreground hover:text-secondary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Programs
              </Link>

              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
                    {program.subtitle}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-1">
                    {program.title}
                  </h1>
                </div>
              </div>

              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {program.fullDescription}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Program Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick Stats */}
                <ScrollReveal>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-xl p-5">
                      <Clock className="w-6 h-6 text-secondary mb-3" />
                      <h4 className="text-sm text-muted-foreground mb-1">Duration</h4>
                      <p className="font-semibold text-foreground">{program.duration}</p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <Users className="w-6 h-6 text-secondary mb-3" />
                      <h4 className="text-sm text-muted-foreground mb-1">Capacity</h4>
                      <p className="font-semibold text-foreground">{program.capacity}</p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <Target className="w-6 h-6 text-secondary mb-3" />
                      <h4 className="text-sm text-muted-foreground mb-1">Target Audience</h4>
                      <p className="font-semibold text-foreground">{program.targetAudience}</p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* What's Included */}
                <ScrollReveal delay={100}>
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">What's Included</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {program.includes.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Features */}
                <ScrollReveal delay={200}>
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                    <div className="flex flex-wrap gap-3">
                      {program.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column - Booking Form */}
              <div className="lg:col-span-1">
                <ScrollReveal delay={300}>
                  <div className="sticky top-24">
                    <BookingForm programTitle={program.title} />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default ProgramDetail;

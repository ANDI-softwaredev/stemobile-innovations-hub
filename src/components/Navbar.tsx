import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import stemobileLogo from "@/assets/stemobile-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "#programs" },
    { name: "Innovators", href: "#innovators" },
    { name: "Team", href: "#team" },
    { name: "Partner", href: "#partner" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={stemobileLogo} 
              alt="STEMobile Solutions Logo" 
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-foreground leading-tight">
                STEM<span className="text-accent">OBILE><span>
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
                Transforming STEM Education in Zimbabwe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Partner With Us
            </Button>
            <Button variant="secondary" size="sm">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-foreground hover:text-secondary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" className="w-full">
                Partner With Us
              </Button>
              <Button variant="secondary" className="w-full">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

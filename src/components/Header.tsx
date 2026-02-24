import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../images/GlobalNet-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    name: "Услуги",
    href: "#services"
  }, {
    name: "Локация",
    href: "#location"
  }, {
    name: "За нас",
    href: "#about"
  }, {
    name: "Гаранции",
    href: "#waranty"
  }];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-left gap-2 group">
            <div className="overflow-hidden w-48 h-auto">
              <img src={logoImg} alt="GlobalNet" className="w-48 h-auto scale-125 object-cover" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-base font-medium text-secondary-foreground hover:text-primary transition-colors duration-200 relative group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center mt-2">
                Начни
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
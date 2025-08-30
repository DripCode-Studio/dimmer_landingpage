import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, Music } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-99 transition-all duration-300 text-white ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-x-0.5"
            >
              <span className="text-purple-500">
                <Music />
              </span>
              <span
                className={`text-2xl font-bold  ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                Dimmer
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`hover:underline hover:[text-decoration-style:wavy] hover:[text-decoration-color:#a855f7] hover:font-bold text-foreground/80 hover:text-primary hover:cursor-pointer px-3 py-2 text-lg font-medium transition-all duration-200 ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <a
              href="https://github.com/YBTopaz8/Dimmer-MAUI/releases"
              target="_blank"
              className="group rounded-full hidden md:flex items-center gap-2 bg-black text-white px-3 py-1 font-medium hover:bg-white hover:text-black border border-black transition-colors duration-200"
            >
              Download App
              <span className="bg-white text-black rounded-full p-0.5 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant={`${isScrolled ? "default" : "ghost"}`}
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:cursor-pointer"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background w-full border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-primary block px-3 py-2 text-lg font-medium w-full text-center transition-colors duration-200 hover:underline hover:[text-decoration-style:wavy] hover:[text-decoration-color:#a855f7] hover:font-bold"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-3">
              <a
                onClick={() => setIsMenuOpen(false)}
                href="https://github.com/YBTopaz8/Dimmer-MAUI/releases"
                target="_blank"
                className="group rounded-full md:hidden flex items-center gap-2 bg-black text-white px-3 py-2 font-medium hover:bg-white hover:text-black border border-black transition-all duration-200 hover:underline hover:under"
              >
                <span className="w-full"> Download App</span>
                <span className="bg-white text-black rounded-full p-0.5 group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

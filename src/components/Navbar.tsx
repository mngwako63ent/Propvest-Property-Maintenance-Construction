import { motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1775728657/Propvest_Property_Maintenance_Construction_Background_removed_byacy5.png" 
              alt="Propvest Logo" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-accent ${
                  location.pathname === link.path ? "text-accent" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-accent text-navy hover:bg-accent/90 font-bold shadow-lg">
              <Phone className="w-4 h-4 mr-2" />
              082 594 7402
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", display: "block" },
          closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
        }}
        className="md:hidden bg-navy/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              variants={{
                open: { opacity: 1, x: 0, transition: { delay: i * 0.05 } },
                closed: { opacity: 0, x: -20 }
              }}
            >
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                  location.pathname === link.path 
                    ? "text-accent bg-accent/10" 
                    : "text-white/80 hover:text-accent hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={{
              open: { opacity: 1, y: 0, transition: { delay: navLinks.length * 0.05 } },
              closed: { opacity: 0, y: 10 }
            }}
            className="pt-4"
          >
            <Button className="w-full bg-accent text-navy hover:bg-accent/90 font-bold h-14 rounded-xl text-lg shadow-lg">
              <Phone className="w-5 h-5 mr-2" />
              082 594 7402
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
}

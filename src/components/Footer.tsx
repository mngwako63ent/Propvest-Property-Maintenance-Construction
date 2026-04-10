import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1775728657/Propvest_Property_Maintenance_Construction_Background_removed_byacy5.png" 
                alt="Propvest Logo" 
                className="h-16 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/90 text-sm leading-relaxed">
              Premium property maintenance and construction services in Rustenburg. 
              Quality craftsmanship and professional service for over a decade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/90 hover:text-accent transition-colors text-sm font-medium">Home</Link></li>
              <li><Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm font-medium">Services</Link></li>
              <li><Link to="/projects" className="text-white/90 hover:text-accent transition-colors text-sm font-medium">Projects</Link></li>
              <li><Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link to="/contact" className="text-white/90 hover:text-accent transition-colors text-sm font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-accent">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-white/90 text-sm font-medium">Property Maintenance</li>
              <li className="text-white/90 text-sm font-medium">Construction & Renovations</li>
              <li className="text-white/90 text-sm font-medium">Landscaping & Paving</li>
              <li className="text-white/90 text-sm font-medium">Plumbing & Electrical</li>
              <li className="text-white/90 text-sm font-medium">Steel Work & Waterproofing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/90 text-sm font-medium">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-navy" />
                </div>
                <span className="pt-1">082 594 7402</span>
              </li>
              <li className="flex items-start gap-3 text-white/90 text-sm font-medium">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-navy" />
                </div>
                <span className="break-all pt-1">propvestmaintenance@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/90 text-sm font-medium">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-navy" />
                </div>
                <span className="pt-1">226 Beyers Naude, Rustenburg, 0300</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-xs font-medium">
            © {new Date().getFullYear()} Propvest Property Maintenance and Construction Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-white text-xs font-medium">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-xs font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

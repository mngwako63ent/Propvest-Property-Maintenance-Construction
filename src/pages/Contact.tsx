import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-navy text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6">Let's Talk</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Ready to start your next project? Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Info Column */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-navy mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="text-navy w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-navy font-bold uppercase tracking-widest text-[10px] mb-1">Call Us</p>
                      <p className="text-xl font-display font-bold text-navy">082 594 7402</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="text-navy w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-navy font-bold uppercase tracking-widest text-[10px] mb-1">Email Us</p>
                      <p className="text-xl font-display font-bold text-navy break-all">propvestmaintenance@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="text-navy w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-navy font-bold uppercase tracking-widest text-[10px] mb-1">Visit Us</p>
                      <p className="text-xl font-display font-bold text-navy">226 Beyers Naude, Rustenburg, 0300</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-navy mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-navy/80 font-medium">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-navy">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between text-navy/80 font-medium">
                    <span>Saturday</span>
                    <span className="font-bold text-navy">08:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between text-navy/80 font-medium">
                    <span>Sunday</span>
                    <span className="font-bold text-navy">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-gray-200 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-navy mb-8 md:mb-10">Send a Message</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">First Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none shadow-sm transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Last Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none shadow-sm transition-all" placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-white border border-gray-200 rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none shadow-sm transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Phone Number</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none shadow-sm transition-all" placeholder="082 123 4567" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Subject</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none shadow-sm transition-all" placeholder="How can we help?" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Message</label>
                    <textarea className="w-full bg-white border border-gray-200 rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none shadow-sm h-40 transition-all" placeholder="Tell us more about your project..."></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <Button className="w-full bg-navy text-white hover:bg-navy-light font-bold h-16 rounded-2xl text-lg group">
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[500px] w-full bg-gray-200 relative">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
          alt="Map" 
          className="w-full h-full object-cover grayscale opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="bg-white p-8 rounded-3xl shadow-2xl flex items-center gap-6 border border-gray-100"
          >
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
              <MapPin className="text-navy w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl font-display font-bold text-navy">Our Office</h4>
              <p className="text-navy/60">226 Beyers Naude, Rustenburg</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

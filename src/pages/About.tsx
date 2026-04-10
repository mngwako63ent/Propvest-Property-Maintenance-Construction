import { motion } from "motion/react";
import { CheckCircle2, Users, Award, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Our Story</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6">Built on Trust & Excellence</h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Propvest Property Maintenance and Construction Pty Ltd has been serving the 
                Rustenburg community with pride and professional integrity for over a decade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy mb-8">Our Mission</h2>
              <p className="text-navy/80 text-lg mb-8 leading-relaxed">
                To provide superior property maintenance and construction services that enhance the 
                value and functionality of our clients' properties through innovative solutions, 
                quality craftsmanship, and exceptional customer service.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Users, title: "Client First", desc: "Your satisfaction is our priority." },
                  { icon: Award, title: "Quality", desc: "No compromise on materials or work." },
                  { icon: Clock, title: "Reliability", desc: "We show up and deliver on time." },
                  { icon: CheckCircle2, title: "Integrity", desc: "Honest pricing and clear communication." }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-gray-100 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <item.icon className="w-6 h-6 text-navy" />
                    </div>
                    <h4 className="font-display font-bold text-navy mb-2">{item.title}</h4>
                    <p className="text-navy/80 text-sm font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "350+" },
              { label: "Expert Staff", value: "25+" },
              { label: "Years Experience", value: "10+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-accent text-5xl font-display font-bold mb-2">{stat.value}</p>
                <p className="text-white font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Evan Bolton" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-navy font-bold uppercase tracking-widest text-sm mb-4 block border-l-4 border-accent pl-4">Leadership</span>
              <h2 className="text-4xl font-display font-bold text-navy mb-6">Evan Bolton</h2>
              <p className="text-navy font-bold uppercase tracking-widest text-[10px] mb-8">Founder & Managing Director</p>
              <p className="text-navy/80 text-xl italic leading-relaxed">
                "Our goal has always been simple: to provide the people of Rustenburg with 
                reliable, high-quality construction and maintenance services they can trust. 
                We don't just build structures; we build relationships based on quality and integrity."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

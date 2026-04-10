import { motion } from "motion/react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Hammer, 
  Droplets, 
  Zap, 
  Trees, 
  Grid, 
  ShieldCheck, 
  Utensils, 
  Construction, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";

const services = [
  { title: "Property Maintenance", icon: Hammer, desc: "Comprehensive upkeep for residential and commercial properties." },
  { title: "Construction & Renovations", icon: Construction, desc: "Expert building and remodeling services tailored to your needs." },
  { title: "Plumbing", icon: Droplets, desc: "Professional plumbing installations and emergency repairs." },
  { title: "Electrical", icon: Zap, desc: "Safe and certified electrical work for any scale project." },
  { title: "Landscaping", icon: Trees, desc: "Transforming outdoor spaces with creative garden design." },
  { title: "Artificial Grass", icon: Grid, desc: "Low-maintenance, high-quality synthetic turf installations." },
  { title: "Paving", icon: Grid, desc: "Durable and aesthetic paving solutions for driveways and paths." },
  { title: "Waterproofing", icon: ShieldCheck, desc: "Advanced sealing techniques to protect your property from moisture." },
  { title: "Kitchen Installations", icon: Utensils, desc: "Modern kitchen design and professional fitting services." },
  { title: "Steel Work", icon: Hammer, desc: "Custom steel fabrication and structural installations." },
];

const projects = [
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/528556755_122171471564540291_5575064889096529626_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGmWKY9Znnp3Q8UU_GOCdzT8Hmoa_YiGrLweahr9iIasmuFskPXUGwEHYGfXXNFkE0UnOFW5EmPwp83tvrH_uw8&_nc_ohc=O_YGKDZ7bsAQ7kNvwHuV5rS&_nc_oc=AdoEYCFReQx4hPE0MKAPrREGhOnSjzxzdEM3XwhdECuQSq6lATU7a1aFMdKfyop1moc&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=ZLc865A8FtvwSGdSkS1_wA&_nc_ss=7a3a8&oh=00_Af2eazRqRWoQGJeJyhqM3NWwFtrOJhrjwFmiDzhL5Si2tQ&oe=69DD483F",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/470183293_122126706332540291_1881639188126969526_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF-EQrtYUUDvsu5Xg3dVtLHUyn3O4pF7M5TKfc7ikXszsQj40GxYMOtrIfxc2Cuc3YFvxTILf00frjHZNyzE4u_&_nc_ohc=qLrAsfNTMMAQ7kNvwFXLWue&_nc_oc=Adqy4k8kObbAk--QtE8XJwOS_q44LV0VPqT3bzxCS6CadPOoOH-UpFZHiEBnakgLDTA&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=u3k3p8IKAy-TD_3NWF0yDA&_nc_ss=7a3a8&oh=00_Af1akxmjepTJGC_aBnsySfdWRsrO1RGJVLxdhLUaevgOhA&oe=69DD5779",
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/469065389_122124851786540291_2102617891505005073_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHa-r0OH7CTWoSpXlVnELABOlxhferfskI6XGF96t-yQomDZ10HGDk8MSUflAHP9jsvU7SzVLtZobgCO7gUKG4E&_nc_ohc=WB6gK22-_W8Q7kNvwESjE0r&_nc_oc=Adoizsqs52MnkqGExNKVt8GSx9YklYDwojbCazOydLMN4fhq2S9mMaHNrnW6oEHj_IY&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=KVU9QUVm70lR-HZjTiEDqA&_nc_ss=7a3a8&oh=00_Af1q1E598jRli_dB5CB-McLhfug8PvjflesADsm_spOS8A&oe=69DD7239",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/470130113_122126581370540291_8443676170092574725_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFjKRHFISH5o45AiolClhg1v-lR4afOXdG_6VHhp85d0cVquujiF39I2Qd1ZA62tIv8NlnNxBBa94CUa7zNSUFd&_nc_ohc=zEz3W5SexnkQ7kNvwHr1RE0&_nc_oc=AdobDBgL51hhirvHR0-kk1NjWCSJ3lP6pdXG1pc8NuKi79LoRVGmw9g4jg-I5Ie2L9U&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=p0hxMPt2T9K6phs2Y36gWg&_nc_ss=7a3a8&oh=00_Af236E_ZCgg0QzYgsPlPZ9RBx0-uEx0u9omVEGb9mqkFqQ&oe=69DD5E2C",
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <img 
                src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/469065389_122124851786540291_2102617891505005073_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHa-r0OH7CTWoSpXlVnELABOlxhferfskI6XGF96t-yQomDZ10HGDk8MSUflAHP9jsvU7SzVLtZobgCO7gUKG4E&_nc_ohc=WB6gK22-_W8Q7kNvwESjE0r&_nc_oc=Adoizsqs52MnkqGExNKVt8GSx9YklYDwojbCazOydLMN4fhq2S9mMaHNrnW6oEHj_IY&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=KVU9QUVm70lR-HZjTiEDqA&_nc_ss=7a3a8&oh=00_Af1q1E598jRli_dB5CB-McLhfug8PvjflesADsm_spOS8A&oe=69DD7239" 
                alt="About Propvest" 
                className="rounded-2xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-navy font-display font-bold text-4xl">10+</p>
                <p className="text-navy font-bold uppercase tracking-wider text-xs">Years Experience</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-navy font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block border-l-4 border-accent pl-4">About Our Company</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy mb-6">
                Building Excellence in Rustenburg Since 2014
              </h2>
              <p className="text-navy/80 text-lg mb-8 leading-relaxed">
                Propvest Property Maintenance and Construction Pty Ltd is a leading provider of 
                comprehensive building solutions. We specialize in everything from minor repairs 
                to major construction projects, serving both residential and commercial clients 
                with unwavering commitment to quality.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Certified and Experienced Professionals",
                  "High-Quality Materials & Craftsmanship",
                  "On-Time Project Completion",
                  "Transparent Pricing & Free Quotes"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-navy/80 font-medium">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                      <CheckCircle2 className="text-navy w-5 h-5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-navy text-white hover:bg-navy-light font-bold">
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Comprehensive Services</h2>
            <p className="text-white/90 text-lg">
              We offer a wide range of professional services to keep your property in top condition 
              and bring your construction visions to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-navy-light border-white/10 hover:border-accent transition-all duration-300 group h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-accent group-hover:text-navy transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/80 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-navy font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block border-l-4 border-accent pl-4">Portfolio</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy">Featured Projects</h2>
            </div>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white font-bold transition-all">
              View All Projects
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Project ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-display font-bold text-xl mb-2">Modern Renovation</h4>
                    <p className="text-accent text-sm font-bold uppercase tracking-wider">Construction</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-navy font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block border-l-4 border-accent pl-4">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy mb-8">
                The Propvest Advantage
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Quality Guaranteed", desc: "We use only premium materials and proven techniques to ensure lasting results." },
                  { title: "Professional Team", desc: "Our skilled tradesmen are fully certified and committed to professional excellence." },
                  { title: "Customer Focused", desc: "We listen to your needs and provide tailored solutions that exceed expectations." },
                  { title: "Local Expertise", desc: "Deeply rooted in Rustenburg, we understand local building requirements and styles." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-navy w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-navy mb-2">{item.title}</h4>
                      <p className="text-navy/80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-navy rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/468998807_122124849668540291_8302284731384251653_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGjO8VuHHPxbD029D_OmzhPornVxLx5NtaiudXEvHk21jyBtGzuAdmjtjsIvQvx2VyuDc-QQuemMsPGyBo-Z6lM&_nc_ohc=ltrabT2w6PgQ7kNvwF1AAG8&_nc_oc=AdrYUPxHdtCMgEDxOn1MuTFRzogfch1VvjWHfodWlNykcQOZDfWw5HQDCBJVeTmuEyA&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=ZlqcmpflH_QgRlYpjNU01w&_nc_ss=7a3a8&oh=00_Af2jEihQbNlJtLILFZ4T-tXYm86OME0af5yS03oRAZNDig&oe=69DD7751" 
                  alt="Professional Work" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-10">
                    <p className="text-accent font-bold text-6xl mb-2">100%</p>
                    <p className="text-xl font-display font-bold">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-navy/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-bold">
            Contact us today for a free, no-obligation quote. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-navy text-white hover:bg-navy-light font-bold h-14 px-10 shadow-xl">
              Request a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white font-bold h-14 px-10 transition-all">
              Call Us: 082 594 7402
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div>
              <span className="text-navy font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block border-l-4 border-accent pl-4">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy mb-8">Contact Details</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="text-navy w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-navy font-bold uppercase tracking-widest text-[10px] mb-1">Phone Number</p>
                    <p className="text-xl font-display font-bold text-navy">082 594 7402</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="text-navy w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-navy font-bold uppercase tracking-widest text-[10px] mb-1">Email Address</p>
                    <p className="text-xl font-display font-bold text-navy break-all">propvestmaintenance@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="text-navy w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-navy font-bold uppercase tracking-widest text-[10px] mb-1">Office Location</p>
                    <p className="text-xl font-display font-bold text-navy">226 Beyers Naude, Rustenburg, 0300</p>
                  </div>
                </div>
              </div>
              
              {/* Simple Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                    <MapPin className="text-accent w-6 h-6" />
                    <span className="font-bold text-navy">Rustenburg, NW</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-navy mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Service Required</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none appearance-none transition-all">
                    <option>Property Maintenance</option>
                    <option>Construction</option>
                    <option>Renovations</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Message</label>
                  <textarea className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none h-32 transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <Button className="w-full bg-navy text-white hover:bg-navy-light font-bold h-14 rounded-xl text-lg shadow-lg transition-all">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

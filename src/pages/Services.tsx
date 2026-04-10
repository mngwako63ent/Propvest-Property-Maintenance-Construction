import { motion } from "motion/react";
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
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const allServices = [
  { 
    title: "Property Maintenance", 
    icon: Hammer, 
    desc: "From minor repairs to regular upkeep, we ensure your property remains in pristine condition year-round.",
    features: ["General Repairs", "Painting & Staining", "Gutter Cleaning", "Roof Maintenance"]
  },
  { 
    title: "Construction & Renovations", 
    icon: Construction, 
    desc: "We handle full-scale building projects and home improvements with precision and quality materials.",
    features: ["New Builds", "Home Extensions", "Bathroom Remodeling", "Structural Changes"]
  },
  { 
    title: "Plumbing Services", 
    icon: Droplets, 
    desc: "Certified plumbing solutions for new installations, maintenance, and emergency repair needs.",
    features: ["Leak Detection", "Geyser Installations", "Pipe Repairs", "Sanitary Ware Fitting"]
  },
  { 
    title: "Electrical Work", 
    icon: Zap, 
    desc: "Safe and compliant electrical installations and inspections for residential and commercial properties.",
    features: ["Wiring & Rewiring", "Lighting Design", "DB Board Upgrades", "Compliance Certificates"]
  },
  { 
    title: "Landscaping", 
    icon: Trees, 
    desc: "Creative garden design and maintenance to enhance your property's curb appeal and outdoor living.",
    features: ["Garden Design", "Irrigation Systems", "Tree Felling", "Lawn Care"]
  },
  { 
    title: "Artificial Grass", 
    icon: Grid, 
    desc: "High-quality synthetic turf installations for a perfect, low-maintenance green lawn all year.",
    features: ["Residential Lawns", "Sports Surfaces", "Play Areas", "Pet-Friendly Options"]
  },
  { 
    title: "Paving & Driveways", 
    icon: Grid, 
    desc: "Expert paving solutions using durable materials to create beautiful driveways, paths, and patios.",
    features: ["Brick Paving", "Stone Paving", "Driveway Design", "Repair & Cleaning"]
  },
  { 
    title: "Waterproofing", 
    icon: ShieldCheck, 
    desc: "Protect your structure from water damage with our advanced waterproofing and sealing systems.",
    features: ["Roof Waterproofing", "Balcony Sealing", "Damp Proofing", "Joint Sealing"]
  },
  { 
    title: "Kitchen Installations", 
    icon: Utensils, 
    desc: "Transform your kitchen with our custom design and professional installation services.",
    features: ["Cabinet Fitting", "Countertop Installation", "Appliance Integration", "Tiling"]
  },
  { 
    title: "Steel Work", 
    icon: Hammer, 
    desc: "Custom steel fabrication for gates, fencing, carports, and structural building elements.",
    features: ["Security Gates", "Fencing", "Carports", "Structural Steel"]
  },
];

export default function Services() {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-accent)_1px,_transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">What We Do</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6">Our Services</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Professional, reliable, and high-quality property solutions for every need in Rustenburg.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index % 2 * 0.1 }}
                className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-accent/20 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500 shadow-lg">
                    <service.icon className="w-8 h-8 text-accent group-hover:text-navy transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-navy mb-4">{service.title}</h3>
                    <p className="text-navy/80 mb-6 leading-relaxed">{service.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm font-bold text-navy">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-navy/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-bold">
            We handle projects of all sizes. Contact us today to discuss your specific requirements.
          </p>
          <Button size="lg" className="bg-navy text-white hover:bg-navy-light font-bold h-14 px-10 shadow-xl">
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

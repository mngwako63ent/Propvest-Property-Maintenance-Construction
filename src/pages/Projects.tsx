import { motion } from "motion/react";

const projectCategories = ["All", "Construction", "Maintenance", "Renovations", "Landscaping"];

const projects = [
  { title: "Modern Home Extension", category: "Construction", img: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/528556755_122171471564540291_5575064889096529626_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGmWKY9Znnp3Q8UU_GOCdzT8Hmoa_YiGrLweahr9iIasmuFskPXUGwEHYGfXXNFkE0UnOFW5EmPwp83tvrH_uw8&_nc_ohc=O_YGKDZ7bsAQ7kNvwHuV5rS&_nc_oc=AdoEYCFReQx4hPE0MKAPrREGhOnSjzxzdEM3XwhdECuQSq6lATU7a1aFMdKfyop1moc&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=ZLc865A8FtvwSGdSkS1_wA&_nc_ss=7a3a8&oh=00_Af2eazRqRWoQGJeJyhqM3NWwFtrOJhrjwFmiDzhL5Si2tQ&oe=69DD483F" },
  { title: "Luxury Kitchen Remodel", category: "Renovations", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" },
  { title: "Commercial Paving", category: "Maintenance", img: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/470183293_122126706332540291_1881639188126969526_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF-EQrtYUUDvsu5Xg3dVtLHUyn3O4pF7M5TKfc7ikXszsQj40GxYMOtrIfxc2Cuc3YFvxTILf00frjHZNyzE4u_&_nc_ohc=qLrAsfNTMMAQ7kNvwFXLWue&_nc_oc=Adqy4k8kObbAk--QtE8XJwOS_q44LV0VPqT3bzxCS6CadPOoOH-UpFZHiEBnakgLDTA&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=u3k3p8IKAy-TD_3NWF0yDA&_nc_ss=7a3a8&oh=00_Af1akxmjepTJGC_aBnsySfdWRsrO1RGJVLxdhLUaevgOhA&oe=69DD5779" },
  { title: "Garden Transformation", category: "Landscaping", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800" },
  { title: "Office Maintenance", category: "Maintenance", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
  { title: "New Residential Build", category: "Construction", img: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/470130113_122126581370540291_8443676170092574725_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFjKRHFISH5o45AiolClhg1v-lR4afOXdG_6VHhp85d0cVquujiF39I2Qd1ZA62tIv8NlnNxBBa94CUa7zNSUFd&_nc_ohc=zEz3W5SexnkQ7kNvwHr1RE0&_nc_oc=AdobDBgL51hhirvHR0-kk1NjWCSJ3lP6pdXG1pc8NuKi79LoRVGmw9g4jg-I5Ie2L9U&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=p0hxMPt2T9K6phs2Y36gWg&_nc_ss=7a3a8&oh=00_Af236E_ZCgg0QzYgsPlPZ9RBx0-uEx0u9omVEGb9mqkFqQ&oe=69DD5E2C" },
  { title: "Bathroom Renovation", category: "Renovations", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
  { title: "Artificial Grass Install", category: "Landscaping", img: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/472709649_122130720200540291_905168270511765124_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFV8vfN7OnNCdW4IodhPqLVp6MjZoNYNi6noyNmg1g2LoOQIg7xW8RFkYFqXXwn-bnHysUWOxBry815a3Qjn6Fk&_nc_ohc=J-fEbWw0JMYQ7kNvwHz1evF&_nc_oc=Adqf05jWlKn7cMeL5uea_WXowH4YpPZ8cIm5dvIhwLZ3LeQjoeFAAR04epEgi_QfAYM&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=n2DpcztEyyLcteiKlmCDsw&_nc_ss=7a3a8&oh=00_Af25ZEtmHOPP9GutkVjiOezFyqc67A8HUBFfFeUQQuYXzw&oe=69DD7436" },
  { title: "Steel Structure", category: "Construction", img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800" },
];

export default function Projects() {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gray-100 text-center border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-navy font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block border-l-4 border-accent pl-4 inline-block">Our Work</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-navy mb-6">Projects Gallery</h1>
            <p className="text-navy/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Explore our portfolio of successfully completed projects across Rustenburg.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-10 border-b border-gray-100 sticky top-20 bg-white/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  cat === "All" 
                    ? "bg-navy text-white" 
                    : "bg-gray-100 text-navy hover:bg-accent hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-3xl bg-gray-100"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl font-display font-bold">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8">Have a Project in Mind?</h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            Let's discuss how we can help you achieve your construction or maintenance goals.
          </p>
          <button className="bg-accent text-navy px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-colors shadow-xl">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}

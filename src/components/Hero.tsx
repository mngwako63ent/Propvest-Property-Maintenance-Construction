import { motion } from "motion/react";
import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/526683829_122171180624540291_8096796532992963926_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGObXKy1W8ow_xaQDJ2LcMqZJhl2q0Va5lkmGXarRVrmYFhNOSXI0-Ad_F2MwJ9B2F_B_3LrpJoVgMCeU_I-_MN&_nc_ohc=pI3WbKMX1s0Q7kNvwEzHyMg&_nc_oc=Adp9QbXauVpA0PSBlfma12WNPZj6X56QU0DajLYOSq1rACc1G1OD7CnIrUIeDmREpd0&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=htCq5ZSGW2oSTVFJcoKjpA&_nc_ss=7a3a8&oh=00_Af3_RV5vbX310fPIpH3Hm_ZIdrA0wmm1nsQzVXYa49Ug9g&oe=69DD5130",
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/482324212_122141675432540291_7829083945104159482_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF4NBOOpNzxnVNwbJg2w6svaYSO8-sQWiVphI7z6xBaJeQqHNTV5VTM_w0ANzVTkxQCuEYQpmMUI7YKe0Xe7E9q&_nc_ohc=vaewKbl7YzkQ7kNvwF9Apqi&_nc_oc=AdpACgQQ0nbl0V8ipoT-DyVW5ThvLRtqI7B8-znEgpdWF39WUaLNJzm8XKb23U4Q8lM&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AEcK_E7ze0X7EdcRL3j52Q&_nc_ss=7a3a8&oh=00_Af0bdqQVFapCCx7eXcz-ZQqZx3P_vM1FRuaLIuBN2cxBhw&oe=69DD5137",
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/483526743_122141674940540291_762711046457087298_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGqyDImWeajLx9txjT7x9d8BvjSW5qlBI4G-NJbmqUEjkG6vwUUmF3eQlgdXc7BkKFiSitzelCECtjjzjf3_Hwp&_nc_ohc=yK_3tXYc_XAQ7kNvwGrFF1t&_nc_oc=Ado2lbXiHoWsXINcSG82no0ty-trzYWgULBKMv0oZDWvxtIullT5Jzig2GHyt3cHhbU&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=3cuORBgYteLPVgeNF0rRmg&_nc_ss=7a3a8&oh=00_Af2JA0Gdx66eeE1AE4BVewg7nkl_e3FezL4IvOl1IVlZ8g&oe=69DD6C63",
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/473450814_122132065016540291_4450627234671400518_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFR_ZM_p7MI1B-_F_P2qt3rbHafQQb9PG1sdp9BBv08bcLXdY7N1UoZohUoAAK-BuA2hm_KkZDisVnJnFLOIsEc&_nc_ohc=LXOUxCZHv5gQ7kNvwHRwuNH&_nc_oc=AdoH1MaujrYMQ63WWhaF_4Qq6ocOvVh7CrUv1RSJRg5erTD96afZIhWeud1Wnl1wHjY&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=4mxV_16S3z2_6JSQcEpWow&_nc_ss=7a3a8&oh=00_Af3AJ_e0nSiWDyJCKgV-U_TQiTQnl6cnrVtt_mvQmhRWfg&oe=69DD6960",
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/483485370_122141674766540291_3290216185137588853_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGI-pPt-tuBedcLIjY6-gCNY8STRNi84T9jxJNE2LzhP0Eg8MTe7ANxTJKaaQYJwgqMbD2cZ41TF_-FdWBgBFh2&_nc_ohc=TQi1qTrEU4EQ7kNvwEjfKRn&_nc_oc=AdrN1TTDqbeERnxH5eO3uTk-c0bZeSLu9tH9hOGgblViDqrF5mx1sm_NlVF1wgo8-kU&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=PGMZuestNZ-yXBrCbaUuvQ&_nc_ss=7a3a8&oh=00_Af0plo7YRQc6PA1ZlLUNKe7tw_MeofnYAvUPHW9jGRO4cg&oe=69DD4B6A",
  "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/473365123_122132064620540291_1480991124130589666_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGXXcNeFYspv9Dsz7ZSAMQT5Dv0Nm2k8mfkO_Q2baTyZzsc19hV4z-zTfFMXuBOR1hbu-OS8qxCR_9bihDz5NPx&_nc_ohc=M3JRFpAq4-EQ7kNvwHshgeg&_nc_oc=Adrkv6II79qfPJkbkqm2zi0snBfAOBiEbFJuIY5_ycNSFWBguUGphjGB1lsQCzrYpQk&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=xKJOUJgdP7ICLLjkDntilQ&_nc_ss=7a3a8&oh=00_Af1atkBG7Fq077gcB2LkZ7Z_VLsJdIH2mJps4yGrBRxPaA&oe=69DD7643",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
          alt="Construction Site"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Floating Parallax Images */}
      <ParallaxHeroImages images={heroImages} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-widest text-accent uppercase bg-accent/20 rounded-full border border-accent/30">
              Rustenburg's Premier Choice
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1]">
              Full-Service <br />
              <span className="text-accent">Property Maintenance</span> <br />
              & Construction
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              Professional construction, landscaping, renovations, and property maintenance 
              services for residential and commercial clients in Rustenburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-navy hover:bg-accent/90 font-bold text-lg h-14 px-8 shadow-xl">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                View Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

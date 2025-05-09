import { Building2, Rocket, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/lib/hooks/useAnimateOnScroll";

const IndustryGapSection = () => {
  const { ref, controls, variants } = useAnimateOnScroll();

  const targetMarkets = [
    {
      title: "Primary Clients",
      description:
        "Engineering firms, construction companies, and infrastructure agencies in Rwanda and Tanzania",
      icon: <Target className="w-12 h-12 text-primary/70 mb-4" />,
    },
    {
      title: "Secondary Clients",
      description:
        "Regional engineering companies in Africa (Zambia, Kenya, Uganda) through Nziza's network",
      icon: <Building2 className="w-12 h-12 text-primary/70 mb-4" />,
    },
    {
      title: "Government Institutions",
      description:
        "Public sector organizations offering technical courses needing digital platforms",
      icon: <Users className="w-12 h-12 text-primary/70 mb-4" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">
            Closing the Digital Gap in Infrastructure
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-sm md:text-md lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Many infrastructure and construction companies are securing
            contracts with minimal digital presence. Our mission is to unlock
            their full potential through strategic digital transformation.
          </p>
        </motion.div>

        <h3 className="text-2xl font-bold mb-8 text-center">Who We Serve</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {targetMarkets.map((market, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">{market.icon}</div>
              <h4 className="text-xl font-bold mb-3">{market.title}</h4>
              <p className="text-gray-600">{market.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGapSection;
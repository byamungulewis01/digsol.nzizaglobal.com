import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAnimateOnScroll } from "@/lib/hooks/useAnimateOnScroll";

function HeroSection() {
  const { ref, controls, variants } = useAnimateOnScroll();

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-fuchsia-100 to-fuchsia-200/70">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            ref={ref}
            className="space-y-4"
          >
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-6xl">
              Transform Your Engineering Business with a Powerful Digital
              Presence
            </h1>
            <p className="text-gray-500 text-sm md:text-md lg:text-lg font-normal">
              Focus on your engineering and business tasks, we'll handle your
              digital presence to help you convince your next clients more
              easily and win even more jobs.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact" target="_blank">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Get a Free Consultation <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/83416.jpg"
                alt="Digital solutions for engineering firms"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

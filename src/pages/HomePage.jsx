import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MetaTags } from "@/lib/seo/MetaTags";
import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/lib/hooks/useAnimateOnScroll";
import HeroSection from "@/components/home/HeroSection";
import IndustryGapSection from "@/components/home/IndustryGapSection";
import ValueProposition from "@/components/home/ValueProposition";

export default function HomePage() {
  const { ref, controls, variants } = useAnimateOnScroll();

  return (
    <>
      <MetaTags
        title="Home"
        description="Transform your engineering business with powerful digital solutions. We handle your digital presence while you focus on your core business."
      />
      
      <div className="bg-white">
        <HeroSection />
        <IndustryGapSection />
        <ValueProposition />

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-gray-500 mt-4">
                We've helped engineering firms across Rwanda and Tanzania
                transform their digital presence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.2 }
                    }
                  }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">
                      {testimonial.initials}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full py-12 md:py-24 bg-primary text-primary-foreground"
        >
          <div className="max-w-7xl px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Schedule a free consultation with our digital experts. We'll
                analyze your current digital footprint and provide customized
                recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" target="_blank">
                  <Button variant="secondary" size="lg" className="gap-2 w-full sm:w-auto">
                    Get a Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

const testimonials = [
  {
    name: "Alex Brown",
    initials: "AB",
    company: "Structural Engineering Firm",
    content: "Nziza Global transformed our online presence. Our project inquiries have increased by 40% since launching our new website."
  },
  {
    name: "Maria Nyaga",
    initials: "MN",
    company: "Civil Engineering Consultancy",
    content: "Their content strategy helped us establish thought leadership in our industry. We're now seen as the go-to experts."
  },
  {
    name: "James Kamau",
    initials: "JK",
    company: "Mechanical Engineering Services",
    content: "The social media management has been fantastic. We've connected with new clients we wouldn't have reached otherwise."
  }
];
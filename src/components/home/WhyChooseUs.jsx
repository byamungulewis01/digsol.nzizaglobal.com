import { Building, CheckCircle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

function WhyChooseUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose Nziza Global
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-gray-600">
                We specialize in serving construction and infrastructure
                companies, understanding your unique challenges and
                opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p className="text-gray-600">
                Our websites are built using the latest frameworks like React.js
                and Next.js for optimal performance and user experience.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Full-Service Agency
              </h3>
              <p className="text-gray-600">
                From website development to content creation and social media
                management, we handle all aspects of your digital presence.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide continuous maintenance and updates, ensuring your
                digital assets remain current and effective.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

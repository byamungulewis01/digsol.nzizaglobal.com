import React from 'react';
import { MetaTags } from "@/lib/seo/MetaTags";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  Award, 
  Globe, 
  Lightbulb, 
  Shield 
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

const AboutPage = () => {
  return (
    <>
      <MetaTags
        title="About Us"
        description="Learn about Digital Solutions - Your trusted partner in web development, social media management, and content creation for engineering businesses. Discover our mission and expertise."
        keywords="about digital solutions, engineering web development, social media management company, content creation agency, engineering digital services, about us"
        ogImage="/images/about-og.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Digital Solutions",
          "description": "Digital Solutions is a leading provider of digital services for engineering businesses, specializing in web development, social media management, and content creation.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Digital Solutions",
            "description": "We specialize in providing comprehensive digital solutions for engineering businesses, helping them establish and grow their online presence.",
            "foundingDate": "2024",
            "areaServed": "Worldwide",
            "knowsAbout": [
              "Web Development",
              "Social Media Management",
              "Content Creation",
              "Digital Marketing",
              "Engineering Business Solutions"
            ]
          }
        }}
      />
      
      <div className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-6"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                About Digital Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're a team of digital experts passionate about helping engineering businesses thrive in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2024, Digital Solutions emerged from a vision to bridge the digital gap in the engineering industry. We recognized that many engineering firms, despite their technical expertise, were struggling to establish a strong online presence.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey began with a simple mission: to empower engineering businesses with the digital tools and strategies they need to succeed in today's connected world. We combine technical expertise with creative solutions to deliver comprehensive digital services.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to serve engineering businesses across Rwanda and Tanzania, helping them build their digital presence and connect with their target audience effectively.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative"
              >
                <img
                  src="/77.jpg"
                  alt="Our Story"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  To empower engineering businesses with innovative digital solutions that enhance their online presence, streamline their operations, and drive sustainable growth in the digital age.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  To be the leading digital solutions provider for engineering businesses in East Africa, known for our innovative approach, technical excellence, and commitment to client success.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape our relationships with clients and partners.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Innovation</h3>
                </div>
                <p className="text-gray-600">
                  We constantly explore new technologies and approaches to deliver cutting-edge solutions.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Integrity</h3>
                </div>
                <p className="text-gray-600">
                  We maintain the highest standards of professional ethics and transparency in all our dealings.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Client Focus</h3>
                </div>
                <p className="text-gray-600">
                  We prioritize understanding and meeting our clients' unique needs and objectives.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Excellence</h3>
                </div>
                <p className="text-gray-600">
                  We strive for excellence in every project, delivering quality that exceeds expectations.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's work together to build your engineering business's digital future.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage; 
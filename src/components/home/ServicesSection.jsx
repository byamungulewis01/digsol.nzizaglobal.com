import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Share2, FileText } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ServicesSection() {
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
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Digital Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just deliver services; we partner with you. Keep your focus
            on your projects, and we'll handle everything your company needs
            digitally.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <Monitor className="h-12 w-12 text-blue-500 mb-2" />
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Modern websites built with the latest technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Custom websites that showcase your expertise, portfolio, and
                  services with high-performance technology.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/services#web-development">
                  <button className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="border-t-4 border-t-green-500">
              <CardHeader>
                <Share2 className="h-12 w-12 text-green-500 mb-2" />
                <CardTitle>Social Media Management</CardTitle>
                <CardDescription>
                  Strategic content and platform management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Professional handling of your social media accounts to maintain
                  engagement and build relationships.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/services#social-media">
                  <button className="flex items-center text-sm font-medium text-gray-600 hover:text-green-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <FileText className="h-12 w-12 text-purple-500 mb-2" />
                <CardTitle>Content Creation</CardTitle>
                <CardDescription>
                  Compelling content that resonates with decision-makers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Technical blogs, videos, infographics, and case studies that
                  build trust with potential clients.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/services#content-creation">
                  <button className="flex items-center text-sm font-medium text-gray-600 hover:text-purple-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;

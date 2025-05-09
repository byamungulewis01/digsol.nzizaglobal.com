import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MetaTags } from "@/lib/seo/MetaTags";
import {
  Monitor,
  Share2,
  FileText,
  Code,
  BarChart,
  Layout,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ServicesPage = () => {
  return (
    <>
      <MetaTags
        title="Our Digital Services"
        description="Comprehensive digital services for engineering businesses: Professional web development, strategic social media management, and engaging content creation. Boost your online presence today."
        keywords="web development services, social media management, content creation, engineering website design, digital marketing services, professional web design, social media strategy, content marketing"
        ogImage="/images/services-og.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Service",
              position: 1,
              name: "Web Development",
              description:
                "Custom website development and design services for engineering businesses",
            },
            {
              "@type": "Service",
              position: 2,
              name: "Social Media Management",
              description:
                "Professional social media management and strategy for engineering companies",
            },
            {
              "@type": "Service",
              position: 3,
              name: "Content Creation",
              description:
                "High-quality content creation and marketing for engineering businesses",
            },
          ],
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
                Our Digital Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just deliver these services to you; we handle
                everything your company needs while you focus on your projects.
                You pay a small portion of your income as a monthly/yearly
                subscription.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Web Development Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            id="web-development"
            className="mb-20 scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                  <Monitor className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Web Development</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Modern, high-performance websites built using the world's
                  latest technologies like ReactJS and NextJS to reflect
                  professionalism and drive engagement.
                </p>
                <motion.ul
                  variants={staggerContainer}
                  className="space-y-3 mb-6"
                >
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Code className="h-4 w-4 text-blue-600" />
                    </span>
                    <span>
                      Custom Website Design: Responsive, user-friendly websites
                    </span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Layout className="h-4 w-4 text-blue-600" />
                    </span>
                    <span>
                      Portfolio Showcases: Interactive galleries and case
                      studies
                    </span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <BarChart className="h-4 w-4 text-blue-600" />
                    </span>
                    <span>SEO Optimization: High search engine rankings</span>
                  </motion.li>
                </motion.ul>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Request a Quote
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="/web-develop.jpg"
                  alt="Web Development Services"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Social Media Management */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            id="social-media"
            className="mb-20 scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInUp}
                className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="/social-media.jpg"
                  alt="Social Media Management Services"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                <div className="inline-block p-3 bg-green-100 rounded-lg mb-4">
                  <Share2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Social Media Management
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Creation, promotion, and ongoing management of social media
                  platforms to ensure continuous visibility and interaction.
                </p>
                <motion.ul
                  variants={staggerContainer}
                  className="space-y-3 mb-6"
                >
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Code className="h-4 w-4 text-green-600" />
                    </span>
                    <span>
                      Platform Management: LinkedIn, Facebook, Twitter (X), and
                      Instagram
                    </span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Layout className="h-4 w-4 text-green-600" />
                    </span>
                    <span>
                      Content Scheduling: Regular updates to maintain engagement
                    </span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <BarChart className="h-4 w-4 text-green-600" />
                    </span>
                    <span>
                      Analytics and Ad Campaigns: Track performance and run
                      targeted ads
                    </span>
                  </motion.li>
                </motion.ul>
                <Link to="/contact">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Request a Quote
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.section>

          {/* Content Creation */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            id="content-creation"
            className="mb-20 scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <div className="inline-block p-3 bg-purple-100 rounded-lg mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Content Creation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Compelling, memorable content that resonates with
                  decision-makers and builds trust with your future clients.
                </p>
                <motion.ul
                  variants={staggerContainer}
                  className="space-y-3 mb-6"
                >
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <Code className="h-4 w-4 text-purple-600" />
                    </span>
                    <span>
                      Technical Blogs & Articles: Industry trends and project
                      insights
                    </span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <Layout className="h-4 w-4 text-purple-600" />
                    </span>
                    <span>
                      Video Production: Project walkthroughs and promotional
                      content
                    </span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <BarChart className="h-4 w-4 text-purple-600" />
                    </span>
                    <span>
                      Case Studies & Infographics: Showcase expertise and
                      simplify complex concepts
                    </span>
                  </motion.li>
                </motion.ul>
                <Link to="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Request a Quote
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="/content-creation2.jpg"
                  alt="Content Creation Services"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's work together to build your engineering business's digital
                future.
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

export default ServicesPage;

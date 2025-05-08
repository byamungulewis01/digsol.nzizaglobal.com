import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  ChevronRight,
  Monitor,
  ArrowRight,
  FileText,
  Share2,
  Award,
  Building,
  Users,
  BarChart,
  Clock,
  CheckCircle,
} from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import IndustryGapSection from "@/components/home/IndustryGapSection";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  // For FAQ section
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question:
        "How can digital transformation benefit my construction company?",
      answer:
        "Digital transformation can help your construction business win more contracts by showcasing your portfolio professionally, establish thought leadership in your industry, improve client communication, and create a competitive advantage over companies without a strong online presence.",
    },
    {
      question:
        "What makes Nziza Global different from other digital agencies?",
      answer:
        "Nziza Global specializes specifically in serving infrastructure and construction companies. We understand the unique challenges and opportunities in your industry, allowing us to create digital strategies that effectively reach decision-makers and showcase technical expertise.",
    },
    {
      question: "How long does it typically take to develop a website?",
      answer:
        "Most custom websites for construction companies take 4-6 weeks from conception to launch, depending on complexity. We use modern frameworks like React.js to ensure quick development without sacrificing quality or performance.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we provide complete maintenance and support packages for all our services. This includes website updates, security patches, content refreshes, and continuous social media management to ensure your digital presence remains current and effective.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />
      <IndustryGapSection />

      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Digital Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just deliver services; we partner with you. Keep your
              focus on your projects, and we'll handle everything your company
              needs digitally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  Professional handling of your social media accounts to
                  maintain engagement and build relationships.
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
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Nziza Global
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Industry Expertise
                </h3>
                <p className="text-gray-600">
                  We specialize in serving construction and infrastructure
                  companies, understanding your unique challenges and
                  opportunities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Modern Technology
                </h3>
                <p className="text-gray-600">
                  Our websites are built using the latest frameworks like
                  React.js and Next.js for optimal performance and user
                  experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
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
            </div>

            <div className="flex gap-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 mt-4">
              We've helped engineering firms across Rwanda and Tanzania
              transform their digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">
                  AB
                </span>
                <div>
                  <h3 className="text-lg font-bold">Alex Brown</h3>
                  <p className="text-gray-500">Structural Engineering Firm</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Nziza Global transformed our online presence. Our project
                inquiries have increased by 40% since launching our new
                website."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">
                  MN
                </span>
                <div>
                  <h3 className="text-lg font-bold">Maria Nyaga</h3>
                  <p className="text-gray-500">Civil Engineering Consultancy</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Their content strategy helped us establish thought leadership
                in our industry. We're now seen as the go-to experts."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">
                  JK
                </span>
                <div>
                  <h3 className="text-lg font-bold">James Kamau</h3>
                  <p className="text-gray-500">
                    Mechanical Engineering Services
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                "The social media management has been fantastic. We've connected
                with new clients we wouldn't have reached otherwise."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
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
              <Button variant="secondary" size="lg" className="gap-2">
                Get a Free Consultation <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

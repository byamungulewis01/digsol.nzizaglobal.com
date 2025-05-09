import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MetaTags } from "@/lib/seo/MetaTags";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

const faqCategories = [
  {
    id: "general",
    title: "General",
    items: [
      {
        question: "What is Nziza Global's digital division, and who is it for?",
        answer:
          "Nziza Global's digital division serves infrastructure, engineering, and construction companies, as well as institutions. We help them build strong digital identities so they can focus on core operations while we manage their online presence.",
      },
      {
        question:
          "Why do construction and infrastructure companies need a digital presence?",
        answer:
          "A professional digital presence boosts credibility, attracts larger clients, showcases completed projects, and strengthens bids—especially in competitive or international markets.",
      },
      {
        question: "Do I need technical skills to work with Nziza Global?",
        answer:
          "No technical skills are needed. Our team handles everything—from planning and creation to publishing and management.",
      },
      {
        question: "What regions do you serve?",
        answer:
          "We primarily serve clients in Rwanda and Tanzania, with extended services available in Kenya, Uganda, Zambia, and across Africa through our network.",
      },
      {
        question: "Do you offer consultations before I commit to a package?",
        answer:
          "Yes, we offer free consultations to understand your goals and recommend the best combination of services, including whether a dedicated server is necessary.",
      },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    items: [
      {
        question: "What's included in your standard website package?",
        answer:
          "Our $70/month package includes a modern, mobile-responsive website (6–8 pages), shared hosting, a domain name, 5 business email accounts, SEO optimization, and minor customizations (adding/replacing up to 2 pages).",
      },
      {
        question:
          "Can you build advanced features like portfolios, apps, or payment systems?",
        answer:
          "Yes. We offer add-ons like interactive portfolios, mobile apps, and secure payment gateway integration. These may incur additional fees based on complexity.",
      },
      {
        question: "Do I own the domain name and website you create?",
        answer:
          "Yes, you retain full ownership of your domain and website. We manage them as part of your service, but they belong to you.",
      },
      {
        question: "Do I need a dedicated server?",
        answer:
          "Most clients use shared hosting. If your website needs high performance (due to large portfolios or traffic), we'll recommend a dedicated server at $50/month.",
      },
    ],
  },
  {
    id: "content",
    title: "Content & Social",
    items: [
      {
        question:
          "What do you need from me to create blog posts or social media content?",
        answer:
          "You must provide images, videos, or event/project details. These materials help us create authentic, brand-aligned content.",
      },
      {
        question: "What happens if I don't provide content on time?",
        answer:
          "If you don't provide materials on time, your allocated content (e.g., blog posts or social updates) for that month is forfeited and cannot be carried over.",
      },
      {
        question: "Can I review content before it's posted?",
        answer:
          "Yes. Blog posts are sent for a 72-hour review and social media posts for 24 hours. Once you trust our understanding of your brand, you may authorize us to post without review.",
      },
      {
        question:
          "What happens if Nziza Global doesn't deliver the promised posts or content?",
        answer:
          "In rare cases of internal delays or force majeure, any missed content will be rolled over to the next month.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    items: [
      {
        question: "Can I customize or mix different services to fit my budget?",
        answer:
          "Absolutely. Our services are flexible and can be combined to suit your goals. You'll receive a detailed quote before we start.",
      },
      {
        question: "Are there any hidden fees or long-term commitments?",
        answer:
          "No. All pricing is transparent. Services can be adjusted or canceled with a 30-day notice.",
      },
      {
        question:
          "Do you offer refunds if I don't use all services in my bundle?",
        answer:
          "No. Monthly services are not refundable. It's your responsibility to provide the content needed for us to fulfill your bundle.",
      },
      {
        question: "Can I cancel or change my subscription?",
        answer:
          "Yes. You can cancel or modify your plan with 30 days' notice. We aim to stay aligned with your evolving needs.",
      },
      {
        question: "Do you offer annual payment discounts?",
        answer:
          "Yes. Annual subscriptions come with a 20% discount. However, this offer may change, so please confirm availability at the time of payment.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical",
    items: [
      {
        question: "Can you set up business email accounts for my team?",
        answer:
          "Yes. We provide up to 5 email accounts with your website package, the number increases depending on the bundle you are purchasing. Additional emails can be added at $5/month per account.",
      },
      {
        question: "Can you integrate a payment system on my website?",
        answer:
          "Yes. We offer secure payment gateway integration for a one-time setup fee of $300 and a recurring fee of $35/month for maintenance.",
      },
      {
        question: "What technologies do you use for web development?",
        answer:
          "We use modern frameworks like React.js with Tailwind CSS for responsive interfaces, Node.js with Express for backend, and WordPress or Strapi for content management when needed. Our hosting options include AWS and DigitalOcean.",
      },
      {
        question: "How do you ensure website security?",
        answer:
          "We implement SSL certificates for all websites, perform regular security updates, and follow best practices for secure coding and data protection. Additional security measures are available based on your needs.",
      },
    ],
  },
];

const FaqPage = () => {
  return (
    <>
      <MetaTags
        title="Frequently Asked Questions"
        description="Find answers to common questions about our digital services. Learn about our web development, social media management, and content creation solutions for engineering businesses."
        keywords="digital solutions FAQ, web development questions, social media management FAQ, content creation FAQ, engineering website FAQ, digital marketing FAQ"
        ogImage="/images/faq-og.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What digital services do you offer for engineering businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer comprehensive digital services including web development, social media management, and content creation specifically tailored for engineering businesses.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to develop a website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website development timeline varies based on complexity, typically ranging from 4-8 weeks for a complete engineering business website.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide ongoing support after website launch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide comprehensive ongoing support including maintenance, updates, and technical assistance to ensure your website runs smoothly.",
              },
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
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find answers to common questions about our digital services and
                solutions for engineering businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* FAQ Categories */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <Tabs defaultValue="general" className="mb-8">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl">
                  {faqCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <Accordion
                      type="single"
                      collapsible
                      className="max-w-3xl mx-auto"
                    >
                      {category.items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>

      {/* Didn't Find Your Answer */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-fuchsia-50/70 rounded-lg py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Didn't Find Your Answer?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our team is here to help. Contact us with your specific questions and
          we'll get back to you as soon as possible.
        </p>
        <Link to="/contact">
          <Button>Contact Us</Button>
        </Link>
      </motion.section>
    </>
  );
};

export default FaqPage;

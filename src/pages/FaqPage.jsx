import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FaqPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* FAQ Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering your organization's digital dominance to beat competitors
            and win more projects.
          </p>
        </section>

        {/* FAQ Categories */}
        <Tabs defaultValue="general" className="mb-8">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="content">Content & Social</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
            </TabsList>
          </div>

          {/* General FAQs */}
          <TabsContent value="general">
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is Nziza Global's digital division, and who is it for?
                </AccordionTrigger>
                <AccordionContent>
                  Nziza Global's digital division serves infrastructure,
                  engineering, and construction companies, as well as
                  institutions. We help them build strong digital identities so
                  they can focus on core operations while we manage their online
                  presence.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Why do construction and infrastructure companies need a
                  digital presence?
                </AccordionTrigger>
                <AccordionContent>
                  A professional digital presence boosts credibility, attracts
                  larger clients, showcases completed projects, and strengthens
                  bids—especially in competitive or international markets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do I need technical skills to work with Nziza Global?
                </AccordionTrigger>
                <AccordionContent>
                  No technical skills are needed. Our team handles
                  everything—from planning and creation to publishing and
                  management.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What regions do you serve?</AccordionTrigger>
                <AccordionContent>
                  We primarily serve clients in Rwanda and Tanzania, with
                  extended services available in Kenya, Uganda, Zambia, and
                  across Africa through our network.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Do you offer consultations before I commit to a package?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer free consultations to understand your goals and
                  recommend the best combination of services, including whether
                  a dedicated server is necessary.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Web Development FAQs */}
          <TabsContent value="web">
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What's included in your standard website package?
                </AccordionTrigger>
                <AccordionContent>
                  Our $70/month package includes a modern, mobile-responsive
                  website (6–8 pages), shared hosting, a domain name, 5 business
                  email accounts, SEO optimization, and minor customizations
                  (adding/replacing up to 2 pages).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can you build advanced features like portfolios, apps, or
                  payment systems?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We offer add-ons like interactive portfolios, mobile
                  apps, and secure payment gateway integration. These may incur
                  additional fees based on complexity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do I own the domain name and website you create?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you retain full ownership of your domain and website. We
                  manage them as part of your service, but they belong to you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Do I need a dedicated server?
                </AccordionTrigger>
                <AccordionContent>
                  Most clients use shared hosting. If your website needs high
                  performance (due to large portfolios or traffic), we'll
                  recommend a dedicated server at $50/month.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Content & Social Media FAQs */}
          <TabsContent value="content">
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What do you need from me to create blog posts or social media
                  content?
                </AccordionTrigger>
                <AccordionContent>
                  You must provide images, videos, or event/project details.
                  These materials help us create authentic, brand-aligned
                  content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What happens if I don't provide content on time?
                </AccordionTrigger>
                <AccordionContent>
                  If you don't provide materials on time, your allocated content
                  (e.g., blog posts or social updates) for that month is
                  forfeited and cannot be carried over.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I review content before it's posted?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Blog posts are sent for a 72-hour review and social media
                  posts for 24 hours. Once you trust our understanding of your
                  brand, you may authorize us to post without review.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What happens if Nziza Global doesn't deliver the promised
                  posts or content?
                </AccordionTrigger>
                <AccordionContent>
                  In rare cases of internal delays or force majeure, any missed
                  content will be rolled over to the next month.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Pricing FAQs */}
          <TabsContent value="pricing">
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Can I customize or mix different services to fit my budget?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. Our services are flexible and can be combined to
                  suit your goals. You'll receive a detailed quote before we
                  start.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Are there any hidden fees or long-term commitments?
                </AccordionTrigger>
                <AccordionContent>
                  No. All pricing is transparent. Services can be adjusted or
                  canceled with a 30-day notice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do you offer refunds if I don't use all services in my bundle?
                </AccordionTrigger>
                <AccordionContent>
                  No. Monthly services are not refundable. It's your
                  responsibility to provide the content needed for us to fulfill
                  your bundle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I cancel or change my subscription?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. You can cancel or modify your plan with 30 days' notice.
                  We aim to stay aligned with your evolving needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Do you offer annual payment discounts?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Annual subscriptions come with a 20% discount. However,
                  this offer may change, so please confirm availability at the
                  time of payment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Technical FAQs */}
          <TabsContent value="technical">
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Can you set up business email accounts for my team?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We provide up to 5 email accounts with your website
                  package, the number increases depending on the bundle you are
                  purchasing. Additional emails can be added at $5/month per
                  account.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can you integrate a payment system on my website?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We offer secure payment gateway integration for a
                  one-time setup fee of $300 and a recurring fee of $35/month
                  for maintenance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What technologies do you use for web development?
                </AccordionTrigger>
                <AccordionContent>
                  We use modern frameworks like React.js with Tailwind CSS for
                  responsive interfaces, Node.js with Express for backend, and
                  WordPress or Strapi for content management when needed. Our
                  hosting options include AWS and DigitalOcean.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do you ensure website security?
                </AccordionTrigger>
                <AccordionContent>
                  We implement SSL certificates for all websites, perform
                  regular security updates, and follow best practices for secure
                  coding and data protection. Additional security measures are
                  available based on your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
      {/* Didn't Find Your Answer */}
      <section className="bg-fuchsia-50/70 rounded-lg py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Didn't Find Your Answer?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our team is here to help. Contact us with your specific questions and
          we'll get back to you as soon as possible.
        </p>
        <Link to="/contact">
          <Button>Contact Us</Button>
        </Link>
      </section>
    </>
  );
};

export default FaqPage;

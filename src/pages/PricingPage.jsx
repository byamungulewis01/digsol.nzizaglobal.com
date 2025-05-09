import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetaTags } from "@/lib/seo/MetaTags";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { useAnimateOnScroll } from "@/lib/hooks/useAnimateOnScroll";

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

const pricingBundles = [
  {
    id: "fresher",
    title: "Fresher Bundle",
    badge: "Best for Micro",
    description: "Ideal for micro businesses needing a well-managed website",
    monthlyPrice: 50,
    originalPrice: 80,
    features: [
      "6 pages responsive website",
      "Hosting on shared server",
      "Domain name purchase",
      "1 SSL certificate",
      "Full written content"
    ],
    deliveryTime: "1 Week",
    borderColor: "border-purple-100"
  },
  {
    id: "starter",
    title: "Starter Bundle",
    badge: "Popular",
    description: "Ideal for small businesses or serious startups",
    monthlyPrice: 80,
    originalPrice: 140,
    features: [
      "Everything in the Fresher bundle",
      "Additional 4 pages",
      "5 business emails",
      "Team LinkedIn profile optimization",
      "SEO optimizations",
      "Google My Business setup"
    ],
    deliveryTime: "2 Weeks",
    borderColor: "border-purple-200"
  },
  {
    id: "growth",
    title: "Growth Bundle",
    badge: "Best Value",
    description: "Ideal for expanding businesses aiming to boost visibility",
    monthlyPrice: 140,
    originalPrice: 210,
    features: [
      "Everything in the Starter bundle",
      "Additional 2 pages",
      "2 Social Media platforms management",
      "Blogging (2 posts/month)",
      "3 Additional business emails"
    ],
    deliveryTime: "2 Weeks",
    borderColor: "border-purple-300"
  },
  {
    id: "established",
    title: "Established Bundle",
    badge: "Advanced",
    description: "Ideal for well-rooted businesses seeking to strengthen brand authority",
    monthlyPrice: 220,
    originalPrice: 317,
    features: [
      "Everything in the Growth bundle",
      "Additional 2 pages",
      "2 Additional business emails",
      "2 Additional Social Media platforms",
      "Dedicated server hosting",
      "Subdomain with SSL certificate"
    ],
    deliveryTime: "2 Weeks",
    borderColor: "border-purple-400"
  }
];

const serviceCategories = [
  {
    id: "web",
    title: "Web Services",
    services: [
      {
        name: "Main Web Cost",
        details: "Included pages: 6-8 pages (Home, About Us, Services, Projects, Contact Us, Testimonials) that can be customized",
        price: "$70/month"
      },
      {
        name: "Additional Web Pages",
        details: "The number of pages given above have been few and you need additional pages. The price count per page building.",
        price: "$7/month"
      },
      {
        name: "Domain and Hosting",
        details: "Hosting on shared server and domain name purchase",
        price: "$10/month"
      },
      {
        name: "Dedicated Hosting",
        details: "High-performance hosting for larger/high speed/complex websites",
        price: "$50/month"
      },
      {
        name: "SEO Optimization",
        details: "Building your discoverability with SEO best practices",
        price: "$40/page"
      }
    ]
  },
  {
    id: "design",
    title: "Graphics Design",
    services: [
      {
        name: "Company Profile",
        details: "Designing graphics and content development for your company profile",
        price: "$20/page"
      },
      {
        name: "Social Media Graphics",
        details: "Designing photo graphics for social media posting",
        price: "$40/each"
      },
      {
        name: "Marketing Banners",
        details: "Designing banners for marketing or events",
        price: "$100/each"
      },
      {
        name: "Brochures",
        details: "Designing brochures for marketing or events",
        price: "$50/each"
      },
      {
        name: "Business Cards",
        details: "Designing graphically appealing and communicating business cards",
        price: "$10/each"
      },
      {
        name: "Logo Design",
        details: "Company logo design or revision (short form, long form, emblem)",
        price: "$50"
      }
    ]
  },
  {
    id: "media",
    title: "Social & Media",
    services: [
      {
        name: "Social Platforms",
        details: "Setup + continuous management (includes 1 designed post/week, 1 video edited/month – 10 min maximum length)",
        price: "$30/month/platform"
      },
      {
        name: "Blog Creation",
        details: "Up to 2 SEO-optimized blog posts per month",
        price: "$80/month"
      },
      {
        name: "Logo Animation",
        details: "Company logo professional animation",
        price: "$70"
      },
      {
        name: "Business Video Intro",
        details: "Your business video presentation - intro and outro",
        price: "$100"
      },
      {
        name: "Short Form Videos",
        details: "Editing short form videos for promotional or business purposes (less than 2 minutes video after edit)",
        price: "$50/10 sec"
      },
      {
        name: "Long Form Videos",
        details: "Editing long form videos for promotional or business purposes (over 2 minutes video after edit)",
        price: "$50/min"
      }
    ]
  },
  {
    id: "other",
    title: "Other Services",
    services: [
      {
        name: "Business Emails",
        details: "Setting up business email accounts linked with your company domain for professional business communications",
        price: "$5/month/each"
      },
      {
        name: "Payment Gateway",
        details: "Add payment feature into your website backed by customized invoicing and quotation systems",
        price: "$40/month + $300 setup"
      }
    ]
  }
];

const faqItems = [
  {
    question: "Can I customize or mix different services to fit my budget?",
    answer: "Absolutely. Our services are flexible and can be combined to suit your goals. You'll receive a detailed quote before we start."
  },
  {
    question: "Are there any hidden fees or long-term commitments?",
    answer: "No. All pricing is transparent. Services can be adjusted or canceled with a 30-day notice."
  },
  {
    question: "Do you offer refunds if I don't use all services in my bundle?",
    answer: "No. Monthly services are not refundable. It's your responsibility to provide the content needed for us to fulfill your bundle."
  },
  {
    question: "Can I cancel or change my subscription?",
    answer: "Yes. You can cancel or modify your plan with 30 days' notice. We aim to stay aligned with your evolving needs."
  },
  {
    question: "Do you offer annual payment discounts?",
    answer: "Yes. Annual subscriptions come with a 20% discount. However, this offer may change, so please confirm availability at the time of payment."
  }
];

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const { ref, controls, variants } = useAnimateOnScroll();

  const calculateAnnualPrice = (monthlyPrice) => {
    const annualPrice = monthlyPrice * 12 * 0.8;
    return annualPrice.toFixed(0);
  };

  return (
    <>
      <MetaTags
        title="Pricing Plans"
        description="Transparent pricing for our digital services. Choose from flexible plans for web development, social media management, and content creation. Find the perfect package for your engineering business."
        keywords="digital services pricing, web development cost, social media management pricing, content creation packages, engineering website pricing, digital marketing plans, affordable web design"
        ogImage="/images/pricing-og.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          "offers": [
            {
              "@type": "Offer",
              "name": "Basic Package",
              "description": "Essential digital services for small engineering businesses"
            },
            {
              "@type": "Offer",
              "name": "Professional Package",
              "description": "Comprehensive digital solutions for growing engineering companies"
            },
            {
              "@type": "Offer",
              "name": "Enterprise Package",
              "description": "Full-scale digital transformation for large engineering firms"
            }
          ]
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
                Pricing Plans
          </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transparent pricing for comprehensive digital solutions. Choose the perfect package for your engineering business.
          </p>
        </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <Tabs
            defaultValue="monthly"
            className="w-64"
            onValueChange={setBillingCycle}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">
                Annual <Badge className="ml-1 bg-purple-700">20% off</Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Main Pricing Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
              {pricingBundles.map((bundle) => (
                <motion.div key={bundle.id} variants={fadeInUp}>
                  <Card className={`border-2 ${bundle.borderColor} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <CardHeader className="bg-purple-50 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-purple-900">
                          {bundle.title}
                  </CardTitle>
                  <Badge className="bg-purple-200 text-purple-800">
                          {bundle.badge}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600 font-light">
                        {bundle.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-baseline mb-5">
                  <span className="text-3xl font-bold text-purple-900">
                    $
                    {billingCycle === "monthly"
                            ? bundle.monthlyPrice 
                            : calculateAnnualPrice(bundle.monthlyPrice)}
                  </span>
                  <span className="text-gray-500 ml-1">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                  {billingCycle === "monthly" && (
                    <span className="text-sm text-gray-400 ml-2 line-through">
                            ${bundle.originalPrice}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                        {bundle.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm font-light text-gray-600">
                              {feature}
                    </span>
                  </div>
                        ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col pt-0">
                <div className="bg-purple-50 px-3 py-2 rounded-md text-sm text-purple-800 mb-4 w-full text-center">
                        Delivery Time: {bundle.deliveryTime}
                </div>
                <Link to="/contact" className="w-full">
                  <Button className="w-full bg-purple-900 hover:bg-purple-800">
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
              ))}
        </motion.div>

        {/* Enterprise Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <Card className="border-2 border-purple-500 bg-gradient-to-r from-purple-100 to-white">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    Enterprise Bundle
                  </h3>
                  <p className="text-gray-700 max-w-xl">
                    This bundle is ideal for large or fast-scaling organizations
                    that need a comprehensive digital ecosystem with advanced
                    integrations, data-driven marketing, streamlined operations,
                    and premium support.
                  </p>
                </div>
                <Link to="/contact">
                  <Button className="bg-purple-900 hover:bg-purple-800 px-8 py-6">
                    <span className="mr-2">Contact Sales</span>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Custom Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">
            Detailed Service Pricing
          </h2>

          <Tabs defaultValue="web">
            <TabsList className="w-full mb-6 grid grid-cols-2 md:grid-cols-4 bg-purple-50">
                  {serviceCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.title}
                    </TabsTrigger>
                  ))}
            </TabsList>

                {serviceCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
              <Table>
                <TableHeader>
                  <TableRow className="bg-purple-50">
                    <TableHead className="w-1/3">Service</TableHead>
                    <TableHead className="w-1/2">Details</TableHead>
                    <TableHead className="w-1/6 text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                        {category.services.map((service, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{service.name}</TableCell>
                            <TableCell>{service.details}</TableCell>
                            <TableCell className="text-right">{service.price}</TableCell>
                  </TableRow>
                        ))}
                </TableBody>
              </Table>
            </TabsContent>
                ))}
          </Tabs>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
                ))}
          </Accordion>
        </motion.div>
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

export default PricingPage;
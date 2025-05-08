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
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
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

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  // Calculate annual price with 20% discount
  const calculateAnnualPrice = (monthlyPrice) => {
    const annualPrice = monthlyPrice * 12 * 0.8;
    return annualPrice.toFixed(0);
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Pricing Structure
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We are revolutionizing how engineering and technical MSMEs do
            business, through professional and continuous digital dominance.
            Grab your gate!
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
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
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Fresher Bundle */}
          <Card className="border-2 border-purple-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-purple-50 rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="text-purple-900">
                  Fresher Bundle
                </CardTitle>
                <Badge className="bg-purple-200 text-purple-800">
                  Best for Micro
                </Badge>
              </div>
              <CardDescription className="text-gray-600 font-light">
                Ideal for micro businesses needing a well-managed website
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-baseline mb-5">
                <span className="text-3xl font-bold text-purple-900">
                  $
                  {billingCycle === "monthly" ? "50" : calculateAnnualPrice(50)}
                </span>
                <span className="text-gray-500 ml-1">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
                {billingCycle === "monthly" && (
                  <span className="text-sm text-gray-400 ml-2 line-through">
                    $80
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    6 pages responsive website
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Hosting on shared server
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Domain name purchase
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    1 SSL certificate
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Full written content
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-0">
              <div className="bg-purple-50 px-3 py-2 rounded-md text-sm text-purple-800 mb-4 w-full text-center">
                Delivery Time: 1 Week
              </div>
              <Button className="w-full bg-purple-900 hover:bg-purple-800">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Starter Bundle */}
          <Card className="border-2 border-purple-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-purple-50 rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="text-purple-900">
                  Starter Bundle
                </CardTitle>
                <Badge className="bg-purple-200 text-purple-800">Popular</Badge>
              </div>
              <CardDescription className="text-gray-600 font-light">
                Ideal for small businesses or serious startups
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-baseline mb-5">
                <span className="text-3xl font-bold text-purple-900">
                  $
                  {billingCycle === "monthly" ? "80" : calculateAnnualPrice(80)}
                </span>
                <span className="text-gray-500 ml-1">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
                {billingCycle === "monthly" && (
                  <span className="text-sm text-gray-400 ml-2 line-through">
                    $140
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Everything in the Fresher bundle
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Additional 4 pages
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    5 business emails
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Team LinkedIn profile optimization
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    SEO optimizations
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Google My Business setup
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-0">
              <div className="bg-purple-50 px-3 py-2 rounded-md text-sm text-purple-800 mb-4 w-full text-center">
                Delivery Time: 2 Weeks
              </div>
              <Button className="w-full bg-purple-900 hover:bg-purple-800">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Growth Bundle */}
          <Card className="border-2 border-purple-300 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-purple-50 rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="text-purple-900">Growth Bundle</CardTitle>
                <Badge className="bg-purple-200 text-purple-800">
                  Best Value
                </Badge>
              </div>
              <CardDescription className="text-gray-600 font-light">
                Ideal for expanding businesses aiming to boost visibility
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-baseline mb-5">
                <span className="text-3xl font-bold text-purple-900">
                  $
                  {billingCycle === "monthly"
                    ? "140"
                    : calculateAnnualPrice(140)}
                </span>
                <span className="text-gray-500 ml-1">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
                {billingCycle === "monthly" && (
                  <span className="text-sm text-gray-400 ml-2 line-through">
                    $210
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Everything in the Starter bundle
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Additional 2 pages
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    2 Social Media platforms management
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Blogging (2 posts/month)
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    3 Additional business emails
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-0">
              <div className="bg-purple-50 px-3 py-2 rounded-md text-sm text-purple-800 mb-4 w-full text-center">
                Delivery Time: 2 Weeks
              </div>
              <Button className="w-full bg-purple-900 hover:bg-purple-800">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Established Bundle */}
          <Card className="border-2 border-purple-400 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-purple-50 rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="text-purple-900">
                  Established Bundle
                </CardTitle>
                <Badge className="bg-purple-200 text-purple-800">
                  Advanced
                </Badge>
              </div>
              <CardDescription className="text-gray-600 font-light">
                Ideal for well-rooted businesses seeking to strengthen brand
                authority
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-baseline mb-5">
                <span className="text-3xl font-bold text-purple-900">
                  $
                  {billingCycle === "monthly"
                    ? "220"
                    : calculateAnnualPrice(220)}
                </span>
                <span className="text-gray-500 ml-1">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
                {billingCycle === "monthly" && (
                  <span className="text-sm text-gray-400 ml-2 line-through">
                    $317
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Everything in the Growth bundle
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Additional 2 pages
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    2 Additional business emails
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    2 Additional Social Media platforms
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Dedicated server hosting
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-light text-gray-600">
                    Subdomain with SSL certificate
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-0">
              <div className="bg-purple-50 px-3 py-2 rounded-md text-sm text-purple-800 mb-4 w-full text-center">
                Delivery Time: 2 Weeks
              </div>
              <Button className="w-full bg-purple-900 hover:bg-purple-800">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Enterprise Section */}
        <div className="mb-16">
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
                <Button className="bg-purple-900 hover:bg-purple-800 px-8 py-6">
                  <span className="mr-2">Contact Sales</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Custom Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">
            Detailed Service Pricing
          </h2>

          <Tabs defaultValue="web">
            <TabsList className="w-full mb-6 grid grid-cols-2 md:grid-cols-4 bg-purple-50">
              <TabsTrigger value="web">Web Services</TabsTrigger>
              <TabsTrigger value="design">Graphics Design</TabsTrigger>
              <TabsTrigger value="media">Social & Media</TabsTrigger>
              <TabsTrigger value="other">Other Services</TabsTrigger>
            </TabsList>

            <TabsContent value="web">
              <Table>
                <TableHeader>
                  <TableRow className="bg-purple-50">
                    <TableHead className="w-1/3">Service</TableHead>
                    <TableHead className="w-1/2">Details</TableHead>
                    <TableHead className="w-1/6 text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Main Web Cost</TableCell>
                    <TableCell>
                      Included pages: 6-8 pages (Home, About Us, Services,
                      Projects, Contact Us, Testimonials) that can be customized
                    </TableCell>
                    <TableCell className="text-right">$70/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Additional Web Pages
                    </TableCell>
                    <TableCell>
                      The number of pages given above have been few and you need
                      additional pages. The price count per page building.
                    </TableCell>
                    <TableCell className="text-right">$7/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Domain and Hosting
                    </TableCell>
                    <TableCell>
                      Hosting on shared server and domain name purchase
                    </TableCell>
                    <TableCell className="text-right">$10/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Dedicated Hosting
                    </TableCell>
                    <TableCell>
                      High-performance hosting for larger/high speed/complex
                      websites
                    </TableCell>
                    <TableCell className="text-right">$50/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      SEO Optimization
                    </TableCell>
                    <TableCell>
                      Building your discoverability with SEO best practices
                    </TableCell>
                    <TableCell className="text-right">$40/page</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="design">
              <Table>
                <TableHeader>
                  <TableRow className="bg-purple-50">
                    <TableHead className="w-1/3">Service</TableHead>
                    <TableHead className="w-1/2">Details</TableHead>
                    <TableHead className="w-1/6 text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Company Profile
                    </TableCell>
                    <TableCell>
                      Designing graphics and content development for your
                      company profile
                    </TableCell>
                    <TableCell className="text-right">$20/page</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Social Media Graphics
                    </TableCell>
                    <TableCell>
                      Designing photo graphics for social media posting
                    </TableCell>
                    <TableCell className="text-right">$40/each</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Marketing Banners
                    </TableCell>
                    <TableCell>
                      Designing banners for marketing or events
                    </TableCell>
                    <TableCell className="text-right">$100/each</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Brochures</TableCell>
                    <TableCell>
                      Designing brochures for marketing or events
                    </TableCell>
                    <TableCell className="text-right">$50/each</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Business Cards
                    </TableCell>
                    <TableCell>
                      Designing graphically appealing and communicating business
                      cards
                    </TableCell>
                    <TableCell className="text-right">$10/each</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Logo Design</TableCell>
                    <TableCell>
                      Company logo design or revision (short form, long form,
                      emblem)
                    </TableCell>
                    <TableCell className="text-right">$50</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="media">
              <Table>
                <TableHeader>
                  <TableRow className="bg-purple-50">
                    <TableHead className="w-1/3">Service</TableHead>
                    <TableHead className="w-1/2">Details</TableHead>
                    <TableHead className="w-1/6 text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Social Platforms
                    </TableCell>
                    <TableCell>
                      Setup + continuous management (includes 1 designed
                      post/week, 1 video edited/month – 10 min maximum length)
                    </TableCell>
                    <TableCell className="text-right">
                      $30/month/platform
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Blog Creation</TableCell>
                    <TableCell>
                      Up to 2 SEO-optimized blog posts per month
                    </TableCell>
                    <TableCell className="text-right">$80/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Logo Animation
                    </TableCell>
                    <TableCell>Company logo professional animation</TableCell>
                    <TableCell className="text-right">$70</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Business Video Intro
                    </TableCell>
                    <TableCell>
                      Your business video presentation - intro and outro
                    </TableCell>
                    <TableCell className="text-right">$100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Short Form Videos
                    </TableCell>
                    <TableCell>
                      Editing short form videos for promotional or business
                      purposes (less than 2 minutes video after edit)
                    </TableCell>
                    <TableCell className="text-right">$50/10 sec</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Long Form Videos
                    </TableCell>
                    <TableCell>
                      Editing long form videos for promotional or business
                      purposes (over 2 minutes video after edit)
                    </TableCell>
                    <TableCell className="text-right">$50/min</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="other">
              <Table>
                <TableHeader>
                  <TableRow className="bg-purple-50">
                    <TableHead className="w-1/3">Service</TableHead>
                    <TableHead className="w-1/2">Details</TableHead>
                    <TableHead className="w-1/6 text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Business Emails
                    </TableCell>
                    <TableCell>
                      Setting up business email accounts linked with your
                      company domain for professional business communications
                    </TableCell>
                    <TableCell className="text-right">$5/month/each</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Payment Gateway
                    </TableCell>
                    <TableCell>
                      Add payment feature into your website backed by customized
                      invoicing and quotation systems
                    </TableCell>
                    <TableCell className="text-right">
                      $40/month + $300 setup
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>

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
                Yes. You can cancel or modify your plan with 30 days' notice. We
                aim to stay aligned with your evolving needs.
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
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to transform your digital presence?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Get started today and revolutionize how your engineering or
            technical business operates in the digital space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-purple-900 hover:bg-gray-100">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

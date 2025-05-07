import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  // Function to calculate annual price with 20% discount
  const getAnnualPrice = (monthlyPrice) => {
    const annualPrice = monthlyPrice * 12 * 0.8; // 20% discount
    return annualPrice.toFixed(0);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Pricing Header */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your business needs. All plans include
          dedicated support and can be customized to your specific requirements.
        </p>

        {/* Billing Cycle Toggle */}
        <div className="mt-8">
          <Tabs
            defaultValue="monthly"
            value={billingCycle}
            onValueChange={setBillingCycle}
            className="w-full max-w-md mx-auto"
          >
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual (20% off)</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Starter Bundle */}
        <Card className="border-t-4 border-t-blue-500">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">Starter Bundle</CardTitle>
                <CardDescription className="mt-2">
                  Ideal for small businesses or startups
                </CardDescription>
              </div>
              <Badge variant="outline" className="bg-blue-50">
                Popular
              </Badge>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold">
                ${billingCycle === "monthly" ? "80" : getAnnualPrice(80)}
              </span>
              <span className="text-gray-500">
                /{billingCycle === "monthly" ? "month" : "year"}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <PricingFeature text="Website development (6–8 pages)" />
              <PricingFeature text="Website domain name and hosting" />
              <PricingFeature text="Up to 5 business email addresses" />
              <PricingFeature text="Basic SEO and mobile responsiveness" />
              <PricingFeature text="1 SSL Certificate" />
              <PricingFeature text="Limited customization (Change or add up to 2 pages)" />
            </ul>
          </CardContent>
          <CardFooter>
            <Link to="/contact" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Growth Bundle */}
        <Card className="border-t-4 border-t-green-500 shadow-lg relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Badge className="bg-green-600 hover:bg-green-700 text-white">
              BEST VALUE
            </Badge>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">Growth Bundle</CardTitle>
                <CardDescription className="mt-2">
                  Best for growing businesses
                </CardDescription>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold">
                ${billingCycle === "monthly" ? "145" : getAnnualPrice(145)}
              </span>
              <span className="text-gray-500">
                /{billingCycle === "monthly" ? "month" : "year"}
              </span>
              <p className="text-sm text-gray-500 mt-1">
                Save $65/month with bundle
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium mb-4">
              Everything in Starter, plus:
            </p>
            <ul className="space-y-3">
              <PricingFeature text="Setting up and managing 2 Social Media platforms" />
              <PricingFeature text="Blog Creation and Management (2 posts/month)" />
              <PricingFeature text="Additional 5 business email addresses" />
              <PricingFeature text="1 Additional Page" />
              <PricingFeature text="All Starter Bundle features" highlighted />
            </ul>
          </CardContent>
          <CardFooter>
            <Link to="/contact" className="w-full">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Professional Bundle */}
        <Card className="border-t-4 border-t-purple-500">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">Professional Bundle</CardTitle>
                <CardDescription className="mt-2">
                  For established businesses with portfolio needs
                </CardDescription>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold">
                ${billingCycle === "monthly" ? "220" : getAnnualPrice(220)}
              </span>
              <span className="text-gray-500">
                /{billingCycle === "monthly" ? "month" : "year"}
              </span>
              <p className="text-sm text-gray-500 mt-1">
                Save $107/month with bundle
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium mb-4">
              Everything in Growth, plus:
            </p>
            <ul className="space-y-3">
              <PricingFeature text="Hosting on a dedicated server" />
              <PricingFeature text="1 more social media platform of your choice" />
              <PricingFeature text="2 SSL Certificates" />
              <PricingFeature text="Additional custom webpage" />
              <PricingFeature text="Additional 5 business email addresses" />
              <PricingFeature text="All Growth Bundle features" highlighted />
            </ul>
          </CardContent>
          <CardFooter>
            <Link to="/contact" className="w-full">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Enterprise Bundle */}
      <section className="bg-gray-50 rounded-lg p-8 mb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Enterprise Bundle</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Custom solutions for businesses engaged in international operations,
            sophisticated portfolio, and multi-channel operations. Contact us
            for custom pricing.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Sales
            </Button>
          </Link>
        </div>
      </section>

      {/* Additional Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Additional Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Additional Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Adding pages beyond the included pages or free replacements.
              </p>
              <p className="font-bold mt-4">$7 per additional page/month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Setup and ongoing management of LinkedIn and Instagram profiles.
              </p>
              <p className="font-bold mt-4">$30 per platform/month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blog Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Creation and posting of blog content (2 posts per month).
              </p>
              <p className="font-bold mt-4">$80/month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dedicated Server</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Hosting on a dedicated server for improved performance.
              </p>
              <p className="font-bold mt-4">$50/month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Gateway</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Adding a secure payment gateway to your website.
              </p>
              <p className="font-bold mt-4">$35/month + $300 setup</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Emails</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Setup of professional business email addresses.
              </p>
              <p className="font-bold mt-4">$5/month per email</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call To Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We're here to help you choose the right plan for your business.
          Contact us for a free consultation.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Consultation
            </Button>
          </Link>
          <Link to="/faq">
            <Button size="lg" variant="outline">
              View FAQ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
// Helper component for pricing features
const PricingFeature = ({ text, highlighted = false }) => {
  return (
    <li className="flex items-start">
      <CheckCircle
        className={`h-5 w-5 ${
          highlighted ? "text-green-500" : "text-blue-500"
        } mr-2 mt-0.5`}
      />
      <span className={highlighted ? "font-medium" : ""}>{text}</span>
    </li>
  );
};

export default PricingPage;

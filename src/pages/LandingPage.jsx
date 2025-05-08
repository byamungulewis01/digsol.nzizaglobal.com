import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Monitor, Share2, FileText } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transform Your Engineering Business with a Powerful Digital Presence
            </h1>
            <p className="text-lg text-gray-600">
              Focus on your engineering and business tasks, we will handle your digital presence to help you convince 
              your next clients more easily and win even more jobs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/2150041864.jpg"
              alt="Digital Services for Construction & Infrastructure"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gap in the Industry */}
      <section className="mb-20 bg-gray-50 p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Closing the Digital Gap in Infrastructure</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Many infrastructure and construction companies are securing contracts with little to no digital presence.
            Imagine how much more they could achieve with a strong online identity.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Digital Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We create, promote, manage, and maintain your digital platforms so you can focus on your main business
            activities for more success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <Monitor className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>Web Development</CardTitle>
              <CardDescription>
                Modern websites built with the latest technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Custom websites that showcase your expertise, portfolio, and services with high-performance technology.</p>
            </CardContent>
            <CardFooter>
              <Link to="/services#web-development">
                <Button variant="outline" size="sm">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
              <p>Professional handling of your social media accounts to maintain engagement and build relationships.</p>
            </CardContent>
            <CardFooter>
              <Link to="/services#social-media">
                <Button variant="outline" size="sm">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
              <p>Technical blogs, videos, infographics, and case studies that build trust with potential clients.</p>
            </CardContent>
            <CardFooter>
              <Link to="/services#content-creation">
                <Button variant="outline" size="sm">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the infrastructure and construction companies already thriving with our digital expertise.
        </p>
        <Link to="/contact">
          <Button size="lg" variant="secondary">
            Schedule Your Free Consultation
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
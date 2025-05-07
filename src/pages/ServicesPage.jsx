import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Monitor, Share2, FileText, Code, BarChart, Layout } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 py-12">
      {/* Services Header */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Digital Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We don't just deliver these services to you; we handle everything your company needs while you focus on your projects.
          You pay a small portion of your income as a monthly/yearly subscription.
        </p>
      </section>

      {/* Web Development Section */}
      <section id="web-development" className="mb-20 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
              <Monitor className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Web Development</h2>
            <p className="text-lg text-gray-600 mb-6">
              Modern, high-performance websites built using the world's latest technologies like ReactJS and NextJS to reflect 
              professionalism and drive engagement.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <Code className="h-4 w-4 text-blue-600" />
                </span>
                <span>Custom Website Design: Responsive, user-friendly websites</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <Layout className="h-4 w-4 text-blue-600" />
                </span>
                <span>Portfolio Showcases: Interactive galleries and case studies</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <BarChart className="h-4 w-4 text-blue-600" />
                </span>
                <span>SEO Optimization: High search engine rankings</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Request a Quote
              </Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/web-develop.jpg"
              alt="Web Development Services"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Social Media Management */}
      <section id="social-media" className="mb-20 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/social-media.jpg"
              alt="Social Media Management Services"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block p-3 bg-green-100 rounded-lg mb-4">
              <Share2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Social Media Management</h2>
            <p className="text-lg text-gray-600 mb-6">
              Creation, promotion, and ongoing management of social media platforms to ensure continuous visibility and interaction.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Code className="h-4 w-4 text-green-600" />
                </span>
                <span>Platform Management: LinkedIn, Facebook, Twitter (X), and Instagram</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Layout className="h-4 w-4 text-green-600" />
                </span>
                <span>Content Scheduling: Regular updates to maintain engagement</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <BarChart className="h-4 w-4 text-green-600" />
                </span>
                <span>Analytics and Ad Campaigns: Track performance and run targeted ads</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="bg-green-600 hover:bg-green-700">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Creation */}
      <section id="content-creation" className="mb-20 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block p-3 bg-purple-100 rounded-lg mb-4">
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Content Creation</h2>
            <p className="text-lg text-gray-600 mb-6">
              Compelling, memorable content that resonates with decision-makers and builds trust with your future clients.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                  <Code className="h-4 w-4 text-purple-600" />
                </span>
                <span>Technical Blogs & Articles: Industry trends and project insights</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                  <Layout className="h-4 w-4 text-purple-600" />
                </span>
                <span>Video Production: Project walkthroughs and promotional content</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                  <BarChart className="h-4 w-4 text-purple-600" />
                </span>
                <span>Case Studies & Infographics: Showcase expertise and simplify complex concepts</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Request a Quote
              </Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/content-creation2.jpg"
              alt="Content Creation Services"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gray-50 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We create, promote, manage, and maintain your digital platforms so you can focus on your main business activities for more success.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/pricing">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              See Our Pricing
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const PortfolioPage = () => {
  // Sample portfolio items - in a real implementation, these would come from a database/API
  const portfolioItems = [
    {
      id: 1,
      title: "Modern Construction Website",
      client: "ABC Engineering",
      category: "web-development",
      description: "A responsive, modern website showcasing the company's projects and services.",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 2,
      title: "LinkedIn Growth Campaign",
      client: "XYZ Construction",
      category: "social-media",
      description: "Strategic LinkedIn management that increased followers by 150% in three months.",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 3,
      title: "Technical Blog Series",
      client: "Infrastructure Solutions",
      category: "content-creation",
      description: "A series of in-depth articles about modern construction methods.",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio Showcase Website",
      client: "Global Engineers Ltd",
      category: "web-development",
      description: "Interactive portfolio website highlighting major infrastructure projects.",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 5,
      title: "Instagram Visual Campaign",
      client: "Modern Builders",
      category: "social-media",
      description: "Visual storytelling campaign showcasing project progress and completion.",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: 6,
      title: "Case Study Videos",
      client: "Urban Development Corp",
      category: "content-creation",
      description: "Series of case study videos demonstrating successful project implementations.",
      image: "/api/placeholder/600/400",
      link: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Portfolio Header */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our successful digital transformation projects for construction and infrastructure companies.
        </p>
      </section>

      {/* Portfolio Filter Tabs */}
      <Tabs defaultValue="all" className="mb-12">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web-development">Web Development</TabsTrigger>
            <TabsTrigger value="social-media">Social Media</TabsTrigger>
            <TabsTrigger value="content-creation">Content Creation</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map(item => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="web-development">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems
              .filter(item => item.category === 'web-development')
              .map(item => (
                <PortfolioCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="social-media">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems
              .filter(item => item.category === 'social-media')
              .map(item => (
                <PortfolioCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="content-creation">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems
              .filter(item => item.category === 'content-creation')
              .map(item => (
                <PortfolioCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Featured Case Study */}
      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Case Study</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/api/placeholder/600/400"
              alt="Featured Project"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Infrastructure Solutions Digital Transformation</h3>
            <p className="text-gray-600 mb-4">
              Infrastructure Solutions needed a complete digital overhaul to compete for international projects. Our team:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>Developed a modern, portfolio-focused website</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>Created a LinkedIn strategy targeting decision-makers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>Produced case study videos showcasing previous projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>Result: 40% increase in bid requests within 3 months</span>
              </li>
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Read Full Case Study
            </Button>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's create a digital presence that helps you win more projects and grow your business.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Your Digital Transformation
          </Button>
        </Link>
      </section>
    </div>
  );
};

// Portfolio Card Component
const PortfolioCard = ({ item }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.client}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{item.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" asChild>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioPage;
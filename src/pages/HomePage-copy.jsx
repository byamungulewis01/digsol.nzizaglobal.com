import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  Monitor,
  ArrowRight,
  FileText,
  Share2,
} from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Services Overview */}
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
                <p>
                  Professional handling of your social media accounts to
                  maintain engagement and build relationships.
                </p>
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
                <p>
                  Technical blogs, videos, infographics, and case studies that
                  build trust with potential clients.
                </p>
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
        </div>
      </section>
      {/* Testimonials */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 mt-4">
              We've helped engineering firms across Rwanda and Tanzania
              transform their digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">
                    AB
                  </span>
                  <div>
                    <CardTitle className="text-lg">Alex Brown</CardTitle>
                    <CardDescription>
                      Structural Engineering Firm
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Nziza Global transformed our online presence. Our project
                  inquiries have increased by 40% since launching our new
                  website."
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">
                    MN
                  </span>
                  <div>
                    <CardTitle className="text-lg">Maria Nyaga</CardTitle>
                    <CardDescription>
                      Civil Engineering Consultancy
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Their content strategy helped us establish thought leadership
                  in our industry. We're now seen as the go-to experts."
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">
                    JK
                  </span>
                  <div>
                    <CardTitle className="text-lg">James Kamau</CardTitle>
                    <CardDescription>
                      Mechanical Engineering Services
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "The social media management has been fantastic. We've
                  connected with new clients we wouldn't have reached
                  otherwise."
                </p>
              </CardContent>
            </Card>
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

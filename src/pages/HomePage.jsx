import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Code,
  Monitor,
  PenTool,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("webdev");

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Value Proposition */}
      <ValueProposition />
      {/* Service Showcase */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="max-w-[85rem] px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Digital Services
            </h2>
            <p className="text-gray-500 mt-4">
              We don't just deliver services; we partner with you. Keep your
              focus on your projects, and we'll handle everything your company
              needs digitally.
            </p>
          </div>

          <Tabs
            defaultValue="webdev"
            className="w-full max-w-3xl mx-auto"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="webdev">Web Development</TabsTrigger>
              <TabsTrigger value="socialmedia">Social Media</TabsTrigger>
              <TabsTrigger value="content">Content Creation</TabsTrigger>
            </TabsList>
            <TabsContent value="webdev" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Custom Engineering Websites
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Portfolio showcases for your projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>SEO optimization for local clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Mobile-responsive designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ongoing maintenance and updates</span>
                    </li>
                  </ul>
                  <Button className="mt-6 gap-2">
                    Request a Quote <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/web-develop.jpg"
                      alt="Web development example"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="socialmedia" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Strategic Social Media
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Platform management and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Content scheduling and posting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Engagement strategies and community building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Performance analytics and reporting</span>
                    </li>
                  </ul>
                  <Button className="mt-6 gap-2">
                    Request a Quote <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/social-media.jpg"
                      alt="Social media management example"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="content" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Technical Content Creation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Technical blog posts and articles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Project case studies and success stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Infographics and visual content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Video production and editing</span>
                    </li>
                  </ul>
                  <Button className="mt-6 gap-2">
                    Request a Quote <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/content-creation1.jpg"
                      alt="Content creation example"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[85rem] px-4 md:px-6 mx-auto">
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
        <div className="max-w-[85rem] px-4 md:px-6 mx-auto">
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
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

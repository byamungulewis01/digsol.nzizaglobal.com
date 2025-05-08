import { Monitor, Users, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";

function ValueProposition() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Bridging the Digital Gap in Engineering
          </h2>
          <p className="text-gray-500 mt-4">
            We create, promote, manage, and maintain your digital platforms so
            you can focus on your main business activities for more success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Monitor className="h-12 w-12 text-primary mb-4" />}
            title="Web Development"
            description="Custom websites optimized for engineering portfolios"
          >
            Showcase your projects with modern, responsive websites that convert
            visitors into clients.
          </ServiceCard>

          <ServiceCard
            icon={<Users className="h-12 w-12 text-primary mb-4" />}
            title="Social Media Management"
            description="Strategic presence on the platforms that matter"
          >
            Grow your audience and showcase your expertise with targeted social
            media campaigns.
          </ServiceCard>

          <ServiceCard
            icon={<PenTool className="h-12 w-12 text-primary mb-4" />}
            title="Content Creation"
            description="Engaging technical content that demonstrates expertise"
          >
            Share your knowledge through professional blogs, videos, and case
            studies.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, children }) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        {icon}
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <p>{children}</p>
      </div>
      <div className="px-6 pb-6">
        <Button variant="outline" className="w-full gap-2">
          Learn More <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}

export default ValueProposition;

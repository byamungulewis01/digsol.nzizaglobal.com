import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-fuchsia-100 to-fuchsia-200/70">
      <div className="max-w-[85rem] px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Transform Your Engineering Business with a Powerful Digital Presence
            </h1>
            <p className="text-gray-500 md:text-xl font-normal">
              Focus on your engineering and business tasks, we'll handle your digital presence to help you
              convince your next clients more easily and win even more jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button size="lg" className="gap-2">
                Get a Free Consultation <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
          <div className="relative h-full">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/83416.jpg" 
                alt="Digital solutions for engineering firms" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

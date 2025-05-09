import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MetaTags } from "@/lib/seo/MetaTags";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <MetaTags
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        keywords="404, page not found, error"
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl w-full text-center"
        >
          {/* 404 Number */}
          <motion.div
            variants={fadeInUp}
            className="relative mb-8"
          >
            <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              404
            </h1>
            <div className="absolute inset-0 bg-primary/5 -skew-y-6 rounded-lg"></div>
          </motion.div>

          {/* Error Message */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground text-lg">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
            <Button
              onClick={() => navigate("/")}
              className="group"
            >
              <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Back to Home
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 text-muted-foreground/50"
          >
            <p className="text-sm">
              If you believe this is a mistake, please{" "}
              <a
                href="/contact"
                className="text-primary hover:underline"
              >
                contact us
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage; 
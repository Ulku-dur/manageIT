"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function CallToAction({
  title = "Ready to Transform Your Business?",
  description = "Join thousands of satisfied customers who have already elevated their workflow with our solution. Get started in minutes.",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "See How It Works",
  onPrimaryClick,
  onSecondaryClick,
}: CTAProps) {
  return (
    <div className="my-16">
      <Card className="w-full max-w-6xl mx-auto max-sm:mx-1    p-10 bg-primary/5  border-none  shadow-none">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-gray-600 mb-6">{description}</p>
          <div className="flex justify-center gap-4 pt-4">
            <Button
              variant="outline"
              onClick={onSecondaryClick}
              className="px-6 py-3 h-11"
            >
              {secondaryButtonText}
            </Button>
            <Button onClick={onPrimaryClick} className="px-6 py-3 h-11">
              {primaryButtonText}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

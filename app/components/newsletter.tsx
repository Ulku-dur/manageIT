import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";

interface NewsletterStat {
  count: string;
  title: string;
  description: string;
}

interface NewsletterSubscriptionProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  placeholderText?: string;
  stats?: NewsletterStat[];
  onSubmit?: (email: string) => void; // New prop for custom submit handler
}

export default function Newsletter1({
  heading = "Get Latest Updates",
  subheading = "Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Vulputat tempor to the condimentum vitae purus.",
  buttonText = "Subscribe Now",
  placeholderText = "Email address",
  onSubmit,
  stats = [
    {
      count: "47k+",
      title: "Designer, Developers & Marketers",
      description:
        "Get the latest content on your inbox of every week. We don't need to spam.",
    },
    {
      count: "12",
      title: "Hand-made reports every week",
      description:
        "Get the latest content on your inbox of every week. We don't need to spam.",
    },
  ],
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(email);
    } else {
      // Default behavior if no handler is provided
      console.log("Subscribing email:", email);
    }
    // Reset email field
    setEmail("");
  };

  return (
    <div className={`w-full py-12 px-14 mt-6  `}>
      <div className="max-w-6xl mx-auto">
        <Badge variant={"secondary"}>Newsletter</Badge>

        <div className="flex flex-col md:flex-row gap-14 mt-6">
          {/* Left column with subscription form */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-3">{heading}</h2>
            <p className="text-gray-600 mb-6">{subheading}</p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder={placeholderText}
                className="px-4 py-3 border h-12 border-gray-300 rounded-md flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className={`px-4 py-3 h-12  rounded-md whitespace-nowrap font-medium`}
              >
                {buttonText}
              </Button>
            </form>
            <p className="text-[13px] text-gray-500 mt-3">
              Get the latest content in your inbox every week. We don`t spam.
            </p>
          </div>

          {/* Right column with stats */}
          <div className="md:w-1/2 flex flex-col sm:flex-row gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`flex-1 p-6 $  rounded-lg shadow-none`}
              >
                <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
                <h4 className="font-medium mb-2">{stat.title}</h4>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  items?: FAQItem[];
  contactText?: string;
  supportTeamLink?: string;
}

const defaultItems: FAQItem[] = [
  {
    question: "What's your satisfaction guarantee policy?",
    answer:
      "We stand behind our products with a 30-day satisfaction guarantee. If you're not completely happy, we'll refund your purchase - no questions asked.",
  },
  {
    question: "How can I monitor my order status in real-time?",
    answer:
      "Track your package directly from your account dashboard or use our mobile app with the tracking number from your shipping confirmation.",
  },
  {
    question: "Which countries do you ship to worldwide?",
    answer:
      "We deliver to over 100 countries globally with calculated shipping rates. Some restrictions may apply based on local regulations.",
  },
  {
    question: "Is order modification possible after confirmation?",
    answer:
      "You have a 60-minute grace period to request changes. After that, please contact our support team who will do their best to accommodate your request.",
  },
  {
    question: "What secure payment options are available?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, and all major digital wallets including Apple Pay and Google Pay for secure checkout.",
  },
  {
    question: "What's the best way to reach customer service?",
    answer:
      "Our award-winning support team is available 24/7 through live chat, email (support@example.com), or phone (+1-800-123-4567) for immediate assistance.",
  },
];

export default function Faq1({
  title = "Common Questions Answered",
  description = "Get instant answers to your most frequent queries about our services and policies. Still have questions?",
  items = defaultItems,
  contactText = "Need further assistance?",
  supportTeamLink = "/contact-support",
}: FAQProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <Badge variant={"secondary"}>Questions</Badge>

        <h2 className="text-4xl font-bold mb-4 mt-5">{title}</h2>

        <p className="text-gray-600 max-w-lg mx-auto">
          {description}{" "}
          <a href={supportTeamLink} className="hover:underline">
            {contactText}
          </a>
          .
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full mt-9">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-200 pb-2 mb-2"
          >
            <AccordionTrigger className="flex justify-between py-4 text-left font-medium hover:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-1 ">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

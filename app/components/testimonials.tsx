

"use client"

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export type Testimonial = {
  id: number;
  rating?: number;
  content: string;
  author?: string;
  position: string;
  company: string;
};

function TestimonialCard({
  rating,
  content,
  author,
  position,
  company,
}: Omit<Testimonial, "id">) {
  return (
    <Card className="  p-6 rounded-lg shadow-sm border bo  max-w-2xl">
      {rating && (
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      )}

      <p className="  mb-6 leading-relaxed">{content}</p>

      {author && (
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">
            {position} at {company}
          </p>
        </div>
      )}
    </Card>
  );
}

const testimonials = [
  {
    id: 1,
    rating: 6,
    content:
      "From managing permissions to time-off requests, everything is efficiently managed in one place. This tool has undeniably enhanced my team's productivity, fostering a collaborative environment around the world.",
    author: "Eleanor Pena",
    position: "Executive assistant",
    company: "Zendek",
  },
  {
    id: 2,
    rating: 6,
    content:
      "Our team has grown by 30% thanks to faster and easier recruitment process with Humane. We are able to send out the application link and have applicants instantly around the world.",
    author: "Bessie Cooper",
    position: "Growth marketing",
    company: "Stripe",
  },
  {
    id: 3,
    rating: 5,
    content:
      "The customer support is exceptional. Whenever we've had questions, the team responded quickly with helpful solutions. It's rare to find such dedication these days.",
    author: "Robert Fox",
    position: "CTO",
    company: "TechCorp",
  },
  {
    id: 4,
    rating: 6,
    content:
      "Implementation was seamless and the onboarding process was well-structured. We saw ROI within the first quarter of using this product. Highly recommended!",
    author: "Jane Smith",
    position: "Product Manager",
    company: "Innovate Inc.",
  },
];

export default function Testimonials1({
  testimonialArray = testimonials,
  testimonialHeader = "Hear what others are saying",
  testimonialParagraph = "Discover the success stories and positive feedback from satisfied customers with our testimonials section",
}: {
  testimonialArray?: Array<Testimonial>;
  testimonialHeader?: string;
  testimonialParagraph?: string;
}) {
  const {} = testimonialArray;
  return (
    <section className="px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant={"secondary"} className="mb-9">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {testimonialHeader}
          </h2>
          <p className="mt-4 text-xl text-gray-600">{testimonialParagraph}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonialArray.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              rating={testimonial.rating}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

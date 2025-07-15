
"use client";

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tag: string;
}

interface BlogPostSectionProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const BlogPostSection1 = ({
  tagline = "Latest Updates",
  heading = "Insights & Articles",
  description = "Explore cutting-edge trends, practical tips, and industry best practices in web development. Our expert team shares knowledge on UI components, design systems, and modern development workflows.",
  buttonText = "Browse all articles",
  buttonUrl = "https://www.boltstack.dev/blog",
  posts = [
    {
      id: "post-1",
      title: "Mastering shadcn/ui Components in Next.js",
      summary:
        "A comprehensive guide to implementing and customizing shadcn/ui in your Next.js applications. Learn setup, theming techniques, and pro tips for building beautiful, functional interfaces.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "15 Jan 2024",
      url: "https://www.boltstack.dev/articles/shadcn-nextjs",
      image: "/bolt_stack_image.png",
      tag: "Frontend",
    },
    {
      id: "post-2",
      title: "Creating Truly Accessible Digital Experiences",
      summary:
        "Practical strategies for building inclusive web applications using shadcn/ui's accessible foundation. Covers ARIA implementation, keyboard navigation patterns, and semantic structure best practices.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "8 Jan 2024",
      url: "https://www.boltstack.dev/articles/web-accessibility",
      image: "/bolt_stack_image.png",
      tag: "Best Practices",
    },
    {
      id: "post-3",
      title: "Building Scalable Design Systems with Tailwind",
      summary:
        "Architecting maintainable design systems using Tailwind CSS and shadcn/ui components. Learn our approach to creating flexible, consistent UI libraries that scale with your product.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "22 Jan 2024",
      url: "https://www.boltstack.dev/articles/design-systems",
      image: "/bolt_stack_image.png",
      tag: "Architecture",
    },
  ],
}: BlogPostSectionProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={buttonUrl} target="_blank">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 max-sm:px-5 ">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] border-none shadow-none pt-0 px-0"
            >
              <div className="aspect-[16/9] w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full rounded-md w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader className="px-0">
                <div className="flex flex-col items-start px-0">
                  <Badge
                    variant={"default"}
                    className="shadow-none mb-5 p-1 px-5"
                  >
                    {post.tag}
                  </Badge>
                  <h3 className="text-lg font-semibold hover:underline md:text-xl border-none">
                    <a href={post.url} target="_blank">
                      {post.title}
                    </a>
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="px-0 ">
                <p className="text-muted-foreground ">{post.summary}</p>
              </CardContent>
              <CardFooter className="px-0">
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-primary hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostSection1;


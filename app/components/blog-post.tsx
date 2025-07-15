import img1 from "@/public/bolt_stack_image.png";
import img2 from "@/public/another_image.png";
import img3 from "@/public/some_image.png";

const posts = [
  {
    id: "post-1",
    title: "Mastering shadcn/ui Components in Next.js",
    summary:
      "A comprehensive guide to implementing and customizing shadcn/ui in your Next.js applications.",
    label: "Tutorial",
    author: "Sarah Chen",
    published: "15 Jan 2024",
    url: "https://www.boltstack.dev/articles/shadcn-nextjs",
    image: img1, // 👈 değişken olarak kullanıyoruz
    tag: "Frontend",
  },
  {
    id: "post-2",
    title: "Creating Truly Accessible Digital Experiences",
    summary:
      "Practical strategies for building inclusive web applications using shadcn/ui's accessible foundation.",
    label: "Accessibility",
    author: "Marcus Rodriguez",
    published: "8 Jan 2024",
    url: "https://www.boltstack.dev/articles/web-accessibility",
    image: img2,
    tag: "Best Practices",
  },
  {
    id: "post-3",
    title: "Building Scalable Design Systems with Tailwind",
    summary:
      "Architecting maintainable design systems using Tailwind CSS and shadcn/ui components.",
    label: "Design Systems",
    author: "Emma Thompson",
    published: "22 Jan 2024",
    url: "https://www.boltstack.dev/articles/design-systems",
    image: img3,
    tag: "Architecture",
  },
];

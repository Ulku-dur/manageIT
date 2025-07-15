import {
  AppWindow,
  Bolt,
  ChartBar,
  ListChecks,
  User,
  Workflow,
} from "lucide-react";

export const featuresSectionArray = [
  {
    title: "Task Management",
    description:
      "Break projects into actionable tasks with priorities, deadlines, and assignees—all in one place.",
    icon: <ListChecks />,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect with Slack, Google Drive, GitHub, and more to centralize your workflow.",
    icon: <AppWindow />,
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track progress with dashboards and reports to identify bottlenecks and optimize workflows.",
    icon: <ChartBar />,
  },
  {
    title: "Automated Workflows",
    description:
      "Reduce manual work with rule-based automations for approvals, reminders, and status updates.",
    icon: <Workflow />,
  },
];

export const howItWorksArray = [
  {
    number: 1,
    title: "Create Your Project",
    description:
      "Set up your first project in seconds with templates or start from scratch.",
  },
  {
    number: 2,
    title: "Invite Your Team",
    description:
      "Add members, assign roles, and start collaborating immediately.",
  },
  {
    number: 3,
    title: "Track & Deliver",
    description:
      "Monitor progress with real-time updates and hit deadlines faster.",
  },
];

export const posts = [
  {
    id: "post-1",
    title: "5 Agile Practices to 2x Team Velocity",
    summary:
      "Learn how top teams use sprint planning, daily standups, and retrospectives to accelerate delivery without burnout. Includes free templates.",
    label: "Agile",
    author: "Jamie Chen",
    published: "12 May 2024",
    url: "/blog/agile-practices",
    image:
      "https://static.vecteezy.com/ti/photos-gratuite/t1/5408082-gros-plan-les-mains-des-developpeurs-de-logiciels-sont-assis-un-travail-serieux-analysant-des-donnees-sur-l-ecran-d-ordinateur-photo.jpg", // Suggested image
    tag: "Productivity",
  },
  {
    id: "post-2",
    title: "Client Communication for Remote Teams",
    summary:
      "Keep stakeholders aligned with automated status reports, milestone updates, and our client portal integration guide.",
    label: "Collaboration",
    author: "Alex Rivera",
    published: "28 Apr 2024",
    url: "/blog/client-communication",
    image:
      "https://images.pexels.com/photos/5239879/pexels-photo-5239879.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5239879.jpg&fm=jpg",
    tag: "Remote Work",
  },
  {
    id: "post-3",
    title: "Building Scalable Project Workflows",
    summary:
      "From startups to enterprises: how to structure projects, permissions, and automations that grow with your team.",
    label: "Workflows",
    author: "Taylor Wong",
    published: "15 Apr 2024",
    url: "/blog/scalable-workflows",
    image:
      "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?cs=srgb&dl=pexels-judit-peter-281675-1766604.jpg&fm=jpg",
    tag: "Best Practices",
  },
];

export const testimonialsArray = [
  {
    id: 1,
    rating: 5,
    content:
      "We reduced sprint planning time by 40% while improving visibility across teams. The intuitive interface made adoption effortless - even our non-technical stakeholders love it.",
    author: "Sarah Chen",
    position: "Engineering Manager",
    company: "FinTech Solutions",
  },
  {
    id: 2,
    rating: 5,
    content:
      "As a remote agency, we needed better client collaboration tools. Now we share real-time progress dashboards that cut status meeting time in half while increasing trust.",
    author: "Marcus Wong",
    position: "Creative Director",
    company: "PixelForge",
  },
  {
    id: 3,
    rating: 5,
    content:
      "The automation features saved our PM team 15+ hours/week on repetitive tasks. We've since reallocated that time to strategic planning and risk management.",
    author: "Emily Rodriguez",
    position: "Head of PMO",
    company: "HealthTech Innovations",
  },
  {
    id: 4,
    rating: 5,
    content:
      "From complex Gantt charts to simple task lists, it adapts to how we work. Our team actually enjoys using it - which says everything about the UX design.",
    author: "David Kim",
    position: "CTO",
    company: "StartUp Labs",
  },
];

export const plans = [
  {
    title: "Starter",
    description:
      "Ideal for small teams needing basic task management and collaboration.",
    price: 12,
    period: "month",
    icon: Bolt,
    highlight: false,
    onClickButton: () => {},
  },
  {
    title: "Professional",
    description:
      "Advanced workflows, reporting & integrations for scaling teams.",
    price: 24,
    period: "month",
    icon: User,
    highlight: true,
    onClickButton: () => {},
  },
];
export const stats = [
  { value: "10K+", label: "Projects Managed" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "24/7", label: "Priority Support" },
  { value: "100+", label: "Integrations" },
];

export const faqs = [
  {
    question: "How quickly can my team get started?",
    answer:
      "Most teams are fully operational within 30 minutes. We provide onboarding templates and live walkthroughs to accelerate setup.",
  },
  {
    question: "Can I import data from other tools like Asana or Trello?",
    answer:
      "Yes! Our migration wizard supports CSV imports from all major project management tools, with dedicated guides for each platform.",
  },
  {
    question: "What security measures protect our data?",
    answer:
      "We use enterprise-grade encryption (AES-256), SOC 2 compliance, and regular third-party audits. You control data access with granular permissions.",
  },
  {
    question: "How does pricing scale with team growth?",
    answer:
      "Plans are priced per user/month with volume discounts starting at 20+ seats. Enterprise plans offer unlimited projects and custom workflows.",
  },
  {
    question: "What integrations are available?",
    answer:
      "Connect with 100+ tools including Slack, GitHub, Google Workspace, and Zoom. Our API allows custom integrations in minutes.",
  },
  {
    question: "How do you handle customer support?",
    answer:
      "All plans include 24/5 email support. Pro+ tiers get priority chat and phone support with a 2-hour response SLA for critical issues.",
  },
];

export const newsLetterStats = [
  {
    count: "15K+",
    title: "Project Managers",
    description: "Get actionable tips from industry experts every Tuesday.",
  },
  {
    count: "3",
    title: "Free Templates Monthly",
    description: "Receive ready-to-use project templates with each newsletter.",
  },
];

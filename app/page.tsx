"use client";

import BlogPostSection1 from "./components/blog-post";
import { CallToAction } from "./components/cta";
import { faqs, featuresSectionArray, howItWorksArray, newsLetterStats, plans, posts, stats, testimonialsArray } from "./components/data";
import Faq1 from "./components/faq";
import FeatureSection1 from "./components/feature-section";
import HeroSection1 from "./components/hero-section";
import HowItWorks1 from "./components/how-it-works";
import Newsletter1 from "./components/newsletter";
import PricingSection1 from "./components/pricing";
import Testimonials1 from "./components/testimonials";



export default function Home() {
  return (
    <div className="">
      <HeroSection1
        badgeText="🚀 New: AI Task Automation"
        announcementText="Join 5,000+ teams boosting productivity with our tools"
        mainHeading="Streamline Projects, Boost Collaboration"
        subText="Plan, track, and deliver work effortlessly with our all-in-one project management platform. Try it free—no credit card required."
        primaryButtonText="Get Started for Free"
        secondaryButtonText="See How It Works"
      />
      <FeatureSection1
        featureBadge="Built for Teams That Deliver"
        title="Everything You Need to Manage Projects Smarter"
        featuresArray={featuresSectionArray}
        description="From task tracking to team collaboration, our platform empowers you to work efficiently and hit deadlines effortlessly."
      />
      <HowItWorks1 imgUrl="https://www.boltstack.dev/bolt_stack_image.png"
        badgeText="Get Started in Minutes"
        mainHeadline="Simple Setup, Instant Productivity"
        steps={howItWorksArray}
        ctaText="Try Free for 14 Days"/>
        <BlogPostSection1 tagline="Project Management Insights"
        heading="Expert Tips & Best Practices"
        description="Discover proven strategies to streamline workflows, boost team productivity, and deliver projects successfully. Our team shares actionable advice from real-world experience."
        buttonText="View All Resources"
        buttonUrl="/resources"
        posts={posts}/>
        <Testimonials1 testimonialArray={testimonialsArray}
        testimonialHeader="Trusted by Teams That Deliver"
        testimonialParagraph="See how teams of all sizes use our platform to ship projects faster and collaborate better"/>
        <PricingSection1 plans={plans}
        stats={stats}
        badge="Simple, Transparent Pricing"
        title="Plans That Grow With Your Team"
        subtitle="From startups to enterprises - pay only for what you need. Upgrade or downgrade anytime."/>
        <Faq1 title="Project Management FAQs"
        description="Find quick answers to common questions about our platform. "
        contactText=" Contact our team"
        supportTeamLink="/contact"
        items={faqs}/>
        <CallToAction title="Streamline Your Team's Workflow Today"
        description="Join 10,000+ teams delivering projects faster with less stress. Get started in 5 minutes — no credit card required."
        primaryButtonText="Start Free 14-Day Trial"
        secondaryButtonText="Book a Demo"/>
        <Newsletter1 heading="Get Project Management Insights"
        subheading="Join our newsletter for weekly tips on boosting team productivity, workflow optimizations, and exclusive feature updates."
        buttonText="Subscribe for Updates"
        placeholderText="Your work email"
        stats={newsLetterStats}/>
       </div>
  );
}

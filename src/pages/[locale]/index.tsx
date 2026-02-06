import React from "react";
import HeroSection from "@/components/main/HeroSection";
import ContactSection from "@/components/main/ContactSection";
import ProjectsSection from "@/components/main/ProjectsSection";
import EventsCalendar from "@/components/main/EventsCalendar";

import { GetStaticProps, GetStaticPaths } from "next";
import { locales } from "@/i18n/config";

export default function Home() {
  return (
    <main className="bg-cream">
      <HeroSection />
      <EventsCalendar />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: locales.map((locale) => ({ params: { locale } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = params?.locale as string;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
    revalidate: 60,
  };
};

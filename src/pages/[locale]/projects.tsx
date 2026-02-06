import { GetStaticProps, GetStaticPaths } from "next";
import { locales } from "@/i18n/config";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Placeholder data - replace with real projects
const projects = [
  {
    id: 1,
    title: "Autonomous Line Follower",
    description: "Arduino-based robot that follows lines using IR sensors.",
    tags: ["Arduino", "Sensors", "C++"],
    link: "https://github.com/dirobots",
  },
  {
    id: 2,
    title: "MuJoCo Pick-and-Place",
    description:
      "Reinforcement learning for robotic manipulation in simulation.",
    tags: ["RL", "MuJoCo", "Python"],
    link: "https://github.com/dirobots",
  },
  {
    id: 3,
    title: "ROS Navigation Stack",
    description: "SLAM-based navigation for mobile robots using ROS.",
    tags: ["ROS", "SLAM", "Navigation"],
    link: "https://github.com/dirobots",
  },
  {
    id: 4,
    title: "Computer Vision Object Detection",
    description: "Real-time object detection for robotics applications.",
    tags: ["CV", "YOLO", "PyTorch"],
    link: "https://github.com/dirobots",
  },
];

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <>
      <Head>
        <title>Projects | Dirobots</title>
        <meta
          name="description"
          content="Showcase of Dirobots robotics club student projects"
        />
      </Head>
      <div className="bg-cream min-h-screen py-24 text-seth-coral">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-bold mb-12 text-center">{t("title")}</h1>

          <div className="flex justify-center items-center py-24">
            <p className="text-3xl font-semibold italic text-gray-500">
              {t("comingSoon")}
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-seth-coral underline font-bold text-lg hover:opacity-80"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
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
  };
};

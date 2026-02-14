import { GetStaticProps, GetStaticPaths } from "next";
import { locales } from "@/i18n/config";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Link from "next/link";
import { Github } from "lucide-react";

const projects = [
  {
    key: "vision2grab",
    github: "https://github.com/Nas01010101/Vision2Grab",
  },
];

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <>
      <Head>
        <title>{t("title")} | Dirobots</title>
        <meta
          name="description"
          content="Showcase of Dirobots robotics club student projects"
        />
      </Head>
      <div className="bg-cream min-h-screen py-24 text-seth-coral">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-bold mb-12 text-center">{t("title")}</h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.key}
                className="bg-white p-8 rounded-lg shadow-lg border border-seth-coral/10 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">
                    {t(`${project.key}.title`)}
                  </h2>
                  <span className="text-sm bg-seth-coral/10 px-3 py-1 rounded-full font-medium">
                    {t(`${project.key}.term`)}
                  </span>
                </div>

                <p className="text-lg text-gray-700 mb-6">
                  {t(`${project.key}.description`)}
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-seth-coral hover:text-seth-coral/80 font-medium transition-colors"
                  >
                    <Github size={20} />
                    {t("viewProject")}
                  </a>
                </div>
              </div>
            ))}
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

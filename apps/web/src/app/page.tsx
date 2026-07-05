import { client } from "@/sanity/lib/client";
import {
  ABOUT_QUERY,
  HERO_QUERY,
  SITE_SETTINGS_QUERY,
  SKILLS_QUERY,
  STATS_QUERY,
} from "@/sanity/lib/queries";
import type {
  About,
  Hero,
  SiteSettings,
  Skills,
  Stats,
} from "@/sanity/lib/types";

export default async function Home() {
  const [settings, hero, stats, about, skills] = await Promise.all([
    client.fetch<SiteSettings>(SITE_SETTINGS_QUERY),
    client.fetch<Hero>(HERO_QUERY),
    client.fetch<Stats>(STATS_QUERY),
    client.fetch<About>(ABOUT_QUERY),
    client.fetch<Skills>(SKILLS_QUERY),
  ]);

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3 font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-sm text-white shadow-lg shadow-blue-500/25">
            BB
          </span>
          <span>{settings?.siteTitle || "Bleah."}</span>
        </a>

        <a
          href="#contact"
          className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25"
        >
          Hire Me
        </a>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="space-y-8">
          {hero?.eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {hero.eyebrow}
            </div>
          )}

          <div className="space-y-4">
            <p className="font-semibold text-slate-500">
              {hero?.greeting || "Hello, I'm"}
            </p>

            <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
              <span className="block">{hero?.firstName || "Bleah"}</span>
              <span className="block bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                {hero?.lastName || "Barasa"}
              </span>
            </h1>

            <div className="space-y-1">
              <p className="text-2xl font-semibold text-slate-700">
                {hero?.role || settings?.role || "Software Engineer"}
              </p>
              <p className="text-lg text-slate-400">
                {hero?.tagline || settings?.shortBio}
              </p>
            </div>
          </div>

          <p className="min-h-8 text-2xl font-medium text-slate-700">
            {hero?.typewriterPhrases?.[0] || "Building intelligent solutions."}
          </p>

          <div className="flex flex-wrap gap-4">
            {hero?.primaryButton?.label && (
              <a
                href={hero.primaryButton.href || "#projects"}
                className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25"
              >
                {hero.primaryButton.label}
              </a>
            )}

            {hero?.secondaryButton?.label && (
              <a
                href={hero.secondaryButton.href || "#"}
                className="rounded-xl border-2 border-blue-500/20 bg-white px-6 py-3.5 font-semibold text-blue-600"
              >
                {hero.secondaryButton.label}
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {hero?.techBadges?.map((badge) => (
              <span
                key={badge._key}
                className="rounded-full border border-white bg-white px-3 py-1.5 text-sm font-bold shadow-sm"
                style={{ color: badge.color || "#437FC7" }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-slate-900 p-5 shadow-2xl">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="space-y-3 font-mono text-sm">
              <p className="text-purple-300">const developer = {"{"}</p>
              <p className="pl-5 text-sky-300">
                name:{" "}
                <span className="text-emerald-300">
                  '{hero?.firstName} {hero?.lastName}'
                </span>
                ,
              </p>
              <p className="pl-5 text-sky-300">
                role: <span className="text-emerald-300">'{hero?.role}'</span>,
              </p>
              <p className="pl-5 text-sky-300">
                location:{" "}
                <span className="text-emerald-300">
                  '{settings?.location || "Nairobi, Kenya"}'
                </span>
                ,
              </p>
              <p className="text-purple-300">{"}"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/80 px-6 py-10 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {stats?.items?.map((item) => (
            <div
              key={item._key}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-4xl font-bold text-blue-600">
                {item.value}
                {item.suffix}
              </p>
              <p className="mt-2 font-semibold text-slate-900">{item.label}</p>
              <p className="mt-1 text-sm text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              {about?.eyebrow || "About Me"}
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {about?.heading?.replace(about?.highlight || "", "")}
              {about?.highlight && (
                <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                  {about.highlight}
                </span>
              )}
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              {about?.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-5 text-xl font-bold">Journey</h3>
              <div className="space-y-5">
                {about?.timeline?.map((item) => (
                  <div
                    key={item._key}
                    className="border-l-2 border-blue-200 pl-5"
                  >
                    <p className="text-sm font-bold text-blue-600">
                      {item.year}
                    </p>
                    <h4 className="mt-1 font-semibold text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {about?.values?.map((item) => (
                <div
                  key={item._key}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h4 className="font-bold text-slate-950">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              {skills?.eyebrow || "Skills"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {skills?.heading || "Skills & Technologies"}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {skills?.categories?.map((category) => (
              <div
                key={category._key}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-950">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-5">
                  {category.skills?.map((skill) => (
                    <div key={skill._key}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-700">
                          {skill.name}
                        </span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400"
                          style={{ width: `${skill.level ?? 0}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
              Full Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {skills?.technologies?.map((technology) => (
                <span
                  key={technology._key}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700"
                >
                  {technology.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { client } from "@/sanity/lib/client";
import { HERO_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import type { Hero, SiteSettings } from "@/sanity/lib/types";

export default async function Home() {
  const [settings, hero] = await Promise.all([
    client.fetch<SiteSettings>(SITE_SETTINGS_QUERY),
    client.fetch<Hero>(HERO_QUERY),
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
    </main>
  );
}

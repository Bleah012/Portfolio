import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import type { SiteSettings } from "@/sanity/lib/types";

export default async function Home() {
  const settings = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          Portfolio CMS Connected
        </p>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            {settings?.fullName || "Your Name"}
          </h1>

          <p className="text-2xl text-sky-200">
            {settings?.role || "Your role will appear here"}
          </p>

          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            {settings?.shortBio ||
              "Your short bio from Sanity will appear here after publishing Site Settings."}
          </p>
        </div>

        <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 md:grid-cols-2">
          <p>
            <span className="text-slate-400">Site title:</span>{" "}
            {settings?.siteTitle || "Not set"}
          </p>

          <p>
            <span className="text-slate-400">Location:</span>{" "}
            {settings?.location || "Not set"}
          </p>

          <p>
            <span className="text-slate-400">Email:</span>{" "}
            {settings?.email || "Not set"}
          </p>

          <p>
            <span className="text-slate-400">GitHub:</span>{" "}
            {settings?.githubUrl || "Not set"}
          </p>
        </div>
      </section>
    </main>
  );
}

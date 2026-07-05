import { client } from "@/sanity/lib/client";
import {
  ABOUT_QUERY,
  BLOG_SECTION_QUERY,
  CERTIFICATIONS_QUERY,
  CERTIFICATIONS_SECTION_QUERY,
  EXPERIENCE_QUERY,
  EXPERIENCE_SECTION_QUERY,
  FEATURED_PROJECTS_QUERY,
  HERO_QUERY,
  POSTS_QUERY,
  PROJECTS_SECTION_QUERY,
  SITE_SETTINGS_QUERY,
  SKILLS_QUERY,
  STATS_QUERY,
} from "@/sanity/lib/queries";
import type {
  About,
  BlogSection,
  Certification,
  CertificationsSection,
  Experience,
  ExperienceSection,
  Hero,
  Post,
  Project,
  ProjectsSection,
  SiteSettings,
  Skills,
  Stats,
} from "@/sanity/lib/types";

export default async function Home() {
  const [
    settings,
    hero,
    stats,
    about,
    skills,
    projectsSection,
    projects,
    experienceSection,
    experience,
    certificationsSection,
    certifications,
    blogSection,
    posts,
  ] = await Promise.all([
    client.fetch<SiteSettings>(SITE_SETTINGS_QUERY),
    client.fetch<Hero>(HERO_QUERY),
    client.fetch<Stats>(STATS_QUERY),
    client.fetch<About>(ABOUT_QUERY),
    client.fetch<Skills>(SKILLS_QUERY),
    client.fetch<ProjectsSection>(PROJECTS_SECTION_QUERY),
    client.fetch<Project[]>(FEATURED_PROJECTS_QUERY),
    client.fetch<ExperienceSection>(EXPERIENCE_SECTION_QUERY),
    client.fetch<Experience[]>(EXPERIENCE_QUERY),
    client.fetch<CertificationsSection>(CERTIFICATIONS_SECTION_QUERY),
    client.fetch<Certification[]>(CERTIFICATIONS_QUERY),
    client.fetch<BlogSection>(BLOG_SECTION_QUERY),
    client.fetch<Post[]>(POSTS_QUERY),
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

      <section id="projects" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              {projectsSection?.eyebrow || "Portfolio"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {projectsSection?.heading || "Featured Projects"}
            </h2>
            {projectsSection?.description && (
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
                {projectsSection.description}
              </p>
            )}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects?.map((project) => (
              <article
                key={project._id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="h-3"
                  style={{ backgroundColor: project.accentColor || "#437FC7" }}
                />

                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                      {project.category || "Project"}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                      {project.status || "completed"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-24 text-sm leading-6 text-slate-500">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-sm font-semibold text-slate-700 hover:text-blue-600"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-sm font-semibold text-blue-600"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              {experienceSection?.eyebrow || "Experience"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {experienceSection?.heading || "Professional Experience"}
            </h2>
            {experienceSection?.description && (
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
                {experienceSection.description}
              </p>
            )}
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {experience?.map((item) => (
              <article
                key={item._id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                      {item.type}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-semibold text-slate-600">
                      {item.organization}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="font-semibold text-slate-700">
                      {item.period}
                    </p>
                    <p className="text-sm text-slate-400">{item.location}</p>
                  </div>
                </div>

                {item.description && (
                  <p className="mt-5 leading-7 text-slate-600">
                    {item.description}
                  </p>
                )}

                {item.highlights?.length ? (
                  <ul className="mt-5 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.tools?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              {certificationsSection?.eyebrow || "Credentials"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {certificationsSection?.heading || "Certifications & Awards"}
            </h2>
            {certificationsSection?.description && (
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
                {certificationsSection.description}
              </p>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications?.map((certification) => (
              <article
                key={certification._id}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold text-white"
                  style={{
                    backgroundColor: certification.accentColor || "#437FC7",
                  }}
                >
                  OK
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {certification.category && (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                      {certification.category}
                    </span>
                  )}
                  {certification.date && (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                      {certification.date}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {certification.title}
                </h3>

                <p className="mt-1 font-semibold text-slate-600">
                  {certification.issuer}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {certification.description}
                </p>

                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    className="mt-5 inline-flex text-sm font-semibold text-blue-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Credential
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            {blogSection?.eyebrow ?? "Blog"}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            {blogSection?.heading ?? "Blog & Articles"}
          </h2>
          {blogSection?.description ? (
            <p className="mt-4 text-base leading-7 text-slate-600">
              {blogSection.description}
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts?.map((post) => (
            <article
              key={post._id}
              className="flex min-h-[320px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="mb-5 h-1.5 w-16 rounded-full"
                style={{ backgroundColor: post.accentColor ?? "#437FC7" }}
              />

              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {post.category ? <span>{post.category}</span> : null}
                {post.readTime ? <span>{post.readTime}</span> : null}
              </div>

              <h3 className="text-xl font-bold leading-snug text-slate-950">
                {post.title}
              </h3>

              {post.excerpt ? (
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                  {post.excerpt}
                </p>
              ) : null}

              {post.tags?.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              {post.externalUrl ? (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Read article
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

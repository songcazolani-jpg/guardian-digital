import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${site.name}` },
      { name: "description", content: "How NDW Financial Services collects, uses and protects your personal information under POPIA." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy" }]} />
      <section className="py-16 sm:py-20">
        <article className="container-tight prose prose-slate max-w-3xl text-ink-soft">
          <p>Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long" })}</p>
          <h2 className="font-display text-2xl font-bold text-primary">1. Who we are</h2>
          <p>{site.legalName} ("NDW", "we", "us") is the responsible party for the personal information we process. We comply with the Protection of Personal Information Act (POPIA).</p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">2. What we collect</h2>
          <p>Contact details, identification information, policy and claims data, and analytics on how you use this website.</p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">3. How we use it</h2>
          <p>To respond to enquiries, provide quotes and policies, manage claims, comply with regulatory obligations, and improve our services.</p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">4. Sharing your information</h2>
          <p>We share data only with insurers, regulators, vetted service providers and as required by law. We never sell your information.</p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">5. Your rights</h2>
          <p>You may request access, correction, or deletion of your information at any time by emailing <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a>.</p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">6. Contact</h2>
          <p>For privacy queries please contact our Information Officer at {site.email}.</p>
        </article>
      </section>
    </>
  );
}

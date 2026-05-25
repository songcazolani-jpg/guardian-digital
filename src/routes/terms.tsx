import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${site.name}` },
      { name: "description", content: "Terms and conditions for using NDW Financial Services and this website." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero title="Terms & Conditions" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Terms" }]} />
      <section className="py-16 sm:py-20">
        <article className="container-tight prose prose-slate max-w-3xl text-ink-soft">
          <p>Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long" })}</p>
          <h2 className="font-display text-2xl font-bold text-primary">Use of this website</h2>
          <p>By using this website you agree to these terms. The content is provided for general information only and does not constitute financial advice.</p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">Quotes & policies</h2>
          <p>All quotes are indicative until underwritten. Cover is subject to the policy schedule and the underwriter's terms.</p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">Intellectual property</h2>
          <p>All trademarks, logos and content on this site belong to {site.legalName} unless otherwise indicated.</p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">Liability</h2>
          <p>To the fullest extent permitted by law, NDW will not be liable for indirect or consequential loss arising from use of this website.</p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary">Contact</h2>
          <p>Queries: <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></p>
        </article>
      </section>
    </>
  );
}

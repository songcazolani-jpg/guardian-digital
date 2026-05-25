import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/config/site";
import heroServices from "@/assets/hero-services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Insurance & Services — ${site.name}` },
      { name: "description", content: "Long-term, short-term, funeral, vehicle and outsourced operational services from NDW Financial Services." },
      { property: "og:title", content: `Insurance & Services — ${site.name}` },
      { property: "og:description", content: "Long-term, short-term, funeral, vehicle and outsourced operational services from NDW Financial Services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Insurance and operational services that scale with you"
        description="Choose a service to learn more, or send us a quick enquiry and a specialist will be in touch."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        image={heroServices}
        imageAlt="Insurance documents, keys and a calculator arranged on a navy desk"
      />
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <ServicesGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}

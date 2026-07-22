import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/tokens";
import { icon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

const findService = (slug) => services.find((s) => s.slug === slug);

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const I = icon(service.icon);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={service.title}
        lead={service.short}
        breadcrumb={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <span className="w-14 h-14 rounded-xl grid place-items-center bg-primary-soft text-primary">
            <I size={26} aria-hidden="true" />
          </span>
          <p className="mt-6 text-slateink leading-relaxed">{service.text}</p>

          {service.points.length > 0 && (
            <ul className="mt-6 space-y-3">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-slateink">
                  <Check size={17} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        {service.image && (
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-surface">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        )}
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-2xl font-extrabold">Nos autres expertises</h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {others.map((s) => {
              const OtherIcon = icon(s.icon);
              return (
                <Card key={s.slug} hover className="h-full p-6">
                  <Link href={`/services/${s.slug}`} className="flex flex-col h-full">
                    <span className="w-12 h-12 rounded-xl grid place-items-center bg-primary-soft text-primary">
                      <OtherIcon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-slateink leading-relaxed flex-1">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                      En savoir plus <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

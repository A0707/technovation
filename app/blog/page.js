import Image from "next/image";
import { FileText, ArrowRight } from "lucide-react";
import { getPosts } from "@/lib/wp";
import { media } from "@/lib/woo";
import { Card, PlaceholderCard } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Blog",
  description:
    "Actualités et conseils informatiques pour les entreprises : infrastructure, sécurité, matériel professionnel.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();
  const empty = posts.length === 0;

  return (
    <>
      <PageHeader
        title="Blog"
        lead="Actualités et conseils pour les entreprises."
        breadcrumb={["Blog"]}
      />

      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20">
        {empty ? (
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-extrabold">Aucun article publié</h2>
              <p className="mt-3 text-slateink leading-relaxed">
                La rubrique blog existe sur technovation.ma mais ne contient encore
                aucun article. Cette page interroge l&apos;API WordPress à chaque
                rendu : dès qu&apos;un article est publié dans votre back-office, il
                apparaît ici automatiquement, sans intervention.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }, (_, i) => (
                <PlaceholderCard
                  key={i}
                  icon={FileText}
                  title={`Article ${i + 1}`}
                  hint="Titre, extrait, image et date"
                />
              ))}
            </div>
          </Reveal>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.05}>
                <Card hover className="h-full overflow-hidden flex flex-col">
                  <a href={post.link} className="flex flex-col h-full">
                    {post.image && (
                      <span className="relative block aspect-[16/9] bg-surface">
                        <Image
                          src={media(post.image)}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </span>
                    )}
                    <span className="p-6 flex flex-col flex-1">
                      <time dateTime={post.date} className="text-xs text-slateink">
                        {new Date(post.date).toLocaleDateString("fr-FR", {
                          day: "numeric", month: "long", year: "numeric",
                        })}
                      </time>
                      <h2 className="mt-2 font-bold text-lg leading-snug">{post.title}</h2>
                      <p className="mt-2 text-sm text-slateink leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                        Lire l&apos;article <ArrowRight size={15} aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <ContactCta />
    </>
  );
}

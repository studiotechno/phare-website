import {
  MessageSquare,
  GitBranch,
  Zap,
  Shield,
  ChevronDown,
  Check,
  ArrowRight,
  Lightbulb,
  Search,
  FileCode,
  Slack,
  Settings2,
  ClipboardList,
  Target,
} from "lucide-react";

const APP_URL = "https://app.phare.tech";

function PhareIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <line x1="12" y1="1" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="1" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="19" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="4.2" y1="4.2" x2="7" y2="7" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <line x1="17" y1="17" x2="19.8" y2="19.8" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <line x1="4.2" y1="19.8" x2="7" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <line x1="17" y1="7" x2="19.8" y2="4.2" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    </svg>
  );
}

const useCases = [
  {
    icon: Target,
    title: "Évaluez la faisabilité",
    description: "\"Cette feature est-elle réalisable ? Combien de fichiers seraient impactés ?\" Obtenez une réponse claire avant de prioriser.",
  },
  {
    icon: ClipboardList,
    title: "Rédigez vos tickets tech",
    description: "Générez des spécifications techniques détaillées à partir de vos questions. Fini les allers-retours avec les devs.",
  },
  {
    icon: Slack,
    title: "Intégration Slack",
    description: "Interrogez votre codebase directement depuis Slack. Toute l'équipe peut poser ses questions.",
  },
  {
    icon: Settings2,
    title: "Instructions personnalisées",
    description: "Configurez le contexte de votre équipe et vos préférences. Phare s'adapte à votre façon de travailler.",
  },
];

const features = [
  {
    icon: GitBranch,
    title: "Connexion GitHub",
    description: "OAuth en un clic. Votre code est indexé automatiquement.",
  },
  {
    icon: Search,
    title: "Recherche intelligente",
    description: "IA sémantique + recherche textuelle. Rien ne vous échappe.",
  },
  {
    icon: FileCode,
    title: "Sources citées",
    description: "Chaque réponse pointe vers le fichier et la ligne exacte.",
  },
  {
    icon: Shield,
    title: "Sécurité maximale",
    description: "Chiffrement AES-256. Aucun stockage de code source.",
  },
];

const plans = [
  {
    id: "free",
    name: "Starter",
    description: "Idéal pour tester",
    price: "Gratuit",
    priceDetail: "pour toujours",
    features: [
      "40K tokens/mois",
      "1 repository",
      "Chat illimité",
      "Indexation automatique",
    ],
    cta: "Démarrer gratuitement",
    highlighted: false,
  },
  {
    id: "plus",
    name: "Plus",
    description: "Pour aller plus loin",
    price: "19€",
    priceDetail: "/mois",
    features: [
      "1M tokens/mois",
      "5 repositories",
      "Support prioritaire",
      "Historique complet",
    ],
    cta: "Choisir Plus",
    highlighted: true,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Pour les équipes",
    price: "60€",
    priceDetail: "/mois",
    features: [
      "4M tokens/mois",
      "Repos illimités",
      "Support dédié",
      "Accès API",
    ],
    cta: "Choisir Pro",
    highlighted: false,
  },
];

const comparisonFeatures = [
  { name: "Tokens mensuels", starter: "40K", plus: "1M", pro: "4M" },
  { name: "Repositories", starter: "1", plus: "5", pro: "Illimité" },
  { name: "Historique conversations", starter: "7 jours", plus: "Illimité", pro: "Illimité" },
  { name: "Support", starter: "Email", plus: "Prioritaire", pro: "Dédié" },
  { name: "Accès API", starter: "—", plus: "—", pro: "✓" },
];

const faqs = [
  {
    question: "À qui s'adresse Phare ?",
    answer: "Aux Product Managers qui veulent évaluer l'impact d'une feature. Aux freelances qui reprennent un projet existant. À toute personne produit qui veut prendre des décisions éclairées sans dépendre des devs.",
  },
  {
    question: "Comment Phare analyse-t-il mon code ?",
    answer: "Notre IA découpe intelligemment chaque fichier, génère des embeddings sémantiques, et crée un index de recherche hybride. Résultat : vous posez une question, on trouve la réponse dans votre codebase.",
  },
  {
    question: "Mes données sont-elles en sécurité ?",
    answer: "Absolument. Authentification GitHub OAuth, tokens chiffrés AES-256, et surtout : nous ne stockons jamais votre code source. Uniquement les embeddings nécessaires à la recherche.",
  },
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer: "Oui, sans engagement. Upgrade ou downgrade quand vous voulez, les changements sont immédiats. Pas de mauvaise surprise.",
  },
  {
    question: "Que se passe-t-il si j'atteins ma limite ?",
    answer: "Le chat est pausé jusqu'au prochain cycle de facturation. Vous pouvez upgrader à tout moment pour continuer immédiatement.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <PhareIcon className="size-6 text-primary" />
            <span className="font-mono text-lg font-semibold">Phare</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#usecases" className="text-muted-foreground transition-colors hover:text-foreground">
              Cas d&apos;usage
            </a>
            <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
              Tarifs
            </a>
            <a href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <a
            href={APP_URL}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ouvrir l&apos;app
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm">
            <Lightbulb className="size-4 text-primary" />
            <span className="text-muted-foreground">Prenez des décisions produit éclairées</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Naviguez dans l&apos;obscurité
            <br />
            <span className="text-primary">de votre codebase.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            Votre code est une boîte noire ? Phare l&apos;éclaire.
            <br />
            Connectez vos repos GitHub et prenez des décisions produit basées sur la réalité technique.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={APP_URL}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]"
            >
              Essayer gratuitement
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#usecases"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-muted/50"
            >
              Voir les cas d&apos;usage
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground/70">
            Gratuit pour commencer · Sans carte bancaire · Setup en 2 minutes
          </p>
        </div>

        <a href="#usecases" className="absolute bottom-8 text-muted-foreground/50 transition-colors hover:text-muted-foreground">
          <ChevronDown className="size-5" />
        </a>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Ce que vous pouvez faire avec Phare
            </h2>
            <p className="text-muted-foreground">
              Des cas concrets pour les équipes produit.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group rounded-xl border border-border/50 p-6 transition-all hover:border-primary/30 hover:bg-primary/[0.02]"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <useCase.icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{useCase.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - compact */}
      <section className="border-t border-border/50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
              Comment ça marche
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border/30 p-4 text-center"
              >
                <feature.icon className="mx-auto mb-2 size-5 text-primary" />
                <h3 className="mb-1 text-sm font-semibold">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-border/50 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            Utilisé par des <span className="text-foreground">Product Managers</span>, <span className="text-foreground">CTOs</span> et <span className="text-foreground">freelances</span> pour éclairer leurs décisions produit.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Un prix simple, pas de surprise
            </h2>
            <p className="text-muted-foreground">
              Commencez gratuitement. Évoluez quand vous êtes prêt.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="overflow-hidden rounded-2xl border border-border/50">
            <div className="grid divide-x divide-border/50 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`flex h-full flex-col p-6 ${
                    plan.highlighted ? "bg-primary/[0.03]" : ""
                  }`}
                >
                  <div className="mb-6">
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="font-semibold">{plan.name}</h3>
                      {plan.highlighted && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          Populaire
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.priceDetail}</span>
                  </div>

                  <ul className="mb-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={APP_URL}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border bg-background hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="pb-3 text-left font-medium text-muted-foreground">Comparer les plans</th>
                  <th className="pb-3 text-center font-medium">Starter</th>
                  <th className="pb-3 text-center font-medium text-primary">Plus</th>
                  <th className="pb-3 text-center font-medium">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={feature.name} className={i !== comparisonFeatures.length - 1 ? "border-b border-border/30" : ""}>
                    <td className="py-3 text-muted-foreground">{feature.name}</td>
                    <td className="py-3 text-center">{feature.starter}</td>
                    <td className="py-3 text-center">{feature.plus}</td>
                    <td className="py-3 text-center">{feature.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Questions fréquentes
            </h2>
          </div>

          <div className="divide-y divide-border/50">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between font-medium transition-colors hover:text-primary">
                  {faq.question}
                  <ChevronDown className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10">
            <PhareIcon className="size-6 text-primary" />
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Éclairez votre codebase.
            <br />
            <span className="text-primary">Décidez en confiance.</span>
          </h2>
          <p className="mb-8 text-muted-foreground">
            Rejoignez ceux qui prennent des décisions produit basées sur la réalité du code.
          </p>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]"
          >
            Créer mon compte gratuit
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <PhareIcon className="size-5 text-primary/70" />
            <span className="font-mono text-sm text-muted-foreground">Phare</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Phare. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

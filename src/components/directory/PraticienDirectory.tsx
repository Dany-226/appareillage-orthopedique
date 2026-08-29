"use client";

import { useMemo, useState } from "react";
import { Phone, Mail, ExternalLink, MapPin, Search } from "lucide-react";
import type { Orthoprothesiste } from "@/lib/orthoprothesistes";

type Props = {
  praticiens: Orthoprothesiste[];
};

export default function PraticienDirectory({ praticiens }: Props) {
  const [query, setQuery] = useState("");
  const [departement, setDepartement] = useState("");

  const departements = useMemo(() => {
    const set = new Set(
      praticiens.map((p) => p.departement).filter((d) => d.trim() !== "")
    );
    return Array.from(set).sort();
  }, [praticiens]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return praticiens.filter((p) => {
      const matchesDept = departement === "" || p.departement === departement;
      const matchesQuery =
        q === "" ||
        p.nom.toLowerCase().includes(q) ||
        p.ville.toLowerCase().includes(q);
      return matchesDept && matchesQuery;
    });
  }, [praticiens, query, departement]);

  return (
    <div>
      {/* ── Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par nom ou ville…"
            className="w-full rounded-lg border border-border bg-white py-2.5 pl-10 pr-4
                       text-sm text-brand-dark placeholder:text-muted-foreground
                       focus-ring focus:border-brand-teal"
          />
        </div>
        <select
          value={departement}
          onChange={(e) => setDepartement(e.target.value)}
          className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm
                     text-brand-dark focus-ring focus:border-brand-teal sm:w-56"
        >
          <option value="">Tous les départements</option>
          {departements.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* ── Result count */}
      <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {filtered.length} praticien{filtered.length > 1 ? "s" : ""} trouvé
        {filtered.length > 1 ? "s" : ""}
      </p>

      {/* ── Results grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((p, i) => (
            <div
              key={`${p.nom}-${p.cp}-${i}`}
              className="rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <p className="font-heading font-semibold text-brand-dark leading-snug mb-2"
                 style={{ fontSize: "16px" }}
              >
                {p.nom}
              </p>

              <div className="flex items-start gap-2 mb-1.5 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 flex-none text-brand-teal" aria-hidden />
                <span>
                  {p.adresse}
                  {p.cp || p.ville ? `, ${[p.cp, p.ville].filter(Boolean).join(" ")}` : ""}
                </span>
              </div>

              {p.telephone && (
                <div className="flex items-center gap-2 mb-1.5 text-sm text-muted-foreground">
                  <Phone size={14} className="flex-none text-brand-teal" aria-hidden />
                  <a href={`tel:${p.telephone.replace(/\s+/g, "")}`} className="hover:text-brand-teal transition-colors">
                    {p.telephone}
                  </a>
                </div>
              )}

              {p.email && (
                <div className="flex items-center gap-2 mb-1.5 text-sm text-muted-foreground">
                  <Mail size={14} className="flex-none text-brand-teal" aria-hidden />
                  <a href={`mailto:${p.email}`} className="hover:text-brand-teal transition-colors break-all">
                    {p.email}
                  </a>
                </div>
              )}

              {p.siteWeb && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ExternalLink size={14} className="flex-none text-brand-teal" aria-hidden />
                  <a
                    href={p.siteWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-teal transition-colors break-all"
                  >
                    Site web
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Aucun praticien ne correspond à votre recherche.
        </p>
      )}
    </div>
  );
}

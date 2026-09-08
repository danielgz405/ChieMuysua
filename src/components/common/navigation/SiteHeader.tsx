"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { primaryNavigation } from "@/utils/navigation/site-map";

export function SiteHeader() {
  return (
    <Disclosure
      as="header"
      className="relative z-30 border-b border-astral/25 bg-night text-paper"
    >
      {({ open }) => (
        <>
          <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-astral/60 text-xs font-mono text-astral transition-colors group-hover:border-brass group-hover:text-brass">
                AT
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-mono text-[9px] tracking-[0.24em] text-astral">
                  ARCHIVO / 00
                </span>
                <span className="mt-1 font-display text-xl tracking-wide text-paper">
                  El Atlas del Tarot
                </span>
              </span>
            </Link>

            <nav
              aria-label="Navegación principal"
              className="hidden items-center gap-6 lg:flex"
            >
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-astral transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/lecturas/online"
                className="hidden items-center gap-2 border border-brass/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-brass transition-colors hover:bg-brass hover:text-night focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass sm:flex"
              >
                Abrir lectura
                <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <DisclosureButton className="inline-flex h-10 w-10 items-center justify-center border border-astral/40 text-astral transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass lg:hidden">
                <span className="sr-only">
                  {open ? "Cerrar menú" : "Abrir menú"}
                </span>
                {open ? (
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
          </div>

          <DisclosurePanel className="border-t border-astral/25 bg-night-soft lg:hidden">
            <nav
              aria-label="Navegación móvil"
              className="mx-auto flex max-w-[1440px] flex-col px-5 py-4 sm:px-8"
            >
              {primaryNavigation.map((item) => (
                <DisclosureButton
                  key={item.href}
                  as={Link}
                  href={item.href}
                  className="border-b border-astral/15 py-4 text-left font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
                >
                  {item.label}
                </DisclosureButton>
              ))}
              <DisclosureButton
                as={Link}
                href="/lecturas/online"
                className="mt-4 inline-flex items-center gap-2 self-start border border-brass/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                Abrir lectura
                <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </DisclosureButton>
            </nav>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

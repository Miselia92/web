import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import { getTranslation, UI_TRANSLATIONS } from "@/lib/i18n";
import { LanguageSwitcher } from "../LanguageSwitcher";

interface HeaderProps {
    brandName?: string;
    brandNameZh?: string;
}

function HeaderContent({ brandName = "Mark Power", brandNameZh }: HeaderProps) {
    // We don't rely on state for text rendering anymore to avoid FOUC (flash of unstyled content) / hydration mismatches
    // Instead we render both and hide one with CSS (which is set immediately in <head>)
    const { nav, categories } = UI_TRANSLATIONS.en;
    const { nav: navZh, categories: categoriesZh } = UI_TRANSLATIONS.zh;

    const navItems = [
        {
            labelEn: nav.projects,
            labelZh: navZh.projects,
            href: "/projects",
            subItems: [
                { labelEn: categories.photography, labelZh: categoriesZh.photography, href: "/projects/category/photography" },
                { labelEn: categories['video-art'], labelZh: categoriesZh['video-art'], href: "/projects/category/video-art" },
                { labelEn: categories.documentary, labelZh: categoriesZh.documentary, href: "/projects/category/documentary" },
                { labelEn: categories.printmaking, labelZh: categoriesZh.printmaking, href: "/projects/category/printmaking" },
                { labelEn: categories.others, labelZh: categoriesZh.others, href: "/projects/category/others" },
            ],
        },
        { labelEn: nav.writing, labelZh: navZh.writing, href: "/writing" },
        { labelEn: nav.connect, labelZh: navZh.connect, href: "/connect" },
        { labelEn: nav.about, labelZh: navZh.about, href: "/biography" },
    ];

    return (
        <header className="w-full py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center bg-background border-b border-border/40 sticky top-0 z-50 backdrop-blur-sm bg-background/95 supports-[backdrop-filter]:bg-background/60">
            <div className="mb-4 md:mb-0 flex items-center gap-4">
                <a href="/" className="text-3xl font-extrabold tracking-widest uppercase hover:opacity-80 transition-opacity">
                    <span className="lang-en-only">{brandName}</span>
                    <span className="lang-zh-only">{brandNameZh || brandName}</span>
                </a>
            </div>

            <nav className="flex items-center gap-8">
                <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium tracking-wide text-muted-foreground items-center">
                    {navItems.map((item) => (
                        <li key={item.href} className="relative group">
                            <a
                                href={item.href}
                                className={cn(
                                    "hover:text-foreground transition-colors uppercase text-xs block py-2"
                                )}
                            >
                                <span className="lang-en-only">{item.labelEn}</span>
                                <span className="lang-zh-only">{item.labelZh}</span>
                            </a>

                            {item.subItems && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[160px]">
                                    <div className="bg-popover border border-border shadow-md py-2 flex flex-col items-center rounded-sm">
                                        {item.subItems.map((sub) => (
                                            <a
                                                key={sub.labelEn}
                                                href={sub.href}
                                                className="block px-4 py-2 text-xs uppercase text-muted-foreground hover:text-foreground hover:bg-accent transition-colors w-full text-center whitespace-nowrap"
                                            >
                                                <span className="lang-en-only">{sub.labelEn}</span>
                                                <span className="lang-zh-only">{sub.labelZh}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                    <li>
                        <LanguageSwitcher />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export function Header(props: HeaderProps) {
    return (
        <LanguageProvider>
            <HeaderContent {...props} />
        </LanguageProvider>
    );
}

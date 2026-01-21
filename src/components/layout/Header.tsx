import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    {
        label: "Projects",
        href: "/projects",
        subItems: [
            { label: "Photography", href: "/projects/category/photography" },
            { label: "Video Art", href: "/projects/category/video-art" },
            { label: "Documentary", href: "/projects/category/documentary" },
            { label: "Printmaking", href: "/projects/category/printmaking" },
            { label: "Others", href: "/projects/category/others" },
        ],
    },
    { label: "Writing", href: "/writing" },
    { label: "Connect", href: "/connect" },
    { label: "About", href: "/biography" }, // Mapped from About -> /biography as per original
];

interface HeaderProps {
    brandName?: string;
}

export function Header({ brandName = "Mark Power" }: HeaderProps) {
    return (
        <header className="w-full py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center bg-background border-b border-border/40 sticky top-0 z-50 backdrop-blur-sm bg-background/95 supports-[backdrop-filter]:bg-background/60">
            <div className="mb-4 md:mb-0">
                <a href="/" className="text-2xl font-bold tracking-widest uppercase hover:opacity-80 transition-opacity">
                    {brandName}
                </a>
            </div>

            <nav>
                <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium tracking-wide text-muted-foreground">
                    {navItems.map((item) => (
                        <li key={item.label} className="relative group">
                            <a
                                href={item.href}
                                className={cn(
                                    "hover:text-foreground transition-colors uppercase text-xs block py-2"
                                )}
                            >
                                {item.label}
                            </a>

                            {item.subItems && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[160px]">
                                    <div className="bg-popover border border-border shadow-md py-2 flex flex-col items-center rounded-sm">
                                        {item.subItems.map((sub) => (
                                            <a
                                                key={sub.label}
                                                href={sub.href}
                                                className="block px-4 py-2 text-xs uppercase text-muted-foreground hover:text-foreground hover:bg-accent transition-colors w-full text-center whitespace-nowrap"
                                            >
                                                {sub.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

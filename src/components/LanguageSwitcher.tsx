import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
    className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
    const { toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                "text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground uppercase transition-colors px-3 py-1 border border-transparent hover:border-border rounded-md",
                className
            )}
            aria-label="Switch Language"
        >
            {/* If current lang is EN, we show '中文' (to switch to it). If lang is ZH, we show 'EN' */}
            <span className="lang-en-only">中文</span>
            <span className="lang-zh-only">EN</span>
        </button>
    );
}

import React from "react";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full py-12 px-6 md:px-12 mt-auto border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-wider">
                <div className="mb-4 md:mb-0">
                    &copy; {year} Mark Power. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-foreground transition-colors">
                        Instagram
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                        Newsletter
                    </a>
                </div>
            </div>
        </footer>
    );
}

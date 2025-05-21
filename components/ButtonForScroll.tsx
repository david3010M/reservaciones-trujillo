// components/ScrollToButton.tsx
"use client";

import {Button} from "@/components/ui/button";

interface ScrollToButtonProps {
    targetId: string;
    children: React.ReactNode;
    className?: string;
}

export function ScrollToButton({targetId, children, className}: ScrollToButtonProps) {
    const handleClick = () => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <Button onClick={handleClick} className={className}>
            {children}
        </Button>
    );
}

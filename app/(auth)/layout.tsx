import type React from "react";
import { Star } from "lucide-react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
            <Stars />
            <div className="relative z-10 w-full max-w-md px-4">{children}</div>
        </div>
    );
}

function Stars() {
    const positions = [
        "top-10 left-10",
        "top-20 right-16",
        "top-1/3 left-1/4",
        "top-1/2 right-10",
        "bottom-20 left-12",
        "bottom-10 right-1/3",
        "top-1/4 right-1/4",
        "bottom-1/3 left-1/3",
    ];

    return (
        <>
            {positions.map((pos, i) => (
                <Star
                    key={i}
                    fill="currentColor"
                    stroke="none"
                    className={`absolute ${pos} h-4 w-4 text-accent animate-twinkle-slow`}
                    style={{ animationDelay: `${i * 0.4}s` }}
                />
            ))}
        </>
    );
}
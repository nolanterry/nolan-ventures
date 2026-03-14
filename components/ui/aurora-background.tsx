"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-dark text-white transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-20",
            "[--aurora:repeating-linear-gradient(100deg,var(--color-brand)_10%,var(--color-brand-light)_15%,var(--color-brand-dark)_20%,var(--color-brand-light)_25%,var(--color-brand)_30%)]\n",
            "[background-image:var(--aurora)]\n",
            "[background-size:300%,_200%]\n",
            "[background-position:50%_50%,50%_50%]\n",
            "filter blur-[10px]\n",
            "after:content-[''] after:absolute after:inset-0\n",
            "after:[background-image:var(--aurora)]\n",
            "after:[background-size:200%,_100%]\n",
            "after:animate-aurora\n",
            "after:[background-attachment:fixed]\n",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
        />
      </div>
      {children}
    </div>
  );
};

import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "@/server/cn";

export const MaxSize = ({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<"main">>) => (
  <main className={cn("container gap-8 mx-auto my-8", className)} {...props}>
    {children}
  </main>
);


import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "@/server/cn";

export const Main = ({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<"main">>) => (
  <main className={cn("container gap-8 mx-auto my-8", className)} {...props}>
    {children}
  </main>
);

export const Section = (
  {
    children,
    className,
    cols = false,
    ...props
  }: PropsWithChildren<ComponentPropsWithoutRef<"section"> & { cols?: boolean }>) => (
  <section className={cn("grid gap-8", { "font-medium": cols }, className)} {...props}>
    {children}
  </section>
);


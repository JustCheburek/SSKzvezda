import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "@server/cn";

type TextProps = PropsWithChildren<{
  className?: string
}>

export const H1 = (
  { children, className, color = true }: TextProps & { color?: boolean }
) => (
  <h1 className={cn(
    "text-6xl xs:text-8xl md:text-9xl font-semibold",
    {"text-ssk": color},
    className
  )}>
    {children}
  </h1>
);

export const H2 = (
  { children, className }: TextProps
) => (
  <h2 className={cn(
    "text-2xl font-medium",
    className
  )}>
    {children}
  </h2>
);

export const H3 = (
  { children, className }: TextProps
) => (
  <h3 className={cn(
    "text-xl text-neutral-300/85 font-medium",
    className
  )}>
    {children}
  </h3>
);

export const ListHeading = ({children}: PropsWithChildren) => (
  <H3 className="flex items-center gap-2">
    <span className="icon-[fluent--list-24-regular] size-[1.3em]"/>
    {children}
  </H3>
)

export const P = (
  { children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<"p">>
) => (
  <p className={cn(
    "dark:text-neutral-300/95",
    className
  )} {...props}>
    {children}
  </p>
);

export const Small = (
  { children, className }: TextProps
) => (
  <small className={cn(
    "dark:text-neutral-400",
    className
  )}>
    {children}
  </small>
);

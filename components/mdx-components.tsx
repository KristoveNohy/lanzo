import Link from "next/link";

type MdxComponentProps = {
  children?: React.ReactNode;
  href?: string;
};

export const mdxComponents = {
  h2: ({ children }: MdxComponentProps) => (
    <h2 className="mt-10 text-2xl font-semibold text-slate-900">{children}</h2>
  ),
  h3: ({ children }: MdxComponentProps) => (
    <h3 className="mt-8 text-xl font-semibold text-slate-900">{children}</h3>
  ),
  p: ({ children }: MdxComponentProps) => (
    <p className="mt-4 text-sm text-slate-600">{children}</p>
  ),
  ul: ({ children }: MdxComponentProps) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
      {children}
    </ul>
  ),
  a: ({ children, href }: MdxComponentProps) => (
    <Link href={href ?? "#"} className="text-accent">
      {children}
    </Link>
  )
};

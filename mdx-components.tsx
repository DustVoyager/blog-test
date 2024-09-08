// import type { MDXComponents } from "mdx/types";
import { A as a } from "@/components/markdown/a";
import { P as p } from "@/components/markdown/p";
import { H1 as h1 } from "@/components/markdown/h1";
import { H2 as h2 } from "@/components/markdown/h2";
import { H3 as h3 } from "@/components/markdown/h3";
import { OL as ol } from "@/components/markdown/ol";
import { UL as ul } from "@/components/markdown/ul";
import { LI as li } from "@/components/markdown/li";
import { HR as hr } from "@/components/markdown/hr";
import { Code as code } from "@/components/markdown/code";
import { Image } from "@/components/markdown/image";
import { Figure } from "@/components/markdown/figure";
import { Snippet } from "@/components/markdown/snippet";
import { Caption } from "@/components/markdown/caption";
import { Callout } from "@/components/markdown/callout";
import { Ref, FootNotes, FootNote } from "@/components/markdown/footnotes";
import { Blockquote as blockquote } from "@/components/markdown/blockquote";

export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    img: Image,
    blockquote,
    Image,
    Figure,
    Snippet,
    Caption,
    Callout,
    Ref,
    FootNotes,
    FootNote,
  };
}

import styled, { css } from "styled-components";
import { Kind } from "./Text.types";

const TypographyScales = css`
  --ads-v2-h1-font-size: var(--ads-v2-font-size-10);
  --ads-v2-h1-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h1-line-height: var(--ads-v2-line-height-8);
  --ads-v2-h1-letter-spacing: var(--ads-v2-letter-spacing-2);

  --ads-v2-h2-font-size: var(--ads-v2-font-size-8);
  --ads-v2-h2-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h2-line-height: var(--ads-v2-line-height-7);
  --ads-v2-h2-letter-spacing: var(--ads-v2-letter-spacing-2);

  --ads-v2-h3-font-size: var(--ads-v2-font-size-7);
  --ads-v2-h3-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h3-line-height: var(--ads-v2-line-height-6);
  --ads-v2-h3-letter-spacing: var(--ads-v2-letter-spacing-2);

  --ads-v2-h4-font-size: var(--ads-v2-font-size-6);
  --ads-v2-h4-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h4-line-height: var(--ads-v2-line-height-3);
  --ads-v2-h4-letter-spacing: var(--ads-v2-letter-spacing-0);

  --ads-v2-h5-font-size: var(--ads-v2-font-size-4);
  --ads-v2-h5-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h5-line-height: var(--ads-v2-line-height-3);
  --ads-v2-h5-letter-spacing: var(--ads-v2-letter-spacing-0);

  --ads-v2-h6-font-size: var(--ads-v2-font-size-2);
  --ads-v2-h6-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h6-line-height: var(--ads-v2-line-height-1);
  --ads-v2-h6-letter-spacing: var(--ads-v2-letter-spacing-3);

  --ads-v2-p-font-size: var(--ads-v2-font-size-4);
  --ads-v2-p-font-weight: var(--ads-v2-font-weight-normal);
  --ads-v2-p-line-height: var(--ads-v2-line-height-3);
  --ads-v2-p-letter-spacing: var(--ads-v2-letter-spacing-0);
`;

const Variables = css`
  --font-family: var(--ads-v2-font-family);
  --color: var(--ads-v2-color-fg);

  --font-size: var(--ads-v2-p-font-size);
  --font-weight: var(--ads-v2-p-font-weight);
  --line-height: var(--ads-v2-p-line-height);
  --letter-spacing: var(--ads-v2-p-letter-spacing);
`;

const Kinds = {
  error: css`
    --font-size: var(--ads-v2-p-font-size);
    --font-weight: var(--ads-v2-p-font-weight);
    --line-height: var(--ads-v2-p-line-height);
    --letter-spacing: var(--ads-v2-p-letter-spacing);
    --color: var(--ads-v2-color-fg-error);
  `,
  // The default, span, uses the same values as p for now.
  span: css`
    --font-size: var(--ads-v2-p-font-size);
    --font-weight: var(--ads-v2-p-font-weight);
    --line-height: var(--ads-v2-p-line-height);
    --letter-spacing: var(--ads-v2-p-letter-spacing);
  `,
  code: css`
    --font-family: var(--ads-v2-font-family-code);
    --font-size: var(--ads-v2-font-size-4);
  `,
  "body-s": css`
    --font-size: var(--ads-v2-font-size-2);
  `,
  "body-m": css`
    --font-size: var(--ads-v2-font-size-4);
  `,
  "action-l": css`
    --font-size: var(--ads-v2-font-size-6);
  `,
  "action-m": css`
    --font-size: var(--ads-v2-font-size-4);
  `,
  "action-s": css`
    --font-size: var(--ads-v2-font-size-2);
  `,
  "heading-xl": css`
    --font-size: var(--ads-v2-font-size-14);
    --font-weight: var(--ads-v2-h1-font-weight);
    --line-height: var(--ads-v2-h1-line-height);
    --letter-spacing: var(--ads-v2-h1-letter-spacing);
  `,
  "heading-l": css`
    --font-size: var(--ads-v2-font-size-12);
    --font-weight: var(--ads-v2-h2-font-weight);
    --line-height: var(--ads-v2-h2-line-height);
    --letter-spacing: var(--ads-v2-h2-letter-spacing);
  `,
  "heading-m": css`
    --font-size: var(--ads-v2-font-size-10);
    --font-weight: var(--ads-v2-h3-font-weight);
    --line-height: var(--ads-v2-h3-line-height);
    --letter-spacing: var(--ads-v2-h3-letter-spacing);
  `,
  "heading-s": css`
    --font-size: var(--ads-v2-font-size-6);
    --font-weight: var(--ads-v2-h4-font-weight);
    --line-height: var(--ads-v2-h4-line-height);
    --letter-spacing: var(--ads-v2-h4-letter-spacing);
  `,
  "heading-xs": css`
    --font-size: var(--ads-v2-font-size-4);
    --font-weight: var(--ads-v2-h5-font-weight);
    --line-height: var(--ads-v2-h5-line-height);
    --letter-spacing: var(--ads-v2-h5-letter-spacing);
  `,
};

export const StyledText = styled.span<{
  color?: string;
  kind?: Kind;
}>`
  ${TypographyScales}
  ${Variables}

  /* Variant style */
  ${({ kind }) => kind && Kinds[kind]}

  /* Base style */
  font-family: var(--font-family);
  color: ${({ color }) => (color ? color : "var(--color)")};

  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
`;

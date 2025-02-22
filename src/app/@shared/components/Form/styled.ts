import styled from "styled-components";

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1.25rem;
    width: 100%;
`;

export const FormItem = styled.div<{
  colSpan: number;
  breakpoints?: { sm?: number; md?: number; lg?: number; xl?: number };
}>`
    grid-column: span ${(props) => props.colSpan || 12};
    ${(props) => props.breakpoints?.sm && `
    @media (min-width: 640px) {
      grid-column: span ${props.breakpoints.sm};
    }
  `}
    ${(props) => props.breakpoints?.md && `
    @media (min-width: 768px) {
      grid-column: span ${props.breakpoints.md};
    }
  `}
    ${(props) => props.breakpoints?.lg && `
    @media (min-width: 1024px) {
      grid-column: span ${props.breakpoints.lg};
    }
  `}
    ${(props) => props.breakpoints?.xl && `
    @media (min-width: 1280px) {
      grid-column: span ${props.breakpoints.xl};
    }
  `}
`;

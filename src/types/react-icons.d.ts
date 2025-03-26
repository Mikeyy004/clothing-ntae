import { FC, SVGProps } from 'react';

declare module 'react-icons/fi' {
  export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = FC<IconBaseProps>;

  export const FiCheck: IconType;
  export const FiCheckCircle: IconType;
} 
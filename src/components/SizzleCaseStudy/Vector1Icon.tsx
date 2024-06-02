import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 154 135' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M153.683 0.262695C153.683 41.1665 138.68 71.7717 101.629 90.538C78.1702 102.42 54.3963 104.94 29.3554 111.2C18.1699 113.997 11.3124 118.566 2.92905 126.187C-0.73255 129.516 4.8762 93.2704 3.63848 116.787C3.5206 119.027 -0.733355 127.497 0.800755 129.202C2.70386 131.317 14.3384 133.123 18.0045 134.345'
      stroke='#286A21'
      strokeWidth={5}
      strokeLinecap='round'
    />
  </svg>
);
const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };

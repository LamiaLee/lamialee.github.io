import { memo, SVGProps } from 'react';

const Arrow5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 13 2.124591588973999'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M13.7512 0.751157C14.166 0.336304 14.166 -0.336304 13.7512 -0.751157L6.99075 -7.51157C6.57589 -7.92642 5.90329 -7.92642 5.48843 -7.51157C5.07358 -7.09671 5.07358 -6.4241 5.48843 -6.00925L11.4977 0L5.48843 6.00925C5.07358 6.4241 5.07358 7.09671 5.48843 7.51157C5.90329 7.92642 6.57589 7.92642 6.99075 7.51157L13.7512 0.751157ZM0 1.0623L13 1.0623V-1.0623L0 -1.0623L0 1.0623Z'
      fill='#286A21'
    />
  </svg>
);
const Memo = memo(Arrow5Icon);
export { Memo as Arrow5Icon };

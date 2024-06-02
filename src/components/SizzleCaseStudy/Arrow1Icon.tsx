import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 59 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M60.7678 1.76777C61.7441 0.791456 61.7441 -0.791456 60.7678 -1.76777L44.8579 -17.6777C43.8816 -18.654 42.2986 -18.654 41.3223 -17.6777C40.346 -16.7014 40.346 -15.1184 41.3223 -14.1421L55.4645 0L41.3223 14.1421C40.346 15.1184 40.346 16.7014 41.3223 17.6777C42.2986 18.654 43.8816 18.654 44.8579 17.6777L60.7678 1.76777ZM0 2.5L59 2.5V-2.5L0 -2.5L0 2.5Z'
      fill='#286A21'
    />
  </svg>
);
const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };

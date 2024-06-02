import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    sHOPALLPREPAREDFOODS?: ReactNode;
  };
}
/* @figmaId 24:290 */
export const Button_Property1Default: FC<Props> = memo(function Button_Property1Default(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.sHOPALLPREPAREDFOODS != null ? (
        props.text?.sHOPALLPREPAREDFOODS
      ) : (
        <div className={classes.sHOPALLPREPAREDFOODS}>SHOP ALL PREPARED FOODS</div>
      )}
    </button>
  );
});

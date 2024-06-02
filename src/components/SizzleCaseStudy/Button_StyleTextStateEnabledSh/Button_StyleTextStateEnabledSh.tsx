import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleTextStateEnabledSh.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    labelText?: ReactNode;
  };
}
/* @figmaId 24:105 */
export const Button_StyleTextStateEnabledSh: FC<Props> = memo(function Button_StyleTextStateEnabledSh(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.stateLayer}>
        {props.text?.labelText != null ? props.text?.labelText : <div className={classes.labelText}>Label</div>}
      </div>
    </div>
  );
});

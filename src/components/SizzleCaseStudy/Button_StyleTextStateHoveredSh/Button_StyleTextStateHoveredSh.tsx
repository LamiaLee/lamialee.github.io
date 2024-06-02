import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleTextStateHoveredSh.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    stateLayer?: boolean;
  };
}
/* @figmaId 24:102 */
export const Button_StyleTextStateHoveredSh: FC<Props> = memo(function Button_StyleTextStateHoveredSh(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.stateLayer && (
        <div className={classes.stateLayer}>
          <div className={classes.labelText}>Label</div>
        </div>
      )}
    </div>
  );
});

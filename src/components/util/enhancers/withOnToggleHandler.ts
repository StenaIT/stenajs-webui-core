import { withHandlers } from 'recompose';
import { ValueOnChangeProps } from '../../ui/form/types';

export interface WithOnToggleHandler {
  onToggle: () => void;
}

export const withOnToggleHandler = withHandlers<
  ValueOnChangeProps<boolean>,
  WithOnToggleHandler
>({
  onToggle: ({ onChange, value }) => () => {
    if (onChange) {
      onChange(!value);
    }
  },
});

import { omit } from 'lodash/fp';
import { compose, mapProps } from 'recompose';
import { Omit } from '../../types/Omit';

export const omitProps = <TProps, TOmitted>(keys: Array<keyof TProps>) =>
  compose<Omit<TProps, TOmitted>, TProps>(
    mapProps,
    omit(keys),
  );

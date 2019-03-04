import { withProps } from 'recompose';

// tslint:disable:no-console
export const withLog = (s: string) =>
  withProps(() => {
    console.log(s);
    return undefined;
  });

export const withLogProps = withProps(props => {
  console.log('props', props);
  return undefined;
});

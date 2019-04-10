import { addBoatProgressIndicatorStories } from './BoatProgressIndicatorStories';
import { addProgressIndicatorStories } from './ProgressIndicatorStories';
import { addProgressSpinnersStories } from './ProgressSpinnerStories';

export const addProgressStories = () => {
  addBoatProgressIndicatorStories();
  addProgressSpinnersStories();
  addProgressIndicatorStories();
};

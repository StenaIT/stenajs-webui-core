import { addDefaultTextInputStories } from './text-input/DefaultTextInputStories';
import { addNumericTextInputStories } from './text-input/NumericTextInputStories';
import { addSimpleTextInputStories } from './text-input/SimpleTextInputStories';

export const addTextInputStories = () => {
  addDefaultTextInputStories();
  addNumericTextInputStories();
  addSimpleTextInputStories();
};

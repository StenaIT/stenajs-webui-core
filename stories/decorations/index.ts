import { addBorderStories } from './BorderStories';
import { addBoxShadowStories } from './BoxShadowStories';
import { addSeparatorLineStories } from './SeparatorLineStories';
import { addShadowStories } from './ShadowStories';

export const addDecorationsStories = () => {
  addBorderStories();
  addBoxShadowStories();
  addShadowStories();
  addSeparatorLineStories();
};

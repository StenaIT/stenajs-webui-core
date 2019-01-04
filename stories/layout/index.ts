import { addColumnStories } from './ColumnStories';
import { addIndentStories } from './IndentStories';
import { addRowStories } from './RowStories';
import { addSpaceStories } from './SpaceStories';
import { addSpacingStories } from './SpacingStories';

export const addLayoutStories = () => {
  addColumnStories();
  addIndentStories();
  addRowStories();
  addSpaceStories();
  addSpacingStories();
};

import {
  IconDefinition,
  IconPack,
  library,
} from '@fortawesome/fontawesome-svg-core';

type IconDefinitionOrPack = IconDefinition | IconPack;

export const addIcons = (...definitions: IconDefinitionOrPack[]) => {
  library.add(...definitions);
};

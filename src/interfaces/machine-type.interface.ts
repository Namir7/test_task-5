import type { Tags } from '../enums/tags.enum';

type tags = keyof typeof Tags;

export interface IMachineType {
  id: id;

  tags: tags[];
}

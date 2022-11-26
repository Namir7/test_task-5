import type { Tags } from '@/enums/tags.enum';

type tagNames = keyof typeof Tags;

type TagsNamesMap = { [n in tagNames]: string };

const tagsMap: TagsNamesMap = {
  only_non_cash_payments: 'кассир',
  coffee: 'кофе',
  cashier: 'наличка',
  hot_chocolate: 'ШОКОЛОАД',
  juices: 'pussy jiuce',
};

export const getTagName = (tagKey: tagNames): string => tagsMap[tagKey];

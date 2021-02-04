import {
  AutocompletePlugin as AutocompleteCorePlugin,
  BaseItem,
} from '@algolia/autocomplete-core';

import { AutocompleteOptions } from './AutocompleteOptions';

export type AutocompletePlugin<TItem extends BaseItem> = Omit<
  AutocompleteCorePlugin<TItem>,
  'getSources'
> & {
  getSources: AutocompleteOptions<TItem>['getSources'];
};

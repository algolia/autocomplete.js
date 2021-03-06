---
id: snippetHit
---

Returns virtual nodes with highlighted matching parts of an Algolia hit's snippet.

The `snippetHit` function lets you turn an Algolia hit's snippet into a virtual node with highlighted matching parts for a given attribute.

## Examples

### With a single string

To determine what attribute to parse, you can pass it as a string.

```js
import { snippetHit } from '@algolia/autocomplete-js';

// An Algolia hit for query "the"
const hit = {
  name: 'The Legend of Zelda: Breath of the Wild',
  _snippetResult: {
    query: {
      value:
        '__aa-highlight__The__/aa-highlight__ Legend of Zelda: Breath of __aa-highlight__the__/aa-highlight__ Wild',
    },
  },
};
const snippetedValue = snippetHit({
  hit,
  attribute: 'query',
});
```

### With nested attributes

If you're referencing a nested attribute, you can use the array syntax.

```js
import { snippetHit } from '@algolia/autocomplete-js';

// An Algolia hit for query "cam"
const hit = {
  hierarchicalCategories: {
    lvl1: 'Cameras & Camcoders',
  },
  _snippetResult: {
    hierarchicalCategories: {
      lvl1: {
        value:
          '__aa-highlight__Cam__/aa-highlight__eras & __aa-highlight__Cam__/aa-highlight__coders',
      },
    },
  },
};
const snippetedValue = snippetHit({
  hit,
  attribute: ['hierarchicalCategories', 'lvl1'],
});
```

## Parameters

### `hit`

> `AlgoliaHit` | required

The Algolia hit whose attribute to retrieve the snippet from.

### `attribute`

> `string | string[]` | required

The attribute to retrieve the snippet from. You can use the array syntax to reference nested attributes.

### `tagName`

> `string` | defaults to `mark`

The tag name of the virtual node.

## Returns

> `HighlightItemParams<THit>`

Virtual nodes with the snippet.

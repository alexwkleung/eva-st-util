# Eva-ST-Util

Simple wrappers around unist syntax tree utils.

This is ESM-only.

# Installation

Install via npm, directly from the repository.

```bash
npm install https://github.com/alexwkleung/Eva-ST-Util
```

Import Eva-ST-Util.

```typescript
import { EvaSTUtil } from 'eva-st-util'
```

# Functions

At the moment, there are two functions within `class EvaSTUtil`:

1) Converting Markdown to HTML.

```typescript
static MDtoHTML_ST(dataString: string)
```

2) Converting HTML to Markdown.

```typescript
static HTMLtoMarkdown_ST(dataString: string)
```

Both functions return a string of the converted syntax tree. 

Go to [Example Usage](#example-usage) to see how to use these functions.

For converting Markdown to HTML, these are the packages that it uses:

- [mdast-util-from-markdown](https://github.com/syntax-tree/mdast-util-from-markdown)

- [mdast-util-to-hast](https://github.com/syntax-tree/mdast-util-to-hast)

- [hast-util-to-html](https://github.com/syntax-tree/hast-util-to-html)

For converting HTML to Markdown, these are the packages that it uses:

- [hast-util-from-html](https://github.com/syntax-tree/hast-util-from-html)

- [hast-util-to-mdast](https://github.com/syntax-tree/hast-util-to-mdast)

- [mdast-util-to-markdown](https://github.com/syntax-tree/mdast-util-to-markdown)

For any explanation of what these packages do, you must refer to their respective documentation pages.

# Example Usage 

**Note:** Your string must contain properly serialized HTML/Markdown, or else it won't return the desired output you want.

**Markdown to HTML:**

```typescript
import { EvaSTUtil } from 'eva-st-util'

const MarkdownToHTML = EvaSTUtil.MDtoHTML_ST('<your string containing markdown>');

console.log(MarkdownToHTML);
```

If this was stored in a string from your markdown file/editor:

```markdown
# header 1

hello world
```

Then it would return this:

```html
<h1>header 1</h1>
<p>hello world</p>
```

**HTML to Markdown:**

```typescript
import { EvaSTUtil } from 'eva-st-util'

const HTMLtoMarkdown = EvaSTUtil.HTMLtoMarkdown_ST('<your string containing html nodes>');

console.log(HTMLtoMarkdown);
```

If this was stored in a string from your HTML document/file:

```html
<h1>header 1<h1>
<p>hello world</p>
```

Then it would return this:

```markdown
# header 1
hello world
```

# License 

[MIT License.](https://github.com/alexwkleung/Eva-ST-Util/blob/main/LICENSE)
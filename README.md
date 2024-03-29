# Eva-ST-Util

Simple wrapper utility around unist syntax tree utils.

I wanted a more efficient way of using these utilities without having to install a chain of dependencies and setting up the parser every time I want to work with Markdown.

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

1. Converting Markdown to HTML.

```typescript
//type signature
static MDtoHTML_ST(dataString: string): string
```

2. Converting HTML to Markdown.

```typescript
//type signature
static HTMLtoMarkdown_ST(dataString: string): string
```

3. Get a tree containing frontmatter nodes.

```typescript
//type signature
static getFrontmatterTree_ST(dataString: string): Root<any>
```

4. Traverse a tree.

```typescript
//type signature
static traverseTree_ST(tree: Root<any>, type: string): string[]
```

5. Convert Markdown to hast 

```typescript
//type signature
static MDtoHast_ST(markdown: string): HastNode<any>
```

6. Convert HTML to mdast

```typescript
//type signature
static HTMLtoMdast_ST(html: string): Root<any>
```

7. Convert Markdown to mdast 

```typescript
//type signature
static MDtoMdast_ST(markdown: string): Root<any>
```

8. Convert HTML to hast

```typescript
//type signature
static HTMLtoHast_ST(html: string): Root<any>
```

9. Convert Markdown to HTML without sanitization.

```typescript
//type signature
static MDtoHTMLNoSanitization_ST(markdown: string): string
```

Go to [Example Usage](#example-usage) to see how to use these functions.

For converting Markdown to HTML, these are the packages that it uses:

- [mdast-util-from-markdown](https://github.com/syntax-tree/mdast-util-from-markdown)

- [mdast-util-to-hast](https://github.com/syntax-tree/mdast-util-to-hast)

- [hast-util-to-html](https://github.com/syntax-tree/hast-util-to-html)

- [mdast-util-gfm](https://github.com/syntax-tree/mdast-util-gfm)

- [micromark-extension-gfm](https://github.com/micromark/micromark-extension-gfm)

- [hast-util-sanitize](https://github.com/syntax-tree/hast-util-sanitize)

For converting HTML to Markdown, these are the packages that it uses:

- [hast-util-from-html](https://github.com/syntax-tree/hast-util-from-html)

- [hast-util-to-mdast](https://github.com/syntax-tree/hast-util-to-mdast)

- [mdast-util-to-markdown](https://github.com/syntax-tree/mdast-util-to-markdown)

- [mdast-util-gfm](https://github.com/syntax-tree/mdast-util-gfm)

- [micromark-extension-gfm](https://github.com/micromark/micromark-extension-gfm)

For getting a tree with Frontmatter nodes, these are the packages that it uses:

- [mdast-util-frontmatter](https://github.com/syntax-tree/mdast-util-frontmatter)

- [micromark-extension-frontmatter](https://github.com/micromark/micromark-extension-frontmatter)

For traversing over a tree, these are the packages that it uses:

- [unist-util-visit](https://github.com/syntax-tree/unist-util-visit)

Other packages:

- [mdast-util-math](https://github.com/syntax-tree/mdast-util-math)

- [micromark-extension-math](https://github.com/micromark/micromark-extension-math)

For any explanation of what these packages do, you must refer to their respective documentation pages listed above.

# Example Usage 

**Note (1):** Your string must contain properly serialized HTML/Markdown or else it may not return the desired output.

**Note (2):** If you are using math syntax (KaTeX), you'll need the `katex.css` or `katex.min.css` stylesheet and the fonts from the `fonts` folder. These assets can be found in any downloaded [KaTeX release](https://github.com/KaTeX/KaTeX/releases).

**Markdown to HTML:**

```typescript
import { EvaSTUtil } from 'eva-st-util'

const MarkdownToHTML = EvaSTUtil.MDtoHTML_ST("<your string containing markdown>");

console.log(MarkdownToHTML);
```

If this was stored in a string from your markdown file:

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

const HTMLtoMarkdown = EvaSTUtil.HTMLtoMarkdown_ST("<your string containing html nodes>");

console.log(HTMLtoMarkdown);
```

If this was stored in a string from your HTML document:

```html
<h1>header 1<h1>
<p>hello world</p>
```

Then it would return this:

```markdown
# header 1
hello world
```

Other examples will be added later.

# License 

[MIT License.](https://github.com/alexwkleung/Eva-ST-Util/blob/main/LICENSE)
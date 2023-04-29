import { fromHtml } from 'hast-util-from-html'
import { toMdast } from 'hast-util-to-mdast'
import { toMarkdown } from 'mdast-util-to-markdown'
import { toHast } from 'mdast-util-to-hast'
import { toHtml } from 'hast-util-to-html'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmFromMarkdown, gfmToMarkdown } from 'mdast-util-gfm'
import { gfm } from 'micromark-extension-gfm'
import { sanitize } from 'hast-util-sanitize'
import { math } from 'micromark-extension-math'
import { mathFromMarkdown, mathToMarkdown } from 'mdast-util-math'
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter'
import { frontmatter } from 'micromark-extension-frontmatter'
import { visit } from 'unist-util-visit'

//create generic Root type as T (workaround...)
//this is to override the Root type from mdast lib
type Root<T> = T;

type HastNode<T> = T;

/**
 * @class EvaSTUtil
 */
export class EvaSTUtil {
    /**
     * MDtoHTML_ST function 
     * 
     * Convert Markdown string to HTML string
     * 
     * @member static 
     * @param markdown Markdown string
     * @returns Sanitized HTML string
     */
    static MDtoHTML_ST(markdown: string): string {
        //to mdast
        const _mdast = fromMarkdown(markdown, {
            extensions: [
                gfm(),
                frontmatter(['yaml', 'toml'])
            ],
            mdastExtensions: [
                gfmFromMarkdown(),
                frontmatterFromMarkdown(['yaml', 'toml'])
            ]
        });

        //convert mdast to hast
        const _hast = toHast(_mdast)!;

        //convert hast to html
        const _html: string = toHtml(sanitize(_hast));

        //return html
        return _html;
    }

    /**
     * HTMLtoMarkdown_ST function
     * 
     * Convert HTML string to Markdown string
     * 
     * @member static
     * @param html HTML string
     * @returns Markdown string
     */
    static HTMLtoMarkdown_ST(html: string): string {
        //to hast
        const _hast = fromHtml(html, { 
            fragment: true 
        });

        //convert hast to mdast
        const _mdast = toMdast(_hast);

        //convert mdast to markdown
        const _md: string = toMarkdown(_mdast, {
            extensions: [
                gfmToMarkdown(),
                mathToMarkdown(), 
            ]
        });

        //return markdown
        return _md;
    }

    /**
     * getFrontmatterTree_ST function
     * 
     * Get a tree containing frontmatter nodes
     * 
     * @param markdown Markdown string
     * @returns mdast tree with frontmatter nodes
     */
    static getFrontmatterTree_ST(markdown: string): Root<any> {
        //from mdast (markdown string)
        const _mdast = fromMarkdown(markdown, {
            extensions: [
                gfm(),
                math(),
                frontmatter(['yaml', 'toml'])
            ],
            mdastExtensions: [
                gfmFromMarkdown(), 
                mathFromMarkdown(), 
                frontmatterFromMarkdown(['yaml', 'toml'])
            ]
        });

        //return mdast
        return _mdast;
    }

    /**
     * traverseTree_ST function
     * 
     * Traverse over a tree
     * 
     * @param tree The tree to traverse over
     * @param type The node to visit
     * @returns An iterable object containing the visited node
     */
    static traverseTree_ST(tree: Root<any>, type: string): string[] {
        let nodeRef: string = "";

        //traverse over the tree using unist visit
        const traverseVisit = visit(tree, type, (node: string) => {
            nodeRef = node;
        });   

        //create an iterable object from traversed tree
        const iterableNode: string[] = Object.values(nodeRef);

        //return iterable node
        return iterableNode;
    }

    /**
     * MDtoHast_ST function
     * 
     * Markdown string to hast tree
     * 
     * @param markdown Markdown string
     * @returns hast tree
     */
    static MDtoHast_ST(markdown: string): HastNode<any> {
        //to mdast
        const _mdast = fromMarkdown(markdown, {
            extensions: [
                gfm(),
                math(),
                frontmatter(['yaml', 'toml'])
            ],
            mdastExtensions: [
                gfmFromMarkdown(), 
                mathFromMarkdown(), 
                frontmatterFromMarkdown(['yaml', 'toml'])
            ]
        });

        //convert mdast to hast
        const _hast = toHast(_mdast)!;

        //return hast 
        return _hast;
    }

    /**
     * HTMLtoMdast_ST function
     * 
     * HTML string to mdast tree
     * 
     * @param html HTML string
     * @returns mdast tree
     */
    static HTMLtoMdast_ST(html: string): Root<any> {
        //to hast
        const _hast = fromHtml(html, { 
            fragment: true 
        });

        //convert hast to mdast
        const _mdast = toMdast(_hast);

        //return mdast
        return _mdast;
    }

    /**
     * MDtoMdast_ST function
     * 
     * Markdown string to mdast tree
     * 
     * @param markdown Markdown string
     * @returns mdast tree
     */
    static MDtoMdast_ST(markdown: string): Root<any> {
        //to mdast
        const _mdast = fromMarkdown(markdown, {
            extensions: [
                gfm(),
                math(),
                frontmatter(['yaml', 'toml'])
            ],
            mdastExtensions: [
                gfmFromMarkdown(), 
                mathFromMarkdown(), 
                frontmatterFromMarkdown(['yaml', 'toml'])
            ]
        });

        //return mdast 
        return _mdast;
    }

    /**
     * HTMLtoHast_ST function
     * 
     * HTML string to hast tree
     * 
     * @param html HTML string
     * @returns hast tree
     */
    static HTMLtoHast_ST(html: string): Root<any> {
        //to hast
        const _hast = fromHtml(html, { 
            fragment: true 
        });

        //return hast
        return _hast;
    }

    /**
     * MDtoHTMLNoSanitization function
     * 
     * Convert Markdown string to HTML string without sanitization. This allows extensions such as math to 
     * work. It keeps the nodes in the tree without being removed by sanitization rules.
     * 
     * Note: This is considered unsafe.
     * 
     * @param markdown Markdown string
     * @returns HTML string (not sanitized)
     */
    static MDtoHTMLNoSanitization_ST(markdown: string): string {
        //to mdast
        const _mdast = fromMarkdown(markdown, {
            extensions: [
                gfm(),
                math(),
                frontmatter(['yaml', 'toml'])
            ],
            mdastExtensions: [
                gfmFromMarkdown(),
                mathFromMarkdown(),
                frontmatterFromMarkdown(['yaml', 'toml'])
            ]
        });

        //convert mdast to hast
        const _hast = toHast(_mdast)!;

        //convert hast to html
        const _html: string = toHtml(_hast);

        //return html
        return _html;
    }
}
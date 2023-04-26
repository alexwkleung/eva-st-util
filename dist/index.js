import { fromHtml } from 'hast-util-from-html';
import { toMdast } from 'hast-util-to-mdast';
import { toMarkdown } from 'mdast-util-to-markdown';
import { toHast } from 'mdast-util-to-hast';
import { toHtml } from 'hast-util-to-html';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfmFromMarkdown, gfmToMarkdown } from 'mdast-util-gfm';
import { gfm } from 'micromark-extension-gfm';
import { sanitize } from 'hast-util-sanitize';
import { math } from 'micromark-extension-math';
import { mathFromMarkdown, mathToMarkdown } from 'mdast-util-math';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { frontmatter } from 'micromark-extension-frontmatter';
import { visit } from 'unist-util-visit';
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
     * @param dataString Markdown string
     * @returns Sanitized HTML string
     */
    static MDtoHTML_ST(dataString) {
        //from mdast (markdown string)
        const _mdast = fromMarkdown(dataString, {
            extensions: [
                gfm(),
                math()
            ],
            mdastExtensions: [
                gfmFromMarkdown(),
                mathFromMarkdown(),
            ]
        });
        //convert mdast to hast
        const _hast = toHast(_mdast);
        //convert hast to html
        const _html = toHtml(sanitize(_hast));
        //return html
        return _html;
    }
    /**
     * HTMLtoMarkdown_ST function
     *
     * Convert HTML string to Markdown string
     *
     * @member static
     * @param dataString HTML string
     * @returns Markdown string
     */
    static HTMLtoMarkdown_ST(dataString) {
        //from hast (html string)
        const _hast = fromHtml(dataString, {
            fragment: true
        });
        //convert hast to mdast
        const _mdast = toMdast(_hast);
        //convert mdast to markdown
        const _md = toMarkdown(_mdast, {
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
     * @param dataString Markdown string
     * @returns mdast tree with frontmatter nodes
     */
    static getFrontmatterTree_ST(dataString) {
        //from mdast (markdown string)
        const _mdast = fromMarkdown(dataString, {
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
     * @param tree The tree to traverse over
     * @param type The node to visit
     * @returns An iterable object containing the visited node
     */
    static traverseTree_ST(tree, type) {
        let nodeRef = "";
        //traverse over the tree using unist visit
        const traverseVisit = visit(tree, type, (node) => {
            nodeRef = node;
        });
        //create an iterable object from traversed tree
        const iterableNode = Object.values(nodeRef);
        //return iterable node
        return iterableNode;
    }
}

import { fromHtml } from 'hast-util-from-html'
import { toMdast } from 'hast-util-to-mdast'
import { toMarkdown } from 'mdast-util-to-markdown'
import { toHast } from 'mdast-util-to-hast'
import { toHtml } from 'hast-util-to-html'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmFromMarkdown, gfmToMarkdown } from 'mdast-util-gfm'
import { gfm } from 'micromark-extension-gfm'
import { sanitize } from 'hast-util-sanitize'
import { HastNode } from 'mdast-util-to-hast/lib'

/**
 * @class EvaSTUtil
 * 
 * @file `eva-st-uti.ts`
 */
export class EvaSTUtil {
    /**
     * MDtoHTML_ST function 
     * 
     * convert markdown string to html string
     * 
     * @member static 
     * @param dataString string
     * @returns sanitized html string
     */
    static MDtoHTML_ST(dataString: string) {
        //from mdast (markdown string)
        const _mdast = fromMarkdown(String(dataString), {
            extensions: [gfm()],
            mdastExtensions: [gfmFromMarkdown()]
        });

        //convert mdast to hast
        const _hast: HastNode | null | undefined = toHast(_mdast);

        //convert hast to html
        const _html: string = toHtml(sanitize(_hast as HastNode));

        //return html
        return _html;
    }

    /**
     * HTMLtoMarkdown_ST function
     * 
     * convert html string to markdown string
     * 
     * @member static
     * @param dataString string
     * @returns markdown string
     */
    static HTMLtoMarkdown_ST(dataString: string) {
        //from hast (html string)
        const _hast = fromHtml(String(dataString), { 
            fragment: true 
        });

        //convert hast to mdast
        const _mdast = toMdast(_hast);

        //convert mdast to markdown
        const _md: string = toMarkdown(_mdast, {
            extensions: [gfmToMarkdown()]
        });

        //return markdown
        return _md;
    }
}
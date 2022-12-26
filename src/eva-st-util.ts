import { fromHtml } from 'hast-util-from-html'
import { toMdast } from 'hast-util-to-mdast'
import { toMarkdown } from 'mdast-util-to-markdown'
import { toHast } from 'mdast-util-to-hast'
import { toHtml } from 'hast-util-to-html'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmFromMarkdown, gfmToMarkdown } from 'mdast-util-gfm'
import { gfm } from 'micromark-extension-gfm'

//class EvaSTUtil
export class EvaSTUtil {
    //markdown to html 
    static MDtoHTML_ST(dataString: string) {
        //from mdast (markdown string)
        const _mdast = fromMarkdown(String(dataString), {
            extensions: [gfm()],
            mdastExtensions: [gfmFromMarkdown()]
        });

        //convert mdast to hast
        const _hast = toHast(_mdast)!;

        //convert hast to html
        const _html = toHtml(_hast);

        //return html
        return _html;
    }

    //html to markdown
    static HTMLtoMarkdown_ST(dataString: string) {
        //from hast (html string)
        const _hast = fromHtml(String(dataString), { 
            fragment: true 
        });

        //convert hast to mdast
        const _mdast = toMdast(_hast);

        //convert mdast to markdown
        const _md = toMarkdown(_mdast, {
            extensions: [gfmToMarkdown()]
        });

        //return markdown
        return _md;
    }
}
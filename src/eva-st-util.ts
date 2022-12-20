import { fromHtml } from 'hast-util-from-html'
import { toMdast } from 'hast-util-to-mdast'
import { toMarkdown } from 'mdast-util-to-markdown'
import { toHast } from 'mdast-util-to-hast'
import { toHtml } from 'hast-util-to-html'
import { fromMarkdown } from 'mdast-util-from-markdown'

export class EvaSTUtil {
    static MDtoHTML_ST(dataString: string) {
        const _mdast = fromMarkdown(String(dataString));
        const _hast = toHast(_mdast)!;
        const _html = toHtml(_hast);

        return _html;
    }

    static HTMLtoMarkdown_ST(dataString: string) {
        const _hast = fromHtml(String(dataString), { 
            fragment: true 
        });

        const _mdast = toMdast(_hast);
        const _md = toMarkdown(_mdast);

        return _md;
    }
}
import { marked } from "marked";

export const markdownparser = (content: string) => {
  const renderer = new marked.Renderer();
  const linkRenderer = renderer.link;

  marked.setOptions({ langPrefix: "hljs language-" });

  renderer.link = (href, title, text) => {
    const localLink = href?.startsWith(
      `${location.protocol}//${location.hostname}`
    );
    const html = linkRenderer.call(renderer, href, title, text);
    return localLink
      ? html
      : html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener" `);
  };

  const markdown = marked(content, { renderer });

  return markdown;
};

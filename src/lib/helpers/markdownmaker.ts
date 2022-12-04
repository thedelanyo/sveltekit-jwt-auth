type Params = { id: string; title?: string; text?: string; link?: string };

export const markdownmaker = (options: Params) => {
  let { id, text, title, link } = options;

  title = title || "";
  link = link || "";
  text = text || "";

  switch (id) {
    case "h2":
      return `## ${text}`;

    case "h3":
      return `### ${text}`;

    case "h4":
      return `#### ${text}`;

    case "bold":
      return `**${text}**`;

    case "list":
      return text;

    case "italic":
      return `*${text}*`;

    case "quote":
      return `> ${text}`;

    case "image":
      return `![${title}](${link})`;

    case "code":
      return "```" + text + "```";

    case "youtube":
      return `[![YouTube video player](https://img.youtube.com/vi/${link}/hqdefault.jpg)](https://www.youtube.com/watch?v=${link})`;
    default:
      return "";
  }
};

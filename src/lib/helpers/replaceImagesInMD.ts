import type { imageUploadType } from "$stores/article";

export const replaceImagesInMD = (
  source: string,
  images: imageUploadType[]
) => {
  if (images.length) {
    let rgx = /\!\[(.*?)\]\((.*?)\)/gi;

    let uploads = source.match(rgx);

    let matches = uploads?.filter((match) => {
      return match.includes("_upload_");
    });

    matches?.forEach((match) => {
      let start = match.indexOf("(") + 1;
      let end = match.indexOf(")");

      let filename = match.slice(start, end);

      let image = images.find((image) => image.filename === filename);

      if (image) {
        let replace = `![${image.alt}](${image.src})`;

        source = source.replace(match, replace);
      }
    });

    return source;
  }

  return source;
};

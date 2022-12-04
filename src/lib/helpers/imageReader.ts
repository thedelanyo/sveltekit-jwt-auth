export const scaleImage = (e: any) => {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  const MAX_WIDTH = 400;
  let scaleSize = MAX_WIDTH / e.target.width;

  canvas.width = MAX_WIDTH;
  canvas.height = e.target.height * scaleSize;
  ctx?.drawImage(e.target, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL("image/jpeg");
};

let imageLoader = (img: any) => {
  return new Promise((resolve) => {
    img.onload = (event: any) => {
      resolve(event);
    };
  });
};

let fileLoader = (file: any) => {
  return new Promise((resolve) => {
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (event: any) => {
      const img = document.createElement("img");
      img.src = event.target.result;

      resolve(img);
    };
  });
};

export const imageUploader = async (event: any) => {
  let files = event.target.files;

  for (let file of files) {
    if (!file) {
      return;
    }

    if (!file.type.includes("image")) {
      return;
    }

    let img = await fileLoader(file);

    return await imageLoader(img);
  }
};

export const readImageToDataUrl = (e: any) => {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  canvas.width = e.target.width;
  canvas.height = e.target.height;
  ctx?.drawImage(e.target, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL("image/jpeg");
};

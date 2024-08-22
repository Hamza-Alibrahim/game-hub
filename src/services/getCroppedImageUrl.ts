const getCroppedImageUrl = (url: string, w: number, h: number) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + `crop/${w}/${h}/` + url.slice(index);
};

export default getCroppedImageUrl;

export const requestImage = (imagePath: string): string => {
  return `${import.meta.env.VITE_IMAGE_URL}${imagePath}`;
};

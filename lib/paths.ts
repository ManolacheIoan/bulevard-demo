export const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${base}${p}`;
export const imageSrcSet = (name: string) => `${asset(`/images/${name}-640.webp`)} 640w, ${asset(`/images/${name}-1280.webp`)} 1280w`;

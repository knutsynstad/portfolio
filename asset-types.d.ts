/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}

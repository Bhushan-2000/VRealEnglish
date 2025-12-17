declare module 'panolens' {
  export class Viewer {
    constructor(options?: {
      container?: HTMLElement;
      controlBar?: boolean;
      autoRotate?: boolean;
      autoRotateSpeed?: number;
      output?: string;
    });
    add(panorama: any): void;
    dispose(): void;
  }

  export class VideoPanorama {
    constructor(videoSrc: string, options?: any);
    dispose(): void;
  }

  export class ImagePanorama {
    constructor(imageSrc: string, options?: any);
    dispose(): void;
  }
}

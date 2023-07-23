import NextImage, { ImageLoaderProps } from "next/image";
import { CSSProperties, useEffect, useState } from "react";

declare const VALID_LOADING_VALUES: readonly ["lazy", "eager", undefined];
declare type LoadingValue = (typeof VALID_LOADING_VALUES)[number];
export type { ImageLoaderProps };
export declare type ImageLoader = (p: ImageLoaderProps) => string;
declare type PlaceholderValue = "blur" | "empty";
declare type OnLoadingComplete = (img: HTMLImageElement) => void;
export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;
declare type SafeNumber = number | `${number}`;

export type ImageType = {
  src?: string | StaticImport;
  className?: string;
  style?: CSSProperties;
  alt: string;
  width?: SafeNumber | undefined;
  height?: SafeNumber | undefined;
  fill?: boolean | undefined;
  loader?: ImageLoader | undefined;
  quality?: SafeNumber | undefined;
  priority?: boolean | undefined;
  loading?: LoadingValue;
  placeholder?: PlaceholderValue | undefined;
  blurDataURL?: string | undefined;
  onClick?: () => void;
  unoptimized?: boolean | undefined;
  placeholderImage?: string | StaticImport;
  onLoadingComplete?: OnLoadingComplete | undefined;
  /**
   * @deprecated Use `fill` prop instead of `layout="fill"` or change import to `next/legacy/image`.
   * @see https://nextjs.org/docs/api-reference/next/legacy/image
   */
  layout?: string | undefined;
  /**
   * @deprecated Use `style` prop instead.
   */
  objectFit?: string | undefined;
  /**
   * @deprecated Use `style` prop instead.
   */
  objectPosition?: string | undefined;
  /**
   * @deprecated This prop does not do anything.
   */
  lazyBoundary?: string | undefined;
  /**
   * @deprecated This prop does not do anything.
   */
  lazyRoot?: string | undefined;
  canBlur?: boolean;
} & React.RefAttributes<HTMLImageElement | null>;
const CustomImage = ({
  alt,
  src,
  placeholderImage,
  placeholder,
  onClick,
  canBlur,
  ...props
}: ImageType) => {
  const [image, setImage] = useState<string | StaticImport>(
    (src && src) || placeholderImage || ""
  );
  const [isLoading, setIsLoading] = useState(true);
  const isBlurPlaceholder = placeholder === "blur";
  const [isPlaceholderShown, setIsPlaceholderShown] = useState(
    isBlurPlaceholder && isLoading
  );

  useEffect(() => {
    if (src && typeof src === "string") {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoading(false);
      };
    }
  }, [src]);

  const handleImageError = () => {
    if (placeholderImage) {
      setImage(placeholderImage);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPlaceholderShown(isBlurPlaceholder && isLoading);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isBlurPlaceholder, isLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPlaceholderShown(isBlurPlaceholder && isLoading);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isBlurPlaceholder, isLoading]);

  return (
    <div>
      {isPlaceholderShown && canBlur && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(7.5px)",
            zIndex: 1,
          }}
        />
      )}
      <NextImage
        {...props}
        src={image}
        alt={alt}
        onClick={onClick}
        onError={handleImageError}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default CustomImage;

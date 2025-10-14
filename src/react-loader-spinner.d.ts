declare module "react-loader-spinner/dist/loader/Audio" {
  import * as React from "react";

  interface AudioProps {
    height?: number | string;
    width?: number | string;
    radius?: number | string;
    color?: string;
    ariaLabel?: string;
    wrapperStyle?: React.CSSProperties;
    wrapperClass?: string;
    visible?: boolean;
  }

  const Audio: React.ComponentType<AudioProps>;
  export default Audio;
}

import React, { FC } from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;
interface IconBaseProps extends SvgProps {
  src?: string;
  Svg?: React.VFC<SvgProps>;
  width?: number | string;
  height?: number | string;
  alt?: string;
}

export const IconLoader: FC<IconBaseProps> = (props) => {
  const {  Svg, src, width, height, alt } = props;

  if (src) {
    return (
      <img src={src} width={width} height={height} alt={alt} />
    );
  }

  if (Svg) {
    return (
      <Svg
        width={width}
        height={height}
        fill={"currentColor"}
        stroke={"currentColor"}
      />
    );
  }

  return null;
};

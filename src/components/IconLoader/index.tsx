import React, { FC } from "react";
import classNames from "classnames";

type SvgProps = React.SVGProps<SVGSVGElement>;

interface IconBaseProps extends SvgProps {
  className?: string;
  src?: string;
  Svg?: React.VFC<SvgProps>;
  width?: number | string;
  height?: number | string;
  alt?: string;
}

export const IconLoader: FC<IconBaseProps> = (props) => {
  const { className, Svg, src, width, height, alt } = props;

  if (src) {
    return (
      <img className={classNames(className)} src={src} width={width} height={height} alt={alt} />
    );
  }

  if (Svg) {
    return (
      <Svg
        className={classNames(className)}
        width={width}
        height={height}
        fill={"currentColor"}
        stroke={"currentColor"}
      />
    );
  }

  return null;
};

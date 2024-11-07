"use client";

import { CSSProperties, HTMLAttributes, useEffect, useMemo, useState } from "react";
import { animated, useSpring } from "react-spring";

const defaultProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: "50%",
      cy: "23%",
    },
    svg: {
      transform: "rotate(40deg)",
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: "100%",
      cy: "0%",
    },
    svg: {
      transform: "rotate(90deg)",
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

let REACT_TOGGLE_DARK_MODE_GLOBAL_ID = 0;

type SVGProps = Omit<HTMLAttributes<HTMLOrSVGElement>, "onChange">;
export interface Props extends SVGProps {
  onChange: () => void;
  checked: boolean;
  style?: CSSProperties;
  size?: number | string;
  moonColor?: string;
  sunColor?: string;
}

/**
 * A React functional component that renders a dark mode switch button.
 * The switch toggles between sun and moon icons to represent light and dark modes.
 * @param {Object} props - The component props
 * @param {Function} props.onChange - Callback function triggered when the switch is toggled
 * @param {React.ReactNode} props.children - Child elements to render (not used in this component)
 * @param {boolean} [props.checked=false] - Whether the switch is in dark mode (checked) or light mode (unchecked)
 * @param {number} [props.size=24] - The size of the switch icon in pixels
 * @param {string} [props.moonColor="rgb(229 231 235)"] - The color of the moon icon in dark mode
 * @param {string} [props.sunColor="#242526"] - The color of the sun icon in light mode
 * @param {React.CSSProperties} [props.style] - Additional styles to apply to the svg element
 * @param {Object} [props.rest] - Any other props to spread onto the svg element
 * @returns {JSX.Element} A div containing an animated svg that represents the dark mode switch
 */
export const DarkModeSwitch: React.FC<Props> = ({
  onChange,
  children,
  checked = false,
  size = 24,
  moonColor = "rgb(229 231 235)",
  sunColor = "#242526",
  style,
  ...rest
}) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    REACT_TOGGLE_DARK_MODE_GLOBAL_ID += 1;
    setId(REACT_TOGGLE_DARK_MODE_GLOBAL_ID);
  }, [setId]);

  const { circle, svg, lines, mask } = defaultProperties[checked ? "dark" : "light"];

  const svgContainerProps = useSpring({
    ...svg,
    config: defaultProperties.springConfig,
  });
  const centerCircleProps = useSpring({
    ...circle,
    config: defaultProperties.springConfig,
  });
  const maskedCircleProps = useSpring({
    ...mask,
    config: defaultProperties.springConfig,
  });
  const linesProps = useSpring({
    ...lines,
    config: defaultProperties.springConfig,
  });

  const uniqueMaskId = `circle-mask-${id}`;

  return (
    <div
      onClick={onChange}
      className="
        h-10
        rounded-full 
        p-2 
        bg-gray-100 
        text-gray-600 
        cursor-pointer 
        hover:opacity-75 
        transition
        dark:bg-lightgray
        dark:text-gray-200
      "
    >
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color={checked ? moonColor : sunColor}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        style={{
          ...svgContainerProps,
          ...style,
        }}
        {...rest}
      >
        <mask id={uniqueMaskId}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle
            // @ts-ignore
            style={maskedCircleProps}
            r="9"
            fill="black"
          />
        </mask>

        <animated.circle
          cx="12"
          cy="12"
          fill={checked ? moonColor : sunColor}
          // @ts-ignore
          style={centerCircleProps}
          mask={`url(#${uniqueMaskId})`}
        />
        <animated.g stroke="currentColor" style={linesProps}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </animated.g>
      </animated.svg>
    </div>
  );
};

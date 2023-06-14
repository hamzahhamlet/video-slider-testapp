import { useState, useEffect, useRef, FC } from "react";

interface AspectRatioProps {
  children: JSX.Element;
  ratio: number;
  style?: any;
}

const AspectRatio: FC<AspectRatioProps> = ({
  children,
  ratio = 1,
  style = {},
}) => {
  const [width, setWidth] = useState(0);
  const clientRef = useRef<any>(null);

  useEffect(() => {
    let calculatedWidh = clientRef.current?.clientHeight * ratio;
    setWidth(calculatedWidh);
  }, []);

  return (
    <div ref={clientRef} style={{ ...style, width: `${width}px` }}>
      {children}
    </div>
  );
};

export default AspectRatio;

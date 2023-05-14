import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
const createWrapperAndAppendToBody = (wrapperId: string) => {
  if (!document) return null;
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const ReactPortal = ({
  children,
  wrapperId,
}: {
  children: React.ReactElement;
  wrapperId: string;
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    // if element is not present in the DOM, create it and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element!);

    return () => {
      if (systemCreated && element?.parentNode) {
        element?.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);
  // wrapperElement is null when on first render
  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
};

export default ReactPortal;

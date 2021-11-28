import { useEffect, useRef } from "react";

const useClickOutside = passedHandler => {
  let elRef = useRef();
  useEffect(() => {
    let handler = event => {
      if (!elRef.current.contains(event.target)) {
        passedHandler();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return elRef;
};

export default useClickOutside;

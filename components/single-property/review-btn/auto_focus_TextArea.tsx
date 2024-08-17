import React, { useEffect, useRef, useState } from "react";
import { Textarea, TextareaProps } from "@/components/ui/textarea";

const AutoFocusTextarea = (props: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleFocus = () => {
      setIsKeyboardOpen(true);
    };

    const handleBlur = () => {
      setIsKeyboardOpen(false);
    };

    const textarea = textareaRef.current;
    textarea?.addEventListener("focus", handleFocus);
    textarea?.addEventListener("blur", handleBlur);

    return () => {
      textarea?.removeEventListener("focus", handleFocus);
      textarea?.removeEventListener("blur", handleBlur);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const currentViewportHeight = window.innerHeight;
      const rect = textareaRef.current?.getBoundingClientRect();
      const bottomSpace = currentViewportHeight - (rect?.bottom || 0);

      // If the distance to the bottom is more than 5vh, close the keyboard
      if (bottomSpace > currentViewportHeight * 0.05) {
        setIsKeyboardOpen(false);
      }

      // If the viewport height increases (keyboard closed), blur the textarea if necessary
      if (
        currentViewportHeight > viewportHeight &&
        bottomSpace < currentViewportHeight * 0.05
      ) {
        textareaRef.current?.blur();
      }

      setViewportHeight(currentViewportHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewportHeight]);

  return (
    <Textarea
      {...props}
      ref={textareaRef}
      style={{
        position: isKeyboardOpen ? "fixed" : "relative",
        bottom: isKeyboardOpen ? "10px" : "auto",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 20px)", // Adjusted to ensure it stays within the viewport with some padding
        zIndex: 1000,
      }}
    />
  );
};

export default AutoFocusTextarea;

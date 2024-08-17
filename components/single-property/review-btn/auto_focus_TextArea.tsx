import React, { useEffect, useRef, useState } from "react";
import { Textarea, TextareaProps } from "@/components/ui/textarea";

const AutoFocusTextarea = (props: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

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
    let lastViewportHeight = window.innerHeight;

    const handleResize = () => {
      const currentViewportHeight = window.innerHeight;
      const rect = textareaRef.current?.getBoundingClientRect();
      const bottomSpace = currentViewportHeight - (rect?.bottom || 0);

      // Detect if the keyboard has closed by checking if the viewport height has increased
      if (
        currentViewportHeight > lastViewportHeight &&
        bottomSpace < currentViewportHeight * 0.05
      ) {
        textareaRef.current?.blur();
      }

      lastViewportHeight = currentViewportHeight;

      if (isKeyboardOpen && bottomSpace < 0) {
        window.scrollTo(0, document.body.scrollHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isKeyboardOpen]);

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

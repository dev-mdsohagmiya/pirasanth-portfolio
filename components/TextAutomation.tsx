import React from "react";
import { Transition } from "@headlessui/react";

type TextAutomationProps = {
  text: string;
  start: number;
  end: number;
};

const TextAutomation = ({ text, start, end }: TextAutomationProps) => {
  const [showText, setShowText] = React.useState(false);

  React.useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <>
      <Transition
        className="inline-block"
        show={showText}
        enter={`transition-transform duration-${start}`}
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave={`transition-transform duration-${end}`}
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        appear={true}
      >
        {(ref) => (
          <div ref={ref} style={{ direction: "rtl" }}>
            <span className="animate-bounce mr-2">{text}</span>
          </div>
        )}
      </Transition>
    </>
  );
};

export default TextAutomation;

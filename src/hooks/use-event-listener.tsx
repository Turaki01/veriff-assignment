import React from "react";

export default function useEventListener(
  eventName: string,
  handler: Function,
  element = window
) {
  const savedHandler = React.useRef<{} | any>();
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    const eventListener = (event: any) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

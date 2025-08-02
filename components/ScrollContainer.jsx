"use client";

import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/Button";
import { useCallback, useRef } from "react";

export const ScrollContainer = ({ children }) => {
  const scrollContainerRef = useRef(null);

  const scroll = useCallback((direction) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const containerWidth = container.clientWidth;
    const scrollAmount = containerWidth * 0.8;

    const targetScroll =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative group">
      <Button
        onClick={() => scroll("left")}
        size="sm"
        variant="scroll"
        className="left-0 rounded-r-md"
        aria-label="Scroll left"
        icon={<Icons.chevronLeft className="w-6 h-6" />}
      />

      <Button
        onClick={() => scroll("right")}
        size="sm"
        variant="scroll"
        className="right-0 rounded-l-md"
        aria-label="Scroll right"
        icon={<Icons.chevronRight className="w-6 h-6" />}
      />

      {/* Scrollable content */}
      <div
        ref={scrollContainerRef}
        className="scroll-container scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        tabIndex={0}
        aria-label="Scrollable content section"
      >
        {children}
      </div>
    </div>
  );
};

ScrollContainer.displayName = "ScrollContainer";

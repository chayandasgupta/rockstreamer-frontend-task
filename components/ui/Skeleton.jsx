export const Skeleton = ({
  width = "100%",
  height = "1rem",
  className = "",
  rounded = "md",
  animate = true,
}) => {
  const roundedClasses = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <div
      className={`bg-gray-200 ${animate ? "animate-pulse" : ""} ${
        roundedClasses[rounded]
      } ${className}`}
      style={{ width, height }}
    />
  );
};

Skeleton.displayName = "Skeleton";

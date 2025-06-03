import useBreakpoint from "@hooks/useBreakpoint";
import styles from "./Label.module.css";
import clsx from "clsx";

export function Label({
  children,
  className,
  ...props
}) {
  const { getResponsiveSize, getResponsiveSpacing } = useBreakpoint();
  return (
    <label
      className={clsx(
        styles.label,
        `size-${getResponsiveSize()}`,
        styles[`spacing-${getResponsiveSpacing()}`],
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}

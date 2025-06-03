import useBreakpoint from "@hooks/useBreakpoint";
import styles from "./Typography.module.css";
import clsx from "clsx";

const ELEMENT_MAP = {
  h1: 'h1',
  h2: 'h2', 
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  label: 'label',
  div: 'div'
};

export function Typography({
  children,
  variant = 'p', // h1, h2, h3, h4, h5, h6, p, span, label
  size = 'responsive', // xs, sm, md, lg, xl, responsive
  spacing = 'responsive', // none, xs, sm, md, lg, responsive
  className,
  ...props
}) {
  const { breakpoint } = useBreakpoint();
  
  const getResponsiveSize = () => {
    if (size !== 'responsive') return size;
    
    // Map variants to appropriate responsive sizes
    const variantSizeMap = {
      h1: { xs: 'lg', sm: 'xl', md: 'xl', lg: 'xl', xl: 'xl' },
      h2: { xs: 'md', sm: 'lg', md: 'lg', lg: 'lg', xl: 'lg' },
      h3: { xs: 'md', sm: 'md', md: 'md', lg: 'md', xl: 'md' },
      h4: { xs: 'sm', sm: 'md', md: 'md', lg: 'md', xl: 'md' },
      h5: { xs: 'sm', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' },
      h6: { xs: 'xs', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' },
      p: { xs: 'sm', sm: 'sm', md: 'md', lg: 'md', xl: 'md' },
      span: { xs: 'sm', sm: 'sm', md: 'md', lg: 'md', xl: 'md' },
      label: { xs: 'sm', sm: 'sm', md: 'md', lg: 'md', xl: 'md' }
    };
    
    return variantSizeMap[variant]?.[breakpoint] || 'md';
  };

  const getResponsiveSpacing = () => {
    if (spacing !== 'responsive') return spacing;
    
    const variantSpacingMap = {
      h1: { xs: 'md', sm: 'md', md: 'lg', lg: 'lg', xl: 'lg' },
      h2: { xs: 'sm', sm: 'md', md: 'md', lg: 'md', xl: 'md' },
      h3: { xs: 'sm', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' },
      h4: { xs: 'xs', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' },
      h5: { xs: 'xs', sm: 'xs', md: 'xs', lg: 'xs', xl: 'xs' },
      h6: { xs: 'xs', sm: 'xs', md: 'xs', lg: 'xs', xl: 'xs' },
      p: { xs: 'sm', sm: 'sm', md: 'sm', lg: 'sm', xl: 'sm' },
      span: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
      label: { xs: 'xs', sm: 'xs', md: 'sm', lg: 'sm', xl: 'sm' }
    };
    
    return variantSpacingMap[variant]?.[breakpoint] || 'sm';
  };

  const Element = ELEMENT_MAP[variant] || 'p';
  const finalSize = getResponsiveSize();
  const finalSpacing = getResponsiveSpacing();

  return (
    <Element
      className={clsx(
        styles.typography,
        styles[`variant-${variant}`],
        styles[`size-${finalSize}`],
        styles[`spacing-${finalSpacing}`],
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
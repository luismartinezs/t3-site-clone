import classnames from "classnames";

export function Paragraph(props: React.ComponentPropsWithoutRef<"p">) {
  const { className, ...otherProps } = props;
  return (
    <p
      className={classnames(
        "prose prose-invert text-primary-300 lg:prose-xl",
        className
      )}
      {...otherProps}
    >
      {props.children}
    </p>
  );
}

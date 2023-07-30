import classnames from "classnames";

const colors = {
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
};

function Dot({
  color,
  size = 12,
}: {
  color: keyof typeof colors;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className={classnames("rounded-full", colors[color])}
    />
  );
}

export function Console(props: React.ComponentPropsWithoutRef<"pre">) {
  const { className, ...otherProps } = props;
  return (
    <div className="rounded-lg border border-primary-100/30 bg-primary-100/10 px-2 pb-10 pt-4 text-[10px] leading-[1.4]">
      <div className="flex gap-2">
        <Dot color="red" />
        <Dot color="yellow" />
        <Dot color="green" />
      </div>
      <pre
        className={classnames(className, "mb-10 mt-3 whitespace-pre-wrap")}
        {...otherProps}
      >
        {props.children}
      </pre>
    </div>
  );
}

type Props = {
  variant: "warning" | "danger" | "success";
  icon: any;
  title: string;
};

const STYLE_MAP = {
  warning: "bg-yellow-50 border-yellow-500 text-yellow-700",
  danger: "bg-red-50 border-red-500 text-red-700",
  success: "bg-green-50 border-green-500 text-green-700",
};

const ICON_COLOR_MAP = {
  warning: "text-yellow-700",
  danger: "text-red-700",
  success: "text-green-700",
};

export function Alert(props: Props) {
  const { variant, icon: Icon, title } = props;
  const baseClassNames =
    "flex w-full items-center gap-2 my-2 text-base rounded-lg  p-2";
  const variantClassNames = STYLE_MAP[variant];
  return (
    <p className={`${baseClassNames} ${variantClassNames}`}>
      <Icon className={ICON_COLOR_MAP[variant]} /> <span>{title}</span>
    </p>
  );
}

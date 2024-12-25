import { cn } from "../lib/utils/cn";

interface HeaderProps {
  heading: string | null;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

type MyComponentProps = React.PropsWithChildren<HeaderProps>;

export function Header({
  heading,
  text,
  children,
  className,
}: MyComponentProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center mb-6 text-center",
        className
      )}
    >
      <div className="-space-y-0.5">
        <h3 className="text-[21px] font-medium text-primary mb-2">{heading}</h3>
        {text && (
          <p className="text-[#74777e] leading-4 text-[32px] font-medium">
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

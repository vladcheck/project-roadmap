import { ReactNode } from "react";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    icon?: ReactNode;
    onClick?: (...args: unknown[]) => void;
  }
) {
  const { icon, text, onClick } = props;
  return <button onClick={onClick}>{icon ?? text ?? ""}</button>;
}

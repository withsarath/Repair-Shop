import { ReactNode } from "react";

export default async function Templete({ children }: { children: ReactNode }) {
  return <div className="animate-appear">{children}</div>;
}

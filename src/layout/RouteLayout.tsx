import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

export default function RouteLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Outlet />
      {children}
    </div>
  );
}

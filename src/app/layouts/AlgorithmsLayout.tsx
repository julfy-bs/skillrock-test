import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

type AlgorithmsLayoutProps = {};

export function AlgorithmsLayout({}: AlgorithmsLayoutProps): ReactElement {
  return (
    <>
      <Outlet />
    </>
  );
}

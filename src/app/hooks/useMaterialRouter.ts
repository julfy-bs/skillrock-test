import { Router } from "@toolpad/core";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useMaterialRouter(initialPath: string): Router {
  const [pathname, setPathname] = useState(initialPath);
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => {
        navigate(path);
        setPathname(String(path));
      },
    };
  }, [pathname, navigate]);
}

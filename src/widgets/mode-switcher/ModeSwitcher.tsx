import DarkMode from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Switch } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import { useCallback, useEffect, useState } from "react";

export function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(mode === "dark");

  const switchMode = useCallback(() => {
    if (mode === "dark") {
      setMode("light");
      setIsDarkMode(false);
    } else {
      setMode("dark");
      setIsDarkMode(true);
    }
  }, [mode, setMode]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      size="lg"
      slotProps={{
        input: { "aria-label": "Dark mode" },
      }}
      startDecorator={<WbSunnyIcon />}
      endDecorator={<DarkMode />}
      sx={{ "--Switch-thumbSize": "16px" }}
      checked={isDarkMode}
      onChange={() => switchMode()}
    />
  );
}

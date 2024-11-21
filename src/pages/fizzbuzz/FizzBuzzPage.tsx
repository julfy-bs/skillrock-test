import { FizzBuzzComponent } from "@/features/fizz-buzz/FizzBuzzComponent.tsx";
import { CssVarsProvider, FormControl, FormLabel, Input } from "@mui/joy";
import { Box } from "@mui/material";
import { ChangeEvent, ReactElement, useCallback, useState } from "react";

export function FizzBuzzPage(): ReactElement {
  const [input, setInput] = useState<string>("");
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setIsDirty(true);
  }, []);

  return (
    <>
      <CssVarsProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <FormControl>
            <FormLabel>
              <Input
                size="lg"
                variant="soft"
                name="email"
                placeholder="Введите"
                type="number"
                value={input}
                autoComplete={"off"}
                onChange={(e) => handleChange(e)}
              />
            </FormLabel>
          </FormControl>
          <FizzBuzzComponent isDirty={isDirty} stringifiedNumber={input} />
        </Box>
      </CssVarsProvider>
    </>
  );
}

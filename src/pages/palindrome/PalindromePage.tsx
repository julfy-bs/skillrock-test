import { Palindrome } from "@/features/palindrome/Palindrome.tsx";
import { CssVarsProvider, FormControl, FormLabel, Input } from "@mui/joy";
import { ChangeEvent, ReactElement, useCallback, useState } from "react";

type PalindromePageProps = {};

export function PalindromePage({}: PalindromePageProps): ReactElement {
  const [input, setInput] = useState<string>("");
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
      setIsDirty(true);
    },
    [input],
  );

  return (
    <>
      <CssVarsProvider>
        <FormControl>
          <FormLabel>
            <Input
              size="lg"
              variant="soft"
              name="email"
              placeholder="Введите"
              value={input}
              autoComplete={"off"}
              onChange={(e) => handleChange(e)}
            />
          </FormLabel>
        </FormControl>
      </CssVarsProvider>
      <Palindrome isDirty={isDirty} stringToCheck={input} />
    </>
  );
}

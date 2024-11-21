import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { ReactElement, useMemo } from "react";
import { isPalindrome } from "./palindrome";

type PalindromeProps = {
  stringToCheck: string;
  isDirty: boolean;
};

export function Palindrome({
  stringToCheck,
  isDirty,
}: PalindromeProps): ReactElement {
  const isPalindromeValue = useMemo(() => {
    return isPalindrome(stringToCheck);
  }, [stringToCheck]);

  return (
    <>
      {isDirty &&
        (isPalindromeValue ? (
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              color: "green",
            }}
          >
            <CheckIcon />
            <Typography>Это палиндром</Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              color: "red",
            }}
          >
            <CloseIcon />
            <Typography>Это НЕ палиндром</Typography>
          </Box>
        ))}
    </>
  );
}

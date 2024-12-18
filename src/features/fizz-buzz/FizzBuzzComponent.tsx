import { Chip, Stack } from '@mui/joy';
import { ReactElement, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { fizzBuzz } from './fizzBuzz.ts';

type FizzBuzzComponentProps = {
  stringifiedNumber: string;
  isDirty: boolean;
};

export function FizzBuzzComponent({
  stringifiedNumber,
  isDirty,
}: FizzBuzzComponentProps): ReactElement {
  const elements: string[] = useMemo(() => {
    return fizzBuzz(+stringifiedNumber);
  }, [stringifiedNumber]);

  return (
    <>
      {+stringifiedNumber && isDirty && elements.length > 0 && (
        <Stack
          direction="row"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            gap: "8px",
          }}
        >
          {elements
            .map((item: string) => (
              <Chip
                component={"span"}
                key={uuid()}
                sx={{
                  minWidth: "60px",
                  width: "100%",
                }}
              >
                {item}
              </Chip>
            ))
            .reverse()}
        </Stack>
      )}
    </>
  );
}

import { chunkArray } from "@/features/chunk-array/chunkArray.ts";
import { Chip, Stack } from "@mui/joy";
import { Typography } from "@mui/material";
import { ReactElement, useMemo } from "react";
import { v4 as uuid } from "uuid";

type ChunkArrayComponentProps = {
  array: number[];
  size: number;
  isDataReady: boolean;
};

export function ChunkArrayComponent({
  array,
  size,
  isDataReady,
}: ChunkArrayComponentProps): ReactElement {
  const elements: number[][] | number[] = useMemo(() => {
    const result: number[][] | number[] = chunkArray(array, size);
    console.log(result);
    return result;
  }, [array, size]);

  return (
    <>
      {elements.length > 0 && isDataReady && (
        <Stack
          direction="row"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
            gap: "8px",
            width: "100%",
          }}
        >
          {elements
            .map((item: number[] | number) => (
              <Chip
                variant="plain"
                component={"span"}
                key={uuid()}
                sx={{
                  minWidth: "60px",
                  width: "100%",
                }}
                children={
                  Array.isArray(item) ? (
                    item.map((number) => (
                      <Typography key={uuid()}>{number}</Typography>
                    ))
                  ) : (
                    <Typography>{item}</Typography>
                  )
                }
              />
            ))
            .reverse()}
        </Stack>
      )}
    </>
  );
}
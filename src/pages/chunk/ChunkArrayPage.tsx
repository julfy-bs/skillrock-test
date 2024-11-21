import { ChunkArrayComponent } from "@/features/chunk-array/ChunkArrayComponent.tsx";
import {
  Button,
  CssVarsProvider,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import { Box } from "@mui/material";
import {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type ChunkArrayPageProps = {};

export function ChunkArrayPage({}: ChunkArrayPageProps): ReactElement {
  const [size, setSize] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [array, setArray] = useState<null | number[]>(null);

  const isDataReady = useMemo(() => {
    return !!(+size && array && array?.length > 0);
  }, [size, array]);

  const handleSizeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value);
  }, []);

  const handleLengthChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLength(e.target.value);
  }, []);

  const generateArray = useCallback((length: number) => {
    const generatedArray: number[] = Array.from({ length: length }, () =>
      Math.floor(Math.random() * length),
    );
    setArray(generatedArray);
  }, []);

  useEffect(() => {
    console.log(array);
  }, [array?.length]);

  return (
    <>
      <CssVarsProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
            minWidth: "80%",
          }}
        >
          <FormControl>
            <FormLabel>
              <Input
                size="lg"
                variant="soft"
                name="size"
                placeholder="Размер"
                type="number"
                value={size}
                autoComplete={"off"}
                onChange={(e) => handleSizeChange(e)}
              />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              <Input
                size="lg"
                variant="soft"
                name="length"
                placeholder="Массив из * элементов"
                type="number"
                value={length}
                autoComplete={"off"}
                onChange={(e) => handleLengthChange(e)}
              />
            </FormLabel>
          </FormControl>
          <Button disabled={!length} onClick={() => generateArray(+length)}>
            Button
          </Button>
          {isDataReady && array && (
            <ChunkArrayComponent
              isDataReady={isDataReady}
              array={array}
              size={+size}
            />
          )}
        </Box>
      </CssVarsProvider>
    </>
  );
}

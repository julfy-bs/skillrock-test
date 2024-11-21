import { ROUTES } from "@/app/router/config.ts";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import type { Navigation } from "@toolpad/core";

export const navigation: Navigation = [
  {
    kind: "header",
    title: "Тестовое задание",
  },
  {
    segment: ROUTES.ALGORITHMS.BASE,
    title: "Алгоритмы",
    icon: <BarChartIcon />,
    children: [
      {
        segment: ROUTES.ALGORITHMS.PALINDROME,
        title: "Палиндром",
        icon: <DescriptionIcon />,
      },
      {
        segment: ROUTES.ALGORITHMS.FIZZBUZZ,
        title: "Fizz Buzz",
        icon: <DescriptionIcon />,
      },
      {
        segment: ROUTES.ALGORITHMS.CHUNK,
        title: "Chunk Array",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: ROUTES.TODO,
    title: "Туду лист",
    icon: <LayersIcon />,
  },
];

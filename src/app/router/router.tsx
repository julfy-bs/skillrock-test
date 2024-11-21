import { AlgorithmsLayout } from "@/app/layouts/AlgorithmsLayout.tsx";
import { DefaultLayout } from "@/app/layouts/DefaultLayout.tsx";
import { ROUTES } from "@/app/router/config.ts";
import { FizzBuzzPage } from "@/pages/fizzbuzz/FizzBuzzPage.tsx";
import { PalindromePage } from "@/pages/palindrome/PalindromePage.tsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTES.ALGORITHMS.BASE,
        element: <AlgorithmsLayout />,
        children: [
          {
            path: ROUTES.ALGORITHMS.PALINDROME,
            element: <PalindromePage />,
          },
          {
            path: ROUTES.ALGORITHMS.FIZZBUZZ,
            element: <FizzBuzzPage />,
          },
          {
            path: ROUTES.ALGORITHMS.CHUNK,
            element: <h1>chunk</h1>,
          },
        ],
      },
      {
        path: ROUTES.TODO,
        element: <h1>TODO app</h1>,
      },
    ],
  },
]);

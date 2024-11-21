import { navigation } from "@/app/config/navigation.tsx";
import { theme } from "@/app/config/theme.ts";
import { useMaterialRouter } from "@/app/hooks/useMaterialRouter.ts";
import { Box } from "@mui/material";
import { AppProvider } from "@toolpad/core";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export function DefaultLayout(): ReactElement {
  const router = useMaterialRouter("/");

  return (
    <>
      <AppProvider navigation={navigation} theme={theme} router={router}>
        <DashboardLayout>
          <Box
            sx={{
              py: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Outlet />
          </Box>
        </DashboardLayout>
      </AppProvider>
    </>
  );
}

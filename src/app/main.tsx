import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './main.css';

const theme = extendTheme();

createRoot(document.getElementById('root')!)
	.render(
		<StrictMode>
			<CssVarsProvider theme={ theme }>
				<CssBaseline />
				<RouterProvider router={ router } />
			</CssVarsProvider>
		</StrictMode>,
	);

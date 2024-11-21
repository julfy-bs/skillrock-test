/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASE_API: string;
	readonly VITE_API_KEY: string;
	readonly VITE_API_RESULTS: string;
	readonly VITE_API_URL: string;
	readonly VITE_API_PICTURES_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
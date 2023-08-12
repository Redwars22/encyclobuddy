export type IContent = {
    url: string;
    font: "serif" | "sans-serif" | "monospace";
    size: string;
    theme: "light" | "creme" | "dark";
    language: "en" | "pt" | "la" | string;
}

export type IURLParams = {}
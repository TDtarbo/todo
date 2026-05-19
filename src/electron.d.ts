export {};

declare global {
    interface Window {
        api: {
            getMessage: () => Promise<string>;
        };
    }
}

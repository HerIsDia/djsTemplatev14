// index.ts > EventHandler
export interface EventHandler {
    name: string;
    once?: boolean;
    run: (...args: any[]) => void | Promise<void>;
}
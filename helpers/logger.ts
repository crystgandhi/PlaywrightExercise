export class Logger {
 
    static warn(message: string): void {
        console.warn(`[WARN] ${message}`);
    }
    static success(message: string): void {
        console.log(`[SUCCESS] ${message}`);
    }
    private static getTime(): string {
        return new Date().toLocaleString();
    }
    static info(message: string): void {
        console.log(`[INFO] [${this.getTime()}] ${message}`);
    }
    static error(message: string): void {
        console.error(`[ERROR] [${this.getTime()}] ${message}`);
    }
}
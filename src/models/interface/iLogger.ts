export interface ILogger {
  log: (...args: any[]) => void
  error: (...args: any[]) => void
  info: (...args: any[]) => void
  warn: (...args: any[]) => void
}
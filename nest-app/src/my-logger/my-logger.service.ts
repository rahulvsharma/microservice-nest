import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: unknown, context?: unknown): void {
    // const entry = `${context}\t${message}`;
    super.log(message, context);
  }

  error(message: unknown, stack?: unknown, context?: unknown): void {
    super.error(message, context);
  }
}

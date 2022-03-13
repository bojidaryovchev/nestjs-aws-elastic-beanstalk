import { INestApplication } from '@nestjs/common';
import helmet from 'helmet';
import isProduction from '../utilities/isProduction';

export default async function (app: INestApplication): Promise<void> {
  // Only enable helmet in production, otherwise it messes up the GraphQL Playground
  if (isProduction()) {
    app.use(helmet());
  }
}

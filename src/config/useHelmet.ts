import { INestApplication } from '@nestjs/common';
import helmet from 'helmet';

export default async function (app: INestApplication): Promise<void> {
  app.use(helmet());
}

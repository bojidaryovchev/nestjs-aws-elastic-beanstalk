import { INestApplication } from '@nestjs/common';
import * as csurf from 'csurf';

export default async function (app: INestApplication): Promise<void> {
  app.use(csurf());
}

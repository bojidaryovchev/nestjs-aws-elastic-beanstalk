import { INestApplication } from '@nestjs/common';
import { API_VERSION } from '../constants/version';

export default async function (app: INestApplication): Promise<void> {
  app.setGlobalPrefix(API_VERSION);
}

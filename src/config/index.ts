import { INestApplication } from '@nestjs/common';
import useGlobalPrefix from './useGlobalPrefix';
import useHelmet from './useHelmet';
import usePrisma from './usePrisma';
import useSwagger from './useSwagger';

export default async function (app: INestApplication): Promise<void> {
  await usePrisma(app);
  // Note: the global prefix needs to be set *before* Swagger is initialized
  await useGlobalPrefix(app);
  await useSwagger(app);
  await useHelmet(app);
}

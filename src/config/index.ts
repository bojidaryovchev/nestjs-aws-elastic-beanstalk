import { INestApplication } from '@nestjs/common';
import { PRODUCTION } from '../constants/environment';
import useGlobalPrefix from './useGlobalPrefix';
import useHelmet from './useHelmet';
import usePrisma from './usePrisma';
import useSwagger from './useSwagger';

async function useCommon(app: INestApplication): Promise<void> {
  // Note: the global prefix needs to be set *before* Swagger is initialized
  await useGlobalPrefix(app);
  await usePrisma(app);
}

async function useProduction(app: INestApplication): Promise<void> {
  await useHelmet(app);
}

async function useDevelopment(app: INestApplication): Promise<void> {
  await useSwagger(app);
}

export default async function (app: INestApplication): Promise<void> {
  await useCommon(app);

  if (PRODUCTION) {
    await useProduction(app);
  } else {
    await useDevelopment(app);
  }
}

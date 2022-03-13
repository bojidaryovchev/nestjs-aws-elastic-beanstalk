import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../modules/prisma/services/prisma.service';

export default async function (app: INestApplication): Promise<void> {
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
}

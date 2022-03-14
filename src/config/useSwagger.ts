import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default async function (app: INestApplication): Promise<void> {
  const config = new DocumentBuilder().setTitle('Swagger API').setDescription('OpenAPI documentation').build();

  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true,
  });

  SwaggerModule.setup('swagger', app, document);
}

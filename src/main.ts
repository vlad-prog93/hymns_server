import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

async function server() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)

  app.enableCors({ origin: 'http://localhost:3000' })

  await app.listen(PORT, () => console.log(`Server has been started in PORT = ${PORT}`))
}
server()

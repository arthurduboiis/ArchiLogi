import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [PrismaModule, AuthModule, HelloModule],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard }
  ]
})
export class AppModule {}

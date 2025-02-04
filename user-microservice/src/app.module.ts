import { Module } from '@nestjs/common';

import { EnvModule } from '@config/env/env.module';
import { PrismaService } from '@shared/prisma/prisma.service';
import { PrismaModule } from '@shared/prisma/prisma.module';
import { UserModule } from '@app/user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwtAuth.guard';
import { TransactionModule } from '@app/transaction/transaction.module';

@Module({
  imports: [PrismaModule, EnvModule, UserModule, AuthModule, TransactionModule],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

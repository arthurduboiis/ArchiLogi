import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { SandwichController } from './sandwich.controller';
import { SandwichService } from './sandwich.service';

@Module({
    imports: [PrismaModule],
    controllers: [SandwichController],
    providers: [SandwichService],
    exports: [SandwichService],
})
export class SandwichModule {}

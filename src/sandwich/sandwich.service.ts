import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class SandwichService {
  constructor(private prisma: PrismaService) {}

  async getAllSandwichs() {
    return this.prisma.sandwich.findMany();
  }
}

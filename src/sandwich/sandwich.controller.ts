import { Controller, Get } from '@nestjs/common';
import { SandwichService } from './sandwich.service';

@Controller('sandwich')
export class SandwichController {
  constructor(private readonly sandwichService: SandwichService) {}

  @Get()
  getAllSandwichs() {
    return this.sandwichService.getAllSandwichs();
  }
}

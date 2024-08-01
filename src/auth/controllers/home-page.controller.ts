import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HomePageController {
  @Get()
  async hello() {
    return {
      message: 'Hello World!',
    };
  }
}

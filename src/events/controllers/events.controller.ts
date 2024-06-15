import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { CreateEventDto } from '../dtos/ceate-event.dto';
import { UpdateEventDto } from '../dtos/update-event.dto';

@Controller('/events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name);
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  @Get()
  async getAllEvents() {
    return await this.repository.find();
  }

  @Get(':id')
  async getEventById(@Param('id') id) {
    const event = await this.repository.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }
  }

  @Post()
  async createEvent(@Body() input: CreateEventDto) {
    await this.repository.save({
      ...input,
      eventDate: new Date(input.eventDate),
    });
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() input: UpdateEventDto) {
    const event = await this.repository.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }

    return await this.repository.save({
      ...event,
      ...input,
      eventDate: input.eventDate ? new Date(input.eventDate) : event.eventDate,
    });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id) {
    const event = await this.repository.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }

    await this.repository.remove(event);
  }
}

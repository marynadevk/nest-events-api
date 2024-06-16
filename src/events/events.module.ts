import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './controllers/events.controller';
import { Event } from './entities/event.entity';
import { UsersModule } from '../users/users.module';
import { EventsService } from './services/events.service';
import { CurrentUserEventAttendanceController } from './controllers/current-user-event-attendance.controller';
import { EventsOrganizedByUserController } from './controllers/events-organized-by-user.controller';
import { AttendeesService } from './services/attendees.service';
import { Attendee } from './entities/attendee.entity';
import { EventAttendeesController } from './controllers/event-attendees.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Attendee]), UsersModule],
  controllers: [
    EventsController,
    CurrentUserEventAttendanceController,
    EventsOrganizedByUserController,
    EventAttendeesController,
  ],
  providers: [EventsService, AttendeesService],
})
export class EventsModule {}

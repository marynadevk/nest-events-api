import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthService } from './services/auth.service';
import { UserController } from '../users/controllers/user.controller';
import { AuthResolver } from './auth.resolver';
import { UserResolver } from '../users/user.resolver';
import { UserService } from '../users/services/user.service';
import { UserDoesNotExistConstraint } from '../users/validators/user-does-not-exist.constraint';
import { HomePageController } from './controllers/home-page.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.AUTH_SECRET,
        signOptions: {
          expiresIn: '60m',
        },
      }),
    }),
  ],
  providers: [
    LocalStrategy,
    JwtStrategy,
    AuthService,
    AuthResolver,
    UserResolver,
    UserService,
    UserDoesNotExistConstraint,
  ],
  controllers: [AuthController, UserController, HomePageController],
})
export class AuthModule {}

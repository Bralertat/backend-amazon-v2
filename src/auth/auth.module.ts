import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PrismaService } from 'src/prisma.service'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getJwtConfig } from 'src/config/jwt.config'
import { JwtStrategy } from './jwt.strategy'
import { UserService } from 'src/user/user.service'
import { UserModule } from 'src/user/user.module'

@Module({
  controllers: [AuthController],
  //providers это те которые мы инжектируем в другие классы
  providers: [AuthService, JwtStrategy, PrismaService, UserService],
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig
    }),
    UserModule
  ]
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { MemberModule } from './member/member.module';
import { LendModule } from './lend/lend.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'booklending',
      entities: ['dist/**/*.entity{.ts,.js}'],
      entityPrefix: 'bl_',
      synchronize: true,
    }),
    // TypeOrmModule.forFeature([User]),
    AuthModule,
    MemberModule,
    LendModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

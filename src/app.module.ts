import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { ChannelsModule } from './channels/channels.module';
// import { ProfileModule } from './profile/profile.module';
// import { CommunityModule } from './community/community.module';
// import { DmModule } from './dm/dm.module';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule],
  // imports: [UsersModule, ChannelsModule, ProfileModule, CommunityModule, DmModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

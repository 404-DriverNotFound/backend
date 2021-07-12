import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  // JoinTable,
  // ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChannelChats } from './ChannelChats';
import { ChannelMembers } from './ChannelMembers';
import { DMs } from './DMs';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
// import { Channels } from './Channels';
// import { Mentions } from './Mentions';
// import { WorkspaceMembers } from './WorkspaceMembers';
// import { Workspaces } from './Workspaces';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'amin_db', name: 'users' })
export class Users {
  @ApiProperty({
    example: 1,
    description: '사용자 아이디',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsEmail()
  @ApiProperty({
    example: 'amin@student.42seoul.kr',
    description: '사용자 이메일',
  })
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'amin',
    description: '닉네임',
  })
  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => ChannelChats, (channelchats) => channelchats.User)
  ChannelChats: ChannelChats[];

  @OneToMany(() => ChannelMembers, (channelmembers) => channelmembers.User)
  ChannelMembers: ChannelMembers[];

  @OneToMany(() => DMs, (dms) => dms.Sender)
  DMs: DMs[];

  @OneToMany(() => DMs, (dms) => dms.Receiver)
  DMs2: DMs[];

//   @OneToMany(
//     () => WorkspaceMembers,
//     (workspacemembers) => workspacemembers.User,
//   )
//   WorkspaceMembers: WorkspaceMembers[];

//   @OneToMany(() => Workspaces, (workspaces) => workspaces.Owner)
//   OwnedWorkspaces: Workspaces[];

//   @ManyToMany(() => Workspaces, (workspaces) => workspaces.Members)
//   @JoinTable({
//     name: 'workspacemembers',
//     joinColumn: {
//       name: 'UserId',
//       referencedColumnName: 'id',
//     },
//     inverseJoinColumn: {
//       name: 'WorkspaceId',
//       referencedColumnName: 'id',
//     },
//   })
//   Workspaces: Workspaces[];

//   @ManyToMany(() => Channels, (channels) => channels.Members)
//   @JoinTable({
//     name: 'channelmembers',
//     joinColumn: {
//       name: 'UserId',
//       referencedColumnName: 'id',
//     },
//     inverseJoinColumn: {
//       name: 'ChannelId',
//       referencedColumnName: 'id',
//     },
//   })
//   Channels: Channels[];
// }
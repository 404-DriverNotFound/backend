import { Controller, Get, Post, Body, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiProperty({
    description: '로그인 버튼을 누르면, 42 api로 콜백한다.',
  })
  @Post('login')
  clickLoginButton() {
    // 42api로 callback
    return this.usersService.findAll();
  }

  @ApiProperty({
    description: '회원가입한다.',
  })
  @Post('signUp')
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.signUp(createUserDto);
  }

  @ApiProperty({
    description: '사진을 업로드한다(TODO: url 미정)',
  })
  @UseInterceptors(FileInterceptor('file'))
  @Post('image')
  uploadFile(
    @Body() body: CreateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return {
      body,
      file: file.buffer.toString(),
    };
  }

  @ApiProperty({
    description: 'Main page로 이동',
  })
  @Get()
  clickStartButton() {}

  @ApiProperty({
    description: '2FA page로 이동',
  })
  @Get('2fa')
  click2FAButton() {}

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}

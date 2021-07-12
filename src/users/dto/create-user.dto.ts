import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'amin',
    description: '닉네임',
  })
  nickname: string;

  @ApiProperty({
    example: 'image',
    description: '이미지',
  })
  image: string;
}

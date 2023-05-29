import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, NotContains, Length, Matches } from 'class-validator'

export class LoginDto {
    @ApiProperty({
        required: false,
        example: 'andychou@demo.com',
    })
    @IsNotEmpty({
        message: 'Email cannot be empty or whitespace'
    })
    @IsEmail({}, {
        message: 'Email should be email'
    })
    email: string

    @ApiProperty({
        required: true,
        example: 'andychou123',
    })
    @IsNotEmpty({
        message: 'Password cannot be empty or whitespace'
    })
    @NotContains(' ', {
        message: 'Password cannot be empty or whitespace'
    })
    @Length(8, 100, {
        message: 'Password must be between 8 and 100 characters long'
    })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/, {
        message: "at least one lower character, one upper character, one digit character, one special character"
    })
    password: string
}
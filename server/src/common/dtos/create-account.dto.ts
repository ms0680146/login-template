import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, NotContains, Length, Matches, IsEmail } from 'class-validator'

export class CreateAccountDto {

    @ApiProperty({
        required: true,
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
        example: 'Andy@123',
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


    @ApiProperty({
        required: true,
        example: 'Andy',
    })
    @IsNotEmpty({
        message: 'First name cannot be empty or whitespace'
    })
    @Length(2, 30, {
        message: 'First name must be between 3 and 30 characters long'
    })
    firstName: string


    @ApiProperty({
        required: true,
        example: 'Chou',
    })
    @IsNotEmpty({
        message: 'Last name cannot be empty or whitespace'
    })
    @Length(3, 50, {
        message: 'Last name must be between 3 and 50 characters long'
    })
    lastName: string

    @ApiProperty({
        required: true,
        example: 'Andychou234',
    })
    @IsNotEmpty({
        message: 'Display name cannot be empty or whitespace'
    })
    @Length(3, 50, {
        message: 'Display name must be between 3 and 30 characters long'
    })
    @Matches(/^[\w](?!.*?\.{2})[\w. ]{1,30}[\w]$/, {
        message: "Display name can include only letters, numbers and space between words and be max 30 characters long"
    })
    displayName: string
}

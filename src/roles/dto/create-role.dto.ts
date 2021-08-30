import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'название роли пользователей'})
    readonly value: string;

    @ApiProperty({example: 'administrator/администратор', description: 'описание роли'})
    readonly description: string;
}
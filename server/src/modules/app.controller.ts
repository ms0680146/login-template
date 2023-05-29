import { Controller, Get } from '@nestjs/common'

@Controller()
export class MainController {
    @Get()
    getInfo(): string {
        return 'login project by andychou v1'
    }
}
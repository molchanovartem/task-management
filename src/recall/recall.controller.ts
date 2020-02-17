import { Controller } from '@nestjs/common';
import { RecallService } from './recall.service';

@Controller('tasks')
export class RecallController {
    constructor(private recallService: RecallService) {}
}

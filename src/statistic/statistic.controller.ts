import { Controller, Get } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { CurrentUser } from 'src/auth/decorators/user.decoratror';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('statistics')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  @Get('main')
  @Auth()
  getMainStatistics(@CurrentUser('id') id: number){
    return this.statisticService.getMain(id)
  }

}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VacinacaoCovidV2SharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [VacinacaoCovidV2SharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
  imports: [
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    NgCircleProgressModule.forRoot({
        showUnits: false,
      showBackground: false
    })
  ],
  exports: [TabsModule, TooltipModule, NgCircleProgressModule]
})
export class ThirdPartyModule {}

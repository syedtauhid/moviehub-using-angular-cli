import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsModule } from "ngx-bootstrap/tabs";
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
  imports: [
    TabsModule.forRoot(),
    NgCircleProgressModule.forRoot({
        showUnits: false,
      showBackground: false
    })
  ],
  exports: [TabsModule, NgCircleProgressModule]
})
export class ThirdPartyModule {}

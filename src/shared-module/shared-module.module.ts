import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedServiceService} from "./services/shared-service/shared-service.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SharedServiceService]
})
export class SharedModuleModule {
}

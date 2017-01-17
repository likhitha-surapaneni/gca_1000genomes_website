import { NgModule, ModuleWithProviders, Optional, SkipSelf }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav.component';
import { ApiSampleService } from './services/api-sample.service';
import { ApiDataCollectionService } from './services/api-data-collection.service';

@NgModule({
  imports: [ SharedModule, CommonModule, HttpModule ],
  providers: [ ApiSampleService, ApiDataCollectionService ],
  declarations: [ NavComponent ],
  exports: [ NavComponent ],
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only')
    }
  }
}

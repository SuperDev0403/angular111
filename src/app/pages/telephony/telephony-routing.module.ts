import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelephonyComponent } from './telephony.component';

const routes: Routes = [
    {
        path: '',
        component: TelephonyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TelephonyRoutingModule { }

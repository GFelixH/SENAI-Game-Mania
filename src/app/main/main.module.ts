import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponentComponent } from './login-component/login-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponentComponent, IndexComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'index',
        component: IndexComponentComponent,
      },
      {
        path: 'index/login',
        component: LoginComponentComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class MainModule {}

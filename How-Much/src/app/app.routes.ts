import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { FlowWrapperComponent } from './components/flow/flow-wrapper/flow-wrapper.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'flows',
        pathMatch: 'full'
      },
      {
        path: 'flows',
        component: ContentComponent,
      },
      { 
        path: 'flows/:id', 
        component: FlowWrapperComponent 
      },
];

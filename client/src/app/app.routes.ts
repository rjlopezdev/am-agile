import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './main/main.module#MainModule'
    },
    {
        path: 'backlog',
        loadChildren: './backlog/backlog.module#BacklogModule'
    }
];

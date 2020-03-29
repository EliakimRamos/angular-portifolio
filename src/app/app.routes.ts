import { RouterModule, Routes } from '@angular/router';

import {
        AboutComponent,
        PortafolioComponent,
        PortifolioItemComponent,
        BuscarComponent
    } from './components/index.paginas';

const app_routes:Routes = [
    {path: 'portifolio/home', component: PortafolioComponent },
    {path: 'portifolio/about', component: AboutComponent },
    {path: 'portifolio/portifolio-item/:id', component: PortifolioItemComponent },
    {path: 'portifolio/buscar/:termino', component: BuscarComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'portifolio/home'} 
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
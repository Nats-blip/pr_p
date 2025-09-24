import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Resume } from './resume/resume';
import { Ui } from './ui/ui';

export const routes: Routes = [

    {
        path:'',
        component:Home,
        title: 'Home'
    },
    {
        path:'resume',
        component:Resume,
        title:'Resume'
    },
    {
        path:'ui',
        component:Ui,
        title:'Componentes'
    }

];
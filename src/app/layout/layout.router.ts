import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './layout.component'
import { HomeComponent } from './home/home.component'
import { MediaComponent } from './media/media.component'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'media/:id',
                component: MediaComponent
            }
        ]
    }
]

export const LayoutRouter = RouterModule.forChild(routes)
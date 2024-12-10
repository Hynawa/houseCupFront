import { Routes } from '@angular/router';
import { StudentListComponent } from './students/student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { ScoreListComponent } from './score/score-list/score-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'students', component: StudentListComponent},
    {path: 'houses', component: HouseListComponent},
    {path: 'scores', component: ScoreListComponent},
];

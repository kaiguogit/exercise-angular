import {Component} from 'angular2/core';
import {CourseService} from './course.service';
@Component({
    selector: 'courses',
     template: `<h2>{{title}}</h2>
     <ul>
         <li *ngFor="#course of courses">
            {{ course}}
         </li>
     </ul>`, 
     providers: [CourseService]
})
export class CoursesComponent {
    title: string = " title of courses page";
    courses ;
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}
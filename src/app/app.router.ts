import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
// import { HeaderContentComponent } from './header-content/header-content.component';
// import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
// import { ContactComponent } from './contact/contact.component';
import { RestapiComponent } from './restapi/restapi.component';
// import { GalleryComponent } from './gallery/gallery.component';
import { CourseJavaComponent } from './course-java/course-java.component';
export const router: Routes = [
    { path: '', redirectTo: 'main-content', pathMatch: 'full' }, //default page
    { path: 'main-content', component: MainContentComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'restapi', component: RestapiComponent },
    { path: 'courseJava', component: CourseJavaComponent },
    // { path: 'gallery', component: GalleryComponent }
];
export const routes = RouterModule.forRoot(router);
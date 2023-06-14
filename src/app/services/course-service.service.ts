import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseInterface } from '../Interfaces/course-interface';

@Injectable({
  providedIn: 'root',
})
export class CourseServiceService {
  // is_LoggedIn!: boolean;
  tokenForVerify: any;

  private myApiUrl = 'http://localhost:8080/courses';

  public getToken() {
    return localStorage.getItem('token');
  }

  public getAllCourses(): Observable<any> {
    return this.http.get(this.myApiUrl);
  }

  public getCourseWithId(id: number) {
    return this.http.get(this.myApiUrl + '/' + id);
  }

  public addNewCourse(course: any): Observable<any> {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.post(this.myApiUrl + '/addCourse', course, {
      headers: header,
    });
  }

  public updateExistingCourse(id: number, course: CourseInterface) {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.put(this.myApiUrl + '/' + id, course, {
      headers: header,
    });
  }

  public deleteACourse(id: number) {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.delete(this.myApiUrl + '/' + id, {
      headers: header,
    });
  }

  constructor(private http: HttpClient) {
    if (this.getToken() != null) {
      this.tokenForVerify = JSON.parse(this.getToken() || '{}').token;
      // console.log(this.tokenForVerify);
    }
  }
}

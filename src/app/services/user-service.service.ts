import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from '../Interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  is_LoggedIn!: boolean;
  is_Admin!: boolean;
  userId!: any;
  userName: any;
  tokenForVerify: any;

  private myApiUrl = 'http://localhost:8080/users';

  public logoutFromAccount() {
    localStorage.removeItem('token');
    this.is_LoggedIn = false;
    this.userId = 0;
    return this.http.get('http://localhost:8080/logout');
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public checkLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  public authenticateUserLogin(loginData: any) {
    // console.log(loginData.password);
    this.http
      .get(
        `http://localhost:8080/login?email=${loginData.email}&password=${loginData.password}`
      )
      .subscribe(
        (result: any) => {
          this.is_LoggedIn = true;
          const jwt_token = result;
          this.tokenForVerify = result.token;
          this.userId = result.user.id;
          this.userName = result.user.name;
          console.log(result.user.role);
          if (result.user.role == 'ADMIN') {
            this.is_Admin = true;
          }
          localStorage.setItem('token', JSON.stringify(jwt_token));
          if (this.is_Admin) {
            this.router.navigate(['/home/user-dashboard/admin-dashboard']);
          } else {
            this.router.navigate(['/home/user-dashboard/dashboard']);
          }
        },
        (error: any) => {
          console.error(error);
        }
      );
  }

  public getUserFromEmail() {
    return this.http.get(this.myApiUrl);
  }

  public getAllUsers(): Observable<any> {
    // console.log('In service');
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.get(this.myApiUrl, { headers: header });
  }

  public registerNewUser(user: userInterface) {
    return this.http.post(this.myApiUrl + '/newUser', user);
  }

  public updateExistingUser(id: number, user: userInterface) {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.put(this.myApiUrl + '/' + id, user, { headers: header });
  }

  public deleteUser(id: number) {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.delete(this.myApiUrl + '/' + id, { headers: header });
  }

  public registerLearnerForCourse(enrollmentForm: any): Observable<any> {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });

    return this.http.post(
      `http://localhost:8080/learners/registerCourse?learnerId=${enrollmentForm.userId}&courseId=${enrollmentForm.courseId}&branchId=${enrollmentForm.branch}&duration=${enrollmentForm.duration}&startCourseDate=${enrollmentForm.courseStartDate}`,
      'body',
      {
        headers: header,
      }
    );

    //
  }

  public getRegistrationForLearners(id: number) {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.get('http://localhost:8080/courses/learnerRegistrations', {
      params: { learnerId: id },
      headers: header,
    });
  }

  public getCoursesOfLearner(id: number) {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.get('http://localhost:8080/courses/learnerCourses', {
      params: { learnerId: id },
      headers: header,
    }); //?${id}
  }

  public getLearnersOfCourse(id: number) {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.get('http://localhost:8080/courses/courseLearners', {
      params: { courseId: id },
      headers: header,
    }); //?${id}
  }

  public getCityNameFromApi(pincode: Number) {
    return this.http.get('https://api.postalpincode.in/pincode/' + pincode);
  }

  public getAllRegistrations(): Observable<any> {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.get('http://localhost:8080/courses/allRegistrations', {
      headers: header,
    });
  }

  public getFilteredRegistrations(colName: string, filterVal: string) {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenForVerify,
    });
    return this.http.get('http://localhost:8080/courses/filterCourses', {
      params: {
        columnName: colName,
        filterSearch: filterVal,
        learnerId: this.userId,
      },
      headers: header,
    });
  }

  constructor(private http: HttpClient, private router: Router) {
    if (this.checkLoggedIn()) {
      this.is_LoggedIn = true;
      const token = JSON.parse(this.getToken() || '{}');
      this.tokenForVerify = token.token;
      // console.log('Token in localstorage:- ' + this.tokenForVerify);
      this.userId = token.user.id;
      this.userName = token.user.name;
      if (token.user.role == 'ADMIN') {
        this.is_Admin = true;
      } else if (token.user.role == 'USER') {
        this.is_Admin = false;
      }
    }
  }
}

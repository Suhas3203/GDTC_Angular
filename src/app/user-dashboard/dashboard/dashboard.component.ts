import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseInterface } from 'src/app/Interfaces/course-interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // courses: any;
  userName: string = this.userService.userName;
  poster = 'https://source.unsplash.com/random/900×700/?coding-full-stack';
  link = 'http://localhost:4200/home/explore-courses';

  benefits: any[] = [
    'Understand the core concepts of Angular and build your first web application.',
    'Learn how to build complex applications using advanced JavaScript techniques.',
    'Learn the basics of web design and create beautiful and responsive websites.',
    'Learn Python programming language and its application in Data Science.',
    'Learn Python programming language and its application in Data Science.',
  ];
  courses: any[] = [
    {
      name: 'Introduction to Angular',
      description:
        'Learn the basics of Angular framework and build web applications with ease.',
      benefits:
        'Understand the core concepts of Angular and build your first web application.',
      poster: 'https://via.placeholder.com/300x200',
      price: '$49.99',
      discount: '25',
      link: 'https://example.com/course/angular',
    },
    {
      name: 'Advanced JavaScript',
      description:
        'Master the advanced concepts of JavaScript and become a pro in building complex applications.',
      benefits:
        'Learn how to build complex applications using advanced JavaScript techniques.',
      poster: 'https://via.placeholder.com/300x200',
      price: '$99.99',
      discount: '50',
      link: 'https://example.com/course/js-advanced',
    },
    {
      name: 'Web Design Fundamentals',
      description:
        'Learn the basics of web design and create beautiful and responsive websites.',
      benefits:
        'Learn the basics of web design and create beautiful and responsive websites.',
      poster: 'https://via.placeholder.com/300x200',
      price: '$29.99',
      discount: '10',
      link: 'https://example.com/course/web-design',
    },
    {
      name: 'Python for Data Science',
      description:
        'Learn Python programming language and its application in Data Science.',
      benefits:
        'Learn Python programming language and its application in Data Science.',
      poster: 'https://via.placeholder.com/300x200',
      price: '$69.99',
      discount: '20',
      link: 'https://example.com/course/python-data-science',
    },
  ];

  reviews: any[] = [
    {
      quote:
        'I have learned a lot from this course. The instructor is great and the material is well-organized.',
      name: 'Sarah Smith',
      rating: 5,
    },
    {
      quote:
        'This course exceeded my expectations. The content is relevant and engaging, and the instructor is knowledgeable.',
      name: 'John Doe',
      rating: 4,
    },
    {
      quote:
        'I highly recommend this course to anyone who wants to learn Angular. The instructor is clear and concise, and the exercises are very helpful.',
      name: 'Emily Brown',
      rating: 5,
    },
    {
      quote:
        'This course is excellent. The instructor is knowledgeable and experienced, and the exercises are well-designed.',
      name: 'James Wilson',
      rating: 4,
    },
    {
      quote:
        'I really enjoyed this course. The instructor is engaging and the content is well-structured.',
      name: 'Megan Lee',
      rating: 5,
    },
  ];

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((result) => {
      this.userService.userName;
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-portal',
  templateUrl: './jobs-portal.component.html',
  styleUrls: ['./jobs-portal.component.css'],
})
export class JobsPortalComponent implements OnInit {
  jobs = [
    {
      companyName: 'Google',
      logoUrl:
        'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      package: '₹20,00,000',
      year: '2023',
      location: 'Bangalore',
    },
    {
      companyName: 'Microsoft',
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png',
      package: '₹18,00,000',
      year: '2023',
      location: 'Hyderabad',
    },
    {
      companyName: 'Amazon',
      logoUrl:
        'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo-2000-present.jpg',
      package: '₹21,00,000',
      year: '2023',
      location: 'Chennai',
    },
    {
      companyName: 'Apple',
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png',
      package: '₹25,00,000',
      year: '2023',
      location: 'Mumbai',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RaiseATicketComponent } from './raise-a-ticket/raise-a-ticket.component';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}
  openTicketDialog() {
    this.dialog.open(RaiseATicketComponent, {
      // panelClass: 'ticket-dialog',
      // maxWidth: '100vw',
      // maxHeight: '100vh',
      width: 'fit-content',
      height: '70%',
      // data: { content: document.getElementsByClassName('ticket')[0].innerHTML },
    });
  }
  faqs = [
    {
      question: 'What is the duration of the courses offered by the institute?',
      answer:
        'The duration of our courses varies depending on the topic and level. You can find the course duration and other details on our website.',
    },
    {
      question:
        'Are the courses self-paced or do they follow a fixed schedule?',
      answer:
        'Most of our courses are self-paced, which means you can complete them at your own pace. However, we also offer live classes and webinars for some courses that follow a fixed schedule. You can find more information on our website.',
    },
    {
      question: "Can I get a refund if I'm not satisfied with the course?",
      answer:
        "Yes, we offer a satisfaction guarantee for our courses. If you're not satisfied with the course, you can request a refund within 14 days of purchase.",
    },
    {
      question: 'How do I access the course materials and resources?',
      answer:
        'Once you enroll in a course, you will receive access to our online learning platform, where you can access all the course materials and resources.',
    },
    {
      question: 'Will I receive a certificate upon completion of the course?',
      answer:
        'Yes, we provide a certificate of completion for all our courses. The certificate is awarded upon successfully completing the course requirements.',
    },
    {
      question: 'Is there any prerequisite knowledge required for the courses?',
      answer:
        'Some of our courses may have prerequisite knowledge or skills required. You can find this information on our website or in the course description.',
    },
    {
      question:
        'Can I contact the course instructor or support team if I have questions or issues?',
      answer:
        'Yes, we have a dedicated support team and course instructors who are available to answer any questions or issues you may have.',
    },
    {
      question:
        'Are there any group discounts or corporate training options available?',
      answer:
        'Yes, we offer group discounts and corporate training options. Please contact our support team for more information.',
    },
    {
      question:
        'How do I pay for the course? Is there a payment plan available?',
      answer:
        'You can pay for the course online using a credit card or PayPal. We also offer a payment plan option for some courses. You can find more information on our website or by contacting our support team.',
    },
    {
      question: 'What happens if I miss a live class or webinar session?',
      answer:
        "If you miss a live class or webinar session, don't worry. We record all our sessions and make them available to students for later viewing. You can access the recordings on our online learning platform.",
    },
  ];
}

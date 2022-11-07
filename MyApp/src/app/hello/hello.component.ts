import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hello',
  template:`
            <p>
              Hello {{ courseName }}
            </p>
          `,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  courseName = "Angular";
  constructor() { }
  ngOnInit() {
  }
}

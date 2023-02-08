import { Component, OnInit,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-professorlayout',
  templateUrl: './professorlayout.component.html',
  styleUrls: ['./professorlayout.component.css']
})
export class ProfessorlayoutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

}

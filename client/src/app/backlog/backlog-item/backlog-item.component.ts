import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backlog-item',
  templateUrl: './backlog-item.component.html',
  styleUrls: ['./backlog-item.component.css']
})
export class BacklogItemComponent implements OnInit {

  @Input() public epic: any;
  public isCollapsed: boolean;
  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

}

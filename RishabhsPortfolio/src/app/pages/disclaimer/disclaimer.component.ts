import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.sass'],
})
export class DisclaimerComponent implements OnInit {
  @Input() inputFromNav: String = '';
  constructor() {}

  ngOnInit(): void {}
}

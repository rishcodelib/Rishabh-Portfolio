import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { LcService } from 'src/app/service/leetcode/lc.service';

@Component({
  selector: 'app-code-assesment-bar',
  templateUrl: './code-assesment-bar.component.html',
  styleUrls: ['./code-assesment-bar.component.sass'],
})
export class CodeAssesmentBarComponent implements OnInit {
  data: any;

  constructor(private lcode: LcService) {
    this.data = this.lcode.getAllData;
    // console.log(this.data);
  }
  // all data will come wil below 
  leetcode: any;

  ngOnInit(): void {
    this.leetcode = this.lcode.getAllData().subscribe(
      (res: any) => {
        this.data = res;
        console.log(res);
      },
      (err: { error: any }) => {
        console.log('Failed', err.error.message);
      }
    );
  }
}

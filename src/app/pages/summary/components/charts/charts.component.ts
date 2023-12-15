import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  @Input() transactions!: Transaction[];

  constructor() {}

  ngOnInit(): void {}
}

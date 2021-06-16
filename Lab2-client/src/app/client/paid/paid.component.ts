import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RedeptService} from "../../service/redeptService/redept.service";

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.css']
})
export class PaidComponent implements OnInit {

  constructor(private router: Router,
              private redeptService: RedeptService) { }

  ngOnInit(): void {
  }

    toMenu() {
      this.router.navigateByUrl('/menu');
    }
}

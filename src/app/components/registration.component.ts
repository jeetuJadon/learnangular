import { Component,OnInit } from '@angular/core';


@Component(
  {selector: 'contributionregistration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
  })
export class ContributionRegistration implements OnInit {

  private firstName: string = 'Jeetu';
  private address: string = 'Valsad';
  private phoneNumber: Number = 9638054326;
   ifOtherText: boolean = false;

  ngOnInit() {
   this.phoneNumber = 12345;
   }

  onBlurMethod(value: string) {
    console.debug(value);
  }

  radiobuttonClicked(value: string): void {
    console.log(value);
    if (value == "other") {
      this.ifOtherText = true;
    } else
      this.ifOtherText = false;

    console.log(this.ifOtherText);
  }


}

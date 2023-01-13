import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tip-calculator';
  

  calcForm = new FormGroup({
    bill: new FormControl(0,[Validators.required,Validators.min(50)]),
    persons: new FormControl(0,[Validators.required,Validators.min(1)]),
  });



  calcTip(num: any): void {
    let tipValue: any = document.getElementById('tip');
    let totalValue:any = document.getElementById('total')
    let billValue = (<HTMLInputElement>document.getElementById('billValue')).value;
    let persons = (<HTMLInputElement>document.getElementById('persons')).value;

    console.log(this.calcForm.value.persons)
    
    
    if (!this.calcForm.valid) {
      alert("Please fill in the form")
      return
    }

    let billVal: number = +billValue;
    let personsVal: number = +persons;

    let sumTip = (((billVal / 100) * num) / personsVal).toFixed(2);
    tipValue.innerHTML = `$ ${sumTip}`;
    let sumTipVal: number = +sumTip;

    let sumTotal = ((billVal + (sumTipVal * personsVal)) / personsVal).toFixed(2);

    totalValue.innerHTML = `$ ${sumTotal}`;
  }




  reset(): void {
    let tipValue: any = document.getElementById('tip');
    let totalValue: any = document.getElementById('total');
    this.calcForm.reset()
    tipValue.innerHTML = `$ 0.00`;
    totalValue.innerHTML = `$ 0.00`;
  }
}

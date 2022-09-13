import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReactiveFormService } from 'src/app/services/reactive-form.service';
import { SharedMethods } from 'src/app/services/shared-methods.service';
import { SharedVar } from 'src/app/services/shared-var.service';

@Component({
  selector: 'app-create-particular-form',
  templateUrl: './create-particular-form.component.html',
  styleUrls: ['./create-particular-form.component.css']
})
export class CreateParticularFormComponent implements OnInit {

  subscriptions = new Subscription();
  public createTripForm: FormGroup;
  public isUserRegistered: any = null;
  public username = ["VINCENT"];


  constructor(public reactiveFormService: ReactiveFormService,
    public sharedVar: SharedVar,
    public sharedMethods: SharedMethods,) { }

  ngOnInit(): void {

    this.createTripForm = this.initializeCreateTripForm();
    this.subscriptions.add(
      this.createTripForm.get('staticQn1')!.valueChanges.subscribe(val => {
        this.isUserRegistered = this.sharedVar.STATIC_QN_1_VAL_MAP.get(val);
        console.log("this.isUserRegistered: " + this.isUserRegistered);
        console.log("staticQn1: " + this.createTripForm.get('staticQn1')?.value );
          this.clearForm();
      })
    )

    this.subscriptions.add(
      this.createTripForm.get('name')!.valueChanges.subscribe(val => {
        if(this.isUserRegistered){
          this.retrieveUserEmail();
        }
      })
    )
  }

  clearForm() {
    this.name?.setValue(null);
    this.email?.setValue(null);
  }

  retrieveUserEmail(){
    console.log(this.createTripForm.get('name')!.value);
    if(this.createTripForm.get('name')!.value){
      this.email?.setValue("VINCENTCALAI@GMAIL.COM");
    }
  }

  initializeCreateTripForm(): FormGroup {
    const rfg =  this.reactiveFormService.initializeCreateTripForm();
    return rfg;
  }

  confirmClicked(){
    console.log("confirm clicked!");
    console.log(this.createTripForm);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  get staticQn1() {
    return this.createTripForm.get('staticQn1');
  }

  get name() {
    return this.createTripForm.get('name');
  }

  get email() {
    return this.createTripForm.get('email');
  }

}

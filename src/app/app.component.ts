import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  CouponForm: FormGroup;

  ngOnInit() {
    this.createCouponForm();
  }

  //creating the coupon form
  createCouponForm() {
    this.CouponForm = this.formBuilder.group({
      coupon_code: ['', Validators.required],
      coupon_type: ['', Validators.required],
      valid_from: ['', Validators.required],
      valid_to: ['', Validators.required],
      is_active: ['', Validators.required],
      coupon_count: ['', Validators.required],
      is_unlimited: ['', Validators.required],
      tnc: [''],
      rules: this.formBuilder.array([]),
    });
  }

  //Method to Add new Coupon rules
  addNewCouponRule() {
    const couponRules = this.CouponForm.controls.rules as FormArray;
    //A new Coupon rule will pushed every time Add button is clicked
    couponRules.push(
      this.formBuilder.group({
        min_amount: ['', Validators.required],
        max_amount: '',
        discount_type: ['', Validators.required],
        discount: ['', Validators.required],
        max_discount: '',
      })
    );
  }

  //Submit Coupon Form
  submitCouponForm(CouponForm) {
    console.log(CouponForm);
  }
}

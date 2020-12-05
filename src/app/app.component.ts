import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  data: any = {};
  CouponForm: FormGroup;
  submitted = false;
  startMinDate: Date;
  ngOnInit() {
    this.createCouponForm();
    this.CouponForm.get('is_unlimited').valueChanges.subscribe((val) => {
      if (val) {
        this.CouponForm.controls['coupon_count'].setValidators([
          Validators.required,
        ]);
      }
    });
    this.startMinDate = new Date();
  }

  //creating the coupon form
  createCouponForm() {
    this.CouponForm = this.formBuilder.group({
      coupon_code: ['', Validators.required],
      coupon_type: ['', Validators.required],
      valid_from: ['', Validators.required],
      valid_to: ['', Validators.required],
      is_active: [''],
      coupon_count: [''],
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
    this.submitted = true;
    if (this.CouponForm.invalid) {
      return;
    }
    if (this.CouponForm.value.start_date > this.CouponForm.value.end_date) {
      alert('Start Date cannot be greater than End Date');
    }
    console.log(this.CouponForm);
    this.data = this.CouponForm.value;
    if (this.data.is_unlimited == 'true') {
      delete this.data.coupon_count;
    }
    for (let r of this.data.rules) {
      if (!r.max_discount) {
        delete r.max_discount;
      }
    }
  }

  //Get values of coupon form element for validation
  get f() {
    return this.CouponForm.controls;
  }

  //Get values of Coupon rules form element for elements
  get rulesF() {
    return this.CouponForm.get('rules') as FormArray;
  }

  getrulesControl() {
    return (this.CouponForm.get('rules') as FormArray).controls;
  }
}

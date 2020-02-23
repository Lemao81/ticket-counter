import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QueryParam, ToastMessage } from '@constants';
import { ToastService } from '@services';
import { containsNoNumberValidator, minimumAgeValidator, ageOverHundredValidator } from '@validators';

@Component({
  selector: 'tc-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  private eventId: number;
  private band: string;
  private eventDate: Date;

  public orderForm: FormGroup;
  public isPayPalDisabled = true;

  constructor(private _activatedRoute: ActivatedRoute, private _toastService: ToastService, formBuilder: FormBuilder) {
    this.orderForm = formBuilder.group({
      title: ['Herr'],
      firstName: ['', [Validators.required, containsNoNumberValidator]],
      lastName: ['', [Validators.required, containsNoNumberValidator]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required, minimumAgeValidator, ageOverHundredValidator]],
      amount: [1, [Validators.min(1), Validators.max(5)]],
      payment: ['prepayment']
    });
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.eventId = parseInt(decodeURI(params[QueryParam.ID]), 10);
      this.band = decodeURI(params[QueryParam.BAND]);
      this.eventDate = new Date(decodeURI(params[QueryParam.DATE]));
    });
  }

  public checkForm(): void {
    if (this.orderForm.untouched) {
      this._toastService.toastInfo(ToastMessage.ORDER_FORM_UNTOUCHED);
    } else if (this.orderForm.touched && this.orderForm.invalid) {
      this._toastService.toastInfo(ToastMessage.ORDER_FORM_INVALID);
    } else {
      this.performOrder();
    }
  }

  private performOrder(): void {
    this._toastService.toastSuccess(ToastMessage.ORDER_SUBMITTED);
  }
}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private _toastrService: ToastrService) {}

  public toastSuccess(message: string, title: string = null): void {
    this._toastrService.success(message, title);
  }

  public toastError(message: string, title: string = null): void {
    this._toastrService.error(message, title);
  }

  public toastInfo(message: string, title: string = null): void {
    this._toastrService.info(message, title);
  }
}

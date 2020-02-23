import 'automapper-ts';

import { Injectable } from '@angular/core';
import { IBandDto, IApiMapper } from 'app/shared/interfaces';
import { Band } from 'app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class BandMapper implements IApiMapper<IBandDto, Band> {
  constructor() {
    automapper
      .createMap('IBandDto', 'Band')
      .forMember('name', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('band'));
  }

  public mapToBo(dto: IBandDto): Band {
    return automapper.map('IBandDto', 'Band', dto);
  }

  public mapToDto(bo: Band): IBandDto {
    throw new Error('Method not implemented.');
  }
}

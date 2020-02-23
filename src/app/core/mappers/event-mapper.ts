import 'automapper-ts';

import { Injectable } from '@angular/core';
import { IApiMapper, IEventDto } from '@interfaces';
import { Event } from '@models';

import { BandMapper } from './band-mapper';

@Injectable({
  providedIn: 'root'
})
export class EventMapper implements IApiMapper<IEventDto, Event> {
  constructor(private _bandMapper: BandMapper) {
    automapper
      .createMap('IEventDto', 'Event')
      .forSourceMember('date', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore())
      .forSourceMember('vorbands', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  public mapToBo(dto: IEventDto): Event {
    const bo: Event = automapper.map('IEventDto', 'Event', dto);
    bo.date = dto.date ? new Date(dto.date) : null;
    bo.vorbands = dto.vorbands ? dto.vorbands.map(_ => this._bandMapper.mapToBo(_)) : [];

    return bo;
  }

  public mapToDto(bo: Event): IEventDto {
    throw new Error('Method not implemented.');
  }
}

export interface IApiMapper<TDto, TBo> {
  mapToBo(dto: TDto): TBo;
  mapToDto(bo: TBo): TDto;
}

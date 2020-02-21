export interface IMapper<TDto, TBo> {
  mapToBo(dto: TDto): TBo;
  mapToDto(bo: TBo): TDto;
}

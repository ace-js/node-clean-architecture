export interface IRepository<TDomain> {
  get(id: number): Promise<TDomain|undefined>;
  getAll(): Promise<Array<TDomain>>;
  create(domainEntity: TDomain): Promise<boolean>;
  update(domainEntity: TDomain): Promise<boolean>;
  delete(id: number): Promise<boolean>;
  save(): void
}
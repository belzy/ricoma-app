import { 
  Resolver, 
  Query,
} from "type-graphql";
import { AppDataSource } from '../data-source';
import { Company } from '../entity';

@Resolver()
export class CompanyResolver {

  @Query(() => [Company])
  async companies() {
    return await AppDataSource.manager.find(Company);
  }

}
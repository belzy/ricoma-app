import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { 
  Resolver, 
  Query,
  Authorized,
  Mutation,
  Arg,
} from "type-graphql";
import { AppDataSource } from '../data-source';
import { Company } from '../entity';

const SALT = process.env.SALT || '10';
const SECRET = process.env.JWT_SECRET || '';


@Resolver()
export class CompanyResolver {

  @Mutation(() => String)
  async registerCompany(
    @Arg('name') name: string,
    @Arg('password') password: string,
    ) {

      const existingCompany = await AppDataSource.manager.findOneBy(Company, { name });

      if (existingCompany) return 'Company already exists';

      const hash = await bcrypt.hash(password, parseInt(SALT));

      const company = new Company();
      company.name = name;
      company.password = hash;

      AppDataSource.manager.save(company);

      const token = jwt.sign({ company_id: company.id }, SECRET);

      return JSON.stringify({ token });

  }

  @Query(() => String)
  async companyLogin(
    @Arg('name') name: string,
    @Arg('password') password: string,
  ) {

    const company = await AppDataSource.manager.findOneBy(Company, { name });

    if (!company) return 'Company does not exist';

    const match = await bcrypt.compare(password, company.password);

    if (!match) return 'Incorrect password';

    const token = jwt.sign({ company_id: company.id }, SECRET);

    return JSON.stringify({ token });

  }

  @Authorized()
  @Query(() => [Company])
  async companies() {
    return await AppDataSource.manager.find(Company);
  }

}
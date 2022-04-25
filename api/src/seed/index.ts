import 'dotenv/config';
import {
  Company,
  Machine,
  Color,
  Size,
  Type,
  NeedleCount,
} from '../entity';
import * as bcrypt from 'bcrypt';
import { AppDataSource } from '../data-source';

const SALT = process.env.SALT || '10';

export async function seed() {

  console.log('[server] Seeding data...')

  await AppDataSource.initialize().then(async () => {

    const companyOne = new Company();
    companyOne.name = 'Company One'
    companyOne.password = await bcrypt.hash('letmein123', parseInt(SALT));
    await AppDataSource.manager.save(companyOne);

    const companyTwo = new Company();
    companyTwo.name = 'Company Two'
    companyTwo.password = await bcrypt.hash('letmein123', parseInt(SALT));
    await AppDataSource.manager.save(companyTwo);

    const color = new Color();
    color.color = 'blue';
    await AppDataSource.manager.save(color);

    const size = new Size();
    size.size = 'single-head';
    await AppDataSource.manager.save(size);

    const type = new Type();
    type.type = 'commercial';
    await AppDataSource.manager.save(type);


    const needleCount = new NeedleCount();
    needleCount.needle_count = 10;
    await AppDataSource.manager.save(needleCount);

    for (let i = 0; i < 20; i++) {

      const machine = new Machine();
      machine.model = `model-${ i + 1 }`;
      machine.price = 20.99;
      machine.sale_price = 14.99;
      machine.description = 'This is a description';
      machine.info = 'This is some other info';
      // machine.company = i % 2 === 0 ? companyOne : companyTwo;
      machine.company = companyOne;
      machine.color = color;
      machine.size = size;
      machine.type = type;
      machine.needle_count = needleCount;
      await AppDataSource.manager.save(machine);

    }
  }).catch(error => console.log(error));

}
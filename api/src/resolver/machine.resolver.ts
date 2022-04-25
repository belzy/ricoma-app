import * as jwt from 'jsonwebtoken';
import { 
  Arg,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { AppDataSource } from "../data-source";
import { 
  Company,
  Machine,
  Color, 
  Size,
  Type,
  NeedleCount,
} from '../entity';

@Resolver()
export class MachineResolver {

  @Authorized()
  @Mutation(() => String)
  async addMachine(
    @Arg('model') model: string,
    @Arg('price') price: number,
    @Arg('sale_price') sale_price: number,
    @Arg('description') description: string,
    @Arg('info') info: string,
    @Arg('color') color: string,
    @Arg('size') size: string,
    @Arg('type') type: string,
    @Arg('needle_count') needle_count: number,
    @Ctx() ctx,
  ) {

    const machineRepo = await AppDataSource.getRepository(Machine);

    const existingMachines = await machineRepo.find({ 
      where: { model },
      relations: {
        color: true,
      } 
    });

    // Check for dupliacte machines
    let duplicate 
      = existingMachines.filter((machine: any) => machine.color.color === color).length;

    // Guard to return if machine exists with same color.
    if (duplicate) return 'Machine Already Exists';

    const { company_id } = ctx;

    // Get company
    const company = await AppDataSource.manager.findOneBy(Company, { id: company_id });

    // Get color if exists or create one.
    const colorEntity = await AppDataSource.manager.findOneBy(Color, { color }) || new Color();

    if (!colorEntity.color) {
      colorEntity.color = color;

      await AppDataSource.manager.save(colorEntity);
    }

    // Get size if exists or create one.
    const sizeEntity = await AppDataSource.manager.findOneBy(Size, { size }) || new Size();

    if (!sizeEntity.size) {
      sizeEntity.size = size;

      await AppDataSource.manager.save(sizeEntity);
    }

    // Get type if exists or create one.
    const typeEntity = await AppDataSource.manager.findOneBy(Type, { type }) || new Type();

    if (!typeEntity.type) {
      typeEntity.type = type;

      await AppDataSource.manager.save(typeEntity);
    }

    // Get needle_count if exists or create one.
    const needleCountEntity = await AppDataSource.manager.findOneBy(NeedleCount, { needle_count }) || new NeedleCount();

    if (!needleCountEntity.needle_count) {
      needleCountEntity.needle_count = needle_count;

      await AppDataSource.manager.save(needleCountEntity);
    }

    const machine = new Machine();
    machine.model = model;
    machine.price = price;
    machine.sale_price = sale_price;
    machine.description = description;
    machine.info = info;
    machine.company = company;
    machine.color = colorEntity;
    machine.size = sizeEntity;
    machine.type = typeEntity;
    machine.needle_count = needleCountEntity;

    await AppDataSource.manager.save(machine);
    
    return 'Created';

  }

  @Authorized()
  @Query(() => [Machine])
  async retrieveMachines(@Ctx() ctx) {

    const { company_id } = ctx;

    const company = await AppDataSource.manager.findBy(Company, { id: company_id })

    const machineRepo = await AppDataSource.getRepository(Machine);

    const machines = await machineRepo.find({
      where: { company },
      relations: {
        color: true,
        size: true,
        type: true,
        needle_count: true,
      }
    });

    return machines;

  }

  @Authorized()
  @Mutation(() => String)
  async updateMachine(
    @Arg('machine_id') machine_id: number,
    @Arg('model', { nullable: true }) model: string,
    @Arg('price', { nullable: true }) price: number,
    @Arg('sale_price', { nullable: true }) sale_price: number,
    @Arg('description', { nullable: true }) description: string,
    @Arg('info', { nullable: true }) info: string,
    @Arg('color', { nullable: true }) color: string,
    @Arg('size', { nullable: true }) size: string,
    @Arg('type', { nullable: true }) type: string,
    @Arg('needle_count', { nullable: true }) needle_count: number,
    @Arg('company', { nullable: true }) company_name: string,
    @Ctx() ctx,
  ) {

    const { company_id } = ctx;

    const company = await AppDataSource.manager.findBy(Company, { id: company_id })

    const machineRepo = await AppDataSource.getRepository(Machine);

    const machine = await machineRepo.findOne({
      where: { company, id: machine_id },
      relations: {
        color: true,
        size: true,
        type: true,
        needle_count: true,
      }
    });

    if (!machine) return 'Machine does not exist';

    const newColor = await AppDataSource.manager.findOneBy(Color, { color }) || new Color();
    if (!newColor.color) { 
      newColor.color = color;
      await AppDataSource.manager.save(newColor);
    }

    const newSize = await AppDataSource.manager.findOneBy(Size, { size }) || new Size();
    if (!newSize.size) {
      newSize.size = size;
      await AppDataSource.manager.save(newSize);
    }

    const newType = await AppDataSource.manager.findOneBy(Type, { type }) || new Type();
    if (!newType.type) { 
      newType.type = type;
      await AppDataSource.manager.save(newType);
    }

    const newNeedlCount = await AppDataSource.manager.findOneBy(NeedleCount, { needle_count }) || new NeedleCount();
    if (!newNeedlCount.needle_count) {
      newNeedlCount.needle_count = needle_count;
      await AppDataSource.manager.save(newNeedlCount);
    }

    const machineUpdate = { 
        model : model || machine.model,
        price : price || machine.price,
        sale_price : sale_price || machine.sale_price,
        description : description || machine.description,
        info : info || machine.info,
        company : company_name ? ( await AppDataSource.manager.findOneBy(Company, { name: company_name }) ) : machine.company,
        color: newColor,
        size: newSize,
        type: newType,
        needle_count: newNeedlCount
    }

    await AppDataSource.manager.update(Machine, machine_id, machineUpdate);

    return 'Updated';
  }

  @Authorized()
  @Mutation(() => String)
  async deleteMachine(
    @Arg('machine_id') machine_id: number,
    @Ctx() ctx,
  ) {

    const { company_id } = ctx;

    const company = await AppDataSource.manager.findBy(Company, { id: company_id })   

    const machineRepo = await AppDataSource.manager.getRepository(Machine);

    const machine = await machineRepo.findOneBy({ company, id: machine_id });

    if (!machine) return 'Machine Does Not Exist';

    return await machineRepo.remove(machine) ? 'Deleted' : 'Error deleting machine';

  }
}
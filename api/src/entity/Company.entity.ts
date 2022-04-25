import { 
  Field, 
  ObjectType 
} from "type-graphql";
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  OneToMany, 
} from "typeorm";
import { Machine } from './Machine.entity';

@Entity()
@ObjectType()
export class Company {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @Column()
  password: string;

  @Field(type => [Machine])
  @OneToMany(() => Machine, (machine) => machine.company)
  machines: Machine[];

}
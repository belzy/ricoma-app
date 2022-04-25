import { 
  Field, 
  Int, 
  ObjectType 
} from "type-graphql";
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  OneToMany,
} from "typeorm";
import { Machine } from './';

@Entity()
@ObjectType()
export class NeedleCount {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  needle_count: number;

  @Field(type => [Machine])
  @OneToMany(() => Machine, (machine) => machine.needle_count)
  machines: Machine[];
}
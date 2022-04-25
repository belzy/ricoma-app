import { Field, ObjectType } from "type-graphql";
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  OneToMany,
} from "typeorm";
import { Machine } from './';

@Entity()
@ObjectType()
export class Size {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  size: string;
  
  @Field(type => [Machine])
  @OneToMany(() => Machine, (machine) => machine.size)
  machines: Machine[];
}
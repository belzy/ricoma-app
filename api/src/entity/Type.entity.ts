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
export class Type {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  type: string;

  @Field(type => [Machine])
  @OneToMany(() => Machine, (machine) => machine.type)
  machines: Machine[];
}
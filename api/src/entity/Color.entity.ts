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
import { Machine } from './';

@Entity()
@ObjectType()
export class Color {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  color: string;

  @Field(type => [Machine])
  @OneToMany(() => Machine, (machine) => machine.color)
  machines: Machine[];
}
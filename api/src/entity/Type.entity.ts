import { Field, ObjectType } from "type-graphql";
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
} from "typeorm";

@Entity()
@ObjectType()
export class Type {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  type: string;

}
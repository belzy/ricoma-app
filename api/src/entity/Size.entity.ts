import { Field, ObjectType } from "type-graphql";
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  ManyToOne
} from "typeorm";

@Entity()
@ObjectType()
export class Size {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  size: string;
  
}
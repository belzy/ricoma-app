import { 
  Field, 
  Int, 
  ObjectType 
} from "type-graphql";
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
} from "typeorm";

@Entity()
@ObjectType()
export class NeedleCount {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  needle_count: string;

}
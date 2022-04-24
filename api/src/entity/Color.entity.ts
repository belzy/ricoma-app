import { 
  Field, 
  ObjectType 
} from "type-graphql";
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
} from "typeorm";

@Entity()
@ObjectType()
export class Color {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  color: string;

}
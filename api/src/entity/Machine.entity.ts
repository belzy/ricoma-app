import { 
  Field, 
  Int, 
  ObjectType 
} from "type-graphql";
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn
} from "typeorm";
import { Company } from './Company.entity';
import { Color } from "./Color.entity";
import { Size } from "./Size.entity";
import { Type } from "./Type.entity";
import { NeedleCount } from "./NeedleCount.entity";

@Entity()
@ObjectType()
export class Machine {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  model: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  sale_price: number;

  @Field()
  @Column("text")
  description: string;

  @Field()
  @Column("text")
  info: string;

  @Field(type => Int)
  @ManyToOne(() => Company, (company) => company.machines)
  company: Company;

  @Field(type => Int)
  @OneToOne(() => Color)
  @JoinColumn()
  color: Color;

  @Field(type => Int)
  @OneToOne(() => Size)
  @JoinColumn()
  size: Size;

  @Field(type => Int)
  @OneToOne(() => Type)
  @JoinColumn()
  type: Type;

  @Field(type => Int)
  @OneToOne(() => NeedleCount)
  @JoinColumn()
  needle_count: NeedleCount;
  
}
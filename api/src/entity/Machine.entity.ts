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
  @Column('float')
  price: number;

  @Field()
  @Column('float')
  sale_price: number;

  @Field()
  @Column("text")
  description: string;

  @Field()
  @Column("text")
  info: string;

  @Field(type => Company)
  @ManyToOne(() => Company, (company) => company.machines, { onDelete: 'CASCADE' })
  company: Company;

  @Field(type => Color)
  @ManyToOne(() => Color, (color) => color.machines, {  onDelete: 'CASCADE'  })
  @JoinColumn()
  color: Color;

  @Field(type => Size)
  @ManyToOne(() => Size, (size) => size.machines, { onDelete: 'CASCADE' })
  @JoinColumn()
  size: Size;

  @Field(type => Type)
  @ManyToOne(() => Type, (type) => type.machines, { onDelete: 'CASCADE' })
  @JoinColumn()
  type: Type;

  @Field(type => NeedleCount)
  @ManyToOne(() => NeedleCount, (needle_count) => needle_count.machines, { onDelete: 'CASCADE' })
  @JoinColumn()
  needle_count: NeedleCount;
  
}
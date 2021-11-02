import {
	Column,
	CreateDateColumn,
	Entity,
	ObjectID,
	ObjectIdColumn,
	OneToMany,
	UpdateDateColumn
} from "typeorm";
import { Boards } from "./boards.entity";

@Entity("categorycodes")
export class CategoryCode {
	@ObjectIdColumn({ type: "varchar" })
	id!: ObjectID;

	@Column({ type: "number" })
	categoryCode: number;

	@Column({ type: "varchar" })
	categoryName: string;

	@CreateDateColumn({ type: "datetime" })
	createdDt: Date;

	@UpdateDateColumn({ type: "datetime" })
	updatedDt: Date;
}

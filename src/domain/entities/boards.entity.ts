import {
	Column,
	CreateDateColumn,
	Entity,
	ObjectID,
	ObjectIdColumn,
	UpdateDateColumn
} from "typeorm";

@Entity("boards")
export class Boards {
	@ObjectIdColumn({ type: "varchar" })
	id!: ObjectID;

	@Column({ type: "number" })
	boardId!: number;

	@Column({ type: "varchar" })
	userId!: string;

	@Column({ type: "number" })
	categoryCode!: number;

	@Column({ type: "varchar" })
	title!: string;

	@Column({ type: "varchar" })
	contents!: string;

	@Column({ type: "varchar" })
	readUser?: object;

	@CreateDateColumn({ type: "datetime" })
	createdDt: Date;

	@UpdateDateColumn({ type: "datetime" })
	updatedDt: Date;
}

import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	ObjectID,
	ObjectIdColumn,
	OneToMany,
	UpdateDateColumn
} from "typeorm";
import { Users } from "./users.entity";
import { Boards } from "./boards.entity";

@Entity("comments")
export class Comments {
	@ObjectIdColumn({ type: "varchar" })
	id!: ObjectID;

	@Column({ type: "number" })
	commentId: number;

	@Column({ type: "varchar" })
	userId!: string;

	@Column({ type: "number" })
	boardId!: number;

	@Column({ type: "number" })
	parentId!: number;

	@Column({ type: "number" })
	depth!: number;

	@Column({ type: "varchar" })
	contents!: string;

	@CreateDateColumn({ type: "datetime" })
	createdDt: Date;

	@UpdateDateColumn({ type: "datetime" })
	updatedDt: Date;
}

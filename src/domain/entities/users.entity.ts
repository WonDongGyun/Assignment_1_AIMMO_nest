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
import { Comments } from "./comments.entity";

@Entity("users")
export class Users {
	@ObjectIdColumn({ type: "varchar" })
	id!: ObjectID;

	@Column({ type: "varchar", unique: true })
	userId!: string;

	@Column({ type: "varchar" })
	password!: string;

	@Column({ type: "varchar" })
	userName!: string;

	@OneToMany(() => Boards, (boards) => boards.users, {
		onDelete: "CASCADE"
	})
	boards?: Boards[];

	@OneToMany(() => Comments, (comments) => comments.users, {
		onDelete: "CASCADE"
	})
	comments?: Comment[];

	@CreateDateColumn({ type: "datetime" })
	createdDt: Date;

	@UpdateDateColumn({ type: "datetime" })
	updatedDt: Date;
}

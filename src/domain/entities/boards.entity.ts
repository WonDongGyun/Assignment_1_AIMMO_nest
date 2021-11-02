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
import { CategoryCode } from "./categoryCode.entity";
import { Comments } from "./comments.entity";
import { Users } from "./users.entity";

@Entity("boards")
export class Boards {
	@ObjectIdColumn({ type: "varchar" })
	id!: ObjectID;

	@Column({ type: "number" })
	boardId!: number;

	@Column({ type: "varchar" })
	title!: string;

	@Column({ type: "varchar" })
	contents!: string;

	@Column({ type: "varchar" })
	readUser!: object;

	@OneToMany(() => Comments, (comments) => comments.boards, {
		onDelete: "CASCADE"
	})
	comments?: Comment[];

	@ManyToOne(() => Users, (users) => users.boards, { lazy: true })
	@JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
	users: Users;

	@ManyToOne(() => CategoryCode, (categoryCode) => categoryCode.boards, {
		lazy: true
	})
	@JoinColumn([
		{ name: "categoryCode", referencedColumnName: "categoryCode" }
	])
	categoryCode: CategoryCode;

	@CreateDateColumn({ type: "datetime" })
	createdDt: Date;

	@UpdateDateColumn({ type: "datetime" })
	updatedDt: Date;
}

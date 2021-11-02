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

	@Column({ type: "int" })
	depth!: number;

	@Column({ type: "varchar" })
	contents!: string;

	@ManyToOne(() => Users, (users) => users.comments, { lazy: true })
	@JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
	users: Users;

	@ManyToOne(() => Boards, (boards) => boards.comments, { lazy: true })
	@JoinColumn([{ name: "boardId", referencedColumnName: "boardId" }])
	boards: Boards;

	@ManyToOne(() => Comments, (comments) => comments.childId)
	@JoinColumn([{ name: "parentId", referencedColumnName: "commentId" }])
	parentId!: number;
	@OneToMany(() => Comments, (comments) => comments.parentId)
	childId!: number;

	@CreateDateColumn({ type: "datetime" })
	createdDt: Date;

	@UpdateDateColumn({ type: "datetime" })
	updatedDt: Date;
}

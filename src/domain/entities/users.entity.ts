import {
	Column,
	CreateDateColumn,
	Entity,
	ObjectID,
	ObjectIdColumn,
	UpdateDateColumn
} from "typeorm";

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

	@CreateDateColumn({ type: "datetime" })
	createdDt: Date;

	@UpdateDateColumn({ type: "datetime" })
	updatedDt: Date;
}

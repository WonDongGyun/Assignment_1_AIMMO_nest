import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Boards } from "../entities/boards.entity";
import { Comments } from "../entities/comments.entity";
import { Users } from "../entities/users.entity";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";

@Module({
	imports: [TypeOrmModule.forFeature([Comments, Users, Boards])],
	controllers: [CommentController],
	providers: [CommentService]
})
export class CommentModule {}

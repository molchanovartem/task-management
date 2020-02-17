import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { Task } from '../tasks/task.entity';
import { IsOptional } from 'class-validator';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    type: number;

    @Column()
    password: string;

    @OneToMany(type => Task, task => task.user, { eager: true })
    tasks: Task[];

    async validatePassword(password: string): Promise<boolean> {
        return password === this.password;
    }
}

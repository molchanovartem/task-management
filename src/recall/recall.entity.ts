import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recall extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    text: string;

    // @ManyToOne(type => User, user => user.tasks, { eager: false })
    // user: User;

    // @Column()
    // userId: number;
}

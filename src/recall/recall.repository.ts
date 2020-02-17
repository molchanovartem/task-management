import { Repository, EntityRepository } from 'typeorm';
import { Recall } from './recall.entity';

@EntityRepository(Recall)
export class RecallRepository extends Repository<Recall> {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from 'src/database/abstract.repository';
import { ReservationSchema } from './models/reservation.schema';
import { Model } from 'mongoose';

@Injectable()
export class ReservationRepository extends AbstractRepository<ReservationSchema> {
  constructor(
    @InjectModel(ReservationSchema.name)
    pagesModel: Model<ReservationSchema>,
  ) {
    super(pagesModel);
  }
}

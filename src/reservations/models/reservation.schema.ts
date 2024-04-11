import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractSchema } from 'src/database/abstract.schema';

@Schema({ versionKey: false })
export class ReservationSchema extends AbstractSchema {
  @Prop()
  photo: string;

  @Prop()
  name: string;

  @Prop()
  review_scores_rating: number;

  @Prop()
  room_type: string;

  @Prop()
  price: number;

  //other details (optional)
  @Prop()
  smart_location?: string;

  @Prop()
  guests_included?: number;

  @Prop()
  bedrooms?: number;

  @Prop()
  beds?: number;

  @Prop()
  bathrooms?: number;

  @Prop()
  number_of_reviews?: number;

  @Prop()
  host_picture_url?: string;

  @Prop()
  host_name?: string;

  @Prop()
  host_since?: string;

  @Prop()
  description?: string;

  //user details (optional)
  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop()
  startDate?: string;

  @Prop()
  endDate?: string;

  @Prop()
  security_deposit?: boolean;

  @Prop()
  additionalNeeds?: string;
}

export const ReservationSchemaDb =
  SchemaFactory.createForClass(ReservationSchema);

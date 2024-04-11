import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  photo: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  review_scores_rating: number;

  @IsString()
  @IsNotEmpty()
  room_type: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  startDate?: string;

  @IsString()
  @IsNotEmpty()
  endDate?: string;

  @IsBoolean()
  @IsNotEmpty()
  security_deposit?: boolean;

  @IsString()
  @IsOptional()
  additionalNeeds?: string;
}

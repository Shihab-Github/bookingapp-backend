import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationRepository } from './reservation.repository';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationRepository.create({
      ...createReservationDto,
      smart_location: 'Hong Kong',
      guests_included: 2,
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      number_of_reviews: 49,
      host_picture_url:
        'https://th.bing.com/th/id/OIP.6sCbmMjeH_GwkkIPED7N0AHaHE?rs=1&pid=ImgDetMain',
      host_name: 'Wilson kok',
      host_since: '2016-01-30',
      description:
        "Located in up and coming Kennedy Town you're walking distance from great coffee, awesome food and wide open views of the harbour and the amazing HK skyline. My place is close to the MTR, bus and trams - venturing into the city centre will only take you 10 minutes. And if you want downtime away from it all, you can Netflix and chill on the comfiest couch in Hong Kong in a light filled atmosphere.",
    });
  }

  findAll() {
    return this.reservationRepository.findAll({});
  }

  findOne(id: number) {
    return this.reservationRepository.findOne({ _id: id.toString() });
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepository.findOneAndUpdate(
      { _id: id.toString() },
      {
        $set: updateReservationDto,
      },
    );
  }
}

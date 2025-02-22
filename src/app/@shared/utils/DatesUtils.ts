import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';

dayjs.locale('es-mx');

export const getFullLocalDate = (date: any): string => {
  return dayjs(date).format('dddd D [de] MMMM [de] YYYY');
};

export const getLocalDate = (date: any): string => {
  return dayjs(date).format('dddd D [de] MMMM');
};

export const getDateTime = (date: any): string => {
  return dayjs(date).format('DD/MM/YYYY HH:mm');
};

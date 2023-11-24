export interface ICarouselItem {
    id: number;
    tipoHabitacionId: number;
    nombre: string;
    descripcion: string;
    link?: string;
    image: string;
    order?: number;
    marginLeft?: number;
}
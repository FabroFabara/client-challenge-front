import { ArticuloDTO } from './articuloDTO';
import { ClienteDTO } from './clienteDTO';

export interface OrdenDTO {
    idOrden?: string;
    fecha?: number;
    cliente?: ClienteDTO;
    articulos?: Array<ArticuloDTO>;
}

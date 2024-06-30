import { OrdenDTO } from './ordenDTO';

export interface ClienteDTO {
    idCliente?: number;
    nombre?: string;
    apellido?: string;
    ordenes?: Array<OrdenDTO>;
}

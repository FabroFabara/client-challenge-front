export * from './articulo.service';
import { ArticuloService } from './articulo.service';
export * from './cliente.service';
import { ClienteService } from './cliente.service';
export * from './orden.service';
import { OrdenService } from './orden.service';
export const APIS = [ArticuloService, ClienteService, OrdenService];

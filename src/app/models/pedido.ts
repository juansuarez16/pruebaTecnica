export interface PedidoInter {
    idPedido: number,
    nombresComprador: string,
    apellidosComprador: string,
    fechaNacimiento: Date,
    direccionEntrega: string,
    CiudadEntrega:string,
    descripcionProducto: string,
    valorProducto: number,
    Cedula:File
}
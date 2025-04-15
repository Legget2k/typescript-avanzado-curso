type Usuario = {
  nombre: string;
  edad: number;
    email: string;
}

type UsuarioValidado = {
    [key in keyof Usuario]: boolean;
}

export type { Usuario, UsuarioValidado };
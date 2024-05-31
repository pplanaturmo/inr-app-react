export enum UserRole {
  PATIENT = "PATIENT",
  PROFESSIONAL = "PROFESSIONAL",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
}
export const roleOptions: { [key in UserRole]: string } = {
  [UserRole.PATIENT]: "Paciente / Usuario",
  [UserRole.ADMIN]: "Administrador del sistema",
  [UserRole.MANAGER]: "Coordinador de departamento",
  [UserRole.PROFESSIONAL]: "Profesional sanitario",
};

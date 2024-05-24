export enum CauseEnum {
  NO_DOSE = "NO_DOSE",
  DOUBLE_DOSE = "DOUBLE_DOSE",
  BLEEDING = "BLEEDING",
  DIET = "DIET",
  DRUG = "DRUG",
  OTHER = "OTHER",
}

export const CauseOptions: { [key in CauseEnum]: string } = {
  [CauseEnum.NO_DOSE]: "Olvido de dosis",
  [CauseEnum.DOUBLE_DOSE]: "Toma doble de dosis",
  [CauseEnum.BLEEDING]: "Sangrado",
  [CauseEnum.DIET]: "Cambio en la dieta",
  [CauseEnum.DRUG]: "Tomar nuevo medicamento",
  [CauseEnum.OTHER]: "Otro",
};

export enum AlertLevelEnum {
  TOO_LOW = "TOO_LOW",
  TOO_HIGH = "TOO_HIGH",
  DANGEROUS = "DANGEROUS",
}

export const alertLevelOptions: { [key in AlertLevelEnum]: string } = {
  [AlertLevelEnum.TOO_LOW]: "Valor de medida muy bajo",
  [AlertLevelEnum.TOO_HIGH]: "Valor de medida muy alto",
  [AlertLevelEnum.DANGEROUS]: "Valor de medida peligroso",
};

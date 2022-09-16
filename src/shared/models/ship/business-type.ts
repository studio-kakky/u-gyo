export const BusinessType = {
  Standard: "遊漁船",
  GuideService: "ガイド船",
} as const;

export type BusinessType = typeof BusinessType[keyof typeof BusinessType];

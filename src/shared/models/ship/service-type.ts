export const ServiceType = {
  Shared: "乗合",
  PrivateCharter: "仕立て",
} as const;

export type ServiceType = typeof ServiceType[keyof typeof ServiceType];

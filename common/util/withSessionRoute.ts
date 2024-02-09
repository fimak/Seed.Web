export type User = {
  token: string,
  memberId: string
}

export const ironSessionKey = "$816BI!Mww2@K#$j134$Okn0%nafvlNs";

declare module "iron-session" {
  interface IronSessionData {
    referralData: User
  }
}
export enum UserRole {
  MAKER = 'MAKER',
  MAKER_CHECKER = 'MAKER_CHECKER'
}
 
export const users = {
  makerOnly: {
    username: '105360870',
    password: process.env.MAKER_PASSWORD || 'Quality@123',
    role: UserRole.MAKER
  },
 
  makerChecker: {
    username: '105360435',
    password: process.env.CHECKER_PASSWORD || 'Quality@123',
    role: UserRole.MAKER_CHECKER
  }
};
import { DateRange } from "react-day-picker";

export interface IPayload {
  Tablet: string | undefined;
  DateRange: {
    From: string | undefined;
    To: string | undefined;
  };
  Period: string;
  Time: string | undefined;
}

export type IProps = {
  time: Date | undefined;
  setTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
  tablet: string | undefined;
  setTablet: React.Dispatch<React.SetStateAction<string | undefined>>;
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
};

export type IBackendData = {
  schedules: IPayload[];
};

export type IConnectSuccess = {
  message: string;
  username: string;
};

export type IConnectRegister = {
  username: string;
  firstName: string;
  dateOfJoin: string;
};

export type IUserStorage = IConnectRegister & {
  googleAuthToken: string;
};

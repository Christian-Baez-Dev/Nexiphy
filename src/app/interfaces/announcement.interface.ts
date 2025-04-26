import { AnnouncementStatus } from "./announcement.enum";
import { Currency } from "./currency.interface";

export interface Announcement {
  id:           string;
  created_at:   Date;
  updated_at:   Date;
  title:        string;
  description:  string;
  price:        number;
  quantity:     number;
  isStockable:  boolean;
  status:       string;
  isSold:       boolean;
  marketUser:   MarketUser;
  currency:     Currency;
  municipality: Municipality;
  images:       string[];
  categories:   string[];
}

export interface MarketUser {
  firstName:   string;
  lastName:    string;
  id:          string;
  userPicture: string;
  rating:      number;
  created_at:   Date;
}

export interface Municipality {
  name:     string;
  province: Province;
}

export interface Province {
  name: string;
}


export const StatusColor: Record<AnnouncementStatus, string> = {
  [AnnouncementStatus.USED]: '#cdae00',
  [AnnouncementStatus.NEW]: '#3ccd00',
  [AnnouncementStatus.OPEN_BOX]: '#a8cd00',
  [AnnouncementStatus.LOW_USED]: '#c4cd00',
};

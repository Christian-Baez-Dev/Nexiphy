export interface UserProfile {
  user:      FullUser;
  stats:     Stats;
  isOwnProfile: boolean
  isFollowing?: boolean
}


export interface Stats {
  publishes: number;
  followers: number;
  following: number;
}

export interface FullUser {
  id:          string;
  username:    string;
  fullname:    string;
  avatar:      string;
  bio:         string;
  birthday:    Date;
  location:    string;
  isVerified:  boolean;
  privacyMode: string;
}

export interface StatsComponentInterface{
  avatar:      string;
  username:    string;
  fullname:    string;
  publishes:   number;
  followers:   number;
  following:   number;
}

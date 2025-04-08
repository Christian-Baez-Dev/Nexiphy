import { User } from "./user.interface";

export interface Publish {
  id:           string;
  created_at:   Date;
  updated_at:   Date;
  content:      string;
  images:       string[];
  commentCount: number;
  likesCount:   number;
  author:       User;
}

export interface previewComent{
  postId: string;
  commentCount: number;
}


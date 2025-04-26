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
  hasLiked: boolean;
}

export interface previewComent{
  postId: string;
  commentCount: number;
}


export interface CreateCommentDto {
  content: string;
  postId?:  string;
  parentCommentId?: string;
}

export interface CommentApp{
  author: User;
  content: string;
  created_at:   Date;
  id: string;
  isReply: false
  likesCount: number
  parentCommentId?: string
  updated_at:   Date;
  repliesCount: number
}


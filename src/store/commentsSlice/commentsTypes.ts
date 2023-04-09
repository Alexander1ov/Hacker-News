export interface Comments {
  by: string;
  id: number;
  kids: Array<number>;
  parent: number;
  text: string;
  time: number;
  type: string;
}
export interface Answer {
  by: string;
  id: number;
  kids: Array<number>;
  parent: number;
  text: string;
  time: number;
  type: string;
}

export interface CommentsState {
  list: Comments[];
  answer: Answer[];
  loading: boolean;
  error: string | null;
}

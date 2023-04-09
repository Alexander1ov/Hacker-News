export interface News {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  completed: boolean;
}

export interface NewsState {
  list: News[];
  loading: boolean;
  error: string | null;
}

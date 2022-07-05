export interface SingleTask {
  id: string;
  title: string;
  createdAt: Date;
  category: string;
  isDone: 0 | 1;
}

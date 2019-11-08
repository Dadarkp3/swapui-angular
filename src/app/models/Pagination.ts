export class Pagination {
  count: number;
  next: string | null;
  previous: string | null;
  currentPage: number;
  totalPages: number;

  constructor() {
    this.currentPage = 1;
  }
}

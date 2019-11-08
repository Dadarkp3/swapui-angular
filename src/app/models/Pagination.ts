import { PaginationButton } from "./PaginationButton";

export class Pagination {
  count: number;
  next: string | null;
  previous: string | null;
  currentPage: number;
  totalPages: number;
  public buttonsPagination: PaginationButton[] = [];

  constructor() {
    this.currentPage = 0;
    this.buttonsPagination[0] = new PaginationButton();
    this.buttonsPagination[0].isCurrent = true;
  }
}

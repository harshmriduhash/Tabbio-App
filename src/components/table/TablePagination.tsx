import Table from ".";

interface Pagination {
  nextPage: number;
  prevPage: number;
  currentPage: number;
  pages: number;
  total: number;
}

interface Props {
  data: any[];
  pagination: Pagination;
  page: number | string;
  pageLimit: number | string;
  setPageLimit: (arg: number) => void;
  setPage: (arg: number) => void;
}

const TablePagination = ({
  data,
  pagination,
  page,
  pageLimit,
  setPage,
  setPageLimit,
}: Props) => {
  //   const [pageLimit, setPageLimit] = useState<string | number>(10);
  //   const [page, setPage] = useState<string | number>(1);

  const handleChangePageLimit = (v: any) => {
    setPageLimit(v);
    setPage(1);
  };
  const handleChangePage = (v: any) => setPage(v);

  const onNextPage = (p: any) => {
    if (pagination.currentPage !== pagination.pages) {
      setPage(p);
    }
  };

  const onPrevPage = (p: any) => {
    if (pagination.currentPage > 1) {
      setPage(p);
    }
  };

  return (
    <Table.Pagination
      show={data?.length > 0}
      totalPages={pagination.pages}
      activePage={Number(page)}
      activeLimit={Number(pageLimit)}
      nextPage={pagination.nextPage}
      prevPage={pagination.prevPage}
      pageLimit={[10, 20, 30, 40, 50]}
      onPrevPage={onPrevPage}
      onNextPage={onNextPage}
      onSelectPage={handleChangePage}
      onChangeLimit={handleChangePageLimit}
    />
  );
};

export default TablePagination;

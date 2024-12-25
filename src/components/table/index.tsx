import {
  PropsChildrenOnly,
  RowPhotoProps,
  RowPhoto,
  ColSortProps,
  ColSort,
  SearchTableProps,
  SearchTable,
  HeaderView,
  HeaderViewItemProps,
  HeaderViewItem,
  TableRow,
  TableItems,
  RowProps,
  Row,
  CellProps,
  Cell,
  CellRowsProps,
  CellRows,
  RowCheckInputProps,
  RowCheckInput,
  StatusCellProps,
  StatusCell,
  PaginationProps,
  Pagination,
  NoData,
  NoDataProps,
} from "./Components";

interface TableProps {
  children: React.ReactNode;
  show?: boolean;
}

const Table: React.FC<TableProps> & {
  Photo: React.FC<RowPhotoProps>;
  SortCol: React.FC<ColSortProps>;
  SearchTable: React.FC<SearchTableProps>;
  HeaderView: React.FC<PropsChildrenOnly>;
  HeaderViewItem: React.FC<HeaderViewItemProps>;
  TableRow: React.FC<PropsChildrenOnly>;
  TableItems: React.FC<PropsChildrenOnly>;
  Row: React.FC<RowProps>;
  Cell: React.FC<CellProps>;
  CellRows: React.FC<CellRowsProps>;
  RowCheckInput: React.FC<RowCheckInputProps>;
  StatusCell: React.FC<StatusCellProps>;
  Pagination: React.FC<PaginationProps>;
  NoData: React.FC<NoDataProps>;
} = ({ children, show }) => {
  return show ? (
    <div
      className="rounded-xl border
     pb-2.5 border-stroke dark:border-strokedark 
    dark:bg-boxdark bg-white xl:pb-1 min-h-[450px]"
    >
      <div className="max-w-full overflow-x-auto pb-12 min-h-[440px]">
        <table className="w-full table-auto rounded-t-xl">{children}</table>
      </div>
    </div>
  ) : null;
};

Table.Photo = RowPhoto;
Table.SortCol = ColSort;
Table.SearchTable = SearchTable;
Table.HeaderView = HeaderView;
Table.HeaderViewItem = HeaderViewItem;
Table.TableRow = TableRow;
Table.TableItems = TableItems;
Table.Row = Row;
Table.Cell = Cell;
Table.CellRows = CellRows;
Table.RowCheckInput = RowCheckInput;
Table.StatusCell = StatusCell;
Table.Pagination = Pagination;
Table.NoData = NoData;

export default Table;

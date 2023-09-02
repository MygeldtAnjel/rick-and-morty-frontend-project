import { Pagination, Box } from '@mui/material';

interface PaginationListInterface {
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  count: number;
}

const PaginationList: React.FC<PaginationListInterface> = ({page, handleChange, count}) =>{
  return (
    <Box justifyContent="center" display="flex" marginTop="15px">
      <Pagination variant="outlined" shape="rounded" color="primary" count={count} page={page} onChange={handleChange} />
    </Box>
  );
}

export default PaginationList;
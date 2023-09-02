import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Header, CharacterList, PaginationList, SkeletonList } from '@/components';
import { Character } from '@/models/character';
import { getDataPagination } from '@/services/getDataPagination';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () =>{
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const [dataList,setDataList] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handlePagination = (_event: React.ChangeEvent<unknown>, value: number) => {
    getData(value);
    setPage(value);
  };

  const getData = async(pageNumber: number) => {
    try {
      setLoading(true);
      const dataResponse = await getDataPagination(pageNumber);
      setLoading(false);
      setPages(dataResponse?.pages);
      setDataList(dataResponse?.characters);
    } catch (error){
      console.log(error);
    }
  };

  useEffect(()=>{
    getData(1);
  },[]);

  return (
    <>
      <Header/>
      <Container sx={{ pt: 5, pb: 5 }}>
        {loading ?
          <SkeletonList />
        :
          <>
            <CharacterList 
              characters={dataList}
            />
            <PaginationList page={page} count={pages} handleChange={handlePagination}/>
          </>
        }
      </Container>
    </>
  )
}

export default Home;
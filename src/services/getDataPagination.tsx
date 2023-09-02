import { Character } from '@/models/character';
import axios from 'axios';

export const getDataPagination = async(page: number): Promise<{pages: number, characters: Character[]}> => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}characters/${page}`, {});
    return {
        pages: Math. trunc(response?.data?.data.characters?.info?.count / 20),
        characters: response?.data?.data?.characters?.results 
    }
}
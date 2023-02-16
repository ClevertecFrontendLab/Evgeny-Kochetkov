import { useHttp } from "../components/hooks/http.hook";

export const useBooksService = () => {
    const {loading, request, error, clearError} = useHttp();

    const apiBase = 'https://strapi.cleverland.by';

    if(loading) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    const getAllBooks = async () => {
        const res = await request(`${apiBase}/api/books`);
        return res;
    }

    const getBook = async (id) => {
        const res = await request(`${apiBase}/api/books/${id}`);
        return res;
    }

    const getCategories = async () => {
        const res = await request(`${apiBase}/api/categories`)
        return res
    }


    return {loading, error, clearError, getAllBooks, getBook, getCategories}
}

/* fetch('https://strapi.cleverland.by/api/books/2').then(response => response.json()).then(json => console.log(json)) */
import { useState } from 'react'
import useSWR from "swr"
import { getData } from '../dataApi'

const fetcher = (url: string) => getData(url)

const useCharacters = () => {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState<number>(1)
    const URL = `https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`

    const { data, isLoading } = useSWR(URL, fetcher)

    const onPrevius = () => {
        isLoading === false ? setPage(page - 1) : setPage(page)
        //mutate()
    }

    const onNext = () => {
        isLoading === false ? setPage(page + 1) : setPage(page)
        //mutate()
    }

    return {
        setSearch: setSearch,
        characters: data?.results,
        info: data?.info,
        loading: isLoading || !data,
        onPrevius: onPrevius,
        onNext: onNext,
        page: page
    }

}

export default useCharacters
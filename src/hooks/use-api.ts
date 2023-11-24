import { useEffect, useState } from 'react'
import { GetCharactersResponse } from '../types/character'
import { ramActions } from '../api/rick-and-morty-api'

const useAPI = () => {
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [data, setData] = useState<GetCharactersResponse>()

	useEffect(() => {
		getCharacters()
	}, [page])

	const getCharacters = async () => {
		setLoading(true)
		const result = await ramActions.getCharacters(page)
		setData(result)
		setLoading(false)
	}

	const nextPage = () => {
		const topPage = page >= (data?.info?.pages || 0) ? data?.info.pages : page + 1
		setPage(topPage || 0)
	}

	const prevPage = () => {
		const _page = !data?.info?.prev ? 0 : page - 1
		setPage(_page)
	}

	return { loading, data, actions: { getCharacters, nextPage, prevPage } }
}

export default useAPI

import ramAPI from '../config/rickandmorty'
import { GetCharactersResponse } from '../types/character'

const ramActions = {
	getCharacters: async (page: number): Promise<GetCharactersResponse> => {
		const result = await ramAPI.get(`character?page=${page}`)
		return result.data
	}
}

export { ramActions }

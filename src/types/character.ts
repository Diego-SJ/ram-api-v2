type TypeBase = {
	name: string
	url: string
}

type CharacterOrigin = TypeBase
type CharacterLocation = TypeBase

export type Character = {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	origin: CharacterOrigin
	location: CharacterLocation
	image: string
	episode: string[]
	url: string
	created: string
}

export type GetCharactersResponse = {
	info: {
		count: number
		pages: number
		next: string | null
		prev: string | null
	}
	results: Character[]
}

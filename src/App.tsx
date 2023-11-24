import { useEffect, useRef } from 'react'
import './App.css'
import Layout from './ui/layout'
import useAPI from './hooks/use-api'
import { Card, List } from './ui/components/cards-list'

function App() {
	const { actions, loading, data } = useAPI()
	const mounted = useRef(false)

	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true
			actions.getCharacters()
		}
	}, [actions])

	return (
		<Layout onNext={actions.nextPage} onPrev={actions.prevPage}>
			{loading && <h1>Loading...</h1>}

			<List>
				{data?.results?.map((c) => (
					<Card {...c} />
				))}
			</List>
		</Layout>
	)
}

export default App

import { Character } from '../../types/character'
import './styles.css'

type ListProps = {
	children?: React.ReactNode
}

export const List: React.FC<ListProps> = (props) => {
	return <ul className="list">{props.children}</ul>
}

export const Card = (props: Character) => {
	return (
		<li className="list-item">
			<div className="card">
				<img className="card-avatar" src={props.image} alt={props?.name} />
				<div className="card-header">
					<h3 className="card-header_name">{props?.name}</h3>
					<h3 className="card-header_location">{props?.location?.name}</h3>
				</div>
			</div>
		</li>
	)
}

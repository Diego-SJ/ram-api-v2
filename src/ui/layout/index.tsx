import './styles.css'

type LayoutProps = {
	children: React.ReactNode
	onPrev: () => void
	onNext: () => void
}

const Layout = (props: LayoutProps) => {
	return (
		<div className="layout">
			<div className="layout-buttons">
				<button onClick={props.onPrev}>Prev</button>
				<button onClick={props.onNext}>Next</button>
			</div>
			{props?.children}
		</div>
	)
}

export default Layout

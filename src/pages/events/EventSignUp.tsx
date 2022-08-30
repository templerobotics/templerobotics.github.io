import React from 'react'

import Styles, { EventSignUpProps } from './EventSignUpStyles'

class EventSignUp extends React.Component<{events: EventSignUpProps}, {hover: boolean}>{
	constructor(props: never) {
		super(props)
		this.state = { hover: false }
	}

	render (): React.ReactElement {
		const routeChange = (url: string): void => { window.open(url) }

		return (
			<Styles.SignUpContainer
				onMouseEnter={() => this.setState({hover: true})}
				onMouseLeave={() => this.setState({hover: false})}
				hover={this.state.hover}
				onClick={() => routeChange(this.props.events.src)}>
				<h2>{this.props.events.title}</h2>
				<div>
					{this.props.events.description}
				</div>
			</Styles.SignUpContainer>
		)
	}
}

export default EventSignUp

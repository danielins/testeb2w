/**
 * Classe do componente Timeline Item
 * - Itens de listas de marcos com data e descrição
 */
import React from 'react';

class TimelineItem extends React.Component {

	render() {
		return (
			<li className="timeline-list__item">
				<time className="timeline-list__time">
					{ this.props.month } <br />
					{ this.props.year }
				</time>
				<div className="timeline-list__text">
					<h3 className="timeline-list__title">
						{ this.props.name }
						<span className="timeline-list__location">
							{ this.props.location }
						</span>
					</h3>
					<p>
						{ this.props.description }
					</p>
				</div>
			</li>
		);
	}

}

export default TimelineItem;
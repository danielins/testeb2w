/**
 * Classe do componente Section
 * - Elemento base de uma seção do curriculo
 */
import React from 'react';

class Section extends React.Component {

	render() {

		return (
			<section className="info">
				
				<header className="info__header">
					<h2 className={ `info__heading--${ this.props.title.toLowerCase().split(' ').join('-') } info__heading`}>
						<span className="info__heading__ico"></span>
						<span>{ this.props.title }</span>
					</h2>
				</header>

				{ this.props.children }

			</section>
		);

	}

}

export default Section;
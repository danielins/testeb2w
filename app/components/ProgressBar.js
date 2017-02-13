/**
 * Classe do componente Progress Bar
 * - Barra de progresso de uma porcentagem de 0 a 100
 */
import React from 'react';

class ProgressBar extends React.Component {

	render() {

		return(
			<li className="progress-list__item" title={ `${ this.props.value }%` }>
				<span className="progress-list__name">
					{ this.props.progress }
				</span>
				<progress className="progress-list__bar" value={ this.props.value } max="100"></progress>
			</li>
		);

	}

}

export default ProgressBar;
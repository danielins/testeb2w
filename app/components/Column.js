/**
 * Classe do componente Column
 * - Uma coluna da página
 */
import React from 'react';

class Column extends React.Component {

	render() {
		return (
			<div className={`column column--${ this.props.theme }`}>
				{this.props.children}
			</div>
		);
	}

}

export default Column;
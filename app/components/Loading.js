/**
 * Classe do componente Loading
 * - Elemento do Loading, exibido enquanto a API é baixada
 */
import React from 'react';

class Loading extends React.Component {

	render() {
		return (
			<span className="main-loading" title="Carregando..."></span>
		);
	}

}

export default Loading;
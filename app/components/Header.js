/**
 * Classe do componente Header
 * - Cabeçalho do curriculo
 */
import React from 'react';

class Header extends React.Component {

	render() {

		return (
			<header className="main-header info">
				<img src={this.props.thumb} alt={this.props.name} className="main-header__avatar" />
				<h1 className="main-header__heading">
					{ this.props.name }
				</h1>
				<p className="main-header__profession">
					{ this.props.profession }
				</p>
			</header>
		);
	}

}

export default Header;
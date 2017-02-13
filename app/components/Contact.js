/**
 * Classe do componente Contact
 * - Item de contato
 */
import React from 'react';

class Contact extends React.Component {

	/**
	 * generateContact()
	 * - Gera o HTML do contato de acordo com o tipo de contato
	 * @param type {String} - tipo de contato
	 * @return {JSX} HTML do contato
	 */
	generateContact( type ) {

		switch ( type ) {
			case 'email':
				return <a href={ `mailto:${ this.props.value }` }>{ this.props.value }</a>;
				break;
			case 'website':
				return <a href={ `${this.props.value}` } target={ "_blank" }>{ this.props.value }</a>;
				break;
			default:
				return <span>{ this.props.value }</span>;
				break;
		}

	}

	render() {

		return(
			<li className={`contact-list__item-${ this.props.contactType } contact-list__item`}>
				{	this.generateContact( this.props.contactType )	}
			</li>
		);

	}

}

export default Contact;
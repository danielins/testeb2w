import React from 'react';

import $ from 'jquery';

import Loading from './Loading';
import Column from './Column';
import Header from './Header';
import ProgressBar from './ProgressBar';
import Contact from './Contact';
import Section from './Section';
import TimelineItem from './TimelineItem';

class Home extends React.Component {

	componentDidMount(){

		// Recupera os dados da API e seta como state do componente

		$.getJSON('http://www.mocky.io/v2/57dfec211000009020598073', (json) => {
			this.setState( json );
		});

	}

	render() {

		// Se já houver state, carrega as colunas
		// Se não houver, carrega o loading

		return this.state ? (
			<article className="resume columns">

				<Column key="left" position="left" theme="theme-1">
					<Header
						key="main-header"
						name={ this.state.name }
						thumb={ this.state.thumb }
						profession={ this.state.profession }
					/>

					<Section
						key={ this.state.profile.title.toLowerCase().split(' ').join('-') }
						title={ this.state.profile.title }
					>
						<p className="info_text">
							{ this.state.profile.description }
						</p>
					</Section>

					<Section
						key={ this.state.objective.title.toLowerCase().split(' ').join('-') }
						title={ this.state.objective.title }
					>
						<p className="info_text">
							{ this.state.objective.description }
						</p>
					</Section>

					<Section
						key={ this.state.personalSkill.title.toLowerCase().split(' ').join('-') }
						title={ this.state.personalSkill.title }
					>
						<ul key="personalSkill-list" className="progress-list">
							{Object.keys( this.state.personalSkill ).map(( prop ) => {
								if ( prop != 'title' ) {
									return <ProgressBar
										key={ prop.toLowerCase().split(' ').join('-') }
										progress={ prop }
										value={ this.state.personalSkill[prop] }
									/>;
								}
							})}
							
						</ul>
					</Section>

					<Section
						key={ this.state.contactMe.title.toLowerCase().split(' ').join('-') }
						title={ this.state.contactMe.title }
					>
						<ul key="contactMe-list" className="contact-list">
							{Object.keys( this.state.contactMe ).map(( prop ) => {
								if ( prop != 'title' ) {
									return <Contact
										key={ prop.toLowerCase().toLowerCase().split(' ').join('-') }
										contactType={ prop.toLowerCase() }
										value={ this.state.contactMe[prop] }
									/>;
								}
							})}
							
						</ul>
					</Section>

				</Column>
				<Column key="right" position="right" theme="theme-2">

					<Section
						key={ this.state.education.title.toLowerCase().split(' ').join('-') }
						title={ this.state.education.title }
					>
						<ul className="timeline-list">
							{this.state.education.university.map((course) => {
								return <TimelineItem
									month={ course.month }
									year={ course.year }
									name={ course.courseName }
									location={ `${course.universityName}, ${course.universityCity}` }
									description={ course.description } />;
							})}
						</ul>
					</Section>

					<Section
						key={ this.state.experience.title.toLowerCase().split(' ').join('-') }
						title={ this.state.experience.title }
					>
						<ul key="experience-list" className="timeline-list">
							{this.state.experience.company.map((job) => {
								return <TimelineItem
									month={ job.month }
									year={ job.year }
									name={ job.roleName }
									location={ `${job.companyName}, ${job.companyCity}` }
									description={ job.description } />;
							})}
						</ul>
					</Section>

					<Section
						key={ this.state.professionalSkill.title.toLowerCase().split(' ').join('-') }
						title={ this.state.professionalSkill.title }
					>
						<ul key="professionalSkill-list" className="progress-list">
							{this.state.professionalSkill.tools.map(( skill ) => {
								return <ProgressBar
									progress={ skill.toolName }
									value={ skill.toolsSkill }
								/>;
							})}
							
						</ul>
					</Section>

					<Section
						key={ this.state.award.title.toLowerCase().split(' ').join('-') }
						title={ this.state.award.title }
					>
						<ul key="award-list" className="timeline-list">
							<TimelineItem
								key={ `award-${ this.state.award.awardName }` }
								month={ this.state.award.month }
								year={ this.state.award.year }
								name={ this.state.award.awardName }
								location={ `${this.state.award.projectName}, ${this.state.award.city}` }
								description={ this.state.award.description } />
						</ul>
					</Section>

				</Column>
			
			</article>
		) : <Loading key="loading" />
	}

}

export default Home;
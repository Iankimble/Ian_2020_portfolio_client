import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Nav } from 'react-bootstrap';
import style from '../styles/foundational_style.module.css';
import { getBlogContent } from '../../API';
import { Fade } from 'react-reveal';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			blog: [],
			error: false,
			isLoading: true,
			latestPost: ''
		};
	}

	componentDidMount() {
		getBlogContent().then((data) => {
			if (data.error) {
				this.setState({
					error: true
				});
			}
			this.setState({
				blog: data.reverse(),
				isLoading: false,
				latestPost: this.state.blog[0]
			});
		});
	}

	render() {
		return (
			<div>
				<Container fluid style={{ textAlign: 'center' }}>
					<Row>
						<Col xs={12}>
							<Fade top>
								<Jumbotron className={style.pageHeaderHome}>
									<Row>
										<Col lg={6} md={6} />
										<Col lg={6} md={6}>
											<h1>Welcome</h1>
										</Col>
									</Row>
								</Jumbotron>
							</Fade>
						</Col>
					</Row>
					<Row>
						<Col>
							<Nav className="justify-content-center" style={{ margin: '25px' }}>
								<Nav.Item>
									<a
										href="https://www.linkedin.com/in/iank6/"
										target="_blank"
										rel="noopener noreferrer"
										className={style.subNavLinks}
									>
										LinkedIn
									</a>
								</Nav.Item>
								<Nav.Item>
									<a
										href="https://github.com/Iankimble"
										target="_blank"
										rel="noopener noreferrer"
										className={style.subNavLinks}
									>
										Github
									</a>
								</Nav.Item>
								<Nav.Item>
									<a
										href="https://twitter.com/KimbleDev"
										target="_blank"
										rel="noopener noreferrer"
										className={style.subNavLinks}
									>
										Twitter
									</a>
								</Nav.Item>
							</Nav>
						</Col>
					</Row>
					<hr />
				</Container>
			</div>
		);
	}
}

export default Home;

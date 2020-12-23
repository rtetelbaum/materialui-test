import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import './App.css';

class App extends React.Component {

	state = {
		clicked: false
	}

	clickHandler = () => {
		if (this.state.clicked === false) {
			this.setState({clicked: true})
		} else if (this.state.clicked === true) {
			this.setState({clicked: false})
		}
	}

	render() {
		return (
			<div className="App">
				<DeleteIcon onClick={this.clickHandler} />
				{ !this.state.clicked ? 
					<div>
						<Typography variant="h3">
							There should be a delete icon above, and this h3 should be in Roboto font.
						</Typography>
					</div>
					:
					null
				}
			</div>
		);
	}
}

export default App;

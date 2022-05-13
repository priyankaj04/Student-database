import logo from './logo.svg';
import Grow from '@mui/material/Grow';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import './App.css';
import styled from './style.js'

function App() {
	const classes =styled();
	return (
		<div className="App">
			<Container maxWidth='lg'>
				<AppBar  position="static" color="inherit">
					<Typography  variant = "h2" align = "center">Students DataBase</Typography>
				</AppBar>

				<Grow in>
					<Container>
						<Grid container justify="space-between" alignItems="strect">
							<Grid item xs={12} sm={7}>
								<AppBar className={classes.appBar} position="static" color="inherit">
									<Student/>
								</AppBar>
							</Grid>
							<Grid item xs={12} sm={4}>
								<AppBar className={classes.appBar} position="static" color="inherit">
									<Create/>
								</AppBar>
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</div>
	);
}

export default App;

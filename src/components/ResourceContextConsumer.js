import React from 'react'
import ResourceContext from '../contexts/resourceContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bgimg from './images.png'
import Grid from '@material-ui/core/Grid';



  const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	card: {
	  maxWidth: 345,
	},
	media: {
	  height: 140,
	},
  });
  
 function MediaCard(props) {
	const classes = useStyles();
  
	return (
	<React.Fragment>
        <Grid item xs={1} md={2} lg={3} >
          
	  <Card className={classes.card}>
		<CardActionArea>
		  <CardMedia
			className={classes.media}
			image={bgimg}
			title={props.Album.Title}
		  />
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2" noWrap>
			  {props.Album.Title}
			</Typography>
		  </CardContent>
		</CardActionArea>
		<CardActions>
		  <Button size="small" color="primary">
			Share
		  </Button>
		  <Button size="small" color="primary">
			Learn More
		  </Button>
		</CardActions>
	  </Card>
	  
        </Grid>
		</React.Fragment>
	);
  }

class ResourceContextConsumer extends React.Component {
	static contextType = ResourceContext;
	state={}
	
	updateName(e,fn){
		this.state.setName(e,fn)
		this.setState({name:fn})
	}
	
	changeName(){
		this.setState({name:'Minhal Sayed'})
	}
	
	componentWillMount(){
		this.setState(this.context);
	}
	
	render(){
		return (
		<ResourceContext.Consumer>{
			(context)=>
			<div style={{"flexGrow":1}}>
				<Grid container spacing={1}>
				{context.data!=undefined? context.data.map(Album=>
					<MediaCard Album={Album} key={Album.AlbumId}/>
					
					) :'' }
					</Grid>
			</div>
			
			}</ResourceContext.Consumer>);
		
	}
}

export default ResourceContextConsumer;
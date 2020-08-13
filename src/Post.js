import React from 'react';
// import Comment from './Comment'
import img from './Assets/sample_image.png'

import './Cards/card-style.css'
import { MDBIcon} from 'mdbreact'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 100,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));




function Post (props) {
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
       console.log(props.post)
        return (
            <div > 
            <Card className="mx-auto" style={{marginBottom: '3rem', marginTop: '2rem', marginRight: '3rem', backgroundColor: 'lightgrey', width: '60%'}}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={img}>
                    
                    </Avatar>
                }
                    action={
                       
                    <IconButton >
                        <MDBIcon><i onClick={() => {props.handleDelete(props.post)}} className="far fa-trash-alt"></i></MDBIcon>
                    </IconButton>
                }
                title={<h6>{props.post.attributes.user.username}</h6>}
                subheader={<p style={{fontStyle: 'italic'}}>{props.post.attributes.created_at.split("T")[0]}</p>}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <p style={{fontWeight: 'bold'}}>{props.post.attributes.content}</p>
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <i className="fa fa-heart" style={{color: 'red'}} onClick={() => props.increaseLikes(props.post)} aria-hidden="false"><p style={{color: 'black'}}>{props.post.attributes.likes}</p></i>

                    </IconButton>
                    <IconButton >
                    <button className="btn btn-sm" onClick={() => props.toggleResolved(props.post)}>{props.post.attributes['resolved?']?"Resolved":"Unresolved"}</button>
                    </IconButton>
                    
                    <IconButton 
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton >
                </CardActions>
                   
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <form>
                                <textarea className="skilltextarea" placeholder="Respond to this post"/>
                                <div >
                                    <input type="submit"/><br></br>
                                    <Typography style={{color: 'red'}}>{props.post.attributes.comments.length} {props.post.attributes.comments.length > 1 ? "comments" : "comment"}</Typography>
                                </div>
                                
                            </form>                       
                        
                        <br></br>
                        
                            {props.post.attributes.comments !== null ?
                                <p>{props.post.attributes.comments.map((c, i) => c.content)}</p>:
                                <p></p>
                            
                            }
                        
                        </CardContent>
                    </Collapse>
           

            </Card>
            </div>
         );
    
}
 
export default Post;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ImgMediaCard() {
  return (
    <div className='col-'>
    <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 5 }}>
      <Card sx={{ maxWidth: 300 }} className='card bg-success'>
        <CardMedia
          // component="img"
          // image="https://via.placeholder.com/300"
          alt="green iguana"
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="btn bg-white" size="small">Share</Button>
         
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300 }} className='card bg-primary'>
        <CardMedia
   
          alt="green iguana"
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="btn bg-white" size="small">Share</Button>
          
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300 }} className='card bg-warning'>
        <CardMedia
          // component="img"
          // image="https://via.placeholder.com/300"
          alt="green iguana"
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button className='btn text-muted' size="small ">Share</Button>
        
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300 }} className='card bg-danger'>
        <CardMedia
          // component="img"
          // image="https://via.placeholder.com/300"
          alt="green iguana"
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button className='btn text-muted' size="small ">Share</Button>
        
        </CardActions>
      </Card>
    </Box>
    </div>
  );
}
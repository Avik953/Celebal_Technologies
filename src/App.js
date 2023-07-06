import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React,{ useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    alert(' Submitted:'+ "\n Name: "+name+"\n Email: "+email+"\n Phone Number: "+number+"\n Message: "+message
    )
  };




  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center" style={{padding:"20px 10px 0 0", color:"red"}}>
        Celebal Technologies
      </Typography>
      <Card style={{maxWidth: 450, margin:"0 auto", padding:"20px 5px"}}>
        <CardContent>
        <Typography gutterBottom variant="h5">Contact Us</Typography>
         <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <TextField
                label="Name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="email"
                label="Email"
                placeholder="Enter your email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="number"
                label="Phone Number"
                placeholder="Enter your phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Message"
                multiline
                rows={5}
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

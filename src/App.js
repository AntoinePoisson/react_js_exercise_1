import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Title from './Style/Title'
import './Style/Style.css'

export default class App extends Component {
   state = {
      data: null,
      clickId: -1,
   }

   async componentDidMount() {
      const url = "https://jsonplaceholder.typicode.com/users";
      const reponse = await fetch(url);
      const data = await reponse.json();

      this.setState({
         data: data
      })
   }

   changeMoreInfoId(index) {
      this.setState({
         clickId: (this.state.clickId === index) ? -1 : index
      })
   }

   displayPerso() {
      if (this.state.data !== null)
         return this.state.data.map((info, index) => {
            if (this.state.clickId !== index) {
               return (
                  <div key={index}>
                     <Grid container>
                     <Box boxShadow={3} bgcolor="background.paper" m={1} p={1}
                        style={{ width: '19rem', height: '10rem' }}>
                        <Grid container alignItems="baseline" justify="space-between">
                        <h4>{ info.name }</h4>
                        <button className="myButton" type='box' onClick={this.changeMoreInfoId.bind(this, index)}>+</button>
                        </Grid>
                        <p className="blocktext">
                           Username : { info.username }<br/>
                           Email : { info.email }<br/>
                        </p>
                        </Box>
                     </Grid>
                  </div>
               )
            } else {
               return (
                  <div key={index}>
                     <Grid container justify="center">
                     <Box boxShadow={3} bgcolor="background.paper" m={1} p={1}
                        style={{ width: '19rem', height: '16rem' }}>
                        <Grid container alignItems="baseline" justify="space-between">
                        <h4>{ info.name }</h4>
                        <button className="myButton" type='box' onClick={this.changeMoreInfoId.bind(this, index)}>-</button>
                        </Grid>
                        <p className="blocktext">
                           Username : { info.username }<br/>
                           Email : { info.email }<br/>
                           Phone : { info.phone }<br/>
                           Address : { info.address.suite }, { info.address.street }, { info.address.city }<br/>
                           Company : <strong>{ info.company.name }</strong> : { info.company.catchPhrase }<br/>
                        </p>
                     </Box>
                     </Grid>
                  </div>
               )
            }
         })
   }
   render() {
      return (
         <div>
            <Title></Title>
            <Grid container justify="center">
               { this.displayPerso() }
            </Grid>
         </div>
      );
   }
}
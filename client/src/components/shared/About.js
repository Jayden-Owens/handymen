import React from 'react';
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'



const DividerExampleVertical = () => (


    <Segment>
      <Grid columns={2} relaxed='very'>
      < Grid.Column>
        <p>
          we are very pleased to have you reading our paragragh
        </p>
        <p>
          have you watched the new season of attack on titan?
        </p>
        <p>
          if you havent.. you should
        </p>
        <p>
          10/10 also my hero acadamia just started again. 
        </p>
      </Grid.Column>
      <Grid.Column>
          <p>
             i mean its your choice
          </p>
          <p>
            just a couple suggestions
          </p>
          <p>
            i know what people say about anime. 
          </p>
          <p>
            but nerds are the best
          </p>
        </Grid.Column>
      </Grid>

      <Divider vertical>And</Divider>
    </Segment>

)

export default DividerExampleVertical

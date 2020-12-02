import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { DashboardContainer } from './style'

export default function Dashboard() {
  return (
    <DashboardContainer>
     <Grid container>
       <Grid item></Grid>
       <Grid item></Grid>
       <Grid item></Grid>
     </Grid>
      
    </DashboardContainer>
  )
}

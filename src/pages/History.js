import React from "react";
import { Header } from "../components/header";
import { Container, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { MenuNav } from "../components/menu";
const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 160,
    background: `#b3f5d8`,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    textAlign: `right`,
    fontSize: 8,
    marginBottom: 12,
  },
});

function History(props) {
  let nums = Array.from(Array(10).keys());

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={3} lg={2}>
          <MenuNav loginId={props.loginId} />
        </Grid>

        <Grid item xs={8} sm={9} md={9} lg={10}>
          <Header header="히스토리"></Header>
          <Container className="history">
            <GridList cols={3}>
              {nums.map((n) => {
                return (
                  <GridListTile key={n}>
                    <HistoryCard
                      header="ORA-1331"
                      content="내용"
                      date={new Date().toLocaleString()}
                    />
                  </GridListTile>
                );
              })}
            </GridList>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

const HistoryCard = ({ header, content, date }) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {header}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {date}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default History;

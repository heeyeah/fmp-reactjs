import React from "react";
import { Header } from "../components/header";
import { Container, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 160,
    background: `#b3f5d8`
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

function History() {

  let nums = Array.from(Array(10).keys());

  return (
    <>
      <Header header="히스토리"></Header>
      <Container className="history">
        <GridList cols={4}>
          {nums.map(n => {
            return (
              <GridListTile key={n}>
                <HistoryCard header="ORA-1331" content="내용" date="2020-10-10 13:00"/>        
              </GridListTile>
            )
          })}
        </GridList>
      </Container>
    </>
  );
}

const HistoryCard = ({ header, content, date }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

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

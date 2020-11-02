import "./index.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import TimelineIcon from '@material-ui/icons/Timeline';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { Menu, MenuItem } from "@material-ui/core";
import { Header } from "../header";


function ListItemLink(props) {
  const { icon, primary, to } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export const MenuNav = () => {
  
  return (
    <>
    <Header header="CLOUD1234" isTitle > </Header>
    <div className="root">
      <List component="nav" aria-label="main mailbox folders"
      style={{paddingTop: '150px'}}>
        <ListItemLink to="/home" primary="HOME" icon={<HomeIcon/>}></ListItemLink>
        <ListItemLink to="/about" primary="사용법" icon={<MenuBookIcon/>}></ListItemLink>
        <ListItemLink to="/chatBot" primary="챗봇" icon={<QuestionAnswerIcon/>}></ListItemLink>
        <ListItemLink to="/history" primary="히스토리" icon={<TimelineIcon/>}></ListItemLink>
        <ListItemLink to="/answer" primary="답변등록" icon={<AddCommentIcon/>}></ListItemLink>
      </List>
      
    </div></>
  );
};

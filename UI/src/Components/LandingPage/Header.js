import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const sections = [
  { title: 'Home', url: '#/home' },
  { title: 'Market Place', url: '#/marketplace' },
  { title: 'Track my Product', url: '#/trackproduct' },
  { title: 'Bayer Admin', url: '#/product/5a8ddbbc' },
  { title: 'Analytics', url: '#/analytics' },
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    color: '#A200FF',
    fontWeight : 600
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    //fontSize: '15'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    "&:hover": {
      color: "#A200FF",
    }
  },
  logo: {
    width: '10%',
    height: '10%'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/* <Button color="inherit" size="small">Subscribe</Button> */}
        <img className={classes.logo}
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Bayer_Logo.svg/1200px-Bayer_Logo.svg.png" />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
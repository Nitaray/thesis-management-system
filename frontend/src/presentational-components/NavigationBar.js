import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { TitleText } from "./Text";
import { DropdownButton } from "./Button";

const useStyles = makeStyles((theme) => ({
	toolBar: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.black,
		justifyContent: 'space-between',
		overflowX: 'auto',
	},
	appBar: {
		marginBottom: theme.spacing(0),
	}
}));

export default function NavigationBar(props) {
	const classes = useStyles();
	return (
		<AppBar elevation={2} className={classes.appBar}>
			<Toolbar component="nav" variant="dense" className={classes.toolBar}>
				<TitleText value="Thesis Management" component="h1" />
				<DropdownButton options={props.options}
					icon={<AccountCircleIcon />} />
			</Toolbar>
		</AppBar>
	);
};


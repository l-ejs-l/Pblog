import { topDanger, topPrecaution, topSuccess, topWarning } from '../styleConstants';

const taskformdialogStyle = theme => ({
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 7,
    right: theme.spacing.unit * 1,
    [theme.breakpoints.up('sm')]: {
      bottom: theme.spacing.unit * 8,
      right: theme.spacing.unit * 1
    },
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing.unit * 8,
      right: theme.spacing.unit * 2
    },
    [theme.breakpoints.up('lg')]: {
      bottom: theme.spacing.unit * 9,
      right: theme.spacing.unit * 2
    }
  },
  taskForm: {
    margin: 0,
    color: '#212121',
    backgroundColor: '#fcf59b',
    borderTop: '10px solid green'
  },
  input: {
    padding: theme.spacing.unit
  },
  topDanger: {
    ...topDanger
  },
  topSuccess: {
    ...topSuccess
  },
  topWarning: {
    ...topWarning
  },
  topPrecaution: {
    ...topPrecaution
	},
	basis: {
		flexBasis: 200
	}
});

export default taskformdialogStyle;

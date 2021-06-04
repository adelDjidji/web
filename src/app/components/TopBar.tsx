import { makeStyles } from "@material-ui/core/styles"
import DashboardIcon from "@material-ui/icons/Dashboard"

import Button from "@material-ui/core/Button"

import { navigate, Link } from "@reach/router"
import RenderOnAnonymous from "./RenderOnAnonymous"
import RenderOnAuthenticated from "./RenderOnAuthenticated"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    margin: theme.spacing(1),
    marginRight: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

const TopBar: React.FC = () => (
  <>
    <TopbarAnonymous />
    <TopbarAuth />
  </>
)

const TopbarAnonymous: React.FC = () => {
  const classes = useStyles()

  return (
    <RenderOnAnonymous>
      <div className={classes.container}>
        <Button
          component={Link}
          to={"/app/dashboard"}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<DashboardIcon />}
        >
          Espace client
        </Button>

        <Button
          component={Link}
          to={"/app/subscribe"}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Souscrire
        </Button>
      </div>
    </RenderOnAnonymous>
  )
}
const TopbarAuth: React.FC = () => {
  const classes = useStyles()

  return (
    <RenderOnAuthenticated>
      <div className={classes.container}>
        <Button
          component={Link}
          to={"/app/dashboard"}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Dashboard
        </Button>
        <Button
          component={Link}
          to={"/app/consommation"}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Consommation
        </Button>
        <Button
          component={Link}
          to={"/app/payments"}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Payments
        </Button>
        <Button
          component={Link}
          to={"/app/informations"}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Informations
        </Button>
        <Button
          component={Link}
          to={"/app/contrats"}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Contrats
        </Button>

        <Button
          component={Link}
          to={"/app/help"}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          aide
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => {
            localStorage.removeItem("token")
            navigate("/app/home")
          }}
        >
          Déconnecter
        </Button>
      </div>
    </RenderOnAuthenticated>
  )
}

export default TopBar

import { FC } from "react"
import { navigate } from "gatsby"
import UserService from "../services/UserService"
import { RouteComponentProps } from "@reach/router"

type Props = RouteComponentProps<{
  component: any
}>
const PrivateRoute: FC<Props> = ({
  component: Component,
  location,
  ...rest
}) => {
  if (
    !UserService.isLoggedIn() &&
    location?.pathname !== `/app/login` &&
    location?.pathname !== `/app/register`
  ) {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute

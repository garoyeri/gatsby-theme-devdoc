/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const HeaderContent = (props) => (
  <Link
    to="/"
    sx={{
      fontSize: '1.35rem',
      marginLeft: '0.5em',
      textDecoration: 'none',
      color: 'background',
    }}
  >
    {props.siteTitle || ''}
  </Link>
)

export default HeaderContent

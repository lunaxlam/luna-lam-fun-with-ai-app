import { FaRegLightbulb } from 'react-icons/fa'

const Header = ({text}) => {
    return (
      <header>
          <h1>{text} <FaRegLightbulb style={{ fontSize: 26 }}/></h1>
      </header>
    )
  }
  
  export default Header
  
import { useNavigate } from 'react-router-dom'

function RoutedPage({ Page }) {
  const navigate = useNavigate()

  return (
    <Page
      value={() => {}}
      opv={() => navigate('/')}
      setflag={() => {}}
    />
  )
}

export default RoutedPage

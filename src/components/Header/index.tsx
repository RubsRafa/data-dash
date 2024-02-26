import { HeaderBox, LogoImage } from "./style";
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <>
      <HeaderBox>
        <LogoImage src={Logo} alt="Logo da empresa Be. Letras 'B' e 'E' minúsculas, com fundo gradiente do azul para o roxo." />
      </HeaderBox>
    </>
  )
}

export default Header

import { useContext } from "react";
import BoxGlass from "../../components/BoxGlass";
import styles from "./Login.module.css";
import { ContextNavigate } from "../../context/ContextNavigate";
import Cadastro from "../Cadastro";
import InputText from "../../components/InputText";
import ButtonGlass from "../../components/ButtonGlass";

const Login = () => {
  const { setPage } = useContext(ContextNavigate);

  const handleCadastro = () => {
    setPage(<Cadastro />);
  };
  return (
    <BoxGlass>
      <h2>Login</h2>
      <form className={styles.form}>
        <InputText type="text" placeholder="Usuário" />
        <InputText type="password" placeholder="Senha" />
        <ButtonGlass type="submit">Entrar</ButtonGlass>
        <ButtonGlass type="submit" onClick={handleCadastro}>
          Cadastrar-se
        </ButtonGlass>
      </form>
    </BoxGlass>
  );
};

export default Login;

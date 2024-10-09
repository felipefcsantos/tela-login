import { useContext } from "react";
import BoxGlass from "../../components/BoxGlass";
import InputText from "../../components/InputText";
import styles from "./Cadastro.module.css";
import { ContextNavigate } from "../../context/ContextNavigate";
import Login from "../Login";
import ButtonGlass from "../../components/ButtonGlass";

const Cadastro = () => {
  const { setPage } = useContext(ContextNavigate);

  const handleNavigate = () => {
    setPage(<Login />);
  };
  return (
    <BoxGlass>
      <p onClick={handleNavigate} className={styles.btn_voltar}>Voltar</p>
      <h2>Cadastro</h2>
      <form className={styles.form}>
        <InputText placeholder="Nome Completo" />
        <InputText placeholder="E-mail" />
        <InputText type="date" placeholder="Data Nascimento" />
        <InputText type="password" placeholder="Senha" />
        <InputText type="password" placeholder="Confirme a Senha" />
        <ButtonGlass type="submit">Cadastrar</ButtonGlass>
      </form>
    </BoxGlass>
  );
};

export default Cadastro;

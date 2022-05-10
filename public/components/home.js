function Home() {
  return(
    <Card
      bgcolor="light"
      txtcolor="dark"
      headerText="Bienvenido a BadBank-Crypto"
      body={<>
      Para iniciar presione la pestaña <a href="#Login" class="btnDeposit">Iniciar Sesion</a>.    
      </>}
    />
  );
}
function Withdraw() {
  const [showForm, setShowForm] = React.useState({form: true, balance: null});
  const context = React.useContext(UserContext);
  
  const formElements = ['amount', 'button'];
  const bgcolor = 'warning';
  const txtcolor = 'black'
  const initialButtonMessage = 'Retiro'
  const successMessage = `Su balance es $${showForm.balance}.`
  const successButtonText = 'Hacer otro retiro'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Retiros"
      body={
        context.currentUser !== null ? (
        showForm.form ? 
          <Form 
            pageName="Withdraw"
            setShowForm={setShowForm}
            formElements={formElements}
            bgcolor={bgcolor} 
            txtcolor={txtcolor}
            initialButtonMessage={initialButtonMessage}
          /> 
        : 
          <FormMessage
            pageName="Withdraw"
            setShowForm={setShowForm}
            bgcolor={bgcolor}
            txtcolor={txtcolor}
            successMessage={successMessage}
            successButtonText={successButtonText}
          />
        )
        :
        <div>
          Por favor <a href='#/login/' className="btnDeposit" data-toggle="tooltip" title="Ingrese a su Cuenta">Inicie Sesion</a> para depositar fondos y verificar su balance. <br/><br/><br/>
				  No tienes una cuenta? Crea una cuenta <a href="#/createaccount/" className="btnDeposit" data-toggle="tooltip" title="Crear Nueva Cuenta"> aqui...</a>. 
        </div>
      }
    />  
  );
}
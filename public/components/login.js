function Login(props) {
  const context = React.useContext(UserContext);
  
  const formElements = ['email', 'password', 'button'];
  const bgcolor = 'danger';
  const txtcolor = 'white'
  const initialButtonMessage = 'Iniciar Sesion'
  const successMessage = 'Ha iniciado sesion satisfactoriamente!'
  const successButtonText = 'Cerrar Sesion'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Iniciar Sesion"
      body={
        context.currentUser === null ? 
        <Form 
          pageName="Login"
          formElements={formElements}
          bgcolor={bgcolor} 
          txtcolor={txtcolor}
          initialButtonMessage={initialButtonMessage}
        /> : 
        <FormMessage
          pageName="Login"
          bgcolor={bgcolor}
          txtcolor={txtcolor}
          successMessage={successMessage}
          successButtonText={successButtonText}
        />
      }
    />
  );

}
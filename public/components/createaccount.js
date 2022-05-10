function CreateAccount() {
  const [showForm, setShowForm] = React.useState(true);

  const formElements = ['name', 'email', 'password', 'button'];
  const bgcolor = 'primary';
  const txtcolor = 'white'
  const initialButtonMessage = 'Crear Cuenta'
  const successMessage = 'Cuenta fue Creada. Desea crear otra cuenta?'
  const successButtonText = 'Crear Otra Cuenta'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Crear Cuenta"
      body={
        showForm ? 
        <Form 
          pageName="CreateAccount"
          setShowForm={setShowForm}
          formElements={formElements}
          bgcolor={bgcolor} 
          txtcolor={txtcolor}
          initialButtonMessage={initialButtonMessage}
        /> : 
        <FormMessage
          pageName="CreateAccount"
          setShowForm={setShowForm}
          bgcolor={bgcolor}
          txtcolor={txtcolor}
          successMessage={successMessage}
          successButtonText={successButtonText}
        />
      }
    />
  );
}

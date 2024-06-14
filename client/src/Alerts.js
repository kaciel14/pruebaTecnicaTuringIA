import Alert from 'react-bootstrap/Alert';

function BasicAlert({text}) {
  return (
    <>
      {[
        'danger'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          {text}
        </Alert>
      ))}
    </>
  );
}

export default BasicAlert;
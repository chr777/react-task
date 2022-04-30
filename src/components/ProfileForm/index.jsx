import { Container, Form, Input, StyledButton, Textarea } from './styled.js';

const ProfileForm = ({ data }) => {

  const list = data && data.filter(item => item.details.visible)
              .map((item, idx) => item.type === 'TEXT' ? <Textarea key={idx} type={'text'}
                                                                   minRows={item.details.rows} required={item.details.required}
                                                                  placeholder={ item.details.required ? item.details.label+'*' : item.details.label} /> :
               <Input key={idx} type={'text'} required={item.details.required} label={item.details.label} variant='filled' size='small'/>)

  const handleSubmit = () => {
    console.log('clicked')
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {list}
        <StyledButton onClick={handleSubmit}  variant="contained" type="submit">Submit</StyledButton>
      </Form>
    </Container>
  );
}
export default ProfileForm;
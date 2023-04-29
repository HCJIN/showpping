import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const Login = () => {
  const loginUser = (event) => {
    event.preventDefault();
    console.log("로그인")
  }
  return (
    <Container>
      <Form className='login-menu' onSubmit={loginUser}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="아이디를 입력하세요." />
          <Form.Text className="text-muted">
          귀하의 이메일을 다른 누구와도 공유하지 않습니다.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="아이디 저장" />
        </Form.Group>

        <Button variant="primary" type="submit" className='login-page-button'>
          로그인
        </Button>

      </Form>
    </Container>
  )
}

export default Login
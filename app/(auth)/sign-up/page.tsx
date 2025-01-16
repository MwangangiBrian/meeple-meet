'use client';


import AuthForm from '@/components/AuthForm';
import { signUpSchema } from '@/constants/validations';
import { signUp } from '@/lib/actions/auth';
import React from 'react';

function Page() {
  return (
    <>
      <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
          userName: '',
          email: '',
          password: '',
        }}
        onSubmit={signUp}
      />
    </>
  );
}

export default Page;

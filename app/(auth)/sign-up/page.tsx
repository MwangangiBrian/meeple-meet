'use client';

import { signIn } from '@/auth';
import AuthForm from '@/components/AuthForm';
import { signUpSchema } from '@/constants/validations';
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
        onSubmit={signIn}
      />
    </>
  );
}

export default Page;

'use client';
import AuthForm from '@/components/AuthForm';
import Header from '@/components/Header';
import { signInSchema } from '@/constants/validations';
import { signInWithCredentials } from '@/lib/actions/auth';
import React from 'react';

function Page() {
  return (
    <>
      <AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
          email: '',
          password: '',
        }}
        onSubmit={signInWithCredentials}
      />
    </>
  );
}

export default Page;

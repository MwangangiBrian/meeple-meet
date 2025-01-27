'use client';

import React from 'react';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType } from 'zod';
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { FIELD_NAMES, FIELD_TYPES } from '@/constants';
import { useRouter } from 'next/navigation';
import { Dices, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: 'SIGN_IN' | 'SIGN_UP';
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const router = useRouter();
  const isSignIn = type === 'SIGN_IN';

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);

  // Custom form submission handler
  const handleFormSubmit: SubmitHandler<T> = async (data) => {
    setIsLoading(true);
    const result = await onSubmit(data); // Call the `onSubmit` prop
    setIsLoading(false);

    if (result.success) {
      router.push('/');
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <>
    <Header session={null} />
      <div className="container relative flex h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href={isSignIn ? '/sign-up' : '/sign-in'}
          className="absolute right-4 top-4 md:right-8 md:top-8 font-semibold"
        >
          {isSignIn ? 'Create Account' : 'Sign In'}
        </Link>
        
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-primary" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Dices className="mr-2 h-6 w-6" />
            BoardShare
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;I&#39;ve met amazing people and discovered fantastic games
                through BoardShare. It&#39;s more than just borrowing games - it&#39;s
                about building a community.&rdquo;
              </p>
              <footer className="text-sm">Alex Thompson</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {isSignIn ? 'Welcome back' : 'Create an account' }
              </h1>
              <p className="text-sm text-muted-foreground">
                {isSignIn
                  ? 'Sign in to your account'
                  : 'Join our community of board game enthusiasts'}
              </p>
            </div>

            <div className={cn('grid gap-6', shake && 'animate-shake')}>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleFormSubmit)}
                  className="space-y-4"
                >
                  {/* mapping over each field */}
                  {Object.keys(defaultValues).map((field) => (
                    <FormField
                      key={field}
                      control={form.control}
                      name={field as Path<T>}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="capitalize">
                            {
                              FIELD_NAMES[
                                field.name as keyof typeof FIELD_NAMES
                              ]
                            }
                          </FormLabel>
                          <FormControl>
                            
                            <Input
                              required
                              type={
                                FIELD_TYPES[
                                  field.name as keyof typeof FIELD_TYPES
                                ]
                              }
                              {...field}
                              className="form-input"
                              
                            />
                          </FormControl>
                          <FormDescription>
                            
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button
                    type="submit"
                    className="mt-4 relative overflow-hidden group"
                  >
                    {isLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                    <span className="absolute inset-x-0 -bottom-2 h-1 bg-primary-foreground/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Button>
                </form>
              </Form>
            </div>

            <p className="px-8 text-center text-sm text-muted-foreground">
              {isSignIn ? 'New to Meeple? ' : 'Already have an account?'}
              <Link
                href={isSignIn ? '/sign-up' : '/sign-in'}
                className="underline underline-offset-4 hover:text-primary"
              >
                {isSignIn ? 'Create an account  ' : 'Sign in'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;

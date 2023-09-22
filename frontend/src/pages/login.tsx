import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().min(2).email().max(50),
  password: z.string().min(2).max(50),
});
type LoginForm = z.infer<typeof formSchema>;

export function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const navigate = useNavigate();

  function handleShowPassword() {
    setIsPasswordShown((prev) => !prev);
  }

  const form = useForm<LoginForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: LoginForm) {
    console.log(values);
    navigate('/');
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-4xl font-bold leading-9 text-zinc-900 dark:text-zinc-50">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="mx-4 rounded-md border border-zinc-100 bg-white px-6 py-12 shadow dark:border-none dark:bg-zinc-900 sm:rounded-lg sm:px-12">
          <Form {...form}>
            <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example.email@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type={isPasswordShown ? 'text' : 'password'}
                          {...field}
                        />
                      </FormControl>
                      <EyeOpenIcon
                        className="absolute right-3 top-8 h-5 w-5 cursor-pointer text-zinc-600 dark:text-white"
                        onClick={handleShowPassword}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="w-full" type="submit">
                Sign in
              </Button>
            </form>
          </Form>
        </div>

        <p className="mt-10 text-center text-sm text-zinc-400">
          Not a member?{' '}
          <NavLink
            to="/register"
            className="font-semibold leading-6 text-teal-400 transition hover:text-teal-300"
          >
            Register now
          </NavLink>
        </p>
      </div>
    </div>
  );
}

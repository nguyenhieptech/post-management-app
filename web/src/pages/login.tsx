import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  toast,
} from "@/components/ui";
import { useAppDispatch } from "@/store";
import { useLoginMutation } from "@/store/api";
import { login } from "@/store/slices";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as z from "zod";

const loginFormSchema = z.object({
  email: z.string().min(2).email().max(50),
  password: z.string().min(2).max(50),
});
type LoginForm = z.infer<typeof loginFormSchema>;

export function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  function handleShowPassword() {
    setIsPasswordShown((prev) => !prev);
  }

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginMutation] = useLoginMutation();

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(loginFormValues: LoginForm) {
    try {
      const response = await loginMutation(loginFormValues).unwrap();
      dispatch(login(response));
      toast({
        title: "Login successfully",
      });
      navigate("/");
    } catch {
      toast({
        title: "Login failed",
      });
    }
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
          <Form {...loginForm}>
            <form
              className="space-y-10"
              onSubmit={loginForm.handleSubmit(onSubmit)}
            >
              <div className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example.email@gmail.com"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type={isPasswordShown ? "text" : "password"}
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
          Not a member?{" "}
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

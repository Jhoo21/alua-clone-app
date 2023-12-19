import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
interface AuthValues {
  email: string;
  password: string;
}

export const supabase = createClientComponentClient()

const authService = async ({ email, password }: AuthValues) => {
  const supabase = createClientComponentClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    status: 200,
    userID: data?.user?.id,
  };
};

const registerService = async ({ email, password }: AuthValues) => {
  const supabase = createClientComponentClient();
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    throw new Error(signUpError.message);
  }

  // Return the UUID of the registered user
  return data.user?.id;
};

export {
    authService,
    registerService
}
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "../libs/client/useMutation";

interface Email {
  email: String;
}

const Login = () => {
  const { register, handleSubmit } = useForm<Email>();
  const [enter, state] = useMutation(`/api/users/login`);
  const router = useRouter();
  const onValid = (data: Email) => {
    enter(data);
  };
  const onAccount = () => {
    router.push("/create-account");
  }
  if (state?.login == true) {
    router.replace({
      pathname: `/`,
    });
  }


  return (
    <div className=" h-full">
    <div className=" flex justify-around p-5 bg-gray-400">
      <form onSubmit={handleSubmit(onValid)}>    
          Email: <input className="rounded-lg " {...register("email", { required: true })}></input>
        <button className=" rounded-lg bg-green-300">Login</button>   
      </form>
    </div>
    <div className=" grid grid-cols-2 border pt-8 h-3/4">
    <div className=" border-r-2">
      <div className=" flex w-full h-full justify-center items-center">LogIn-Page</div>
    </div>
    <div className=" border-l-2 grid grid-flow-row h-full">
      <div className=" text-center h-32 border-b-4 m-4">You can share the messages</div>
      <div className=" text-center h-28 border-b-4 m-4">If you wanna that , let's do it</div>
      <button onClick={onAccount} className=" rounded-lg bg-slate-500 text-white p-2 m-12 h-28">Create account</button>
    </div>
  </div>
  </div>
  );
};

export default Login;

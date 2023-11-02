import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "../libs/client/useMutation";

 interface LoginData {
  name: string;
  email: string;
} 


const CreateId = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const router = useRouter();
  const [enter, state] = useMutation(`/api/users/create`);
  const onVaild = (data: LoginData) => {
    enter(data);
  };
  const onLogin = () => {
    router.push("/log-in");
  }
  if (state?.create == true) {
    alert("account created plz login!!");
    router.replace({
      pathname: `/log-in`,
    });
  }

  return (
    <div className=" w-full h-full  p-10">
      
      <form onSubmit={handleSubmit(onVaild)}>
      <div className="  flex flex-col justify-center items-center w-full ">
     <input className=" mb-10 bg-slate-300 rounded-lg p-2 w-96 text-black" {...register("name", { required: true })} placeholder="Name"></input>
      <input className=" mb-10 bg-slate-300 rounded-lg p-2 w-96 text-black" {...register("email", { required: true })} placeholder="Email"></input>
      <button className=" bg-slate-400 rounded-lg p-2 items-center w-96">Create Account</button>
      </div>
      </form>
      <div className=" m-12 border-t-4 flex justify-center">
        <button className=" mt-6 bg-green-400 rounded-lg p-2 items-center w-96" onClick={onLogin}>GO LogIn</button>
      </div>
    </div>
  );
};

export default CreateId;
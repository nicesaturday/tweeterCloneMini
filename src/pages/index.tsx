import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useMutation from "../libs/client/useMutation";

interface Tweet {
  id: number;
  main: any;
  isLike: boolean;
}
interface DataAll {
  id: number;
  main: any;
  isLike: boolean;
  userId: Number;
}

const Home = () => {
  const [url, setUrl] = useState();
  const { register, handleSubmit } = useForm<Tweet>();
  const [enter, data] = useMutation(`/api/tweet/create`);
  const { data: dataAll, mutate } = useSWR(`/api/tweet/get`, {
    refreshInterval: 1000,
  });
  const { data: userData } = useSWR(`/api/users/me`);
  const router = useRouter();

  const onValid = async (data: Tweet) => {
    mutate([...dataAll, { id: Date.now(), main: data.main }], false);
    await enter(data);
  };

  /* const {data:onedata,mutate} = useSWR(getid  ? `/api/tweet/${getid}` : undefined);  */
  const onLink = (data: any) => {
    router.push(`/tweet/${data.target.id}`);
  };

  const {} = useSWR(url == undefined ? null : `/api/tweet/delete/${url}`, {
    refreshInterval: 1000,
  });

  const onDelete = (data: any) => {
    mutate(
      dataAll.filter((word: any) => word.id != data.target.id),
      false,
    );
    setUrl(data.target.id);
  };
  const [outt, setOutt] = useState();
  const {} = useSWR(`/api/users/${outt}`, {
    refreshInterval: 1000,
  });

  const onLogout = async () => {
    setOutt("out");
    router.push("/log-in");
  };

  return (
    <div className=" p-5 bg-slate-500 h-full">
      <div
        onClick={onLogout}
        className=" cursor-pointer absolute right-44 rounded-full bg-red-400"
      >
        Log Out
      </div>
      <form onSubmit={handleSubmit(onValid)} className=" flex justify-around">
        <input
          className=" rounded-full bg-slate-300 p-5"
          {...register("main", { required: true })}
          placeholder="메세지를 작성하세요"
        ></input>
      </form>
      <div className="">
        {dataAll?.map((data: DataAll) => (
          <div
            key={data.id}
            id={String(data.id)}
            className=" p-5 flex justify-around  "
          >
            <div
              onClick={onLink}
              id={String(data.id)}
              className=" justify-center items-center flex align-middle cursor-pointer rounded-full bg-white w-96 h-16 "
            >
              {data.main}
            </div>
            {userData?.id == data.userId ? (
              <svg
                onClick={onDelete}
                id={String(data.id)}
                className=" ml-[420px] fill-red-700  w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

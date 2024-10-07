import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { route } from "../../routes/Routes";

const AddBook = () => {
  const { register, handleSubmit, reset } = useForm();

  const handlePostData = async (data) => {
    if (!data.bookNameEn || !data.bookNameBn) {
      toast.error("emply fields");
      return;
    }
    await fetch(`${route}/add-hadith-book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data && data.status == 200) {
          toast.success("Added successfully");
          reset();
        } else if (data && data.status == 500) {
          toast.error("already exists");
        } else {
          toast.error("something went wrong");
        }
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[73.49vh]">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit((data) => handlePostData(data))}
      >
        <input
          className="py-1.5 px-3.5 rounded-md border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("bookNameEn")}
          placeholder="Book Name - English"
        />
        <input
          className="py-1.5 px-3.5 rounded-md  border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("bookNameBn")}
          placeholder="Book Name - Bangla"
        />
        <button
          type="submit"
          className="btn text-white font-semibold py-1 px-3.5 h-10 min-h-0 rounded-md dark:border-stone-700 bg-[#5ab270] hover:bg-[#5ab270] dark:bg-[#24201e]"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBook;

import { useForm } from "react-hook-form";

const AddHadithBook = () => {
  const { register, handleSubmit } = useForm();
  const handlePostData = async (data) => {
    await fetch("http://localhost:5000/add-hadith-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div className="flex justify-center items-center min-h-[70.74vh]">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit((data) => handlePostData(data))}
      >
        <input
          className="py-1.5 px-3.5 rounded-md"
          {...register("bookNameEn")}
          placeholder="Book Name - English"
        />
        <input
          className="py-1.5 px-3.5 rounded-md"
          {...register("bookNameBn")}
          placeholder="Book Name - Bangla"
        />
        <button
          type="submit"
          className="bg-white font-semibold py-1.5 px-3.5 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddHadithBook;

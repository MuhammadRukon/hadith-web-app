import { useEffect, useState } from "react";

import useGetHadiths from "../../hooks/useGetHadiths";
import ChapterTab from "../components/homepage/chapterTab";
import HadithWrapper from "../components/homepage/HadithWrapper";

import { useNavigate } from "react-router-dom";
import useGetBooks from "../../hooks/useGetBooks";

const DashboardBookPage = () => {
  const [chapterId, setChapterId] = useState("");
  const [bookId, setBookId] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [refetch2, setRefetch2] = useState(false);
  const navigate = useNavigate();
  const hadiths = useGetHadiths(bookId, chapterId, refetch);
  const bookArray = useGetBooks(refetch2);
  useEffect(() => {
    if (bookArray[0]?.chapters?.length <= 0) {
      navigate("/dashboard");
    }
  }, [bookArray]);
  return (
    <div className="md:flex justify-between">
      <div className="w-full md:w-[18%] flex flex-col">
        {bookArray?.map((book) => (
          <ChapterTab
            key={book?._id}
            item={book}
            setBookId={setBookId}
            setChapterId={setChapterId}
            chapterId={chapterId}
            setRefetch={setRefetch2}
          />
        ))}
      </div>
      <div className="md:w-[80%]">
        <HadithWrapper
          hadiths={hadiths}
          setRefetch={setRefetch}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default DashboardBookPage;

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "This is the question that someone posted to this website?",
    tags: [
      {
        _id: "1",
        name: "python",
      },
      {
        _id: "2",
        name: "javascript",
      },
      {
        _id: "3",
        name: "sql",
      },
    ],
    author: {
      _id: "authorId",
      name: "Hoang Le",
      avatar: "avatarUrl",
    },
    votes: 447283746,
    views: 498234,
    answer: [],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "This is another question posted to this website?",
    tags: [
      {
        _id: "4",
        name: "typescript",
      },
      {
        _id: "5",
        name: "react",
      },
    ],
    author: {
      _id: "anotherAuthorId",
      name: "John Doe",
      avatar: "anotherAvatarUrl",
    },
    votes: 5,
    views: 50,
    answer: [],
    createdAt: new Date("2021-09-02T08:30:00.000Z"),
  },
  {
    _id: "3",
    title: "A third question for the website?",
    tags: [
      {
        _id: "6",
        name: "java",
      },
      {
        _id: "7",
        name: "spring",
      },
    ],
    author: {
      _id: "thirdAuthorId",
      name: "Jane Doe",
      avatar: "thirdAvatarUrl",
    },
    votes: 8,
    views: 80,
    answer: [],
    createdAt: new Date("2021-09-03T15:45:00.000Z"),
  },
  {
    _id: "4",
    title: "A fourth question for the website?",
    tags: [
      {
        _id: "6",
        name: "java",
      },
      {
        _id: "7",
        name: "spring",
      },
    ],
    author: {
      _id: "thirdAuthorId",
      name: "Jane Doe",
      avatar: "thirdAvatarUrl",
    },
    votes: 8,
    views: 80,
    answer: [],
    createdAt: new Date("2021-09-03T15:45:00.000Z"),
  },
  {
    _id: "5",
    title: "A fifth question for the website?",
    tags: [
      {
        _id: "6",
        name: "java",
      },
      {
        _id: "7",
        name: "spring",
      },
    ],
    author: {
      _id: "thirdAuthorId",
      name: "Jane Doe",
      avatar: "thirdAvatarUrl",
    },
    votes: 8,
    views: 80,
    answer: [],
    createdAt: new Date("2021-09-03T15:45:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upVotes={question.votes}
              views={question.views}
              answer={question.answer}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from. Get
            involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}

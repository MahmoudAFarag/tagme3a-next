import { useRouter } from "next/router";

export default function SubjectWeek() {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.subject}</h1>
    </>
  );
}

import Link from "next/link";
import db from "@/lib/db";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="my-auto">
        <h1 className="text-2xl font-bold">인스타그램</h1>
        <h2>안녕하세요</h2>
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        <Link
          href="/create-account"
          className="w-full bg-orange-600 text-white text-lg font-medium py-2.5 rounded-md text-center"
        >
          시작하기
        </Link>
        <div>
          <span>이미 계정이 있나요? </span>
          <Link href="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}

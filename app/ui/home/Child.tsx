// app /ui /home /Child.tsx
'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

type User = {
  id: number;
  name: string;
  country: string;
  lang: string;
};
type User2 = Partial<User>;

export default function Child() {
  const queryClient = useQueryClient();

  // 훅 사용시 동적으로 추가되는 데이터에 대한 타입을 제네릭으로알려줌
  const { isPending, data, isError, error } = useQuery<User[]>({
    queryKey: ['user'],
    queryFn: () => {
      return fetch('http://localhost:9090/user').then((res) => res.json());
    },
  });

  const { mutate } = useMutation({
    mutationFn: (user: Partial<User>) => {
      return fetch('http://localhost:9090/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  function handleAddUser(e: React.FormEvent<HTMLFormElement>) {
    console.log('제출이벤트 실행');
    // 새로고침되서 날라가지 않게 방지함
    e.preventDefault();

    // e.target의 타입을 알려줌
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    // formData를 일반객체로 바꿔줘야함(entries:키와 값이 하나로 된것)
    const user = Object.fromEntries(formData.entries());

    // 값이 세곳 모두 들어갔을때만 실행해주기
    if (user.name && user.country && user.lang) {
      mutate(user);
    }
  }

  return (
    <div>
      <h2 className="text-[30px] font-bold">클라이언트 컴포넌트</h2>
      <form onSubmit={handleAddUser} className="space-y-[10px]">
        <div>
          <input
            type="text"
            name="name"
            placeholder="이름"
            autoComplete="off"
            className="w-full"
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="국가"
            autoComplete="off"
            className="w-full"
          />
        </div>
        <div>
          <input
            type="text"
            name="lang"
            placeholder="언어"
            autoComplete="off"
            className="w-full"
          />
        </div>
        <button type="submit" className="btn">
          유저추가
        </button>
      </form>
      {isPending && <p>로딩중...</p>}
      {isError && <p>{error.message}</p>}
      {/* {isError && <p>{error.message}</p>} */}
      {data && data?.length > 0 && (
        <ul className="space-y-[5px] mt-[15px]">
          {data.map((user) => (
            <li key={user.id} className="flex gap-x-[10px]">
              <p>id: {user.id}</p>
              <p>이름: {user.name}</p>
              <p>국가: {user.country}</p>
              <p>기술스택: {user.lang}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

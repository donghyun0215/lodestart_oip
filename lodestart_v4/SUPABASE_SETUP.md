# Admin 패널 + Supabase 연동 가이드

/admin 에서 비밀번호로 로그인해 이벤트·인사이트(링크드인 포스트)를 직접
등록/수정/숨김 처리하고, 문의 폼으로 들어온 구조화된 요청을 인박스에서
확인할 수 있습니다. Supabase 미설정 상태여도 사이트는 내장 목록으로
정상 동작합니다 (문의 폼은 이메일 방식으로 폴백).

## 1. Supabase 프로젝트 만들기
https://supabase.com → New project (Free 플랜이면 충분). Region: Singapore.

## 2. 테이블 생성 — SQL Editor에 아래 전체를 붙여넣고 Run

```sql
create table events (
  id bigint generated always as identity primary key,
  tag text, tag_ko text,
  title text not null, title_ko text,
  when_text text, when_ko text,
  published boolean default true,
  sort int default 99,
  created_at timestamptz default now()
);

create table insights (
  id bigint generated always as identity primary key,
  source text default 'linkedin', -- 'linkedin' | 'medium' | 'article'
  tag text, tag_ko text,
  title text not null, title_ko text,
  url text not null,
  date_label text,
  published boolean default true,
  sort int default 99,
  created_at timestamptz default now()
);

create table intake (
  id bigint generated always as identity primary key,
  profile text, intents text,
  name text, org text, email text,
  message text,
  created_at timestamptz default now()
);

-- 서비스 키로만 접근하므로 RLS는 잠가둡니다 (외부 직접 접근 차단)
alter table events enable row level security;
alter table insights enable row level security;
alter table intake enable row level security;
```

## 3. Vercel 환경변수 3개

Project Settings → Environment Variables (Production + Preview):

| 이름 | 값 | 위치 |
| --- | --- | --- |
| `SUPABASE_URL` | Project Settings → API → Project URL | |
| `SUPABASE_SERVICE_ROLE_KEY` | 같은 화면의 service_role secret | ⚠️ 절대 클라이언트/레포에 노출 금지 |
| `ADMIN_PASSWORD` | 원하는 관리자 비밀번호 | 기본 제안값 그대로 쓰지 말고 변경 권장 |

설정 후 재배포 한 번.

## 4. 사용법
- `사이트주소/admin` → 비밀번호 입력
- 이벤트/인사이트: 새 항목 추가, 수정, 공개↔비공개 토글, 삭제
- 링크드인 포스트는 URL + 제목(EN/KO) + 날짜만 넣으면 Insights 캐러셀에 반영
- 문의 인박스: contact 폼으로 들어온 요청(프로필/협력 의도 포함) 열람·삭제
- 반영 주기: 공개 사이트는 최대 5분(ISR) 안에 갱신

## 동작 구조
공개 페이지(서버) → `lib/cms.js` (published만 select, 5분 캐시, 실패 시
내장 폴백) / 관리 작업 → `/api/admin/*` (x-admin-key 헤더를 서버에서
ADMIN_PASSWORD와 대조, service key는 서버에서만 사용).

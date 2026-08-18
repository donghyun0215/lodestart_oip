# KIP Monthly — Substack 발송 가이드

사이트의 `/insights/monthly/<호수>` 페이지가 **아카이브(웹 보관용)**,
Substack이 **발송 채널(이메일)** 역할을 합니다. 82 Startup과 동일한 구조입니다
(Substack 발행 → 이메일 도착 → "Forwarded this email? Subscribe here" 퍼널).

## 1. 퍼블리케이션 만들기 (1회, ~10분)
1. https://substack.com → Start writing → 계정 생성 (추천: hello@lodestart.ai 같은 팀 계정)
2. Publication name: `KIP Monthly` / 주소: `kipmonthly.substack.com` (가능한 것으로)
3. Settings → **Basics**: 로고·설명 입력. 설명 예시:
   "Monthly round-up from K-Innovation Partners — programmes, events, and one
   company worth your attention on the Korea–Singapore innovation bridge."
4. Settings → **Payments**: 설정하지 않음(무료 뉴스레터). 나중에 켤 수 있음.

## 2. 구독자 가져오기
- Settings → Subscribers → **Import** → CSV 업로드 (이메일 1열이면 충분)
- 현재 사이트 구독 폼은 Admin@lodestart.ai 로 메일이 오는 방식 → 받은 주소를
  모아 CSV로 정리해 임포트 (구독 신청 메일은 support@lodestart.ai 로 수신됨). (추후: intake처럼 Supabase `subscribers` 테이블로
  자동 수집하는 확장 가능 — /admin 확장 아이디어에 있음)
- **주의**: 동의 없이 수집한 주소 대량 임포트는 Substack 정책 위반. 구독
  신청·명함 교환 등 접점이 있는 주소만.

## 3. 매달 발행 워크플로 (호당 ~30분)
1. `/admin` → "먼슬리 (뉴스레터)" 탭에서 새 호 작성 (본문 템플릿 버튼 → 내용 교체)
   → 저장하면 `/insights/monthly/<슬러그>` 에 웹 버전이 뜸 (최대 5분 캐시)
2. `exports/kip-monthly-<호수>-email.html` 파일을 브라우저로 열기
   (1호는 이미 만들어져 있음: `exports/kip-monthly-1-email.html`)
   - **새 호를 만들 때**: 1호 파일을 복사해 내용만 바꾸면 됨 (구조 동일)
   - 파일 안의 `https://YOUR-DOMAIN` 을 실제 배포 도메인으로 전부
     찾아바꾸기 할 것 (이메일에서는 상대경로 링크가 동작하지 않음)
3. 브라우저에서 본문 전체 선택(Ctrl/Cmd+A) → 복사 → Substack 새 포스트
   에디터에 붙여넣기 → 제목/부제 입력 → 미리보기 확인
   - Substack 에디터는 서식 붙여넣기를 지원: 헤더·볼드·링크·리스트가 유지됨
   - 버튼(초록 박스)은 일반 링크로 풀릴 수 있음 → Substack의 "Button" 블록으로
     교체하면 더 깔끔함 (선택)
4. **Publish** → "Send to everyone" 체크 → 발송
5. 발행된 Substack 포스트 URL을 `/admin` → 인사이트 탭에 `source: article` 로
   등록하면 사이트 Insights 캐러셀에도 노출됨 (선택)

## 4. 제출(Submit) 퍼널
- 사이트 뉴스레터 하단 "소식 제보" → `/contact` → Supabase `intake` 인박스로 수집
- 매달 마감일을 정해두면 좋음 (82 Startup은 "매달 셋째 금요일 5PM PT")

## 5. 커스텀 도메인 (선택, 나중에)
- Settings → Domain → 예: `monthly.<도메인>` CNAME 연결 (Substack 1회 $50)
- 급하지 않음 — 기본 substack.com 주소로 시작해도 무방

## 체크리스트 (첫 발행 전)
- [ ] 퍼블리케이션 생성 + 로고/설명
- [ ] 구독자 CSV 임포트
- [ ] `exports/kip-monthly-1-email.html` 의 `YOUR-DOMAIN` 교체
- [ ] 테스트 발송 (Publish 전 "Send test email" 로 본인 메일 확인)
- [ ] Tammy에게 미리보기 링크 공유 후 발송

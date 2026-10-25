export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 이미지 경로. 비워두면 이름 첫 글자로 표시합니다.
  image?: string;
  links: LinkItem[];
};

// TODO: 링크 주소는 아직 보여 주기용 더미 값입니다. 실제 주소로 교체하세요.
export const profile: Profile = {
  name: "최수영",
  bio: "30년 경력의 SAP 관리회계(CO) · FM-BCS · IM 프리랜스 컨설턴트",
  image: "/profile.jpg",
  links: [
    { id: "sap-community", title: "SAP Community", url: "https://community.sap.com/" },
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
};

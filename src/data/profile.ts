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

// TODO: 보여 주기용 더미 값입니다. 실제 사진·소개·링크 주소로 교체하세요.
export const profile: Profile = {
  name: "최수영",
  bio: "SAP 컨설턴트",
  image: "/profile-dummy.svg",
  links: [
    { id: "sap-community", title: "SAP Community", url: "https://community.sap.com/" },
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
};

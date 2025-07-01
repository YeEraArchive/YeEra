export interface ArtItem {
  era: string;
  name: string;
  notes: string;
  designer: string;
  artType: string;
  projectType: string;
  use: string;
}

export const artItems: ArtItem[] = [
  // Art.csv의 모든 행을 변환하여 배열로 추가 (links는 여러 개면 배열, image는 Image 컬럼, notes는 Notes 컬럼)
];

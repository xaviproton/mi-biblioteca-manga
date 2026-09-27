/** Original publication can have partial precision; never invent a day/month. */
export interface PublicationDate {
  year: number;
  month?: number;
  day?: number;
}

export interface Author {
  id: string;
  name: string;
}

export interface Manga {
  id: string;
  title: string;
  authorIds: string[];
  originalPublication?: PublicationDate;
}

/** Counts belong to a particular edition, not to the original work. */
export interface Edition {
  id: string;
  mangaId: string;
  publisher: string;
  name: string;
  publishedVolumes: number;
  publicationStatus: "ongoing" | "complete" | "unknown";
  coverId?: string;
}

/** Ownership and reading are independent (e.g. borrowed volumes). */
export interface VolumeProgress {
  editionId: string;
  number: number;
  owned: boolean;
  read: boolean;
}

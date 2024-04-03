export interface Crests {
  id: string;
  crestName: string;
  crestDescription: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  crestLike: number;
  imagesSmall: File | string;
  // image: ImagesModel;
}

// export interface ImagesModel {
//   id: string;
//   images: File | string;
//   id_crest: string;
//   length: number;
//   0: ImagesDisplay;
//   1: ImagesDisplay;
//   2: ImagesDisplay;
//   3: ImagesDisplay;
//   4: ImagesDisplay;
// }

// export interface ImagesDisplayModel {
//   id: string;
//   images: File | string;
//   id_crest: string;
// }

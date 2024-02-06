export interface Livre {
  id_livre: number;
  id_categorie: number;
  id_auteur: number;
  titre: string;
  annee: Date;
  disponible: boolean;
  image?: string;
}

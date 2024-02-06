export interface Emprunt {
  id_emprunt: number;
  id_utilisateur: number;
  id_livre: number;
  date_emprunt: Date;
  date_retour?: Date;
}

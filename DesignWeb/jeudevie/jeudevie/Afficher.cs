using System;
using System.Threading;

namespace CegepVicto.TechInfo.H2020.P2.DA1939415.JeuxVie
{
    public static class JeuVie
    {
        /// <summary>
        /// creation du tableau avec une valeur random
        /// </summary>
        /// <param name="longueur">longueur du tableau</param>
        /// <param name="largeur">largeur du tableau</param>
        /// <param name="wait">attente entre chaque affichage</param>
        public static void Creation(int longueur, int largeur, int wait, bool phase)
        {
            //creation du premier tableau
            string[,] array1 = new string[longueur, largeur];

            //nombre random
            Random random = new Random();

            //affichage du premier tableau grace au random
            for (int m = 0; m < array1.GetLength(0); m++)
            {
                for (int i = 0; i < array1.GetLength(1); i++)
                {
                    int test = random.Next(0, 2);
                    if (test == 0)
                    {
                        array1[m, i] = "▓";
                    }
                    else
                    {
                        array1[m, i] = " ";
                    }
                }
            }

            JeuVie.Jeu(array1, wait, phase);
        }
        /// <summary>
        /// le jeu commence et ne se termine jamais
        /// </summary>
        /// <param name="array1">tableau de depart cree par une autre methode</param>
        /// <param name="wait">tant d'attente entre chaque transition</param>
        public static void Jeu(string[,] array1, int wait, bool phase)
        {
            int valeurretours = 0;

            JeuVie.Affichage(array1);
            if (phase == false)
            {
                valeurretours = 10;
            }
            while (true)
            {
                if (valeurretours == 10)
                {
                    array1 = JeuVie.check(array1, valeurretours);
                    JeuVie.Affichage(array1);
                    Thread.Sleep(wait);
                }
                else if (valeurretours == 1)
                {
                    valeurretours--;
                    string [,] array2 = JeuVie.check(array1, valeurretours);
                    JeuVie.Affichage(array2);
                    Thread.Sleep(wait);
                }
                else
                {
                    valeurretours++;
                    array1 = JeuVie.check(array1, valeurretours);
                    JeuVie.Affichage(array1);
                    Thread.Sleep(wait);
                }
            }
        }

        /// <summary>
        /// Vérifie les voisin et remplace le tableau
        /// </summary>
        /// <param name="array">tableau a verifier</param>
        /// <param name="valeurretours">verifie quoi retourner</param>
        /// <returns>le nouveau tableau</returns>

        public static string[,] check(string[,] array, int valeurretours)
        {
            int axex = array.GetLength(0);
            int axey = array.GetLength(1);
            int counter;
            string[,] tamponneuse = new string[axex, axey];
            string[,] phase = new string[axex, axey];



            for (int y = 0; y < axey; y++)
            {
                for (int x = 0; x < axex; x++)
                {
                    counter = 0;
                    if (x != 0 && y != 0 && x < axex - 1 && y < axey - 1)
                    {
                        if (array[x - 1, y - 1] == "▓")
                        {
                            counter++;
                        }
                        if (array[x, y - 1] == "▓")
                        {
                            counter++;
                        }
                        if (array[x + 1, y - 1] == "▓")
                        {
                            counter++;
                        }
                        if (array[x - 1, y] == "▓")
                        {
                            counter++;
                        }
                        if (array[x + 1, y] == "▓")
                        {
                            counter++;
                        }
                        if (array[x + 1, y + 1] == "▓")
                        {
                            counter++;
                        }
                        if (array[x, y + 1] == "▓")
                        {
                            counter++;
                        }
                        if (array[x - 1, y + 1] == "▓")
                        {
                            counter++;
                        }
                        //changement des donner dans un autre table
                    }

                    if (counter == 3)
                    {
                        if (array[x,y] == " ")
                        {
                            phase[x, y] = "▒";
                            tamponneuse[x, y] = "▓";

                        }
                        else
                        {
                            phase[x, y] = "▓";
                            tamponneuse[x, y] = "▓";
                        }
                    }
                    else if (counter == 2)
                    {
                        if (array[x, y] == "▓")
                        {
                            tamponneuse[x, y] = "▓";
                            phase[x, y] = "▓";

                        }
                        else
                        {
                            tamponneuse[x, y] = " ";
                            phase[x, y] = " ";

                        }
                    }
                    else if (counter != 3 && counter != 2)
                    {
                        if (array[x,y] == "▓")
                        {
                            tamponneuse[x, y] = " ";
                            phase[x, y] = "░";
                        }
                        else
                        {
                            tamponneuse[x, y] = " ";
                            phase[x, y] = " ";
                        }
                    }

                }
            }
            array = tamponneuse;

            if (valeurretours == 1 || valeurretours == 10)
            {
                return array;
            }
            else
            {
                return phase; 
            }


        }

        /// <summary>
        /// affiche du jeu
        /// </summary>
        /// <param name="array1">tableau</param>
        public static void Affichage(string[,] array1)
        {
            Console.SetCursorPosition(0, 0);
            for (int x = 0; x < array1.GetLength(0); x++)
            {
                for (int y = 0; y < array1.GetLength(1); y++)
                {
                    Console.Write(array1[x, y]);
                }
                Console.Write("\n");
            }



        }
    }
}


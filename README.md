Pour installer le projet en locale Il faut au préalable avoir php, nodejs et composer installé sur votre machine.
Si c'est n'est pas encore le cas vous pouvez consulter ces liens.
https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql/4237816-preparez-votre-environnement-de-travail
https://nodejs.org/en/
https://getcomposer.org/doc/00-intro.md

- Une fois ces installations réalisées, sur le terminal vous placer dans le dossier dans le que vous souhaitez installer le projet  

Lancer la commande $ Git clone https://github.com/githubprotoborne/prototype_borne.git

- Ouvrir le projet avec un éditeur de code tel que visual studio code ou sublimetext par exemple. 

- Copier le ficher .env.exemple qui se trouve à la racine du projet  et renommer la copie en .env 

- Sur le terminal Lancer la commande    
        $ composer install 

Sur le terminal toujours  Lancer la commande   $ php artisan key:generate 

       Pour générer la clé aléatoire de l’application 

   - compléter le fichier .env avec les informations de connexion à la base des données.
   
   - installer la  migration pour créer les tables de la base des données.
   avec la commande $ php artisan migrate:install
   - lancerla migration avec la commande php artisan migrate:fresh

   - Sur le terminal Lancer la commande npm install 
   -  Toujours sur le terminal lancer le projet  avec la commande
      php artisan serve   

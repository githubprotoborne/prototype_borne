1. installation

Pour installer le projet en locale Il faudra au préalable avoir php, nodejs et composer installé sur votre machine.
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
      
2. structure du code
    les composants React se trouvent dans le dossier ressources/js.
    2.1 description des composants.
     - la barre de navigation
          La barre de navigation est implementée dans le composant NavBar dans le fichier NavBar.js
     - Le menu est implementé dans le composant SideBar dans le fichier SiderBar.js
     - La page d'accueil est implementée dans le composant Home dans le fichier Home.js
     - l'entrée par profil (Je choisis mon profil) est implementée dans le composant ChoiceBar 
     - la page des sous catégorie est implémentée dans le composant SubContainer
     - la page de la liste des démarches est implémentée dans le composant Container. (le filtre par sous catégories à gauche set trouve dans le composant Sections dans le dossier Container et la liste des démarches dans le composant Prossesses du même dossier)
     2.1.6 La page de pré démarche est implémentée dans le composant Process
 3. les services.
   les fonctions qui gèrent   le contrast, le mode nuit, la luminosité se trouvent dans dossier Services.
      Pour la gestion de la luminosité les fonctions handleBright et handleBrightSuppression
      Pour le contrast 
           - reinforceContrast pour le contraste renforcé
            - standardContrast pour le contrast standard
           - DarkWhiteContrast pour le contrast noir sur blanc
            
 
 

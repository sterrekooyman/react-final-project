# HondAdoptie Webapplicatie
<img width="1440" alt="Screenshot 2022-07-08 at 14 12 22" src="https://user-images.githubusercontent.com/98888730/177989882-fd40f993-f05a-4946-bf5a-35d427e808bd.png">

## Installatiehandleiding

Hi! Welkom bij mijn webapplicatie, HondAdoptie. Dit project is gemaakt ter afsluiting van de bootcamp ‘front-end
development’ aan Hogeschool Novi. Hieronder lees je wat je nodig hebt om het project draaiende te krijgen. Veel plezier!


### Clone repository
De eerste stap is het clonen van de repository. Gebruik de GitHub clone feature:
<img width="939" alt="Screenshot 2022-07-08 at 13 51 25" src="https://user-images.githubusercontent.com/98888730/177987092-04650b66-c358-414c-bebf-fd69b70bbf64.png">


Of gebruik de onderstaande informatie om de code manueel te clonen.
- SSH: [git@github.com:sterrekooyman/react-final-project.git]
- HTTPS: https://github.com/sterrekooyman/react-final-project.git

### Code runnen
Om de applicatie vervolgens draaiende te krijgen is het als tweede stap belangrijk om [Node.js](https://nodejs.org/en/) en [NPM](https://www.npmjs.com/) te installeren. Daarna installeer je de NPM packages om de app te kunnen runnen. Dit doe je met de volgende commando’s:

`npm install`

Met dit commando installeer je alle vereiste NPM packages. 

`npm run start`

Met dit commando start je de app in development mode. Open http://localhost:3000 om de app in de browser te bekijken.
De pagina zal automatisch herladen bij het maken van aanpassingen. Ook zie je lint errors in de console.

`npm run build`

Bundelt de applicatie voor productie naar de `/build` folder. Dit optimaliseert React voor de beste prestatie. 

### Inloggegevens
Om in te loggen kun je zowel het testaccount als je eigen Google account gebruiken. Dit is het testaccount:

- Emailadres: novi@test.nl
- Wachtwoord: 123123

### Kanttekening
Mocht deze melding in de console tevoorschijn komen: :Uncaught (in promise) {message: 'A listener indicated an
asynchronous response by r…age channel closed before a response was received'}, dan heeft dit te maken met een aantal
Google Extensies; in mijn geval wordt het veroorzaakt door Ghostery. Zonder Ghostery en in incognito-mode verschijnt de
melding niet in de console.

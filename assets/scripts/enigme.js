// Déclaration du tableau de question
const listQuestions = [
    {
        "enonce" : "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’une Dora Milaje !",
        "indice" : '<h3>“ SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS ”</h3>',
        "anecdote" : 'Voici la transicription de l’alphabet <br>:<br>A = <span class="car">A</span> ; B = <span class="car">b</span> ; c = <span class="car">c</span> ; d = <span class="car">d</span> ; e = <span class="car">e</span> ; f = <span class="car">f</span> ; g = <span class="car">g</span> ; h = <span class="car">h</span> ; i = <span class="car">i</span> ; j = <span class="car">j</span> ;<br>k = <span class="car">k</span> ; l = <span class="car">l</span> ; m = <span class="car">m</span> ; n = <span class="car">n</span> ; o = <span class="car">o</span> ; p = <span class="car">p</span> ; q = <span class="car">q</span> ; r = <span class="car">r</span> ; s = <span class="car">s</span> ; t = <span class="car">t</span> ;<br>u = <span class="car">u</span> ; w = <span class="car">w</span> ; x = <span class="car">x</span> ; y = <span class="car">y</span> ; z = <span class="car">z</span>'
    },
    {
        "enonce" : "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de “chiffrement par décalage”. L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
        "indice" : "<p>Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mabwzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza</p>",
        "anecdote" : "Le savais tu ? <br><br>Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ?"
    },
    {
        "enonce" : "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
        "indice" : '<p>01001100 01000101 00100000 01010010 01001111 010010010000 01001100 01001001 01001111 01001110 00001101 00001010</p>',
        "anecdote" : "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
    }

];

// DOM capture
const numEnigme = document.querySelector('#numEnigme')
const enonce = document.querySelector('#enonce');
const indice = document.querySelector('#indice');
const anecdote = document.querySelector('#anecdote-text');
const reponse = document.querySelector('#reponse');
const nextBtn = document.querySelector('#envoyer');
const popup = document.querySelector('#popup');
const rebour = document.querySelector('#count');

// initialisation
let count = 0;
// let count_down = 40;

update();

function update() {
    numEnigme.textContent = count+1;
    
    enonce.textContent = listQuestions[count].enonce;
    indice.innerHTML = listQuestions[count].indice;
    anecdote.innerHTML = listQuestions[count].anecdote;
    reponse.value = "";
    reponse.focus();
}

nextBtn.addEventListener('click', questionSuivant);

function questionSuivant() {
    if (count == (listQuestions.length-1)){
        popup.classList.add('popup-ouvert');
    }
    else {
        if (reponse.value === "") {
            alert("Réponse invalide !");
        }
        else {
            count ++;
            update();
        }
    }
}

// rebour.textContent = count_down;

// function afficherTime() {
//     // rebour.textContent = count_down;
//     // popup.appendChild(rebour);
//     console.log(count_down);
// }

// while(count_down > 0){
//     setTimeout(afficherTime,1000);

//     count_down--;
// }

// Canva

    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    var raf;
    var running = false;
    // const width = canvas.width = window.innerWidth;
    // const height = canvas.height = window.innerHeight;
    const width = canvas.width = document.documentElement.scrollWidth;
    const height = canvas.height = document.documentElement.scrollHeight;

    var icon = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 5,
    radius: 25,
    draw: function() {
        // Charger l'image
        const image = new Image();
        image.src = 'assets/Illustrations_logo/logo_souris_BP2_blanc.png';
      
        // Attendre le chargement complet de l'image
        image.onload = function() {
          // Dessiner l'image à la place du cercle
          ctx.drawImage(image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        }.bind(this);
      }
    };

    function clear() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    function draw() {
    clear();
    icon.draw();
    icon.x += icon.vx;
    icon.y += icon.vy;

    if (icon.y + icon.vy > canvas.height || icon.y + icon.vy < 0) {
        icon.vy = -icon.vy;
    }
    if (icon.x + icon.vx > canvas.width || icon.x + icon.vx < 0) {
        icon.vx = -icon.vx;
    }

    raf = window.requestAnimationFrame(draw);
    }

    // Mettre à jour les coordonnées du dessin lors du déplacement de la souris
    function updateDrawingCoordinates(e) {
        const rect = canvas.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        e.clientY = e.clientY - rect.top - scrollTop;
        console.log(rect.top);
    }

    canvas.addEventListener('mousemove', function(e){
        updateDrawingCoordinates(e);
        
        if (!running) {
            clear();
            icon.x = e.clientX;
            icon.y = e.clientY;
            icon.draw();
        }
    });

    canvas.addEventListener("click",function(e){
    if (!running) {
        raf = window.requestAnimationFrame(draw);
        running = true;
    }
    });

    canvas.addEventListener("mouseout",function(e){
        window.cancelAnimationFrame(raf);
        running = false;
    });

    icon.draw();
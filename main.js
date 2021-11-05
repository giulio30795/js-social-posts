// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.

//  Creare Array con 5 oggetti(post) con le proprietà dei valori che associeremo al post
// loppato sopra estrando tutti i dati oper ogni post
// generare l'output per il DOM

// Creazione array

const posts = [
    {
        immagineProfilo: 'https://unsplash.it/300/300?image=15',
        userName: 'Giulio Incarbone',
        data: '1 settimana fa',
        testo: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        immaginePost: 'https://picsum.photos/200/100',
        miPiace: 'mi piace',
        contatore: 30,
    },
    {
        immagineProfilo: 'https://unsplash.it/300/100?image=15',
        userName: 'Stefano Rossi',
        data: 'ieri',
        testo: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        immaginePost: 'https://picsum.photos/200/100',
        miPiace: 'mi piace',
        contatore: 50,
    },
    {
        immagineProfilo: 'https://unsplash.it/300/300?image=15',
        userName: 'Marco Belli',
        data: '3 giorni fa',
        testo: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        immaginePost: 'https://picsum.photos/200/100',
        miPiace: 'mi piace',
        contatore: 95,
    },
    {
        immagineProfilo: 'https://unsplash.it/300/300?image=15',
        userName: 'Federico Malinverni',
        data: '03/02/2021',
        testo: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        immaginePost: 'https://picsum.photos/200/100',
        miPiace: 'mi piace',
        contatore: 22,
    },
    {
        immagineProfilo: 'https://unsplash.it/300/300?image=15',
        userName: 'nome',
        data: 'oggi',
        testo: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        immaginePost: 'https://picsum.photos/200/100',
        miPiace: 'mi piace',
        contatore: 59,
    },
]
const container = document.getElementById('container')
// Loop su array di oggetti per estrapolare il contenuto

for(let i = 0; i < posts.length; i++){
    const post = posts[i]
    
    // Funzione per creare il contenuto con le proprietà degli oggetti
    
    divGenerator (container, post.immagineProfilo, post.userName, post.data, post.testo, post.immaginePost, post.miPiace, post.contatore)
}

// Funzioni


function divGenerator (container, immagineProfilo, userName, data, testo, immaginePost, miPiace, contatore){
    container.innerHTML += `
<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${immagineProfilo}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${userName}</div>
                <div class="post-meta__time">${data}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${testo}.</div>
    <div class="post__image">
        <img src="${immaginePost}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">${miPiace}</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${contatore}</b> persone
            </div>
        </div> 
    </div>            
</div>`
}

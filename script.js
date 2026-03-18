// --- INSERISCI QUI LE TUE 50 DOMANDE ---
// Ti rimetto solo un esempio qui per brevità, incolla tu il listone da 50.
const domandeQuiz = [
    // --- 10 DOMANDE NORMALI (SITUAZIONI DI GRUPPO) ---
    { q: "Chi è il più probabile che finisca la serata a dormire sul divano di un altro?", a: "Il proprietario di casa", b: "Il più molesto", c: "Chi ha bevuto troppo", d: "Quello che non ha le chiavi" },
    { q: "Qual è la scusa più assurda mai sentita per paccare una serata?", a: "Ho sonno (alle 21:00)", b: "Devo lavare i capelli", c: "Mia madre non vuole", d: "Visualizzato e mai risposto" },
    { q: "Qual è il cibo salvavita alle 4 del mattino dopo la discoteca?", a: "Kebab completo", b: "Cornetto alla Nutella", c: "Pizza fredda del giorno prima", d: "Pasta in bianco deprimente" },
    { q: "Chi è il 're dei messaggi vocali' infiniti nel gruppo?", a: "Il logorroico", b: "Chi non ha voglia di scrivere", c: "Chi è in crisi esistenziale", d: "Il saggio del gruppo" },
    { q: "Cosa si ordina quando si capisce che la serata deve degenerare?", a: "Tequila sale e limone", b: "Gin Tonic ignorante", c: "Sambuca ghiacciata", d: "Chupito a sorpresa" },
    { q: "Chi sparisce sempre misteriosamente quando c'è da pagare il conto?", a: "Il finto tonto", b: "Chi va in bagno 'un attimo'", c: "L'esperto di Satispay", d: "Chi ha dimenticato il PIN" },
    { q: "Qual è l'app più imbarazzante che potremmo trovare sul tuo telefono?", a: "Tinder (nascosta in una cartella)", b: "Un gioco per bambini piccoli", c: "La calcolatrice (usata troppo)", d: "L'app della banca a zero" },
    { q: "Chi è quello che deve fotografare ogni momento per le storie di IG?", a: "L'influencer fallito", b: "Chi non si gode mai il momento", c: "Quello che fa foto mosse", d: "La ragazza estetica" },
    { q: "In quale viaggio di gruppo finireste sicuramente arrestati?", a: "Amsterdam", b: "Ibiza", c: "Las Vegas", d: "Campeggio abusivo" },
    { q: "Chi è il primo a cedere e addormentarsi durante un film?", a: "Chi russa dopo 5 minuti", b: "Il commentatore seriale", c: "Chi guarda solo lo smartphone", d: "Il più stanco della settimana" },

    // --- 40 DOMANDE 18+ (IL SUCCO DEL GIOCO) ---
    { q: "Qual è il posto più 'rischioso' dove l'hai fatto?", a: "In macchina in centro", b: "In un parco pubblico", c: "In spiaggia/mare", d: "In ufficio/scuola" },
    { q: "Cosa non deve ASSOLUTAMENTE mancare in una camera da letto 'attrezzata'?", a: "Manette o lacci", b: "Lubrificante", c: "Musica giusta", d: "Specchi ovunque" },
    { q: "Qual è il tuo 'dirty talk' preferito?", a: "Sussurri volgari", b: "Ordini diretti", c: "Silenzio assoluto", d: "Complimenti molto spinti" },
    { q: "Chi nel gruppo è più probabile che abbia un profilo OnlyFans segreto?", a: "Il più timido/a", b: "L'esibizionista", c: "Quello che va sempre in palestra", d: "Chi non posta mai nulla" },
    { q: "Cosa guardi per primo in un video porno?", a: "Le posizioni", b: "La trama (per ridere)", c: "Dettagli fisici specifici", d: "In soggettiva (POV)" },
    { q: "Qual è l'accessorio erotico che sogni di provare?", a: "Vibratore tecnologico", b: "Benda sugli occhi", c: "Plug/Giochi anali", d: "Cibi e salse" },
    { q: "Hai mai finto un orgasmo con un partner?", a: "Sì, per finire prima", b: "Sì, per non offenderlo/a", c: "Mai, sono sempre onesto/a", d: "Quasi ogni volta" },
    { q: "Qual è la durata ideale di un rapporto completo?", a: "Sotto i 10 min (veloce)", b: "Circa 20-30 min", c: "Tutta la notte", d: "Finché le gambe tremano" },
    { q: "Cosa pensi onestamente dei 'triangoli'?", a: "Sogno nel cassetto", b: "Già fatto (IYKYK)", c: "Mai nella vita", d: "Solo se sono l'unico uomo/donna" },
    { q: "Qual è la parte del corpo che preferisci farti baciare?", a: "Il collo", b: "Dietro le orecchie", c: "La schiena", d: "L'interno coscia" },
    { q: "Cosa hai usato come 'giocattolo erotico' improvvisato?", a: "Spazzolino elettrico", b: "Frutta o verdura", c: "Soffione della doccia", d: "Preferisco il silenzio stampa" },
    { q: "Cosa ti eccita istantaneamente in una persona?", a: "Un profumo particolare", b: "Uno sguardo intenso", c: "Un morso sul labbro", d: "Un certo modo di vestire" },
    { q: "Hai mai inviato un 'nude' alla persona sbagliata?", a: "Sì, un trauma totale", b: "Sì, ma eliminato subito", c: "No, controllo 10 volte", d: "Mandato apposta per sbaglio" },
    { q: "Qual è la tua posizione preferita 'salva-serata'?", a: "Missionario", b: "Pecora (Doggy)", c: "Cowgirl", d: "Cucchiaio (Spoon)" },
    { q: "Qual è il segnale che il partner sarà un disastro a letto?", a: "Niente preliminari", b: "Troppo egoista", c: "Troppa fretta", d: "Non usa le mani" },
    { q: "Cosa pensi dello scambismo di coppia?", a: "Molto interessante", b: "Troppa gelosia in ballo", c: "Solo per coppie annoiate", d: "Massima libertà" },
    { q: "L'ultima volta che l'hai fatto davvero?", a: "Meno di 24 ore fa", b: "Settimana scorsa", c: "Non ricordo (astinenza)", d: "Stamattina" },
    { q: "Ti piace più essere dominato/a o dominare?", a: "Dominare (Boss)", b: "Essere sottomesso/a", c: "50 e 50", d: "Dipende dalla luna" },
    { q: "Hai mai avuto un'avventura di una notte di cui ti sei pentito/a?", a: "Sì, la mattina dopo", b: "No, è stato divertente", c: "Mai fatte avventure", d: "Pentito/a solo per la sua faccia" },
    { q: "Cosa ne pensi del sesso anale?", a: "Sì, assolutamente", b: "No, troppo dolore", c: "Solo per occasioni speciali", d: "Mai provato ma vorrei" },
    { q: "Qual è il 'fetish' più strano che accetteresti per amore?", a: "Piedi", b: "Divise o uniformi", c: "Cosplay/Personaggi", d: "Spanking (schiaffi)" },
    { q: "Dov'è il posto più assurdo dove ti sei masturbato/a?", a: "In un mezzo pubblico", b: "In ufficio/lavoro", c: "A casa di parenti", d: "Al cinema" },
    { q: "Hai mai beccato qualcuno (o sei stato beccato) sul fatto?", a: "Sì, trauma infantile", b: "Ho sentito rumori sospetti", c: "No, massima discrezione", d: "Beccato/a io sul più bello" },
    { q: "Sesso con luci accese o rigorosamente spente?", a: "Luce piena (esibizionista)", b: "Buio totale", c: "Luce soffusa o candele", d: "Basta che si faccia" },
    { q: "Cosa ne pensi dei sex toy durante il sesso col partner?", a: "Indispensabili", b: "Distraggono troppo", c: "Solo ogni tanto", d: "Mai usati" },
    { q: "Cosa cerchi in un partner per una sola notte?", a: "Fisico da urlo", b: "Igiene perfetta", c: "Sguardo magnetico", d: "Che non parli troppo" },
    { q: "Ti sei mai innamorato/a dopo un solo rapporto sessuale?", a: "Sì, sono un disastro", b: "No, separo i piani", c: "È successo una volta", d: "Scappo prima che accada" },
    { q: "Sesso in acqua (mare/piscina): promosso o bocciato?", a: "Promosso (molto sexy)", b: "Bocciato (scomodissimo)", c: "Solo in idromassaggio", d: "Troppo rischioso" },
    { q: "Qual è la proposta più indecente che hai mai ricevuto?", a: "Sesso a pagamento", b: "Triangolo/Cosa a quattro", c: "Richiesta di foto piedi", d: "Video amatoriale" },
    { q: "Cosa ti piace fare IMMEDIATAMENTE dopo il sesso?", a: "Dormire sodo", b: "Fumare o bere qualcosa", c: "Coccole infinite", d: "Doccia e scappare" },
    { q: "Preferiresti farlo con un ex o con uno sconosciuto?", a: "Ex (usato sicuro)", b: "Sconosciuto (brivido)", c: "Nessuno dei due", d: "Entrambi (non insieme!)" },
    { q: "Usi le app di incontri esclusivamente per sesso?", a: "Tinder è la mia Bibbia", b: "Provato ma rimosso", c: "No, cerco l'amore", d: "Solo se sono ubriaco/a" },
    { q: "Qual è il tuo limite invalicabile a letto?", a: "Cose sporche (scat)", b: "Violenza o dolore vero", c: "Coinvolgere terzi", d: "Non ho limiti, provo tutto" },
    { q: "Sesso al primo appuntamento: sì o no?", a: "Perché aspettare?", b: "Solo se c'è chimica rara", c: "No, sono all'antica", d: "Dipende da quanto ho bevuto" },
    { q: "Il complimento più bello ricevuto durante l'atto?", a: "Sei il/la migliore", b: "Hai un corpo stupendo", c: "Mai provato nulla di simile", d: "Mi hai distrutto/a (in senso buono)" },
    { q: "Preferisci il sesso lento o quello selvaggio?", a: "Selvaggio e animalesco", b: "Lento e passionale", c: "Inizia bene, finisce male", d: "Basta che sia sesso" },
    { q: "Ti sei mai spogliato/a integralmente in webcam?", a: "Sì, per il partner", b: "Sì, per sconosciuti", c: "No, troppo pericoloso", d: "Solo per una scommessa" },
    { q: "Qual è il tuo record di astinenza?", a: "Una settimana", b: "Un mese", c: "Un anno intero", d: "Ci sono dentro ora" },
    { q: "Sesso con la musica in sottofondo: sì o no?", a: "Sì, playlist dedicata", b: "No, mi deconcentra", c: "Sì, ma solo techno", d: "Sì, ma la TV accesa" },
    { q: "Qual è l'orario perfetto per farlo?", a: "Appena svegli", b: "Pomeriggio piovoso", c: "Notte fonda post-serata", d: "Pausa pranzo veloce" }
];

let domandaCorrente = null;

function generaDomanda() {
    // Rimuovi la selezione precedente
    document.querySelectorAll('.answer-card').forEach(card => card.classList.remove('selected'));

    // Pesca domanda a caso
    const randomIdx = Math.floor(Math.random() * domandeQuiz.length);
    domandaCorrente = domandeQuiz[randomIdx];

    // Aggiorna interfaccia
    document.getElementById("domanda").innerText = domandaCorrente.q;
    document.getElementById("ansA").innerText = domandaCorrente.a;
    document.getElementById("ansB").innerText = domandaCorrente.b;
    document.getElementById("ansC").innerText = domandaCorrente.c;
    document.getElementById("ansD").innerText = domandaCorrente.d;

    // Vibrazione tattile leggera al cambio (per mobile)
    if (window.navigator.vibrate) window.navigator.vibrate(20);
}

// Funzione per gestire il click visivo sulle risposte
function selezionaRisposta(lettera) {
    // Deseleziona tutto
    document.querySelectorAll('.answer-card').forEach(card => card.classList.remove('selected'));
    
    // Seleziona quella cliccata
    const cardCliccata = document.querySelector(`.quiz-grid button:nth-child(${lettera === 'A' ? 1 : lettera === 'B' ? 2 : lettera === 'C' ? 3 : 4})`);
    cardCliccata.classList.add('selected');

    // Vibrazione media alla selezione
    if (window.navigator.vibrate) window.navigator.vibrate(50);
}

// Avvia la prima domanda
document.addEventListener('DOMContentLoaded', generaDomanda);

// Associa evento al pulsante
document.getElementById("nextBtn").addEventListener("click", generaDomanda);
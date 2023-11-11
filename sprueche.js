
var quotes = [
  "Erfolg ist 99% Misserfolg",
  "Der Wert des Lebens kann daran gemessen werden wie oft die Seele tief berührt wurde.",
  "Handeln ohne Philosophie ist eine tödliche Waffe; Philosophie ohne Handeln ist wertlos.",
  "wir habe alle ein Recht auf unsere verrückten Träume",
  "Ich ließ zu, dass niemand meine Konzentration störte ... Selbst der Hunger konnte mich nicht stören.",
  "Ich würde lieber sterben, als andere Menschen nachzuahmen ... Deshalb mussten wir so hart arbeiten! Weil wir nicht nachgeahmt haben.",
  "Endlich wurde ich ein unabhängiger Mann, ein echter Mann, Herr seiner Beine, seines Kopfes, seines Schicksals, seines Zeitplans und der Risiken, die er eingehen musste.",
  "Es gibt ein japanisches Sprichwort, das wörtlich sagt: „Hebe die Segel mit deiner stärkeren Hand“, was bedeutet, dass du die Chancen nutzen musst, die sich im Leben ergeben und für die du am besten gerüstet bist.",
  "Jeder Mensch hat den Wunsch, sich zu verbessern.",
  "Denken Sie jung und suchen Sie nach den „drei Freuden“: Kreieren, Kaufen und Verkaufen.",
  "Wenn es etwas ist, was ein Mensch tun kann, dann ist es etwas, was ich tun kann. Was kann ein Mensch tun, was ich nicht tun kann? Das habe ich immer gesagt."
];
var quote = quotes[Math.floor(Math.random() * quotes.length)];
var slogans = document.getElementsByClassName('logo-slogan');
for (var i = 0; i < slogans.length; i++) {
  slogans[i].innerHTML = quote;
}
/* Namensdatenbank. Beliebig bearbeitbar: Namen hinzufügen, löschen, umsortieren.
   Format pro Zeile:  Name | Typ (m = Junge, u = neutral) | Herkunft | Bedeutung
   Stimmen werden über den Namenstext gespeichert, die Liste darf sich also jederzeit ändern. */
const NAMEDATA = `
Aaron|m|hebräisch|umstritten, u. a. „Berg der Stärke“
Abel|m|hebräisch|„Hauch, Atem“
Adam|m|hebräisch|„Mensch, der von der Erde Genommene“
Adrian|m|lateinisch|„der aus Hadria (Stadt in Italien)“
Albert|m|germanisch|„durch Adel glänzend“
Alexander|m|griechisch|„Beschützer der Männer“
Alfred|m|altenglisch|„Ratgeber der Elfen“
Amir|m|arabisch|„Fürst, Befehlshaber“
Ansgar|m|germanisch|„Speer der Götter (Asen)“
Anselm|m|germanisch|„der von den Göttern Behelmte“, Schutz Gottes
Anton|m|lateinisch|römischer Geschlechtername, Bedeutung unsicher
Arne|m|skandinavisch|„Adler“
Arthur|m|keltisch|Herkunft umstritten, evtl. „Bär“
Aurel|m|lateinisch|„der Goldene“
August|m|lateinisch|„der Erhabene, der Heilige“
Axel|m|skandinavisch|Form von Absalom, „Vater des Friedens“
Balthasar|m|babylonisch|„Gott schütze den König“
Bastian|m|griechisch|Kurzform von Sebastian
Bela|m|ungarisch|„weiß, hell“
Ben|m|hebräisch|„Sohn“, Kurzform von Benjamin
Benedikt|m|lateinisch|„der Gesegnete“
Benno|m|germanisch|Kurzform von Bernhard, „stark wie ein Bär“
Bernhard|m|germanisch|„Bär“ + „stark“
Bertram|m|germanisch|„glänzender Rabe“
Bjarne|m|dänisch|„Bär“
Björn|m|altnordisch|„Bär“
Boris|m|slawisch|„Kampf, Kämpfer“
Bruno|m|germanisch|„braun“ oder „Brünne (Rüstung)“
Carl|m|germanisch|„freier Mann“, Form von Karl
Caspar|m|persisch|„Schatzmeister“
Christian|m|lateinisch|„der Christ, Anhänger Christi“
Christoph|m|griechisch|„Christusträger“
Clemens|m|lateinisch|„der Milde, Gnädige“
Constantin|m|lateinisch|„der Standhafte, Beständige“
Cornelius|m|lateinisch|römischer Geschlechtername, evtl. „Horn“
Damian|m|griechisch|„bezwingen, zähmen“
Daniel|m|hebräisch|„Gott ist mein Richter“
Dario|m|persisch|„der das Gute besitzt“
David|m|hebräisch|„der Geliebte“
Dennis|m|griechisch|„Diener des Dionysos“
Dietrich|m|germanisch|„Herrscher des Volkes“
Dominik|m|lateinisch|„dem Herrn gehörend“
Eduard|m|altenglisch|„Hüter des Reichtums“
Elio|m|italienisch|von griechisch Helios, „Sonne“
Elias|m|hebräisch|„Mein Gott ist Jahwe“
Emanuel|m|hebräisch|„Gott ist mit uns“
Emil|m|lateinisch|„der Eifrige, Nacheifernde“
Emilian|m|lateinisch|Ableitung von Emil, „der Eifrige“
Enzo|m|italienisch|Kurzform von Lorenzo bzw. Heinz, „Herrscher des Hauses“
Erik|m|altnordisch|„ewiger Herrscher“
Ernst|m|germanisch|„Ernst, Kampf, Beständigkeit“
Eugen|m|griechisch|„der Wohlgeborene, Edle“
Ewald|m|germanisch|„der nach dem Gesetz Herrschende“
Fabian|m|lateinisch|„aus dem Geschlecht der Fabier“
Felix|m|lateinisch|„der Glückliche“
Ferdinand|m|germanisch|„kühner Reisender“
Fiete|m|plattdeutsch|Kurzform von Friedrich
Finn|m|irisch|„der Blonde, der Weiße“
Florian|m|lateinisch|„der Blühende“
Friedrich|m|germanisch|„Herrscher des Friedens“
Fritz|m|deutsch|Kurzform von Friedrich
Gabriel|m|hebräisch|„Gott ist meine Stärke“
Georg|m|griechisch|„Landmann, Bauer“
Gerrit|m|niederländisch|Form von Gerhard, „Speer“ + „stark“
Gregor|m|griechisch|„der Wachsame“
Gustav|m|schwedisch|„Stab der Goten“, „Kampfstab“
Hannes|m|deutsch|Kurzform von Johannes
Hans|m|deutsch|Kurzform von Johannes
Harald|m|altnordisch|„Herrscher des Heeres“
Heinrich|m|germanisch|„Herrscher des Hauses“
Henning|m|niederdeutsch|Kurzform von Heinrich bzw. Johannes
Henrik|m|skandinavisch|Form von Heinrich
Henry|m|englisch|Form von Heinrich, „Herrscher des Hauses“
Herbert|m|germanisch|„glänzendes Heer“
Hermann|m|germanisch|„Heer“ + „Mann“
Hugo|m|germanisch|„Geist, Verstand“
Ilias|m|griechisch|Form von Elias
Jakob|m|hebräisch|„Gott schütze“, auch „Fersenhalter“
Jan|m|niederländisch|Kurzform von Johannes
Jannis|m|griechisch|Form von Johannes, „Gott ist gnädig“
Jasper|m|persisch|„Schatzmeister“
Jens|m|dänisch|Form von Johannes
Joachim|m|hebräisch|„Gott richtet auf“
Joel|m|hebräisch|„Jahwe ist Gott“
Johannes|m|hebräisch|„Gott ist gnädig“
Jonas|m|hebräisch|„Taube“
Jonathan|m|hebräisch|„Gott hat gegeben“
Josef|m|hebräisch|„Gott fügt hinzu“
Joshua|m|hebräisch|„Gott ist Rettung“
Jost|m|bretonisch|von Jodokus, „Kämpfer“
Julian|m|lateinisch|„aus dem Geschlecht der Julier“
Justus|m|lateinisch|„der Gerechte“
Kaspar|m|persisch|„Schatzmeister“
Karl|m|germanisch|„freier Mann“
Kilian|m|irisch|„Mönch, Kirchenmann“
Klaus|m|deutsch|Kurzform von Nikolaus
Knut|m|altnordisch|„Knoten“
Konrad|m|germanisch|„kühner Ratgeber“
Lars|m|skandinavisch|Form von Laurentius
Lasse|m|skandinavisch|Kurzform von Lars/Laurentius
Laurin|m|lateinisch|„der Lorbeer“, „aus Laurentum“
Leander|m|griechisch|„Löwenmann“
Lennard|m|germanisch|Form von Leonhard, „stark wie ein Löwe“
Lenz|m|deutsch|alt für „Frühling“
Leo|m|lateinisch|„Löwe“
Leon|m|griechisch|„Löwe“
Leopold|m|germanisch|„kühner Mann des Volkes“
Levi|m|hebräisch|„der Anhängliche, Verbundene“
Liam|m|irisch|Kurzform von William, „Willensstarker Beschützer“
Linus|m|griechisch|mythischer Sänger, Bedeutung unsicher
Lorenz|m|lateinisch|„der aus Laurentum“, „der Lorbeerbekränzte“
Lothar|m|germanisch|„berühmter Krieger“
Louis|m|französisch|Form von Ludwig, „berühmter Kämpfer“
Luan|m|albanisch|„Löwe“
Luca|m|italienisch|Form von Lukas
Ludwig|m|germanisch|„berühmter Kämpfer“
Lukas|m|griechisch|„der aus Lucania“, „der Leuchtende“
Magnus|m|lateinisch|„der Große“
Malte|m|niederdeutsch|Herkunft umstritten
Marcel|m|lateinisch|„kleiner Marcus“, „dem Mars geweiht“
Mario|m|italienisch|Form von Marius, „dem Mars geweiht“
Marius|m|lateinisch|„dem Mars geweiht“
Markus|m|lateinisch|„dem Mars geweiht“
Marlon|m|unsicher|Herkunft umstritten, evtl. französisch „kleiner Falke“
Martin|m|lateinisch|„dem Mars geweiht“
Mateo|m|spanisch|Form von Matthäus, „Geschenk Gottes“
Matteo|m|italienisch|Form von Matthäus, „Geschenk Gottes“
Matthias|m|hebräisch|„Geschenk Jahwes“
Mats|m|skandinavisch|Form von Matthias
Mattis|m|skandinavisch|Form von Matthias
Max|m|lateinisch|Kurzform von Maximilian, „der Größte“
Maximilian|m|lateinisch|„der Größte“
Merlin|m|keltisch|walisisch Myrddin, englisch „Falke“
Michael|m|hebräisch|„Wer ist wie Gott?“
Milan|m|slawisch|„der Liebe, Gnädige“
Moritz|m|lateinisch|„der Maure, der Dunkelhäutige“
Nico|m|griechisch|Kurzform von Nikolaus, „Sieg des Volkes“
Niklas|m|griechisch|„Sieg des Volkes“
Nikolaus|m|griechisch|„Sieg des Volkes“
Nils|m|skandinavisch|Form von Nikolaus
Noah|m|hebräisch|„Ruhe, Trost“
Ole|m|skandinavisch|Form von Olaf, „Nachkomme der Vorfahren“
Oliver|m|lateinisch|„Olivenbaum“, Herkunft umstritten
Oskar|m|irisch|„Hirschfreund“
Oswald|m|altenglisch|„Gottes Macht“
Otto|m|germanisch|„Besitz, Reichtum“
Pascal|m|französisch|„der zu Ostern Geborene“
Patrick|m|lateinisch|„Adliger, Patrizier“
Paul|m|lateinisch|„der Kleine, Bescheidene“
Peter|m|griechisch|„Fels“
Philipp|m|griechisch|„Pferdefreund“
Piet|m|niederländisch|Form von Peter, „Fels“
Quentin|m|lateinisch|„der Fünfte“
Quirin|m|lateinisch|„Speerträger“
Rafael|m|hebräisch|„Gott heilt“
Rainer|m|germanisch|„Ratgeber im Heer“
Raphael|m|hebräisch|„Gott heilt“
Reinhard|m|germanisch|„kühn im Rat“
Richard|m|germanisch|„mächtiger Herrscher“
Robin|m|englisch|Kurzform von Robert, „glänzender Ruhm“
Roman|m|lateinisch|„der Römer“
Ruben|m|hebräisch|„Seht, ein Sohn!“
Rudolf|m|germanisch|„ruhmreicher Wolf“
Samuel|m|hebräisch|„Gott hat erhört“
Santiago|m|spanisch|von „Sant Iago“, Heiliger Jakob
Sebastian|m|griechisch|„der Verehrte, Erhabene“
Silas|m|lateinisch|„Waldbewohner“
Simon|m|hebräisch|„Gott hat gehört“
Sören|m|dänisch|Form von Severin, „der Strenge“
Stefan|m|griechisch|„der Gekrönte“
Sven|m|altnordisch|„Junge, Krieger“
Theo|m|griechisch|„Gott“, Kurzform von Theodor („Geschenk Gottes“)
Thilo|m|deutsch|Kurzform von Dietrich, „Herrscher des Volkes“
Thomas|m|aramäisch|„Zwilling“
Till|m|deutsch|Kurzform von Dietrich, „Herrscher des Volkes“
Tilo|m|deutsch|Kurzform von Dietrich, „Herrscher des Volkes“
Tim|m|griechisch|Kurzform von Timotheus, „Gott ehrend“
Timo|m|finnisch|Form von Timotheus, „Gott ehrend“
Titus|m|lateinisch|römischer Vorname, Bedeutung unsicher
Tobias|m|hebräisch|„Gott ist gut“
Tom|m|aramäisch|Kurzform von Thomas, „Zwilling“
Torben|m|dänisch|„Thors Bär“
Tristan|m|keltisch|Herkunft umstritten, evtl. „Lärm, Tumult“
Ulrich|m|germanisch|„Erbe“ + „Herrscher“
Valentin|m|lateinisch|„der Gesunde, Starke“
Victor|m|lateinisch|„der Sieger“
Vincent|m|lateinisch|„der Siegende“
Walter|m|germanisch|„Herrscher des Heeres“
Werner|m|germanisch|„Heer“ + „Wächter“
Wilhelm|m|germanisch|„Wille“ + „Helm, Schutz“
Xaver|m|baskisch|„neues Haus“
Yannick|m|bretonisch|Form von Jean, „Gott ist gnädig“
Yusuf|m|arabisch|Form von Josef, „Gott fügt hinzu“
Zacharias|m|hebräisch|„Jahwe hat sich erinnert“
Alex|u|griechisch|Kurzform von Alexander/Alexandra, „Beschützer“
Ari|u|hebräisch|„Löwe“
Cato|u|lateinisch|„der Kluge, Scharfsinnige“
Charlie|u|englisch|Form von Charles, „freier Mann“
Eden|u|hebräisch|„Wonne, Garten“
Eli|u|hebräisch|„Höhe, der Erhabene“
Elia|u|italienisch|Form von Elias
Fin|u|irisch|Kurzform von Finn, „der Helle“
Indigo|u|griechisch|„aus Indien“, tiefblaue Farbe
Jo|u|hebräisch|Kurzform von Joseph/Johanna
Jona|u|hebräisch|„Taube“
Joris|u|niederländisch|Form von Georg, „Landmann“
Jorin|u|nordfriesisch|Form von Georg, „Landmann“
Jules|u|französisch|Form von Julius
Juri|u|russisch|Form von Georg, „Landmann“
Kai|u|friesisch|u. a. „Meer“ (hawaiianisch), auch Kurzform von Gaius
Kaya|u|mehrere|u. a. türkisch „Fels“
Kim|u|englisch|Herkunft vielfältig
Lenny|u|englisch|Kurzform von Leonard, „stark wie ein Löwe“
Levin|u|germanisch|„lieber Freund“
Lian|u|chinesisch|u. a. „Lotus“, Herkunft vielfältig
Lio|u|italienisch|Kurzform von Leo, „Löwe“
Lou|u|französisch|Kurzform von Louis/Luise
Luka|u|slawisch|Form von Lukas
Maxi|u|lateinisch|Kurzform von Maximilian
Nemo|u|lateinisch|„niemand“
Noa|u|hebräisch|„Bewegung“, Form von Noah
Noel|u|französisch|„Weihnachten, Geburt“
Quinn|u|irisch|u. a. „der Weise“
Ravi|u|Sanskrit|„Sonne“
Remy|u|französisch|„Ruderer“
Rene|u|französisch|„der Wiedergeborene“
Rio|u|spanisch|„Fluss“
Ronin|u|japanisch|„herrenloser Samurai“
Rowan|u|gälisch|„Eberesche“
Sam|u|hebräisch|Kurzform von Samuel/Samantha
Sascha|u|russisch|Kurzform von Alexander
Sasha|u|russisch|Kurzform von Alexander
Sunny|u|englisch|„sonnig“
Tarik|u|arabisch|„Morgenstern“
Taylor|u|englisch|„Schneider“
Toni|u|lateinisch|Kurzform von Anton/Antonia
Yuki|u|japanisch|„Schnee“ oder „Glück“
Zeno|u|griechisch|„der von Zeus Stammende“
`;

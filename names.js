/* Namensdatenbank. Beliebig bearbeitbar: Namen hinzufügen, löschen, umsortieren.
   Format pro Zeile:  Name | Typ (m = Junge, u = Unisex) | Herkunft | Bedeutung | Tags (optional: bay = bayerisch, schwaeb = schwäbisch)
   Stimmen werden über den Namenstext gespeichert, die Liste darf sich also jederzeit ändern. */
const NAMEDATA = `
Aaron|m|hebräisch|umstritten, u. a. „Berg der Stärke“
Abel|m|hebräisch|„Hauch, Atem“
Adam|m|hebräisch|„Mensch, der von der Erde Genommene“
Adrian|m|lateinisch|„der aus Hadria (Stadt in Italien)“|heilig
Albert|m|germanisch|„durch Adel glänzend“|heilig,retro
Alexander|m|griechisch|„Beschützer der Männer“
Alfred|m|altenglisch|„Ratgeber der Elfen“|retro
Amir|m|arabisch|„Fürst, Befehlshaber“
Ansgar|m|germanisch|„Speer der Götter (Asen)“
Anselm|m|germanisch|„der von den Göttern Behelmte“, Schutz Gottes|retro
Anton|m|lateinisch|römischer Geschlechtername, Bedeutung unsicher|bay,heilig,retro
Arne|m|skandinavisch|„Adler“
Arthur|m|keltisch|Herkunft umstritten, evtl. „Bär“
Aurel|m|lateinisch|„der Goldene“
August|m|lateinisch|„der Erhabene, der Heilige“|retro
Axel|m|skandinavisch|Form von Absalom, „Vater des Friedens“
Balthasar|m|babylonisch|„Gott schütze den König“|bay,heilig
Bastian|m|griechisch|Kurzform von Sebastian|bay,heilig
Bela|m|ungarisch|„weiß, hell“
Ben|m|hebräisch|„Sohn“, Kurzform von Benjamin
Benedikt|m|lateinisch|„der Gesegnete“|bay,heilig
Benno|m|germanisch|Kurzform von Bernhard, „stark wie ein Bär“|bay,heilig,retro
Bernhard|m|germanisch|„Bär“ + „stark“|schwaeb,heilig
Bertram|m|germanisch|„glänzender Rabe“
Bjarne|m|dänisch|„Bär“
Björn|m|altnordisch|„Bär“
Boris|m|slawisch|„Kampf, Kämpfer“
Bruno|m|germanisch|„braun“ oder „Brünne (Rüstung)“|retro
Carl|m|germanisch|„freier Mann“, Form von Karl|retro
Caspar|m|persisch|„Schatzmeister“|heilig
Christian|m|lateinisch|„der Christ, Anhänger Christi“
Christoph|m|griechisch|„Christusträger“|schwaeb,heilig
Clemens|m|lateinisch|„der Milde, Gnädige“|heilig
Constantin|m|lateinisch|„der Standhafte, Beständige“
Cornelius|m|lateinisch|römischer Geschlechtername, evtl. „Horn“
Damian|m|griechisch|„bezwingen, zähmen“|heilig
Daniel|m|hebräisch|„Gott ist mein Richter“|heilig
Dario|m|persisch|„der das Gute besitzt“
David|m|hebräisch|„der Geliebte“
Dennis|m|griechisch|„Diener des Dionysos“|heilig
Dietrich|m|germanisch|„Herrscher des Volkes“|retro
Dominik|m|lateinisch|„dem Herrn gehörend“|heilig
Eduard|m|altenglisch|„Hüter des Reichtums“|retro
Elio|m|italienisch|von griechisch Helios, „Sonne“
Elias|m|hebräisch|„Mein Gott ist Jahwe“
Emanuel|m|hebräisch|„Gott ist mit uns“
Emil|m|lateinisch|„der Eifrige, Nacheifernde“|retro
Emilian|m|lateinisch|Ableitung von Emil, „der Eifrige“
Enzo|m|italienisch|Kurzform von Lorenzo bzw. Heinz, „Herrscher des Hauses“
Erik|m|altnordisch|„ewiger Herrscher“
Ernst|m|germanisch|„Ernst, Kampf, Beständigkeit“|schwaeb,retro
Eugen|m|griechisch|„der Wohlgeborene, Edle“|schwaeb,retro
Ewald|m|germanisch|„der nach dem Gesetz Herrschende“|retro
Fabian|m|lateinisch|„aus dem Geschlecht der Fabier“|heilig
Felix|m|lateinisch|„der Glückliche“|heilig
Ferdinand|m|germanisch|„kühner Reisender“|retro
Fiete|m|plattdeutsch|Kurzform von Friedrich
Finn|m|irisch|„der Blonde, der Weiße“|irisch
Florian|m|lateinisch|„der Blühende“|bay,heilig
Friedrich|m|germanisch|„Herrscher des Friedens“|schwaeb,retro
Fritz|m|deutsch|Kurzform von Friedrich|schwaeb,retro
Gabriel|m|hebräisch|„Gott ist meine Stärke“|heilig
Georg|m|griechisch|„Landmann, Bauer“|bay,heilig
Gerrit|m|niederländisch|Form von Gerhard, „Speer“ + „stark“
Gregor|m|griechisch|„der Wachsame“|bay,heilig
Gustav|m|schwedisch|„Stab der Goten“, „Kampfstab“|retro
Hannes|m|deutsch|Kurzform von Johannes|schwaeb
Hans|m|deutsch|Kurzform von Johannes|retro
Harald|m|altnordisch|„Herrscher des Heeres“
Heinrich|m|germanisch|„Herrscher des Hauses“|retro
Henning|m|niederdeutsch|Kurzform von Heinrich bzw. Johannes
Henrik|m|skandinavisch|Form von Heinrich
Henry|m|englisch|Form von Heinrich, „Herrscher des Hauses“
Herbert|m|germanisch|„glänzendes Heer“|retro
Hermann|m|germanisch|„Heer“ + „Mann“|schwaeb,retro
Hugo|m|germanisch|„Geist, Verstand“|retro
Ilias|m|griechisch|Form von Elias
Jakob|m|hebräisch|„Gott schütze“, auch „Fersenhalter“|schwaeb,heilig
Jan|m|niederländisch|Kurzform von Johannes
Jannis|m|griechisch|Form von Johannes, „Gott ist gnädig“
Jasper|m|persisch|„Schatzmeister“
Jens|m|dänisch|Form von Johannes
Joachim|m|hebräisch|„Gott richtet auf“
Joel|m|hebräisch|„Jahwe ist Gott“
Johannes|m|hebräisch|„Gott ist gnädig“|schwaeb,heilig
Jonas|m|hebräisch|„Taube“
Jonathan|m|hebräisch|„Gott hat gegeben“
Josef|m|hebräisch|„Gott fügt hinzu“|bay,heilig,retro
Joshua|m|hebräisch|„Gott ist Rettung“
Jost|m|bretonisch|von Jodokus, „Kämpfer“|heilig
Julian|m|lateinisch|„aus dem Geschlecht der Julier“|heilig
Justus|m|lateinisch|„der Gerechte“|heilig
Kaspar|m|persisch|„Schatzmeister“|bay,heilig
Karl|m|germanisch|„freier Mann“|schwaeb,retro
Kilian|m|irisch|„Mönch, Kirchenmann“|bay,heilig,irisch
Klaus|m|deutsch|Kurzform von Nikolaus
Knut|m|altnordisch|„Knoten“
Konrad|m|germanisch|„kühner Ratgeber“|bay,schwaeb,heilig,retro
Lars|m|skandinavisch|Form von Laurentius
Lasse|m|skandinavisch|Kurzform von Lars/Laurentius
Laurin|m|lateinisch|„der Lorbeer“, „aus Laurentum“
Leander|m|griechisch|„Löwenmann“
Lennard|m|germanisch|Form von Leonhard, „stark wie ein Löwe“
Lenz|m|deutsch|alt für „Frühling“|bay
Leo|m|lateinisch|„Löwe“
Leon|m|griechisch|„Löwe“
Leopold|m|germanisch|„kühner Mann des Volkes“|heilig,retro
Levi|m|hebräisch|„der Anhängliche, Verbundene“
Liam|m|irisch|Kurzform von William, „Willensstarker Beschützer“|irisch
Linus|m|griechisch|mythischer Sänger, Bedeutung unsicher
Lorenz|m|lateinisch|„der aus Laurentum“, „der Lorbeerbekränzte“|bay,heilig
Lothar|m|germanisch|„berühmter Krieger“|retro
Louis|m|französisch|Form von Ludwig, „berühmter Kämpfer“
Luan|m|albanisch|„Löwe“
Luca|m|italienisch|Form von Lukas
Ludwig|m|germanisch|„berühmter Kämpfer“|bay,retro
Lukas|m|griechisch|„der aus Lucania“, „der Leuchtende“|heilig
Magnus|m|lateinisch|„der Große“|heilig
Malte|m|niederdeutsch|Herkunft umstritten
Marcel|m|lateinisch|„kleiner Marcus“, „dem Mars geweiht“
Mario|m|italienisch|Form von Marius, „dem Mars geweiht“
Marius|m|lateinisch|„dem Mars geweiht“
Markus|m|lateinisch|„dem Mars geweiht“|heilig
Marlon|m|unsicher|Herkunft umstritten, evtl. französisch „kleiner Falke“
Martin|m|lateinisch|„dem Mars geweiht“|heilig
Mateo|m|spanisch|Form von Matthäus, „Geschenk Gottes“
Matteo|m|italienisch|Form von Matthäus, „Geschenk Gottes“
Matthias|m|hebräisch|„Geschenk Jahwes“|bay,heilig
Mats|m|skandinavisch|Form von Matthias
Mattis|m|skandinavisch|Form von Matthias
Max|m|lateinisch|Kurzform von Maximilian, „der Größte“|bay
Maximilian|m|lateinisch|„der Größte“|bay,heilig
Merlin|m|keltisch|walisisch Myrddin, englisch „Falke“
Michael|m|hebräisch|„Wer ist wie Gott?“|bay,heilig
Milan|m|slawisch|„der Liebe, Gnädige“
Moritz|m|lateinisch|„der Maure, der Dunkelhäutige“
Nico|m|griechisch|Kurzform von Nikolaus, „Sieg des Volkes“
Niklas|m|griechisch|„Sieg des Volkes“|heilig
Nikolaus|m|griechisch|„Sieg des Volkes“|heilig
Nils|m|skandinavisch|Form von Nikolaus
Noah|m|hebräisch|„Ruhe, Trost“
Ole|m|skandinavisch|Form von Olaf, „Nachkomme der Vorfahren“
Oliver|m|lateinisch|„Olivenbaum“, Herkunft umstritten
Oskar|m|irisch|„Hirschfreund“|irisch,retro
Oswald|m|altenglisch|„Gottes Macht“|retro
Otto|m|germanisch|„Besitz, Reichtum“|retro
Pascal|m|französisch|„der zu Ostern Geborene“
Patrick|m|lateinisch|„Adliger, Patrizier“|heilig,irisch
Paul|m|lateinisch|„der Kleine, Bescheidene“|heilig
Peter|m|griechisch|„Fels“|heilig
Philipp|m|griechisch|„Pferdefreund“|heilig
Piet|m|niederländisch|Form von Peter, „Fels“
Quentin|m|lateinisch|„der Fünfte“
Quirin|m|lateinisch|„Speerträger“|bay,heilig
Rafael|m|hebräisch|„Gott heilt“|heilig
Rainer|m|germanisch|„Ratgeber im Heer“|retro
Raphael|m|hebräisch|„Gott heilt“|heilig
Reinhard|m|germanisch|„kühn im Rat“
Richard|m|germanisch|„mächtiger Herrscher“
Robin|u|englisch|Kurzform von Robert, „glänzender Ruhm“
Roman|m|lateinisch|„der Römer“
Ruben|m|hebräisch|„Seht, ein Sohn!“
Rudolf|m|germanisch|„ruhmreicher Wolf“|retro
Samuel|m|hebräisch|„Gott hat erhört“
Santiago|m|spanisch|von „Sant Iago“, Heiliger Jakob
Sebastian|m|griechisch|„der Verehrte, Erhabene“|bay,heilig
Silas|m|lateinisch|„Waldbewohner“
Simon|m|hebräisch|„Gott hat gehört“|bay,heilig
Sören|m|dänisch|Form von Severin, „der Strenge“
Stefan|m|griechisch|„der Gekrönte“|bay,heilig
Sven|m|altnordisch|„Junge, Krieger“
Theo|m|griechisch|„Gott“, Kurzform von Theodor („Geschenk Gottes“)
Thilo|m|deutsch|Kurzform von Dietrich, „Herrscher des Volkes“
Thomas|m|aramäisch|„Zwilling“|bay,heilig
Till|m|deutsch|Kurzform von Dietrich, „Herrscher des Volkes“
Tilo|m|deutsch|Kurzform von Dietrich, „Herrscher des Volkes“
Tim|m|griechisch|Kurzform von Timotheus, „Gott ehrend“
Timo|m|finnisch|Form von Timotheus, „Gott ehrend“
Titus|m|lateinisch|römischer Vorname, Bedeutung unsicher|heilig
Tobias|m|hebräisch|„Gott ist gut“|heilig
Tom|m|aramäisch|Kurzform von Thomas, „Zwilling“
Torben|m|dänisch|„Thors Bär“
Tristan|m|keltisch|Herkunft umstritten, evtl. „Lärm, Tumult“
Ulrich|m|germanisch|„Erbe“ + „Herrscher“|bay,schwaeb,heilig
Valentin|m|lateinisch|„der Gesunde, Starke“|bay,heilig
Victor|m|lateinisch|„der Sieger“
Vincent|m|lateinisch|„der Siegende“|heilig
Walter|m|germanisch|„Herrscher des Heeres“|retro
Werner|m|germanisch|„Heer“ + „Wächter“|retro
Wilhelm|m|germanisch|„Wille“ + „Helm, Schutz“|schwaeb,heilig,retro
Xaver|m|baskisch|„neues Haus“|bay
Yannick|m|bretonisch|Form von Jean, „Gott ist gnädig“
Yusuf|m|arabisch|Form von Josef, „Gott fügt hinzu“
Zacharias|m|hebräisch|„Jahwe hat sich erinnert“|heilig
Alex|u|griechisch|Kurzform von Alexander/Alexandra, „Beschützer“
Ari|u|hebräisch|„Löwe“
Cato|u|lateinisch|„der Kluge, Scharfsinnige“
Charlie|u|englisch|Form von Charles, „freier Mann“
Eden|u|hebräisch|„Wonne, Garten“
Eli|u|hebräisch|„Höhe, der Erhabene“
Elia|u|italienisch|Form von Elias
Fin|u|irisch|Kurzform von Finn, „der Helle“|irisch
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
Quinn|u|irisch|u. a. „der Weise“|irisch
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
Toni|u|lateinisch|Kurzform von Anton/Antonia|bay
Yuki|u|japanisch|„Schnee“ oder „Glück“
Zeno|u|griechisch|„der von Zeus Stammende“
Alois|m|lateinisch|Form von Aloisius, latinisierte Form von Ludwig|bay,heilig,retro
Berthold|m|germanisch|„glänzender Herrscher“|schwaeb,retro
Burkhard|m|germanisch|„Burg“ + „stark“|schwaeb,retro
Eberhard|m|germanisch|„Eber“ + „stark“|schwaeb,retro
Emmeram|m|germanisch|Bayerischer Heiliger, Bedeutung unsicher|bay,heilig
Franz|m|lateinisch|„der Franke“, Kurzform von Franziskus|bay,heilig,retro
Fridolin|m|germanisch|„Friede“ + „Schutz“|schwaeb,heilig,retro
Girgl|m|bairisch|Mundartform von Georg, „Landmann“|bay
Gerhard|m|germanisch|„Speer“ + „stark“|schwaeb,retro
Gotthilf|m|deutsch|„Gott hilf“, pietistischer Name|schwaeb,retro
Gotthold|m|deutsch|„Gott“ + „hold“|schwaeb,retro
Gottfried|m|germanisch|„Gottes Friede“|schwaeb,retro
Gottlieb|m|deutsch|„Gott lieb(end)“, pietistischer Name|schwaeb,retro
Hartmut|m|germanisch|„hart“ + „Mut“|schwaeb
Helmut|m|germanisch|„Helm“ + „Mut“|schwaeb,retro
Hias|m|bairisch|Mundartform von Matthias, „Geschenk Jahwes“|bay
Hubertus|m|germanisch|„glänzend im Geist“|bay,heilig
Ignaz|m|lateinisch|Form von Ignatius, „der Feurige“ (Herkunft umstritten)|bay,heilig
Immanuel|m|hebräisch|„Gott ist mit uns“|schwaeb
Jörg|m|deutsch|Form von Georg, „Landmann“|schwaeb
Kajetan|m|lateinisch|„aus Gaeta“|bay,heilig
Korbinian|m|lateinisch|von corvus, „Rabe“|bay,heilig
Kuno|m|germanisch|„kühn“|schwaeb,retro
Leonhard|m|germanisch|„stark wie ein Löwe“|bay,heilig
Michel|m|schwäbisch|Form von Michael, „Wer ist wie Gott?“|schwaeb
Michl|m|bairisch|Mundartform von Michael, „Wer ist wie Gott?“|bay
Reinhold|m|germanisch|„im Rat herrschend“|schwaeb,retro
Albrecht|m|germanisch|„durch Adel glänzend“|schwaeb
Rupert|m|germanisch|„ruhmglänzend“, Form von Ruprecht|bay,heilig
Schorsch|m|schwäbisch|Mundartform von Georg, „Landmann“|schwaeb
Sepp|m|bairisch|Mundartform von Josef, „Gott fügt hinzu“|bay,retro
Siegfried|m|germanisch|„Sieg“ + „Friede“|schwaeb,retro
Tassilo|m|germanisch|bayerischer Herzog, Bedeutung unsicher|bay
Theophil|m|griechisch|„Gottesfreund“|schwaeb,retro
Veit|m|lateinisch|Form von Vitus, „der Lebendige“|bay,heilig
Vitus|m|lateinisch|„der Lebendige“|bay,heilig
Wastl|m|bairisch|Mundartform von Sebastian, „der Verehrte“|bay
Wolfgang|m|germanisch|„Wolf“ + „Gang, Weg“|bay,heilig
Wolfram|m|germanisch|„Wolf“ + „Rabe“|schwaeb,retro
Avery|u|englisch|„Herrscher der Elfen“
Chris|u|griechisch|Kurzform von Christian/Christine
Dani|u|hebräisch|Kurzform von Daniel/Daniela
Dylan|u|walisisch|„Sohn des Meeres“
Ellis|u|englisch|Form von Elias, „Mein Gott ist Jahwe“
Emery|u|germanisch|„mächtiger Herrscher“, Form von Emmerich
Finley|u|gälisch|„blonder Krieger“|irisch
Jamie|u|englisch|Form von James/Jakob, „Gott schütze“
Jordan|u|hebräisch|„der Herabfließende“
Mika|u|hebräisch|Kurzform von Micha(el), „Wer ist wie Gott?“
Mio|u|mehrere|u. a. schwedisch „mein“
Morgan|u|walisisch|„am Meer geboren“
Nicki|u|griechisch|Kurzform von Nikolaus/Nicole, „Sieg des Volkes“
Nova|u|lateinisch|„neu“
Pat|u|lateinisch|Kurzform von Patrick/Patricia, „Adliger“
Phoenix|u|griechisch|„Feuervogel“, auch „purpurrot“
River|u|englisch|„Fluss“
Rory|u|gälisch|„roter König“|irisch
Sky|u|englisch|„Himmel“
Alexis|u|griechisch|„Beschützer, Verteidiger“
Kastulus|m|lateinisch|von castus, „der Reine, Keusche“; römischer Märtyrer, in Bayern verehrt|heilig,bay
Kastl|m|bairisch|Mundartform von Kastulus, „der Reine, Keusche“|heilig,bay
Ägidius|m|griechisch|„der Schildträger“|heilig,bay
Ambrosius|m|griechisch|„der Unsterbliche“|heilig
Andreas|m|griechisch|„der Mannhafte, Tapfere“|heilig
Athanasius|m|griechisch|„der Unsterbliche“|heilig
Augustinus|m|lateinisch|„der Erhabene“, Ableitung von Augustus|heilig
Barnabas|m|aramäisch|„Sohn des Trostes“|heilig
Bartholomäus|m|aramäisch|„Sohn des Tolmai“|heilig,bay
Basilius|m|griechisch|„der Königliche“|heilig
Blasius|m|lateinisch|„der Stammelnde“|heilig,bay
Bonifatius|m|lateinisch|„der Wohltäter“|heilig
Cyrill|m|griechisch|„der Herrschaftliche“|heilig
Cyriak|m|griechisch|„der zum Herrn Gehörende“|heilig
Dionys|m|griechisch|„Diener des Dionysos“|heilig
Eligius|m|lateinisch|„der Auserwählte“|heilig
Erasmus|m|griechisch|„der Liebenswerte“|heilig
Eustachius|m|griechisch|„der Fruchtbare, Standhafte“ (umstritten)|heilig
Gallus|m|lateinisch|irischer Mönch, Gründer von St. Gallen; „der Gallier“ bzw. „Hahn“|heilig,irisch
Gotthard|m|germanisch|„Gott“ + „stark“|heilig
Hieronymus|m|griechisch|„der den heiligen Namen trägt“|heilig
Hilarius|m|lateinisch|„der Heitere“|heilig
Isidor|m|griechisch|„Geschenk der Isis“|heilig,bay
Januarius|m|lateinisch|„dem Gott Janus geweiht“|heilig
Jodok|m|bretonisch|„Kämpfer“|heilig
Kolumban|m|lateinisch|irischer Mönch, „die Taube“|heilig,irisch
Lambert|m|germanisch|„Land“ + „glänzend“|heilig
Laurentius|m|lateinisch|„der aus Laurentum“|heilig
Lazarus|m|hebräisch|„Gott hat geholfen“|heilig
Ludger|m|germanisch|„Volk“ + „Speer“|heilig
Mauritius|m|lateinisch|„der Maure, der Dunkelhäutige“|heilig
Meinrad|m|germanisch|„Kraft“ + „Rat“|heilig
Modestus|m|lateinisch|„der Bescheidene“|heilig
Nepomuk|m|tschechisch|Beiname nach dem Ort Pomuk (Johannes von Nepomuk)|heilig
Nikodemus|m|griechisch|„Sieg des Volkes“|heilig
Norbert|m|germanisch|„Nord“ + „glänzend“|heilig
Odilo|m|germanisch|„Besitz, Erbe“|heilig
Pankratius|m|griechisch|„der alles Beherrschende“|heilig
Pirmin|m|unsicher|Herkunft unsicher; Gründer des Klosters Reichenau|heilig,schwaeb
Pius|m|lateinisch|„der Fromme“|heilig
Placidus|m|lateinisch|„der Sanfte“|heilig
Prokop|m|griechisch|„Fortschritt, Vorwärtskommen“|heilig
Remigius|m|lateinisch|„der Ruderer“|heilig
Servatius|m|lateinisch|„der Bewahrer, der Gerettete“|heilig
Severin|m|lateinisch|„der Strenge“|heilig
Sigismund|m|germanisch|„Sieg“ + „Schutz“|heilig
Silvester|m|lateinisch|„der Waldbewohner“|heilig
Sixtus|m|lateinisch|„der Sechste“ (umstritten)|heilig
Stanislaus|m|slawisch|„der Ruhm festigt“|heilig
Thaddäus|m|aramäisch|„der Mutige“ (umstritten)|heilig
Theodor|m|griechisch|„Geschenk Gottes“|heilig,retro
Urban|m|lateinisch|„der Städter, der Feine“|heilig
Valerian|m|lateinisch|„der Gesunde, Starke“|heilig
Vigilius|m|lateinisch|„der Wachsame“|heilig
Wendelin|m|germanisch|„der Wanderer“|heilig,schwaeb
Wenzel|m|slawisch|von Wenzeslaus, „größerer Ruhm“|heilig
Willibald|m|germanisch|„Wille“ + „kühn“|heilig,bay
Willibrord|m|germanisch|„Wille“ + „Brunnen“|heilig
Wunibald|m|unsicher|Herkunft unsicher; Mitbegründer des Klosters Heidenheim|heilig
Aidan|m|irisch|„kleines Feuer“|irisch
Brendan|m|irisch|Bedeutung umstritten, evtl. „Prinz“; Heiliger Brendan der Reisende|irisch,heilig
Brian|m|irisch|„der Hohe, Erhabene“ (umstritten)|irisch
Bran|m|irisch|„Rabe“|irisch
Cathal|m|irisch|„Kampf“ + „Herrscher“|irisch
Callum|m|gälisch|„Taube“, Form von Columba|irisch
Casey|u|irisch|„der Wachsame“|irisch
Cian|m|irisch|„der Beständige, der Alte“|irisch
Ciaran|m|irisch|„der kleine Dunkle“; Heiliger Ciarán|irisch,heilig
Cillian|m|irisch|Form von Kilian, „Mönch, Kirchenmann“|irisch,heilig
Colm|m|irisch|„Taube“; Heiliger Colm (Columba)|irisch,heilig
Conall|m|irisch|„starker Wolf“|irisch
Connor|m|irisch|„Freund der Jagdhunde“|irisch
Cormac|m|irisch|Bedeutung umstritten|irisch
Darragh|m|irisch|„Eiche“|irisch
Declan|m|irisch|Bedeutung unsicher; Heiliger Declan von Ardmore|irisch,heilig
Dermot|m|irisch|„der Neidlose“ (umstritten)|irisch
Diarmuid|m|irisch|„der Neidlose“ (umstritten)|irisch
Desmond|m|irisch|„Mann aus Süd-Munster“|irisch
Donal|m|irisch|„Herrscher der Welt“|irisch
Eamon|m|irisch|Form von Edmund, „Reichtum“ + „Schutz“|irisch
Eoin|m|irisch|Form von Johannes, „Gott ist gnädig“|irisch
Fergus|m|irisch|„Mann“ + „Kraft“|irisch
Fintan|m|irisch|von fionn, „weiß, hell“ (umstritten)|irisch,heilig
Finnian|m|irisch|von fionn, „hell, weiß“; Heiliger Finnian|irisch,heilig
Kevin|m|irisch|„der Liebenswerte, Edle“; Heiliger Kevin|irisch,heilig
Kieran|m|irisch|„der kleine Dunkle“|irisch,heilig
Lorcan|m|irisch|„der kleine Wilde“ (umstritten)|irisch
Malachy|m|irisch|„Bote Gottes“|irisch,heilig
Mannix|m|irisch|„Mönch“|irisch
Niall|m|irisch|Bedeutung umstritten, evtl. „Champion“ oder „Wolke“|irisch
Nolan|m|irisch|„Sohn des Kämpfers“ (umstritten)|irisch
Oisin|m|irisch|„kleiner Hirsch“|irisch
Padraig|m|irisch|Form von Patrick, „Adliger“|irisch,heilig
Phelan|m|irisch|„Wolf“|irisch
Riley|u|irisch|„mutig“ (umstritten)|irisch
Ronan|m|irisch|„kleiner Seehund“|irisch
Ruairi|m|irisch|„roter König“|irisch
Seamus|m|irisch|Form von James, „Gott schütze“|irisch
Sean|m|irisch|Form von Johannes, „Gott ist gnädig“|irisch
Shane|m|irisch|Form von Sean, „Gott ist gnädig“|irisch
Tadhg|m|irisch|„Dichter, Philosoph“ (umstritten)|irisch
Tiernan|m|irisch|„Herr, Anführer“|irisch
Armin|m|germanisch|Form von Hermann, „Heeresmann“
Arnold|m|germanisch|„Adler“ + „walten, herrschen“|retro
Bernd|m|germanisch|Kurzform von Bernhard, „Bär“ + „stark“|retro
Carsten|m|niederdeutsch|Form von Christian, „der Christ“
Claas|m|niederdeutsch|Kurzform von Nikolaus, „Sieg des Volkes“
Dirk|m|niederländisch|Kurzform von Dietrich, „Herrscher des Volkes“
Eike|u|germanisch|Kurzform von Eckehard, „Schwertspitze“ + „stark“
Elmar|m|germanisch|„edel“ + „berühmt“|retro
Emmerich|m|germanisch|„mächtiger Herrscher“|retro
Engelbert|m|germanisch|„Angeln“ (Volk) + „glänzend“|retro
Erwin|m|germanisch|„Heer“ + „Freund“|retro
Falk|m|germanisch|„Falke“
Frank|m|germanisch|„der Franke“, auch „der Freie“
Frieder|m|deutsch|Kurzform von Friedrich|retro
Gernot|m|germanisch|„Speer“ + „Not, Kampf“|retro
Gunnar|m|altnordisch|„Kampf“ + „Krieger“
Gunther|m|germanisch|„Kampf“ + „Heer“|retro
Hagen|m|germanisch|„Einfriedung“; Gestalt im Nibelungenlied
Hendrik|m|niederländisch|Form von Heinrich
Holger|m|altnordisch|„Insel“ + „Speer“
Ingo|m|germanisch|nach dem Gott Ingwaz
Ivo|m|germanisch|„Eibe“
Jannik|m|niederdeutsch|Form von Johannes, „Gott ist gnädig“
Jürgen|m|niederdeutsch|Form von Georg, „Landmann“|retro
Kjell|m|altnordisch|„Kessel“
Lennart|m|schwedisch|Form von Leonhard, „stark wie ein Löwe“
Leonard|m|germanisch|„stark wie ein Löwe“
Lutz|m|deutsch|Kurzform von Ludwig, „berühmter Kämpfer“|retro
Manuel|m|hebräisch|Kurzform von Emanuel, „Gott ist mit uns“
Marten|m|niederdeutsch|Form von Martin, „dem Mars geweiht“
Merten|m|deutsch|Form von Martin, „dem Mars geweiht“
Mirko|m|slawisch|„Frieden“ + „Ruhm“
Nick|m|englisch|Kurzform von Nikolaus, „Sieg des Volkes“
Nikolai|m|russisch|Form von Nikolaus, „Sieg des Volkes“
Norman|m|germanisch|„Nordmann“
Olaf|m|altnordisch|„Nachkomme der Vorfahren“
Orlando|m|italienisch|Form von Roland, „berühmtes Land“
Raimund|m|germanisch|„Rat“ + „Schutz“|retro
Ralf|m|germanisch|„Rat“ + „Wolf“
Rasmus|m|dänisch|Form von Erasmus, „liebenswert“
Roland|m|germanisch|„berühmt“ + „Land“|retro
Rolf|m|germanisch|Kurzform von Rudolf, „ruhmreicher Wolf“|retro
Rüdiger|m|germanisch|„Ruhm“ + „Speer“
Sigurd|m|altnordisch|„Sieg“ + „Hüter“
Sönke|m|friesisch|„Sohn“
Thore|m|altnordisch|nach dem Gott Thor, „Donner“
Tjark|m|friesisch|„Herrscher des Volkes“
Torsten|m|altnordisch|„Thors Stein“
Udo|m|germanisch|„Besitz, Erbe“|retro
Uwe|m|friesisch|Kurzform von Ove, „Besitz“ (umstritten)|retro
Volker|m|germanisch|„Volk“ + „Heer“
Waldemar|m|slawisch|„Herrschaft“ + „berühmt“
Wim|m|niederländisch|Kurzform von Wilhelm
Yves|m|französisch|„Eibe“
Alfons|m|germanisch|„edel“ + „bereit“|retro
Alwin|m|germanisch|„Elf“ + „Freund“
Arvid|m|altnordisch|„Adler“ + „Baum“
Bendix|m|niederdeutsch|Form von Benedikt, „der Gesegnete“
Benjamin|m|hebräisch|„Sohn der rechten Hand“, „Glückssohn“
Bodo|m|germanisch|„Bote, Gebieter“
Dagobert|m|germanisch|„Tag“ + „glänzend“
Detlef|m|niederdeutsch|„Volk“ + „Erbe“|retro
Diether|m|germanisch|„Volk“ + „Heer“
Dietmar|m|germanisch|„Volk“ + „berühmt“
Dorian|m|griechisch|„der Dorer“
Edgar|m|altenglisch|„Besitz“ + „Speer“
Edmund|m|altenglisch|„Besitz“ + „Schutz“
Egon|m|germanisch|„Schwert(spitze)“|retro
Ethan|m|hebräisch|„fest, beständig“
Fabio|m|italienisch|Form von Fabian
Gerd|m|germanisch|Kurzform von Gerhard, „Speer“ + „stark“
Gideon|m|hebräisch|„der Fäller, Kämpfer“
Hannibal|m|punisch|„Gnade des Baal“
Harry|m|englisch|Form von Henry, „Herrscher des Hauses“
Heiko|m|friesisch|Kurzform von Heinrich
Heino|m|friesisch|Kurzform von Heinrich
Helge|m|altnordisch|„heilig“
Hinrich|m|niederdeutsch|Form von Heinrich
Hjalmar|m|altnordisch|„Helm“ + „Krieger“
Jascha|m|russisch|Form von Jakob, „Gott schütze“
Jesper|m|dänisch|Form von Kaspar, „Schatzmeister“
Jörn|m|niederdeutsch|Form von Georg, „Landmann“
Julius|m|lateinisch|„aus dem Geschlecht der Julier“
Marko|m|slawisch|Form von Markus, „dem Mars geweiht“
Mikael|m|skandinavisch|Form von Michael, „Wer ist wie Gott?“
Nicolas|m|französisch|Form von Nikolaus, „Sieg des Volkes“
Orest|m|griechisch|„der Bergbewohner“
Pablo|m|spanisch|Form von Paul, „der Kleine“
Pedro|m|spanisch|Form von Peter, „Fels“
Pepe|m|spanisch|Kurzform von José, „Gott fügt hinzu“
Pierre|m|französisch|Form von Peter, „Fels“
Sandro|m|italienisch|Kurzform von Alessandro, „Beschützer der Männer“
Saul|m|hebräisch|„der Erbetene“
Sigmund|m|germanisch|„Sieg“ + „Schutz“
Silvio|m|italienisch|„der Waldbewohner“
Tilman|m|germanisch|„Volk“ + „Mann“
Timon|m|griechisch|„Ehre“
Ulf|m|altnordisch|„Wolf“
Vinzenz|m|lateinisch|„der Siegende“
Wendel|m|germanisch|„der Wandale“, Kurzform von Wendelin
Wiegand|m|germanisch|„Kämpfer“
Wolf|m|germanisch|„Wolf“
Alessandro|m|italienisch|Form von Alexander, „Beschützer der Männer“
Antonio|m|italienisch|Form von Anton
Giovanni|m|italienisch|Form von Johannes, „Gott ist gnädig“
Lorenzo|m|italienisch|Form von Lorenz, „der Lorbeerbekränzte“
Luigi|m|italienisch|Form von Ludwig, „berühmter Kämpfer“
Marco|m|italienisch|Form von Markus, „dem Mars geweiht“
Alejandro|m|spanisch|Form von Alexander, „Beschützer der Männer“
Carlos|m|spanisch|Form von Karl, „freier Mann“
Diego|m|spanisch|Form von Jakob, Herkunft umstritten
Javier|m|spanisch|baskisch, „neues Haus“; Form von Xaver
Juan|m|spanisch|Form von Johannes, „Gott ist gnädig“
Luis|m|spanisch|Form von Ludwig, „berühmter Kämpfer“
Miguel|m|spanisch|Form von Michael, „Wer ist wie Gott?“
Jean|m|französisch|Form von Johannes, „Gott ist gnädig“
Jacques|m|französisch|Form von Jakob, „Gott schütze“
Henri|m|französisch|Form von Heinrich, „Herrscher des Hauses“
Antoine|m|französisch|Form von Anton
Anders|m|skandinavisch|Form von Andreas, „der Mannhafte“
Mikkel|m|dänisch|Form von Michael, „Wer ist wie Gott?“
Joakim|m|skandinavisch|Form von Joachim, „Gott richtet auf“
Sander|m|niederländisch|Kurzform von Alexander, „Beschützer der Männer“
Eliot|u|hebräisch|Form von Elias, „Mein Gott ist Jahwe“
Lee|u|englisch|„Wiese, Lichtung“
Frankie|u|englisch|Kurzform von Frank/Francis, „der Franke“
Remi|u|französisch|„Ruderer“
Kay|u|keltisch|Gestalt der Artussage, Herkunft umstritten
Sami|u|hebräisch|Kurzform von Samuel, „Gott hat erhört“
Loisl|m|bairisch|Mundartform von Alois, Form von Aloisius (Ludwig)|bay
Sola|u|mehrere|Herkunft vielfältig, u. a. Yoruba „Ehre, Wohlstand“; lateinisch „allein“
Willi|m|deutsch|Kurzform von Wilhelm, „Wille“ + „Helm, Schutz“|retro
Tjorven|u|schwedisch|Figur aus Astrid Lindgrens „Wir Kinder auf Saltkrokan“, Herkunft unsicher
Karli|u|deutsch|Koseform von Karl, „freier Mann“
Anouk|u|niederländisch|Koseform von Anna, „die Begnadete“
Loui|m|englisch|Form von Louis, „berühmter Kämpfer“
Louie|m|englisch|Form von Louis, „berühmter Kämpfer“
Maris|u|lateinisch|„des Meeres“; in Lettland männlicher Vorname
Malou|u|französisch|Kurzform von Marie-Louise
Tino|m|italienisch|Kurzform, z. B. von Valentino
Tadeo|m|spanisch|Form von Thaddäus, „der Mutige“ (umstritten)
Lumi|u|finnisch|„Schnee“
Albie|m|englisch|Kurzform von Albert, „durch Adel glänzend“
Alfie|m|englisch|Kurzform von Alfred, „Ratgeber der Elfen“
Lenni|u|deutsch|Kurzform von Leonard/Leonie, „stark wie ein Löwe“
Lino|m|italienisch|Kurzform, u. a. von Marcellino; auch Form von Linus
Liv|u|skandinavisch|„Leben“
Liljan|u|schwedisch|„die Lilie“
Alvi|m|nordisch|Kurzform von Alvin/Alwin, „Elf“ + „Freund“ (umstritten)
Tao|u|chinesisch|„der Weg“
Tio|m|unsicher|Herkunft unsicher; spanisch „Onkel“
Heinz|m|deutsch|Kurzform von Heinrich, „Herrscher des Hauses“|retro
Horst|m|germanisch|„Gestrüpp, Gehölz“, auch „Adlerhorst“|retro
Kurt|m|deutsch|Kurzform von Konrad, „kühner Ratgeber“|retro
Rudi|m|deutsch|Kurzform von Rudolf, „ruhmreicher Wolf“|retro
Manfred|m|germanisch|„Mann“ + „Friede“|retro
Hubert|m|germanisch|„Geist“ + „glänzend“|retro
Wilfried|m|germanisch|„Wille“ + „Friede“|retro
Winfried|m|germanisch|„Freund“ + „Friede“|retro
Dieter|m|deutsch|Kurzform von Dietrich, „Volk“ + „Heer“|retro
Günter|m|germanisch|„Kampf“ + „Heer“|retro
Eckhard|m|germanisch|„Schwert(spitze)“ + „stark“|retro
Hartwig|m|germanisch|„stark“ + „Kampf“|retro
Ottmar|m|germanisch|„Besitz“ + „berühmt“|retro
Theobald|m|germanisch|„Volk“ + „kühn“|retro
Traugott|m|deutsch|„auf Gott vertrauen“|retro
Erhard|m|germanisch|„Ehre“ + „stark“|retro
Arno|m|germanisch|Kurzform von Arnold, „Adler“|retro
Gerold|m|germanisch|„Speer“ + „Herrschaft“|retro
Leberecht|m|deutsch|„lebe recht“|retro
Alan|m|keltisch|Bedeutung umstritten, u. a. „der Schöne“|neu
Alvar|m|altnordisch|„Elf“ + „Krieger“|neu
Amos|m|hebräisch|„der von Gott Getragene“|neu
Aron|m|hebräisch|Form von Aaron, Bedeutung umstritten|neu
Aurelian|m|lateinisch|„der Goldene“|neu
Bastien|m|französisch|Form von Sebastian, „der Verehrte“|neu
Bennet|m|englisch|Form von Benedikt, „der Gesegnete“|neu
Bertil|m|schwedisch|Form von Berthold, „glänzender Herrscher“|neu
Caleb|m|hebräisch|„ganzherzig“ (umstritten)|neu
Camillo|m|italienisch|„der Opferdiener“|neu
Cassius|m|lateinisch|römischer Geschlechtername, Bedeutung umstritten|neu
Celestin|m|lateinisch|„der Himmlische“|neu
Cosimo|m|italienisch|Form von Kosmas, „Ordnung, Schmuck“|neu
Dante|m|italienisch|Kurzform von Durante, „der Standhafte“|neu
Dean|m|englisch|„Tal“ oder „Dekan“|neu
Eero|m|finnisch|Form von Erik, „ewiger Herrscher“|neu
Elian|u|mehrere|Form von Elias bzw. Julian, Herkunft vielfältig|neu
Emilio|m|spanisch|Form von Emil, „der Eifrige“|neu
Enno|m|friesisch|Kurzform friesischer Namen wie Eckehard|neu
Ezra|m|hebräisch|„Hilfe“|neu
Fabrizio|m|italienisch|„der Handwerker“|neu
Felipe|m|spanisch|Form von Philipp, „Pferdefreund“|neu
Finnegan|m|irisch|„kleiner Blonder“|irisch,neu
Flynn|m|irisch|„der Rötliche“|irisch,neu
Gian|m|rätoromanisch|Form von Johannes, „Gott ist gnädig“|neu
Hamza|m|arabisch|„der Starke“|neu
Haakon|m|altnordisch|„hoher Sohn“, hohe Abstammung|neu
Idris|m|arabisch|„der Eifrige“ (umstritten)|neu
Ilja|m|russisch|Form von Elias, „Mein Gott ist Jahwe“|neu
Jari|m|finnisch|Form von Georg, „Landmann“|neu
Joan|u|katalanisch|Form von Johannes, „Gott ist gnädig“|neu
Jorge|m|spanisch|Form von Georg, „Landmann“|neu
Kalle|m|schwedisch|Koseform von Karl, „freier Mann“|neu
Karim|m|arabisch|„der Großzügige“|neu
Laszlo|m|ungarisch|Form von Ladislaus, „Herrschaft“ + „Ruhm“|neu
Leandro|m|spanisch|Form von Leander, „Löwenmann“|neu
Lucian|m|lateinisch|„der Lichtvolle“|neu
Lucas|m|englisch|Form von Lukas, „der Leuchtende“|neu
Marek|m|slawisch|Form von Markus, „dem Mars geweiht“|neu
Mattia|m|italienisch|Form von Matthias, „Geschenk Jahwes“|neu
Maxim|m|russisch|Form von Maximus, „der Größte“|neu
Melchior|m|hebräisch|„König des Lichts“ (umstritten)|neu
Milo|m|germanisch|„der Milde, Gnädige“ (umstritten)|neu
Nathan|m|hebräisch|„Er hat gegeben“|neu
Neo|u|griechisch|„neu“|neu
Nikita|m|russisch|„der Sieger“|neu
Oren|m|hebräisch|„Kiefer, Fichte“|neu
Pelle|m|schwedisch|Form von Peter, „Fels“|neu
Phil|m|englisch|Kurzform von Philipp, „Pferdefreund“|neu
Raoul|m|französisch|Form von Ralf, „Rat“ + „Wolf“|neu
Rufus|m|lateinisch|„der Rothaarige“|neu
Salomon|m|hebräisch|„der Friedliche“|neu
Sandor|m|ungarisch|Form von Alexander, „Beschützer der Männer“|neu
Santino|m|italienisch|„der kleine Heilige“|neu
Toby|m|englisch|Form von Tobias, „Gott ist gut“|neu
Tommi|m|deutsch|Koseform von Thomas, „Zwilling“|neu
Valentino|m|italienisch|Form von Valentin, „der Gesunde, Starke“|neu
Vito|m|italienisch|„der Lebendige“|neu
Elija|m|hebräisch|Form von Elias, „Mein Gott ist Jahwe“|neu
Jeremias|m|hebräisch|„Jahwe erhöht“|neu
Dimitri|m|griechisch|„dem Gott Demeter geweiht“|neu
Leonidas|m|griechisch|„Sohn des Löwen“|neu
Cyprian|m|lateinisch|„der aus Zypern“|neu
Augustin|m|lateinisch|Form von Augustinus, „der Erhabene“|neu
Lennert|m|niederländisch|Form von Leonhard, „stark wie ein Löwe“|neu
Mikail|m|arabisch|Form von Michael, „Wer ist wie Gott?“|neu
Joschua|m|hebräisch|Form von Joshua, „Gott ist Rettung“|neu
Matthäus|m|aramäisch|„Geschenk Jahwes“|neu
Noam|m|hebräisch|„Freundlichkeit, Lieblichkeit“|neu
Blake|u|englisch|altenglisch, „blass“ oder „dunkel“ (mehrdeutig)|neu
Brook|u|englisch|„Bach“|neu
Cameron|u|schottisch|gälisch, „krumme Nase“|neu
Chase|u|englisch|„Jagd, Jäger“|neu
Dakota|u|Sioux|„Freund, Verbündeter“|neu
Drew|u|englisch|Kurzform von Andrew, „der Mannhafte“|neu
Emerson|u|englisch|„Sohn des Emery“|neu
Hayden|u|englisch|„Heidetal“|neu
Kit|u|englisch|Kurzform von Christopher, „Christusträger“|neu
Lane|u|englisch|„Weg, Gasse“|neu
Logan|u|schottisch|„kleine Mulde“|neu
Mason|u|englisch|„Steinmetz“|neu
Nash|u|englisch|„an der Esche“|neu
Parker|u|englisch|„Parkwächter“|neu
Reese|u|walisisch|„Eifer, Begeisterung“|neu
Sawyer|u|englisch|„Holzsäger“|neu
Sidney|u|englisch|Herkunft umstritten, evtl. „breite Insel“|neu
Sol|u|lateinisch|„Sonne“|neu
Storm|u|englisch|„Sturm“|neu
Tyler|u|englisch|„Dachdecker“|neu
Wren|u|englisch|„Zaunkönig“|neu
Noor|u|arabisch|„Licht“|neu
Sage|u|englisch|„Salbei“, auch „der Weise“|neu
Yuri|u|russisch|russisch Form von Georg, japanisch u. a. „Lilie“|neu
Lior|u|hebräisch|„mein Licht“|neu
Ori|u|hebräisch|„mein Licht“|neu
Tal|u|hebräisch|„Tau“|neu
Aurelio|m|italienisch|Form von Aurel, „der Goldene“|neu
Silvan|m|lateinisch|Form von Silvanus, „der Waldbewohner“|neu
Henner|m|niederdeutsch|Form von Heinrich, „Herrscher des Hauses“|neu
Kjeld|m|dänisch|„Kessel“|neu
`;

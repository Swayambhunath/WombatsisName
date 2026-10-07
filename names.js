/* Namensdatenbank. Beliebig bearbeitbar: Namen hinzufügen, löschen, umsortieren.
   Format pro Zeile:  Name | Typ (m = Junge, u = Unisex) | Herkunft | Bedeutung | Tags (optional: bay = bayerisch, schwaeb = schwäbisch)
   Stimmen werden über den Namenstext gespeichert, die Liste darf sich also jederzeit ändern. */
const NAMEDATA = `
Aaron|m|hebräisch|umstritten, u. a. „Berg der Stärke“
Abel|m|hebräisch|„Hauch, Atem“
Adam|m|hebräisch|„Mensch, der von der Erde Genommene“
Adrian|m|lateinisch|„der aus Hadria (Stadt in Italien)“|heilig
Albert|m|germanisch|„durch Adel glänzend“|heilig
Alexander|m|griechisch|„Beschützer der Männer“
Alfred|m|altenglisch|„Ratgeber der Elfen“
Amir|m|arabisch|„Fürst, Befehlshaber“
Ansgar|m|germanisch|„Speer der Götter (Asen)“
Anselm|m|germanisch|„der von den Göttern Behelmte“, Schutz Gottes
Anton|m|lateinisch|römischer Geschlechtername, Bedeutung unsicher|bay,heilig
Arne|m|skandinavisch|„Adler“
Arthur|m|keltisch|Herkunft umstritten, evtl. „Bär“
Aurel|m|lateinisch|„der Goldene“
August|m|lateinisch|„der Erhabene, der Heilige“
Axel|m|skandinavisch|Form von Absalom, „Vater des Friedens“
Balthasar|m|babylonisch|„Gott schütze den König“|bay,heilig
Bastian|m|griechisch|Kurzform von Sebastian|bay,heilig
Bela|m|ungarisch|„weiß, hell“
Ben|m|hebräisch|„Sohn“, Kurzform von Benjamin
Benedikt|m|lateinisch|„der Gesegnete“|bay,heilig
Benno|m|germanisch|Kurzform von Bernhard, „stark wie ein Bär“|bay,heilig
Bernhard|m|germanisch|„Bär“ + „stark“|schwaeb,heilig
Bertram|m|germanisch|„glänzender Rabe“
Bjarne|m|dänisch|„Bär“
Björn|m|altnordisch|„Bär“
Boris|m|slawisch|„Kampf, Kämpfer“
Bruno|m|germanisch|„braun“ oder „Brünne (Rüstung)“
Carl|m|germanisch|„freier Mann“, Form von Karl
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
Dietrich|m|germanisch|„Herrscher des Volkes“
Dominik|m|lateinisch|„dem Herrn gehörend“|heilig
Eduard|m|altenglisch|„Hüter des Reichtums“
Elio|m|italienisch|von griechisch Helios, „Sonne“
Elias|m|hebräisch|„Mein Gott ist Jahwe“
Emanuel|m|hebräisch|„Gott ist mit uns“
Emil|m|lateinisch|„der Eifrige, Nacheifernde“
Emilian|m|lateinisch|Ableitung von Emil, „der Eifrige“
Enzo|m|italienisch|Kurzform von Lorenzo bzw. Heinz, „Herrscher des Hauses“
Erik|m|altnordisch|„ewiger Herrscher“
Ernst|m|germanisch|„Ernst, Kampf, Beständigkeit“|schwaeb
Eugen|m|griechisch|„der Wohlgeborene, Edle“|schwaeb
Ewald|m|germanisch|„der nach dem Gesetz Herrschende“
Fabian|m|lateinisch|„aus dem Geschlecht der Fabier“|heilig
Felix|m|lateinisch|„der Glückliche“|heilig
Ferdinand|m|germanisch|„kühner Reisender“
Fiete|m|plattdeutsch|Kurzform von Friedrich
Finn|m|irisch|„der Blonde, der Weiße“|irisch
Florian|m|lateinisch|„der Blühende“|bay,heilig
Friedrich|m|germanisch|„Herrscher des Friedens“|schwaeb
Fritz|m|deutsch|Kurzform von Friedrich|schwaeb
Gabriel|m|hebräisch|„Gott ist meine Stärke“|heilig
Georg|m|griechisch|„Landmann, Bauer“|bay,heilig
Gerrit|m|niederländisch|Form von Gerhard, „Speer“ + „stark“
Gregor|m|griechisch|„der Wachsame“|bay,heilig
Gustav|m|schwedisch|„Stab der Goten“, „Kampfstab“
Hannes|m|deutsch|Kurzform von Johannes|schwaeb
Hans|m|deutsch|Kurzform von Johannes
Harald|m|altnordisch|„Herrscher des Heeres“
Heinrich|m|germanisch|„Herrscher des Hauses“
Henning|m|niederdeutsch|Kurzform von Heinrich bzw. Johannes
Henrik|m|skandinavisch|Form von Heinrich
Henry|m|englisch|Form von Heinrich, „Herrscher des Hauses“
Herbert|m|germanisch|„glänzendes Heer“
Hermann|m|germanisch|„Heer“ + „Mann“|schwaeb
Hugo|m|germanisch|„Geist, Verstand“
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
Josef|m|hebräisch|„Gott fügt hinzu“|bay,heilig
Joshua|m|hebräisch|„Gott ist Rettung“
Jost|m|bretonisch|von Jodokus, „Kämpfer“|heilig
Julian|m|lateinisch|„aus dem Geschlecht der Julier“|heilig
Justus|m|lateinisch|„der Gerechte“|heilig
Kaspar|m|persisch|„Schatzmeister“|bay,heilig
Karl|m|germanisch|„freier Mann“|schwaeb
Kilian|m|irisch|„Mönch, Kirchenmann“|bay,heilig,irisch
Klaus|m|deutsch|Kurzform von Nikolaus
Knut|m|altnordisch|„Knoten“
Konrad|m|germanisch|„kühner Ratgeber“|bay,schwaeb,heilig
Lars|m|skandinavisch|Form von Laurentius
Lasse|m|skandinavisch|Kurzform von Lars/Laurentius
Laurin|m|lateinisch|„der Lorbeer“, „aus Laurentum“
Leander|m|griechisch|„Löwenmann“
Lennard|m|germanisch|Form von Leonhard, „stark wie ein Löwe“
Lenz|m|deutsch|alt für „Frühling“|bay
Leo|m|lateinisch|„Löwe“
Leon|m|griechisch|„Löwe“
Leopold|m|germanisch|„kühner Mann des Volkes“|heilig
Levi|m|hebräisch|„der Anhängliche, Verbundene“
Liam|m|irisch|Kurzform von William, „Willensstarker Beschützer“|irisch
Linus|m|griechisch|mythischer Sänger, Bedeutung unsicher
Lorenz|m|lateinisch|„der aus Laurentum“, „der Lorbeerbekränzte“|bay,heilig
Lothar|m|germanisch|„berühmter Krieger“
Louis|m|französisch|Form von Ludwig, „berühmter Kämpfer“
Luan|m|albanisch|„Löwe“
Luca|m|italienisch|Form von Lukas
Ludwig|m|germanisch|„berühmter Kämpfer“|bay
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
Oskar|m|irisch|„Hirschfreund“|irisch
Oswald|m|altenglisch|„Gottes Macht“
Otto|m|germanisch|„Besitz, Reichtum“
Pascal|m|französisch|„der zu Ostern Geborene“
Patrick|m|lateinisch|„Adliger, Patrizier“|heilig,irisch
Paul|m|lateinisch|„der Kleine, Bescheidene“|heilig
Peter|m|griechisch|„Fels“|heilig
Philipp|m|griechisch|„Pferdefreund“|heilig
Piet|m|niederländisch|Form von Peter, „Fels“
Quentin|m|lateinisch|„der Fünfte“
Quirin|m|lateinisch|„Speerträger“|bay,heilig
Rafael|m|hebräisch|„Gott heilt“|heilig
Rainer|m|germanisch|„Ratgeber im Heer“
Raphael|m|hebräisch|„Gott heilt“|heilig
Reinhard|m|germanisch|„kühn im Rat“
Richard|m|germanisch|„mächtiger Herrscher“
Robin|u|englisch|Kurzform von Robert, „glänzender Ruhm“
Roman|m|lateinisch|„der Römer“
Ruben|m|hebräisch|„Seht, ein Sohn!“
Rudolf|m|germanisch|„ruhmreicher Wolf“
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
Walter|m|germanisch|„Herrscher des Heeres“
Werner|m|germanisch|„Heer“ + „Wächter“
Wilhelm|m|germanisch|„Wille“ + „Helm, Schutz“|schwaeb,heilig
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
Alois|m|lateinisch|Form von Aloisius, latinisierte Form von Ludwig|bay,heilig
Berthold|m|germanisch|„glänzender Herrscher“|schwaeb
Burkhard|m|germanisch|„Burg“ + „stark“|schwaeb
Eberhard|m|germanisch|„Eber“ + „stark“|schwaeb
Emmeram|m|germanisch|Bayerischer Heiliger, Bedeutung unsicher|bay,heilig
Franz|m|lateinisch|„der Franke“, Kurzform von Franziskus|bay,heilig
Fridolin|m|germanisch|„Friede“ + „Schutz“|schwaeb,heilig
Girgl|m|bairisch|Mundartform von Georg, „Landmann“|bay
Gerhard|m|germanisch|„Speer“ + „stark“|schwaeb
Gotthilf|m|deutsch|„Gott hilf“, pietistischer Name|schwaeb
Gotthold|m|deutsch|„Gott“ + „hold“|schwaeb
Gottfried|m|germanisch|„Gottes Friede“|schwaeb
Gottlieb|m|deutsch|„Gott lieb(end)“, pietistischer Name|schwaeb
Hartmut|m|germanisch|„hart“ + „Mut“|schwaeb
Helmut|m|germanisch|„Helm“ + „Mut“|schwaeb
Hias|m|bairisch|Mundartform von Matthias, „Geschenk Jahwes“|bay
Hubertus|m|germanisch|„glänzend im Geist“|bay,heilig
Ignaz|m|lateinisch|Form von Ignatius, „der Feurige“ (Herkunft umstritten)|bay,heilig
Immanuel|m|hebräisch|„Gott ist mit uns“|schwaeb
Jörg|m|deutsch|Form von Georg, „Landmann“|schwaeb
Kajetan|m|lateinisch|„aus Gaeta“|bay,heilig
Korbinian|m|lateinisch|von corvus, „Rabe“|bay,heilig
Kuno|m|germanisch|„kühn“|schwaeb
Leonhard|m|germanisch|„stark wie ein Löwe“|bay,heilig
Michel|m|schwäbisch|Form von Michael, „Wer ist wie Gott?“|schwaeb
Michl|m|bairisch|Mundartform von Michael, „Wer ist wie Gott?“|bay
Reinhold|m|germanisch|„im Rat herrschend“|schwaeb
Albrecht|m|germanisch|„durch Adel glänzend“|schwaeb
Rupert|m|germanisch|„ruhmglänzend“, Form von Ruprecht|bay,heilig
Schorsch|m|schwäbisch|Mundartform von Georg, „Landmann“|schwaeb
Sepp|m|bairisch|Mundartform von Josef, „Gott fügt hinzu“|bay
Siegfried|m|germanisch|„Sieg“ + „Friede“|schwaeb
Tassilo|m|germanisch|bayerischer Herzog, Bedeutung unsicher|bay
Theophil|m|griechisch|„Gottesfreund“|schwaeb
Veit|m|lateinisch|Form von Vitus, „der Lebendige“|bay,heilig
Vitus|m|lateinisch|„der Lebendige“|bay,heilig
Wastl|m|bairisch|Mundartform von Sebastian, „der Verehrte“|bay
Wolfgang|m|germanisch|„Wolf“ + „Gang, Weg“|bay,heilig
Wolfram|m|germanisch|„Wolf“ + „Rabe“|schwaeb
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
Theodor|m|griechisch|„Geschenk Gottes“|heilig
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
Arnold|m|germanisch|„Adler“ + „walten, herrschen“
Bernd|m|germanisch|Kurzform von Bernhard, „Bär“ + „stark“
Carsten|m|niederdeutsch|Form von Christian, „der Christ“
Claas|m|niederdeutsch|Kurzform von Nikolaus, „Sieg des Volkes“
Dirk|m|niederländisch|Kurzform von Dietrich, „Herrscher des Volkes“
Eike|u|germanisch|Kurzform von Eckehard, „Schwertspitze“ + „stark“
Elmar|m|germanisch|„edel“ + „berühmt“
Emmerich|m|germanisch|„mächtiger Herrscher“
Engelbert|m|germanisch|„Angeln“ (Volk) + „glänzend“
Erwin|m|germanisch|„Heer“ + „Freund“
Falk|m|germanisch|„Falke“
Frank|m|germanisch|„der Franke“, auch „der Freie“
Frieder|m|deutsch|Kurzform von Friedrich
Gernot|m|germanisch|„Speer“ + „Not, Kampf“
Gunnar|m|altnordisch|„Kampf“ + „Krieger“
Gunther|m|germanisch|„Kampf“ + „Heer“
Hagen|m|germanisch|„Einfriedung“; Gestalt im Nibelungenlied
Hendrik|m|niederländisch|Form von Heinrich
Holger|m|altnordisch|„Insel“ + „Speer“
Ingo|m|germanisch|nach dem Gott Ingwaz
Ivo|m|germanisch|„Eibe“
Jannik|m|niederdeutsch|Form von Johannes, „Gott ist gnädig“
Jürgen|m|niederdeutsch|Form von Georg, „Landmann“
Kjell|m|altnordisch|„Kessel“
Lennart|m|schwedisch|Form von Leonhard, „stark wie ein Löwe“
Leonard|m|germanisch|„stark wie ein Löwe“
Lutz|m|deutsch|Kurzform von Ludwig, „berühmter Kämpfer“
Manuel|m|hebräisch|Kurzform von Emanuel, „Gott ist mit uns“
Marten|m|niederdeutsch|Form von Martin, „dem Mars geweiht“
Merten|m|deutsch|Form von Martin, „dem Mars geweiht“
Mirko|m|slawisch|„Frieden“ + „Ruhm“
Nick|m|englisch|Kurzform von Nikolaus, „Sieg des Volkes“
Nikolai|m|russisch|Form von Nikolaus, „Sieg des Volkes“
Norman|m|germanisch|„Nordmann“
Olaf|m|altnordisch|„Nachkomme der Vorfahren“
Orlando|m|italienisch|Form von Roland, „berühmtes Land“
Raimund|m|germanisch|„Rat“ + „Schutz“
Ralf|m|germanisch|„Rat“ + „Wolf“
Rasmus|m|dänisch|Form von Erasmus, „liebenswert“
Roland|m|germanisch|„berühmt“ + „Land“
Rolf|m|germanisch|Kurzform von Rudolf, „ruhmreicher Wolf“
Rüdiger|m|germanisch|„Ruhm“ + „Speer“
Sigurd|m|altnordisch|„Sieg“ + „Hüter“
Sönke|m|friesisch|„Sohn“
Thore|m|altnordisch|nach dem Gott Thor, „Donner“
Tjark|m|friesisch|„Herrscher des Volkes“
Torsten|m|altnordisch|„Thors Stein“
Udo|m|germanisch|„Besitz, Erbe“
Uwe|m|friesisch|Kurzform von Ove, „Besitz“ (umstritten)
Volker|m|germanisch|„Volk“ + „Heer“
Waldemar|m|slawisch|„Herrschaft“ + „berühmt“
Wim|m|niederländisch|Kurzform von Wilhelm
Yves|m|französisch|„Eibe“
Alfons|m|germanisch|„edel“ + „bereit“
Alwin|m|germanisch|„Elf“ + „Freund“
Arvid|m|altnordisch|„Adler“ + „Baum“
Bendix|m|niederdeutsch|Form von Benedikt, „der Gesegnete“
Benjamin|m|hebräisch|„Sohn der rechten Hand“, „Glückssohn“
Bodo|m|germanisch|„Bote, Gebieter“
Dagobert|m|germanisch|„Tag“ + „glänzend“
Detlef|m|niederdeutsch|„Volk“ + „Erbe“
Diether|m|germanisch|„Volk“ + „Heer“
Dietmar|m|germanisch|„Volk“ + „berühmt“
Dorian|m|griechisch|„der Dorer“
Edgar|m|altenglisch|„Besitz“ + „Speer“
Edmund|m|altenglisch|„Besitz“ + „Schutz“
Egon|m|germanisch|„Schwert(spitze)“
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
`;

(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{"./src/locales/sq.json":function(module){module.exports=JSON.parse('{"404":{"main":"Kaloni te {link}, ose kërkoni për diçka të ngjashme që nga fusha më poshtë.","title":"Lënda që po kërkoni duket të jetë zhdukur."},"hero":{"disclaimer":{"license":"Licencë Creative Commons","content":"Krejt lënda {openverse} gjendet nën një {license}, ose është nën përkatësi publike."},"search":{"placeholder":"Kërkoni për lëndë"},"description":"Një bibliotekë e zgjeruar fotosh, figurash dhe audio të lira, që mund të përdoren lirisht.","subtitle":"Eksploroni më tepër se 700 milionë punë krijuese","aria":{"search-type":"lloj kërkimi","search":"kërkim"},"license-filter":{"label":"Dua diçka të cilën mund"}},"audio-track":{"close":"Zgjidhni lojtës audiosh","messages":{"err_unknown":"Ndodhi një gabim i papritur. Riprovoni pas pak minutash, ose njoftoni rastin, nëse problemi vazhdon.","err_unallowed":"Nuk lejohet riprodhimi.","loading":"Po ngarkohet…","err_unsupported":"Ky format audioje nuk mbulohet nga shfletuesi juaj.","err_decode":"S’u shkodua dot audio.","err_network":"Ndodhi një gabim rrjeti.","err_aborted":"Ndërpretë luajtjen."},"aria-label-interactive-seekable":"{title} - lojtës audio - shtypni tastin hapësirë që të luhet dhe ndalet luajtja e një paraparjeje të audios; përdorni tastet shigjetë majtas dhe djathtas që të shtyheni nëpër pjesë.","aria-label-interactive":"{title} - lojtës audio - shtypni tastin e hapësirës që të luhet apo pushohet një copëz nga audioja","aria-label":"{title} - Lojtës Audio","creator":"nga {creator}"},"pref-page":{"features":{"analytics":"Regjistro akte vetjake dhe parje faqesh."},"groups":{"analytics":{"desc":"Merrni pjesë në analiza anonime, për të përmirësuar punimin për përdoruesit.","title":"Statistika"}},"non-switchable":{"desc":"S’mund të ndryshoni gjendjen e këtyre veçorive.","title":"Veçori që s’ndryshohen"},"switchable":{"desc":"Këto veçori mund t’i aktivizoni ose çaktivizoni si doni dhe parapëlqimet tuaja do të ruhen në një <em>cookie</em>.","title":"Veçori të ndryshueshme"},"explanation":"Shfaqur ngaqë {feat-name} është {feat-state}","content-filtering":"Filtrim lënde","store-state":"Gjendje shitoreje","title":"Parapëlqime"},"header":{"home-link":"Kreu i {openverse}","content-settings-button":{"with-count":"Menu. {count} filtër i aplikuar|Menu. {count} filtra të aplikuar","simple":"Menu"},"back-button":"Shko mbrapsht","see-results":"Shihni përfundime","external-sources-nav-item":"Burime të Jashtme","filter-button":{"with-count":"{count} Filtër|{count} Filtra","simple":"Filtra"},"privacy-nav-item":"Privatësi","loading":"Po ngarkohet...","aria":{"search":"kërkim","sr-search":"buton kërkimi","menu":"menu","primary":"parësore"},"placeholder":"Kërko në krejt lëndën","api-nav-item":"API","licenses-nav-item":"Licencat","support-nav-item":"Përkrahnani","feedback-nav-item":"Përshtypje","search-guide-nav-item":"Udhërrëfyes Kërkimi","source-nav-item":"Burime","about-nav-item":"Historia Jonë","notification":{"okay":"OK","dismiss":"Hidhe tej","text":"{example_notification_text}"},"resources-tab":"Burime","about-tab":"Mbi"},"search-guide":{"combine":{"aria-labels":{"prefix":"simboli yll","or":"simboli shtyllë vertikale","fuzziness":"N spanjolle me theks përsipër","vertical-bar":"simboli i shtyllës vertikale","and":"simboli plus","not":"simboli minus","star":"simboli yll","close":"kllapë mbyllëse","open":"kllapë hapëse"},"precedence":"{symbol} nënkupton përparësi","title":"Ndërthurje termash","fuzziness":"{symbol} pas një fjale do të thotë largësi përpunimi (turbullirë)","prefix":"{symbol} në fund të një termi do të thotë një kërkesë me parashtesë","not":"{symbol} mohon një term të vetëm","or":"{symbol} përfaqëson veprimin OSE","and":"{symbol} përfaqëson veprimin DHE","description":"Nëse doni të ndërthurni terma, mund të përdorni operatorët vijues, për të kryer kërkime më të ndërlikuara"},"exact":{"aria-label":"“ ” Claude Monet","title":"Kërko për përputhje saktësisht","content":"Vendoseni brenda thonjëzash një fjalë apo një fjali. Për shembull, {link}.","claude-monet":"\\"Claude Monet\\""},"example":{"and":{"example":"qen+mace","aria-label":"qen plus mace","description":"Shembull: {link}{br} Me këtë do të kërkohet për figura të lidhura si me qentë, ashtu edhe me macet."},"or":{"example":"qen|mace","aria-label":"qen shtyllë vertikale mace","description":"Shembull: {link}{br} Me këtë do të kërkohet për figura të lidhura me qentë ose macet, por jo domosdoshmërisht për të dy tok."},"negate":{"example":"dog -pug","aria-label":"dog minus pug","description":"Mund të përdorni {operator}, për të përjashtuar nga përfundimet një term kërkimi.","content":"Shembull: {link}{br} Me këtë do të kërkohet për figura të lidhura me qentë, por s’do të përfshihen përfundime të lidhura me racën \'pug\'","operator-aria-label":"operatori minus (do të thotë JO)","operator-name":"operator (do të thotë JO)"},"prefix":{"example":"net*","aria-label":"net simboli asterisk","content":"Shembull: {link}{br} Me këtë do të kërkohet për figura që kanë përputhje me \'net\'. Kjo mund të sjellë \'network\', \'Netflix\', \'Netherlands\', etj.","operator-aria-label":"operatori yll (shenjë e gjithëpushtetshme)","operator-name":"operator (shenjë e gjithëpushtetshme)","description":"Mund të përdorni {operator-name} për të shenjuar një term parashtesë. Kjo do të sjellë si përfundim gjithçka pas *."},"precedence":{"example":"qen + (corgis | labrador)","aria-label":"qen plus hapje kllapash corgis shtyllë vertikale labrador mbyllje kllapash","description":"Mund të përdorni kllapa {highlight} për të përcaktuar radhën e përparësisë së termave, ose për të ndërthurur kërkime më të ndërlikuara.","content":"Shembull: {link}{br} Me këtë do të kërkohet për figura që kanë qen që është ose korgi, ose labrador."},"fuzziness":{"example":"theatre~1","aria-label":"theatre tilde 1","content":"Shembull: {link}{br} Me këtë do të kërkohet për figura që përmbajnë vargje afër termit \'theatre\' dhe që ndryshojnë me një shkronjë prej tij. Përfundimet mund të përfshijnë terma me shqiptim tjetër, bie fjala, \'theater\'.","link-text":"Largësi Përpunimesh Levenshtajn","description":"Mund të përdorni {highlight} për të specifikuar ca logjikë të turbullt për termin, sipas {link} — numri i ndryshimeve prej një shenje që i duhen bërë një vargu për ta bërë të njëjtë me një varg tjetër."}},"title":"Udhërrëfyes Sintakse {Openverse}","intro":"Kur kërkoni, mund të jepni simbole speciale ose fjalë te termi juaj i kërkimit, për t’i bërë përfundimet tuaja të kërkimit më të sakta."},"privacy":{"contact":{"chat":"Bisedë mbi Ndërtimin e WordPress-it","issue":"Çështje në GitHub","title":"Lidhuni Me Ne","content":"Çfarëdo pyetjeje mbi {openverse} dhe privatësinë mund të dërgohet te {email}, të parashtrohet si një {issue}, ose të diskutohet me bashkësinë tonë te kanali #openverse i {chat}."},"cookies":{"title":"<em>Cookies</em>","content":"{openverse} përdoro “cookies” për të depozituar hollësi rreth parapëlqimeve të vizitorit dhe hollësi rreth shfletuesve të tyre. Këto hollësi i përdorim për të përmirësuar punën e përdoruesve me sajtin. Këto konsiderohen “Të nevojshme”, ose “Cookies thjesht të nevojshme” dhe mund t’i çaktivizoni duke ndryshuar rregullimet e shfletuesit tuaj, por kjo mund të prekë funksionimin e {openverse}."},"intro":{"link":"rregulla privatësie për krejt sajtet WordPress.org","content":"Projekti {openverse} përpiqet ta bëjë përparësi privatësinë dhe sigurinë e përdoruesve tanë. {openverse} pajtohet me {link}. Ju lutemi, shihni atë dokument për një përshkrim të plotë se si përdor dhe mbron {openverse} çfarëdo informacioni që na jepni."},"title":"Privatësi"},"report":{"image-details":"Shihni hollësi figure"},"search-type":{"select-label":"Përzgjidhni lloj lënde: {type}","additional":"S’afërmi","model-3d":"Modele 3D","status-beta":"Beta","heading":"Lloj lënde","label":"Lloj lënde për t’u kërkuar","all":"Krejt lënda","see-audio":"Shihni krejt audion","see-image":"Shihni krejt figurat","video":"Video","audio":"Audio","image":"Figura"},"footer":{"wordpress-affiliation":"Pjesë e projektit {wordpress}","wip":"🚧"},"modal":{"aria-close":"Mbylle dritaren modale","close-named":"Mbylle {name}","close":"Mbylle"},"browse-page":{"search-form":{"clear":"Spastroje","model-3d":"Modele 3D","button":"Kërkim","all":"lëndë","video":"video","audio":"audio","image":"figura","placeholder":"Kërko te krejt {type}","collection-placeholder":"Kërko në këtë koleksion"},"loading":"Po ngarkohet…","license-description":{"sampling-plus":"Lejohen shembuj, përzierje, shndërrime krijuese.","pd":"Kësaj vepre i është vënë shenjë si nën përkatësi publike.","zero":"Kësaj vepre i është vënë shenjë si kushtuar përkatësisë publike.","by":"Jepini hakën krijuesit.","title":"Licencë CC","sa":"Përshtatjet i ndani me të tjerë sipas të njëjtave kushte.","nd":"Nuk lejohen të rrjedhur ose përshtatje.","nc":"Vetëm përdorime jokomerciale."},"search-rating":{"content":"A kanë vlerë këto përfundime kërkimi?","feedback-thanks":"Faleminderit për përshtypjet tuaja!","no":"Jo","yes":"Po"},"aria":{"creator":"kërkoni sipas krijuesi","license-explanation":"shpjegim licence","search":"kërko","close":"mbylle","relevance":{"no":"përfundime me kuptim? përgjigjuni: jo","yes":"përfundime me kuptim? përgjigjuni: po"},"remove-filter":"hiqe filtrin","scroll":"rrëshqit sipër në krye"},"all-result-count":"{localeCount} përfundim|{localeCount} përfundime","all-no-results":"Pa përfundime","fetching-error":"Gabim në sjelljen e  {type}:","load":"Ngarko më tepër përfundime","all-result-count-more":"Mbi {localeCount} përfundim|Mbi {localeCount} përfundime"},"filter-list":{"clear-numbered":"Spastroni filtra ({number})","filter-by":"Filtroji sipas","category-aria":"filtron listën për kategorinër {categoryName}","show":"Shfaq përfundimet","clear":"Spastroji filtrat","hide":"Fshihi filtrat"},"recent-searches":{"clear":{"label":"Spastro kërkimet së fundi","text":"Spastroje"},"disclaimer":"Openverse-i nuk i depoziton kërkimet tuaja të bëra tani afër, ky informacion mbahet lokalisht në shfletuesin tuaj.","none":"S’ka kërkime të freskëta për t’u shfaqur.","heading":"Kërkime së fundi"},"external-sources-page":{"new":{"email":"email","issue":"çështje","title":"A mund të sugjeroj burime të reja të jashtme?","content":"Po, ju lutemi! Krijoni një {issue} në depon tonë në GitHub, ose na dërgoni një {email} dhe tregonani rreth burimesh të reja që do të donit t’i shihni të përfshira."},"why":{"feedback-link":"përshtypje","aria-label":"përshtypje","old":"oldsearch.creativecommons.org","content":"Për shumë vjet, Creative Commons u ka ofrouar përdoruesve të vet një portal enkas kërkimi për të kërkuar platforma që kanë filtra të brendshëm kërkimi lënde të licencuar sipas CC. Në fakt, ky ende mirëmbahet, te {old}.","title":"Pse e krijuat këtë?","feedback-suggestions":"Shpresojmë t’ju pëlqejë dhe nëse keni sugjerime për përmirësim, na jepni {feedback}.","new":"Përdoruesve të sajtit të dikurshëm CC Meta Search, veçoria “Burime të Jashtme” në {openverse} do t’u duket familjare. Synimi qe të garantohej se ana praktike nuk humb, por përditësohet dhe bëhet pjesë e mekanizmit tonë të ri të kërkimeve për lëndë të licencuar me licenca të hapëta. Veç kësaj, veçoria “Burime të Jashtme” ngrihet mbi këtë anë praktike, duke na lejuar të shtojmë shpejt burime të reja të jashtme, dora-dorës që i zbulojmë, si dhe të mbulojmë lloje të reja lënde në të ardhmen, teksa zgjerohemi."},"explanation":"Mund të gjeni lidhje për te burime të jashtme në fund të çdo faqeje përfundimesh kërkimi {openverse}; në faqe për kërkime që nuk japin përfundime; si dhe në faqe për lloje mediash që s’i mbulojmë ende, por e kemi në plan.","relationships":"Ky funksion na lejon gjithashtu të nisim biseda dhe të ndërtojmë marrëdhënie me burime që mund të duan të përfshihen në të ardhmen në {openverse}. Për ta mbyllur, mundemi edhe të ofrojmë burime të jashtme llojesh mediash që nuk përfshihen ende në {openverse}, por që e kemi në plan.","license":"Megjithatë, ka mjaft burime media të licencuara nën CC dhe publike për të cilat s’jemi ende në gjendje të shfaqim përfundime brenda ndërfaqes {openverse}. Kjo mund të vijë ngaqë ato nuk ofrojnë ende një API publike, ose ngaqë kontribuesit tanë s’kanë pasur ende kohë t’i integrojnë në Openverse. Kjo janë burime të vyera dhe duam të garantojmë se jeni në gjendje të gjeni materialet më të mira të mundshme të licencuara si burim i hapët, pavarësisht se ku gjenden.","link":"burimet këtu","title":"Burime të Jashtme","intro":"{openverse}-i është ngritur mbi një katalog që indekson lëndë të licencuar nën CC dhe përkatësi publike prej burimesh të përzgjedhur. Mësoni më tepër rreth {link} tonë."},"external-sources":{"form":{"types":{"model-3d":"Model 3D","video":"video","audio":"audio","image":"figurë"},"types-plural":{"video":"video","audio":"audio","image":"figura","model-3d":"Modele 3D"},"caption":"Klikoni mbi një burim më poshtë që të kërkohet drejtpërsëdrejti te koleksione të tjera {type} licencuar sipas CC-së.","no-results-title":"S’ka përfundime {type} për \\"{query}\\".","supported-title":"S’po gjeni ç’po kërkoni? Provoni një burim të jashtëm:","unsupported-title":"{openverse}-i nuk mbulon ende kërkim së brendshmi për {type}."},"title":"Burime të jashtme","button":"Listë burimesh","caption":"{openverse} s’mund të garantojë saktësinë e informacionit të licencës. Verifikoni përherë se vepra gjendet faktikisht nën një licencë CC.","card":{"caption":"Klikoni mbi një burim më poshtë për të kërkuar drejtpërsëdrejti te koleksione të tjera figurash të licencuara me CC.{break}Ju lutemi, kini parasysh se filtrat Përdorim nuk mbulohet për Open Clip Art Library apo Nappy.","search":"S’po gjeni ç’po kërkoni? Provoni burime të jashtme"}},"navigation":{"search-help":"Ndihmë kërkimi","external-sources":"Burime të jashtme","sources":"Burime","feedback":"Përshtypje","privacy":"Privatësi","api":"API","get-involved":"Përfshihuni","licenses":"Licenca","about":"Mbi"},"about":{"planning":{"frontend":"Pjesa e dukshme e {openverse}","api":"API {openverse}","working":"aktualisht po merremi me","community":"kontributet nga bashkësia janë të mirëpritura","catalog":"Katalog {openverse}","content":"Hëpërhë, {openverse}-i kërkon vetëm për figura  dhe audio, me kërkimin për video të furnizuar përmes Burimesh të Jashtme. Por kemi në plan të shtojmë lloje të tjera mediash, bie fjala, tekste dhe modele 3D, me synimin përfundimtar të dhënies së mundësisë së përdorimit të krejt 2.5 miliardë veprave të licencuara nën CC dhe nën përkatësi publike në internet. Krejt kodi ynë është me burim të hapët ({frontend}, {api}, {catalog}) dhe ne, {community}. Mund të shihni se mbi se {working}."},"title":"Mbi {openverse}-in","declaration":{"terms":"Kushte Përdorimi nga {Openverse}","content":"Ju lutemi, mbani parasysh se {openverse}-i nuk verifikon nëse figura është e licencuar si duhet apo jo me CC, apo nëse atribuimi apo të dhëna të tjera licencimi që kemi grumbulluar janë apo jo të sakta apo të plota. Ju lutemi, verifikoni në mënyrë të pavarur gjendjen e licencimit dhe informacion atribuimi, përpara se të ripërdorni lëndën. Për më tepër hollësi, lexoni {terms}."},"transfer":{"content":"{openverse}-i është pasuesi i CC Search-it të nisur nga Creative Commons më 2019-n, pas migrimit në WordPress më 2021-shin. Mund të lexoni më tepër rreth këtij tranzicioni te njoftimi zyrtar prej {creative-commons} dhe {wordpress}. Mbetemi të përkushtuar ndaj synimit tonë për t’u marrë me zbulimin dhe përdorimin e medias së hapur."},"collection":{"content":"{openverse} kërkon mes më shumë 300 milionë figurash prej API-sh të hapura dhe grupe të dhënash {common-crawl}. Shkon tej kërkimit të thjeshtë, për t’i grumbulluar përfundimet nga depo të shumta publike në një katalog të vetëm dhe lehtëson ripërdorimin përmes veçorish të tilla si etiketa të prodhuara nga makina dhe atribuim me një klikim."},"description":{"content":"{openverse}-i është një mjet që lejon zbulimin dhe përdorimin nga cilido të veprave të licencuara me licenca të hapëta dhe nën përkatësi publike."}},"language":{"language":"Gjuhë"},"media-details":{"reuse":{"description":"Që ta shkarkoni dhe përdorni, vizitoni sajtin {media}. Mos harroni t’i jepni hakën krijuesit, duke shfaqur hollësi atribuimi, kur ndani punën tuaj me të tjerët.","title":"Si të përdoret","credit":{"actual-title":"\\"{title}\\"","generic-title":"Këtë vepër","text":"{title} {creator} {marked-licensed} {license}. {view-legal}","copy-text":"një kopje e kësaj licence","terms-text":"kushtet","view-legal-text":"Që të shihni {terms-copy}, vizitoni {url}.","licensed":" licencohet sipas ","marked":" i është vënë shenjë si ","creator-text":"nga {creator-name}"},"copy-license":{"copied":"U kopjua!","copy-text":"Kopjo tekstin","title":"Jepini hakën krijuesit","plain":"Tekst i thjeshtë","html":"HTML","rich":"Tekst i Pasur"},"tool":{"link":"këtu","content":"Lexoni më tepër rreth mjetit {link}."},"image":"Figurë","audio":"Audio","attribution":"Kësaj figure i është përshoqëruar një licencë {link}:","tool-header":"Përkatësi Publike","license-header":"Licencë"},"content-report":{"short":"Raportim","form":{"dmca":{"open":"Hape formularin","form":"Formular DMCA","note":"Që të raportoni shkelje të drejtash kopjimi, fuhet të plotësoni këtë {form}. S’do të ndërmerret ndonjë veprim, para se të plotësohet dhe parashtrohet ky formular. Rekomandojmë të bëni të njëjtën gjë te burimi, {source}.","option":"Cenon të drejta kopjimi"},"mature":{"placeholder":"Në daçi, jepni një përshkrim.","sub-label":"Opsionale","option":"Përmban lëndë për të rritur"},"other":{"placeholder":"Ju lutemi, jepni të paktën 20 shenja","sub-label":"E domosdoshme","note":"Përshkruani problemin.","option":"Tjetër"},"cancel":"Anuloje","question":"Cila është arsyeja?","submit":"Raportoje","disclaimer":"Për arsye sigurie, {openverse}-i grumbullon dhe ruan adresa IP të anonimizuara të atyre që plotësojnë dhe parashtrojnë këtë formular."},"success":{"note":"Faleminderit që raportoni për këtë lëndë. Rekomandojmë të bëni të njëjtën gjë te burimi i saj, {source}.","title":"Raportimi u parashtrua me sukses"},"failure":{"note":"Diç shkoi ters. Ju lutemi, riprovoni pas pak kohe.","title":"Raportimi s’u parashtrua dot"},"long":"Raportojeni këtë lëndë"},"aria":{"creator-url":"autor {name}","attribution":{"tool":"lexoni më tepër rreth mjetit","license":"lexoni më tepër rreth licencës"}},"audio-info":"Informacion audio","image-info":"Informacion figure","loading":"Po ngarkohet…","related-error":"Gabim në prurje medie të lidhur","source-label":"Burim","provider-label":"Furnizues Shërbimi"},"all-results":{"snackbar":{"spacebar":"Tasti hapësirë","text":"Shtypni {spacebar} që të luhet, ose të ndalet pjesa."}},"audio-results":{"snackbar":{"right":"→","left":"←","spacebar":"Tasti hapësirë","text":"Shtypni {spacebar} që të luhet ose ndalet, si dhe tastet shigjetë {left} & {right} që të shtyheni më tej te pjesa."}},"image-details":{"weblink":"Merreni këtë figurë","information":{"unknown":"E panjohur","title":"Informacion figure","source":"Burim","provider":"Furnizues","pixels":"piksela","dimensions":"Përmasa","type":"Lloj"},"creator":"nga {name}","aria":{"creator-url":"Autor {creator}"},"related-images":"Figura të afërta"},"audio-details":{"weblink":"Merreni këtë audio","information":"Hollësi mbi audion","table":{"source":"Burim","provider":"Furnizues Shërbimi","genre":"Zhanër","filetype":"Format","sample-rate":"Shpejtësi Kampionizimesh","category":"Lloj","album":"Album"},"related-audios":"Audio të afërta","genre-label":"Zhanër"},"filters":{"audio-extensions":{"opus":"OPUS","oga":"OGA","mp3":"MP3","mid":"MID","webm":"WEBM","title":"Zgjatim","flac":"FLAC","ogg":"OGG","wav":"MP3"},"lengths":{"long":"> 10 min","medium":"2-10 min","short":"30 sek-2 min","shortest":"< 30 sek","title":"Kohëzgjatje"},"audio-categories":{"sound_effect":"Efekte zanore","news":"Lajme","audiobook":"Audiolibër","pronunciation":"Shqiptim","title":"Kategori audio","podcast":"Podkast","sound":"Efekte zanore","music":"Muzikë"},"license-explanation":{"more":{"read-more":"Lexoni më tepër","mark":"{read-more} mbi {mark}.","license":"{read-more} më tepër rreth kësaj licence."},"mark-definition":"Përkufizim i {mark}","license-definition":"Përkufizim licence"},"licenses":{"title":"Licenca","by-nc-nd":"BY-NC-ND","by-nc-sa":"BY-NC-SA","by-nd":"BY-ND","by-nc":"BY-NC","by-sa":"BY-SA","by":"BY","pdm":"Shenjë Përkatësie Publike","cc0":"CC0"},"aria":{"remove-filter":"Hiqe filtrin {label}"},"license-types":{"title":"Përdorim","modification":"Ta ndryshoj ose përshtat","commercial":"Ta përdor komercialisht"},"image-providers":{"title":"Burim"},"audio-providers":{"title":"Burim"},"image-categories":{"title":"Lloj figure","digitized_artwork":"Vepra të Dixhitalizuara","illustration":"Ilustrime","photograph":"Fotografi"},"image-extensions":{"title":"Zgjatim","svg":"SVG","gif":"GIF","png":"PNG","jpg":"JPEG"},"aspect-ratios":{"title":"Përpjesëtim","square":"Katrore","wide":"E gjerë","tall":"E lartë"},"sizes":{"title":"Madhësi figure","large":"E madhe","medium":"Mesatare","small":"E vogël"},"mature":{"title":"Rregullime Kërkimi","enable":"Aktivizo Lëndë Për të Rritur"},"creator":{"title":"Kërko sipas Krijuesi"},"search-by":{"creator":"Krijues","title":"Kërko Sipas"},"title":"Filtra","filter-by":"Filtroji Sipas"},"play-pause":{"loading":"Po ngarkohet","replay":"Riluaje","pause":"Pauzë","play":"Luaje"},"search":{"search-bar-label":"Kërkoni për lëndë në {openverse}","search":"Kërkim"},"flag-status":{"off":"Off","on":"On","nonexistent":"I paqenë"},"sketchfab-iframe-title":"Parës {sketchfab}","sources":{"heading":{"audio":"Burime Audio","image":"Burime Figurash"},"aria":{"table":"tabelë burimesh"},"title":"Burime","providers":{"source":"Burim","item":"Objekte gjithsej","domain":"Përkatësi"},"issue-button":"Sugjeroni një burim të ri","suggestions":"I çmojmë sugjerimet për burime të reja nga bashkësia jonë e përdoruesve.","new-content":{"total-items":"Sa objekte të reja gjithsej apo lloje të reja objektesh mund t’u sjellim përdoruesve tanë përmes këtij integrimi? Disa burime janë integrime të drejtpërdrejta, të tjera mund të jenë burim brenda një burimi.","reuse":"A është i shfaqur qartë informacioni mbi licencimin dhe atribuimin, për të lejuar ripërdorim të besueshëm?","impact":" Cili është ndikimi ose rëndësia e këtij burimi për përdoruesit tanë? Nëse ekziston brenda një shërbimi, bie fjala, Wikimedia Commons, a ka vlerë për përdoruesit tanë të jenë në gjendje të filtrojnë sipas këtij burimi drejtpërsëdrejti?","integrate":"Kemi një listë që nuk mbaron kurrë burimesh të mundshëm, që duhen studiuar, para se të integrohen. I bëjmë vetes pyetje të tilla:","next":"Si të vendosim se cilat burime të shtohen?"},"cc-content":{"smithsonian":"Smithsonian Institute","europeana-api":"Europeana","europeana":"{openverse}-i është posaçërisht mirënjohës për punën e {link}, një ent që punon për dixhitalizimin dhe bërjen të zbulueshme të veprave të trashëgimisë kulturore nëpër Evropë. {openverse}-i është në gjendje të indeksojë qindra burime të vyera, përmes një integrimi të vetëm me {link-api}.","provider":"Disa shërbime kanë grupime të shumta të ndryshme të lëndës brenda tyre. {flickr} ka burime që shkojnë nga NASA e deri te foto personale. {smithsonian} përfshin një duzinë koleksionesh të ndryshme. Wikimedia Commons mbulon gjithë gamën, kur vjen puna për lëndë dhe përdoret nga disa Galeri, Biblioteka, Arkiva dhe Muze për të nxjerrë në pah disa ose krejt koleksionet e tyre të dixhitalizuara.","content":"Ka lëndë të licencuar nën licenca të hapura në miliona përkatësi përgjatë gjithë shtrirjes së internetit. Ekipi ynë identifikon sistematikisht shërbime që strehojnë lëndë nën licenca CC. Nëse ia vlen, e indeksojmë atë lëndë dhe e bëjnë të zbulueshme përmes {openverse}-it.","where":"Prej nga vjen lënda në {openverse}?"},"single-name":"Burim","detail":"Klikimi mbi një {single-name} ju lejon të shfletoni dhe filtroni objekte brenda atij burimi."},"license-readable-names":{"nc-sampling+":"NonCommercial Sampling Plus","sampling+":"Sampling Plus","by-nc-nd":"Attribution-NonCommercial-NoDerivatives","by-nc-sa":"Attribution-NonCommercial-Share-Alike","by-nd":"Attribution-NoDerivatives","by-nc":"Attribution-NonCommercial","by-sa":"Attribution-Share-Alike","by":"Atribuim","pdm":"Shenjë Përkatësie Publike","cc0":"Zero"},"error-images":{"waiting-for-a-bite":"Tre djem ulur në një trung të thyer, teksa dy prej tyre peshkojnë.","depressed-musician":"Një pianist i dëshpëruar, mban kokën me duar."},"no-results":{"alternatives":"Provoni një kërkim tjetër, ose përdorni një nga burimet e jashtme për të zgjeruar kërkimin tuaj.","heading":"S’gjetëm dot gjë për \\"{query}\\"."},"server-timeout":{"heading":"Hëm, duket sikur plotësimi i kësaj kërkese u zgjat shumë. Ju lutemi, riprovoni. "},"migration-notice":{"intro":"{cc-search}-i tani quhet {openverse} dhe bëhet pjesë e WordPress-it si një projekt me burim të hapët.","read":"Lexoni më tepër","more":"{read-more} më tepër rreth këtij njoftimi."},"skip-to-content":"Hidhu te lënda","notification":{"translation":{"link":"dhënie ndihmese me një përkthim","text":"Përkthimi për vendoren {locale} është i paplotë. Ndihmonani të arrijë në 100 përqind, duke {link}."}},"feedback":{"title":"Përshtypje","aria":{"report":"formular për njoftim të metash","improve":"ndihmonani të përmirësojmë formularin","cc-usability":"kanal Slack “cc-usability”"},"loading":"Po ngarkohet…","report":"Njoftoni një të Metë","improve":"Ndihmonani të Përmirësohemi","intro":"Faleminderit që përdorni {Openverse}-in! I mirëpresim idetë tuaja për përmirësimin e mjetit më poshtë. Që të jepni ide rregullisht, merrni pjesë te kanali {Slack} te hapësira {making-wordpress}."},"waveform":{"label":"Shtyllë spostimi audioje","current-time":"{time} sekondë|{time} sekonda"},"audio-thumbnail":{"alt":"Art kopertine për \\"{title}\\" nga {creator}"},"download-button":{"download":"Shkarkoje","aria":{"dropdown-label":"Përzgjidhni formatin e kartelës së shkarkimit"}},"interpunct":"•","error":{"audio":"audio","image":"figurë","media-not-found":"S’u gjet dot {mediaType} me ID {id}","image-not-found":"S’u gjet dot figurë me ID-në {id}","occurred":"Ndodhi një gabim"},"dropdown-button":{"aria":{"arrow-label":"Menu hapmbyll"}},"browsers":{"edge":"Edge","opera":"Opera","firefox":"Firefox","chrome":"Chrome"},"single-result":{"back":"Mbrapsht te përfundime kërkimi"}}')}}]);
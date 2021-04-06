const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dailydoodles");

const drawingsSeed = [
  {
    title: "Square",
    body:
      "Welcome to your first Drawing!",
    date: new Date(Date.now()),
    drawing: '{"lines":[{"points":[{"x":32.693984337341554,"y":359.78827827234943},{"x":32.693984337341554,"y":359.78827827234943},{"x":32.693984337341554,"y":359.78827827234943},{"x":32.693984337341554,"y":359.78827827234943},{"x":32.67928501399525,"y":359.74871444974025},{"x":30.623137607777362,"y":348.3106852764114},{"x":28.467227802431793,"y":335.3376524181672},{"x":27.377258848984305,"y":320.46789108038166},{"x":26.876214686454247,"y":304.4941011547217},{"x":28.548728794994624,"y":283.46223570636056},{"x":30.24045732117295,"y":267.43371493878635},{"x":31.94449554811507,"y":254.39875648545538},{"x":32.78056480121876,"y":240.47841446080218},{"x":32.11439540848752,"y":227.4842612739388},{"x":30.03712975856027,"y":211.40114415110364},{"x":29.23934409083624,"y":198.47720210714277},{"x":29.869942974151847,"y":186.48344809077},{"x":32.225372765949444,"y":174.28244757875524},{"x":34.04363356762651,"y":159.4112970248691},{"x":34.82659266016846,"y":145.48109020726665},{"x":35.16316360588551,"y":133.49527162025103},{"x":35.331565209966065,"y":121.49881784683417},{"x":35.412118818823075,"y":110.49967819976831},{"x":35.45414864213586,"y":99.49991240188785},{"x":35.474990123172866,"y":89.49997393772425},{"x":36.08061357789493,"y":84.41576024367492},{"x":37.289391935891715,"y":80.06252549656358},{"x":38.166852883212144,"y":77.02779815480167},{"x":38.98148863736657,"y":73.23273627574942},{"x":39.713949500916605,"y":68.36633994181541},{"x":40.54429320855256,"y":63.339561264923894},{"x":41.409149405966744,"y":60.09511287592166},{"x":42.261343735257604,"y":57.054700584560585},{"x":43.17404980779012,"y":54.693129809598354},{"x":43.69664258901209,"y":53.496715763458994},{"x":43.8992474117952,"y":53.11280219573121},{"x":45.44964254784732,"y":51.39897437307074},{"x":60.01631009023515,"y":46.98207783605778},{"x":79.5371186432945,"y":45.4431169839358},{"x":98.50556285286915,"y":44.86534575887459},{"x":115.53973287632462,"y":43.47571016717571},{"x":126.54418147502359,"y":42.528787343347005},{"x":135.55584383122005,"y":41.65634485158857},{"x":145.51662589085737,"y":41.1314625565544},{"x":163.51248031893078,"y":41.95285112082893},{"x":188.52835359556929,"y":43.675571490496964},{"x":212.50315039907287,"y":44.22504608980015},{"x":232.51740174224452,"y":43.14601779637668},{"x":246.50370743680136,"y":42.798269572945976},{"x":257.51907781891316,"y":42.17639019119241},{"x":269.50477040292594,"y":41.83832959296956},{"x":283.50101622233905,"y":41.65616754921839},{"x":298.53808466102464,"y":40.455291276619704},{"x":309.59817042472986,"y":39.03181355302304},{"x":319.52924236811276,"y":38.33723456606491},{"x":328.50955209241584,"y":37.97870552066109},{"x":335.50381075294763,"y":37.802396344067574},{"x":340.50189888259075,"y":37.713470317429355},{"x":342.50139512219357,"y":37.682978103279254},{"x":344.50102500111,"y":37.65684060702884},{"x":345.5008733788033,"y":37.644776823037596},{"x":348.5005589681297,"y":37.615822807200395},{"x":349.50047628204624,"y":37.60691371411077},{"x":349.5330986558415,"y":37.60934169336515},{"x":349.83547963388423,"y":37.68238316507196},{"x":350.09527417663173,"y":37.76740989475184},{"x":350.41640215954374,"y":37.90066755810871},{"x":352.01897370502866,"y":39.14404048447367},{"x":354.88693341655994,"y":43.48664140445434},{"x":358.3139151820135,"y":55.93069304009113},{"x":360.0162047803855,"y":69.59208869086399},{"x":359.72192266262226,"y":85.50205224499561},{"x":359.1102230523519,"y":97.51552555068108},{"x":358.81848007863175,"y":108.50422697615886},{"x":358.6820043176079,"y":117.50138031153699},{"x":358.59100477581956,"y":129.500345082846},{"x":358.54550271504024,"y":141.50008627102162},{"x":359.48392058857746,"y":152.5430947720707},{"x":360.5337584813268,"y":165.5389642033981},{"x":360.9954650403417,"y":176.51061117177017},{"x":361.2116318545766,"y":185.50346534149529},{"x":361.3495362120302,"y":196.50094334339113},{"x":361.92540533693864,"y":208.5137645203683},{"x":363.2193202374054,"y":220.568534903639},{"x":364.36155252108574,"y":232.55412467260126},{"x":366.00208480682676,"y":245.59385662466386},{"x":367.1991120225853,"y":256.57072129296085},{"x":367.7893856417352,"y":266.521059010337},{"x":369.0311943701039,"y":276.5902304799133},{"x":370.623504631514,"y":286.64762618155964},{"x":371.8601801174092,"y":295.6125700526708},{"x":372.34021911439584,"y":300.5561769814943},{"x":372.5053317563786,"y":302.5412945899177},{"x":372.50458359640066,"y":304.50000087538984},{"x":372.30187062827554,"y":307.5268214957135},{"x":371.57327687616885,"y":311.680460119161},{"x":371.05936078665354,"y":315.6017482823296},{"x":370.7491844787697,"y":318.56519635109146},{"x":370.57144258790976,"y":320.54792859874016},{"x":370.4188288401765,"y":322.5352286456255},{"x":369.7972701756197,"y":325.7219462668823},{"x":368.95471090423155,"y":329.7537497737939},{"x":367.7930267927463,"y":335.7211194026025},{"x":366.4744899880601,"y":340.8744931589659},{"x":365.4581160476041,"y":344.87031602110756},{"x":365.0886653567197,"y":346.04917116722635},{"x":364.96367587808254,"y":346.3610773566101},{"x":362.7160385747652,"y":348.7537602286485},{"x":357.32801539667634,"y":351.3275651217884},{"x":343.26636920154425,"y":354.14361382346806},{"x":324.4649582219279,"y":355.5836077545504},{"x":300.4961064699242,"y":356.1943375027216},{"x":276.4995673855483,"y":356.3981051537785},{"x":249.4999590424581,"y":356.46864749885026},{"x":227.49448292192426,"y":357.1361601510732},{"x":204.49089700197487,"y":358.03267881705364},{"x":187.49844125794237,"y":358.30659012510745},{"x":174.49964086049303,"y":358.4071602499677},{"x":163.49990223762154,"y":358.4515615078118},{"x":156.4999610033202,"y":358.46940721009776},{"x":152.4999780643565,"y":358.47705539359265},{"x":150.46809446492418,"y":358.62552022398967},{"x":147.47957285213744,"y":358.80011838120174},{"x":145.41225607833283,"y":359.0514990078628},{"x":144.42519872009885,"y":359.16222741613046},{"x":143.4362369456533,"y":359.26458607049227},{"x":143.4362369456533,"y":359.26458607049227},{"x":142.2846558549159,"y":358.4469784655532},{"x":138.77108743800815,"y":346.045561353737},{"x":136.8661612060231,"y":329.4219798506438},{"x":136.06620174825224,"y":312.4866348730691},{"x":134.55822727969527,"y":295.4532487226071},{"x":132.0599492350551,"y":276.39817458201264},{"x":130.49081894621435,"y":257.45902495255456},{"x":129.9249922292735,"y":241.4924718721812},{"x":129.70402822032378,"y":228.49826539485235},{"x":129.59793707936814,"y":215.49960034036488},{"x":129.5559645018194,"y":206.4998694982294},{"x":129.53197980049734,"y":197.499957387106},{"x":129.51827418760493,"y":188.4999860855781},{"x":129.9650452160658,"y":178.48807004397062},{"x":130.66433140272102,"y":168.47086705278787},{"x":130.9719109026103,"y":161.48837444798994},{"x":131.16639483192478,"y":154.49536192000198},{"x":131.30935042865462,"y":145.4984854352933},{"x":130.98524980931813,"y":137.49018484522057},{"x":130.3891366508201,"y":129.46701449887016},{"x":129.06478333775712,"y":119.39753979215357},{"x":127.06085380050625,"y":110.22356719656746},{"x":125.86369461505717,"y":104.2649032196083},{"x":125.16550720947865,"y":101.20021672090809},{"x":124.96484438074737,"y":100.24412798715589},{"x":124.96484438074737,"y":100.24412798715589},{"x":124.96484438074737,"y":100.24412798715589},{"x":128.33986008991323,"y":98.91036021060509},{"x":141.5188088928103,"y":98.17160974754601},{"x":158.50077029572145,"y":98.3640349163957},{"x":178.50010832310744,"y":98.44901232654131},{"x":191.50002495766972,"y":98.47552586159658},{"x":198.51578574735333,"y":98.11531191005908},{"x":203.5539062387536,"y":97.6361530915813},{"x":209.5239762897942,"y":97.25819264873027},{"x":219.50713550411322,"y":96.91376464723129},{"x":230.50194252398234,"y":96.71590924523186},{"x":244.50041379902729,"y":96.59965443003334},{"x":252.50014896847173,"y":96.55979315286902},{"x":254.53423615381743,"y":96.40581210931983},{"x":255.5291772990974,"y":96.33630369098468},{"x":260.5145439837182,"y":96.09063024116196},{"x":265.50724827335165,"y":95.9170204107394},{"x":269.50407753861725,"y":95.81280073608022},{"x":271.50299585692284,"y":95.76812607293776},{"x":272.5025527261888,"y":95.74750537796191},{"x":273.502175135458,"y":95.72846995377336},{"x":275.5015980912184,"y":95.69583573562186},{"x":278.86831477213536,"y":96.54976293158073},{"x":283.05993614169597,"y":97.8771642435896},{"x":286.0713733242409,"y":98.84124443203328},{"x":288.16287994491034,"y":99.5668449234128},{"x":289.99006356466504,"y":100.10568662988395},{"x":290.918734360184,"y":100.35766230649591},{"x":291.20100541947124,"y":100.45862381493858},{"x":296.47736572065975,"y":107.7695011546871},{"x":299.47614757081055,"y":116.1947529160966},{"x":301.01848350503263,"y":128.59180496988986},{"x":301.2583662678405,"y":140.50243303250684},{"x":300.3420174077367,"y":153.5295778401483},{"x":299.84862949983085,"y":170.50506534107635},{"x":299.6394659294981,"y":188.50081047509835},{"x":299.5597721012992,"y":204.50014886359392},{"x":298.4128069450653,"y":219.5347677213921},{"x":297.45475463887175,"y":231.53804181667763},{"x":296.9985273660835,"y":242.51035986923435},{"x":296.3545489236219,"y":251.53046591812628},{"x":295.19808133033297,"y":259.6207525576923},{"x":294.57499242715295,"y":266.54824735523846},{"x":293.6826546476377,"y":275.55842020566706},{"x":293.2104233356213,"y":283.52104768002624},{"x":293.10906511200716,"y":285.51546664699305},{"x":292.9602276928065,"y":286.0097073878019},{"x":292.034648381164,"y":287.4352908370609},{"x":287.9929798933978,"y":289.67785495227486},{"x":279.3878044825455,"y":290.8628975032787},{"x":267.49861550441716,"y":290.6822799417391},{"x":258.43571787408473,"y":289.74041881243994},{"x":249.43187237834175,"y":288.7768796133406},{"x":242.41414533000142,"y":287.93287859067186},{"x":236.46179677204455,"y":287.4567747824355},{"x":231.48095451209645,"y":287.17581726751814},{"x":226.4905077301,"y":286.97720475103677},{"x":222.49465993810873,"y":286.85795665817176},{"x":220.49607649323957,"y":286.8068367128379},{"x":219.49665681926564,"y":286.783240464565},{"x":218.4971513186232,"y":286.7614579087682},{"x":216.49790703546373,"y":286.7241132936038},{"x":215.4982166244363,"y":286.7068763715372},{"x":214.8240912192182,"y":286.470511057638},{"x":211.10786335599977,"y":282.8609023702252},{"x":206.0445396438491,"y":273.14227795811524},{"x":199.91608824786596,"y":257.6578745550871},{"x":194.56434833291465,"y":242.7907516414424},{"x":190.72832813074308,"y":229.05759047034687},{"x":189.12925049575526,"y":217.38888316125957},{"x":188.3907293800821,"y":207.46689605417623},{"x":187.98618503688326,"y":197.49014695947932},{"x":187.34752549008712,"y":188.4700334395378},{"x":185.7702281291679,"y":180.28329598378716},{"x":184.16022167602736,"y":173.20141959910822},{"x":183.06890766883143,"y":168.22180503971205},{"x":182.43511064483468,"y":164.34294502192117},{"x":182.05134053446017,"y":161.39930008639755},{"x":181.83108892215975,"y":159.42594659896244},{"x":181.64179648311125,"y":157.44555569202015},{"x":181.63143164921527,"y":156.49928021681237},{"x":182.5582916658486,"y":153.8341490818006},{"x":188.54676513436078,"y":148.48996779972876},{"x":200.67665407767763,"y":142.68219866907356},{"x":212.20396558709427,"y":138.54964276726352},{"x":218.93248752167003,"y":136.69259378306737},{"x":223.11655153799134,"y":135.29698579307225},{"x":227.80984187865897,"y":134.20928091899756},{"x":235.61200748883897,"y":133.13573654803545},{"x":242.5447478163517,"y":132.53534787649977},{"x":244.53288971639347,"y":132.38784652953018},{"x":245.52802960191613,"y":132.31971018500664},{"x":245.6941808097659,"y":132.34996901243255},{"x":247.36660433004616,"y":133.0225564374017},{"x":249.7611901514025,"y":135.27605919099273},{"x":252.06225536137765,"y":139.80276048481974},{"x":253.58125685810919,"y":145.86037206472366},{"x":254.73599399430807,"y":153.63036298735793},{"x":255.38306395946228,"y":160.5520941633545},{"x":254.75214686584803,"y":166.56550678803885},{"x":253.59395484034798,"y":170.90571505241107},{"x":252.2261059612155,"y":175.09315405706755},{"x":251.504743164364,"y":177.8822756739451},{"x":250.91614117081716,"y":180.74575558180442},{"x":250.31910457726838,"y":184.63868225967445},{"x":249.95798210901654,"y":187.5889006313528},{"x":249.66777071595214,"y":190.5569555156583},{"x":249.57830566565804,"y":191.5485458252391},{"x":249.49564511953096,"y":192.54137588198566},{"x":249.41928212670356,"y":193.5352634641826},{"x":249.34874523423747,"y":194.5300529856077},{"x":249.3600662149943,"y":195.5008159220798},{"x":249.3800557570812,"y":197.50059945753162},{"x":249.46997322561134,"y":198.5442881916616},{"x":249.98546270236125,"y":202.5959596449751},{"x":251.40369860323764,"y":207.9063414894},{"x":252.4511572213854,"y":211.8937707367427},{"x":253.0480182212828,"y":214.753179776772},{"x":253.3632530550959,"y":215.91721887439658},{"x":253.59736653583718,"y":216.85634426081214},{"x":254.0029321381698,"y":218.76268122212682},{"x":254.19142320567798,"y":219.72415721976904},{"x":254.3661739049036,"y":220.69124112381468},{"x":254.52808167855974,"y":221.6631280258014},{"x":254.59403677033106,"y":222.53424759463545},{"x":254.27939891199344,"y":224.63266080740942},{"x":254.27939891199344,"y":224.63266080740942}],"brushColor":"#444","brushRadius":10}],"width":400,"height":400}'
  },
  {
    title: "The Second Drawing",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: new Date(Date.now()),
    drawing: '{"lines":[{"points":[{"x":27.88533811601401,"y":347.7883159523307},{"x":27.88533811601401,"y":347.7883159523307},{"x":27.88533811601401,"y":347.7883159523307},{"x":27.88533811601401,"y":347.7883159523307},{"x":29.66599115196933,"y":347.4890285530208},{"x":32.48767529820402,"y":346.2674631264661},{"x":37.74884942894363,"y":342.49393040718786},{"x":58.17294028460188,"y":316.00337813237957},{"x":65.39571167877928,"y":306.17104376212654},{"x":72.6879803156397,"y":292.9985916764397},{"x":78.96657741489487,"y":277.6107191335601},{"x":84.87786533504305,"y":258.9402858560841},{"x":89.39356950836898,"y":242.09094860659235},{"x":93.87623099510522,"y":227.93976827558862},{"x":98.05520878341582,"y":213.99492990296784},{"x":101.05363462161928,"y":203.9944580419739},{"x":103.79008145608415,"y":192.19001032870977},{"x":106.68820382009943,"y":180.1659248344354},{"x":109.20236658847406,"y":167.27798287934905},{"x":112.30222192482178,"y":156.06608038109323},{"x":115.35699844149582,"y":147.76212848826685},{"x":118.61306156664443,"y":140.45982813499336},{"x":121.89108422782154,"y":132.5796162119888},{"x":125.34100478293556,"y":125.33442515089315},{"x":128.42599630259505,"y":116.78727132098501},{"x":130.89544379171926,"y":108.94583655926228},{"x":133.01141265649758,"y":101.98171408574323},{"x":135.0837746483221,"y":95.00345184484001},{"x":137.56901983077375,"y":85.13655254994376},{"x":139.83356354159557,"y":75.20000498347294},{"x":141.40710610557576,"y":66.31608205568503},{"x":142.64944513549176,"y":58.356451690680686},{"x":143.26300406588237,"y":52.43607310043703},{"x":143.8318775126363,"y":48.38349137952107},{"x":144.23528803649762,"y":46.28435741660822},{"x":144.23528803649762,"y":46.28435741660822},{"x":144.5244644176227,"y":46.26586390123515},{"x":153.0448992584435,"y":48.92499412576819},{"x":158.29905281114554,"y":52.18013635825882},{"x":163.43564180827548,"y":56.636323342601344},{"x":171.47599779195974,"y":65.57725442672687},{"x":179.97912848770846,"y":76.149251810919},{"x":187.75152889520442,"y":87.57739259328784},{"x":192.2257541077548,"y":96.72120923905958},{"x":197.38007394963174,"y":107.64705766905765},{"x":203.05782790868216,"y":118.80501225206493},{"x":208.48415041308994,"y":130.59856647401386},{"x":212.33371359990787,"y":138.66904968009626},{"x":221.24505734511763,"y":153.25911662090945},{"x":235.44436162499915,"y":172.79340599792},{"x":247.353948333843,"y":188.859774609242},{"x":256.7320293298444,"y":202.5906825155355},{"x":262.78481502429906,"y":211.5548358112035},{"x":268.0183594531597,"y":218.11783315390977},{"x":272.6127670466294,"y":224.67319877854413},{"x":277.57611245127157,"y":231.69899080642386},{"x":285.97975972589126,"y":242.14874413676577},{"x":298.5787467552911,"y":256.4859139657318},{"x":309.2561292111585,"y":267.7799888522499},{"x":314.85727654842515,"y":273.17513775852126},{"x":319.2404665328544,"y":277.79482298255215},{"x":325.85921686233405,"y":284.1731238289604},{"x":334.1878033149428,"y":292.84509467013504},{"x":343.3371736297067,"y":302.70407675974576},{"x":351.1792453405891,"y":310.8533219154468},{"x":356.4260706579513,"y":316.6224065772528},{"x":360.29227754604517,"y":320.74595567072873},{"x":364.2024175169953,"y":324.8310828278421},{"x":369.1323561293487,"y":329.8986898640991},{"x":372.10147511861516,"y":332.9288402291896},{"x":373.5267153426875,"y":334.5319047856601},{"x":373.5267153426875,"y":334.5319047856601},{"x":373.5267153426875,"y":334.5319047856601},{"x":373.5267153426875,"y":334.5319047856601},{"x":372.8957470370563,"y":334.740086507987},{"x":363.40139285112707,"y":335.9647970156553},{"x":349.4980683572798,"y":335.7153037250987},{"x":335.4869103601158,"y":335.0603391995465},{"x":320.47999236539243,"y":334.1926636450246},{"x":302.4809193678436,"y":333.1764400204228},{"x":286.39774061879035,"y":331.0632556310426},{"x":270.34261872001423,"y":328.4371065671173},{"x":254.23614209302335,"y":325.00259241035485},{"x":240.3903872379877,"y":323.11823710583434},{"x":227.47471877417837,"y":322.2785308467492},{"x":209.4959544925564,"y":321.8115699159353},{"x":191.4885452245101,"y":321.0241978632885},{"x":178.4973605314604,"y":320.75167494542757},{"x":172.49882685986358,"y":320.6677914986407},{"x":170.49913809166628,"y":320.6438230062385},{"x":168.49936675611892,"y":320.62327794672234},{"x":164.4182868552237,"y":321.101987683673},{"x":158.39395880865223,"y":321.9082261912935},{"x":150.39944186978784,"y":322.94974737944426},{"x":142.4026522293907,"y":323.97459188864724},{"x":139.331323528869,"y":324.49506021156975},{"x":135.28950450337953,"y":325.2622369283604},{"x":133.18229407938952,"y":325.7570080126511},{"x":131.26588646364752,"y":326.14120460307475},{"x":130.10503950525032,"y":326.4466316826201},{"x":130.10503950525032,"y":326.4466316826201},{"x":130.10503950525032,"y":326.4466316826201},{"x":129.96674119926362,"y":325.98832909771164},{"x":130.5082305783031,"y":319.45894616653936},{"x":133.70260091641094,"y":309.88331059929214},{"x":137.55237861361448,"y":298.83209095400105},{"x":140.93721333465848,"y":290.5986926187989},{"x":144.590706745974,"y":282.44983286383746},{"x":148.8038058345536,"y":272.5429054311095},{"x":153.27413613875663,"y":263.3023306237011},{"x":159.41974975845204,"y":252.84555735570376},{"x":163.17687515116793,"y":245.25473578679396},{"x":165.47404559706064,"y":238.80449871270076},{"x":167.05010894195883,"y":231.24725643730184},{"x":168.32821290324475,"y":224.30183633195983},{"x":169.90063397174802,"y":217.21508840133822},{"x":171.0059353071002,"y":208.40662717537717},{"x":171.554667065952,"y":201.46270645146006},{"x":171.53867315552466,"y":196.49993768263158},{"x":171.52900489488584,"y":192.49996494645183},{"x":171.52320392675375,"y":189.49997756572},{"x":171.3166665517569,"y":186.47217840425213},{"x":170.9454325671514,"y":183.41262879023006},{"x":170.38463383986576,"y":181.14812807320993},{"x":169.57602961058262,"y":178.09905348874722},{"x":169.14745054799636,"y":176.20431568251274},{"x":169.14745054799636,"y":176.20431568251274},{"x":169.14745054799636,"y":176.20431568251274},{"x":169.14745054799636,"y":176.20431568251274},{"x":172.70782909114473,"y":180.37409881013446},{"x":176.80986690658955,"y":185.28795066200612},{"x":178.90566367905268,"y":188.47429660890396},{"x":182.0419190052786,"y":193.3859904159815},{"x":185.96717860902726,"y":199.4341048746945},{"x":191.04301805881036,"y":207.38528872329266},{"x":197.08283316965972,"y":215.0667801779615},{"x":201.36326369277717,"y":220.8528763415634},{"x":203.6219605399582,"y":223.44812205859887},{"x":205.38280227221355,"y":225.83845268584832},{"x":206.64448486121108,"y":227.6510451223576},{"x":210.09702764853677,"y":232.0556365824122},{"x":214.06445832349067,"y":237.08125698530358},{"x":218.35151861665742,"y":242.86157617076296},{"x":221.56176913305006,"y":246.50086166885944},{"x":222.93215872372588,"y":248.18722498837636},{"x":224.750820469448,"y":250.33756491956018},{"x":226.60618013922735,"y":252.46188028372762},{"x":229.44815100330325,"y":255.602375163315},{"x":231.75559709016656,"y":258.3335272012533},{"x":232.67489282464646,"y":259.40232459942484},{"x":233.1494870091834,"y":260.014750463386},{"x":234.4432638772854,"y":261.7942040360218},{"x":235.2843104382732,"y":262.9117872286444},{"x":236.15705324654218,"y":264.3133898433876},{"x":236.5811174807294,"y":265.0612821801204},{"x":237.66682004724512,"y":267.01315053799385},{"x":238.36499843872943,"y":268.18681640601665},{"x":238.77953693963934,"y":268.9512416666676},{"x":238.77953693963934,"y":268.9512416666676},{"x":238.37334485338886,"y":270.1423065877474},{"x":236.49908239896016,"y":272.7525467134966},{"x":235.09271126280711,"y":274.12352621003157},{"x":234.08145100885946,"y":275.11199078549953},{"x":232.90377875610724,"y":276.04554193075137},{"x":230.78545263297914,"y":277.31861956075},{"x":229.2196014035998,"y":278.1064718645453},{"x":227.5478138666081,"y":278.8153646066335},{"x":224.88370578704416,"y":279.70378576025837},{"x":221.8838087887733,"y":280.70409464545713},{"x":220.04465468442584,"y":281.2257140904673},{"x":217.20701730295576,"y":281.86452170028014},{"x":216.2499421195643,"y":282.06302232532},{"x":213.33949383785864,"y":282.5438850587689},{"x":210.39708310811872,"y":282.93174826047726},{"x":207.43405394772842,"y":283.24367346095534},{"x":205.4515199237529,"y":283.42242331496215},{"x":203.46436582146163,"y":283.57590558369765},{"x":200.47718463816156,"y":283.7603729700811},{"x":195.48862823760663,"y":283.97770412555616},{"x":192.49272110629227,"y":284.08209993217014},{"x":192.49272110629227,"y":284.08209993217014}],"brushColor":"#444","brushRadius":10}],"width":400,"height":400}'
  },
  {
    title: "Circle!",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: new Date(Date.now()),
    drawing: '{"lines":[{"points":[{"x":260.82849853306607,"y":326.9977313629403},{"x":260.82849853306607,"y":326.9977313629403},{"x":259.9562490807962,"y":328.09764127225907},{"x":254.75208884233484,"y":331.2634405022582},{"x":243.09033929810272,"y":334.3912969014626},{"x":231.32203012383508,"y":336.4409701917806},{"x":221.38380574020445,"y":337.8341185128936},{"x":204.48009103048403,"y":338.8090449353856},{"x":183.4994731800512,"y":338.61244287986233},{"x":159.42245865948135,"y":335.8619763261371},{"x":137.2270105899778,"y":331.0450388253519},{"x":116.9912268442149,"y":324.95712389346903},{"x":96.53469698830341,"y":316.21544932920796},{"x":81.84516819041224,"y":307.5809123585267},{"x":71.81686574813696,"y":297.15041872555696},{"x":62.31455921549069,"y":283.3773368221688},{"x":52.42108189499802,"y":265.9374704403283},{"x":42.6906950470262,"y":249.7798489694511},{"x":36.69895206915659,"y":237.31530847376126},{"x":32.40625720954858,"y":224.8464159368873},{"x":29.566358224143816,"y":214.1016139929419},{"x":27.927065376508363,"y":200.41484302922916},{"x":28.712433868875397,"y":188.47412792603726},{"x":30.829558833280725,"y":179.19909158760163},{"x":34.1166941677553,"y":168.01317687024303},{"x":38.31242706920815,"y":156.7456317274442},{"x":42.35518472654596,"y":145.76146111075033},{"x":45.67751397567895,"y":135.87491101476712},{"x":50.55917506696389,"y":121.83445626605709},{"x":56.63917743822059,"y":110.9714258293385},{"x":66.08874620195158,"y":98.93786613281375},{"x":75.0212008354571,"y":89.99175863572125},{"x":83.5196292989535,"y":82.45945614170877},{"x":94.50936593209798,"y":75.14734766062944},{"x":106.43471715881118,"y":70.14322254953308},{"x":120.98486277705393,"y":65.87662771663118},{"x":135.73935164536087,"y":62.88477468087113},{"x":149.6022628538934,"y":61.06328206097147},{"x":166.51752049304625,"y":60.148216680928},{"x":184.5028035244615,"y":59.75937757676149},{"x":200.50051494288525,"y":59.6111681792575},{"x":216.5000945816776,"y":59.547644006091396},{"x":232.50001737215604,"y":59.520418899166835},{"x":242.51187796880282,"y":59.966211497759105},{"x":246.6479139175195,"y":60.621688126675515},{"x":251.97324278985045,"y":62.163254846670924},{"x":260.6739278492007,"y":66.32349907894451},{"x":268.94357947096603,"y":70.79368896622431},{"x":278.85699747721515,"y":75.95685131897089},{"x":286.1991146098259,"y":80.34437166663722},{"x":293.768090357669,"y":84.13100424391651},{"x":302.65989053143284,"y":88.35295942220378},{"x":309.82176917437766,"y":92.02502178682613},{"x":315.52210574466625,"y":95.83354470281408},{"x":321.33720881798064,"y":100.75124153462578},{"x":325.86524775012435,"y":106.24200031956045},{"x":329.382191766124,"y":112.17660799865088},{"x":332.15486360781426,"y":119.31430423561847},{"x":334.0890149699025,"y":128.74469689099232},{"x":335.11536229327714,"y":137.58015191283374},{"x":335.27940219793857,"y":146.50202781259577},{"x":334.6190550690861,"y":153.55229244782277},{"x":332.37238104076135,"y":160.14197794177383},{"x":329.020558321561,"y":168.38404064143063},{"x":325.60730742344623,"y":175.6411137365561},{"x":322.2034882236685,"y":181.94205407844527},{"x":316.8044601631467,"y":188.97924048591696},{"x":310.6324842643275,"y":195.67601565671913},{"x":303.79366974858914,"y":202.82733938740037},{"x":296.8808040243549,"y":209.9115121292886},{"x":290.92423303213207,"y":215.95410637672484},{"x":285.10665701630154,"y":220.30888458087725},{"x":276.78329640607245,"y":225.31503314278422},{"x":268.3337930082852,"y":229.3396774273666},{"x":259.59742375775255,"y":232.9341281291664},{"x":248.8529876680709,"y":236.61288397283673},{"x":237.1359580966363,"y":239.56666074697728},{"x":226.32283622251313,"y":241.44560382213376},{"x":213.45911229282598,"y":242.51023580203247},{"x":200.49057579733994,"y":243.02450862442595},{"x":190.497195786446,"y":243.24059055205737},{"x":182.3888689022731,"y":242.1293545423155},{"x":176.26040179131297,"y":240.88599029899166},{"x":168.66580794261336,"y":237.89599055830107},{"x":160.0481571254662,"y":233.2215715722585},{"x":152.4786155954234,"y":228.16537551821148},{"x":147.71329522321116,"y":224.18864039541154},{"x":144.44640464599755,"y":220.49192155226393},{"x":141.96432503444427,"y":216.61001987382107},{"x":139.5448122331901,"y":211.3880608710576},{"x":137.75720005394126,"y":205.0494869067247},{"x":136.57538886731953,"y":198.31916921993277},{"x":135.8153923411593,"y":191.42768808230747},{"x":136.04208772506843,"y":185.49125999836826},{"x":136.87568400474055,"y":179.38955834114725},{"x":138.64656389612884,"y":172.15580981318433},{"x":140.9075654121073,"y":164.94964688240262},{"x":142.63744292274905,"y":159.86136667945271},{"x":144.60533300759386,"y":155.456378737222},{"x":147.6572259620413,"y":149.98150712165747},{"x":151.58036473049614,"y":145.5155075951402},{"x":156.0461432335207,"y":141.0165900319231},{"x":160.38380443655916,"y":137.30352346373746},{"x":166.24782798264442,"y":133.73642276682324},{"x":171.7960988676902,"y":130.9246198530162},{"x":179.15085711832006,"y":128.39832731453035},{"x":185.9060026838939,"y":126.59503250938087},{"x":192.66286363469328,"y":125.47033059894359},{"x":198.5725482310525,"y":124.81753341492028},{"x":205.50779303307363,"y":125.06759733765563},{"x":213.67304237656842,"y":126.46946475687963},{"x":220.9067172437337,"y":128.40229198708806},{"x":225.09403536548967,"y":129.77119714166872},{"x":227.4653153217179,"y":130.78452186402205},{"x":229.5100798087906,"y":131.681114839421},{"x":231.87494814769303,"y":132.92252089777213},{"x":234.57412045124386,"y":134.75634259592135},{"x":236.13080998502787,"y":136.00211506734422},{"x":238.067210848488,"y":137.96254914355922},{"x":239.4189387851788,"y":139.81193661911965},{"x":240.6520145030168,"y":142.0213996341556},{"x":241.43856348668672,"y":144.20820061069426},{"x":241.78685974183674,"y":146.62291490070646},{"x":241.73134082647212,"y":149.50223014798138},{"x":241.06187078887223,"y":154.6020775074441},{"x":240.0134742193483,"y":158.025876987326},{"x":238.77162093038783,"y":161.28602413828742},{"x":237.28542801169834,"y":163.9867311115212},{"x":235.04080395249582,"y":167.439290101836},{"x":232.94495321448633,"y":170.08869447769814},{"x":230.37665431463833,"y":172.42503819337747},{"x":228.0350769886366,"y":174.21423944802106},{"x":226.6456886241141,"y":175.09180194262677},{"x":223.13042577277895,"y":176.93277017813733},{"x":218.8043498676856,"y":178.47362767879613},{"x":214.1500203898556,"y":179.62301808904732},{"x":211.27509234609113,"y":180.1875985986368},{"x":211.27509234609113,"y":180.1875985986368}],"brushColor":"#444","brushRadius":10}],"width":400,"height":400}'
  }
];

const userSeed = {
  username: 'admin',
}

const runSeeder = async () => {
  try {
 
    await db.User.remove({})
    await db.Drawing.remove({})
    //write code to seed data
    //insert drawing
    const result = await db.Drawing.insertMany(drawingsSeed, { raw: true }) 
    const drawingIds = result.map(drawing => drawing._id) 
    //Add drawing ObjectId to User's drawing array
    const finalUserData = {
      ...userSeed,
      drawings: drawingIds
    }
    const user = await db.User.create(finalUserData)
    console.log(user)
    //update user.id 
    await db.Drawing.update({}, { user: user._id })
  } catch(err) {
    throw new err
  }
  process.exit()
}

runSeeder()

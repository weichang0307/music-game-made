let name_array=[]
let long_array=[]
let time_array=[]
let speed_array=[]
let score_array=[]
let src_array=[]
let song
song=[[],[],[],[],[],[]]
for(let i=3000;i<300000;i+=1000){
	for(let y=0;y<4;y++){
		song[y].push(i)
	}
}
name_array.push('節拍器')
long_array.push(300000)
time_array.push(song)
speed_array.push(10)
score_array.push(0)
src_array.push('./music/節拍器60bmp.mp3')
song=[[2450,4230,6030,7240,9630,11360,13130,14340,16040,16930,21530,21980,22180,24700,25570,26410,31950,32400,32830,33310,36460,36680,37380,38180,40040,40870,47010,48900,55590,55790,56010,56230,56430,56680,56870,57160,57650,57840,59030,59430,60880,61310,61740,61940,63500,63740,63920,64130,64390,64890,70540,71560,72330,75190,77110,78740,79460,81130,82030,82940,83810,87010,87230,87870,88720,90570,91410,93720,94070,95080,95540,96000,96490,102380,103260,105010,105870,111400,111860,112290,112770,113210,113670,114080,114540,116850,117500,120110,120530,120740,120980,121220,121420,121660,121880,122140,122600,122820,124350,125280,126200,127120,130300,130510,130930,132920,134720,137240,137730,137940,138150,141410,143310,143800,144470,145630,148100,148530,148970],[2450,4220,6040,6550,9640,11370,13140,13680,15570,16490,19690,20620,21080,21980,22180,22900,23750,26410,30110,30560,31030,31460,34670,35120,35330,35550,36010,37380,38180,40040,40880,44610,45030,46360,46590,48220,48640,49790,55140,55590,55790,56010,56230,56430,56680,56870,57160,57650,57840,59030,59440,60870,61310,62640,62880,63090,63270,64380,64890,65960,68070,71570,72330,73470,77110,78740,79460,80690,81570,82530,83390,86120,86540,87880,88730,89690,91410,93720,94060,95080,95550,96010,96500,97890,98110,99690,100630,101710,102380,103260,105010,105870,109580,110010,110480,110950,113210,113670,114080,114540,114950,115430,115870,116350,118550,119470,119700,120110,120530,120740,120980,121220,121420,121660,121880,122140,122600,122820,123920,124820,125750,126660,129370,129830,130940,132930,134720,136620,137740,137940,138170,139640,143320,143800,144480,145620,147850,148350,148750,148980],[2460,4230,6050,6550,9640,11370,13140,13670,15550,16480,19260,20140,21060,21970,22170,22910,23750,26420,30100,30540,31010,31460,34660,35120,35310,35560,36020,37370,38180,39170,40860,44610,45000,46380,46600,48190,48630,49770,55140,55590,55790,56010,56230,56430,56680,56870,57160,57650,57840,59020,59450,60880,61290,62640,62870,63070,63280,64370,64880,65960,68060,71560,72340,73470,77120,78750,79470,80680,81580,82540,83380,86100,86550,87890,88710,89680,91390,93380,94070,95090,95530,96010,96470,97890,98100,99690,100620,101690,102390,103250,104120,105830,109590,110010,110460,110930,113220,113650,114070,114540,114910,115420,115860,116330,118530,119470,119690,120100,120530,120740,120980,121220,121420,121660,121880,122140,122600,122820,123920,124840,125740,126670,129380,129820,130950,132930,134710,136620,137730,137930,138160,139650,143300,143790,144480,145640,147410,148370,148760,148980],[2470,4230,6040,7220,9640,11370,13130,14340,16050,16920,21510,21970,22180,24690,25550,26420,31940,32360,32840,33280,36440,36660,37370,38170,39180,40850,47000,48890,55590,55790,56010,56230,56430,56680,56870,57160,57650,57840,59020,59440,60880,61290,61730,61960,63500,63710,63930,64110,64380,64880,69730,71560,72340,75180,77110,78730,79470,81110,81990,82920,83800,86970,87220,87880,88710,90550,91390,93380,94080,95080,95530,96010,96480,102400,103250,104120,105840,111400,111840,112260,112740,113220,113660,114070,114530,116840,117490,120110,120530,120740,120980,121220,121420,121660,121880,122140,122600,122820,124340,125260,126200,127120,130290,130510,130950,132920,134720,137230,137740,137930,138160,141410,143300,143800,144490,145630,147620,148550,148980],[17860,18770,33990,34410,43350,45930,49540,53530,54470,65580,84750,85680,97420,99030,99460,100380,101440,128030,128910],[17380,18320,33750,34190,43020,43650,45680,46150,49320,51860,52430,65340,84270,85190,96980,98780,99250,100110,101040,127600,128450]]
name_array.push('Conan')
long_array.push(152000)
time_array.push(song)
speed_array.push(10)
score_array.push(0)
src_array.push('./music/conan.mp3')
song=[[3750,4230,4720,5910,6790,10810,11640,12130,13450,15240,20020,20460,20920,21370,23890,24320,24750,28980,29420,29880,30820,31040,31240,31460,40840,41220,44110,47080,49520,50630,53580,53970,54210,55800,55930,56930,57170,61490,62410,62620,62830,63040,65990,66190,68410,70240,72010,72920,79480,79680,79950,80190,80410,80610,80820,81020,84910,86290,87830,89610,90990,91880,92120,92360,92580,92790,93010,93240,93470,93940,94410,94820,95270,95830,97730,98220,98690,99150,99590,100020,100440,100880,101160,101560,102020,102490,104040,104960,105200,105420,105640,105840,106040,106240,107880,108100,108370,111230,111460,111660,112580,115550,117830,118040,118270,119380,119580,119830,120050,120250,120440,120650,122850,123040,123260,123510,123730,123910,124140,124340,133380,137170,138790,139690,140630,146120,146530,148450],[3810,4300,4770,5850,6280,6690,9200,9410,9610,9840,10800,11650,12120,13460,14390,16140,17730,18220,18700,19130,19590,23650,24110,24530,24960,25430,26320,27250,27450,27670,27900,30830,31050,31240,31460,38040,38250,38480,38710,38950,39160,39380,39590,40840,41210,43190,43660,44530,44980,46580,46800,47080,48270,49520,49990,50180,50640,51280,52210,53110,54890,55780,55940,56930,57170,57620,61240,61480,62410,62610,62840,63040,64160,65040,65580,65980,66200,66410,66630,66850,67950,68420,68600,68830,69050,69320,70250,71120,72030,72880,73380,73810,75190,75790,76740,77720,77910,78160,78390,81260,83160,83560,83990,84430,85120,85790,86530,86920,87380,88280,89170,90050,90510,91450,91910,92110,92360,92570,92790,93010,93230,93470,94020,94480,94920,95340,95860,96240,96440,96640,97060,97650,98170,98600,99070,99530,99980,100400,100860,101170,101560,102020,102500,103380,103590,106650,106860,107090,107340,107880,108100,108370,109610,109750,110490,111230,111450,111670,112370,113070,113920,116290,117000,117180,117350,118280,119390,119580,119840,120060,120240,120450,120660,122370,126400,126830,127300,127720,131110,131340,133390,134290,134760,134970,136560,137170,137900,138310,138510,138790,139690,140630,142400,143950,146160,146920,147810,148440],[3940,4400,4860,5710,6130,6560,6930,9300,9500,9720,9980,10160,10590,11230,12110,12570,13000,13930,14830,16600,16810,17980,18450,18890,19360,19790,21940,22300,22710,23130,25460,25680,25880,26110,26320,26540,26830,27030,28120,28320,28540,28760,30930,31160,31350,31570,34400,34640,34880,35080,35300,35500,35750,35970,39850,40290,42670,43850,44750,47070,47510,48350,49130,50430,51080,52200,53100,54890,55410,55670,55880,56040,56500,56710,58060,58280,58510,58740,58960,59180,59380,61040,61490,61690,61940,63250,63490,63720,63940,65310,65780,67960,68410,69400,69830,70040,70660,71110,71570,71770,72470,72870,74270,74470,74720,76190,77150,78620,78840,79060,79260,81260,81470,81710,81930,82160,82400,82620,82850,83360,83790,84210,84650,85350,86000,86720,87600,88930,89830,91220,92140,92360,92560,92780,93000,93210,93460,94110,94590,95030,95450,97600,98030,98510,98950,99400,99850,100300,100770,102000,102480,103380,103600,103840,106560,106770,107000,107230,107490,108360,109680,109980,110190,110850,112370,113320,113540,114100,114360,115800,116040,116500,116690,117100,117300,118250,118470,122590,126590,127070,127520,127970,128660,128880,129300,129760,131600,132060,132710,132900,133170,135850,136060,137180,137890,138780,139690,141050,141920,142160,144230,144700,144930,145140,145350,145550,145870,146240,146720,147140,147820,148440],[4060,4520,4990,5590,6040,6500,6890,11240,12130,12570,13000,15690,15910,17160,20240,20680,21150,21610,22110,22480,22910,23360,29190,29630,30100,30350,30600,30940,31160,31360,31580,39850,40290,44320,47080,48560,48800,50620,53780,54210,54420,54670,54900,55410,55670,55880,56050,61490,61690,61930,62150,63250,63490,63720,64160,64360,64590,64800,68410,70670,72450,72930,73560,75370,75590,77170,85560,87150,88060,89390,90740,91660,92140,92350,92560,92790,93010,93210,93460,94190,94700,95140,97500,97970,98410,98850,99310,99760,100200,100670,102000,102480,104490,108350,110850,112580,114850,115100,115320,118260,118470,118980,124600,124810,125040,125260,125510,125710,125940,126170,133870,137190,138780,139680,140620,142850,143070,143310,146350,148440],[7480,7690,7880,8090,8290,8490,8700,12120,32620,32860,33080,33300,33510,33720,33980,34180,40060,40530,41630,41910,42090,45500,51800,52680,59610,59840,60080,60330,60560,67330,71110,88710,102950,108850,111900,128200,132440,135640,137530,139240,139910,140150,140400,147360,148450],[7570,7780,7980,8190,8390,8570,12120,36220,36440,36680,36920,37160,37370,37580,37810,41000,41420,45690,45890,46120,52010,52900,67560,71100,88490,90290,109240,111890,120940,121140,121430,121670,121900,129960,130160,130370,130700,135180,141510,147570,148430]]
name_array.push('Conan24')
long_array.push(150000)
time_array.push(song)
speed_array.push(10)
score_array.push(0)
src_array.push('./music/conan24.mp3')
song=[[900,1190,1510,1800,2150,2520,2870,3210,3840,4200,4580,5210,5510,5830,6200,10870,11090,11260,11450,11640,11820,12270,12440,13700,13880,14720,14870,15770,15930,16090,16260,16440,16610,16780,16950,17120,20420,20840,21220,21460,21620,21830,22010,22210,23910,24480,24670,24850,25020,25190,26090,28060,28220,28430,28630,32390,36720,36880,36990,37490,38210,39590,40000,40280,40590,40750,40920,48990,49230,53440,53750,54070,54380,54720,55050,55410,55800,56100,56450,56760,57110,57430,58350,58770,59090,59450,59780,60150,60500,60850,61190,61550,61900,62230,62580,62960,63320,63670,63990,65930,66090,66200,71960,72220,75300,75470,75620,75800,78540,78700,78940,79190,79400,79570,79730,79910,80100,80280,80810,81010,85720,87160,88160,93300,93510,93760,95880,99090,99450,101290,101760,101930,102510,102710,103790,103990,104140,106370,107890,109470,109750,109930,110140,110340,110440,111510,111690,111900,112120,112340,112510,112680,112840,113020,113200,113370,113550,113680,117530],[980,1260,1540,1840,2180,2570,2880,3290,3780,4130,4500,4850,5180,5500,5820,6200,7240,7420,7600,7790,10140,10330,10530,10700,12260,12450,13010,13410,13700,13880,14190,14360,14710,14860,15540,15770,15930,16090,16260,16440,16620,16790,16960,17120,18030,19380,19500,19940,20840,21220,21450,21620,21830,22020,22220,23010,23570,23890,24100,24300,24480,24660,24850,25010,25190,25730,26090,26760,26910,27070,27230,30970,31180,31370,31550,32420,35280,35440,35630,35790,36720,36890,36990,37500,38220,38870,39660,40050,40300,40570,40750,40920,41740,41840,41930,42500,43920,47880,47990,48120,48630,49070,49180,49340,49480,49590,51610,51750,52580,52770,52910,53060,53240,53450,53770,54090,54430,54750,55060,55440,55750,56050,56380,56690,57020,57400,57710,58070,58430,58820,59110,59470,59790,60170,60510,60920,61200,61520,61870,62200,62560,62920,63280,63640,63980,64300,64600,64730,65520,66440,68460,68640,69320,72380,72560,74280,75300,75480,75620,75800,76400,76560,77460,77630,78530,78710,79000,79180,79380,79570,79730,79910,80090,80280,80640,80810,81010,81370,85710,87350,88470,89070,91500,92470,93180,93540,93760,94620,94780,95880,96230,96390,96500,99800,100410,101000,101270,101580,101810,102130,102320,102530,102710,103110,103260,103440,103600,104330,104490,104660,104840,104990,105110,105880,106530,107780,108000,109010,109150,109250,109470,109640,109830,109920,110150,110340,110450,110520,111600,111800,112040,112240,112420,112580,112750,112940,113110,113290,113470,113610,116600,116920,117240,117540],[1050,1320,1630,1950,2290,2650,3000,3310,3780,4030,4380,4750,5100,5430,5770,6100,6420,6620,6830,7060,7950,8120,8290,8470,10100,10270,10440,10620,12810,13120,13420,14160,14330,14800,15090,15340,15530,15680,15860,16030,16180,16360,16540,16710,16870,17030,17300,17490,17680,17860,19580,19720,19840,20650,21040,21150,21340,21550,21720,21900,22120,22760,22950,23100,23250,23410,23530,23680,23800,24210,24380,24550,24730,24910,25060,25230,25730,26080,28800,28990,29200,29370,31700,31890,32060,32220,32620,32820,32990,33210,33390,33560,33750,36000,36190,36390,36550,37010,37220,37480,38200,39260,39710,40100,41970,42100,42220,42350,42480,42640,42800,44310,45390,47550,50620,51500,51640,51840,52510,52690,52850,53010,53180,53340,53530,53830,54190,54510,54850,55200,55650,55960,56270,56600,57030,57290,57640,57930,58540,58910,59230,59580,59920,60300,60650,61040,61380,61730,62060,62420,62820,63130,63500,63830,64130,64510,64650,64810,66630,66790,67340,67500,67900,68820,68970,69120,69950,70300,70500,71040,71230,74070,74620,74940,75290,75460,75630,75790,76100,76230,76780,77020,77140,77300,77500,77760,77900,78070,78220,79010,79200,79350,79540,79770,80000,80140,80360,80520,80680,80860,81030,81540,82810,83360,83480,83810,83990,84150,85700,87540,88650,88990,89140,89260,89390,90200,90450,90600,90920,91110,91320,92620,92790,92960,93290,93610,93910,94090,94260,94700,94980,95360,95550,95730,96040,96270,96420,96540,97310,97580,97720,100560,101000,101150,101410,101650,101860,102050,102460,102730,103360,103540,103680,103910,104080,104220,104440,104620,104760,104920,105080,105570,106090,106250,106450,106640,106860,107790,107980,108410,109080,109260,109440,109630,109840,109950,110150,110320,110470,114720,114890,115090,115290,115480,115680,115870,116540,116800,116890,117170,117530],[1150,1420,1740,2040,2410,2760,3410,3610,3960,4290,4650,5000,5350,5660,6020,6610,6840,7060,10830,11000,11160,11340,11540,11730,11880,14350,14470,14810,15090,15340,15540,15680,15870,16030,16180,16350,16530,16710,16860,17040,20060,20220,20360,20640,21040,21160,21340,21560,21730,21900,22120,24220,24380,24560,24740,24900,25070,25240,26100,27360,27540,27730,27910,32720,32990,33210,33390,33570,33760,37010,37220,37500,38210,39830,40200,41340,41490,41650,46750,50780,53570,53940,54270,54610,54970,55320,55570,55860,56180,56500,56870,57240,57530,57890,58630,58980,59300,59660,60000,60360,60740,61110,61330,61710,62030,62380,62760,63100,63470,63800,65710,66020,66180,67430,67600,69740,70120,70390,70560,75300,75470,75640,75790,76240,76910,77590,77730,77920,78070,78230,79100,79360,79530,79870,80130,80340,80520,80690,80860,81040,82980,83300,83450,83600,85710,87980,89000,89140,89270,89390,90030,90380,90540,90700,93360,93670,93910,94090,94260,95360,95560,95730,96920,97100,97480,97650,97820,98190,98370,98540,100680,101030,101290,101700,101950,102720,105220,105560,106520,106860,107890,108100,108410,109460,109790,109950,110140,110460,114630,114810,114990,115190,115380,115580,115770,115950,116620,116920,117230,117550],[8650,8860,9050,9240,9460,9640,9810,9990,12650,13320,14120,18300,18470,18660,18810,18980,19140,22370,22500,25380,29510,29710,29890,30060,33940,34110,34280,34470,38220,42920,43040,44500,46100,47320,48290,48410,48550,48700,48830,50200,52190,58490,58850,59150,59490,59800,59870,60190,60530,60940,61220,61490,61820,62170,62510,62870,63220,63590,63950,65000,66980,68100,68890,69030,71430,72970,73510,73700,73860,75310,75480,75630,75810,76000,81740,81890,82020,84300,84690,84840,84980,85720,87780,88830,91880,92050,92180,94390,95170,96730,98700,100160,100750,100980,101260,101530,102060,102230,102420,102610,102820,102980,107340,108750,110800,111160,113860,114050,114230,114400,116450,116610,116840,117190,117540],[9560,9740,9900,12740,13060,13370,14070,18430,18580,18750,18920,19070,19220,22610,25390,30250,30430,30610,30820,34610,34780,34960,35110,38210,38530,38690,43130,43270,43400,43520,43640,43760,44680,44800,44910,45000,45120,45230,45430,45550,45680,45810,45940,46220,46390,46560,47040,50080,50210,50350,50970,51140,52010,58470,58880,59190,59540,59880,60250,60620,61000,61480,61720,62090,62450,62870,63140,63520,63830,65180,65350,67150,67730,68280,70860,71600,73170,73330,75290,75470,75640,75800,76730,81830,81970,82130,83140,84490,84790,84930,85110,85320,85520,85710,88300,89650,89840,91680,91960,92130,92290,94540,98000,98900,100270,100880,101150,101410,102240,102400,102590,102990,103170,107490,107650,108910,109070,114060,114230,114410,116130,116290,116500,116790,117110,117530]]
name_array.push('666')
long_array.push(135000)
time_array.push(song)
speed_array.push(10)
score_array.push(0)
src_array.push('./music/666.mp3')
song=[[3610,4630,10020,20680,23340,23780,30530,31100,33280,38350,39080,43120,43530,43900,44320,49440,50190,50620,66190,66590,67750,68210,69980,70350,70540,77080,77270,77460,78880,79270,80330,80750,82410,84120,84510,84950,85370,92060,94360,95080,98360],[3620,4620,10310,19480,20040,22540,22960,24190,24590,28860,29450,32090,32700,35240,36780,37200,41560,41930,42330,42720,45190,47890,48220,48610,48990,51400,64070,64720,64920,65150,66010,66370,66780,67570,67950,68390,69210,69390,69580,69750,71060,71330,75440,75860,76710,77070,77280,77460,78720,79050,79450,80140,80540,80970,82190,82570,83000,83200,83750,86230,86610,86960,92060,93590,95090,98350],[3620,4630,10680,19490,20030,22550,22950,24190,24590,28850,29460,32100,32660,35230,35800,36270,41570,41920,42330,42720,45210,47880,48240,48610,48980,51410,64080,64740,64900,65130,66020,66370,66780,67570,67950,68410,69230,69390,69560,69740,71080,71320,75440,75850,76720,77090,77270,77470,78730,79060,79450,80130,80530,80980,82200,82580,83000,83200,83740,86240,86580,86950,92050,93590,95100,98360],[3620,4640,11060,20690,23330,23760,30530,31120,33290,38370,39080,43130,43510,43890,44310,49450,50170,50600,66180,66570,67730,68180,69990,70360,70540,77090,77270,77470,78880,79260,80340,80730,82400,84110,84500,84960,85370,92050,94350,95110,98350],[17800,18460,26150,26900,40380,41200,46640,47480,54030,54670,56820,57300,58340,58510,60310,60860,61640,62420,63210,72910,73530,74150,74700,87690,88580,89290,89930],[16230,16820,25750,26490,39950,40770,46220,47050,53840,54220,55120,55310,57020,57810,60080,60490,61260,62050,62820,72700,73100,73740,74520,75070,87320,87880,88940,89600,90080]]
name_array.push('炎')
long_array.push(106980)
time_array.push(song)
speed_array.push(10)
score_array.push(0)
src_array.push('./music/炎.mp3')
song=[[13280,15090,16880,40920,41340,43930,44150,47630,47870,51570,51930,52260,53190,58030,58280,58500,58720,58970,61700,62170,62390,62620,66330,67020,67250,67690,67960,70920,71680,72400,72830,73460,74180,75810,76270,76520,76940,77230,77680,77890,79510,79710,84760,85270,85740,86100,86430,86670,89870,90300,93110,101830,102100,102330,103050,103970,104220,104920,108770,109500,110170,110680,111120,111550,114130,114360,117790,118470,118910,120180,122370,123020,123310,126280,128870,129070,133230,133690,136460,136810,137180,137430,137870,138110,141110,141780,146660,147440,153990,154920,160410,162290,173690,174280,176900,177120,179940,180350,184470,185180,186140,190950,191200,191420,191650,191880,195440,195650,196030,196470,198340,198740,200230,200660,200900,203910,204580,208400,209020,209450,216170,216650,217360,217790,218210,218660,219120,219420,219680],[8280,8620,8960,11910,12610,13280,13760,14430,15080,15550,16280,16880,18530,18740,21550,22000,24770,25150,25460,28320,28510,32150,39590,40070,40450,40920,41330,43230,43490,43720,46940,47170,47400,50720,51160,53190,55770,56180,58040,58280,58510,58730,58970,61490,61940,62380,62630,65480,65910,66680,67250,67690,67970,70480,70920,71690,72400,72830,73470,74180,74680,75360,76030,76520,76940,77240,77670,77900,79510,79700,83830,84290,84760,85280,86430,86680,89880,90300,93120,100500,100930,101400,102110,102340,103050,103970,104230,104930,107870,108290,109230,109930,110440,111130,111550,113400,113670,113890,117110,117350,117560,118010,118470,118920,119870,120180,121730,122070,122610,123310,125830,126280,128170,128430,128650,132620,132830,133230,133690,135620,136020,137190,137430,137880,138120,140660,141120,141780,144810,145700,152220,153070,159620,161410,167360,168080,168580,173680,174280,176180,176450,176680,179450,179670,180150,180590,180800,181270,181760,183640,184030,184840,186140,188690,189130,190960,191200,191430,191650,191890,194560,195020,195440,195650,196010,196490,198340,198750,200220,200660,200910,203440,203900,204590,207640,208380,209010,209450,216160,216660,217370,217800,218220,218660,219120,219430,219690],[8300,8640,8960,11910,12620,13270,13810,14420,15090,15560,16260,16860,18540,18770,21550,21980,24770,25140,25480,28310,28520,28930,32140,39610,40050,40460,40910,41350,43260,43480,43690,46970,47170,47370,50710,51150,53220,55750,56210,58040,58270,58510,58730,58950,61480,61950,62390,62610,65490,65910,66700,67270,67680,67970,70490,70910,71690,72380,72830,73480,74160,74660,75360,76050,76500,76950,77240,77660,77930,79500,79730,83810,84280,84750,85260,86410,86700,89880,90290,93120,100480,100930,101390,102090,102350,103070,103760,104230,104910,107860,108280,109260,109940,110430,111110,111550,113430,113640,113860,117130,117330,117560,118040,118480,118920,119650,120170,121710,122080,122630,123290,125820,126280,128200,128400,128630,132570,132840,133220,133680,135620,136000,137200,137440,137870,138130,140660,141110,141790,144800,145700,152220,153080,159630,161410,167050,167690,168310,173690,174260,176230,176440,176670,179460,179680,180180,180590,180810,181280,181750,183650,184020,184840,186140,188670,189110,190970,191210,191440,191670,191870,194250,194760,195240,195460,195670,196020,196480,198360,198770,200270,200650,200930,203440,203890,204580,205290,205800,206470,207180,210130,210400,210840,211280,211980,212740,213200,213890,214570,215030,215690,216410,216860,217390,217810,218220,218680,219130,219440,219690],[13280,15090,16870,40910,41340,43940,44150,47640,47870,51560,51940,52250,53220,58050,58270,58520,58740,58950,61700,62160,62400,62600,66320,66990,67270,67680,67960,70910,71700,72380,72820,73470,74160,75820,76250,76510,76960,77240,77670,77920,79500,79730,84750,85260,85730,86100,86420,86700,89890,90300,93120,101820,102100,102350,103070,103760,104220,104920,108760,109490,110180,110670,111120,111540,114130,114360,117800,118470,118920,119650,120170,122360,123010,123290,126270,128880,129090,133220,133680,136470,136800,137200,137440,137860,138120,141100,141800,146660,147440,153980,154920,160420,162290,173680,174260,176900,177120,179890,180350,184480,185190,186150,190960,191190,191440,191660,191870,195450,195660,196020,196480,198350,198760,200260,200650,200920,203880,204590,210140,210400,210840,211280,211980,212740,213190,213890,214570,215040,215700,216410,216860,217380,217810,218220,218680,219140,219430,219690],[3020,3720,4260,4910,5670,6380,7110,7820,10100,17740,19260,20190,21140,23920,24390,26620,27600,29350,31200,31660,34680,36660,38220,38780,39170,42360,42790,45550,46490,48770,49740,52900,54810,55360,57120,57560,60310,63530,64530,69610,70080,78660,80180,81100,82060,82960,87610,88480,89430,92130,92610,96810,97490,99120,99720,100230,106480,107170,107620,112510,112980,115760,116620,121040,121490,124830,125380,127210,127730,130460,131390,131940,132330,134610,139670,140200,143350,143880,150390,151210,157700,158640,163260,169170,169910,175310,175760,178530,182700,185850,187570,188180,190000,190490,193260,197400,199620,202510,203000],[2650,3360,3970,4520,5230,5910,6760,7530,8050,9850,17360,18060,19030,19930,20890,22980,23440,26400,27350,28910,30270,30730,34000,35910,37990,38540,38980,39380,42120,42550,43010,45020,46030,46710,48290,49450,49920,52510,54360,55120,56860,57320,57800,59820,60760,63090,64230,64730,69330,69830,78320,79030,79980,80860,81820,82520,87400,88210,89180,91210,91650,94980,95600,98850,99440,99990,106210,106850,107390,112310,112740,113190,115250,116180,116840,120780,121280,124490,125120,127020,127480,127950,129990,130920,131730,132160,134370,134840,139380,139970,142950,143660,148480,149400,155900,156790,163260,168840,169530,170140,175090,175530,175960,178060,179010,182480,182910,185440,187240,187920,189830,190250,190700,192760,193680,197170,197600,199180,199980,202170,202770]]
name_array.push('THE HERO')
long_array.push(224980)
time_array.push(song)
speed_array.push(10)
score_array.push(0)
src_array.push('./music/the hero.mp3')
song=[[6210,11750,17110,18880,22310,23490,23760,25150,27200,27370,30560,30840,33480,33740,41600,41650,44090,46370,46810,47580,47950,49470,53100,53380,54540,54960,55260,57140,59710,60120,60570,60900,61070,62740,64770,65050,65610,71650,71940,72410,73900,75440,77460,79230,84470,85910,86340,87260,87520,88160,88320,88810,88980,89400,89510,89660,89820,90480,93300,96960,98430,99950,101640,105820,106200,107280,108460,111520,111970,112300,113490,115310,115970,116430,116690,116970,122600,122800,123070,126720,126890,127070,127230,127440,127650,129780,130340,131470,137060,137210,137740,137890,138480],[3530,4220,4390,4830,6320,7230,7590,7940,8310,9250,9320,9400,9740,9800,10830,11920,13430,13770,13860,14500,14760,15320,15580,15860,16340,16700,17520,17980,18450,19320,19960,20760,21950,23110,23280,24560,25630,26080,26410,26600,28310,29080,31070,32380,32590,33150,33350,34430,34980,35590,35970,36630,37310,37820,37930,38770,39390,39930,40660,40730,42480,42820,44420,45570,45630,45740,48220,49470,49830,50470,50710,51270,51580,51940,52380,52780,53750,55640,56310,56800,57140,57720,58290,58970,59370,61950,63450,63760,63980,66490,69570,69770,69910,70150,70410,70610,70820,73290,75440,75880,76350,77070,77990,78860,79920,82980,83360,84720,85910,86340,87260,87520,88160,88320,88810,88980,89400,89510,89660,89820,90480,91290,91960,96530,97060,97360,97600,98290,98490,98930,99220,99610,99740,100380,100930,101300,101410,101760,103100,103240,103560,103850,104040,104310,104680,105140,105520,106540,106920,107780,109180,110300,110550,110760,111450,112830,113630,113970,114640,115530,116230,116470,116730,117180,117420,117820,119380,119460,119620,120180,120650,120720,120940,121230,121460,121760,121960,122250,123460,123680,123760,124260,124870,125780,125900,126180,126440,127880,128150,128320,128480,128650,129520,130860,131470,137340,137460,137590,138120,138260,138480],[4300,4640,6490,7770,8240,9290,9380,9460,9770,12580,13430,13930,14410,14560,14620,14820,15210,15460,15740,15810,15950,16220,16410,16610,16880,17270,17720,18640,20200,21770,23240,23360,24830,25900,26500,26710,29810,31160,31900,32080,32450,32690,33270,33570,34410,35430,36160,36750,37130,37880,39630,40680,41630,42980,44730,45880,46100,46240,48120,49470,49990,50340,50560,50660,50780,50990,51420,51760,51860,51990,52210,52460,52680,53480,54720,55640,58630,59280,59460,61970,63690,63880,64360,70320,70490,70710,72550,72730,72950,75140,75440,76170,77180,77690,78590,79130,79920,81950,83750,84810,86620,86920,87760,88060,88470,88680,88910,89380,89460,89590,89750,90480,91290,93990,96750,97110,97490,97770,98610,99320,99840,101230,101330,101930,103180,104200,104390,104830,105220,105990,106240,107190,109120,109270,109520,109850,109980,110480,110640,111320,112580,113650,114370,114920,116230,116580,116820,117280,119270,119530,119800,120510,120870,121390,121650,122350,123940,125420,125830,126110,126290,126670,127960,128250,128390,128580,130630,131470,137150,137260,137740,137890,138480],[7140,7380,18340,20360,21600,23690,24340,25340,27290,27430,31260,31800,33480,33740,36250,36880,40240,42660,45170,47410,49470,53250,53920,55250,55640,55960,56620,57470,57950,59960,60370,61260,61540,61770,62760,65340,65810,66100,66300,66790,67140,67310,71110,71310,71480,73660,75440,76510,76660,77290,78330,81260,85260,86620,86920,87760,88060,88470,88680,88910,89380,89460,89590,89750,90480,92710,96840,97670,99130,100280,104470,104910,105340,106760,108140,112140,113010,114240,115810,116340,116640,116890,118710,123140,123300,126860,127060,127200,127360,127550,127730,130160,131470,137400,137540,138170,138280,138480],[8810,13060,13120,38460,68060,68620,69150,94960,124520,128820,129250],[9180,9950,13090,38770,68350,68770,69400,79540,95710,124520,129070,129230]]
name_array.push('TEmPTaTiON')
long_array.push(147000)
time_array.push(song)
speed_array.push(10)
score_array.push(0)
src_array.push('./music/TEmPTaTiON.mp3')
song=[[15620,18910,22960,27330,28720,29530,29740,34480,34910,36350,36550,36760,36950,37200,40510,40740,43020,44960,48270,50740,51750,57270,57970,60670,61230,61640,62050,75840,77990,78810,79300,86790,97560,101450,156490,158320,160420,160600,164320,167770,168580,170260,172850,177580,178430,178610,178800,184720,187440],
[14850,16640,17980,18550,20330,22150,22560,24710,25430,26730,27900,28390,31920,32800,33850,35310,35640,38700,39310,39750,40140,42590,43460,44520,45770,46440,47380,49200,50090,54340,55250,57560,58680,59090,59510,59920,60390,75670,76870,77440,77760,79880,80940,81310,82490,82870,83540,84780,85450,87680,89440,95100,95490,95880,96230,97760,98850,99710,100800,102150,102560,103430,104470,106620,108710,110490,110890,111310,111700,112190,112550,112820,113520,113930,114300,114600,115210,115670,115970,116540,116930,117360,117670,118170,118460,118890,119420,119760,120410,120780,121180,121480,121890,122380,122820,123250,123700,124240,153090,156230,156910,157440,158700,158820,158970,163450,163890,165750,166830,167980,169330,170770,171360,172440,173420,175440,176270,176780,177920,179360,180110,182140,182920,183240,183610,185090,186780,187750,188260,188490],
[15170,16810,18420,19520,20880,22260,22740,23740,23860,24360,25630,25840,26900,27990,28960,32390,33330,34250,35160,35500,35830,37490,37920,40960,41260,41480,41680,42830,44280,45170,45950,47690,48690,49630,53840,54770,55840,56960,59090,59510,59920,60390,62380,75780,77100,77590,78620,78920,79490,82270,82700,83120,85200,87310,88920,93380,93780,94220,94620,97970,98240,99440,100650,101110,101690,102370,103230,104630,104830,107150,107480,107780,108330,112190,112570,112820,113520,118370,118710,120160,120790,123250,154200,154360,154650,154900,155650,157250,157990,159360,159790,159990,162180,162370,163210,164130,164520,164730,164940,165110,166430,170960,171870,172630,173610,174860,175230,177170,178220,179210,180490,182300,182580,182740,183440,183970,185500,186590,187240,187570],
[15760,18690,21740,24880,27690,28540,29920,30270,30610,31260,34670,43240,44740,46640,46840,50430,51340,55490,56520,75960,77870,80530,81770,83340,85780,88240,96670,99190,100450,102700,109210,109520,109890,113930,114300,114600,115210,115670,115970,117180,118470,122340,155450,157580,160840,162560,163210,167080,167520,168320,169110,169810,170570,171730,172990,175770,175970,177760,179560,183790,185900,186980,187970],
[17340,26450,52490,53480,91700,92080,92330,92720,104060,104220,105580,105780,161700,165380,174120,174210,180970,189120,189310,189520,190270,190460],
[17490,26630,52180,52900,89890,90400,90730,91250,103880,105910,161330,161470,165560,174430,180690,181240,181420,181600,188840,189700,189840,190650,190850]]
name_array.push('永遠的不在場證明')
long_array.push(195000)
time_array.push(song)
speed_array.push(10)
score_array.push(0)
src_array.push('./music/永遠的不在場證明.mp3')